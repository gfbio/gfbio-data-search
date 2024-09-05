import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { Moment } from 'moment';

const moment = _moment;

const COLLECTION_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const PUBLICATION_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-filter-date-picker',
  templateUrl: './filter-date-picker.component.html',
  styleUrls: ['./filter-date-picker.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useFactory: (component: FilterDatePickerComponent) => {
        return component.datePicker.type === 'publication' ? PUBLICATION_FORMATS : COLLECTION_FORMATS;
      },
      deps: [FilterDatePickerComponent]
    },
  ],
})
export class FilterDatePickerComponent implements OnInit, OnChanges {
  @Input() datePicker;
  @Input() filters;
  @Input() filterValues;
  @Output() chosenDate = new EventEmitter<any>();
  start: Moment | null;
  startFormat: string;
  end: Moment | null;
  endFormat: string;
  openChart = true;

  maxDate: Moment = moment(); // Set max date to today

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dateAdapter: DateAdapter<Moment>
  ) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.openChart = false;
      }
    });
  }

  ngOnInit(): void {
    this.initializeDates();
    this.updateDateFormat();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.filters || changes.filterValues) {
      this.initializeDates();
    }
    if (changes.datePicker) {
      this.updateDateFormat();
    }
  }

  updateDateFormat(): void {
    const formats = this.datePicker.type === 'publication' ? PUBLICATION_FORMATS : COLLECTION_FORMATS;
    this.dateAdapter.setLocale(formats.display.dateInput);
  }

  initializeDates(): void {
    this.start = null;
    this.end = null;
    this.startFormat = '';
    this.endFormat = '';

    const dateFields = this.datePicker.type === 'collection' 
      ? { start: 'maxDateTime', end: 'minDateTime' }
      : { start: 'citation_yearFacet', end: 'citation_yearFacet' };

    for (const filter of this.filters) {
      if (filter.range) {
        if (filter.range[dateFields.start] && filter.range[dateFields.start].gte) {
          this.start = moment(filter.range[dateFields.start].gte);
          this.startFormat = this.formatDate(this.start);
        }
        if (filter.range[dateFields.end] && filter.range[dateFields.end].lte) {
          this.end = moment(filter.range[dateFields.end].lte);
          this.endFormat = this.formatDate(this.end);
        }
      }
    }
  }

  setDate(event: MatDatepickerInputEvent<Moment>, type: 'start' | 'end'): void {
    const date = event.value;
    if (date && date.isSameOrBefore(this.maxDate, 'day')) {
      if (type === 'start') {
        this.start = date;
        this.startFormat = this.formatDate(date);
      } else {
        this.end = date;
        this.endFormat = this.formatDate(date);
      }
    }
  }

  chooseYear(normalizedYear: Moment, type: 'start' | 'end'): void {
    if (normalizedYear.isSameOrBefore(this.maxDate, 'year')) {
      if (type === 'start') {
        this.start = normalizedYear.startOf('year');
        this.startFormat = this.formatDate(this.start);
      } else {
        this.end = normalizedYear.endOf('year');
        this.endFormat = this.formatDate(this.end);
      }
    }
  }

  formatDate(date: Moment): string {
    return this.datePicker.type === 'publication' ? date.format('YYYY') : date.format('YYYY-MM-DD');
  }

  applyDate(): void {
    let startValue = this.start ? this.formatDate(this.start) : null;
    let endValue = this.end ? this.formatDate(this.end) : null;

    const typeAndValues = [startValue, endValue];
    this.chosenDate.emit(typeAndValues);
  }

  // Date filter function to prevent future dates
  dateFilter = (date: Moment | null): boolean => {
    return date ? date.isSameOrBefore(this.maxDate, 'day') : false;
  }
}

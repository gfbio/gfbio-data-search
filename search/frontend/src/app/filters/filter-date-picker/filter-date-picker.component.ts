import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { FormControl } from '@angular/forms';
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
        return component.isPublicationType() ? PUBLICATION_FORMATS : COLLECTION_FORMATS;
      },
      deps: [FilterDatePickerComponent]
    },
  ],
})
export class FilterDatePickerComponent implements OnInit, OnChanges {
  @Input() datePicker: any = { type: 'collection', icon: 'calendar_today', title: 'Date' };
  @Input() filters: any[] = [];
  @Input() filterValues: any = {};
  @Output() chosenDate = new EventEmitter<any>();
  start: Moment | null = null;
  startFormat: string = '';
  end: Moment | null = null;
  endFormat: string = '';
  openChart = true;

  maxDate: Moment = moment();
  startControl = new FormControl('', [this.dateValidator.bind(this)]);
  endControl = new FormControl('', [this.dateValidator.bind(this)]);

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
    const formats = this.isPublicationType() ? PUBLICATION_FORMATS : COLLECTION_FORMATS;
    this.dateAdapter.setLocale(formats.display.dateInput);
  }

  initializeDates(): void {
    this.start = null;
    this.end = null;
    this.startFormat = '';
    this.endFormat = '';

    const dateFields = this.isPublicationType()
      ? { start: 'citation_yearFacet', end: 'citation_yearFacet' }
      : { start: 'maxDateTime', end: 'minDateTime' };

    for (const filter of this.filters) {
      if (filter.range) {
        if (filter.range[dateFields.start] && filter.range[dateFields.start].gte) {
          this.start = moment(filter.range[dateFields.start].gte);
          this.startFormat = this.formatDate(this.start);
          this.startControl.setValue(this.startFormat);
        }
        if (filter.range[dateFields.end] && filter.range[dateFields.end].lte) {
          this.end = moment(filter.range[dateFields.end].lte);
          this.endFormat = this.formatDate(this.end);
          this.endControl.setValue(this.endFormat);
        }
      }
    }
  }

  validateDateRange(): void {
    if (this.start && this.end && this.end.isBefore(this.start)) {
      this.endControl.setErrors({ endBeforeStart: true });
    } else {
      // Clear the error if it exists and there are no other errors
      const endErrors = this.endControl.errors;
      if (endErrors) {
        delete endErrors.endBeforeStart;
        if (Object.keys(endErrors).length === 0) {
          this.endControl.setErrors(null);
        } else {
          this.endControl.setErrors(endErrors);
        }
      }
    }
  }

  setDate(event: MatDatepickerInputEvent<Moment> | Moment, type: 'start' | 'end'): void {
    let date: Moment;
    if (moment.isMoment(event)) {
      // This is a year selection from the publication date picker
      date = event;
    } else {
      // This is a regular date selection
      date = event.value as Moment;
    }

    if (date && date.isValid() && date.isSameOrBefore(this.maxDate, this.isPublicationType() ? 'year' : 'day')) {
      if (type === 'start') {
        this.start = this.isPublicationType() ? date.clone().startOf('year') : date;
        this.startFormat = this.formatDate(this.start);
        this.startControl.setValue(this.startFormat);
      } else {
        this.end = this.isPublicationType() ? date.clone().endOf('year') : date;
        this.endFormat = this.formatDate(this.end);
        this.endControl.setValue(this.endFormat);
      }
      this.validateDateRange();
    }
  }

  manualInput(event: any, type: 'start' | 'end'): void {
    const input = event.target.value;
    const control = type === 'start' ? this.startControl : this.endControl;

    if (input === '') {
      // Handle empty input
      if (type === 'start') {
        this.start = null;
        this.startFormat = '';
      } else {
        this.end = null;
        this.endFormat = '';
      }
      control.setValue('', { emitEvent: false });
      control.markAsPristine();
      control.markAsUntouched();
      return;
    }

    const momentDate = this.parseDate(input);

    if (momentDate && momentDate.isValid()) {
      if (type === 'start') {
        this.start = momentDate;
        this.startFormat = this.formatDate(this.start);
      } else {
        this.end = momentDate;
        this.endFormat = this.formatDate(this.end);
      }
      control.setValue(this.formatDate(momentDate));
      this.validateDateRange();
    } else {
      control.setErrors({ invalidDate: true });
    }
  }

  parseDate(input: string): Moment | null {
    if (this.isPublicationType()) {
      return moment(input, 'YYYY', true);
    } else {
      return moment(input, 'YYYY-MM-DD', true);
    }
  }

  dateValidator(control: FormControl) {
    const input = control.value;
    if (!input) {
      return null; // Empty input is considered valid
    }
    const momentDate = this.parseDate(input);

    if (!momentDate || !momentDate.isValid()) {
      return { invalidDate: true };
    }
    if (momentDate.isAfter(this.maxDate)) {
      return { futureDate: true };
    }
    return null;
  }


  formatDate(date: Moment): string {
    return this.isPublicationType() ? date.format('YYYY') : date.format('YYYY-MM-DD');
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

  isPublicationType(): boolean {
    return this.datePicker && this.datePicker.type === 'publication';
  }
}

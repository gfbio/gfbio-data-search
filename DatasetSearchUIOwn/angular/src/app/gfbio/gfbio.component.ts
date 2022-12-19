import {Component, OnInit} from '@angular/core';
import {CommunicationService} from '../services/local/communication.service';
import {Result} from '../models/result/result';
import {StartSearchingService} from '../services/local/start-searching.service';
import {SearchResult} from '../interface/search-result';
import {Filters} from '../interface/filters';
import {SearchInput} from '../interface/search-input';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-gfbio',
    templateUrl: './gfbio.component.html',
    styleUrls: ['./gfbio.component.css']
})
export class GfbioComponent implements OnInit, SearchResult, Filters, SearchInput {
    semantic = false;
    resetFilters = true;
    result: Result;
    searchKey = [];
    from = 0;
    filters;
    markers;
    searchKeyFromQuery = "";

    constructor(private communicationService: CommunicationService,
                private startSearchingService: StartSearchingService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        let filterFromUri = this.route.snapshot?.queryParamMap?.get("filter") ?? "";
        if(filterFromUri != "") {
            this.filters = JSON.parse(decodeURIComponent(filterFromUri));
        }
        
        this.semantic = (this.route.snapshot?.queryParamMap?.get("s")) == "1";

        let queryFromUri = decodeURIComponent(this.route.snapshot?.queryParamMap?.get("q") ?? "");        
        if( queryFromUri != "" && !queryFromUri.match(/(\<|\>)/)) {
            this.searchKeyFromQuery = queryFromUri;
            this.searchKey = [queryFromUri];
        }
        this.startSearching();
        this.communicationService.getResult().subscribe(value => {
            if (value !== undefined) {
                this.result = value;
            }
        });
    }

    mapItems(items): void {
        this.markers = {items};
    }

    paginationClicked(from): void {
        this.resetFilters = false;
        this.from = from;
        this.startSearching();
    }

    searchKeySubmitted(key): void {
        this.resetFilters = true;
        this.searchKey = key[0];
        this.semantic = key[1];
        this.from = 0;
        this.filters = [];
        this.startSearching();
    }

    filterSubmitted(filters): void {
        this.resetFilters = false;
        this.filters = filters;
        this.from = 0;
        this.startSearching();
    }

    startSearching(): void {
        this.setPageUrl();
        this.startSearchingService.startSearching(this.searchKey, this.semantic, this.from, this.filters);
    }

    setPageUrl(): void {
        var parameters = [
            (this.searchKey?.join("")) ? "q=" + this.searchKey.join("+") : null,
            this.semantic ? "s=1" : null,
            this.filters?.length > 0 ? "filter=" + JSON.stringify(this.filters) : null,
        ].filter(p => p);
        this.location.go((parameters.length > 0) ? "?" + parameters.join("&") : "");
    }
}

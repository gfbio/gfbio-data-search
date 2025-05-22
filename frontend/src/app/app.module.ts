import { HttpClientModule } from "@angular/common/http";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from "ngx-google-analytics";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxSpinnerModule } from "ngx-spinner";
import "reflect-metadata";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BasketDialogComponent } from "./basket-dialog/basket-dialog.component";
import { CitationComponent } from "./citation/citation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ContextBoxComponent } from "./context-box/context-box.component";
import { FilterBoxComponent } from "./filters/filter-box/filter-box.component";
import { FilterDatePickerComponent } from "./filters/filter-date-picker/filter-date-picker.component";
import { FiltersComponent } from "./filters/filters.component";
import { OtherFiltersComponent } from "./filters/other-filters/other-filters.component";
import { GfbioComponent } from "./gfbio/gfbio.component";
import { MapComponent } from "./map/map.component";
import { MaterialModule } from "./material-module";
import { PaginationComponent } from "./pagination/pagination.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { DescriptionComponent } from "./search-result/description/description.component";
import { ResultItemComponent } from "./search-result/result-item/result-item.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { SuggestionWindowComponent } from "./suggestion-window/suggestion-window.component";
import { ChangelogComponent } from "./changelog/changelog.component";

import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { initializeKeycloak } from "./utils/app.init";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavigationComponent,
    GfbioComponent,
    SearchInputComponent,
    SearchResultComponent,
    PaginationComponent,
    SuggestionWindowComponent,
    FilterBoxComponent,
    CitationComponent,
    FiltersComponent,
    OtherFiltersComponent,
    FilterDatePickerComponent,
    BasketDialogComponent,
    ResultItemComponent,
    DescriptionComponent,
    ContextBoxComponent,
    MapComponent,
    ChangelogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    // JwPaginationModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    PaginationModule,
    NgxGoogleAnalyticsModule.forRoot("G-F96NGEWFKC"),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

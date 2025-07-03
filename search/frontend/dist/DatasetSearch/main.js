(self["webpackChunkDatasetSearch"] = self["webpackChunkDatasetSearch"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gfbio/gfbio.component */ 520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




//import {BioDivComponent} from './bio-div/bio-div.component';
const routes = [
// { path: '', component: GfbioComponent, canActivate: [AuthGuard] },
{
  path: "",
  component: _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_0__.GfbioComponent
}];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ 7550);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keycloak-angular */ 3950);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 9735);







class AppComponent {
  keycloakService;
  isLoggedIn = false;
  userProfile = null;
  user = "";
  indexes = [{
    key: "gfbio",
    link: "/"
  }
  /*, {
                  key: 'biodiv',
                  link: '/bio-div'
              }*/];
  constructor(keycloakService) {
    this.keycloakService = keycloakService;
  }
  initializeUserOptions() {
    try {
      this.user = this.keycloakService.getUsername();
      this.keycloakService.loadUserProfile().then(profile => {
        console.log(profile.username);
        console.log(profile["attributes"]); //gives you array of all attributes of user, extract what you need
      });
    } catch {
      this.user = null;
    }
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.initializeUserOptions();
      if (yield _this.keycloakService.isLoggedIn()) {
        _this.userProfile = yield _this.keycloakService.loadUserProfile();
      }
      // this.isLoggedIn = await this.keycloakService.isLoggedIn();
      // if (this.isLoggedIn) {
      //     this.userProfile = await this.keycloakService.loadUserProfile();
      //     console.log(this.userProfile);
      // }
    })();
  }
  login() {
    this.keycloakService.login();
  }
  logout() {
    this.keycloakService.logout();
  }
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_5__.KeycloakService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 5,
    vars: 0,
    consts: [[1, "position-relative"], [1, "main-content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ 9735);
/* harmony import */ var _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gfbio/gfbio.component */ 520);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-input/search-input.component */ 3949);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-result/search-result.component */ 7903);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination/pagination.component */ 695);
/* harmony import */ var _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./suggestion-window/suggestion-window.component */ 9415);
/* harmony import */ var _filters_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filter-box/filter-box.component */ 8225);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ 1060);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 2132);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _citation_citation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./citation/citation.component */ 3428);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/filters.component */ 5934);
/* harmony import */ var _filters_other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filters/other-filters/other-filters.component */ 4704);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reflect-metadata */ 7550);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _filters_filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./filters/filter-date-picker/filter-date-picker.component */ 7993);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material-module */ 828);
/* harmony import */ var _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./basket-dialog/basket-dialog.component */ 7437);
/* harmony import */ var _search_result_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-result/result-item/result-item.component */ 1906);
/* harmony import */ var _search_result_description_description_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-result/description/description.component */ 6339);
/* harmony import */ var _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./context-box/context-box.component */ 1442);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./map/map.component */ 3398);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! keycloak-angular */ 3950);
/* harmony import */ var _utils_app_init__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/app.init */ 6416);


































class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_22__.APP_INITIALIZER,
      useFactory: _utils_app_init__WEBPACK_IMPORTED_MODULE_21__.initializeKeycloak,
      multi: true,
      deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_23__.KeycloakService]
    }, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.Title],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_23__.KeycloakAngularModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_30__.LeafletModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__.PaginationModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__.NavigationComponent, _gfbio_gfbio_component__WEBPACK_IMPORTED_MODULE_4__.GfbioComponent, _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_5__.SearchInputComponent, _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_6__.SearchResultComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__.PaginationComponent, _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_8__.SuggestionWindowComponent, _filters_filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_9__.FilterBoxComponent, _citation_citation_component__WEBPACK_IMPORTED_MODULE_10__.CitationComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_11__.FiltersComponent, _filters_other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_12__.OtherFiltersComponent, _filters_filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_14__.FilterDatePickerComponent, _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_16__.BasketDialogComponent, _search_result_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_17__.ResultItemComponent, _search_result_description_description_component__WEBPACK_IMPORTED_MODULE_18__.DescriptionComponent, _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_19__.ContextBoxComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_20__.MapComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_23__.KeycloakAngularModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__.FontAwesomeModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_29__.NgxSpinnerModule, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_30__.LeafletModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_15__.MaterialModule, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__.PaginationModule]
  });
})();

/***/ }),

/***/ 7437:
/*!**********************************************************!*\
  !*** ./src/app/basket-dialog/basket-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasketDialogComponent: () => (/* binding */ BasketDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/result/hit */ 9421);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ 4029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/remote/node.service */ 5659);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ 3950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 702);












function BasketDialogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 15);
  }
}
function BasketDialogComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BasketDialogComponent_table_12_tr_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r7.textTooltipBasketDataAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r9.textTooltipBasketDataNotAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r12.textTooltipBasketMetadataAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r14.textTooltipBasketMetadataNotAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r17.textTooltipBasketMultimediaAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r19.textTooltipBasketMultimediaNotAvailable);
  }
}
function BasketDialogComponent_table_12_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22)(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BasketDialogComponent_table_12_tr_10_div_4_Template, 1, 0, "div", 25)(5, BasketDialogComponent_table_12_tr_10_ng_template_5_Template, 2, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(7, BasketDialogComponent_table_12_tr_10_ng_template_7_Template, 2, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(9, BasketDialogComponent_table_12_tr_10_div_9_Template, 1, 0, "div", 25)(10, BasketDialogComponent_table_12_tr_10_ng_template_10_Template, 2, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(12, BasketDialogComponent_table_12_tr_10_ng_template_12_Template, 2, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(14, BasketDialogComponent_table_12_tr_10_div_14_Template, 1, 0, "div", 25)(15, BasketDialogComponent_table_12_tr_10_ng_template_15_Template, 2, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"])(17, BasketDialogComponent_table_12_tr_10_ng_template_17_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td", 23)(20, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasketDialogComponent_table_12_tr_10_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.remove(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", item_r5.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", item_r5.getTitle(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getData())("ngIfThen", _r8)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getMetadata())("ngIfThen", _r13)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r5.getLinkage().getMultimedia())("ngIfThen", _r18)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r4.textTooltipBasketRemove);
  }
}
function BasketDialogComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 18)(1, "thead")(2, "tr", 19)(3, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Your selected datasets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BasketDialogComponent_table_12_tr_10_Template, 23, 12, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.data);
  }
}
function BasketDialogComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.textTooltipBasketEmpty, " ");
  }
}
const _c0 = a0 => [a0];
class BasketDialogComponent {
  dialogRef;
  data;
  nodeService;
  keycloakService;
  // text for mouseover
  textTooltipBasketVATvisualizable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketVATvisualizable;
  textTooltipBasketVATnotVisualizable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketVATnotVisualizable;
  textTooltipBasketDataAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketDataAvailable;
  textTooltipBasketDataNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketDataNotAvailable;
  textTooltipBasketMetadataAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMetadataAvailable;
  textTooltipBasketMetadataNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMetadataNotAvailable;
  textTooltipBasketMultimediaAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMultimediaAvailable;
  textTooltipBasketMultimediaNotAvailable = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketMultimediaNotAvailable;
  textTooltipBasketRemove = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketRemove;
  textTooltipBasketRemoveSure = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketRemoveSure;
  textTooltipBasketEmpty = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTooltipBasketEmpty;
  spinner = false;
  savedData = [];
  user;
  collectionId = ``;
  linkToVatForVisualization = ``;
  vatButtonText = `visualize in VAT`;
  vatUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.vatRootUrl;
  constructor(dialogRef, data, nodeService, keycloakService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.nodeService = nodeService;
    this.keycloakService = keycloakService;
  }
  ngOnInit() {
    this.initializeUserOptions();
  }
  remove(item) {
    const index = this.data.indexOf(item);
    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }
  downloadZip() {
    this.spinner = true;
    const basket = {
      basket: this.data
    };
    this.nodeService.basketDownload(basket).subscribe(data => this.downloadSuccess(data), err => this.downloadFailed());
  }
  downloadFailed() {
    alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertBasketErrorDownload);
    this.spinner = false;
  }
  downloadSuccess(blob) {
    const a = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);
    a.href = objectUrl;
    a.click();
    URL.revokeObjectURL(objectUrl);
    this.spinner = false;
  }
  sendBasketToCollectionService(collectionId) {
    this.spinner = true;
    this.linkToVatForVisualization = '';
    const basket = {
      basket: this.data
    };
    if (collectionId.length > 0) {
      this.nodeService.updateBasketInCollection(basket, this.user, collectionId).subscribe(data => this.sendCollectionSuccess(data), err => this.sendCollectionFailed(err));
    } else {
      this.nodeService.postBasketToCollection(basket, this.user).subscribe(data => this.sendCollectionSuccess(data), err => this.sendCollectionFailed(err));
    }
  }
  sendCollectionFailed(err) {
    console.log('sendCollectionFailed | err');
    console.log(err);
    this.linkToVatForVisualization = ``;
    this.collectionId = ``;
    this.spinner = false;
  }
  sendCollectionSuccess(data) {
    this.linkToVatForVisualization = ``;
    if ('id' in data) {
      this.collectionId = `${data.id}`;
      this.linkToVatForVisualization = `${this.vatUrl}/#/?collectionId=${data.id}`;
      window.open(this.linkToVatForVisualization, '_blank');
    }
    this.spinner = false;
  }
  emptyBasket() {
    const r = confirm('Are you sure that you want to empty the basket?');
    if (r === true) {
      this.data.splice(0, this.data.length);
    }
  }
  initializeUserOptions() {
    try {
      this.user = this.keycloakService.getUsername();
      if (this.user !== undefined) {
        this.nodeService.readFromBasket(this.user).subscribe(result => {
          if (result.length !== 0) {
            const basket = JSON.parse(result[0]?.basketcontent)?.selected;
            basket.forEach(item => {
              const hit = (0,class_transformer__WEBPACK_IMPORTED_MODULE_4__.plainToClass)(_models_result_hit__WEBPACK_IMPORTED_MODULE_1__.Hit, item);
              this.savedData.push(hit);
            });
          }
        });
      } else {
        this.user = null;
      }
    } catch {
      this.user = null;
    }
  }
  static ɵfac = function BasketDialogComponent_Factory(t) {
    return new (t || BasketDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_2__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_6__.KeycloakService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BasketDialogComponent,
    selectors: [["app-basket-dialog"]],
    decls: 28,
    vars: 11,
    consts: [[1, "position-relative"], ["class", "bg-spinner", 4, "ngIf"], ["class", "Absolute-Center", 4, "ngIf"], ["mat-dialog-title", "", 1, "flex-container"], [1, "dialog-title"], ["mat-button", "", "cdkFocusInitial", "", 1, "close-icon", 3, "mat-dialog-close"], ["mat-dialog-content", ""], [1, "p-4"], ["class", "mat-table", "id", "table", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["align", "end", 1, "mt-3"], [1, "btn", "btn-danger", "mr-3", 3, "disabled", "click"], ["inline", "true"], [1, "btn", "btn-primary", "btn-blue", "mr-3", 3, "disabled", "click"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "bg-spinner"], [1, "Absolute-Center"], ["src", "assets/gif/loading-icon.jpg", "alt", "", "width", "50"], ["id", "table", 1, "mat-table"], [1, "mat-header-row"], ["scope", "col", 1, "mat-header-cell"], ["class", "mat-row", 4, "ngFor", "ngForOf"], [1, "mat-row"], [1, "mat-cell"], [1, "overFlowText", "w-200p", 3, "innerHTML", "matTooltip"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlockData", ""], ["elseBlockData", ""], ["thenBlockMeta", ""], ["elseBlockMeta", ""], ["thenBlockMedia", ""], ["elseBlockMedia", ""], [1, "iconButton", 3, "click"], [1, "text-danger", 3, "matTooltip"], [1, "px-1", 3, "matTooltip"], [1, "fas", "fa-table"], [1, "half-opacity", "px-1", 3, "matTooltip"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-photo-video"], [1, "text-danger"]],
    template: function BasketDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BasketDialogComponent_div_1_Template, 1, 0, "div", 1)(2, BasketDialogComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 3)(5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Dataset Basket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BasketDialogComponent_table_12_Template, 11, 1, "table", 8)(13, BasketDialogComponent_div_13_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-dialog-actions", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_15_listener() {
          return ctx.emptyBasket();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Empty the basket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_19_listener() {
          return ctx.downloadZip();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BasketDialogComponent_Template_button_click_24_listener() {
          return ctx.sendBasketToCollectionService(ctx.collectionId);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mat-dialog-close", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.data));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.data.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.vatButtonText, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3428:
/*!************************************************!*\
  !*** ./src/app/citation/citation.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CitationComponent: () => (/* binding */ CitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/result/hit */ 9421);







function CitationComponent_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const creator_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", creator_r5, ", ");
  }
}
function CitationComponent_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r4.result.getDOI(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.result.getDOI());
  }
}
function CitationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitationComponent_div_8_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CitationComponent_div_8_a_5_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.result.getCreator());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.result.getPubYear(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.result.getTitle(), ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.result.getDOI() !== "undefined");
  }
}
function CitationComponent_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const creator_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", creator_r8, ", ");
  }
}
function CitationComponent_div_9_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r7.result.getDOI(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.result.getDOI());
  }
}
function CitationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CitationComponent_div_9_span_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CitationComponent_div_9_a_5_Template, 2, 2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.result.getCreator());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r1.result.getPubYear(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.result.getTitle(), ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.result.getDOI() !== "undefined");
  }
}
function CitationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.result.getSource(), " ");
  }
}
class CitationComponent {
  data;
  result;
  constructor(data) {
    this.data = data;
  }
  ngOnInit() {
    this.result = this.data.getCitation();
  }
  static ɵfac = function CitationComponent_Factory(t) {
    return new (t || CitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CitationComponent,
    selectors: [["app-citation"]],
    decls: 11,
    vars: 4,
    consts: [["mat-dialog-title", "", 1, "flex-container"], [1, "dialog-title"], ["mat-button", "", 1, "close-icon", 3, "mat-dialog-close"], [1, "mat-typography"], [4, "ngIf"], ["class", "font-weight-bold", 4, "ngFor", "ngForOf"], [1, "font-weight-bold"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"]],
    template: function CitationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Citation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CitationComponent_div_8_Template, 6, 4, "div", 4)(9, CitationComponent_div_9_Template, 6, 4, "div", 4)(10, CitationComponent_div_10_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getDataCenter() == "PANGAEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getDataCenter() == "GATERSLEBEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result.getSource() !== undefined);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 95,
    vars: 0,
    consts: [[1, "text-center"], [1, "container"], [1, "row"], [1, "col-4"], [1, "border-right", "pe-2"], [1, "mt-2"], ["href", "https://www.dfg.de/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/img/dfg_logo_schriftzug_weiss_foerderung_en.gif", "width", "300", "alt", "DFG Logo"], [1, "col-8"], [1, "col-4", "d-inline-block", "h-100", "border-right"], [1, "mdi", "mdi-signal"], [1, "list-group"], ["href", "https://www.gfbio.org/training", 1, "list-group-item", "list-group-item-action"], ["href", "https://kb.gfbio.org/", "target", "_blank", "rel", "noopener noreferrer", 1, "list-group-item", "list-group-item-action"], [1, "mdi", "mdi-email-edit-outline"], ["href", "mailto:info@gfbio.org", 1, "list-group-item", "list-group-item-action"], [1, "col-4", "d-inline-block", "h-100"], [1, "mdi", "mdi-login"], ["href", "https://sso.gfbio.org/simplesaml/module.php/accountui/register.php", 1, "btn", "btn-primary", "btn-footer"], [1, "row", "mid-row"], [1, "col-3", "mid-row-item"], [1, "mdi", "mdi-pencil-ruler"], ["href", "https://dmp.gfbio.org", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Data Management Plan at GFBio", 1, "stretched-link"], [1, "mdi", "mdi-upload"], ["href", "https://submissions.gfbio.org", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Submit data to GFBio", 1, "stretched-link"], [1, "mdi", "mdi-magnify"], ["href", "https://search.gfbio.org", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Search the GFBio data pool", 1, "stretched-link"], [1, "mdi", "mdi-map-plus"], ["href", "https://vat.gfbio.org/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Visualize and Analyze GFBio datasets", 1, "stretched-link"], [1, "container-fluid", "bottom-row"], [1, "row", "pb-1", "pt-1"], [1, "col-8", "d-flex", "align-items-center"], [1, "list-group", "list-group-horizontal", "align-middle"], [1, "list-group-item"], ["href", "https://www.gfbio.org/terms-of-use"], ["href", "https://www.gfbio.org/legal-notice"], ["href", "https://www.gfbio.org/privacy-policy"], [1, "list-group", "list-group-horizontal", "float-end"], ["href", "mailto:helpdesk@gfbio.org"], [1, "fas", "fa-envelope"], ["href", "https://twitter.com/intent/follow?original_referer=http%3A%2F%2Fwww.gfbio.org%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=GFBio_Project&tw_p=followbutton"], [1, "fab", "fa-twitter"], ["href", "https://github.com/gfbio"], [1, "fab", "fa-github"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "GFBio Consortium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " The German Federation for Biological Data (GFBio), a sustainable, service oriented, national data infrastructure facilitating data sharing for biological and environmental research. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 2)(14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Want to know more ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11)(19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "FAQ's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Got Questions ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 11)(28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact Us !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign up !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Get full access to services and resources deriving benefit for your Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p")(38, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Create an account !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1)(41, "div", 19)(42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Prepare a custom Data Management Plan (DMP).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit your data to GFBio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Search the GFBio data pool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Visualize & Analyze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Dynamically integrate, analyze, and visualize GFBio datasets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29)(71, "div", 1)(72, "div", 30)(73, "div", 31)(74, "ul", 32)(75, "li", 33)(76, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Terms of use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 33)(79, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Legal Notice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 33)(82, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3)(85, "ul", 37)(86, "li", 33)(87, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 33)(90, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 33)(93, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: ["\n\n\n\n\n\n\n\n\n\n\nfooter[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  background-color: rgba(52, 90, 162, 0.8);\n  color: #fff;\n  font-weight: 300;\n  padding-top: 3rem;\n}\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", Arial, sans-serif;\n  font-weight: 300;\n}\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0.65rem;\n  font-size: 1.8em;\n}\nfooter[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\nfooter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n  font-size: 1.2em;\n  padding-left: 3.4rem;\n  padding-top: 0.75rem;\n  text-align: left;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #fff;\n}\nfooter[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%] {\n  border: 0;\n  font-weight: bold;\n  padding: 0.5rem 0 0 0;\n  background-color: transparent;\n  color: #fff;\n}\nfooter[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]:active, footer[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]:focus {\n  background-color: transparent;\n  color: inherit;\n}\nfooter[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]:hover {\n  font-weight: bolder;\n  font-size: 1.05rem;\n}\nfooter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2em !important;\n  padding-bottom: 0.65rem;\n}\nfooter[_ngcontent-%COMP%]   div.mid-row[_ngcontent-%COMP%] {\n  border-top: 1px dotted rgba(255, 255, 255, 0.4);\n  padding: 1.8rem 0;\n}\nfooter[_ngcontent-%COMP%]   div.mid-row[_ngcontent-%COMP%]   .mid-row-item[_ngcontent-%COMP%] {\n  position: relative;\n  transition: all 0.2s;\n}\nfooter[_ngcontent-%COMP%]   div.mid-row[_ngcontent-%COMP%]   .mid-row-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  border-radius: 0.25rem;\n  background-color: rgba(255, 255, 255, 0.04);\n}\nfooter[_ngcontent-%COMP%]   div.mid-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.4em !important;\n  float: left;\n  color: rgba(255, 255, 255, 0.5);\n}\nfooter[_ngcontent-%COMP%]   div.mid-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 3.4rem;\n  font-size: 0.9rem;\n}\nfooter[_ngcontent-%COMP%]   .border-right[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(255, 255, 255, 0.4);\n}\nfooter[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  margin-bottom: 4rem;\n  border: 1px solid #fff;\n  background-color: transparent;\n  color: #fff;\n  font-size: 0.875em;\n}\nfooter[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:hover, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:focus {\n  border-color: #345aa1;\n  background-color: #fff;\n  color: #345aa2 !important;\n  box-shadow: none;\n}\nfooter[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:hover:focus, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active:focus, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active:focus, footer[_ngcontent-%COMP%]   .btn-footer[_ngcontent-%COMP%]:focus:focus {\n  box-shadow: none;\n}\nfooter[_ngcontent-%COMP%]   div.bottom-row[_ngcontent-%COMP%] {\n  background-color: #5c5c5c;\n}\nfooter[_ngcontent-%COMP%]   div.bottom-row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-color: transparent;\n  background-color: transparent;\n}\nfooter[_ngcontent-%COMP%]   div.bottom-row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a3a3a3;\n  font-weight: 400;\n  text-transform: uppercase;\n  text-decoration: none !important;\n  outline: none;\n}\nfooter[_ngcontent-%COMP%]   div.bottom-row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0;\n}\nfooter[_ngcontent-%COMP%]   div.bottom-row[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n@media (min-width: 1400px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 1140px !important;\n  }\n}\nfooter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-transform: none !important;\n}\n.visible[_ngcontent-%COMP%] {\n  display: block;\n}\n.invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2em;\n  right: 2em;\n  padding: 0 0.5rem;\n  border: 1px solid rgba(129, 178, 72, 0.8);\n  border-radius: 0.4rem;\n  background-color: #fff;\n}\n.back-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBS0U7QUFDRiwrRUFBK0U7QUFDL0UscUlBQXFJO0FBQ3JJO0VBQ0UsMkNBQTJDO0VBQzNDLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLDJDQUEyQztFQUMzQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUNBOzs7RUFHRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsK0NBQStDO0VBQy9DLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBR2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7Ozs7RUFJRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTs7OztFQUlFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gRm9vdGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmZvb3RlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MiwgOTAsIDE2MiwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuZm9vdGVyIGgzLFxuZm9vdGVyIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuZm9vdGVyIGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMC42NXJlbTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cbmZvb3RlciBoNCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5mb290ZXIgaDUge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHBhZGRpbmctbGVmdDogMy40cmVtO1xuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmZvb3RlciBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuZm9vdGVyIGEubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgYS5saXN0LWdyb3VwLWl0ZW06aG92ZXIsXG5mb290ZXIgYS5saXN0LWdyb3VwLWl0ZW06YWN0aXZlLFxuZm9vdGVyIGEubGlzdC1ncm91cC1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuZm9vdGVyIGEubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuZm9vdGVyIGkge1xuICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42NXJlbTtcbn1cbmZvb3RlciBkaXYubWlkLXJvdyB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBwYWRkaW5nOiAxLjhyZW0gMDtcbn1cbmZvb3RlciBkaXYubWlkLXJvdyAubWlkLXJvdy1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmZvb3RlciBkaXYubWlkLXJvdyAubWlkLXJvdy1pdGVtIGE6aG92ZXI6OmFmdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cbmZvb3RlciBkaXYubWlkLXJvdyBpIHtcbiAgZm9udC1zaXplOiAyLjRlbSAhaW1wb3J0YW50O1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbmZvb3RlciBkaXYubWlkLXJvdyBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzLjRyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuZm9vdGVyIC5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5mb290ZXIgLmJ0bi1mb290ZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcbn1cbmZvb3RlciAuYnRuLWZvb3Rlcjpob3ZlcixcbmZvb3RlciAuYnRuLWZvb3Rlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsXG5mb290ZXIgLmJ0bi1mb290ZXI6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxuZm9vdGVyIC5idG4tZm9vdGVyOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ1YWExO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzM0NWFhMiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuZm9vdGVyIC5idG4tZm9vdGVyOmhvdmVyOmZvY3VzLFxuZm9vdGVyIC5idG4tZm9vdGVyOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyxcbmZvb3RlciAuYnRuLWZvb3Rlcjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsXG5mb290ZXIgLmJ0bi1mb290ZXI6Zm9jdXM6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuZm9vdGVyIGRpdi5ib3R0b20tcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWM1Yztcbn1cbmZvb3RlciBkaXYuYm90dG9tLXJvdyB1bCBsaSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuZm9vdGVyIGRpdi5ib3R0b20tcm93IHVsIGxpIGEge1xuICBjb2xvcjogI2EzYTNhMztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5mb290ZXIgZGl2LmJvdHRvbS1yb3cgdWwgbGkgYSBpIHtcbiAgcGFkZGluZzogMDtcbn1cbmZvb3RlciBkaXYuYm90dG9tLXJvdyB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIGZvb3RlciAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweCAhaW1wb3J0YW50O1xuICB9XG59XG5mb290ZXIgLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG4udmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMmVtO1xuICByaWdodDogMmVtO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMjksIDE3OCwgNzIsIDAuOCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5iYWNrLXRvLXRvcCBpIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9735:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ 7550);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-angular */ 3950);




class NavigationComponent {
  keycloakService;
  navCollapsed = true;
  logoUrl = "/assets/img/gfbio_logo_small.svg";
  isLoggedIn = false;
  userProfile = null;
  user = "";
  indexes = [{
    key: "gfbio",
    link: "/"
  }
  /*, {
                  key: 'biodiv',
                  link: '/bio-div'
              }*/];
  toggleNav() {
    this.navCollapsed = !this.navCollapsed;
  }
  constructor(keycloakService) {
    this.keycloakService = keycloakService;
  }
  initializeUserOptions() {
    try {
      this.user = this.keycloakService.getUsername();
      this.keycloakService.loadUserProfile().then(profile => {
        console.log(profile.username);
        console.log(profile["attributes"]); //gives you array of all attributes of user, extract what you need
      });
    } catch {
      this.user = null;
    }
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.initializeUserOptions();
      if (yield _this.keycloakService.isLoggedIn()) {
        _this.userProfile = yield _this.keycloakService.loadUserProfile();
      }
      // this.isLoggedIn = await this.keycloakService.isLoggedIn();
      // if (this.isLoggedIn) {
      //     this.userProfile = await this.keycloakService.loadUserProfile();
      //     console.log(this.userProfile);
      // }
    })();
  }
  login() {
    this.keycloakService.login();
  }
  logout() {
    this.keycloakService.logout();
  }
  static ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_3__.KeycloakService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["app-navigation"]],
    decls: 17,
    vars: 4,
    consts: [["id", "mainNavContent", 1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "navbar-shrink", "navbar-shrink-content"], [1, "container"], ["href", "/", 1, "navbar-brand", 2, "width", "100px", "height", "50px"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "{%", "if", "request.path", "==", "url", "%}active{%", "endif", "%}"], ["href", "https://www.gfbio.org/services/", "target", "_blank", "rel", "noopener noreferrer", 1, "nav-link"], [1, "nav-item"], ["href", "https://www.gfbio-ev.de/", 1, "nav-link"], ["href", "https://www.nfdi4biodiversity.org/", 1, "nav-link"], [1, "mdi", "mdi-open-in-new"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_3_listener() {
          return ctx.toggleNav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " GFBio Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " GFBio e.V. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " NFDI 4 Bio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", "url(" + ctx.logoUrl + ") no-repeat center center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.navCollapsed ? "collapse navbar-collapse d-lg-flex flex-lg-row-reverse" : "collapse navbar-collapse d-lg-flex flex-lg-row-reverse show");
      }
    },
    styles: ["\n\n\n\n\n\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.fixed-top-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1030; \n\n}\n\n#mainNav[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 0;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);\n  font-family: \"Raleway\", sans-serif;\n  transition: all 0.2s;\n  min-height: 62px;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  line-height: 70px;\n  height: 70px;\n  margin: 0;\n  padding: 0;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transition: all 0.2s;\n  padding: 44px 90px 0 0;\n  margin: 0;\n  height: 70px;\n}\n#mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  \n\n  padding: 44px 90px 0 0;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus {\n  font-size: 1rem;\n  color: #495057;\n  line-height: 20px;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover {\n  color: #81b248;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus.active, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus.active {\n  color: #81b248 !important;\n  background-color: transparent;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link.active[_ngcontent-%COMP%]:hover, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus.active:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus.active:hover {\n  background-color: transparent;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #81b248;\n  background-color: inherit;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  color: #81b248 !important;\n  background-color: inherit;\n}\n#mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%]:hover {\n  background-color: inherit;\n}\n@media (min-width: 992px) {\n  #mainNav[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border-bottom: 1px solid #495057;\n    box-shadow: none;\n  }\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.7);\n  }\n  #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNavContent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n    color: #81b248;\n  }\n  #mainNav[_ngcontent-%COMP%]   li.sign-up[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   li.sign-up[_ngcontent-%COMP%] {\n    padding-left: 4rem;\n  }\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%] {\n    padding: 0 0.75rem;\n  }\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus {\n    color: #495057;\n  }\n  #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover, #mainNavContent[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover {\n    color: #81b248;\n  }\n  #mainNav.navbar-shrink[_ngcontent-%COMP%], #mainNavContent.navbar-shrink[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-bottom: 0;\n    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);\n  }\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    color: #81b248;\n  }\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:focus, #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover, #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]:hover {\n    color: #81b248;\n  }\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%], #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus, #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus {\n    color: #495057;\n  }\n  #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:hover, #mainNav.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover, #mainNavContent.navbar-shrink[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > li.nav-item[_ngcontent-%COMP%]    > a.nav-link[_ngcontent-%COMP%]:focus:hover {\n    color: #81b248;\n  }\n  #mainNav.navbar-shrink-content[_ngcontent-%COMP%], #mainNavContent.navbar-shrink-content[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-bottom: 1px solid #495057;\n    box-shadow: none;\n  }\n}\n#mainNav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n#mainNav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n  color: #81b248;\n  text-decoration: none;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out;\n}\n#mainNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n#mainNav[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show), #mainNavContent[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:not(.show) {\n  display: none;\n}\n#mainNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #81b248;\n  transition: all 0.2s;\n  text-decoration: none !important;\n  outline: none;\n}\n#mainNav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #mainNavContent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #81b248;\n}\n@media (min-width: 1400px) {\n  #mainNav[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    max-width: 1140px !important;\n  }\n}\n@media (min-width: 992px) {\n  #mainNav[_ngcontent-%COMP%]   .flex-lg-row-reverse[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .flex-lg-row-reverse[_ngcontent-%COMP%] {\n    flex-direction: row-reverse !important;\n  }\n}\n#mainNav[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%], #mainNavContent[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#nav-items[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUFLRTtBQUNGLCtFQUErRTtBQUMvRTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhLEVBQUUsaUNBQWlDO0FBQ2xEOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFHaEIseUNBQXlDO0VBQ3pDLGtDQUFrQztFQUdsQyxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7O0VBSUUsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsMEZBQTBGO0VBQzFGLHNCQUFzQjtBQUN4QjtBQUNBOzs7O0VBSUUsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTs7OztFQUlFLGNBQWM7QUFDaEI7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7QUFDQTs7OztFQUlFLDZCQUE2QjtBQUMvQjtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUNBOztFQUVFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0E7Ozs7OztFQU1FLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0U7O0lBRUUsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUdoQyxnQkFBZ0I7RUFDbEI7RUFDQTs7SUFFRSwrQkFBK0I7RUFDakM7RUFDQTs7OztJQUlFLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7SUFFRSxrQkFBa0I7RUFDcEI7RUFDQTs7OztJQUlFLGNBQWM7RUFDaEI7RUFDQTs7OztJQUlFLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBR2hCLHlDQUF5QztFQUMzQztFQUNBOztJQUVFLGNBQWM7RUFDaEI7RUFDQTs7OztJQUlFLGNBQWM7RUFDaEI7RUFDQTs7OztJQUlFLGNBQWM7RUFDaEI7RUFDQTs7Ozs7OztJQU9FLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBR2hDLGdCQUFnQjtFQUNsQjtBQUNGO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQjtrQ0FDZ0M7QUFDbEM7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTs7SUFFRSw0QkFBNEI7RUFDOUI7QUFDRjtBQUNBO0VBQ0U7O0lBRUUsc0NBQXNDO0VBQ3hDO0FBQ0Y7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLyogZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLm5hdmJhciB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmZpeGVkLXRvcC1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwMzA7IC8qIEhpZ2hlciB0aGFuIHRoZSBtYWluIGNvbnRlbnQgKi9cbn1cblxuI21haW5OYXYsXG4jbWFpbk5hdkNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAwO1xuICAtbW96LWJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgbWluLWhlaWdodDogNjJweDtcbn1cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1icmFuZCB7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQgaDEsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1icmFuZCBoMSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBwYWRkaW5nOiA0NHB4IDkwcHggMCAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNzBweDtcbn1cbiNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCBoMSxcbiNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQgaDEge1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9pbWFnZXMvZ2ZiaW9fbG9nb19zbWFsbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDsgKi9cbiAgcGFkZGluZzogNDRweCA5MHB4IDAgMDtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLFxuI21haW5OYXZDb250ZW50IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxuI21haW5OYXZDb250ZW50IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXM6aG92ZXIsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXM6aG92ZXIge1xuICBjb2xvcjogIzgxYjI0ODtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLmFjdGl2ZSxcbiNtYWluTmF2Q29udGVudCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluay5hY3RpdmUsXG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cy5hY3RpdmUsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMuYWN0aXZlIHtcbiAgY29sb3I6ICM4MWIyNDggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluay5hY3RpdmU6aG92ZXIsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmsuYWN0aXZlOmhvdmVyLFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMuYWN0aXZlOmhvdmVyLFxuI21haW5OYXZDb250ZW50IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcixcbiNtYWluTmF2Q29udGVudCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06aG92ZXIsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjODFiMjQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUsXG4jbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmUge1xuICBjb2xvcjogIzgxYjI0OCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbS5hY3RpdmU6aG92ZXIsXG4jbWFpbk5hdkNvbnRlbnRcbiAgLm5hdmJhci1uYXZcbiAgPiBsaS5uYXYtaXRlbVxuICAuZHJvcGRvd24tbWVudVxuICAuZHJvcGRvd24taXRlbS5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNtYWluTmF2LFxuICAjbWFpbk5hdkNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDk1MDU3O1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmZvY3VzLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1icmFuZDpmb2N1cyxcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlcixcbiAgI21haW5OYXZDb250ZW50IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOiAjODFiMjQ4O1xuICB9XG4gICNtYWluTmF2IGxpLnNpZ24tdXAsXG4gICNtYWluTmF2Q29udGVudCBsaS5zaWduLXVwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmssXG4gICNtYWluTmF2Q29udGVudCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XG4gICAgcGFkZGluZzogMCAwLjc1cmVtO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmssXG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIsXG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzOmhvdmVyLFxuICAjbWFpbk5hdkNvbnRlbnQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXM6aG92ZXIge1xuICAgIGNvbG9yOiAjODFiMjQ4O1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmssXG4gICNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCxcbiAgI21haW5OYXZDb250ZW50Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICM4MWIyNDg7XG4gIH1cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kOmZvY3VzLFxuICAjbWFpbk5hdkNvbnRlbnQubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kOmZvY3VzLFxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQ6aG92ZXIsXG4gICNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rIC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOiAjODFiMjQ4O1xuICB9XG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbmssXG4gICNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rLFxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzLFxuICAjbWFpbk5hdkNvbnRlbnQubmF2YmFyLXNocmluayAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcbiAgI21haW5OYXZDb250ZW50Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIsXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXM6aG92ZXIsXG4gICNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rXG4gICAgLm5hdmJhci1uYXZcbiAgICA+IGxpLm5hdi1pdGVtXG4gICAgPiBhLm5hdi1saW5rOmZvY3VzOmhvdmVyIHtcbiAgICBjb2xvcjogIzgxYjI0ODtcbiAgfVxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rLWNvbnRlbnQsXG4gICNtYWluTmF2Q29udGVudC5uYXZiYXItc2hyaW5rLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0OTUwNTc7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG4jbWFpbk5hdiAubmF2LFxuI21haW5OYXZDb250ZW50IC5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiNtYWluTmF2IC5uYXYtbGluayxcbiNtYWluTmF2Q29udGVudCAubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGNvbG9yOiAjODFiMjQ4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dDtcbn1cbiNtYWluTmF2IHVsLFxuI21haW5OYXZDb250ZW50IHVsIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbiNtYWluTmF2IC5jb2xsYXBzZTpub3QoLnNob3cpLFxuI21haW5OYXZDb250ZW50IC5jb2xsYXBzZTpub3QoLnNob3cpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNtYWluTmF2IGEsXG4jbWFpbk5hdkNvbnRlbnQgYSB7XG4gIGNvbG9yOiAjODFiMjQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jbWFpbk5hdiBhOmhvdmVyLFxuI21haW5OYXZDb250ZW50IGE6aG92ZXIge1xuICBjb2xvcjogIzgxYjI0ODtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgI21haW5OYXYgLmNvbnRhaW5lcixcbiAgI21haW5OYXZDb250ZW50IC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAjbWFpbk5hdiAuZmxleC1sZy1yb3ctcmV2ZXJzZSxcbiAgI21haW5OYXZDb250ZW50IC5mbGV4LWxnLXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UgIWltcG9ydGFudDtcbiAgfVxufVxuI21haW5OYXYgLm5hdmJhcixcbiNtYWluTmF2Q29udGVudCAubmF2YmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI25hdi1pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1442:
/*!******************************************************!*\
  !*** ./src/app/context-box/context-box.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextBoxComponent: () => (/* binding */ ContextBoxComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/remote/node.service */ 5659);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local/communication.service */ 5540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9400);











const _c0 = ["contentEditable"];
function ContextBoxComponent_div_0_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.label, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", ctx_r5.infoText);
  }
}
function ContextBoxComponent_div_0_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.description, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " URI: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", data_r2.uri, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.uri, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Source: ", data_r2.sourceTerminology, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_9_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ContextBoxComponent_div_0_div_3_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_9_span_2_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const synonym_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r20 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", synonym_r19, "");
  }
}
function ContextBoxComponent_div_0_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Synonyms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContextBoxComponent_div_0_div_3_div_9_span_2_Template, 3, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r2.synonyms);
  }
}
function ContextBoxComponent_div_0_div_3_div_10_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ContextBoxComponent_div_0_div_3_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_10_span_2_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const commonNames_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r25 != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", commonNames_r24, "");
  }
}
function ContextBoxComponent_div_0_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Synonyms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ContextBoxComponent_div_0_div_3_div_10_span_2_Template, 3, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", data_r2.commonNames);
  }
}
function ContextBoxComponent_div_0_div_3_div_12_mat_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 18);
  }
}
function ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template_mat_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      ctx_r30.showSearchInformation = !ctx_r30.showSearchInformation;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.icon == "expand_less" ? ctx_r30.icon = "expand_more" : ctx_r30.icon = "expand_less");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r29.icon, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 13)(2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.narrow(data_r2.sourceTerminology, data_r2.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "close_fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Narrower ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13)(7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContextBoxComponent_div_0_div_3_div_12_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.broad(data_r2.sourceTerminology, data_r2.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "zoom_out_map");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Broader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ContextBoxComponent_div_0_div_3_div_12_mat_spinner_12_Template, 1, 0, "mat-spinner", 16)(13, ContextBoxComponent_div_0_div_3_div_12_mat_icon_13_Template, 2, 1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.loading && data_r2.uri == ctx_r11.searchUri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.loading && data_r2.uri == ctx_r11.searchUri && ctx_r11.searchData != undefined && ctx_r11.searchData.length > 0);
  }
}
function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dblclick", function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template_span_dblclick_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.onDoubleClick(data_r39.label));
    })("click", function ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.onClick(data_r39.uri));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("className", ctx_r41.searchClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r39.label, " ");
  }
}
function ContextBoxComponent_div_0_div_3_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ContextBoxComponent_div_0_div_3_div_13_div_3_div_1_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r39.label != undefined);
  }
}
function ContextBoxComponent_div_0_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "mat-card", 20)(2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContextBoxComponent_div_0_div_3_div_13_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.searchData);
  }
}
function ContextBoxComponent_div_0_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-divider", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inset", true);
  }
}
function ContextBoxComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 4)(2, "div", 5)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ContextBoxComponent_div_0_div_3_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ContextBoxComponent_div_0_div_3_div_5_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ContextBoxComponent_div_0_div_3_div_6_Template, 2, 1, "div", 6)(7, ContextBoxComponent_div_0_div_3_div_7_Template, 4, 2, "div", 6)(8, ContextBoxComponent_div_0_div_3_div_8_Template, 2, 1, "div", 6)(9, ContextBoxComponent_div_0_div_3_div_9_Template, 3, 1, "div", 6)(10, ContextBoxComponent_div_0_div_3_div_10_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ContextBoxComponent_div_0_div_3_div_12_Template, 14, 2, "div", 8)(13, ContextBoxComponent_div_0_div_3_div_13_Template, 4, 1, "div", 6)(14, ContextBoxComponent_div_0_div_3_div_14_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.label != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.description != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.uri != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.sourceTerminology != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.synonyms != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.commonNames != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.internal != undefined && data_r2.internal == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.searchData != undefined && ctx_r1.searchData.length > 0 && ctx_r1.showSearchInformation && !ctx_r1.loading && data_r2.uri == ctx_r1.searchUri);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 < ctx_r1.displayData.length - 1);
  }
}
function ContextBoxComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "mat-card", 2)(2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ContextBoxComponent_div_0_div_3_Template, 15, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.displayData);
  }
}
class ContextBoxComponent {
  nodeService;
  communicationService;
  ele;
  term = "placeholder";
  termData = [];
  displayData = [];
  searchData = [];
  singleClick = true;
  loading = false;
  searchUri;
  showSearchInformation = false;
  icon = "expand_less";
  searchClass = "linkWidgetBlue";
  infoText = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textTSWidgetInfo;
  constructor(nodeService, communicationService) {
    this.nodeService = nodeService;
    this.communicationService = communicationService;
  }
  ngOnInit() {
    this.filter(this.term);
    // Make the Term + the Data to Display UpperCase
    this.term = this.term[0].toUpperCase() + this.term.slice(1);
    if (this.displayData != undefined) {
      this.displayData.forEach(function (value) {
        value.label = value.label[0].toUpperCase() + value.label.slice(1);
      });
    }
  }
  /* We use the CommunicationService to forward the clicked
   * key to the search bar
   */
  onDoubleClick(label) {
    this.singleClick = false;
    var subject = this.communicationService.getSearchKey();
    subject.next(subject.getValue() + " " + label);
    this.searchClass = "linkWidgetBlue";
  }
  /* In onClick we check if the user only clicked once
   * this is done with a timeout set to 200ms
   * if the user presses again in that time frame we don't
   * open the window/link
   */
  onClick(url) {
    this.singleClick = true;
    this.searchClass = "linkWidgetBlue unselectable";
    setTimeout(() => {
      if (this.singleClick) {
        window.open(url, "_blank");
        // alternative: window.location.href = url;
        this.searchClass = "linkWidgetBlue";
      }
    }, 200);
  }
  narrow(source, uri) {
    this.showSearchInformation = false;
    this.searchData = undefined;
    this.searchUri = uri;
    this.loading = true;
    this.nodeService.narrow(source, uri).subscribe(value => {
      if (value !== undefined) {
        this.searchData = value.results;
        this.loading = false;
        this.showSearchInformation = true;
        this.icon = "expand_less";
      }
    });
  }
  broad(source, uri) {
    this.showSearchInformation = false;
    this.searchData = undefined;
    this.searchUri = uri;
    this.loading = true;
    this.nodeService.broad(source, uri).subscribe(value => {
      if (value !== undefined) {
        this.searchData = value.results;
        this.loading = false;
        this.showSearchInformation = true;
        this.icon = "expand_less";
      }
    });
  }
  filter(term) {
    for (var t in this.termData) {
      // First check the labels for our term
      if ((this.termData[t].label.toString().toLowerCase() + 's').includes(term.toLowerCase())) {
        this.displayData.push(this.termData[t]);
      } else
        /* Now check the synonyms/commonNames for the term,
         * if found, add it to the list of displayed data
         */
        if (this.termData[t].synonyms != undefined) {
          for (var syn in this.termData[t].synonyms) {
            if ((this.termData[t].synonyms[syn].toString().toLowerCase() + 's').includes(term.toLowerCase())) {
              this.displayData.push(this.termData[t]);
              break;
            }
          }
        } else if (this.termData[t].commonNames != undefined) {
          for (var syn in this.termData[t].commonNames) {
            if ((this.termData[t].commonNames[syn].toString().toLowerCase() + 's').includes(term.toLowerCase())) {
              this.displayData.push(this.termData[t]);
              break;
            }
          }
        }
    }
  }
  static ɵfac = function ContextBoxComponent_Factory(t) {
    return new (t || ContextBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ContextBoxComponent,
    selectors: [["app-context-box"]],
    viewQuery: function ContextBoxComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ele = _t.first);
      }
    },
    inputs: {
      term: "term",
      termData: "termData"
    },
    decls: 1,
    vars: 1,
    consts: [["style", "position: absolute; color: grey;", 4, "ngIf"], [2, "position", "absolute", "color", "grey"], [1, "content-box"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6"], [4, "ngIf"], ["class", "col-2 offset-md-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "mb-2 mt-3", 4, "ngIf"], [1, "col-2", "offset-md-4"], ["matTooltipClass", "result-item-tooltip", "matTooltipPosition", "below", 1, "unselectable", 2, "color", "var(--darkgrey)", "font-size", "33px", 3, "matTooltip"], ["target", "_blank", 1, "linkWidgetBlue", 3, "href"], [1, "col-4"], ["mat-flat-button", "", 1, "btn-blue", 3, "click"], [1, "col-2", "offset-md-2"], ["diameter", "35", 4, "ngIf"], ["style", "font-size: 35px;", "class", "unselectable", 3, "click", 4, "ngIf"], ["diameter", "35"], [1, "unselectable", 2, "font-size", "35px", 3, "click"], [1, "inner-box", "ml-n1"], [3, "className", "dblclick", "click"], [1, "mb-2", "mt-3"], [3, "inset"]],
    template: function ContextBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContextBoxComponent_div_0_Template, 4, 1, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.displayData != undefined && ctx.displayData.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8225:
/*!************************************************************!*\
  !*** ./src/app/filters/filter-box/filter-box.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBoxComponent: () => (/* binding */ FilterBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/local/communication.service */ 5540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




const _c0 = a0 => ({
  "d-none": a0
});
function FilterBoxComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "label", 3)(3, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_1_Template_input_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const filter_r2 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.sendFacet(filter_r2.getKey(), ctx_r4.filters.getId() + "Facet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, !ctx_r0.showLess(i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "id-", filter_r2.getKey(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "id-", filter_r2.getKey(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", filter_r2.getChecked());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", filter_r2.getKey(), " (", filter_r2.getDocCount(), ")");
  }
}
function FilterBoxComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_2_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.showMore = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ... show more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FilterBoxComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterBoxComponent_div_2_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.showMore = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ... show less ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FilterBoxComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterBoxComponent_div_2_div_1_Template, 2, 0, "div", 5)(2, FilterBoxComponent_div_2_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showMore);
  }
}
class FilterBoxComponent {
  communicationService;
  filters;
  chosenFacet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  showMore = false;
  constructor(communicationService) {
    this.communicationService = communicationService;
  }
  ngOnInit() {
    const filter = this.communicationService.getFilter();
    if (filter !== undefined) {
      filter.forEach(result => {
        this.filters.getFacets().forEach(item => {
          this.checkFilter(item, result, this.filters.getId() + "Facet");
        });
      });
    }
  }
  showLess(i) {
    if (this.showMore === true) {
      return true;
    }
    return i < 5;
  }
  checkFilter(item, value, facet) {
    if (value.hasOwnProperty("term")) {
      if (item.getKey() === value.term[facet]) {
        item.setChecked(true);
      }
    }
  }
  sendFacet(key, facet) {
    const keyAndFacet = [key, facet];
    this.chosenFacet.emit(keyAndFacet);
  }
  static ɵfac = function FilterBoxComponent_Factory(t) {
    return new (t || FilterBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterBoxComponent,
    selectors: [["app-filter-box"]],
    inputs: {
      filters: "filters"
    },
    outputs: {
      chosenFacet: "chosenFacet"
    },
    decls: 3,
    vars: 2,
    consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngClass"], [1, "pl-2", "linkBlue", "m-0", 3, "for"], ["type", "checkbox", 3, "id", "checked", "click"], ["class", "linkBlue", 3, "click", 4, "ngIf"], [1, "linkBlue", 3, "click"]],
    template: function FilterBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FilterBoxComponent_div_1_Template, 5, 8, "div", 0)(2, FilterBoxComponent_div_2_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters.getFacets());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.filters.getFacets()) == null ? null : tmp_1_0.length) > 5);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7993:
/*!****************************************************************************!*\
  !*** ./src/app/filters/filter-date-picker/filter-date-picker.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterDatePickerComponent: () => (/* binding */ FilterDatePickerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 8540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);











class FilterDatePickerComponent {
  datePicker;
  filters;
  filterValues;
  chosenDate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  start;
  startFormat;
  end;
  endFormat;
  openChart = true;
  constructor(breakpointObserver) {
    breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.HandsetPortrait]).subscribe(result => {
      if (result.matches) {
        this.openChart = false;
      }
    });
  }
  ngOnInit() {
    // tslint:disable-next-line:forin
    for (const i in this.filterValues) {
      this.datePicker.inputs.forEach(input => {
        if (this.filterValues[i] === input.name) {
          const value = Object.values(Object.values(this.filters[i].range)[0])[0];
          const key = Object.keys(Object.values(this.filters[i].range)[0])[0];
          if (key === 'gte') {
            this.start = new Date(value);
            this.startFormat = new Date(value);
          }
          if (key === 'lte') {
            this.end = new Date(value);
            this.endFormat = new Date(value);
          }
        }
      });
    }
  }
  setDate(dateValue, type) {
    let date = dateValue.value;
    const moment = moment__WEBPACK_IMPORTED_MODULE_0__;
    if (this.datePicker.type === 'collection') {
      const str = moment(date).format();
      const lastIndex = str.lastIndexOf('+');
      date = str.substring(0, lastIndex);
    } else {
      date = moment(date).format('YYYY');
    }
    if (type === 'start') {
      this.startFormat = date;
    } else {
      this.endFormat = date;
    }
  }
  applyDate() {
    const typeAndValues = [this.startFormat, this.endFormat];
    this.chosenDate.emit(typeAndValues);
  }
  static ɵfac = function FilterDatePickerComponent_Factory(t) {
    return new (t || FilterDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterDatePickerComponent,
    selectors: [["app-filter-date-picker"]],
    inputs: {
      datePicker: "datePicker",
      filters: "filters",
      filterValues: "filterValues"
    },
    outputs: {
      chosenDate: "chosenDate"
    },
    decls: 32,
    vars: 9,
    consts: [[1, "mt-3", 3, "expanded"], [1, "card-header", 2, "height", "40px"], [1, "row"], [1, "col-1", "col-md-1"], [1, "filterIcon"], [1, "col-auto", "col-xs-auto", "col-md-auto"], [1, "pt-2"], [1, "col-12", "col-xs-12", "col-md-12"], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], ["startDate", ""], [1, "col-12", "col-xs-12", "col-md-8"], ["EndDate", ""], [1, "col-12", "col-xs-12", "col-md-auto-apply"], ["type", "submit", 1, "btn", "btn-secondary", 3, "click"]],
    template: function FilterDatePickerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-accordion")(2, "mat-expansion-panel", 0)(3, "mat-expansion-panel-header", 1)(4, "div", 2)(5, "div", 3)(6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "div", 2)(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDatePickerComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.start = $event;
        })("dateChange", function FilterDatePickerComponent_Template_input_dateChange_16_listener($event) {
          return ctx.setDate($event, "start");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-datepicker-toggle", 10)(18, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2)(21, "div", 12)(22, "mat-form-field", 8)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "MM/DD/YYYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterDatePickerComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.end = $event;
        })("dateChange", function FilterDatePickerComponent_Template_input_dateChange_25_listener($event) {
          return ctx.setDate($event, "end");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-datepicker-toggle", 10)(27, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterDatePickerComponent_Template_button_click_30_listener() {
          return ctx.applyDate();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("expanded", ctx.openChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datePicker.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.datePicker.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.start);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerToggle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5934:
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiltersComponent: () => (/* binding */ FiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 5540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-box/filter-box.component */ 8225);
/* harmony import */ var _other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./other-filters/other-filters.component */ 4704);
/* harmony import */ var _filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-date-picker/filter-date-picker.component */ 7993);












function FiltersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-chip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function FiltersComponent_div_11_Template_mat_chip_removed_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.removeFilter(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectable", false)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4, " ");
  }
}
function FiltersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-accordion")(2, "mat-expansion-panel", 0)(3, "mat-expansion-panel-header", 1)(4, "div", 10)(5, "div", 11)(6, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "app-filter-box", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenFacet", function FiltersComponent_div_12_Template_app_filter_box_chosenFacet_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.sendFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx_r1.openChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.getIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.getTitle(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filters", item_r8);
  }
}
function FiltersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-accordion")(2, "mat-expansion-panel", 0)(3, "mat-expansion-panel-header", 1)(4, "div", 10)(5, "div", 11)(6, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2)(11, "app-other-filters", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenFilter", function FiltersComponent_div_13_Template_app_other_filters_chosenFilter_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.sendFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx_r2.openChart);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("filter", item_r12.parameters)("filterValues", ctx_r2.filterValues);
  }
}
function FiltersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "app-filter-date-picker", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("chosenDate", function FiltersComponent_div_14_Template_app_filter_date_picker_chosenDate_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const datePicker_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.applyDate($event, datePicker_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const datePicker_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datePicker", datePicker_r15)("filters", ctx_r3.chosenFilter)("filterValues", ctx_r3.filterValues);
  }
}
class FiltersComponent {
  communicationService;
  result;
  chosenFilter = [];
  filterValues = [];
  filters = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  resetFilters;
  openChart = true;
  constructor(breakpointObserver, communicationService) {
    this.communicationService = communicationService;
    breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.HandsetPortrait]).subscribe(result => {
      if (result.matches) {
        this.openChart = false;
      }
    });
  }
  ngOnChanges(changes) {
    if (changes?.resetFilters?.currentValue === true) {
      this.clearAllFilters();
    }
    if (changes?.chosenFilter?.currentValue?.length > 0) {
      this.setAllFilters(changes.chosenFilter.currentValue);
    }
  }
  sendFilter(keyAndFacet) {
    const key = keyAndFacet[0];
    const facet = keyAndFacet[1];
    const label = keyAndFacet[2];
    const facetObg = {};
    facetObg[facet] = key;
    let FilterExist = false;
    let index;
    this.chosenFilter.forEach((value, i) => {
      // @ts-ignore
      if (value?.term[facet] === key) {
        FilterExist = true;
        index = i;
      }
    });
    if (FilterExist) {
      this.chosenFilter.splice(Number(index), 1);
      this.filterValues.splice(Number(index), 1);
    } else {
      this.chosenFilter.push({
        term: facetObg
      });
      if (label !== undefined) {
        this.filterValues.push(label);
      } else {
        this.filterValues.push(key);
      }
    }
    this.startSearching();
  }
  startSearching() {
    this.filters.emit(this.chosenFilter);
    console.log(this.chosenFilter);
    console.log(this.filterValues);
  }
  removeFilter(i) {
    this.communicationService.setRemovedFilter([this.filterValues[i]]);
    this.filterValues.splice(i, 1);
    this.chosenFilter.splice(i, 1);
    this.startSearching();
  }
  clearAllFilters() {
    this.communicationService.setRemovedFilter(this.filterValues);
    this.chosenFilter = [];
    this.filterValues = [];
    this.communicationService.setFilter(this.chosenFilter);
  }
  onClearAllFilters() {
    this.clearAllFilters();
    this.startSearching();
  }
  applyDate(dates, datePicker) {
    console.log(dates);
    const start = dates[0];
    const end = dates[1];
    if (start !== undefined || end !== undefined) {
      // tslint:disable-next-line:forin
      for (const i in this.filterValues) {
        datePicker.inputs.forEach(input => {
          if (this.filterValues[i] === input.name) {
            this.chosenFilter.splice(Number(i), 1);
            this.filterValues.splice(Number(i), 1);
          }
        });
      }
      if (datePicker.type === "collection") {
        if (start !== undefined) {
          const date = {
            range: {
              maxDateTime: {
                gte: start
              }
            }
          };
          this.chosenFilter.push(date);
          this.filterValues.push("Collection start date");
        }
        if (end !== undefined) {
          const date = {
            range: {
              minDateTime: {
                lte: end
              }
            }
          };
          this.chosenFilter.push(date);
          this.filterValues.push("Collection end date");
        }
      }
      if (datePicker.type === "publication") {
        if (start !== undefined) {
          const date = {
            range: {
              citation_yearFacet: {
                gte: start
              }
            }
          };
          this.chosenFilter.push(date);
          this.filterValues.push("Publication start date");
        }
        if (end !== undefined) {
          const date = {
            range: {
              citation_yearFacet: {
                lte: end
              }
            }
          };
          this.chosenFilter.push(date);
          this.filterValues.push("Publication end date");
        }
      }
      this.startSearching();
    }
  }
  setAllFilters(filterList) {
    this.communicationService.setFilter(filterList);
    this.filterValues = [];
    filterList.forEach(val => {
      if (val.term) {
        this.filterValues.push(val.term[Object.keys(val.term)[0]]);
      } else if (val.range) {
        let facetName = Object.keys(val.range)[0];
        let datePickerType, modifier;
        switch (facetName) {
          case "minDateTime":
            datePickerType = "Collection";
            break;
          case "citation_yearFacet":
            datePickerType = "Publication";
            break;
        }
        let modifierName = Object.keys(val.range[facetName])[0];
        switch (modifierName) {
          case "gte":
            modifier = "start";
            break;
          case "lte":
            modifier = "end";
            break;
        }
        this.filterValues.push(`${datePickerType} ${modifier} date`);
        this.result.getDatePickers().find(dp => dp.type == "collection")[modifier] = val.range[facetName][modifierName];
      }
    });
    this.chosenFilter = filterList;
  }
  static ɵfac = function FiltersComponent_Factory(t) {
    return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FiltersComponent,
    selectors: [["app-filters"]],
    inputs: {
      result: "result",
      chosenFilter: "chosenFilter",
      resetFilters: "resetFilters"
    },
    outputs: {
      filters: "filters"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 15,
    vars: 5,
    consts: [[1, "mt-3", 3, "expanded"], [1, "card-header", 2, "height", "40px"], [1, "pt-2"], [1, "mb-3"], [1, "ml-2", "linkBlue", 3, "click"], [1, "my-3"], ["aria-label", "article selection", 1, "mat-chip-list-stacked"], [4, "ngFor", "ngForOf"], [1, "h-auto", 3, "selectable", "removable", "removed"], ["matChipRemove", ""], [1, "row"], [1, "col-1", "col-md-1"], [1, "filterIcon"], [1, "col-auto", "col-md-auto"], [3, "filters", "chosenFacet"], [3, "filter", "filterValues", "chosenFilter"], [3, "datePicker", "filters", "filterValues", "chosenDate"]],
    template: function FiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-accordion")(2, "mat-expansion-panel", 0)(3, "mat-expansion-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FiltersComponent_Template_span_click_7_listener() {
          return ctx.onClearAllFilters();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Clear All Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-chip-listbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FiltersComponent_div_11_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FiltersComponent_div_12_Template, 12, 4, "div", 7)(13, FiltersComponent_div_13_Template, 12, 5, "div", 7)(14, FiltersComponent_div_14_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.openChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getAggregations());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getOtherFilters());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.result == null ? null : ctx.result.getDatePickers());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipRemove, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionPanelHeader, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _filter_box_filter_box_component__WEBPACK_IMPORTED_MODULE_1__.FilterBoxComponent, _other_filters_other_filters_component__WEBPACK_IMPORTED_MODULE_2__.OtherFiltersComponent, _filter_date_picker_filter_date_picker_component__WEBPACK_IMPORTED_MODULE_3__.FilterDatePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4704:
/*!******************************************************************!*\
  !*** ./src/app/filters/other-filters/other-filters.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OtherFiltersComponent: () => (/* binding */ OtherFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function OtherFiltersComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "label", 1)(2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OtherFiltersComponent_div_1_Template_input_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.sendFilter(item_r1.parameterValue, item_r1.parameterType, item_r1.label));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
  }
}
class OtherFiltersComponent {
  constructor() {}
  filter;
  filterValues;
  chosenFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  ngOnInit() {
    this.filterValues.forEach(value => {
      this.filter.forEach(item => {
        if (value === item.label) {
          // console.log(item.label);
          item.checked = true;
        }
      });
    });
  }
  sendFilter(type, value, label) {
    const keyAndFilter = [type, value, label];
    this.chosenFilter.emit(keyAndFilter);
  }
  static ɵfac = function OtherFiltersComponent_Factory(t) {
    return new (t || OtherFiltersComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OtherFiltersComponent,
    selectors: [["app-other-filters"]],
    inputs: {
      filter: "filter",
      filterValues: "filterValues"
    },
    outputs: {
      chosenFilter: "chosenFilter"
    },
    decls: 2,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [1, "pl-2", "linkBlue", "m-0", 3, "for"], ["type", "checkbox", 3, "id", "checked", "click"]],
    template: function OtherFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OtherFiltersComponent_div_1_Template, 4, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filter);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 520:
/*!******************************************!*\
  !*** ./src/app/gfbio/gfbio.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GfbioComponent: () => (/* binding */ GfbioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 5540);
/* harmony import */ var _services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/local/start-searching.service */ 9230);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-input/search-input.component */ 3949);
/* harmony import */ var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-result/search-result.component */ 7903);
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filters.component */ 5934);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/map.component */ 3398);









class GfbioComponent {
  communicationService;
  startSearchingService;
  route;
  location;
  semantic = false;
  resetFilters = true;
  result;
  searchKey = [];
  from = 0;
  filters;
  markers;
  searchKeyFromQuery = "";
  constructor(communicationService, startSearchingService, route, location) {
    this.communicationService = communicationService;
    this.startSearchingService = startSearchingService;
    this.route = route;
    this.location = location;
  }
  ngOnInit() {
    let filterFromUri = this.route.snapshot?.queryParamMap?.get("filter") ?? "";
    if (filterFromUri != "") {
      this.filters = JSON.parse(decodeURIComponent(filterFromUri));
    }
    this.semantic = this.route.snapshot?.queryParamMap?.get("s") == "1";
    let queryFromUri = decodeURIComponent(this.route.snapshot?.queryParamMap?.get("q") ?? "");
    if (queryFromUri != "" && !queryFromUri.match(/(\<|\>)/)) {
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
  mapItems(items) {
    this.markers = {
      items
    };
  }
  paginationClicked(from) {
    this.resetFilters = false;
    this.from = from;
    this.startSearching();
  }
  searchKeySubmitted(key) {
    this.resetFilters = true;
    this.searchKey = key[0];
    this.semantic = key[1];
    this.from = 0;
    this.filters = [];
    this.startSearching();
  }
  filterSubmitted(filters) {
    this.resetFilters = false;
    this.filters = filters;
    this.from = 0;
    this.startSearching();
  }
  startSearching() {
    this.setPageUrl();
    this.startSearchingService.startSearching(this.searchKey, this.semantic, this.from, this.filters);
  }
  setPageUrl() {
    var parameters = [this.searchKey?.join("") ? "q=" + this.searchKey.join("+") : null, this.semantic ? "s=1" : null, this.filters?.length > 0 ? "filter=" + JSON.stringify(this.filters) : null].filter(p => p);
    this.location.go(parameters.length > 0 ? "?" + parameters.join("&") : "");
  }
  static ɵfac = function GfbioComponent_Factory(t) {
    return new (t || GfbioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_1__.StartSearchingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: GfbioComponent,
    selectors: [["app-gfbio"]],
    decls: 10,
    vars: 7,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-3"], [3, "markers"], [3, "result", "resetFilters", "chosenFilter", "filters"], [1, "col-md-9"], [3, "searchKey", "semanticValue", "searchKeyEmmit"], [1, "mt-3"], [3, "result", "from", "mapItem"]],
    template: function GfbioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-map", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-filters", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filters", function GfbioComponent_Template_app_filters_filters_5_listener($event) {
          return ctx.filterSubmitted($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5)(7, "app-search-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchKeyEmmit", function GfbioComponent_Template_app_search_input_searchKeyEmmit_7_listener($event) {
          return ctx.searchKeySubmitted($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7)(9, "app-search-result", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("from", function GfbioComponent_Template_app_search_result_from_9_listener($event) {
          return ctx.paginationClicked($event);
        })("mapItem", function GfbioComponent_Template_app_search_result_mapItem_9_listener($event) {
          return ctx.mapItems($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("markers", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", ctx.result)("resetFilters", ctx.resetFilters)("chosenFilter", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("searchKey", ctx.searchKeyFromQuery)("semanticValue", ctx.semantic);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("result", ctx.result);
      }
    },
    dependencies: [_search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__.SearchInputComponent, _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__.SearchResultComponent, _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__.FiltersComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_5__.MapComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3398:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapComponent: () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ 7198);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ 2132);




class MapComponent {
  markers; // Adjust the type according to your data structure
  options = {
    layers: [leaflet__WEBPACK_IMPORTED_MODULE_0__.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })],
    zoom: 3,
    center: (0,leaflet__WEBPACK_IMPORTED_MODULE_0__.latLng)(48.59378, 9.35982)
  };
  layers = [];
  constructor() {}
  ngOnChanges(changes) {
    if (changes["markers"]) {
      this.updateMarkers();
    }
  }
  updateMarkers() {
    this.layers = []; // Reset layers
    if (this.markers && this.markers.items) {
      this.markers.items.forEach(item => {
        if (item.getLatitude() !== undefined && item.getLongitude() !== undefined) {
          const newCircle = leaflet__WEBPACK_IMPORTED_MODULE_0__.circle([item.getLatitude(), item.getLongitude()], {
            color: item.getColor(),
            fillColor: item.getColor(),
            fillOpacity: 0.5,
            radius: 500
          });
          this.layers.push(newCircle);
        }
      });
    }
  }
  static ɵfac = function MapComponent_Factory(t) {
    return new (t || MapComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MapComponent,
    selectors: [["app-map"]],
    inputs: {
      markers: "markers"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 2,
    consts: [["leaflet", "", 2, "height", "400px", 3, "leafletOptions", "leafletLayers"]],
    template: function MapComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("leafletOptions", ctx.options)("leafletLayers", ctx.layers);
      }
    },
    dependencies: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletDirective, _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__.LeafletLayersDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 828:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
















class MaterialModule {
  static ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule],
    imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_1__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatNativeDateModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule]
  });
})();

/***/ }),

/***/ 3695:
/*!**********************************************!*\
  !*** ./src/app/models/result/aggregation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aggregation: () => (/* binding */ Aggregation)
/* harmony export */ });
// filter box on the left side
class Aggregation {
  // the containing items in the box
  facets;
  // the id of the checkbox
  id;
  // the title of the checkbox
  title;
  // the name of the icon (mat-icon)
  icon;
  getFacets() {
    return this.facets;
  }
  setFacets(facets) {
    this.facets = facets;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getIcon() {
    return this.icon;
  }
  setIcon(icon) {
    this.icon = icon;
  }
}

/***/ }),

/***/ 7664:
/*!*******************************************!*\
  !*** ./src/app/models/result/citation.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Citation: () => (/* binding */ Citation)
/* harmony export */ });
// the citation for every dataset
class Citation {
  // the title of the dataset
  title;
  // the name of the authors
  creator;
  // the publication date
  date;
  source;
  // the url
  DOI;
  dataCenter;
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getCreator() {
    return this.creator;
  }
  setCreator(creator) {
    this.creator = creator;
  }
  getDate() {
    return this.date;
  }
  setDate(date) {
    this.date = date;
  }
  getPubYear() {
    return this.date?.substring(0, 4);
  }
  getSource() {
    return this.source;
  }
  setSource(source) {
    this.source = source;
  }
  getDOI() {
    return this.DOI;
  }
  setDOI(DOI) {
    this.DOI = DOI;
  }
  getDataCenter() {
    return this.dataCenter.toUpperCase();
  }
  setDataCenter(dataCenter) {
    this.dataCenter = dataCenter;
  }
}

/***/ }),

/***/ 4767:
/*!**********************************************!*\
  !*** ./src/app/models/result/description.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ Description)
/* harmony export */ });
// the descriptions after the title of the dataset
class Description {
  // the key of the description
  title;
  // the description value
  value;
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}

/***/ }),

/***/ 270:
/*!****************************************!*\
  !*** ./src/app/models/result/facet.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Facet: () => (/* binding */ Facet)
/* harmony export */ });
// checkbox item in the filter box
class Facet {
  // the mane of the facet
  key;
  // the number of the available datasets after applying the facet
  docCount;
  // if the facet is activated (by default, it is false)
  checked = false;
  getKey() {
    return this.key;
  }
  setKey(key) {
    this.key = key;
  }
  getChecked() {
    return this.checked;
  }
  setChecked(check) {
    this.checked = check;
  }
  getDocCount() {
    return this.docCount;
  }
  setDocCount(docCount) {
    this.docCount = docCount;
  }
}

/***/ }),

/***/ 9421:
/*!**************************************!*\
  !*** ./src/app/models/result/hit.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hit: () => (/* binding */ Hit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _citation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./citation */ 7664);
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description */ 4767);
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkage */ 1663);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ 4330);
/* harmony import */ var _upperLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upperLabel */ 8441);






// every dataset
class Hit {
  title;
  id;
  titleUrl;
  titleTooltip;
  description;
  // the colorful labels on the top of every dataset
  upperLabels;
  licence;
  // every dataset can contain images or videos or sound tracks
  multimediaObjs;
  vat;
  latitude;
  longitude;
  vatTooltip;
  citation;
  // it contains the information related to the download of the dataset
  linkage;
  // it contains the information related to the download of the dataset
  metadatalink;
  // it contains the information related to the download of the dataset
  dcIdentifier;
  // every dataset can be shown on the map with an specific color
  color;
  // most of the information of the dataset is in the xml
  xml;
  // if this dataset has been selected by the user
  checkbox;
  //
  datalink;
  parentIdentifier;
  dcType;
  constructor() {
    // ... other property assignments ...
    this.checkbox = false; // Set the default value to false
  }
  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  getMetadatalink() {
    return this.metadatalink;
  }
  setMetadatalink(metadatalink) {
    if (metadatalink != "undefined" && metadatalink != null) {
      this.metadatalink = encodeURI(metadatalink);
    } else {
      this.metadatalink = null;
    }
    // this.metadatalink = metadatalink;
  }
  getIdentifier() {
    return this.dcIdentifier;
  }
  setIdentifier(dcIdentifier) {
    this.dcIdentifier = dcIdentifier;
  }
  getLinkage() {
    return this.linkage;
  }
  setLinkage(linkage) {
    this.linkage = linkage;
  }
  getXml() {
    return this.xml;
  }
  setXml(xml) {
    this.xml = xml;
  }
  getTitleUrl() {
    return this.titleUrl;
  }
  setTitleUrl(titleUrl) {
    if (titleUrl != "undefined" && titleUrl != null) {
      this.titleUrl = encodeURI(titleUrl);
    } else {
      this.titleUrl = null;
    }
    // this.titleUrl = titleUrl;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  getUpperLabels() {
    return this.upperLabels;
  }
  setUpperLabels(upperLabels) {
    this.upperLabels = upperLabels;
  }
  getLicence() {
    return this.licence;
  }
  setLicence(licence) {
    this.licence = licence;
  }
  getVat() {
    return this.vat;
  }
  setVat(vat) {
    this.vat = vat;
  }
  getVatTooltip() {
    return this.vatTooltip;
  }
  setVatTooltip(vatTooltip) {
    this.vatTooltip = vatTooltip;
  }
  getCitation() {
    return this.citation;
  }
  setCitation(citation) {
    this.citation = citation;
  }
  getMultimediaObjs() {
    return this.multimediaObjs;
  }
  setMultimediaObjs(multimediaObjs) {
    this.multimediaObjs = multimediaObjs;
  }
  getLatitude() {
    return this.latitude;
  }
  setLatitude(latitude) {
    this.latitude = latitude;
  }
  getLongitude() {
    return this.longitude;
  }
  setLongitude(longitude) {
    this.longitude = longitude;
  }
  getTitleTooltip() {
    return this.titleTooltip;
  }
  setTitleTooltip(titleTooltip) {
    this.titleTooltip = titleTooltip;
  }
  getCheckBox() {
    return this.checkbox;
  }
  setCheckbox(checkbox) {
    this.checkbox = checkbox;
  }
  getDatalink() {
    return this.datalink;
  }
  setDatalink(datalink) {
    if (datalink != "undefined" && datalink != null) {
      this.datalink = encodeURI(datalink);
    } else {
      this.datalink = null;
    }
    // this.datalink = datalink;
  }
  getParentIdentifier() {
    return this.parentIdentifier;
  }
  setParentIdentifier(parentIdentifier) {
    this.parentIdentifier = parentIdentifier;
  }
  getType() {
    return this.dcType;
  }
  setType(dcType) {
    this.dcType = dcType;
  }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _description__WEBPACK_IMPORTED_MODULE_1__.Description)], Hit.prototype, "description", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _upperLabel__WEBPACK_IMPORTED_MODULE_3__.UpperLabel)], Hit.prototype, "upperLabels", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _citation__WEBPACK_IMPORTED_MODULE_0__.Citation)], Hit.prototype, "citation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,class_transformer__WEBPACK_IMPORTED_MODULE_5__.Type)(() => _linkage__WEBPACK_IMPORTED_MODULE_2__.Linkage)], Hit.prototype, "linkage", void 0);

/***/ }),

/***/ 1663:
/*!******************************************!*\
  !*** ./src/app/models/result/linkage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Linkage: () => (/* binding */ Linkage)
/* harmony export */ });
// it contains the information related to the download of the dataset
class Linkage {
  data;
  metadata;
  multimedia;
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }
  getMetadata() {
    return this.metadata;
  }
  setMetadata(metadata) {
    if (metadata != "undefined" && metadata != null) {
      this.metadata = encodeURI(metadata);
    } else {
      this.metadata = null;
    }
    // this.metadata = metadata;
  }
  getMultimedia() {
    return this.multimedia;
  }
  setMultimedia(multimedia) {
    this.multimedia = multimedia;
  }
}

/***/ }),

/***/ 4978:
/*!*****************************************!*\
  !*** ./src/app/models/result/result.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Result: () => (/* binding */ Result)
/* harmony export */ });
// the response from server
class Result {
  // the response from server contains several datasets
  hits;
  // the extended semantic keys related to the search key
  semanticKeys;
  termData;
  // the number of founded datasets related to the search key
  totalNumber;
  // filters which contains facets(it changes in every request)
  aggregations;
  // the filters which don't change by new request
  otherFilters;
  datePickers;
  getHits() {
    return this.hits;
  }
  setHits(hits) {
    this.hits = hits;
  }
  getOtherFilters() {
    return this.otherFilters;
  }
  setOtherFilters(otherFilters) {
    this.otherFilters = otherFilters;
  }
  getDatePickers() {
    return this.datePickers;
  }
  setDatePickers(datePickers) {
    this.datePickers = datePickers;
  }
  getSemanticKeys() {
    return this.semanticKeys;
  }
  setSemanticKeys(semanticKeys) {
    this.semanticKeys = semanticKeys;
  }
  getTermData() {
    return this.termData;
  }
  setTermData(termData) {
    this.termData = termData;
  }
  getAggregations() {
    return this.aggregations;
  }
  setAggregations(aggregations) {
    this.aggregations = aggregations;
  }
  getTotalNumber() {
    return this.totalNumber;
  }
  setTotalNumber(totalNumber) {
    this.totalNumber = totalNumber;
  }
}

/***/ }),

/***/ 8441:
/*!*********************************************!*\
  !*** ./src/app/models/result/upperLabel.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpperLabel: () => (/* binding */ UpperLabel)
/* harmony export */ });
// the colorful labels on the upper side of every dataset
class UpperLabel {
  // the text inside the label
  innerInfo;
  // the tooltip which will be shown by hovering over the label
  tooltip;
  // the color class in the css file to show the color of the label
  colorClass;
  getInnerInfo() {
    return this.innerInfo;
  }
  setInnerInfo(innerInfo) {
    this.innerInfo = innerInfo;
  }
  getTooltip() {
    return this.tooltip;
  }
  setTooltip(tooltip) {
    this.tooltip = tooltip;
  }
  getColorClass() {
    return this.colorClass;
  }
  setColorClass(colorClass) {
    this.colorClass = colorClass;
  }
}

/***/ }),

/***/ 695:
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/pagination */ 4850);




class PaginationComponent {
  result;
  paginationClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  itemsPerPage = 10;
  currentPage = 1;
  totalItemCount = 1;
  items = [];
  pageOfItems;
  ngOnChanges(changes) {
    if (changes?.result?.currentValue?.getTotalNumber() !== changes?.result?.previousValue?.getTotalNumber()) {
      if (!isNaN(changes?.result?.currentValue?.getTotalNumber())) {
        this.totalItemCount = changes?.result?.currentValue?.getTotalNumber();
      }
    }
  }
  onChangePage(event) {
    this.currentPage = event.page;
    let from = (this.currentPage - 1) * this.itemsPerPage;
    from = Math.min(from, Math.max(0, this.totalItemCount - this.itemsPerPage));
    this.paginationClicked.emit(from);
  }
  static ɵfac = function PaginationComponent_Factory(t) {
    return new (t || PaginationComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaginationComponent,
    selectors: [["app-pagination"]],
    inputs: {
      result: "result"
    },
    outputs: {
      paginationClicked: "paginationClicked"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 7,
    consts: [[1, "container", "pagination-container"], [3, "ngModel", "totalItems", "itemsPerPage", "maxSize", "rotate", "boundaryLinks", "directionLinks", "ngModelChange", "pageChanged"]],
    template: function PaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "pagination", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginationComponent_Template_pagination_ngModelChange_1_listener($event) {
          return ctx.currentPage = $event;
        })("pageChanged", function PaginationComponent_Template_pagination_pageChanged_1_listener($event) {
          return ctx.onChangePage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentPage)("totalItems", ctx.totalItemCount)("itemsPerPage", ctx.itemsPerPage)("maxSize", 10)("rotate", true)("boundaryLinks", false)("directionLinks", true);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationComponent],
    styles: [".pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDJlbTtcbiAgcGFkZGluZy1ib3R0b206IDJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3949:
/*!********************************************************!*\
  !*** ./src/app/search-input/search-input.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInputComponent: () => (/* binding */ SearchInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 1713);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/remote/node.service */ 5659);
/* harmony import */ var _services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local/start-searching.service */ 9230);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local/communication.service */ 5540);
/* harmony import */ var _services_local_input_analysis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local/input-analysis.service */ 7846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../suggestion-window/suggestion-window.component */ 9415);











function SearchInputComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "app-suggestion-window", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("windowSuggestKey", function SearchInputComponent_div_11_Template_app_suggestion_window_windowSuggestKey_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.onWindowSuggestKey($event));
    })("isClicked", function SearchInputComponent_div_11_Template_app_suggestion_window_isClicked_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.windowSuggestion = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SearchInputComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Please do not use these special characters in a search:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("!@#$%^&_+-=[];':\\|,<>/?", "{}", "");
  }
}
const _c0 = () => ({
  standalone: true
});
class SearchInputComponent {
  nodeService;
  startSearchingService;
  communicationService;
  inputAnalysis;
  constructor(nodeService, startSearchingService, communicationService, inputAnalysis) {
    this.nodeService = nodeService;
    this.startSearchingService = startSearchingService;
    this.communicationService = communicationService;
    this.inputAnalysis = inputAnalysis;
  }
  faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSearch;
  searchKey;
  searchKeyEmmit = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  result;
  windowSuggestion = false;
  semanticValue;
  formatSimpleSearch = /[!@#$%^&_\-=\[\]{};:\\,<>\/?]+/;
  formatSemanticSearch = /[!@#$%^&_\-=\[\]{};:\\,<>\/?]+/;
  alertSearch = false;
  alertSemanticSearch = false;
  semSearchImg = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.imagePath + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.semSearchImg;
  ngOnInit() {
    // const str = 'fff (gg tt gg) hhh (jj vv + cc gg) lll + kkk + rrr bee*';
    // console.log(str);
    // this.inputAnalysis.getAnalysis(str).then((response) => console.log(response));
  }
  // by entering a letter on the form, a request will be sent to the node server and then it will be sent to suggestion-window
  onWindowSuggestKey(value) {
    if (value !== undefined) {
      const searchField = document.getElementById("searchField");
      if (searchField) {
        searchField.value = value;
      }
      this.searchKey = value;
      this.alertSearch = this.formatSimpleSearch.test(this.searchKey);
      this.alertSemanticSearch = false;
      this.startSearching(this.semanticValue);
      this.windowSuggestion = false;
    }
  }
  // by clicking on the search button, this method will be called
  onSearch() {
    this.semanticValue = false;
    this.alertSearch = this.formatSimpleSearch.test(this.searchKey);
    this.alertSemanticSearch = false;
    this.startSearching(this.semanticValue);
  }
  // by clicking on the semantic search button, this method will be called
  semantic() {
    this.semanticValue = true;
    this.alertSearch = false;
    this.alertSemanticSearch = this.formatSemanticSearch.test(this.searchKey);
    this.startSearching(this.semanticValue);
    const subject = this.communicationService.getSearchKey();
    subject.next(this.searchKey);
    subject.subscribe(value => {
      this.searchKey = value;
    });
  }
  startSearching(semantic) {
    if (this.searchKey.endsWith("*") && this.searchKey.length < 6 && semantic === true) {
      alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertWordLength);
    } else {
      this.inputAnalysis.getAnalysis2(this.searchKey, semantic).then(response => {
        // console.log(response);
        const keyAndSemantic = [response, semantic];
        // console.log(keyAndSemantic);
        this.searchKeyEmmit.emit(keyAndSemantic);
      });
      // const keyAndSemantic = [this.searchKey, semantic];
      // this.searchKeyEmmit.emit(keyAndSemantic);
    }
  }
  onSuggest() {
    this.nodeService.suggestSimple(this.searchKey).subscribe(data => {
      this.communicationService.setSuggest(data.suggest[0].options);
      this.windowSuggestion = data.suggest[0].options.length !== 0;
    });
  }
  static ɵfac = function SearchInputComponent_Factory(t) {
    return new (t || SearchInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_start_searching_service__WEBPACK_IMPORTED_MODULE_2__.StartSearchingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_3__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_local_input_analysis_service__WEBPACK_IMPORTED_MODULE_4__.InputAnalysisService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SearchInputComponent,
    selectors: [["app-search-input"]],
    inputs: {
      searchKey: "searchKey",
      semanticValue: "semanticValue"
    },
    outputs: {
      searchKeyEmmit: "searchKeyEmmit"
    },
    decls: 13,
    vars: 5,
    consts: [["autocomplete", "off", 3, "ngSubmit"], [1, "input-group", "input-search"], ["type", "text", "placeholder", "Search...", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["searchInput", ""], [1, "input-group-append"], ["type", "submit", "id", "button-search", 1, "btn", "btn-outline-primary", "fw-bold"], ["type", "button", "id", "button-search", 1, "btn", "btn-outline-primary", "fw-bold", 3, "click"], [1, "position-relative"], ["class", "suggestion-window", 4, "ngIf"], ["class", "text-danger ml-1", 4, "ngIf"], [1, "suggestion-window"], [3, "windowSuggestKey", "isClicked"], [1, "text-danger", "ml-1"]],
    template: function SearchInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function SearchInputComponent_Template_form_ngSubmit_1_listener() {
          return ctx.onSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1)(3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.searchKey = $event;
        })("ngModelChange", function SearchInputComponent_Template_input_ngModelChange_3_listener() {
          return ctx.onSuggest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SearchInputComponent_Template_button_click_8_listener() {
          return ctx.semantic();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Semantic Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SearchInputComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SearchInputComponent_div_12_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.windowSuggestion);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.alertSearch);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _suggestion_window_suggestion_window_component__WEBPACK_IMPORTED_MODULE_5__.SuggestionWindowComponent],
    styles: ["\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--gfbio-green); \n\n  box-shadow: 0 0 0 0.2rem rgba(129, 178, 72, 0.25); \n\n}\n\n\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: var(--gfbio-green); \n\n  border-color: var(--gfbio-green); \n\n  font-weight: 700;\n}\n\n\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #000; \n\n  background-color: var(--gfbio-green); \n\n  border-color: var(--gfbio-green); \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLWlucHV0L3NlYXJjaC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBEQUEwRDtBQUMxRDtFQUNFLGdDQUFnQyxFQUFFLGlDQUFpQztFQUNuRSxpREFBaUQsRUFBRSxzQ0FBc0M7QUFDM0Y7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UseUJBQXlCLEVBQUUsaUNBQWlDO0VBQzVELGdDQUFnQyxFQUFFLGlDQUFpQztFQUNuRSxnQkFBZ0I7QUFDbEI7O0FBRUEsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVyxFQUFFLGVBQWU7RUFDNUIsb0NBQW9DLEVBQUUsaUNBQWlDO0VBQ3ZFLGdDQUFnQyxFQUFFLGlDQUFpQztBQUNyRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGZvciB0aGUgaW5wdXQgZmllbGQgd2hlbiBpdCBpcyBhY3RpdmUgKGZvY3VzZWQpICovXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nZmJpby1ncmVlbik7IC8qIFVzZSB0aGUgZ3JlZW4gY29sb3IgdmFyaWFibGUgKi9cbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTI5LCAxNzgsIDcyLCAwLjI1KTsgLyogQWRqdXN0IHRoZSByZ2JhIHZhbHVlIGFjY29yZGluZ2x5ICovXG59XG5cbi8qIERlZmF1bHQgc3R5bGUgZm9yIGJ1dHRvbnMgKi9cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgY29sb3I6IHZhcigtLWdmYmlvLWdyZWVuKTsgLyogVXNlIHRoZSBncmVlbiBjb2xvciB2YXJpYWJsZSAqL1xuICBib3JkZXItY29sb3I6IHZhcigtLWdmYmlvLWdyZWVuKTsgLyogVXNlIHRoZSBncmVlbiBjb2xvciB2YXJpYWJsZSAqL1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBTdHlsZSBmb3IgYnV0dG9ucyBvbiBob3ZlciAqL1xuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIge1xuICBjb2xvcjogIzAwMDsgLyogQmxhY2sgdGV4dCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nZmJpby1ncmVlbik7IC8qIFVzZSB0aGUgZ3JlZW4gY29sb3IgdmFyaWFibGUgKi9cbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nZmJpby1ncmVlbik7IC8qIFVzZSB0aGUgZ3JlZW4gY29sb3IgdmFyaWFibGUgKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6339:
/*!********************************************************************!*\
  !*** ./src/app/search-result/description/description.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescriptionComponent: () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function DescriptionComponent_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_span_5_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.showMore = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " [+] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DescriptionComponent_span_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DescriptionComponent_span_5_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.showMore = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " [-] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DescriptionComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DescriptionComponent_span_5_span_1_Template, 2, 0, "span", 5)(2, DescriptionComponent_span_5_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showMore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMore);
  }
}
const _c0 = a0 => ({
  "showLess": a0
});
class DescriptionComponent {
  des;
  showMore = false;
  constructor() {}
  ngOnInit() {
    //console.log(this.des);
  }
  showLess(length) {
    if (this.showMore === true) {
      return true;
    } else {
      return length <= 400;
    }
  }
  static ɵfac = function DescriptionComponent_Factory(t) {
    return new (t || DescriptionComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DescriptionComponent,
    selectors: [["app-description"]],
    inputs: {
      des: "des"
    },
    decls: 6,
    vars: 6,
    consts: [[1, "d-flex"], [1, "mr-2"], [1, "d-inline-block", 3, "innerHTML", "ngClass"], ["style", "vertical-align: super", 4, "ngIf"], [2, "vertical-align", "super"], ["class", "linkBlue", 3, "click", 4, "ngIf"], [1, "linkBlue", 3, "click"]],
    template: function DescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DescriptionComponent_span_5_Template, 3, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.des.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.des.getValue(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, !ctx.showLess(ctx.des.getValue().length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.des.getValue()) == null ? null : tmp_3_0.length) > 400);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1906:
/*!********************************************************************!*\
  !*** ./src/app/search-result/result-item/result-item.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultItemComponent: () => (/* binding */ ResultItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 1713);
/* harmony import */ var _citation_citation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../citation/citation.component */ 3428);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/local/communication.service */ 5540);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 702);














function ResultItemComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strong", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const desc_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](desc_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", desc_r7.value, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function ResultItemComponent_div_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const media_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", media_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](media_r9.url);
  }
}
function ResultItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Multimedia Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ResultItemComponent_div_6_li_4_Template, 3, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.item.getMultimediaObjs());
  }
}
function ResultItemComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const label_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](label_r10.colorClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", label_r10.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](label_r10.innerInfo);
  }
}
function ResultItemComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.item.licence.join(" + "));
  }
}
function ResultItemComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "VAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ResultItemComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r5.item.getLinkage().getData(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ResultItemComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResultItemComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11.openDialog(ctx_r11.itemId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Citation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = () => [];
const _c1 = (a0, a1) => ({
  "btn-outline-danger": a0,
  "btn-outline-success": a1
});
const _c2 = (a0, a1) => ({
  "fa-cart-arrow-down": a0,
  "fa-cart-plus": a1
});
class ResultItemComponent {
  communicationService;
  sanitizer;
  dialog;
  item;
  itemId;
  faVolumeUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faVolumeUp;
  faDownload = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faDownload;
  faVideo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faVideo;
  faImage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faImage;
  faQuoteLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faQuoteLeft;
  vatImg = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagePath + _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.vatImg;
  imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.imagePath;
  checkBoxItem = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  constructor(communicationService, sanitizer, dialog) {
    this.communicationService = communicationService;
    this.sanitizer = sanitizer;
    this.dialog = dialog;
  }
  ngOnInit() {}
  openDialog(i) {
    this.communicationService.setCitation(i);
    const dialogRef = this.dialog.open(_citation_citation_component__WEBPACK_IMPORTED_MODULE_0__.CitationComponent, {
      data: this.item
    });
  }
  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  checkBox(key, value) {
    this.item.setCheckbox(value.checked);
    this.checkBoxItem.emit(this.item);
  }
  toggleCheckbox(key, value) {
    this.item.setCheckbox(!this.item.getCheckBox()); // Toggle the checkbox state
    this.checkBoxItem.emit(this.item);
  }
  static ɵfac = function ResultItemComponent_Factory(t) {
    return new (t || ResultItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ResultItemComponent,
    selectors: [["app-result-item"]],
    inputs: {
      item: "item",
      itemId: "itemId"
    },
    outputs: {
      checkBoxItem: "checkBoxItem"
    },
    decls: 20,
    vars: 18,
    consts: [[1, "card", "mt-3"], [1, "card-header", "white-background"], [1, "card-body"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card-footer", "d-flex", "justify-content-between", "align-items-center", "white-background"], ["class", "badge badge-pill custom-badge mr-2", 3, "class", "matTooltip", 4, "ngFor", "ngForOf"], ["class", "badge badge-pill badge-yellow mr-2", 4, "ngIf"], ["class", "badge badge-pill badge-secondary custom-badge", 4, "ngIf"], [1, "my-button-group"], [1, "btn", "btn-outline-secondary", "mr-2", 3, "href"], ["class", "btn btn-outline-secondary mr-2", "download", "", 3, "href", 4, "ngIf"], ["class", "btn btn-outline-secondary mr-2", "matTooltip", "Show citation", "matTooltipClass", "result-item-tooltip", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "ngClass", "click"], [1, "fa", 3, "ngClass"], [1, "text-muted"], [3, "innerHTML"], ["target", "_blank", 3, "href"], [1, "badge", "badge-pill", "custom-badge", "mr-2", 3, "matTooltip"], [1, "badge", "badge-pill", "badge-yellow", "mr-2"], [1, "badge", "badge-pill", "badge-secondary", "custom-badge"], ["download", "", 1, "btn", "btn-outline-secondary", "mr-2", 3, "href"], ["matTooltip", "Show citation", "matTooltipClass", "result-item-tooltip", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"]],
    template: function ResultItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ResultItemComponent_div_5_Template, 4, 2, "div", 3)(6, ResultItemComponent_div_6_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ResultItemComponent_span_9_Template, 3, 4, "span", 6)(10, ResultItemComponent_span_10_Template, 3, 1, "span", 7)(11, ResultItemComponent_span_11_Template, 3, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ResultItemComponent_a_15_Template, 2, 1, "a", 11)(16, ResultItemComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResultItemComponent_Template_button_click_17_listener($event) {
          return ctx.toggleCheckbox(ctx.itemId, $event.target);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Basket ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.item.getDescription());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.getMultimediaObjs() && ctx.item.getMultimediaObjs().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.item.getUpperLabels());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.getLicence());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.getVat());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx.item.getTitleUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.getType().includes("ABCD_Dataset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.getCitation().getSource() !== undefined && ctx.item.getCitation().getCreator() !== _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](12, _c1, ctx.item.getCheckBox(), !ctx.item.getCheckBox()));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](15, _c2, ctx.item.getCheckBox(), !ctx.item.getCheckBox()));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip],
    styles: [".card {\n  transition: box-shadow 0.3s ease-in-out; /* Smooth transition for the shadow */\n}\n\n.card:hover {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Slight drop shadow on hover */\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VhcmNoLXJlc3VsdC9yZXN1bHQtaXRlbS9yZXN1bHQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDLEVBQUUscUNBQXFDO0FBQ2hGOztBQUVBO0VBQ0Usd0NBQXdDLEVBQUUsZ0NBQWdDO0FBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7IC8qIFNtb290aCB0cmFuc2l0aW9uIGZvciB0aGUgc2hhZG93ICovXG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgLyogU2xpZ2h0IGRyb3Agc2hhZG93IG9uIGhvdmVyICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7903:
/*!**********************************************************!*\
  !*** ./src/app/search-result/search-result.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResultComponent: () => (/* binding */ SearchResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _models_result_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/result/result */ 4978);
/* harmony import */ var _basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basket-dialog/basket-dialog.component */ 7437);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/result/hit */ 9421);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! class-transformer */ 4029);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/remote/node.service */ 5659);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! keycloak-angular */ 3950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pagination/pagination.component */ 695);
/* harmony import */ var _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-item/result-item.component */ 1906);
/* harmony import */ var _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context-box/context-box.component */ 1442);














function SearchResultComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No entries found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SearchResultComponent_div_9_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseover", function SearchResultComponent_div_9_span_3_Template_div_mouseover_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.popoverVisible = item_r4);
    })("mouseleave", function SearchResultComponent_div_9_span_3_Template_div_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.popoverVisible = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-context-box", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r4, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r3.popoverVisible != item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("term", item_r4)("termData", ctx_r3.result == null ? null : ctx_r3.result.getTermData());
  }
}
function SearchResultComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Expanded terms: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SearchResultComponent_div_9_span_3_Template, 5, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.result == null ? null : ctx_r1.result.getSemanticKeys());
  }
}
function SearchResultComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "app-result-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("checkBoxItem", function SearchResultComponent_div_11_div_1_Template_app_result_item_checkBoxItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.checkBoxClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("item", item_r10)("itemId", i_r11);
  }
}
function SearchResultComponent_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "app-pagination", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("paginationClicked", function SearchResultComponent_div_11_div_2_Template_app_pagination_paginationClicked_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.paginationClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("result", ctx_r9.result);
  }
}
function SearchResultComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SearchResultComponent_div_11_div_1_Template, 2, 2, "div", 14)(2, SearchResultComponent_div_11_div_2_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.result == null ? null : ctx_r2.result.getHits());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r2.result == null ? null : (tmp_1_0 = ctx_r2.result.getHits()) == null ? null : tmp_1_0.length) !== 0);
  }
}
class SearchResultComponent {
  dialog;
  nodeService;
  keycloakService;
  semantic;
  result = new _models_result_result__WEBPACK_IMPORTED_MODULE_0__.Result();
  basketValues = [];
  from = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  mapItem = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
  popoverVisible = "";
  user;
  basketId;
  constructor(dialog, nodeService, keycloakService) {
    this.dialog = dialog;
    this.nodeService = nodeService;
    this.keycloakService = keycloakService;
  }
  ngOnInit() {
    try {
      this.user = this.keycloakService.getUsername();
      if (this.user !== undefined) {
        this.nodeService.readFromBasket(this.user).subscribe(result => {
          if (result.length !== 0) {
            const basket = JSON.parse(result[0]?.basketcontent)?.selected;
            basket.forEach(item => {
              const hit = (0,class_transformer__WEBPACK_IMPORTED_MODULE_8__.plainToClass)(_models_result_hit__WEBPACK_IMPORTED_MODULE_2__.Hit, item);
              this.basketValues.push(hit);
            });
            this.mapItem.emit(this.basketValues);
          }
        });
      } else {
        this.user = null;
      }
      // console.log('ngOnInit() search-result.components | this.user : ', this.user);
    } catch {
      this.user = null;
    }
    this.basketId = null;
  }
  ngOnChanges(changes) {
    if (changes?.result?.currentValue !== changes?.result?.previousValue) {
      this.controlCheckboxes(this.basketValues);
    }
  }
  checkBoxClick(item) {
    // console.log('checkBoxClick(item: Hit): void | ...');
    if (item.getCheckBox()) {
      this.basketValues.push(item);
    } else {
      const index = this.basketValues.indexOf(item);
      this.basketValues.splice(index, 1);
    }
    this.mapItem.emit(this.basketValues);
  }
  basketClick() {
    // console.log('basketClick(): void | ...');
    const dialogRef = this.dialog.open(_basket_dialog_basket_dialog_component__WEBPACK_IMPORTED_MODULE_1__.BasketDialogComponent, {
      data: this.basketValues,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(basketValues => {
      // console.log('basketClick(): void | after close ... subscribe');
      // console.log(basketValues);
      this.basketValues = basketValues[0];
      this.result.getHits().forEach(resultValue => {
        resultValue.setCheckbox(false);
      });
      this.controlCheckboxes(this.basketValues);
      this.mapItem.emit(this.basketValues);
    });
  }
  controlCheckboxes(basketValues) {
    basketValues.forEach(basketValue => {
      const basketId = basketValue.getId();
      this.result.getHits().forEach(resultValue => {
        const resultId = resultValue.getId();
        if (resultId === basketId) {
          resultValue.setCheckbox(true);
        }
      });
    });
  }
  paginationClicked(from) {
    this.from.emit(from);
  }
  static ɵfac = function SearchResultComponent_Factory(t) {
    return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_remote_node_service__WEBPACK_IMPORTED_MODULE_3__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SearchResultComponent,
    selectors: [["app-search-result"]],
    inputs: {
      result: "result"
    },
    outputs: {
      from: "from",
      mapItem: "mapItem"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 12,
    vars: 4,
    consts: [[1, "basket", "mb-3", 3, "click"], [1, "basket-img"], ["src", "assets/img/basket.png", 1, "w-100"], [1, "basket-number", "Absolute-Center"], [1, "basket-text"], ["class", "text-danger", 4, "ngIf"], [4, "ngIf"], ["type", "ball-scale-pulse"], [1, "text-danger"], ["class", "highlightedKey", 4, "ngFor", "ngForOf"], [1, "highlightedKey"], [3, "mouseover", "mouseleave"], [3, "hidden"], [3, "term", "termData"], ["class", "pt-1", 4, "ngFor", "ngForOf"], [1, "pt-1"], [3, "item", "itemId", "checkBoxItem"], [3, "result", "paginationClicked"]],
    template: function SearchResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SearchResultComponent_Template_div_click_1_listener() {
          return ctx.basketClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Dataset Basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SearchResultComponent_div_8_Template, 2, 0, "div", 5)(9, SearchResultComponent_div_9_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "ngx-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SearchResultComponent_div_11_Template, 3, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.basketValues.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : (tmp_1_0 = ctx.result.getHits()) == null ? null : tmp_1_0.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : ctx.result.getSemanticKeys()) !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.result == null ? null : (tmp_3_0 = ctx.result.getHits()) == null ? null : tmp_3_0.length) !== 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__.PaginationComponent, _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_5__.ResultItemComponent, _context_box_context_box_component__WEBPACK_IMPORTED_MODULE_6__.ContextBoxComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5540:
/*!*********************************************************!*\
  !*** ./src/app/services/local/communication.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommunicationService: () => (/* binding */ CommunicationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class CommunicationService {
  filter = [];
  suggest;
  searchKey;
  urlIndex = "/gfbio";
  IsSearchKey;
  IsSemantic;
  pagination;
  result;
  citation;
  removedFilter;
  constructor() {
    // @ts-ignore
    this.suggest = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    // @ts-ignore
    this.searchKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    // @ts-ignore
    this.result = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    // @ts-ignore
    this.citation = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    // @ts-ignore
    this.removedFilter = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
    // @ts-ignore
    this.IsSearchKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject();
  }
  setSuggest(suggest) {
    this.suggest.next(suggest);
  }
  getSuggest() {
    return this.suggest.asObservable();
  }
  setIsSearchKey(IsSearchKey) {
    this.IsSearchKey.next(IsSearchKey);
  }
  getIsSearchKey() {
    return this.IsSearchKey.asObservable();
  }
  setIsSemantic(IsSemantic) {
    this.IsSemantic = IsSemantic;
  }
  getIsSemantic() {
    return this.IsSemantic;
  }
  setPagination(key) {
    this.pagination = key;
  }
  getPagination() {
    return this.pagination;
  }
  setUrlIndex(key) {
    this.urlIndex = key;
  }
  getUrlIndex() {
    return this.urlIndex;
  }
  setSearchKey(key) {
    this.searchKey = key;
  }
  getSearchKey() {
    return this.searchKey;
  }
  setFilter(key) {
    this.filter = key;
  }
  getFilter() {
    return this.filter;
  }
  setResult(key) {
    this.result.next(key);
  }
  getResult() {
    return this.result;
  }
  setCitation(key) {
    this.citation.next(key);
  }
  getCitation() {
    return this.citation;
  }
  setRemovedFilter(key) {
    this.removedFilter.next(key);
  }
  getRemovedFilter() {
    return this.removedFilter;
  }
  xmltoJson(xmlStr) {
    // @ts-ignore
    const convert = __webpack_require__(/*! xml-js */ 9005);
    let xml = '<?xml version="1.0" encoding="utf-8"?>' + xmlStr;
    xml = convert.xml2json(xml, {
      compact: false,
      spaces: 4
    });
    return JSON.parse(xml);
  }
  static ɵfac = function CommunicationService_Factory(t) {
    return new (t || CommunicationService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CommunicationService,
    factory: CommunicationService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 1068:
/*!*****************************************************************!*\
  !*** ./src/app/services/local/gfbio-preprocess-data.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GfbioPreprocessDataService: () => (/* binding */ GfbioPreprocessDataService)
/* harmony export */ });
/* harmony import */ var _models_result_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/result/result */ 4978);
/* harmony import */ var _models_result_hit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/result/hit */ 9421);
/* harmony import */ var _models_result_citation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/result/citation */ 7664);
/* harmony import */ var _models_result_aggregation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/result/aggregation */ 3695);
/* harmony import */ var _models_result_facet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/result/facet */ 270);
/* harmony import */ var _models_result_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/result/description */ 4767);
/* harmony import */ var _models_result_linkage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/result/linkage */ 1663);
/* harmony import */ var _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/result/upperLabel */ 8441);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./communication.service */ 5540);











class GfbioPreprocessDataService {
  communicationService;
  constructor(communicationService) {
    this.communicationService = communicationService;
  }
  static dataCenter = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.dataCenter;
  static dataType = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.dataType;
  static parameter = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.parameter;
  static taxonomy = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.taxonomy;
  static geographicRegion = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.geographicRegion;
  static type = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.type;
  static datacenterTooltips = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.datacenterTooltips;
  id;
  colors = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.colors;
  vatTooltip = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.vatTooltip;
  noCoordinates = _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.noCoordinates;
  /*maps the json which comes from the server to the Result class, it is the most important function in this service,
    other functions can be deleted according to the json response
    this method gets the json object and an array of parameters which are necessary for mapping*/
  getResult(jsonObject, parameters) {
    this.id = 10;
    const result = new _models_result_result__WEBPACK_IMPORTED_MODULE_0__.Result();
    result.setSemanticKeys(jsonObject?.lastItem);
    const hits = this.getHits(jsonObject, parameters[0]);
    result.setHits(hits);
    result.setAggregations(this.getAggregations(jsonObject));
    result.setTotalNumber(jsonObject?.hits?.total);
    result.setOtherFilters(this.getOtherFilters());
    result.setDatePickers(this.getDatePickers());
    result.setTermData(jsonObject?.termData);
    return result;
  }
  // maps the datasets
  getHits(jsonObject, semantic) {
    const hits = [];
    const hitsOfObject = jsonObject?.hits?.hits;
    hitsOfObject.forEach(item => {
      hits.push(this.getHit(item, semantic));
    });
    return hits;
  }
  // maps the citation data
  getCitation(item, titleURL) {
    const citation = new _models_result_citation__WEBPACK_IMPORTED_MODULE_2__.Citation();
    const xmlStr = item?.xml;
    const jsonResult = this.communicationService.xmltoJson(xmlStr)?.elements?.[0]?.elements;
    const creator = [];
    jsonResult.forEach(value => {
      switch (value?.name) {
        case "dc:title":
          {
            citation.setTitle(value?.elements?.[0]?.text);
            break;
          }
        case "dc:creator":
          {
            creator.push(value?.elements?.[0]?.text);
            break;
          }
        case "dc:date":
          {
            citation.setDate(value?.elements?.[0]?.text);
            break;
          }
      }
    });
    citation.setDOI(titleURL);
    let dataCenter = item?.dataCenter.split(" ").pop();
    if (dataCenter === "Science") {
      dataCenter = "PANGAEA";
    }
    citation.setDataCenter(dataCenter);
    citation.setSource(item?.citation_source);
    citation.setCreator(creator);
    return citation;
  }
  // maps the title
  getTopic(dataset, semantic) {
    const dom = document.createRange().createContextualFragment(dataset?._source?.["html-1"]);
    let topic = "";
    dom?.querySelectorAll(".citation span").forEach(spanValue => {
      topic = topic + spanValue.innerHTML;
      if (spanValue.classList.contains("date")) {
        topic = topic + ": ";
      }
    });
    if (semantic) {
      const highLightTitle = dataset?.highlight?.citation_title?.[0];
      let matchTitle = highLightTitle?.replace(/<em>/g, "");
      matchTitle = matchTitle?.replace(/<\/em>/g, "");
      topic = topic?.replace(matchTitle, highLightTitle);
    }
    return topic;
  }
  // maps the url title
  getTopicUrl(dom) {
    const titleURL = dom?.querySelector(".citation a")?.getAttribute("href");
    if (titleURL === undefined || titleURL === "undefined") {
      return "undefined";
    } else {
      return titleURL;
    }
  }
  // maps the licenses
  getLicense(dataset) {
    let license = dataset?._source?.licenseShort;
    if (!Array.isArray(license)) {
      license = [license];
    }
    license.forEach((l, i) => {
      const allLicences = ["CC BY", "CC BY-NC", "CC BY-NC-ND", "CC BY-NC-SA", "CC BY-ND", "CC BY-SA", "CC0", "GPL", "All rights reserved"];
      if (!allLicences.includes(l)) {
        license[i] = "Other";
      }
    });
    return license;
  }
  // maps a dataset
  getHit(item, semantic) {
    const source = item?._source;
    const hit = new _models_result_hit__WEBPACK_IMPORTED_MODULE_1__.Hit();
    hit.setId(item?._id);
    const dom = document.createRange().createContextualFragment(source?.["html-1"]);
    hit.setTitleUrl(this.getTopicUrl(dom));
    hit.setTitle(this.getTopic(item, semantic));
    hit.setUpperLabels(this.getLabels(source));
    hit.setCitation(this.getCitation(source, this.getTopicUrl(dom)));
    hit.setLicence(this.getLicense(item));
    hit.setVat(source?.vatVisualizable);
    hit.setVatTooltip(this.vatTooltip);
    hit.setXml(source?.xml);
    hit.setLongitude(source?.maxLongitude);
    hit.setLatitude(source?.minLatitude);
    hit.setMetadatalink(source?.metadatalink);
    hit.setDatalink(source?.datalink);
    // set array of descriptions
    const tr = dom?.querySelectorAll(".desc tr");
    const description = [];
    tr.forEach(row => {
      const title = row?.querySelectorAll("td")?.[0]?.innerHTML;
      const value = row?.querySelectorAll("td")?.[1]?.innerHTML;
      if (title === "Parameters:" || title === "Summary:") {
        const descriptionItem = new _models_result_description__WEBPACK_IMPORTED_MODULE_5__.Description();
        descriptionItem.setTitle(title);
        descriptionItem.setValue(value);
        description.push(descriptionItem);
      }
    });
    // if the search is semantic, puts the highlighted words in <em></em> tag
    if (semantic) {
      const highLightDescription = item?.highlight?.description;
      if (highLightDescription !== undefined && highLightDescription.length > 0) {
        highLightDescription.forEach(entry => {
          const entryCopy = entry;
          entry = entry?.replace(/<em>/g, "");
          entry = entry?.replace(/<\/em>/g, "");
          description.forEach(row => {
            row.value = row.value?.replace(entry, entryCopy);
          });
        });
      }
    }
    // in order to extract some properties from xml, I converted it from string to xml format
    // the properties that are going to be extracted are: identifier, linkage and MultimediaObjs
    const xml = this.communicationService.xmltoJson(source?.xml)?.elements?.[0]?.elements;
    const multimediaObjs = [];
    const types = [];
    const linkage = new _models_result_linkage__WEBPACK_IMPORTED_MODULE_6__.Linkage();
    let relation = "";
    xml.forEach(element => {
      if ("elements" in element) {
        if (element.name === "dc:identifier") {
          hit.setIdentifier(element.elements[0].text);
        }
        if (element.name === "dc:type") {
          types.push(element.elements[0].text);
        }
        if (element.name === "parentIdentifier") {
          hit.setParentIdentifier(element.elements[0].text);
        }
        if (element.name === "linkage") {
          if (element.attributes.type === "multimedia") {
            const text = element.elements[0].text;
            const differentTypes = [[".mp3", "sound"], [".mp4", "video"], [".jpg", "picture"], [".tiff", "picture"], [".png", "picture"], [".wav", "sound"]];
            differentTypes.forEach(types => {
              if (text.includes(types[0])) {
                const multimediaObj = {
                  type: types[1],
                  url: text
                };
                multimediaObjs.push(multimediaObj);
              }
            });
            linkage.setMultimedia(multimediaObjs);
          }
          if (element.attributes.type === "metadata") {
            linkage.setMetadata(element.elements[0].text);
          }
          if (element.attributes.type === "data") {
            linkage.setData(element.elements[0].text);
          }
        }
        // some information related to description (relation) should be extracted from xml
        if (element.name === "dc:relation") {
          let value = element.elements[0].text;
          if (value.startsWith("http")) {
            value = "<a " + 'href = "' + value + '" >' + value + "</a>";
          }
          relation = relation + "<li>" + value + "</li>";
        }
      }
    });
    if (relation !== "") {
      const descriptionItem = new _models_result_description__WEBPACK_IMPORTED_MODULE_5__.Description();
      descriptionItem.setTitle("Relation:");
      descriptionItem.setValue("<ul>" + relation + "</ul>");
      description.push(descriptionItem);
    }
    hit.setType(types);
    hit.setLinkage(linkage);
    hit.setDescription(description);
    hit.setMultimediaObjs(multimediaObjs);
    if (hit.getLatitude() !== undefined) {
      this.id--;
      hit.setColor(this.colors[this.id]);
    }
    return hit;
  }
  // maps labels
  getLabels(item) {
    const upperLabels = [];
    // if the citation date exist, a blue label will be created
    if (item?.citation_date) {
      const year = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
      year.setInnerInfo(item?.citation_date?.substring(0, 4));
      year.setTooltip("Publication year");
      year.setColorClass("bg-label-blue");
      upperLabels.push(year);
    }
    // if the dataset is open access, a green label will be created
    if (!item?.accessRestricted) {
      const access = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
      access.setInnerInfo("Open Access");
      access.setTooltip("This dataset is open access. You can use primary data and metadata.");
      access.setColorClass("bg-label-green");
      upperLabels.push(access);
    }
    // the label related to the datacenter with the golden red color will be created
    // it contains the name of the datacenter
    const dataCenter = new _models_result_upperLabel__WEBPACK_IMPORTED_MODULE_7__.UpperLabel();
    /*as the name of the datacenter which is provided in the json result is a long string and no short version
        was provided, the short version was extracted by some if statements*/
    dataCenter.setInnerInfo(item?.dataCenter.split(" ").pop());
    if (dataCenter.getInnerInfo() === "Science") {
      dataCenter.setInnerInfo("PANGAEA");
    }
    if (dataCenter.getInnerInfo() === "Archive") {
      dataCenter.setInnerInfo("ENA");
    }
    switch (dataCenter.getInnerInfo()) {
      case "SNSB":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SNSB);
        break;
      case "SGN":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SGN);
        break;
      case "BGBM":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.BGBM);
        break;
      case "MfN":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.MfN);
        break;
      case "ZFMK":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.ZFMK);
        break;
      case "SMNS":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.SMNS);
        break;
      case "PANGAEA":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.PANGAEA);
        break;
      case "DSMZ":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.DSMZ);
        break;
      case "Gatersleben":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.Gatersleben);
        break;
      case "ENA":
        dataCenter.setTooltip(GfbioPreprocessDataService.datacenterTooltips.ENA);
        break;
      default:
        dataCenter.setTooltip("Publisher");
    }
    dataCenter.setColorClass("bg-goldenrod");
    upperLabels.push(dataCenter);
    return upperLabels;
  }
  // maps facets
  getAggregations(jsonObject) {
    const titles = [GfbioPreprocessDataService.dataCenter, GfbioPreprocessDataService.dataType, GfbioPreprocessDataService.parameter, GfbioPreprocessDataService.taxonomy, GfbioPreprocessDataService.type, GfbioPreprocessDataService.geographicRegion];
    const aggregationsJson = jsonObject?.aggregations;
    const values = Object.values(aggregationsJson);
    const keys = Object.keys(aggregationsJson);
    const aggregations = [];
    // tslint:disable-next-line:forin
    for (const i in values) {
      const aggregation = new _models_result_aggregation__WEBPACK_IMPORTED_MODULE_3__.Aggregation();
      aggregation.setId(String(keys[i]));
      aggregation.setTitle(titles[i]);
      aggregation.setIcon(this.selectIcon(aggregation.getTitle()));
      const buckets = [];
      // @ts-ignore
      values[i].buckets.forEach(item => {
        const bucket = new _models_result_facet__WEBPACK_IMPORTED_MODULE_4__.Facet();
        bucket.setDocCount(item?.doc_count);
        bucket.setKey(item?.key);
        buckets.push(bucket);
      });
      aggregation.setFacets(buckets);
      aggregations.push(aggregation);
    }
    return aggregations;
  }
  // maps other filters
  getOtherFilters() {
    return [{
      icon: "map",
      title: "Visualizable in VAT",
      parameters: [{
        label: "Visualizable in VAT",
        parameterType: "vatVisualizable",
        parameterValue: true,
        id: "vatVisualizable"
      }]
    }, {
      icon: "lock_outline",
      title: "Access",
      parameters: [{
        label: "access is restricted",
        parameterType: "accessRestricted",
        parameterValue: true,
        id: "accessRestricted"
      }, {
        label: "open access only",
        parameterType: "accessRestricted",
        parameterValue: false,
        id: "accessOpen"
      }]
    }, {
      icon: "image",
      title: "Multimedia Object",
      parameters: [{
        label: "images, videos, sound files",
        parameterType: "parameterFacet",
        parameterValue: "Multimedia Object",
        id: "Multimedia"
      }]
    }];
  }
  // maps datepicker filters
  getDatePickers() {
    return [{
      icon: "date_range",
      title: "Collection Date",
      type: "collection",
      inputs: [{
        id: "collectionStart",
        name: "Collection start date",
        type: "start date"
      }, {
        id: "collectionEnd",
        name: "Collection end date",
        type: "end date"
      }]
    }, {
      icon: "date_range",
      title: "Publication Date",
      type: "publication",
      inputs: [{
        id: "publicationStart",
        name: "Publication start date",
        type: "start date"
      }, {
        id: "publicationEnd",
        name: "Publication end date",
        type: "end date"
      }]
    }];
  }
  // available icons: https://jossef.github.io/material-design-icons-iconfont/
  selectIcon(filter) {
    // default icon
    let icon = "filter_list";
    switch (filter) {
      case GfbioPreprocessDataService.dataCenter:
        {
          icon = "storage";
          break;
        }
      case GfbioPreprocessDataService.dataType:
        {
          icon = "domain";
          break;
        }
      case GfbioPreprocessDataService.geographicRegion:
        {
          icon = "location_on";
          break;
        }
      case GfbioPreprocessDataService.taxonomy:
        {
          icon = "account_tree";
          break;
        }
      case GfbioPreprocessDataService.parameter:
        {
          icon = "table_view";
          break;
        }
      case GfbioPreprocessDataService.type:
        {
          icon = "auto_awesome_motion";
          break;
        }
    }
    return icon;
  }
  static ɵfac = function GfbioPreprocessDataService_Factory(t) {
    return new (t || GfbioPreprocessDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_communication_service__WEBPACK_IMPORTED_MODULE_9__.CommunicationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: GfbioPreprocessDataService,
    factory: GfbioPreprocessDataService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 7846:
/*!**********************************************************!*\
  !*** ./src/app/services/local/input-analysis.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputAnalysisService: () => (/* binding */ InputAnalysisService)
/* harmony export */ });
/* harmony import */ var _home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var fast_cartesian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-cartesian */ 5707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _remote_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remote/node.service */ 5659);




class InputAnalysisService {
  nodeService;
  constructor(nodeService) {
    this.nodeService = nodeService;
  }
  getAnalysis(str, semantic) {
    var _this = this;
    return (0,_home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const lexer = new Tokenizr();
      // lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, (ctx, match) => {
      //     ctx.accept('string');
      // });
      // lexer.rule(/"((?:\\"|[^\r\n])*)"/, (ctx, match) => {
      //     ctx.accept('string', match[1].replace(/\\"/g, '"'));
      // });
      // lexer.rule(/((?:\\"|[^\r\n])*)/, (ctx, match) => {
      //     ctx.accept('string', match[1].replace(/\\"/g, '"'));
      // });
      // lexer.rule(/\/\/[^\r\n]*\r?\n/, (ctx, match) => {
      //     ctx.ignore();
      // });
      // lexer.rule(/[ \t\r\n]+/, (ctx, match) => {
      //     ctx.ignore();
      // });
      // lexer.rule(/[+-]+/, (ctx, match) => {
      //     ctx.accept('string');
      // });
      // // lexer.input('\" mooo ggg\" + sea sss');
      // lexer.input(' (mooo ggg) + sea sss');
      // lexer.tokens().forEach((token) => {
      //     console.log(token.toString());
      // });
      // str = str.replaceAll(' + ', '+');
      let numOpenParan = 0;
      const words = str.split(' ');
      let finalString = [];
      let insidePar = '';
      for (let i = 0; i < words.length; i += 1) {
        const word = words[i];
        if (word.indexOf('*') > -1) {
          const star = yield _this.starAnalysis(word, semantic);
          if (star !== null) {
            star.unshift(word + ',');
            finalString = finalString.concat(star);
          }
        }
        numOpenParan = _this.getNumParentheses(words[i], numOpenParan);
        if (numOpenParan !== 0) {
          // if (words[i + 1] !== '+' && words[i + 1] !== '|' && words[i] !== '+' && words[i] !== '|'
          //     && i !== words.length - 1) {
          //     words[i] = words[i] + ' ';
          // }
          insidePar = insidePar + ' ' + words[i];
        } else {
          if (insidePar !== '') {
            insidePar = insidePar + ' ' + words[i];
            finalString = finalString.concat(insidePar.trim());
            insidePar = '';
          } else {
            finalString = finalString.concat(words[i]);
          }
        }
      }
      for (let i = 0; i < finalString.length; i += 1) {
        finalString[i] = finalString[i].replaceAll('+', ' + ');
        finalString[i] = finalString[i].replaceAll('(', '');
        finalString[i] = finalString[i].replaceAll(')', '');
        finalString[i] = finalString[i].replaceAll('\"', '');
        finalString[i] = finalString[i].replaceAll('  ', ' ');
        if (finalString[i] === ' + ') {
          finalString[i] = finalString[i - 1] + ' + ' + finalString[i + 1];
          finalString.splice(i + 1, 1);
          finalString.splice(i - 1, 1);
        }
      }
      return finalString;
    })();
  }
  getAnalysis2(str, semantic) {
    var _this2 = this;
    return (0,_home_ctpfaff_Schreibtisch_search_gfbio_org_search_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let words = str.split(' ');
      let isParOpen = 'no';
      let insidePar = '';
      const finalArray = [];
      for (let i = 0; i < words.length; i += 1) {
        const word = words[i];
        if (word.indexOf('*') > -1) {
          const star = yield _this2.starAnalysis(word.slice(0, -1), semantic);
          if (star !== null) {
            star.unshift(word);
            words[i] = star;
          }
        }
      }
      for (let i = words.length - 1; i >= 0; i -= 1) {
        if (!Array.isArray(words[i])) {
          isParOpen = _this2.getIsParOpen(words[i], isParOpen);
          if (isParOpen === 'first' || isParOpen === 'last' || isParOpen === 'middle') {
            insidePar = words[i] + ' ' + insidePar;
          }
          if (isParOpen === 'first' || isParOpen === 'middle') {
            words[i + 1] = insidePar.trim();
            words.splice(i, 1);
          }
          if (isParOpen === 'first') {
            insidePar = '';
          }
        }
      }
      for (let i = words.length - 1; i >= 0; i -= 1) {
        if (words[i] === '+') {
          if (!Array.isArray(words[i - 1])) {
            words[i - 1] = [words[i - 1]];
          }
          if (!Array.isArray(words[i + 1])) {
            words[i + 1] = [words[i + 1]];
          }
          words[i + 1] = (0,fast_cartesian__WEBPACK_IMPORTED_MODULE_1__["default"])([words[i - 1], words[i + 1]]);
          words.splice(i - 1, 2);
        }
      }
      words = words.flat();
      for (let i = 0; i < words.length; i += 1) {
        if (Array.isArray(words[i])) {
          finalArray.push(words[i].join(' + '));
        } else {
          finalArray.push(words[i]);
        }
      }
      return finalArray;
    })();
  }
  getIsParOpen(word, isParOpen) {
    if ((word.startsWith('(') || word.startsWith('\'')) && (word.endsWith(')') || word.endsWith('\''))) {
      return 'no';
    }
    if (word.startsWith('(') || word.startsWith('\'')) {
      return 'first';
    }
    if (word.endsWith(')') || word.endsWith('\'')) {
      return 'last';
    }
    if (isParOpen === 'last') {
      return 'middle';
    }
    return 'no';
  }
  getNumParentheses(word, numOpenParentheses) {
    if (word.startsWith('(') || word.startsWith('\'')) {
      numOpenParentheses++;
    }
    if (word.endsWith(')') || word.endsWith('\'')) {
      numOpenParentheses--;
    }
    return numOpenParentheses;
  }
  starAnalysis(word, semantic) {
    return new Promise(resolve => {
      if (!semantic) {
        this.nodeService.suggestSimple(word.slice(0, -1)).subscribe(data => {
          const keysText = [];
          const keys = data.suggest[0].options;
          keys.forEach(element => {
            const str = element.text;
            keysText.push(str);
          });
          resolve(keysText);
        });
      } else {
        this.nodeService.suggestTerminology(word.slice(0, -1)).subscribe(data => {
          const keysText = [];
          const keys = data.results;
          keys.forEach(element => {
            const str = element.label;
            keysText.push(str);
          });
          resolve(keysText);
        });
      }
    });
  }
  static ɵfac = function InputAnalysisService_Factory(t) {
    return new (t || InputAnalysisService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_remote_node_service__WEBPACK_IMPORTED_MODULE_2__.NodeService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: InputAnalysisService,
    factory: InputAnalysisService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9230:
/*!***********************************************************!*\
  !*** ./src/app/services/local/start-searching.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartSearchingService: () => (/* binding */ StartSearchingService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _remote_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remote/node.service */ 5659);
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communication.service */ 5540);
/* harmony import */ var _gfbio_preprocess_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gfbio-preprocess-data.service */ 1068);





class StartSearchingService {
  nodeService;
  communicationService;
  gfbioPreprocessData;
  constructor(nodeService, communicationService, gfbioPreprocessData) {
    this.nodeService = nodeService;
    this.communicationService = communicationService;
    this.gfbioPreprocessData = gfbioPreprocessData;
  }
  startSearching(searchKey, semantic, from, filters) {
    let urlTerm;
    const urlIndex = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context;
    let body;
    let key;
    if (semantic === true) {
      key = searchKey;
      urlTerm = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.semSearchUrl;
    } else {
      key = searchKey.join(" ");
      urlTerm = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.searchUrl;
    }
    body = JSON.stringify({
      queryterm: key,
      from,
      size: 10,
      filter: filters
    });
    this.nodeService.search(urlIndex + urlTerm, body, this.gfbioPreprocessData, [semantic]);
  }
  static ɵfac = function StartSearchingService_Factory(t) {
    return new (t || StartSearchingService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_remote_node_service__WEBPACK_IMPORTED_MODULE_1__.NodeService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_communication_service__WEBPACK_IMPORTED_MODULE_2__.CommunicationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_gfbio_preprocess_data_service__WEBPACK_IMPORTED_MODULE_3__.GfbioPreprocessDataService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: StartSearchingService,
    factory: StartSearchingService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 5659:
/*!*************************************************!*\
  !*** ./src/app/services/remote/node.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeService: () => (/* binding */ NodeService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _local_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local/communication.service */ 5540);





// import {gfbioEnvironment} from '../../../environments/gfbio.environment';
class NodeService {
  http;
  spinner;
  communicationService;
  url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  suggestPanUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.suggestPanUrl;
  suggestTerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.suggestTerUrl;
  basketURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.basketUrl;
  addToBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.addToBasketUrl;
  deleteFromBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteFromBasket;
  deleteAllBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deleteAllBasket;
  readFromBasketUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.context + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.readFromBasketUrl;
  collectionUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collections;
  collectionUpdateUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collectionsUpdate;
  semantic = false;
  headers = {
    "Content-Type": "application/json"
  };
  constructor(http, spinner, communicationService) {
    this.http = http;
    this.spinner = spinner;
    this.communicationService = communicationService;
  }
  search(urlTerm, body, serviceType, otherParameters) {
    // console.log(body);
    this.spinner.show();
    const headers = this.headers;
    this.http.post(this.url + urlTerm, body, {
      headers
    }).subscribe(data => {
      let results;
      results = serviceType.getResult(data, otherParameters);
      this.communicationService.setResult(results);
      // console.log(results);
      // console.log(data);
      this.spinner.hide();
    }, err => {
      alert(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.textAlertSemSearchError);
      this.spinner.hide();
    });
  }
  suggestSimple(key) {
    const body = {
      term: key
    };
    const headers = this.headers;
    return this.http.post(this.url + this.suggestPanUrl, body, {
      headers
    });
  }
  suggestTerminology(key) {
    const body = {
      term: key
    };
    const headers = this.headers;
    return this.http.post(this.url + this.suggestTerUrl, body, {
      headers
    });
  }
  addToBasket(itemInDatabase) {
    return this.http.post(this.url + this.addToBasketUrl, itemInDatabase);
  }
  readFromBasket(userId) {
    return this.http.get(this.url + this.readFromBasketUrl + userId);
  }
  deleteFromBasket(itemInDatabase) {
    return this.http.post(this.url + this.deleteFromBasketUrl, itemInDatabase);
  }
  deleteAllBasket(userId) {
    return this.http.post(this.url + this.deleteAllBasketUrl, {
      userId
    });
  }
  basketDownload(baskets) {
    return this.http.post(this.url + this.basketURL, baskets, {
      responseType: "blob"
    });
  }
  postBasketToCollection(baskets, userId) {
    const headers = this.headers;
    const body = {
      set: baskets.basket,
      external_user_id: userId
    };
    return this.http.post(this.url + "/gfbio" + this.collectionUrl, body, {
      headers
    });
  }
  updateBasketInCollection(baskets, userId, collectionId) {
    const headers = this.headers;
    const body = {
      set: baskets.basket,
      external_user_id: userId,
      collection_id: collectionId
    };
    return this.http.post(this.url + "/gfbio" + this.collectionUpdateUrl, body, {
      headers
    });
  }
  narrow(id, uri) {
    const body = {
      id,
      uri
    };
    const headers = this.headers;
    return this.http.post(this.url + "/gfbio/narrow", body, {
      headers
    });
  }
  broad(id, uri) {
    const body = {
      id,
      uri
    };
    const headers = this.headers;
    return this.http.post(this.url + "/gfbio/broad", body, {
      headers
    });
  }
  static ɵfac = function NodeService_Factory(t) {
    return new (t || NodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_communication_service__WEBPACK_IMPORTED_MODULE_1__.CommunicationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NodeService,
    factory: NodeService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 9415:
/*!******************************************************************!*\
  !*** ./src/app/suggestion-window/suggestion-window.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionWindowComponent: () => (/* binding */ SuggestionWindowComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/local/communication.service */ 5540);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function SuggestionWindowComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuggestionWindowComponent_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.chooseSuggestion(item_r1.text));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");
  }
}
class SuggestionWindowComponent {
  communicationService;
  suggest;
  constructor(communicationService) {
    this.communicationService = communicationService;
  }
  windowSuggestKey = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  isClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  ngOnInit() {
    this.communicationService.getSuggest().subscribe(suggest => this.suggest = suggest);
  }
  chooseSuggestion(suggestionKey) {
    this.windowSuggestKey.emit(suggestionKey);
  }
  documentClick(event) {
    this.isClicked.emit();
  }
  static ɵfac = function SuggestionWindowComponent_Factory(t) {
    return new (t || SuggestionWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_local_communication_service__WEBPACK_IMPORTED_MODULE_0__.CommunicationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SuggestionWindowComponent,
    selectors: [["app-suggestion-window"]],
    hostBindings: function SuggestionWindowComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SuggestionWindowComponent_click_HostBindingHandler($event) {
          return ctx.documentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
      }
    },
    outputs: {
      windowSuggestKey: "windowSuggestKey",
      isClicked: "isClicked"
    },
    decls: 4,
    vars: 1,
    consts: [[1, "transparentWindow"], [1, "windowBox"], ["class", "option", 3, "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "click"]],
    template: function SuggestionWindowComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SuggestionWindowComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.suggest);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6416:
/*!***********************************!*\
  !*** ./src/app/utils/app.init.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeKeycloak: () => (/* binding */ initializeKeycloak)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 553);

function initializeKeycloak(keycloak) {
  return () => keycloak.init({
    config: {
      url: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_Url,
      realm: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_Realm,
      clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Keycloak_ClientId
    },
    initOptions: {
      //onLoad: 'check-sso',
      checkLoginIframe: true,
      checkLoginIframeInterval: 25
    }
    //loadUserProfileAtStartUp: true
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  Keycloak_Url: "https://keycloak.sso.gwdg.de/auth",
  Keycloak_RedirectUri: "https://dev.gfbio.uni-jena.de/daisi",
  Keycloak_Realm: "GFBio",
  Keycloak_ClientId: "dev-gfbio-angular",
  vatRootUrl: "https://vat.gfbio.dev",
  collections: "/collection",
  collectionsUpdate: "/collection-update",
  apiUrl: "http://localhost:3000",
  context: "/gfbio",
  searchUrl: "/search",
  semSearchUrl: "/semantic-search",
  suggestUrl: "/suggest",
  suggestPanUrl: "/suggest-pan",
  suggestTerUrl: "/suggest-ter",
  basketUrl: "/basketDownload",
  addToBasketUrl: "/addToBasket",
  deleteFromBasket: "/deleteFromBasket",
  deleteAllBasket: "/deleteAllBasket",
  readFromBasketUrl: "/api/baskets/user/",
  imagePath: "assets/img/",
  vatImg: "vat.png",
  semSearchImg: "icon_semsearch3.png",
  textAlertSemSearchError: "A connection error occured. Please reduce the amount of search terms or try the search again.",
  textAlertWordLength: "please choose a word longer than 4 letters to use the * in semantic search",
  textAlertBasketErrorDownload: "An error occured during the download.\nPlease contact the administrator for more information.",
  textTooltipBasketVATvisualizable: "dataset can be visualized in VAT",
  textTooltipBasketVATnotVisualizable: "dataset can not be visualized in VAT",
  textTooltipBasketDataAvailable: "data are available for download",
  textTooltipBasketDataNotAvailable: "data are not available for download",
  textTooltipBasketMetadataAvailable: "metadata are available for download",
  textTooltipBasketMetadataNotAvailable: "metadata are not available for download",
  textTooltipBasketMultimediaAvailable: "multimedia are available for download",
  textTooltipBasketMultimediaNotAvailable: "multimedia are not available for download",
  textTooltipBasketRemove: "remove dataset from basket",
  textTooltipBasketRemoveSure: "Are you sure that you want to empty the basket?",
  textTooltipBasketEmpty: "Please select a dataset from the search result.",
  textTSWidgetInfo: "Your search query is expanded with relational terms obtained from GFBio's " + "Terminology Service. Some terms can be further expanded with more narrower or broader terms. " + "Click on the buttons to obtain all descendants or an ancestor. With a double-click on the returned " + "narrower or broader terms you can add them to the search field.",
  dataCenter: "Data Center",
  dataType: "Data Type",
  parameter: "Parameter",
  taxonomy: "Taxonomy",
  geographicRegion: "Geographic Region",
  type: "Type",
  colors: ["#94e851", "#f52f57", "#173b4e", "#ee82ee", "#ffff00", "#27408b", "#009acd", "#ff00ff", "#8b0000", "#00fa9a"],
  noCoordinates: "This dataset has no coordinates and can not be located on the map.",
  vatTooltip: "This dataset can be transfered to VAT.",
  datacenterTooltips: {
    SNSB: "This dataset is provided by Staatliche Naturwissenschaftliche " + "Sammlungen Bayerns; SNSB IT Center, M;nchen (SNSB).",
    SGN: "This dataset is provided by Senckenberg Gesellschaft f;r Naturforschung; Leibniz Institute Frankfurt (SGN).",
    BGBM: "This dataset is provided by Botanic Garden and Botanical Museum Berlin, Freie Universit;t Berlin (BGBM).",
    MfN: "This dataset is provided by Leibniz Institute for Research on Evolution and Biodiversity, Berlin (MfN).",
    ZFMK: "This dataset is provided by Zoological Research Museum Alexander Koenig; Leibniz " + "Institute for Animal Biodiversity, Bonn (ZFMK).",
    SMNS: "This dataset is provided by State Museum of Natural History Stuttgart (SMNS).",
    PANGAEA: "This dataset is provided by Data Publisher for Earth; Environmental Science  (PANGAEA).",
    DSMZ: "This dataset is provided by Leibniz Institute DSMZ; German Collection of Microorganisms " + "and Cell Cultures, Braunschweig (DSMZ).",
    Gatersleben: "e!DAL;PGP ; Plant Genomics and Phenomics Research Data Repository, " + "Leibniz Institute of Plant Genetics and Crop Plant Research (IPK) Gatersleben",
    ENA: "European Nucleotide Archive"
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 5528,
	"./af.js": 5528,
	"./ar": 1036,
	"./ar-dz": 7579,
	"./ar-dz.js": 7579,
	"./ar-kw": 9588,
	"./ar-kw.js": 9588,
	"./ar-ly": 6519,
	"./ar-ly.js": 6519,
	"./ar-ma": 3258,
	"./ar-ma.js": 3258,
	"./ar-ps": 5467,
	"./ar-ps.js": 5467,
	"./ar-sa": 4085,
	"./ar-sa.js": 4085,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 1036,
	"./az": 9757,
	"./az.js": 9757,
	"./be": 9620,
	"./be.js": 9620,
	"./bg": 1139,
	"./bg.js": 1139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 9641,
	"./bn-bd": 9126,
	"./bn-bd.js": 9126,
	"./bn.js": 9641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 934,
	"./br.js": 934,
	"./bs": 6274,
	"./bs.js": 6274,
	"./ca": 5831,
	"./ca.js": 5831,
	"./cs": 2354,
	"./cs.js": 2354,
	"./cv": 9692,
	"./cv.js": 9692,
	"./cy": 8774,
	"./cy.js": 8774,
	"./da": 584,
	"./da.js": 584,
	"./de": 1557,
	"./de-at": 4954,
	"./de-at.js": 4954,
	"./de-ch": 1881,
	"./de-ch.js": 1881,
	"./de.js": 1557,
	"./dv": 6475,
	"./dv.js": 6475,
	"./el": 8877,
	"./el.js": 8877,
	"./en-au": 454,
	"./en-au.js": 454,
	"./en-ca": 7356,
	"./en-ca.js": 7356,
	"./en-gb": 456,
	"./en-gb.js": 456,
	"./en-ie": 8789,
	"./en-ie.js": 8789,
	"./en-il": 5471,
	"./en-il.js": 5471,
	"./en-in": 9664,
	"./en-in.js": 9664,
	"./en-nz": 7672,
	"./en-nz.js": 7672,
	"./en-sg": 805,
	"./en-sg.js": 805,
	"./eo": 7390,
	"./eo.js": 7390,
	"./es": 1564,
	"./es-do": 1473,
	"./es-do.js": 1473,
	"./es-mx": 2089,
	"./es-mx.js": 2089,
	"./es-us": 4156,
	"./es-us.js": 4156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 2687,
	"./fi.js": 2687,
	"./fil": 32,
	"./fil.js": 32,
	"./fo": 6845,
	"./fo.js": 6845,
	"./fr": 8875,
	"./fr-ca": 6425,
	"./fr-ca.js": 6425,
	"./fr-ch": 1746,
	"./fr-ch.js": 1746,
	"./fr.js": 8875,
	"./fy": 7037,
	"./fy.js": 7037,
	"./ga": 1217,
	"./ga.js": 1217,
	"./gd": 7010,
	"./gd.js": 7010,
	"./gl": 1931,
	"./gl.js": 1931,
	"./gom-deva": 4488,
	"./gom-deva.js": 4488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 4984,
	"./gu.js": 4984,
	"./he": 9090,
	"./he.js": 9090,
	"./hi": 2085,
	"./hi.js": 2085,
	"./hr": 8787,
	"./hr.js": 8787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 9819,
	"./hy-am.js": 9819,
	"./id": 4074,
	"./id.js": 4074,
	"./is": 715,
	"./is.js": 715,
	"./it": 3838,
	"./it-ch": 7040,
	"./it-ch.js": 7040,
	"./it.js": 3838,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 4346,
	"./jv.js": 4346,
	"./ka": 5538,
	"./ka.js": 5538,
	"./kk": 9772,
	"./kk.js": 9772,
	"./km": 7905,
	"./km.js": 7905,
	"./kn": 9125,
	"./kn.js": 9125,
	"./ko": 9140,
	"./ko.js": 9140,
	"./ku": 6780,
	"./ku-kmr": 4662,
	"./ku-kmr.js": 4662,
	"./ku.js": 6780,
	"./ky": 3768,
	"./ky.js": 3768,
	"./lb": 4016,
	"./lb.js": 4016,
	"./lo": 3169,
	"./lo.js": 3169,
	"./lt": 2353,
	"./lt.js": 2353,
	"./lv": 3243,
	"./lv.js": 3243,
	"./me": 2338,
	"./me.js": 2338,
	"./mi": 5555,
	"./mi.js": 5555,
	"./mk": 5794,
	"./mk.js": 5794,
	"./ml": 3151,
	"./ml.js": 3151,
	"./mn": 6458,
	"./mn.js": 6458,
	"./mr": 9165,
	"./mr.js": 9165,
	"./ms": 8680,
	"./ms-my": 7477,
	"./ms-my.js": 7477,
	"./ms.js": 8680,
	"./mt": 9684,
	"./mt.js": 9684,
	"./my": 285,
	"./my.js": 285,
	"./nb": 5922,
	"./nb.js": 5922,
	"./ne": 9040,
	"./ne.js": 9040,
	"./nl": 5066,
	"./nl-be": 4460,
	"./nl-be.js": 4460,
	"./nl.js": 5066,
	"./nn": 3693,
	"./nn.js": 3693,
	"./oc-lnc": 8676,
	"./oc-lnc.js": 8676,
	"./pa-in": 2341,
	"./pa-in.js": 2341,
	"./pl": 7416,
	"./pl.js": 7416,
	"./pt": 4344,
	"./pt-br": 113,
	"./pt-br.js": 113,
	"./pt.js": 4344,
	"./ro": 2643,
	"./ro.js": 2643,
	"./ru": 1305,
	"./ru.js": 1305,
	"./sd": 6095,
	"./sd.js": 6095,
	"./se": 4486,
	"./se.js": 4486,
	"./si": 8742,
	"./si.js": 8742,
	"./sk": 6722,
	"./sk.js": 6722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 2416,
	"./sq.js": 2416,
	"./sr": 9450,
	"./sr-cyrl": 501,
	"./sr-cyrl.js": 501,
	"./sr.js": 9450,
	"./ss": 2222,
	"./ss.js": 2222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 9638,
	"./sw.js": 9638,
	"./ta": 6494,
	"./ta.js": 6494,
	"./te": 4435,
	"./te.js": 4435,
	"./tet": 5003,
	"./tet.js": 5003,
	"./tg": 3706,
	"./tg.js": 3706,
	"./th": 6025,
	"./th.js": 6025,
	"./tk": 9780,
	"./tk.js": 9780,
	"./tl-ph": 2068,
	"./tl-ph.js": 2068,
	"./tlh": 9167,
	"./tlh.js": 9167,
	"./tr": 2494,
	"./tr.js": 2494,
	"./tzl": 8707,
	"./tzl.js": 8707,
	"./tzm": 1296,
	"./tzm-latn": 4532,
	"./tzm-latn.js": 4532,
	"./tzm.js": 1296,
	"./ug-cn": 2086,
	"./ug-cn.js": 2086,
	"./uk": 5069,
	"./uk.js": 5069,
	"./ur": 9304,
	"./ur.js": 9304,
	"./uz": 5115,
	"./uz-latn": 7609,
	"./uz-latn.js": 7609,
	"./uz.js": 5115,
	"./vi": 4802,
	"./vi.js": 4802,
	"./x-pseudo": 5605,
	"./x-pseudo.js": 5605,
	"./yo": 8456,
	"./yo.js": 8456,
	"./zh-cn": 3272,
	"./zh-cn.js": 3272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 8101,
	"./zh-mo.js": 8101,
	"./zh-tw": 262,
	"./zh-tw.js": 262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
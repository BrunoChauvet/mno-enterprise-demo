webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/entities_page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_SUCCESS; });
/* unused harmony export LOAD_FAIL */
/* unused harmony export LoadAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadFailAction; });
var LOAD = '[Entities] Load';
var LOAD_SUCCESS = '[Entities] Load Success';
var LOAD_FAIL = '[Entities] Load Fail';
var LoadAction = (function () {
    function LoadAction() {
        this.type = LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=entities_page.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visualiser_visualiser_component__ = __webpack_require__("../../../../../src/app/visualiser/visualiser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_record_create_record_component__ = __webpack_require__("../../../../../src/app/create-record/create-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__merge_records_merge_records_component__ = __webpack_require__("../../../../../src/app/merge-records/merge-records.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'visualiser/:collection', component: __WEBPACK_IMPORTED_MODULE_2__visualiser_visualiser_component__["b" /* VisualiserComponent */] },
    { path: 'visualiser/:collection/new', component: __WEBPACK_IMPORTED_MODULE_4__create_record_create_record_component__["a" /* CreateRecordComponent */] },
    { path: 'visualiser/:collection/merge', component: __WEBPACK_IMPORTED_MODULE_5__merge_records_merge_records_component__["a" /* MergeRecordsComponent */] },
    { path: 'visualiser/:collection/:id', component: __WEBPACK_IMPORTED_MODULE_3__detail_detail_component__["a" /* DetailComponent */] },
    { path: '**', redirectTo: '/visualiser/contacts' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<connec-ui></connec-ui>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initConnecApiService */
/* unused harmony export initMnoeApiService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_db__ = __webpack_require__("../../../../@ngrx/db/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_json_schema_form__ = __webpack_require__("../../../../angular2-json-schema-form/angular2-json-schema-form.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_mnoe_api_service__ = __webpack_require__("../../../../../src/app/services/mnoe-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__visualiser_visualiser_component__ = __webpack_require__("../../../../../src/app/visualiser/visualiser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__effects_entities_page__ = __webpack_require__("../../../../../src/app/effects/entities_page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__reducers_index__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__db__ = __webpack_require__("../../../../../src/app/db.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__detail_detail_component__ = __webpack_require__("../../../../../src/app/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__connec_ui_connec_ui_component__ = __webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__entity_attribute_entity_attribute_component__ = __webpack_require__("../../../../../src/app/entity-attribute/entity-attribute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__create_record_create_record_component__ = __webpack_require__("../../../../../src/app/create-record/create-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__merge_records_merge_records_component__ = __webpack_require__("../../../../../src/app/merge-records/merge-records.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__merge_attributes_merge_attributes_component__ = __webpack_require__("../../../../../src/app/merge-attributes/merge-attributes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































function initConnecApiService(connecApiService) {
    return function () { return connecApiService.configure(); };
}
function initMnoeApiService(mnoeApiService) {
    return function () { return mnoeApiService.configure(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_27__visualiser_visualiser_component__["b" /* VisualiserComponent */],
            __WEBPACK_IMPORTED_MODULE_27__visualiser_visualiser_component__["a" /* SearchSimilarDialog */],
            __WEBPACK_IMPORTED_MODULE_31__detail_detail_component__["a" /* DetailComponent */],
            __WEBPACK_IMPORTED_MODULE_32__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */],
            __WEBPACK_IMPORTED_MODULE_33__entity_attribute_entity_attribute_component__["a" /* EntityAttributeComponent */],
            __WEBPACK_IMPORTED_MODULE_34__create_record_create_record_component__["a" /* CreateRecordComponent */],
            __WEBPACK_IMPORTED_MODULE_35__merge_records_merge_records_component__["a" /* MergeRecordsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__merge_attributes_merge_attributes_component__["a" /* MergeAttributesComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_27__visualiser_visualiser_component__["a" /* SearchSimilarDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_29__reducers_index__["a" /* reducers */]),
            __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_28__effects_entities_page__["a" /* EntitiesPageEffects */]]),
            __WEBPACK_IMPORTED_MODULE_17__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_30__db__["a" /* schema */]),
            __WEBPACK_IMPORTED_MODULE_18_ngx_restangular__["RestangularModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["b" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_progress_spinner__["b" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["b" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material_autocomplete__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material_datepicker__["a" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material_radio__["a" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular2_json_schema_form__["a" /* JsonSchemaFormModule */],
            __WEBPACK_IMPORTED_MODULE_21__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_23__services_connec_api_service__["a" /* ConnecApiService */],
            __WEBPACK_IMPORTED_MODULE_24__services_mnoe_api_service__["a" /* MnoeApiService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"], useFactory: initConnecApiService, deps: [__WEBPACK_IMPORTED_MODULE_23__services_connec_api_service__["a" /* ConnecApiService */]], multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"], useFactory: initMnoeApiService, deps: [__WEBPACK_IMPORTED_MODULE_24__services_mnoe_api_service__["a" /* MnoeApiService */]], multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_22__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/connec-ui/connec-ui.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-select.select-organization {\n  margin-left: 20px;\n  font-size: 0.8em;\n}\n\nmat-select.select-organization .mat-select-value, mat-select.select-organization .mat-select-arrow {\n  color: white !important;\n}\n\nmat-card-header.menu-section-title mat-card-title {\n  font-weight: 800;\n}\n\n.left-menu .mat-expansion-panel-body {\n  overflow: visible;\n}\n\n.attribute-filter {\n  font-size: 0.85em;\n}\n\n.attribute-icon {\n  vertical-align: middle;\n  font-size: 1.8em;\n}\n\n.attribute-filter-options {\n  margin-left: 15px;\n}\n\n.application-filter-title {\n  font-weight: 800;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/connec-ui/connec-ui.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid\">\n    <mat-spinner #loader [hidden]=\"!loading\" style=\"display: block; position: absolute; top: 50%; left: 50%; z-index: 999;\"></mat-spinner>\n\n    <div class=\"row\">\n      <mat-toolbar color=\"primary\">\n        <div class=\"col-2\">\n          <span>Connec!™ UI</span>\n\n          <mat-select #organizationSelector class=\"select-organization\">\n            <mat-option *ngFor=\"let organization of organizations\" [value]=\"organization\">\n              {{ organization.name }}\n            </mat-option>\n          </mat-select>\n        </div>\n\n        <div class=\"col-10\">\n\n        </div>\n      </mat-toolbar>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2 left-menu\">\n        <mat-card>\n          <mat-card-header class=\"menu-section-title\">\n            <mat-card-title>Collection</mat-card-title>\n          </mat-card-header>\n\n          <mat-card-content>\n            <mat-form-field color=\"primary\">\n              <input type=\"text\" matInput #collectionInput [formControl]=\"collectionCtrl\" [matAutocomplete]=\"auto\">\n\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let collection of filteredcollections\" [value]=\"collection\">\n                  {{ collection }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-accordion multi=\"true\">\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>Global Search</mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <mat-form-field>\n              <input #attributeInput matInput placeholder=\"Search text\">\n            </mat-form-field>\n\n            <button #filterButton mat-mini-fab color=\"primary\" (click)=\"attributeValue = attributeInput.value\">\n              <mat-icon aria-label=\"Search\" matTooltip=\"Search\">search</mat-icon>\n            </button>\n\n            <button #clearSearchButton mat-mini-fab color=\"accent\" (click)=\"attributeInput.value = attributeValue = ''\">\n              <mat-icon aria-label=\"Clear\" matTooltip=\"Clear\">clear</mat-icon>\n            </button>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>Filter by status</mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"col-12\">\n              <mat-checkbox #checkboxArchived value=\"true\">\n                <mat-icon class=\"attribute-icon\" color=\"primary\">delete_forever</mat-icon>\n                Archived\n              </mat-checkbox>\n            </div>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>Search by Attribute</mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div *ngFor=\"let availableAttribute of availableAttributes\" class=\"attribute-filter\">\n              <div *ngIf=\"attributeFilters[availableAttribute['name']]\">\n                <mat-checkbox [(ngModel)]=\"attributeFilters[availableAttribute['name']]['enabled']\" (change)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                  <mat-icon class=\"attribute-icon\" color=\"primary\">{{ availableAttribute['icon']}}</mat-icon>\n                  {{ availableAttribute['name']}}\n                </mat-checkbox>\n                <div *ngIf=\"attributeFilters[availableAttribute['name']]['enabled']\" class=\"attribute-filter-options\">\n                  <div *ngIf=\"availableAttribute['type'] == 'string'\">\n                    <div *ngIf=\"availableAttribute['format'] == 'date-time'\">\n                      <mat-radio-group [(ngModel)]=\"attributeFilters[availableAttribute['name']]['operator']\" (change)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                        <mat-radio-button value=\"lte\">Before</mat-radio-button>\n                        <mat-radio-button value=\"eq\">Equals</mat-radio-button>\n                        <mat-radio-button value=\"gte\">After</mat-radio-button>\n                      </mat-radio-group>\n                      <mat-form-field>\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"attributeFilters[availableAttribute['name']]['value']\" (dateChange)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n\n                    <div *ngIf=\"attributeFilters[availableAttribute['name']]['enum']\">\n                      <mat-form-field>\n                        <mat-select (change)=\"changeAttributeValue(availableAttribute['name'], $event)\">\n                          <mat-option *ngFor=\"let value of attributeFilters[availableAttribute['name']]['enum']\" [value]=\"value\">\n                            {{ value }}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n\n                    <div *ngIf=\"!attributeFilters[availableAttribute['name']]['enum'] && availableAttribute['format'] != 'date-time'\">\n                      <mat-radio-group [(ngModel)]=\"attributeFilters[availableAttribute['name']]['operator']\" (change)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                        <mat-radio-button value=\"match\">Contains</mat-radio-button>\n                        <mat-radio-button value=\"eq\">Equals</mat-radio-button>\n                        <mat-radio-button value=\"not_empty\">Not Empty</mat-radio-button>\n                        <mat-radio-button value=\"empty\">Empty</mat-radio-button>\n                      </mat-radio-group>\n                      <mat-form-field>\n                        <input matInput [(ngModel)]=\"attributeFilters[availableAttribute['name']]['value']\" (input)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"availableAttribute['type'] == 'number'\">\n                    <mat-radio-group [(ngModel)]=\"attributeFilters[availableAttribute['name']]['operator']\" (change)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                        <mat-radio-button value=\"lt\">Less than</mat-radio-button>\n                        <mat-radio-button value=\"eq\">Equals</mat-radio-button>\n                        <mat-radio-button value=\"gt\">Greater than</mat-radio-button>\n                      </mat-radio-group>\n                      <mat-form-field>\n                        <input matInput type=\"number\" [(ngModel)]=\"attributeFilters[availableAttribute['name']]['value']\" (input)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                      </mat-form-field>\n                  </div>\n\n                  <div *ngIf=\"availableAttribute['type'] == 'boolean'\">\n                     <mat-radio-group [(ngModel)]=\"attributeFilters[availableAttribute['name']]['operator']\" (change)=\"triggerAttributeFilterChange(attributeFilters[availableAttribute['name']])\">\n                      <mat-radio-button value=\"eq\">Include</mat-radio-button>\n                      <mat-radio-button value=\"ne\">Exclude</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </mat-expansion-panel>\n\n          <mat-expansion-panel>\n            <mat-expansion-panel-header>\n              <mat-panel-title>Filter by Application</mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" *ngFor=\"let productInstance of productInstances$ | async\">\n              <div class=\"col-12\">\n                <img aria-hidden src=\"{{ productInstance.logo }}\" height=\"25\" />\n                <span class=\"application-filter-title\">{{ productInstance.name }}</span>\n              </div>\n              <div class=\"col-11 offset-md-1\">\n                <mat-radio-group [(ngModel)]=\"selectedApplications[productInstance.uid]\" (change)=\"triggerDataReload()\">\n                  <mat-radio-button value=\"any\">Any</mat-radio-button>\n                  <mat-radio-button value=\"include\">Include</mat-radio-button>\n                  <mat-radio-button value=\"exclude\">Exclude</mat-radio-button>\n                </mat-radio-group>\n              </div>\n            </div>\n          </mat-expansion-panel>\n        </mat-accordion>\n      </div>\n\n      <div class=\"col-10\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/connec-ui/connec-ui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnecUiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_mnoe_api_service__ = __webpack_require__("../../../../../src/app/services/mnoe-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ConnecUiComponent = (function () {
    function ConnecUiComponent(router, route, connecApiService, mnoeApiService) {
        this.router = router;
        this.route = route;
        this.connecApiService = connecApiService;
        this.mnoeApiService = mnoeApiService;
        this.loading = false;
        this.organizations = [];
        this.collections = [];
        this.filteredcollections = [];
        this.productInstances = [];
        this.attributeValue = undefined;
        this.selectedApplications = {};
        this.availableAttributes = [];
        this.attributeFilters = {};
        this.reloadDataTrigger = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.collectionCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    ConnecUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Expose search click event
        this.filterButtonClick$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].fromEvent(this.filterButton._elementRef.nativeElement, 'click');
        this.clearSearchButtonClick$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].fromEvent(this.clearSearchButton._elementRef.nativeElement, 'click');
        // Available collections
        this.collections$ = this.connecApiService.collections();
        this.collections$.subscribe(function (res) {
            res.forEach(function (collection) {
                _this.collections.push(collection);
                _this.filteredcollections.push(collection);
            });
            _this.loadJsonSchemaAttributes();
        });
        // Reload applications on Organization change
        this.organizationSelector.change.subscribe(function (organization) {
            sessionStorage.setItem('channelId', organization.value['uid']);
            sessionStorage.setItem('organizationId', organization.value['id']);
            // Reload product instances
            _this.productInstances$ = _this.mnoeApiService.productInstances();
            _this.productInstances$.subscribe(function (res) {
                _this.productInstances = [];
                res.forEach(function (record) {
                    _this.productInstances.push(record);
                    _this.selectedApplications[record['uid']] = 'any';
                });
            });
        });
        // Current user organizations
        this.mnoeApiService.currentUser().subscribe(function (user) {
            user['organizations'].map(function (organization) { return _this.organizations.push(organization); });
            // Select first Organization
            if (sessionStorage.getItem('organizationId')) {
                _this.organizationSelector.value = _this.organizations.find(function (organization) { return organization['id'] === sessionStorage.getItem('organizationId'); });
            }
            else {
                _this.organizationSelector.value = _this.organizations[0];
            }
            // Load product instances
            _this.productInstances$ = _this.mnoeApiService.productInstances();
            _this.productInstances$.subscribe(function (res) {
                _this.productInstances = [];
                res.forEach(function (record) {
                    _this.productInstances.push(record);
                    _this.selectedApplications[record['uid']] = 'any';
                });
            });
        });
        // Filter autocomplete list
        this.collectionCtrl.valueChanges
            .subscribe(function (collection) {
            _this.filteredcollections = collection ? _this.filterCollections(collection) : _this.collections.slice();
        });
        this.autoComplete.optionSelected.subscribe(function (collection) {
            _this.navigateToCollection(collection.option.value);
            _this.loadJsonSchemaAttributes();
        });
    };
    // Return IdMaps where record has been pushed to external application
    ConnecUiComponent.prototype.idMapFilter = function (ids) {
        if (!ids) {
            return null;
        }
        return ids.filter(function (idMap) { return idMap['id'] && idMap['provider']; });
    };
    // Find ProductInstance of an IdMap
    ConnecUiComponent.prototype.productInstanceFilter = function (idMap) {
        return this.productInstances.find(function (x) { return x.uid === idMap['group_id']; });
    };
    ConnecUiComponent.prototype.navigateToCollection = function (collection) {
        this.router.navigate(['/visualiser', collection]);
    };
    ConnecUiComponent.prototype.filterCollections = function (name) {
        return this.collections.filter(function (collection) {
            return collection.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    // Workaround as the mat-select change events is triggered before the value gets set on the model
    ConnecUiComponent.prototype.changeAttributeValue = function (name, $event) {
        this.attributeFilters[name]['value'] = $event.value;
        this.triggerAttributeFilterChange(this.attributeFilters[name]);
    };
    ConnecUiComponent.prototype.triggerAttributeFilterChange = function (attributeFilter) {
        if (!attributeFilter['enabled']) {
            return this.triggerDataReload();
        }
        if ((attributeFilter['value'] || attributeFilter['value'] == 0) && attributeFilter['operator']) {
            return this.triggerDataReload();
        }
        if (['empty', 'not_empty'].indexOf(attributeFilter['operator']) != -1) {
            return this.triggerDataReload();
        }
    };
    ConnecUiComponent.prototype.triggerDataReload = function () {
        this.reloadDataTrigger.next();
    };
    ConnecUiComponent.prototype.loadJsonSchemaAttributes = function () {
        var _this = this;
        this.availableAttributes = [];
        // Get collection JSON schema
        var collection = this.collectionCtrl.value;
        this.jsonSchema$ = this.connecApiService.jsonSchema(collection);
        this.jsonSchema$.subscribe(function (schema) {
            _this.jsonSchema = schema.plain();
            var json_properties = _this.jsonSchema['properties'][collection]['items']['properties'];
            var properties = Object.keys(json_properties);
            properties.forEach(function (property) {
                if (['resource_type', 'channel_id', 'group_id'].indexOf(property) == -1) {
                    var propertyHash = json_properties[property];
                    if (['string', 'number', 'boolean'].indexOf(propertyHash['type']) != -1) {
                        propertyHash['name'] = property;
                        // Icon to display
                        if (propertyHash['name'] === 'id') {
                            propertyHash['icon'] = 'vpn_key';
                        }
                        else if (propertyHash['name'].endsWith('_id')) {
                            propertyHash['icon'] = 'compare_arrows';
                        }
                        else if (propertyHash['type'] === 'number') {
                            propertyHash['icon'] = 'keyboard';
                        }
                        else if (propertyHash['type'] === 'boolean') {
                            propertyHash['icon'] = 'remove';
                        }
                        else if (propertyHash['type'] === 'string') {
                            if (propertyHash['format'] === 'date-time') {
                                propertyHash['icon'] = 'date_range';
                            }
                            else {
                                propertyHash['icon'] = 'text_format';
                            }
                        }
                        else {
                            propertyHash['icon'] = 'compare_arrows';
                        }
                        _this.availableAttributes.push(propertyHash);
                    }
                }
            });
            // Build list of filterable attributes
            _this.availableAttributes.forEach(function (availableAttribute) {
                var value = availableAttribute['type'] === 'boolean' ? true : null;
                _this.attributeFilters[availableAttribute['name']] = {
                    enabled: false,
                    value: value,
                    operator: 'eq',
                    type: availableAttribute['type'],
                    enum: availableAttribute['enum']
                };
            });
        });
    };
    return ConnecUiComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loader'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_spinner__["a" /* MatProgressSpinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material_progress_spinner__["a" /* MatProgressSpinner */]) === "function" && _a || Object)
], ConnecUiComponent.prototype, "loader", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('collectionInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInput */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInput */]) === "function" && _b || Object)
], ConnecUiComponent.prototype, "collectionInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('auto'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__["a" /* MatAutocomplete */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material_autocomplete__["a" /* MatAutocomplete */]) === "function" && _c || Object)
], ConnecUiComponent.prototype, "autoComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('organizationSelector'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSelect */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatSelect */]) === "function" && _d || Object)
], ConnecUiComponent.prototype, "organizationSelector", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('attributeInput'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInput */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInput */]) === "function" && _e || Object)
], ConnecUiComponent.prototype, "attributeInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('checkboxArchived'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckbox */]) === "function" && _f || Object)
], ConnecUiComponent.prototype, "checkboxArchived", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filterButton'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButton */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButton */]) === "function" && _g || Object)
], ConnecUiComponent.prototype, "filterButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('clearSearchButton'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButton */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButton */]) === "function" && _h || Object)
], ConnecUiComponent.prototype, "clearSearchButton", void 0);
ConnecUiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'connec-ui',
        template: __webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.html"),
        styles: [__webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_14__services_mnoe_api_service__["a" /* MnoeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_mnoe_api_service__["a" /* MnoeApiService */]) === "function" && _m || Object])
], ConnecUiComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=connec-ui.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-record/create-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-record/create-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-1\">\n    <button mat-icon-button (click)=\"navigateToCollection(collection)\">\n      <mat-icon aria-label=\"Back\">chevron_left</mat-icon> Back\n    </button>\n  </div>\n  <div class=\"col-11\">\n    <h2>Create {{ collection }}</h2>\n  </div>\n</div>\n\n<json-schema-form\n  framework=\"material-design\"\n  [loadExternalAssets]=\"true\"\n  [schema]=\"jsonSchema\"\n  (onSubmit)=\"createRecord($event)\">\n</json-schema-form>\n"

/***/ }),

/***/ "../../../../../src/app/create-record/create-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRecordComponent = (function () {
    function CreateRecordComponent(connecApiService, route, router) {
        this.connecApiService = connecApiService;
        this.route = route;
        this.router = router;
    }
    CreateRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // Load Json schema
            _this.collection = params['collection'];
            _this.jsonSchema$ = _this.connecApiService.jsonSchema(params['collection']);
            _this.jsonSchema$.subscribe(function (schema) { return _this.jsonSchema = schema.plain(); });
        });
    };
    CreateRecordComponent.prototype.createRecord = function (formData) {
        var _this = this;
        var keys = Object.keys(formData);
        var collection = keys[0];
        var record = formData[collection][0];
        var data = {};
        data[collection] = record;
        this.connecApiService.createEntity(collection, data)
            .subscribe(function (record) {
            _this.router.navigate(['/visualiser', record.resource_type, record.id]);
            scroll(0, 0);
        });
    };
    CreateRecordComponent.prototype.navigateToCollection = function (collection) {
        this.router.navigate(['/visualiser', collection]);
    };
    return CreateRecordComponent;
}());
CreateRecordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-record',
        template: __webpack_require__("../../../../../src/app/create-record/create-record.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-record/create-record.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CreateRecordComponent);

var _a, _b, _c;
//# sourceMappingURL=create-record.component.js.map

/***/ }),

/***/ "../../../../../src/app/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
var schema = {
    version: 1,
    name: 'connec_entities',
    stores: {
        entities: {
            primaryKey: 'id'
        }
    }
};
//# sourceMappingURL=db.js.map

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"entity$ | async\">\n  <div class=\"row\">\n    <div class=\"col-1\">\n      <button mat-icon-button (click)=\"navigateToCollection(entity.resource_type)\">\n        <mat-icon aria-label=\"Back\">chevron_left</mat-icon> Back\n      </button>\n    </div>\n    <div class=\"col-11\">\n      <h2>{{ entity.friendlyName }}</h2>\n    </div>\n  </div>\n\n  <mat-tab-group>\n    <mat-tab label=\"View Details\">\n      <app-entity-attribute [entity]=\"entity\"></app-entity-attribute>\n    </mat-tab>\n\n    <mat-tab label=\"Edit Details\">\n      <json-schema-form\n        [schema]=\"jsonSchema\"\n        [(data)]=\"editEntityData\"\n        framework=\"material-design\"\n        loadExternalAssets=\"true\"\n        (onSubmit)=\"updateEntity($event)\">\n      </json-schema-form>\n    </mat-tab>\n\n    <mat-tab label=\"View matching records\">\n      <span *ngIf=\"matchingRecords?.entities.length == 0\">No matching records found</span>\n\n      <table class=\"table table-striped\" *ngIf=\"matchingRecords?.entities.length > 0\">\n        <tbody>\n          <tr *ngFor=\"let matchingRecord of matchingRecords?.entities\">\n            <td>\n              {{ matchingRecord.friendlyName }}\n            </td>\n            <td>\n              <button color=\"primary\" mat-icon-button title=\"Details\" (click)=\"navigateToDetails(matchingRecord)\">\n                <mat-icon>zoom_in</mat-icon>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__ = __webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DetailComponent = (function () {
    function DetailComponent(route, router, connecApiService, _location, dialog, _parent) {
        this.route = route;
        this.router = router;
        this.connecApiService = connecApiService;
        this._location = _location;
        this.dialog = dialog;
        this._parent = _parent;
        this.editEntityData = {};
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadEntity();
        // Force selected collection using route
        this.route.params.subscribe(function (params) {
            _this._parent.collectionCtrl.setValue(params['collection']);
            _this.loadEntity();
            _this.jsonSchema$ = _this.connecApiService.jsonSchema(params['collection']);
            _this.jsonSchema$.subscribe(function (schema) {
                _this.jsonSchema = schema.plain();
            });
        });
    };
    DetailComponent.prototype.loadEntity = function () {
        var _this = this;
        // Fetch entity
        this.entity$ = this.route.params.switchMap(function (params) {
            _this._parent.loading = true;
            return _this.connecApiService.fetchEntity(params['collection'], params['id']);
        });
        // On entity load, fetch matching records
        this.entity$.subscribe(function (entity) {
            _this._parent.loading = false;
            _this.entity = entity;
            _this.editEntityData[_this.entity.resource_type] = [_this.entity];
            // Fetch matching records
            if (_this.entity.matching_records) {
                var filter = '_id in ';
                var ids = _this.entity.matching_records.map(function (record) {
                    if (!record.match_id) {
                        return '';
                    }
                    return '\'' + record.match_id.find(function (idMap) { return idMap['provider'] === 'connec'; })['id'] + '\'';
                }).join(',');
                filter += '[' + ids + ']';
                _this.matchingRecords$ = _this.connecApiService.fetchEntities(_this.entity.resource_type, 100, 0, 'created_at', 'ASC', filter);
                _this.matchingRecords$.subscribe(function (matchingRecords) { return _this.matchingRecords = matchingRecords; });
            }
        });
    };
    DetailComponent.prototype.updateEntity = function ($event) {
        var data = {};
        data[this.entity.resource_type] = this.editEntityData[this.entity.resource_type][0];
        this.connecApiService.updateEntity(this.entity, data);
    };
    DetailComponent.prototype.navigateToCollection = function (collection) {
        this.router.navigate(['/visualiser', collection]);
        scroll(0, 0);
    };
    DetailComponent.prototype.navigateToDetails = function (entity) {
        this.router.navigate(['/visualiser', entity.resource_type, entity['connecId']]);
        scroll(0, 0);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail',
        template: __webpack_require__("../../../../../src/app/detail/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/detail/detail.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]) === "function" && _f || Object])
], DetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/effects/entities_page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesPageEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__("../../../../@ngrx/db/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__ = __webpack_require__("../../../../rxjs/_esm5/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_entities_page__ = __webpack_require__("../../../../../src/app/actions/entities_page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EntitiesPageEffects = (function () {
    function EntitiesPageEffects(actions$, connecApiService, db) {
        var _this = this;
        this.actions$ = actions$;
        this.connecApiService = connecApiService;
        this.db = db;
        /**
         * This effect does not yield any actions back to the store. Set
         * `dispatch` to false to hint to @ngrx/effects that it should
         * ignore any elements of this effect stream.
         *
         * The `defer` observable accepts an observable factory function
         * that is called when the observable is subscribed to.
         * Wrapping the database open call in `defer` makes
         * effect easier to test.
         */
        this.openDB$ = Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__["a" /* defer */])(function () {
            return _this.db.open('connec_entities');
        });
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.loadEntities$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_entities_page__["a" /* LOAD */])
            .mergeMap(function () {
            return _this.connecApiService.fetchEntities('contacts')
                .map(function (entitiesPage) { return new __WEBPACK_IMPORTED_MODULE_12__actions_entities_page__["d" /* LoadSuccessAction */](entitiesPage); })
                .catch(function (error) { return Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_12__actions_entities_page__["c" /* LoadFailAction */](error)); });
        });
    }
    return EntitiesPageEffects;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */]) === "function" && _a || Object)
], EntitiesPageEffects.prototype, "openDB$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["a" /* Observable */]) === "function" && _b || Object)
], EntitiesPageEffects.prototype, "loadEntities$", void 0);
EntitiesPageEffects = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["b" /* Database */]) === "function" && _e || Object])
], EntitiesPageEffects);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=entities_page.js.map

/***/ }),

/***/ "../../../../../src/app/entity-attribute/entity-attribute.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.connec-details {\n  margin-bottom: 0px;\n}\n\ntable.connec-details td {\n  padding: 0px 1em;\n  vertical-align: middle;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entity-attribute/entity-attribute.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped connec-details\">\n  <tbody>\n    <tr *ngFor=\"let key of properties()\">\n      <td>{{ key }}</td>\n      <td *ngIf=\"!entity[key]\"></td>\n      <td *ngIf=\"entity[key] && isArray(key) && !isIdMap(key)\" colspan=\"2\">\n        <app-entity-attribute *ngFor=\"let element of entity[key]\" [entity]=\"element\"></app-entity-attribute>\n      </td>\n      <td *ngIf=\"entity[key] && !isArray(key) && isObject(key) && !isIdMap(key)\" colspan=\"2\">\n        <app-entity-attribute [entity]=\"entity[key]\"></app-entity-attribute>\n      </td>\n      <td *ngIf=\"entity[key] && isIdMap(key)\">\n        <button mat-icon-button (click)=\"navigateToDetails(key)\">\n          <mat-icon aria-label=\"View\">zoom_in</mat-icon>View {{ connecIdMap(entity[key])['id'] }}\n        </button>\n      </td>\n      <td *ngIf=\"entity[key] && !isObject(key)\">\n        {{ entity[key] }}\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/entity-attribute/entity-attribute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityAttributeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pluralize__ = __webpack_require__("../../../../pluralize/pluralize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pluralize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pluralize__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityAttributeComponent = (function () {
    function EntityAttributeComponent(route, router, connecApiService) {
        this.route = route;
        this.router = router;
        this.connecApiService = connecApiService;
    }
    EntityAttributeComponent.prototype.ngOnInit = function () {
    };
    // Navigate to the association
    // key: association name (eg: organization_id)
    EntityAttributeComponent.prototype.navigateToDetails = function (key) {
        var collection;
        if (key.endsWith('_id')) {
            // Association: {organization_id: '234214'}
            collection = __WEBPACK_IMPORTED_MODULE_3_pluralize__(key.replace('_id', ''));
        }
        else {
            // Handle polymorphic links: {class: 'Invoice', id: '8273'}
            collection = __WEBPACK_IMPORTED_MODULE_3_pluralize__(this.entity['class'].toLowerCase());
        }
        // Find Connec! IdMap
        var idMap = this.connecIdMap(this.entity[key]);
        this.router.navigate(['/visualiser', collection, idMap['id']]);
    };
    EntityAttributeComponent.prototype.properties = function () {
        // Ignore properties id and matching_records
        var keys = Object.keys(this.entity);
        var ignoredKeys = ['matching_records'];
        if (keys.indexOf('class') == -1) {
            ignoredKeys.push('id');
        }
        for (var _i = 0, ignoredKeys_1 = ignoredKeys; _i < ignoredKeys_1.length; _i++) {
            var ignoredKey = ignoredKeys_1[_i];
            var index = keys.indexOf(ignoredKey);
            if (index !== -1) {
                keys.splice(index, 1);
            }
        }
        return keys;
    };
    EntityAttributeComponent.prototype.isIdMap = function (key) {
        return this.isObject(key) && (key === 'id' || key.endsWith('_id'));
    };
    EntityAttributeComponent.prototype.isObject = function (key) {
        return typeof this.entity[key] === 'object';
    };
    EntityAttributeComponent.prototype.isArray = function (key) {
        return Array.isArray(this.entity[key]);
    };
    EntityAttributeComponent.prototype.connecIdMap = function (idMaps) {
        return idMaps.find(function (idMap) { return idMap['provider'] === 'connec'; });
    };
    return EntityAttributeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EntityAttributeComponent.prototype, "entity", void 0);
EntityAttributeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-entity-attribute',
        template: __webpack_require__("../../../../../src/app/entity-attribute/entity-attribute.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entity-attribute/entity-attribute.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _c || Object])
], EntityAttributeComponent);

var _a, _b, _c;
//# sourceMappingURL=entity-attribute.component.js.map

/***/ }),

/***/ "../../../../../src/app/merge-attributes/merge-attributes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-merge-attributes {\n  width: 100%;\n}\n\n.merge-attribute-name {\n  font-weight: 800;\n}\n\n.merge-attribute-name-nested span.merge-attribute-name {\n  margin-left: 10px;\n}\n\n.merge-attribute-row {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merge-attributes/merge-attributes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let attribute of properties()\">\n  <div class=\"col-2\" *ngIf=\"!hasNestedProperties[attribute]\">\n    <span class=\"merge-attribute-name\">{{ attribute }}</span>\n  </div>\n\n  <div class=\"col-10\" *ngIf=\"!hasNestedProperties[attribute]\">\n    <mat-button-toggle-group class=\"row merge-attribute-row\" [(ngModel)]=\"selectedAttributes[attribute]\">\n      <div class=\"col-{{12/numberRecords}} merge-attribute-value\" *ngFor=\"let record of records\">\n        <mat-button-toggle value=\"{{copyValue(record[attribute])}}\">\n          <span style=\"width: 100%\">{{ record[attribute] }}</span>\n        </mat-button-toggle>\n      </div>\n    </mat-button-toggle-group>\n  </div>\n\n  <div class=\"col-12\" *ngIf=\"hasNestedProperties[attribute]\">\n    <span class=\"merge-attribute-name\">{{ attribute }}</span>\n    <div class=\"merge-attribute-name-nested\">\n      <app-merge-attributes\n        [records]=\"subRecords(attribute)\"\n        [selectedAttributes]=\"selectedAttributes[attribute]\">\n      </app-merge-attributes>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/merge-attributes/merge-attributes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MergeAttributesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MergeAttributesComponent = (function () {
    function MergeAttributesComponent() {
        this.hasNestedProperties = {};
    }
    MergeAttributesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.numberRecords = this.records.length;
        this.properties().forEach(function (key) {
            _this.hasNestedProperties[key] = _this.records.some(function (record) { return (record[key] && _this.isObject(record[key])); });
            var defaultValue = _this.records.map(function (record) { return (record[key] && !_this.isArray(record[key]) && !_this.isObject(record[key])) ? record[key].toString() : record[key]; })
                .find(function (value) { return value; });
            _this.selectedAttributes[key] = _this.copyValue(defaultValue);
        });
    };
    MergeAttributesComponent.prototype.isArray = function (value) {
        return Array.isArray(value);
    };
    MergeAttributesComponent.prototype.isObject = function (value) {
        return !this.isArray(value) && typeof value === 'object';
    };
    MergeAttributesComponent.prototype.copyValue = function (value) {
        return this.isObject(value) ? Object.assign({}, value) : value;
    };
    MergeAttributesComponent.prototype.hasValue = function (obj) {
        var _this = this;
        return ((!this.isObject(obj) && !!obj) // Empty string
            || (this.isArray(obj) && obj.length > 0) // Empty array
            || (this.isObject(obj) && Object.keys(obj).length > 0 && Object.keys(obj).some(function (key) { return _this.hasValue(obj[key]); })) // Empty object
        );
    };
    // Return available properties with a selectable value
    MergeAttributesComponent.prototype.properties = function () {
        var _this = this;
        // Find keys based on JSON Schema or available properties
        var keys = [];
        if (this.jsonProperties) {
            keys = Object.keys(this.jsonProperties);
        }
        else {
            this.records.forEach(function (record) {
                Object.keys(record).forEach(function (attribute) {
                    if (keys.indexOf(attribute) == -1) {
                        keys.push(attribute);
                    }
                });
            });
        }
        // Remove keys with only wmpty values
        keys = keys.filter(function (key) { return _this.records.some(function (record) { return _this.hasValue(record[key]); }); });
        // Remove non modifiable properties
        for (var _i = 0, _a = ['id', 'matching_records', 'group_id', 'channel_id', 'resource_type', 'connecId', 'friendlyName', 'created_at', 'updated_at']; _i < _a.length; _i++) {
            var ignoredKey = _a[_i];
            var index = keys.indexOf(ignoredKey);
            if (index !== -1) {
                keys.splice(index, 1);
            }
        }
        return keys;
    };
    MergeAttributesComponent.prototype.subRecords = function (attribute) {
        return this.records.map(function (record) { return record[attribute]; });
    };
    return MergeAttributesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MergeAttributesComponent.prototype, "records", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MergeAttributesComponent.prototype, "jsonProperties", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MergeAttributesComponent.prototype, "selectedAttributes", void 0);
MergeAttributesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-merge-attributes',
        template: __webpack_require__("../../../../../src/app/merge-attributes/merge-attributes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merge-attributes/merge-attributes.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], MergeAttributesComponent);

//# sourceMappingURL=merge-attributes.component.js.map

/***/ }),

/***/ "../../../../../src/app/merge-records/merge-records.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-icon {\n  vertical-align: middle;\n}\n\n.mat-button-toggle {\n  width: 100%;\n  height: 100%;\n}\n\n.mat-button-toggle-label {\n  width: 100%;\n}\n\n.mat-button-toggle-checked {\n  background: #874ac7;\n  color: rgba(255,255,255,.87);\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.menu-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.merge-record {\n  display: block;\n  padding: 5px;\n}\n\n.merge-record mat-radio-button {\n  display: block;\n  padding: 5px;\n}\n\n.merge-record-keep mat-radio-button {\n  background: #874ac7;\n  color: rgba(255,255,255,.87);\n}\n\n.merge-record-delete mat-radio-button {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/merge-records/merge-records.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row menu-header\">\n  <div class=\"col-2\">\n    <button mat-icon-button (click)=\"navigateToCollection()\">\n      <mat-icon aria-label=\"Back\">chevron_left</mat-icon> Back\n    </button>\n  </div>\n\n  <div class=\"col-4\">\n    <h2>Merge {{ collection }}</h2>\n  </div>\n\n  <div class=\"col-2\">\n    <button mat-raised-button color=\"primary\" (click)=\"mergeRecords()\" [disabled]=\"!selectedAttributes['id']\">\n      <mat-icon aria-label=\"Back\">call_merge</mat-icon> Merge\n    </button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-2\">\n    <span class=\"merge-attribute-name\">Prime Record</span>\n  </div>\n\n  <div class=\"col-10 merge-attribute-value\" *ngIf=\"records\">\n    <mat-radio-group class=\"row merge-attribute-row\" [(ngModel)]=\"selectedAttributes['id']\">\n      <div class=\"col-{{12/numberRecords}} merge-record {{selectedAttributes['id'] == entity['connecId'] ? 'merge-record-keep' : 'merge-record-delete'}}\" *ngFor=\"let entity of records.entities\">\n        <mat-radio-button value=\"{{entity['connecId']}}\">\n          <span *ngIf=\"!selectedAttributes['id']\">\n            Select record to keep\n          </span>\n          <span *ngIf=\"selectedAttributes['id'] && selectedAttributes['id'] == entity['connecId']\">\n            <mat-icon color=\"warn\">save</mat-icon>\n            Record will be kept\n          </span>\n          <span *ngIf=\"selectedAttributes['id'] && selectedAttributes['id'] != entity['connecId']\">\n            <mat-icon color=\"warn\">delete</mat-icon>\n            Record will be deleted\n          </span>\n        </mat-radio-button>\n      </div>\n    </mat-radio-group>\n  </div>\n</div>\n\n<app-merge-attributes *ngIf=\"records\"\n  [jsonProperties]=\"jsonProperties\"\n  [records]=\"records.entities\"\n  [selectedAttributes]=\"selectedAttributes\">\n</app-merge-attributes>\n"

/***/ }),

/***/ "../../../../../src/app/merge-records/merge-records.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MergeRecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__ = __webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var MergeRecordsComponent = (function () {
    function MergeRecordsComponent(route, router, connecApiService, _parent) {
        this.route = route;
        this.router = router;
        this.connecApiService = connecApiService;
        this._parent = _parent;
        this.collection = null;
        this.recordsAttributes = [];
        this.selectedAttributes = {};
    }
    MergeRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Force selected collection using route
        this.route.params.subscribe(function (params) {
            _this._parent.collectionCtrl.setValue(params['collection']);
        });
        this.route.params.subscribe(function (params) {
            _this.collection = params['collection'];
            var filter = '_id in [' + params['records'] + ']';
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(
            // Load json schema
            _this.jsonSchema$ = _this.connecApiService.jsonSchema(_this.collection), 
            // Load records
            _this.records$ = _this.connecApiService.fetchEntities(_this.collection, 100, 0, 'created_at', 'ASC', filter, null, false, [], false)).subscribe(function (res) {
                // Process Json Schema
                _this.jsonSchema = res[0].plain();
                _this.jsonProperties = _this.jsonSchema['properties'][_this.collection]['items']['properties'];
                // Process records
                _this.records = res[1];
                _this.numberRecords = _this.records.entities.length;
            });
        });
    };
    MergeRecordsComponent.prototype.mergeRecords = function () {
        var _this = this;
        var primeRecord = this.records.entities.find(function (entity) { return entity['connecId'] == _this.selectedAttributes['id']; });
        var mergedRecords = this.records.entities.filter(function (entity) { return entity['connecId'] != _this.selectedAttributes['id']; });
        this.connecApiService.mergeRecords(primeRecord, mergedRecords, this.selectedAttributes)
            .subscribe(function (record) {
            _this.navigateToDetails(record);
            scroll(0, 0);
        });
    };
    MergeRecordsComponent.prototype.navigateToCollection = function () {
        this.router.navigate(['/visualiser', this.collection]);
        scroll(0, 0);
    };
    MergeRecordsComponent.prototype.navigateToDetails = function (entity) {
        this.router.navigate(['/visualiser', entity.resource_type, entity['connecId']]);
        scroll(0, 0);
    };
    return MergeRecordsComponent;
}());
MergeRecordsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-merge-records',
        template: __webpack_require__("../../../../../src/app/merge-records/merge-records.component.html"),
        styles: [__webpack_require__("../../../../../src/app/merge-records/merge-records.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]) === "function" && _d || Object])
], MergeRecordsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=merge-records.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/entities_page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesPage; });
var EntitiesPage = (function () {
    function EntitiesPage(entities, pagination) {
        this.entities = entities;
        this.pagination = pagination;
    }
    return EntitiesPage;
}());

//# sourceMappingURL=entities_page.js.map

/***/ }),

/***/ "../../../../../src/app/models/entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var Entity = (function () {
    function Entity(data) {
        for (var key in data) {
            this[key] = data[key];
        }
        this['connecId'] = this.connecId();
        this['friendlyName'] = this.friendlyName();
    }
    Entity.prototype.connecId = function () {
        return this.isString(this.id) ? this.id : this.id.find(function (idMap) { return idMap['provider'] === 'connec'; })['id'];
    };
    Entity.prototype.friendlyName = function () {
        return this.transaction_number || this.payment_reference || this.name || this.full_name || this.reference || this.number || this.title;
    };
    Entity.prototype.properties = function () {
        var keys = Object.keys(this);
        for (var _i = 0, _a = ['id', 'matching_records']; _i < _a.length; _i++) {
            var ignoredKey = _a[_i];
            var index = keys.indexOf(ignoredKey);
            if (index !== -1) {
                keys.splice(index, 1);
            }
        }
        return keys;
    };
    Entity.prototype.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    return Entity;
}());

//# sourceMappingURL=entity.js.map

/***/ }),

/***/ "../../../../../src/app/models/product_instance.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInstance; });
var ProductInstance = (function () {
    function ProductInstance(data) {
        for (var key in data) {
            this[key] = data[key];
        }
    }
    return ProductInstance;
}());

//# sourceMappingURL=product_instance.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/entities_page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_entities_page__ = __webpack_require__("../../../../../src/app/actions/entities_page.ts");

function reducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_entities_page__["a" /* LOAD */]: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_entities_page__["b" /* LOAD_SUCCESS */]: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=entities_page.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_page__ = __webpack_require__("../../../../../src/app/reducers/entities_page.ts");

var reducers = {
    entitiesPage: __WEBPACK_IMPORTED_MODULE_0__entities_page__["a" /* reducer */]
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/connec-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnecApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_mnoe_api_service__ = __webpack_require__("../../../../../src/app/services/mnoe-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_entities_page__ = __webpack_require__("../../../../../src/app/models/entities_page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_entity__ = __webpack_require__("../../../../../src/app/models/entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnecApiService = (function () {
    function ConnecApiService(restangular, mnoeApiService) {
        this.restangular = restangular;
        this.mnoeApiService = mnoeApiService;
        this.configure();
    }
    // Fetch environment settings (Connec! endpoint)
    ConnecApiService.prototype.configure = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // Fetch Config
            _this.config$ = _this.mnoeApiService.systemIdentity();
            _this.config$.subscribe(function (res) {
                _this.config = res;
                _this.restangular = _this.restangular.withConfig(function (RestangularProvider) {
                    RestangularProvider.setBaseUrl(_this.config['connec_endpoint'] + '/api/v2');
                    RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json', 'CONNEC-EXTERNAL-IDS': true });
                    // RestangularProvider.setRequestSuffix('.json');
                    // Extract collection content
                    RestangularProvider.setResponseExtractor(function (response, operation) {
                        if (operation === 'getList') {
                            return response[Object.keys(response)[0]];
                        }
                        return response;
                    });
                });
                resolve();
            });
        });
        return promise;
    };
    ConnecApiService.prototype.collections = function () {
        var _this = this;
        return this.restangular.all('/' + sessionStorage.getItem('channelId')).get('', { sso_session: sessionStorage.getItem('ssoSession') })
            .map(function (res) {
            var cols = res._links.map(function (collection) { return Object.keys(collection)[0]; });
            return cols;
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    ConnecApiService.prototype.fetchEntities = function (collection, pageSize, pageNumber, sortColumn, sortOrder, filter, search, archived, mappings, externalIds) {
        var _this = this;
        if (pageSize === void 0) { pageSize = 100; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (sortColumn === void 0) { sortColumn = null; }
        if (sortOrder === void 0) { sortOrder = 'ASC'; }
        if (filter === void 0) { filter = null; }
        if (search === void 0) { search = null; }
        if (archived === void 0) { archived = false; }
        if (mappings === void 0) { mappings = []; }
        if (externalIds === void 0) { externalIds = true; }
        var options = { '$top': pageSize, '$skip': pageSize * (pageNumber), 'mappings[]': [], sso_session: sessionStorage.getItem('ssoSession') };
        mappings.forEach(function (m) { return options['mappings[]'].push(JSON.stringify(m)); });
        var archiveFilter = '';
        if (archived) {
            archiveFilter = 'status eq \'ARCHIVED\'';
        }
        else {
            archiveFilter = 'status ne \'ARCHIVED\'';
        }
        // Filter: $filter=code eq 'CT3'
        if (filter) {
            archiveFilter += ' and ' + filter;
        }
        options['$filter'] = archiveFilter;
        // Search
        if (search) {
            options['$search'] = search;
        }
        // Order: $orderby=name ASC
        if (sortColumn) {
            options['$orderby'] = sortColumn + ' ' + sortOrder;
        }
        return this.restangular.all(sessionStorage.getItem('channelId')).customGET(collection, options, { 'CONNEC-EXTERNAL-IDS': externalIds })
            .map(function (res) { return _this.extractQueryData(res, collection); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.fetchEntity = function (collection, id) {
        var _this = this;
        return this.restangular.all(sessionStorage.getItem('channelId')).one(collection, id).get({ '$expand': 'matching_records', sso_session: sessionStorage.getItem('ssoSession') })
            .map(function (record) { return _this.deserializeModel(record[collection]); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.createEntity = function (collection, data) {
        var _this = this;
        return this.restangular.all(sessionStorage.getItem('channelId')).one(collection)
            .customPOST(data, '', { sso_session: sessionStorage.getItem('ssoSession') }, { 'CONNEC-EXTERNAL-IDS': false })
            .map(function (record) { return _this.deserializeModel(record[collection]); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.updateEntity = function (entity, data) {
        var _this = this;
        return this.restangular.all(sessionStorage.getItem('channelId')).one(entity.resource_type)
            .customPUT(data, entity['connecId'], { sso_session: sessionStorage.getItem('ssoSession') })
            .map(function (record) { return _this.deserializeModel(record[entity.resource_type]); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.mergeRecords = function (primeRecord, mergedRecords, selectedAttributes) {
        var _this = this;
        var data = { ids: mergedRecords.map(function (entity) { return entity['connecId']; }) };
        data[primeRecord.resource_type] = selectedAttributes;
        return this.restangular.all(primeRecord.channel_id).one(primeRecord.resource_type, primeRecord['connecId'])
            .customPUT(data, 'merge', { sso_session: sessionStorage.getItem('ssoSession') }, { 'CONNEC-EXTERNAL-IDS': false })
            .map(function (record) {
            return _this.deserializeModel(record[primeRecord.resource_type]);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.sendEntityToApplication = function (entity, productInstance) {
        var _this = this;
        var data = { mappings: [{ group_id: productInstance.uid, commit: true }] };
        return this.restangular.all(entity.channel_id).one(entity.resource_type, entity['connecId'])
            .customPUT(data, 'commit', { sso_session: sessionStorage.getItem('ssoSession') })
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.jsonSchema = function (collection) {
        var _this = this;
        return this.restangular.one('json_schema', collection).get()
            .catch(function (error) { return _this.handleError(error); });
    };
    ConnecApiService.prototype.extractQueryData = function (res, collection) {
        var _this = this;
        var entitiesPage = new __WEBPACK_IMPORTED_MODULE_4__models_entities_page__["a" /* EntitiesPage */]([], res['pagination']);
        if (res[collection].constructor == Array) {
            res[collection].forEach(function (record) {
                var entity = _this.deserializeModel(record);
                entitiesPage.entities.push(entity);
            });
        }
        else {
            entitiesPage.pagination = { total: 1 };
            entitiesPage.entities.push(this.deserializeModel(res[collection]));
        }
        return entitiesPage;
    };
    ConnecApiService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ConnecApiService.prototype.deserializeModel = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_5__models_entity__["a" /* Entity */](data);
    };
    return ConnecApiService;
}());
ConnecApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_mnoe_api_service__["a" /* MnoeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_mnoe_api_service__["a" /* MnoeApiService */]) === "function" && _b || Object])
], ConnecApiService);

var _a, _b;
//# sourceMappingURL=connec-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mnoe-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnoeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_product_instance__ = __webpack_require__("../../../../../src/app/models/product_instance.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MnoeApiService = (function () {
    function MnoeApiService(restangular) {
        this.restangular = restangular;
        this.restangular = this.restangular.withConfig(function (RestangularProvider) {
            RestangularProvider.setBaseUrl('/mnoe/jpi/v1');
            RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });
            // RestangularProvider.setRequestSuffix('.json');
            // Extract collection content
            RestangularProvider.setResponseExtractor(function (response, operation) {
                if (operation === 'getList') {
                    return response[Object.keys(response)[0]];
                }
                return response;
            });
        });
    }
    // Fetch current user and store session tokens and organizations
    MnoeApiService.prototype.configure = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.currentUser().subscribe(function (user) {
                // Store sso session token
                sessionStorage.setItem('ssoSession', user['sso_session']);
                // User organizations
                var organizations = [];
                user['organizations'].map(function (organization) { return organizations.push(organization); });
                // Select Organization
                if (!sessionStorage.getItem('organizationId')) {
                    sessionStorage.setItem('organizationId', organizations[0]['id']);
                }
                if (!sessionStorage.getItem('channelId')) {
                    sessionStorage.setItem('channelId', organizations[0]['uid']);
                }
                resolve();
            });
        });
        return promise;
    };
    MnoeApiService.prototype.systemIdentity = function () {
        var _this = this;
        return this.restangular.one('/system_identity').get()
            .map(function (res) {
            return res['system_identity'];
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    MnoeApiService.prototype.currentUser = function () {
        var _this = this;
        return this.restangular.one('/current_user').get()
            .map(function (res) {
            return res['current_user'];
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    MnoeApiService.prototype.productInstances = function () {
        var _this = this;
        return this.restangular.all('/organizations/' + sessionStorage.getItem('organizationId') + '/app_instances').customGET()
            .map(function (res) { return _this.extractQueryData(res, 'app_instances'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    MnoeApiService.prototype.extractQueryData = function (res, elementName) {
        var _this = this;
        var elements = [];
        var data = res[elementName];
        if (!data) {
            return [];
        }
        var keys = Object.keys(data);
        var values = keys.map(function (v) { return data[v]; });
        values.forEach(function (record) {
            var product = _this.deserializeModel(record);
            elements.push(product);
        });
        return elements;
    };
    MnoeApiService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    MnoeApiService.prototype.deserializeModel = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3__models_product_instance__["a" /* ProductInstance */](data);
    };
    return MnoeApiService;
}());
MnoeApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], MnoeApiService);

var _a;
//# sourceMappingURL=mnoe-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/visualiser/connec-search-similar-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Search similar records</h2>\n\n<mat-dialog-content>\n  <table class=\"table table-striped connec-details\">\n    <tbody>\n      <tr *ngFor=\"let key of entity.properties()\">\n        <div *ngIf=\"entity[key] && !isObject(key)\">\n          <td><mat-checkbox value=\"{{ entity[key] }}\" [(ngModel)]=\"selectedAttributes[key]\">{{ key }}</mat-checkbox></td>\n          <td *ngIf=\"entity[key]\">{{ entity[key] }}</td>\n        </div>\n      </tr>\n    </tbody>\n  </table>\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\" tabindex=\"1\">Search</button>\n  <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/visualiser/visualiser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-top {\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/visualiser/visualiser.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-2\">\n    <button class=\"menu-top\" color=\"primary\" mat-raised-button matTooltip=\"Create {{ collection }}\" (click)=\"navigateToCreateRecord()\">\n       <mat-icon>add_box</mat-icon>\n    </button>\n\n    <button class=\"menu-top\" color=\"primary\" mat-raised-button matTooltip=\"Attributes to display\" [matMenuTriggerFor]=\"attributesMenu\">\n      <mat-icon>view_list</mat-icon>\n    </button>\n    <mat-menu #attributesMenu=\"matMenu\">\n      <button mat-menu-item disabled>\n        <span>Attributes to display</span>\n      </button>\n      <button mat-menu-item *ngFor=\"let availableAttribute of availableAttributes\" (click)=\"selectAttribute($event, availableAttribute['name'])\">\n        <mat-checkbox value=\"true\" [(ngModel)]=\"selectedAttributes[availableAttribute['name']]\">\n          <mat-icon>{{ availableAttribute['icon'] }}</mat-icon>\n          {{ availableAttribute['name'] }}\n        </mat-checkbox>\n      </button>\n    </mat-menu>\n  </div>\n\n  <div class=\"col-2\">\n    <button class=\"menu-top\" color=\"primary\" mat-raised-button matTooltip=\"Unselect All\" (click)=\"unselectAll()\" [disabled]=\"numberRecordsSelected < 1\">\n       <mat-icon>check_box_outline_blank</mat-icon>\n    </button>\n\n    <button class=\"menu-top\" color=\"primary\" mat-raised-button matTooltip=\"Merge\" (click)=\"mergeRecords()\" [disabled]=\"numberRecordsSelected < 2\">\n       <mat-icon>call_merge</mat-icon>\n    </button>\n  </div>\n\n  <div class=\"col-8\">\n    <mat-paginator [length]=\"dataSource?.resultsLength\" [pageSize]=\"dataSource?.pageSize\"></mat-paginator>\n  </div>\n</div>\n\n<div class=\"mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort matSortDisableClear>\n    <ng-container *ngFor=\"let attribute of dataSource.selectedAttributes\" matColumnDef=\"{{attribute}}\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> {{ attribute }} </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{ row[attribute] }} </mat-cell>\n    </ng-container>\n\n    <!-- Applications Column -->\n    <ng-container matColumnDef=\"applications\">\n      <mat-header-cell *matHeaderCellDef> Applications </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <span *ngFor=\"let idMap of idMapFilter(row.id)\">\n          <img *ngIf=\"productInstanceFilter(idMap)\" aria-hidden src=\"{{ productInstanceFilter(idMap).logo }}\" height=\"35\" matTooltip=\"{{ productInstanceFilter(idMap).name }}\"/>\n        </span>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-menu #appMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"openSearchSimilarDialog(row)\">\n            <mat-icon>search</mat-icon>\n            Search similar\n          </button>\n          <button mat-menu-item [matMenuTriggerFor]=\"sendToMenu\">\n            <mat-icon>forward</mat-icon>\n            Send to\n          </button>\n        </mat-menu>\n\n        <mat-menu #sendToMenu=\"matMenu\">\n          <button mat-menu-item *ngFor=\"let productInstance of _parent.productInstances\" (click)=\"sendEntityToApplication(row, productInstance)\">\n            <img aria-hidden src=\"{{ productInstance.logo }}\" height=\"30\" />\n            {{ productInstance.name }}\n          </button>\n        </mat-menu>\n\n        <button color=\"primary\" mat-icon-button matTooltip=\"Details\" (click)=\"navigateToDetails(row)\">\n           <mat-icon>zoom_in</mat-icon>\n        </button>\n\n        <button *ngIf=\"row.status != 'ARCHIVED'\" color=\"warn\" mat-icon-button matTooltip=\"Archive\" (click)=\"archiveEntity(row)\">\n           <mat-icon>archive</mat-icon>\n        </button>\n\n        <button *ngIf=\"row.status == 'ARCHIVED'\" color=\"primary\" mat-icon-button matTooltip=\"Restore\" (click)=\"restoreEntity(row)\">\n           <mat-icon>unarchive</mat-icon>\n        </button>\n\n        <button color=\"primary\" mat-icon-button [matMenuTriggerFor]=\"appMenu\" matTooltip=\"More actions\">\n           <mat-icon>more_vert</mat-icon>\n        </button>\n\n        <mat-checkbox [(ngModel)]=\"selectedRecords[row['connecId']]\" (change)=\"recordSelectionChange()\"></mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"dataSource?.displayedAttributes\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: dataSource?.displayedAttributes;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/visualiser/visualiser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VisualiserComponent; });
/* unused harmony export VisualiserDataSource */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSimilarDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connec_ui_connec_ui_component__ = __webpack_require__("../../../../../src/app/connec-ui/connec-ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_connec_api_service__ = __webpack_require__("../../../../../src/app/services/connec-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_mnoe_api_service__ = __webpack_require__("../../../../../src/app/services/mnoe-api.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var VisualiserComponent = (function () {
    function VisualiserComponent(route, router, connecApiService, mnoeApiService, dialog, _parent) {
        this.route = route;
        this.router = router;
        this.connecApiService = connecApiService;
        this.mnoeApiService = mnoeApiService;
        this.dialog = dialog;
        this._parent = _parent;
        this.availableAttributes = [{ name: 'friendlyName', type: 'string', description: 'Friendly name', icon: 'text_format' }];
        this.selectedRecords = {};
        this.numberRecordsSelected = 0;
        // Set pre-selected attributes
        if (sessionStorage.getItem('connec-selected-attributes-' + this.collection)) {
            this.selectedAttributes = JSON.parse(sessionStorage.getItem('connec-selected-attributes-' + this.collection));
        }
        else {
            this.selectedAttributes = { code: true, friendlyName: true, created_at: true };
        }
    }
    VisualiserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reloadData();
        // Force selected collection using route
        this.route.params.subscribe(function (params) {
            _this.collection = params['collection'];
            _this._parent.collectionCtrl.setValue(params['collection']);
            // Get collection JSON schema
            _this.jsonSchema$ = _this.connecApiService.jsonSchema(_this.collection);
            _this.jsonSchema$.subscribe(function (schema) {
                _this.jsonSchema = schema.plain();
                // Extract list of collection available properties
                _this.availableAttributes = [{ name: 'friendlyName', type: 'string', description: 'Friendly name', icon: 'text_format' }];
                var json_properties = _this.jsonSchema['properties'][_this.collection]['items']['properties'];
                var properties = Object.keys(json_properties);
                properties.forEach(function (property) {
                    if (['resource_type', 'channel_id', 'group_id'].indexOf(property) == -1) {
                        var propertyHash = json_properties[property];
                        if (['string', 'number', 'boolean'].indexOf(propertyHash['type']) != -1) {
                            propertyHash['name'] = property;
                            // Icon to display
                            if (propertyHash['name'] === 'id') {
                                propertyHash['icon'] = 'vpn_key';
                            }
                            else if (propertyHash['name'].endsWith('_id')) {
                                propertyHash['icon'] = 'compare_arrows';
                            }
                            else if (propertyHash['type'] === 'number') {
                                propertyHash['icon'] = 'keyboard';
                            }
                            else if (propertyHash['type'] === 'boolean') {
                                propertyHash['icon'] = 'remove';
                            }
                            else if (propertyHash['type'] === 'string') {
                                if (propertyHash['format'] === 'date-time') {
                                    propertyHash['icon'] = 'date_range';
                                }
                                else {
                                    propertyHash['icon'] = 'text_format';
                                }
                            }
                            else {
                                propertyHash['icon'] = 'compare_arrows';
                            }
                            _this.availableAttributes.push(propertyHash);
                        }
                    }
                });
            });
        });
        // Reset pre-defined filters on new search
        this._parent.filterButtonClick$.subscribe(function (res) { return _this.dataSource.filter = ''; });
    };
    VisualiserComponent.prototype.reloadData = function () {
        this.dataSource = new VisualiserDataSource(this);
    };
    // Selection of attributes to display as table columns
    VisualiserComponent.prototype.selectAttribute = function ($event, selectedAttribute) {
        this.selectedAttributes[selectedAttribute] = !this.selectedAttributes[selectedAttribute];
        if (this.selectedAttributes[selectedAttribute]) {
            var index = this.dataSource.selectedAttributes.indexOf(selectedAttribute);
            if (index == -1) {
                this.dataSource.selectedAttributes.push(selectedAttribute);
            }
            index = this.dataSource.displayedAttributes.indexOf(selectedAttribute);
            if (index == -1) {
                this.dataSource.displayedAttributes.splice(this.dataSource.displayedAttributes.length - 2, 0, selectedAttribute);
            }
        }
        else {
            var index = this.dataSource.selectedAttributes.indexOf(selectedAttribute);
            if (index != -1) {
                this.dataSource.selectedAttributes.splice(index, 1);
            }
            index = this.dataSource.displayedAttributes.indexOf(selectedAttribute);
            if (index != -1) {
                this.dataSource.displayedAttributes.splice(index, 1);
            }
        }
        // Store in session
        // sessionStorage.setItem('connec-selected-attributes-' + this.collection, JSON.stringify(this.selectedAttributes));
        $event.stopPropagation();
    };
    // Return IdMaps where record has been pushed to external application
    // Keep only 1 IdMap per group_id
    VisualiserComponent.prototype.idMapFilter = function (ids) {
        if (!ids) {
            return null;
        }
        var filteredIds = [];
        ids.filter(function (idMap) { return idMap['id'] && idMap['provider']; }).forEach(function (idMap) {
            if (!filteredIds.some(function (filteredId) { return filteredId['group_id'] === idMap['group_id']; })) {
                filteredIds.push(idMap);
            }
        });
        return filteredIds;
    };
    // Find ProductInstance of an IdMap
    VisualiserComponent.prototype.productInstanceFilter = function (idMap) {
        return this._parent.productInstances.find(function (x) { return x.uid === idMap['group_id']; });
    };
    VisualiserComponent.prototype.sendEntityToApplication = function (entity, productInstance) {
        this.connecApiService.sendEntityToApplication(entity, productInstance);
    };
    VisualiserComponent.prototype.archiveEntity = function (entity) {
        var _this = this;
        var data = {};
        data[entity.resource_type] = { status: 'ARCHIVED' };
        this.connecApiService.updateEntity(entity, data).subscribe(function (res) { return _this._parent.triggerDataReload(); });
    };
    VisualiserComponent.prototype.restoreEntity = function (entity) {
        var _this = this;
        var data = {};
        data[entity.resource_type] = { status: '' };
        this.connecApiService.updateEntity(entity, data).subscribe(function (res) { return _this._parent.triggerDataReload(); });
    };
    VisualiserComponent.prototype.navigateToDetails = function (entity) {
        this.router.navigate(['/visualiser', entity.resource_type, entity['connecId']]);
        scroll(0, 0);
    };
    VisualiserComponent.prototype.navigateToCreateRecord = function () {
        this.router.navigate(['/visualiser', this.collection, 'new']);
        scroll(0, 0);
    };
    // Display dialog box to select attributes to match record against
    VisualiserComponent.prototype.openSearchSimilarDialog = function (entity) {
        var _this = this;
        var dialogRef = this.dialog.open(SearchSimilarDialog);
        dialogRef.componentInstance.entity = entity;
        // On Dialog close
        dialogRef.afterClosed().subscribe(function (result) {
            // Get back to results first page
            _this.paginator.pageIndex = 0;
            var selectedAttributes = dialogRef.componentInstance.selectedAttributes;
            // Set attributes filters based on selected values
            for (var _i = 0, _a = Object.keys(selectedAttributes); _i < _a.length; _i++) {
                var key = _a[_i];
                if (selectedAttributes[key]) {
                    _this._parent.attributeFilters[key]['enabled'] = true;
                    _this._parent.attributeFilters[key]['operator'] = 'eq';
                    _this._parent.attributeFilters[key]['value'] = entity[key];
                }
            }
            _this.dataSource = new VisualiserDataSource(_this);
        });
    };
    VisualiserComponent.prototype.unselectAll = function () {
        this.selectedRecords = {};
        this.numberRecordsSelected = 0;
    };
    VisualiserComponent.prototype.recordSelectionChange = function () {
        var _this = this;
        var keys = Object.keys(this.selectedRecords);
        this.numberRecordsSelected = keys.filter(function (key) { return _this.selectedRecords[key]; }).length;
    };
    VisualiserComponent.prototype.mergeRecords = function () {
        var _this = this;
        var keys = Object.keys(this.selectedRecords);
        var records = keys.filter(function (key) { return _this.selectedRecords[key]; }).map(function (key) { return key; });
        this.router.navigate(['/visualiser', this.collection, 'merge', { records: records }]);
        scroll(0, 0);
    };
    return VisualiserComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */]) === "function" && _a || Object)
], VisualiserComponent.prototype, "paginator", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSort */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSort */]) === "function" && _b || Object)
], VisualiserComponent.prototype, "sort", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckbox */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _c || Object)
], VisualiserComponent.prototype, "attributeCheckboxes", void 0);
VisualiserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'visualiser',
        template: __webpack_require__("../../../../../src/app/visualiser/visualiser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/visualiser/visualiser.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_8__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]; }))),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__services_connec_api_service__["a" /* ConnecApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_connec_api_service__["a" /* ConnecApiService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__services_mnoe_api_service__["a" /* MnoeApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_mnoe_api_service__["a" /* MnoeApiService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__connec_ui_connec_ui_component__["a" /* ConnecUiComponent */]) === "function" && _j || Object])
], VisualiserComponent);

var VisualiserDataSource = (function (_super) {
    __extends(VisualiserDataSource, _super);
    function VisualiserDataSource(visualiserComponent) {
        var _this = _super.call(this) || this;
        _this.visualiserComponent = visualiserComponent;
        _this.selectedAttributes = [];
        _this.displayedAttributes = [];
        _this.filter = '';
        _this.search = '';
        _this.pageSize = 100;
        _this.resultsLength = 0;
        _this.connecUiComponent = visualiserComponent._parent;
        _this.paginator = visualiserComponent.paginator;
        _this.sort = visualiserComponent.sort;
        _this.connecApiService = visualiserComponent.connecApiService;
        // Initialise list of columns
        for (var selectedAttribute in _this.visualiserComponent.selectedAttributes) {
            if (_this.visualiserComponent.selectedAttributes[selectedAttribute]) {
                _this.selectedAttributes.push(selectedAttribute);
                _this.displayedAttributes.push(selectedAttribute);
            }
        }
        _this.displayedAttributes.push('applications');
        _this.displayedAttributes.push('actions');
        return _this;
    }
    VisualiserDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.sort.sortChange,
            this.paginator.page,
            this.connecUiComponent.autoComplete.optionSelected,
            this.connecUiComponent.organizationSelector.change,
            this.connecUiComponent.filterButtonClick$,
            this.connecUiComponent.clearSearchButtonClick$,
            this.connecUiComponent.checkboxArchived.change,
            this.connecUiComponent.reloadDataTrigger
        ];
        // If the user changes the sort order, reset back to the first page
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // If user selects Archived records, reset back to the first page
        this.connecUiComponent.checkboxArchived.change.subscribe(function () { return _this.paginator.pageIndex = 0; });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */], displayDataChanges).startWith(null)
            .switchMap(function () {
            if (!_this.connecUiComponent.collectionCtrl.value) {
                return [];
            }
            _this.connecUiComponent.loading = true;
            // Apply attributes filters
            var filters = [];
            var keys = Object.keys(_this.connecUiComponent.attributeFilters);
            keys.forEach(function (key) {
                var attributeFilter = _this.connecUiComponent.attributeFilters[key];
                if (attributeFilter['enabled']) {
                    switch (attributeFilter['operator']) {
                        case 'match': {
                            if (attributeFilter['value'] && attributeFilter['value'].length > 0) {
                                filters.push(key + ' ' + attributeFilter['operator'] + ' /' + attributeFilter['value'] + '/');
                            }
                            break;
                        }
                        case 'empty': {
                            filters.push(key + ' eq null');
                            break;
                        }
                        case 'not_empty': {
                            filters.push(key + ' ne null');
                            break;
                        }
                        default: {
                            // Escape string with single quote
                            var value = attributeFilter['value'];
                            if (attributeFilter['type'] === 'string') {
                                value = '\'' + value + '\'';
                            }
                            filters.push(key + ' ' + attributeFilter['operator'] + ' ' + value);
                            break;
                        }
                    }
                }
            });
            _this.filter = filters.join(' AND ');
            // Apply applications filter
            var mappings = [];
            var selectedApplications = _this.connecUiComponent.selectedApplications;
            for (var _i = 0, _a = Object.keys(selectedApplications); _i < _a.length; _i++) {
                var selectedApplication = _a[_i];
                if (selectedApplications[selectedApplication] == 'include') {
                    mappings.push({ group_id: selectedApplication, include: true });
                }
                if (selectedApplications[selectedApplication] == 'exclude') {
                    mappings.push({ group_id: selectedApplication, exclude: true });
                }
            }
            return _this.connecApiService.fetchEntities(_this.connecUiComponent.collectionCtrl.value, _this.pageSize, _this.paginator.pageIndex, _this.sort.active, _this.sort.direction, _this.filter, _this.connecUiComponent.attributeValue, _this.connecUiComponent.checkboxArchived.checked, mappings);
        })
            .map(function (entityPage) {
            _this.resultsLength = entityPage.pagination['total'];
            _this.connecUiComponent.loading = false;
            return entityPage.entities;
        })
            .catch(function () {
            _this.connecUiComponent.loading = false;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of([]);
        });
    };
    VisualiserDataSource.prototype.disconnect = function () { };
    return VisualiserDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var SearchSimilarDialog = (function () {
    function SearchSimilarDialog() {
        this.selectedAttributes = {};
    }
    SearchSimilarDialog.prototype.isObject = function (key) {
        return typeof this.entity[key] === 'object';
    };
    return SearchSimilarDialog;
}());
SearchSimilarDialog = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'connec-search-similar-dialog',
        template: __webpack_require__("../../../../../src/app/visualiser/connec-search-similar-dialog.html"),
    })
], SearchSimilarDialog);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=visualiser.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
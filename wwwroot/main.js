(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/SizeVarType.component.ts":
/*!******************************************!*\
  !*** ./src/app/SizeVarType.component.ts ***!
  \******************************************/
/*! exports provided: SizeVarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeVarType", function() { return SizeVarType; });
var SizeVarType;
(function (SizeVarType) {
    SizeVarType[SizeVarType["Small"] = 0] = "Small";
    SizeVarType[SizeVarType["Medium"] = 1] = "Medium";
    SizeVarType[SizeVarType["Large"] = 2] = "Large";
})(SizeVarType || (SizeVarType = {}));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/index-page/index-page.component.ts");
/* harmony import */ var _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/category-detail/category-detail.component */ "./src/app/categories/category-detail/category-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_category_start_category_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/category-start/category-start.component */ "./src/app/categories/category-start/category-start.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_items_post_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-items/post-items.component */ "./src/app/post-items/post-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    // { path:'',component:HeaderComponent},
    //{ path:'',component:HomeComponent},
    { path: '', component: _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_1__["IndexPageComponent"], pathMatch: 'full' },
    { path: 'shopping-list', component: _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_0__["ShoppingListComponent"] },
    { path: 'category-detail/:name/:id', component: _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_2__["CategoryDetailComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'categories',
        // canActivateChild:[AuthGuard],
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"], children: [
            { path: '', component: _categories_category_start_category_start_component__WEBPACK_IMPORTED_MODULE_7__["CategoryStartComponent"], pathMatch: 'full' },
            { path: ':name', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"], children: [
                    { path: ':id', component: _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_2__["CategoryDetailComponent"] },
                ] },
        ] },
    { path: 'post-items', component: _post_items_post_items_component__WEBPACK_IMPORTED_MODULE_9__["PostItemsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header (pageSelected)=\"onNavigate($event)\"></app-header> -->\n<!-- <app-header ></app-header> -->\n<!-- <div class=\"container\">\n  <div class=\"row\"> -->\n\n      <nav class=\"navbar navbar-default\">\n<div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <div class=\"row\">\n           <div class=\"col-md-12\">\n    <app-home></app-home>\n  </div>\n</div>\n<div class=\"row\">\n  <!-- <div class=\"col-xs-12 col-sm-10 col-md-8  col-sm-offset-1 col-sm-offset-2\"> -->\n  <div class=\"col-md-12\">\n    <app-header></app-header>\n  </div>\n</div>\n\n</div>\n</div>\n\n     </nav>\n     <div class=\"row\">\n       <div class=\"col-md-12\">\n\n           <router-outlet></router-outlet>\n         <!-- <app-gowns *ngIf=\"loadedPage === 'gowns'\">j</app-gowns>\n         <app-jeans *ngIf=\"loadedPage === 'jeans'\"></app-jeans>\n         <app-pants *ngIf=\"loadedPage === 'pants'\"></app-pants>\n         <app-shirts *ngIf=\"loadedPage === 'shirts'\"></app-shirts>\n         <app-shoes *ngIf=\"loadedPage === 'shoes'\"></app-shoes>\n         <app-bags *ngIf=\"loadedPage === 'bags'\"></app-bags>\n         <app-skirts *ngIf=\"loadedPage === 'skirts'\"></app-skirts>\n         <app-shopping-list *ngIf=\"loadedPage === 'shopping-list'\"></app-shopping-list> -->\n       </div>\n\n\n\n\n     </div>\n  <!-- </div>\n\n\n</div> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        // title = 'WomenFashion';
        this.loadedPage = 'shopping-list';
    }
    AppComponent.prototype.onNavigate = function (page) {
        this.loadedPage = page;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _shopping_list_ShoppingList_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shopping-list/ShoppingList.service */ "./src/app/shopping-list/ShoppingList.service.ts");
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/index-page/index-page.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories/category-detail/category-detail.component */ "./src/app/categories/category-detail/category-detail.component.ts");
/* harmony import */ var _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/category-list/category-list.component */ "./src/app/categories/category-list/category-list.component.ts");
/* harmony import */ var _categories_category_list_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categories/category-list/category-item/category-item.component */ "./src/app/categories/category-list/category-item/category-item.component.ts");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categories/category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_category_start_category_start_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./categories/category-start/category-start.component */ "./src/app/categories/category-start/category-start.component.ts");
/* harmony import */ var _post_items_post_items_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./post-items/post-items.component */ "./src/app/post-items/post-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { GownsComponent } from './gowns/gowns.component';





// import { GownService } from './gowns/gown.service';










var AppModule = /** @class */ (function () {
    /**
     *
     */
    function AppModule(catService) {
        catService.getPreviousUrl();
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponent"],
                _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_14__["IndexPageComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesComponent"],
                _categories_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_16__["CategoryDetailComponent"],
                _categories_category_list_category_item_category_item_component__WEBPACK_IMPORTED_MODULE_18__["CategoryItemComponent"],
                _categories_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_17__["CategoryListComponent"],
                _categories_category_start_category_start_component__WEBPACK_IMPORTED_MODULE_22__["CategoryStartComponent"],
                _post_items_post_items_component__WEBPACK_IMPORTED_MODULE_23__["PostItemsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"].forRoot(),
            ],
            providers: [_shopping_list_ShoppingList_service__WEBPACK_IMPORTED_MODULE_13__["ShoppingListService"], _categories_category_service__WEBPACK_IMPORTED_MODULE_19__["CategoryService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_categories_category_service__WEBPACK_IMPORTED_MODULE_19__["CategoryService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = false;
        this.msgs = [];
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/categories/Category-type.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/categories/Category-type.component.ts ***!
  \*******************************************************/
/*! exports provided: CategoryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryType", function() { return CategoryType; });
var CategoryType;
(function (CategoryType) {
    CategoryType[CategoryType["Gowns"] = 0] = "Gowns";
    CategoryType[CategoryType["Shirts"] = 1] = "Shirts";
    CategoryType[CategoryType["Bags"] = 2] = "Bags";
    CategoryType[CategoryType["Shoes"] = 3] = "Shoes";
    CategoryType[CategoryType["Jeans"] = 4] = "Jeans";
    CategoryType[CategoryType["Skirts"] = 5] = "Skirts";
    CategoryType[CategoryType["Pants"] = 6] = "Pants";
})(CategoryType || (CategoryType = {}));


/***/ }),

/***/ "./src/app/categories/State.component.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/State.component.ts ***!
  \***********************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State;
(function (State) {
    State[State["New"] = 0] = "New";
    State[State["Unchanged"] = 1] = "Unchanged";
    State[State["Changed"] = 2] = "Changed";
    State[State["Removed"] = 3] = "Removed";
})(State || (State = {}));


/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\" *ngIf=\"!itemSelect\" > -->\n<div class=\"row\" >\n  <!-- <div class=\"col-md-12\"> -->\n      <!-- <div class=\"col-md-8\"> -->\n          <!-- <app-category-list [categories] = \"categories\"></app-category-list> -->\n          <app-category-list></app-category-list>\n        <!-- </div> -->\n\n        <!-- <div class=\"col-md-4 offset-4\"> -->\n          <!-- <app-category-detail\n          *ngIf=\"selectedItem; else infoText\"\n          [category]=\"selectedItem\"></app-category-detail>\n\n          <ng-template #infoText>\n              <p style=\"color: white;\">Please Select an item to view details</p>\n              <img src=\"../../assets/images/bag1.jpg\">\n            </ng-template> -->\n\n            <router-outlet></router-outlet>\n        <!-- </div> -->\n  <!-- </div> -->\n\n  <!-- <li role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/gowns\" >Gowns</a></li> -->\n</div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(catService, route) {
        this.catService = catService;
        this.route = route;
        this.itemSelect = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catService.itemSelected.subscribe(function (category) {
            _this.selectedItem = category;
        });
        //   this.category = {
        //     name:this.route.snapshot.params['name'],
        //   };
        //   this.paramsSubscription = this.route.params
        //   .subscribe(
        //     (params: Params) =>{
        //       this.category.name = params['name'];
        //       if(this.category.name === 'gowns'){
        //         this.categories = this.catService.getGowns();
        //         console.log("In gowns");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'shirts'){
        //         this.categories = this.catService.getShirts();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'bags'){
        //         this.categories = this.catService.getBags();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'shoes'){
        //         this.categories = this.catService.getShoes();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'jeans'){
        //         this.categories = this.catService.getJeans();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'skirts'){
        //         this.categories = this.catService.getSkirts();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else if(this.category.name === 'pants'){
        //         this.categories = this.catService.getPants();
        //         console.log("In shirts");
        //         console.log(this.categories);
        //       }
        //       else{
        //         this.categories = [];
        //       }
        //     }
        //   );
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CategoriesComponent.prototype, "itemSelect", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")],
            providers: [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3\">\r\n  <div class=\"col-xs-6\">\r\n    <img [src]=\"category._ImagePath\" alt=\"{{category._Name}}\"\r\n    class=\"img-responsive\" style=\"max-width: 300;\">\r\n  </div>\r\n\r\n  <div class=\"col-xs-6\">\r\n    <h1>{{category._Name}}</h1>\r\n    <h1>{{categoryService.selectedItem }} gfhjfh</h1>\r\n    <p>{{category._Description}}</p>\r\n    <p>{{category._Price}}</p>\r\n    <a (click)= \"onAddToShoppingList()\" routerLink= \"/shopping-list\" style=\"cursor: pointer;\">Add To Cart</a>&nbsp;&nbsp;\r\n    <a (click)=\"purchase()\" routerLink= \"/shopping-list\" style=\"cursor:pointer;\">Purchase</a>\r\n\r\n    <!-- [routerLink]=\"['shopping-list',category.name]\" -->\r\n    <!-- <button (click)='onAddToShoppingList()'>Add</button> -->\r\n  </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <div class=\"col-xs-12\">\r\n      <li class=\"list-group-item\"\r\n      *ngFor=\"let item of category.itemBought\">\r\n      {{item.name}} - {{item.amount}}\r\n    </li>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/categories/category-detail/category-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/category-detail/category-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category-list/category-list.component */ "./src/app/categories/category-list/category-list.component.ts");
/* harmony import */ var _Category_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Category-type.component */ "./src/app/categories/Category-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Category } from '../category.model';
// import { CategoryService } from '../category.service';
var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(categoryService, route, router, cateType) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.cateType = cateType;
        this.category = {};
    }
    /**
     * previousUrl: string;
    constructor(router: Router) {
      router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(e => {
        console.log('prev:', this.previousUrl);
        this.previousUrl = e.url;
      });
    }
     */
    CategoryDetailComponent.prototype.onAddToShoppingList = function () {
        this.categoryService.addItemsToShoppingList(this.category[0]);
        console.log('in shopping list:category[0]: ' + this.category[0]);
        this.categoryService.addItemCatToShoppingList(this.categories);
        console.log('In add to shopping list');
        console.log(this.categories);
    };
    CategoryDetailComponent.prototype.purchase = function () {
    };
    CategoryDetailComponent.prototype.ngOnChanges = function (simpleC) {
        //console.log(this.categoryService.setType(this.catType));
    };
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In detail');
        // var cateType = this.categoryService.getType(this.catType);
        //console.log(this.categoryService.selectedItem.catType);
        this.categoryService.selectedItemSubject.subscribe(function (type) { return console.log('Crap2', type); });
        var ad = this.route.parent.snapshot.params['name'];
        var axy = this.categoryService.getPreviousUrl();
        this.route.params
            .subscribe((function (params) {
            // this.prevRoute = this.route.parent.snapshot.params['name'];
            // console.log(this.prevRoute+"this.prevroute");
            // var us = this;
            var id2 = _this.categoryService.getPreviousUrl();
            // var id3 = id2.lastIndexOf('/');
            // var id4 = id2.slice(id3+1,id2.length-1);
            // var id5 = id4.charAt(0).toUpperCase();
            // var categoryType = id4.replace(id4.charAt(0),id5)+'s';
            //.charAt(0).toUpperCase();
            _this.id = +params['id'];
            _this.catName = params['name'];
            console.log(_this.id);
            /*use subject to change the category type, through a method which
            calls next*/
            //var categoryType = CategoryType[this.id];
            // this.category = this.categoryService.getBag(this.id);
            console.log('category type: ', _this.cateType.catType);
            //else if(categoryType === 'Bags'){
            _this.categoryService.selectedItemSubjectObservable.subscribe(function (type) {
                // if( type === CategoryType.Gowns){
                //   this.category = this.categoryService.getGown(this.id);
                // }
                if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Gowns]) {
                    _this.category = _this.categoryService.getGown(_this.id);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Shirts]) {
                    _this.category = _this.categoryService.getShirt(_this.id);
                    console.log("In shirts");
                    console.log(_this.category);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Bags]) {
                    _this.category = _this.categoryService.getBag(_this.id);
                    console.log("In shirts");
                    console.log(_this.category);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Shoes]) {
                    _this.category = _this.categoryService.getShoe(_this.id);
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Jeans]) {
                    _this.category = _this.categoryService.getJean(_this.id);
                    console.log("In shirts");
                    console.log(_this.category);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Skirts]) {
                    _this.category = _this.categoryService.getSkirt(_this.id);
                    console.log("In shirts");
                    console.log(_this.category);
                }
                else if (_this.catName === _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Pants]) {
                    _this.category = _this.categoryService.getPant(_this.id);
                    console.log("In shirts");
                    console.log(_this.category);
                }
                else {
                    _this.categories = [];
                }
            });
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CategoryDetailComponent.prototype, "catType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CategoryDetailComponent.prototype, "categories", void 0);
    CategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__(/*! ./category-detail.component.html */ "./src/app/categories/category-detail/category-detail.component.html"),
            styles: [__webpack_require__(/*! ./category-detail.component.css */ "./src/app/categories/category-detail/category-detail.component.css")],
            providers: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]],
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/categories/category-list/category-item/category-item.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/categories/category-list/category-item/category-item.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category-list/category-item/category-item.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/categories/category-list/category-item/category-item.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-xs-8 col-sm-4 col-md-3 col-lg-3\">\r\n  <a class=\"list-group-item clearfix\"\r\n   (click)=\"onGoToDetail(category)\"\r\n  >\r\n  <!-- (click)=\"onSelected()\" -->\r\n  <!-- domSanitizer.bypassSecurityTrustResourceUrl(category._ImagePath)\r\n  file:///\r\nC:/Angular2/WunmiProject/WomenFashionApi/wwwroot/images/ee963a6d-cf8d-4e30-8ebe-4299e92ed004.jpg\r\n../../../../../../../../../Users/User/Pictures/ankara3.jpg\"\r\n-->\r\n  <span class=\"pull-left\">\r\n\r\n    <img [src]='domSanitizer.bypassSecurityTrustResourceUrl(category._ImagePath)' alt=\"{{category._Name}}\"  class=\"img-responsive\"\r\n     style=\"height: 150px;width:150px; object-fit:cover;\">\r\n    </span>\r\n    <div class=\"pull-right;col-md-8\">\r\n      <h4 class=\"list-group-item-heading\">{{ category._Name}}</h4>\r\n      <p class=\"list-group-item-text\">{{ category._Description}}</p>\r\n      <p class=\"list-group-item-text\">{{ category._Price}}</p>\r\n    </div>\r\n  </a>\r\n</div>\r\n<img src=\"file:///C:/Angular2/WunmiProject/WomenFashionApi/wwwroot/images/BallGown_BlueDres1.jpg\">\r\n<!-- <app-category-detail [catType]=\"\"></app-category-detail> -->\r\n"

/***/ }),

/***/ "./src/app/categories/category-list/category-item/category-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/categories/category-list/category-item/category-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemComponent", function() { return CategoryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../category.model */ "./src/app/categories/category.model.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Category_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Category-type.component */ "./src/app/categories/Category-type.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CategoryService } from "../../category.service";
// import { CategorysComponent } from "../../categorys.component";
var CategoryItemComponent = /** @class */ (function () {
    function CategoryItemComponent(router, route, catService, domSanitizer) {
        this.router = router;
        this.route = route;
        this.catService = catService;
        this.domSanitizer = domSanitizer;
        this.itemSelect = true;
        this.itemSelected = true;
    }
    CategoryItemComponent.prototype.ngOnInit = function () {
        // this.category._ImagePath = this.category._ImagePath
        console.log("Category in category item ", this.category);
        console.log(this.catService);
        console.log(this.route);
        console.log('category item list: ' + this.category._ImagePath);
        this.catService.getBase64ImageFromURL(this.category._ImagePath);
    };
    CategoryItemComponent.prototype.onGoToDetail = function (yu) {
        this.catService.selectedItemSubject.next(yu.catType);
        this.catService.sample = 1;
        this.router.navigate(['category-detail', _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"][yu.catType], this.index]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"])
    ], CategoryItemComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CategoryItemComponent.prototype, "itemSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CategoryItemComponent.prototype, "index", void 0);
    CategoryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-item',
            template: __webpack_require__(/*! ./category-item.component.html */ "./src/app/categories/category-list/category-item/category-item.component.html"),
            styles: [__webpack_require__(/*! ./category-item.component.css */ "./src/app/categories/category-list/category-item/category-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], CategoryItemComponent);
    return CategoryItemComponent;
}());



/***/ }),

/***/ "./src/app/categories/category-list/category-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/categories/category-list/category-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: auto auto auto;\r\n      grid-template-columns: auto auto auto;\r\n  padding: 5px;\r\n}\r\n\r\n.grid-item{\r\n  border: 1px rgba(0, 0, 0, 0.8);\r\n  padding:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/categories/category-list/category-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/categories/category-list/category-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\r\n  <!-- <div class=\"grid-container\"> -->\r\n    <app-category-item *ngFor=\"let category of categories;let i=index;\"\r\n    [category]=\"category\" [index]=\"i\">\r\n    </app-category-item>\r\n  <!-- </div> -->\r\n<!-- </div> -->\r\n\r\n<!-- <div class=\"grid-container\">\r\n    <app-category-item *ngFor=\"let category of categories;let i=index;\"\r\n    [category]=\"category\" [index]=\"i\" class=\"grid-item\">\r\n    </app-category-item>\r\n  </div> -->\r\n"

/***/ }),

/***/ "./src/app/categories/category-list/category-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categories/category-list/category-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.model */ "./src/app/categories/category.model.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Category_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Category-type.component */ "./src/app/categories/Category-type.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(catService, route) {
        this.catService = catService;
        this.route = route;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.category = {
            name: this.route.snapshot.params['name'],
        };
        // this.catService.selectedItem = CategoryType.Shoes;
        console.log(this.catService.setType(this.catType));
        var re;
        var a = _Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Gowns;
        this.paramsSubscription = this.route.params
            .subscribe((function (params) {
            if (params['name']) {
                _this.category.name = params['name'];
                var catName = _this.category.name.replace(_this.category.name.charAt(0), _this.category.name.charAt(0).toUpperCase());
                _this.catService.GetCategory(catName).subscribe(function (res) {
                    _this.categories = res;
                    var myDb = [];
                    res.forEach(function (obj) {
                        console.log('obj.cattype: ' + obj._CategoryType);
                        var category = obj;
                        category = new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](category._Name, category._Description, category._Price, category._ImagePath, category._Size, category._Number, category._CategoryId, category._CategoryType);
                        myDb.push(category);
                        console.log("category details list is: " + category._ImagePath);
                    }),
                        _this.categories = res;
                    console.log('res: ' + _this.categories);
                });
                // if(this.category.name === 'gowns'){
                //  this.categories = this.catService.getGowns();
                //   this.catService.setType(CategoryType.Gowns);
                //   //this.catType = CategoryType.Gowns;
                //   console.log("In gowns");
                //   console.log(this.categories);
                // }
                if (_this.category.name === 'e') {
                    _this.categories = _this.catService.getGowns();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Gowns);
                    //this.catType = CategoryType.Gowns;
                    console.log("In gowns");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'shirts') {
                    _this.categories = _this.catService.getShirts();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Shirts);
                    // this.catService.selectedItem = CategoryType.Shirts;
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'bags') {
                    _this.categories = _this.catService.getBags();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Bags);
                    // this.catService.selectedItem = CategoryType.Bags;
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'shoes') {
                    _this.categories = _this.catService.getShoes();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Shoes);
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'jeans') {
                    _this.categories = _this.catService.getJeans();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Jeans);
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'skirts') {
                    _this.categories = _this.catService.getSkirts();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Skirts);
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else if (_this.category.name === 'pants') {
                    _this.categories = _this.catService.getPants();
                    _this.catService.setType(_Category_type_component__WEBPACK_IMPORTED_MODULE_4__["CategoryType"].Pants);
                    console.log("In shirts");
                    console.log(_this.categories);
                }
                else {
                    _this.categories = [];
                }
            }
        }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CategoryListComponent.prototype, "catType", void 0);
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/categories/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/categories/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());

/**
 *  if(this.category.name === 'gowns'){
        var catName = this.category.name.charAt(0).toUpperCase();
       this.categories = this.catService.getGowns();
        this.catService.setType(CategoryType.Gowns);
        //this.catType = CategoryType.Gowns;
        console.log("In gowns");
        console.log(this.categories);
      }
      else if(this.category.name === 'shirts'){
        this.categories = this.catService.getShirts();
        this.catService.setType(CategoryType.Shirts);

       // this.catService.selectedItem = CategoryType.Shirts;
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'bags'){
        this.categories = this.catService.getBags();
        this.catService.setType(CategoryType.Bags);
        // this.catService.selectedItem = CategoryType.Bags;
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'shoes'){
        this.categories = this.catService.getShoes();
        this.catService.setType(CategoryType.Shoes);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'jeans'){
        this.categories = this.catService.getJeans();
        this.catService.setType(CategoryType.Jeans);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'skirts'){
        this.categories = this.catService.getSkirts();
        this.catService.setType(CategoryType.Skirts);
        console.log("In shirts");
        console.log(this.categories);
      }
      else if(this.category.name === 'pants'){
        this.categories = this.catService.getPants();
        this.catService.setType(CategoryType.Pants);
        console.log("In shirts");
        console.log(this.categories);
      }
      else{
        this.categories = [];
      }
      }
 */


/***/ }),

/***/ "./src/app/categories/category-start/category-start.component.css":
/*!************************************************************************!*\
  !*** ./src/app/categories/category-start/category-start.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/category-start/category-start.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/categories/category-start/category-start.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  category-start works!\n</p>\n"

/***/ }),

/***/ "./src/app/categories/category-start/category-start.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/categories/category-start/category-start.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStartComponent", function() { return CategoryStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryStartComponent = /** @class */ (function () {
    function CategoryStartComponent() {
    }
    CategoryStartComponent.prototype.ngOnInit = function () {
    };
    CategoryStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-start',
            template: __webpack_require__(/*! ./category-start.component.html */ "./src/app/categories/category-start/category-start.component.html"),
            styles: [__webpack_require__(/*! ./category-start.component.css */ "./src/app/categories/category-start/category-start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryStartComponent);
    return CategoryStartComponent;
}());



/***/ }),

/***/ "./src/app/categories/category.model.ts":
/*!**********************************************!*\
  !*** ./src/app/categories/category.model.ts ***!
  \**********************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
// import { string } from "../string.component";
var Category = /** @class */ (function () {
    /**
     *
     */
    function Category(_Name, desc, _Price, imgPth, _Size, Number1, _CategoryId, _CategoryType) {
        this._Name = _Name;
        this._Description = desc;
        this._Price = _Price;
        this._ImagePath = imgPth;
        this._Size = _Size;
        this._CategoryType = _CategoryType;
        this._CategoryId = _CategoryId;
        this._Number = Number1;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/categories/category.service.ts":
/*!************************************************!*\
  !*** ./src/app/categories/category.service.ts ***!
  \************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.model */ "./src/app/categories/category.model.ts");
/* harmony import */ var _shopping_list_ShoppingList_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list/ShoppingList.service */ "./src/app/shopping-list/ShoppingList.service.ts");
/* harmony import */ var _Category_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category-type.component */ "./src/app/categories/Category-type.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SizeVarType.component */ "./src/app/SizeVarType.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CategoryService = /** @class */ (function () {
    function CategoryService(slService, router, http) {
        var _this = this;
        this.slService = slService;
        this.router = router;
        this.http = http;
        this.itemSelected = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = "";
        this.urlCategories = "https://localhost:5001/api/Category";
        this.urlCategory = "htpps://localhost:5001/api/Category/" + this.category;
        this.checkSelectedItem = _Category_type_component__WEBPACK_IMPORTED_MODULE_3__["CategoryType"].Gowns;
        this.selectedItemSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](_Category_type_component__WEBPACK_IMPORTED_MODULE_3__["CategoryType"].Gowns);
        this.selectedItemSubjectObservable = this.selectedItemSubject.asObservable();
        this.sample = 0;
        this.gowns = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Blue Ball Gown', 'A flowery designed one strand gown', 15000, '../../assets/images/BallGown_BlueDres1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Medium]], 1, 'pro1', 0),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Green Ball Gown', 'A green ornest silk one armed gown', 12000, '../../assets/images/BallGown_Green.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Large], 1, 'pro1', 0),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Red Ball Gown', 'A V-neck body-con, fish tail gown', 15000, '../../assets/images/BallGown_redDres3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 0),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Wedding Gown', 'Layered Wedding Dress', 45000, '../../assets/images/wedding_dress1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 0),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Fitted Wedding Gown', 'Fitted A Line Wedding Dress', 15000, '../../assets/images/wedding_dress4.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 0),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Silver Wedding Gown', 'Silver-Lined Wedding gown', 12000, '../../assets/images/wedding_dress3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 0),
        ];
        this.shirts = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Black Shirt', 'A fitted black poka-dot Shirt', 15000, '../../assets/images/FShirt.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 1),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Powder Blue Shirt', 'A short-sleeved powder-blue Shirt', 12000, '../../assets/images/FShirt3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 1),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Black Off-Shoulder Shirt', 'An off-shoulder, long-sleeved body-con Shirt', 15000, '../../assets/images/FShirt2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 1),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Cardigan', 'A black Cardigan', 45000, '../../assets/images/FShirtCardigan.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 1),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Cropped Shirt', 'A neck-arm strapped black cropped-top', 15000, '../../assets/images/FShirtCrop.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 1),
        ];
        this.jeans = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Blue Ripped Jeans', 'You-axon. fitted blue ripped', 5000, '../../assets/images/Jeans1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 4),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('High-Waist Jeans', 'A ripped High-Waist jeans in blue,white,black', 12000, '../../assets/images/Jeans2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 4),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Grey Jean', 'A grey, skinny, high-waist jeans', 15000, '../../assets/images/Jeans3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 4),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Faded Jeans', 'A blue, fitted, white faded jeans', 45000, '../../assets/images/Jeans4.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 4),
        ];
        this.pants = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Straight Nude Pants', 'Long Official Straight Nude Pants', 5000, '../../assets/images/FpantTrouser1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 6),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('High-Waist Jeans', 'A ripped High-Waist jeans in blue,white,black', 12000, '../../assets/images/FpantTrouser2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 6),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Grey Jean', 'A grey, skinny, high-waist jeans', 15000, '../../assets/images/FpantTrouser3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 6),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Faded Jeans', 'A blue, fitted, white faded jeans', 45000, '../../assets/images/FpantTrouser4.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 6),
        ];
        this.skirts = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Powder-Blue Skirt', 'A-Line Knee-length sky-blue skirt', 15000, '../../assets/images/Skirt_blue.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Carribean Skirt', 'A turquoise green, A-line, Carribean Skirt', 12000, '../../assets/images/FShirt3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Denim Skirt', 'A fitted, buttoned, Denim skirt', 15000, '../../assets/images/Skirt_Denim.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Pleated Skirt', 'A-Line,High-Waist, flower pleated skirt', 45000, '../../assets/images/Skirt_FlowerPleated.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Long Skirt', 'High-Waist, Lavender Brown, long skirt', 15000, '../../assets/images/Skirt_Long.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Peplum Skirt', 'A red,fitted,peplum skirt', 45000, '../../assets/images/Skirt_Peplum.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Short Skirt', 'A short,black, pleated skirt', 15000, '../../assets/images/Skirt_Pleated.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 5),
        ];
        this.bags = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Red and Black Bag', 'A leather bound,red and black bag', 5000, '../../assets/images/bag1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Brown Leather bag', 'A brown leather bag, with gold plated handle', 12000, '../../assets/images/bag2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Pink Bag', 'A pink, cute bag', 15000, '../../assets/images/bag3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Powder Blue Bag', 'A powder blue bag, with black puffs and additional long hands', 45000, '../../assets/images/bag4.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Nude Colored Bag', 'A leather bound, nude colored bag, with purse', 5000, '../../assets/images/bag6.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Purple Leather bag', 'A purple leather bag, with silver opening', 12000, '../../assets/images/bag5.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Vintage Light-Grey Bag', 'A vintage,light-grey bag, with character muffs', 15000, '../../assets/images/bag8.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Black Bag', 'A leather black bag, with silver handles', 45000, '../../assets/images/bag9.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 2),
        ];
        this.shoes = [
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Korean Flats', 'A pink and white, korean flats', 15000, '../../assets/images/Flats1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Black Flats', 'A black, leather, laced shoe', 12000, '../../assets/images/Flats2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Shiny Black Shoes', 'A shiny black shoe', 15000, '../../assets/images/Flats3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Milk-White Heels', 'A Milk-White stiletto heels', 45000, '../../assets/images/Heels1.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Red Heels', 'Red Stiletto Heels', 15000, '../../assets/images/Heels3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Nude Leather Heels', 'A Nude Leather block heels', 45000, '../../assets/images/Heels2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Black Shiny Heels', 'Black Shiny Stiletto Heels', 15000, '../../assets/images/Heels4.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('Blue Sneakers', 'A sky-blue,black horse coated sneakers', 5000, '../../assets/images/Sneakers3.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
            new _category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]('White Sneakers', 'A white,sneaker', 4000, '../../assets/images/Sneakers2.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_5__["SizeVarType"].Small], 1, 'pro1', 3),
        ];
        this.currentUrl = this.router.url;
        /* this.selectedItemSubject.subscribe(
          (value)=>{
            this.selectedItem = value;
          }
        ) */
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        });
    }
    CategoryService.prototype._serverError = function (err) {
        console.log('server error:', err); // debug
        if (err instanceof _angular_http__WEBPACK_IMPORTED_MODULE_9__["Response"]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err.json().error || 'backend server error');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err || 'backend server error');
    };
    CategoryService.prototype.GetCategories = function () {
        return this.http.get(this.urlCategories).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this._serverError));
    };
    CategoryService.prototype.GetCategory = function (category) {
        return this.http.get(this.urlCategories + "/" + category).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this._serverError));
    };
    CategoryService.prototype.GetCategoryById = function (category, id) {
        return this.http.get(this.urlCategories + "/" + category + "/" + id).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this._serverError));
    };
    CategoryService.prototype.PostCategory = function (category) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]('Content-Type: application/json');
        return this.http.post(this.urlCategories, JSON.stringify(category), { headers: headers,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(this._serverError));
    };
    CategoryService.prototype.getGowns = function () {
        console.log('gowns service');
        console.log(this.gowns);
        return this.gowns.slice();
    };
    CategoryService.prototype.getGown = function (index) {
        return this.gowns[index];
    };
    CategoryService.prototype.getCategory = function (index) {
    };
    CategoryService.prototype.getShirts = function () {
        console.log('shirt service');
        console.log(this.shirts);
        return this.shirts.slice();
    };
    CategoryService.prototype.getShirt = function (index) {
        return this.shirts[index];
    };
    CategoryService.prototype.getJeans = function () {
        return this.jeans.slice();
    };
    CategoryService.prototype.getJean = function (index) {
        return this.jeans[index];
    };
    CategoryService.prototype.getSkirts = function () {
        return this.skirts.slice();
    };
    CategoryService.prototype.getSkirt = function (index) {
        return this.skirts[index];
    };
    CategoryService.prototype.getBags = function () {
        return this.bags.slice();
    };
    CategoryService.prototype.getBag = function (index) {
        return this.bags[index];
    };
    CategoryService.prototype.getShoes = function () {
        return this.shoes.slice();
    };
    CategoryService.prototype.getShoe = function (index) {
        return this.shoes[index];
    };
    CategoryService.prototype.getPants = function () {
        return this.pants.slice();
    };
    CategoryService.prototype.getPant = function (index) {
        return this.pants[index];
    };
    CategoryService.prototype.addItemsToShoppingList = function (items) {
        this.slService.addItems(items);
        console.log("Adding items to cart", items);
    };
    CategoryService.prototype.addItemToList = function () {
    };
    CategoryService.prototype.addItemCatToShoppingList = function (items) {
        this.slService.addItemCategory(items);
        console.log('Adding category');
        console.log('items', items);
        console.log(this.slService.addItemCategory(items));
    };
    CategoryService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    CategoryService.prototype.setType = function (catType) {
        // if(catType = CategoryType.Gowns){
        //   return CategoryType[0];
        // }
        this.checkSelectedItem = catType;
        console.log("categorytype " + _Category_type_component__WEBPACK_IMPORTED_MODULE_3__["CategoryType"][0] + "+ cattype " + catType);
        this.selectedItemSubject.next(catType);
    };
    CategoryService.prototype.getImageUrl = function () {
    };
    CategoryService.prototype.getBase64Image = function (img) {
        // We create a HTML canvas object that will create a 2d image
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        // This will draw image
        ctx.drawImage(img, 0, 0);
        // Convert the drawn image to Data URL
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    CategoryService.prototype.getBase64ImageFromURL = function (url) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"].create(function (observer) {
            // create an image object
            var img = new Image();
            img.crossOrigin = 'Anonymous';
            img.src = url;
            if (!img.complete) {
                // This will call another method that will create image from url
                img.onload = function () {
                    observer.next(_this.getBase64Image(img));
                    observer.complete();
                };
                img.onerror = function (err) {
                    observer.error(err);
                };
            }
            else {
                observer.next(_this.getBase64Image(img));
                observer.complete();
            }
        });
    };
    CategoryService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shopping_list_ShoppingList_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingListService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginal{\r\n  margin-left: 30px;\r\n  font-size: large;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<nav class = \"navbar navbar-default\">\n\n</nav> -->\n    <div class=\"container-fluid\">\n      <!-- <ul class=\"nav navbar-nav\"> -->\n          <div class=\"nav nav-tabs\">\n            <ul class=\"nav col-md-12\">\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/gowns\" >Gowns</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/shirts\" >Shirts</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/jeans\" >Jeans</a></li>\n                <li class=\"marginal col-sm-3 col-md-2\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/pants\">Pant Trousers</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/shoes\" >Shoes</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/bags\">Bags</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories/skirts\">Skirts</a></li>\n                <li class=\"marginal col-sm-3 col-md-1\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/shopping-list\" >Orders</a></li>\n\n            </ul>\n        <!-- <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/categories\" >Categories</a></li> -->\n\n          </div>\n       </div>\n\n     <!--\n<nav class=\"navbar navbar-default\">\n<div class=\"navbar-header\">\n  <a href=\"#\" class=\"navbar-brand\">Women Fashion</a>\n</div>\n\n<div >\n  <ul class=\"nav navbar-nav\">\n    <li><a href=\"#\" (click)=\"onSelect('gowns')\">Gowns</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('shirts')\">Shirts</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('jeans')\">Jeans</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('pants')\">Pant Trousers</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('shoes')\">Shoes</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('bags')\">Bags</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('skirts')\">Skirts</a></li>\n    <li><a href=\"#\" (click)=\"onSelect('shopping-list')\">Shopping List</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav\" style=\"float:right\">\n    <li><input type=\"text\" class=\"form-control\" placeholder=\"Search\"></li>\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"Search()\">Search</button>\n    </li>\n  </ul>\n</div>\n\n  </nav> -->\n  <!-- <div class=\"row\">\n      <div class=\"col-md-5\">\n        <ul class=\"sidebar navbar-brand\">\n            <li><a href=\"#\">Shop by category</a></li>\n            <li><a href=\"#\">Shop By Brand</a></li>\n                </ul>\n      </div>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.pageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.onSelect = function (page) {
        this.pageSelected.emit(page);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.Search = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "pageSelected", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marginal{\r\n  margin-left: 50px;\r\n  font-size: large;\r\n}\r\n\r\n.rightFloat{\r\n  margin-left: 700px;\r\n }\r\n\r\n.background{\r\n   background-color: transparent;\r\n   outline-color: transparent;\r\n }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">-->\n<nav class=\"navbar background\"  >\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <span class=\"navbar-brand\">\n            <span routerLinkActive=\"active\" [routerLinkActiveOptions]= \"{exact:true}\">\n            <a routerLink=\"/\">Women Fashion</a>\n          </span>\n          </span>\n\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav\">\n          <li><a routerLink =\"/\">Home</a></li>\n          <li><a href=\"#\">About</a></li>\n          <li><a href=\"#\">Contact</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        </ul>\n      </div>\n\n  </div>\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" placeholder=\"Search Women Fashion...\">\n  <span class=\"input-group-btn\">\n    <button class=\"btn btn-default\" (click)=\"Search()\" type=\"button\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </button>\n  </span>\n</div>\n\n</nav>\n\n\n\n<!-- <div class=\"col-md-12 col-sm-3\">\n    <ul class=\"nav nav-tabs\">\n        <li  routerLinkActive=\"active\"\n        [routerLinkActiveOptions] =\"{exact:true}\">\n        <a routerLink = \"/\" >Women Fashion</a>\n      </li>\n   <!- <a class=\"navbar-brand\"></a> ->\n    <li class=\"rightFloat\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\"></li>\n    <li>\n      <button class=\"btn btn-primary\" (click)=\"Search()\">Search</button>\n    </li>\n    <!- <ul class=\"nav navbar-nav; pull-right\" style=\"float: right;\"> ->\n    <li ><a routerLink=\"/login\">Login</a></li>\n      <!- <li ><a   routerLink=\"/registration\">Register</a></li> -->\n    <!-- </ul> ->\n  </ul>\n\n</div> -->\n<!-- <div class=\"col-md-12\">\n    <!- <ul class=\"nav navbar-nav\"> ->\n        <ul class=\"nav nav-tabs\">\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/gowns\" >Gowns</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/shirts\" >Shirts</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/jeans\" >Jeans</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/pants\">Pant Trousers</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/shoes\" >Shoes</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/bags\">Bags</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/skirts\">Skirts</a></li>\n      <li class=\"marginal\" role=\"presentation\" routerLinkActive=\"active\"><a routerLink = \"/shopping-list\" >Shopping List</a></li>\n\n\n      </ul>\n     </div>\n -->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isCollapsed = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.Search = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/index-page/index-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/index-page/index-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/index-page/index-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/index-page/index-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div><a (click)=\"postCategory()\">Add Item</a></div>\n<carousel>\n  <slide>\n      <img src=\"../../assets/images/Heels3.jpg\" alt=\"Los Angeles\" height=\"100%\" class=\"d-block w-100\">\n      <img src=\"../../assets/images/blueshoe.jpg\" alt=\"Los Angeles\" height=\"100%\" class=\"d-block w-100\">\n      <img src=\"../../assets/images/blackpointershoe.jpg\" alt=\"Los Angeles\" height=\"100%\" class=\"d-block w-100\">\n      <img src=\"../../assets/images/heelsnude.jpg\" alt=\"Los Angeles\" height=\"100%\" class=\"d-block w-100\">\n      <img src=\"../../assets/images/heelsred.jpg\" alt=\"Los Angeles\" height=\"100%\" class=\"d-block w-100\">\n\n  </slide>\n  <slide>\n      <img src=\"../../assets/images/BallGown_redDress.jpg\" alt=\"Chicago\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/lighbluegown.jpg\" alt=\"Chicago\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/blackGown.jpg\" alt=\"Chicago\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/coral_pink_gown.jpg\" alt=\"Chicago\"  class=\"d-block w-100\">\n\n  </slide>\n  <slide>\n      <img src=\"../../assets/images/FShirtCardigan.jpg\" alt=\"New york\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/FShirtCardigan.jpg\" alt=\"New york\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/FShirtCardigan.jpg\" alt=\"New york\"  class=\"d-block w-100\">\n      <img src=\"../../assets/images/FShirtCardigan.jpg\" alt=\"New york\"  class=\"d-block w-100\">\n  </slide>\n</carousel>\n\n  <!-- <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!- Indicators ->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!- Wrapper for slides ->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"../../assets/images/Heels3.jpg\" alt=\"Los Angeles\" height=\"50\" class=\"d-block w-100 h-50\">\n      </div>\n\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/images/BallGown_redDress.jpg\" alt=\"Chicago\"  class=\"d-block w-100\">\n      </div>\n\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/images/FShirtCardigan.jpg\" alt=\"New york\"  class=\"d-block w-100\">\n      </div>\n    </div>\n\n    <!- Left and right controls ->\n    <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    <!-<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a> ->\n  </div> -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/index-page/index-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index-page/index-page.component.ts ***!
  \****************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent(router) {
        this.router = router;
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent.prototype.postCategory = function () {
        this.router.navigate(['post-items']);
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.css */ "./src/app/index-page/index-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 100%;\r\nalign-content: center;\r\n/* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */\r\n background-image: url('background.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\n}\n.card{\r\nheight: 370px;\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\n.social_icon span{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #FFC312;\r\n}\n.social_icon span:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n.social_icon{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\n.input-group-prepend span{\r\nwidth: 100px;\r\nbackground-color: #FFC312;\r\ncolor: black;\r\nborder:0 !important;\r\n}\n.larger{\r\n    height:30px;\r\n}\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\n.remember{\r\ncolor: white;\r\n}\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\n.login_btn{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\n.login_btn:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card login-panel\">\n      <div class=\"card-header\">\n          <div class=\"ui-g-12\">\n              <img src=\"../../assets/images/logoMoi.PNG\" style=\"width:100px\">\n          </div>\n        <h3>Sign In</h3>\n        <!-- <div class=\"d-flex justify-content-end social_icon\">\n\t\t\t\t\t<span><i class=\"fab fa-facebook-square\"></i></span>\n\t\t\t\t\t<span><i class=\"fab fa-google-plus-square\"></i></span>\n\t\t\t\t\t<span><i class=\"fab fa-fac\"></i></span>\n        </div> -->\n\n      </div>\n      <div class=\"card-body\">\n        <form>\n\n          <div class=\" form-group align-items-center\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text \"><i class=\"fa fa-user\"></i>\n              </span>&nbsp;&nbsp;\n\n              <input type=\"text\" class=\"form-inline\" placeholder=\"Enter your username\">\n            </div>\n\n          </div>\n\n          <div class=\" form-group align-items-center\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>&nbsp;&nbsp;\n              <input type=\"password\" class=\"form-inline\" placeholder=\"Enter your password\">\n            </div>\n\n            <!-- <div class=\"ui-g-12\">\n                <span class=\"md-inputfield\">\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                    <label>Password</label>\n                </span>\n            </div> -->\n          </div>\n          <div class=\"row align-items-center remember\">\n              <input type=\"checkbox\">Remember Me\n            </div>\n\n          <div class=\"form-group\">\n            <button class=\"btn float-right login_btn\" (click)=\"onLogin()\">Login</button>\n              <!-- <input type=\"submit\" value=\"Login\" class=\"btn float-right login_btn\"> -->\n              <span  *ngIf='loggedIn'>\n                <div class=\"alert  alert-success\">Logged In Successfully,<br>\n                      Click any category to begin\n                </div>\n              </span>\n            </div>\n\n        </form>\n      </div>\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center remember\">\n          Dont have an account?<a routerLink=\"/registration\"><span class=\"glyphicon glyphicon-registration-mark\"></span>Register</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.loggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        this.authService.login();
        this.loggedIn = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/post-items/post-items.component.css":
/*!*****************************************************!*\
  !*** ./src/app/post-items/post-items.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 100%;\r\nalign-content: center;\r\n/* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */\r\n background-image: url('background.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\n}\nlabel{\r\n    color:white;\r\n}\n.card{\r\nheight: 370px;\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\n.social_icon span{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #FFC312;\r\n}\n.social_icon span:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n.social_icon{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\n.input-group-prepend span{\r\nwidth: 100px;\r\nbackground-color: #FFC312;\r\ncolor: black;\r\nborder:0 !important;\r\n}\n.larger{\r\n    height:30px;\r\n}\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\n/*\r\n.full-width{\r\n    width:100%;\r\n}\r\ninput{\r\n    margin-left: 10px;\r\n}*/\n.remember{\r\ncolor: white;\r\n}\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\n.login_btn{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\nform input[type=submit].login_btn:hover{\r\ncolor: black;\r\nbackground-color: #ccc;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}\n* {\r\n    box-sizing: border-box;\r\n  }\nform {\r\n    width: 320px;\r\n    /* float: left; */\r\n    margin: 20px;\r\n  }\nform > div {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\nform input, form textarea {\r\n    width: 100%;\r\n    /* border: 2px solid gray; */\r\n    background: none;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    padding: 8px 12px;\r\n    outline: 0;\r\n  }\nform input:valid, form textarea:valid {\r\n    background: white;\r\n  }\nform input[type = submit].login_btn{\r\n    color: black;\r\n    background-color: #FFC312;\r\n    width: 100px;\r\n   }\nform input:focus, form textarea:focus {\r\n    border-color: #1d06f0;\r\n    /* 1e0fe7 */\r\n  }\nform input:focus + label, form textarea:focus + label {\r\n    background: #1d06f0;\r\n    color: white;\r\n    font-size: 90%;\r\n    padding: 1px 6px;\r\n    z-index: 2;\r\n    text-transform: capitalize;\r\n  }\nform label {\r\n    transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right 0.2s, left 0.2s;\r\n    position: absolute;\r\n    color: white;\r\n    padding: 7px 6px;\r\n  }\nform textarea {\r\n    display: block;\r\n    resize: vertical;\r\n  }\nform.go-bottom label {\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n  }\nform.go-bottom input:focus, form.go-bottom textarea:focus {\r\n    padding: 4px 6px 20px 6px;\r\n  }\nform.go-bottom input:focus + label, form.go-bottom textarea:focus + label {\r\n    top: 100%;\r\n    margin-top: -29px;\r\n  }\nform.go-right label {\r\n    top: 2px;\r\n    right: 100%;\r\n    width: 100%;\r\n    margin-right: -100%;\r\n    bottom: 2px;\r\n  }\nform.go-right input:focus + label, form.go-right textarea:focus + label {\r\n    right: 0;\r\n    margin-right: 0;\r\n    width: 40%;\r\n    padding-top: 5px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/post-items/post-items.component.html":
/*!******************************************************!*\
  !*** ./src/app/post-items/post-items.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"d-flex justify-content-center h-100\">\n      <div class=\" login-panel\">\n        <div class=\"card-header\">\n            <div class=\"ui-g-12\">\n                <img src=\"../../assets/images/logoMoi.PNG\" style=\"width:100px\">\n            </div>\n          <h3>Add Category</h3>\n          <!-- <div class=\"d-flex justify-content-end social_icon\">\n                      <span><i class=\"fab fa-facebook-square\"></i></span>\n                      <span><i class=\"fab fa-google-plus-square\"></i></span>\n                      <span><i class=\"fab fa-fac\"></i></span>\n          </div> -->\n\n        </div>\n\n        <div class=\"card-body\">\n          <form class=\"go-bottom\">\n            <div class=\" align-items-center\">\n               <input id=\"categoryId\" name=\"categoryId\" type=\"text\" [(ngModel)]=\"CategoryId\" class=\"form-group\" [ngModelOptions]=\"{standalone:true}\" [ngModelOptions]=\"{standalone:true}\" required>\n        <label for=\"categoryId\" >Category Id</label>\n            </div>\n            <div class=\" form-group align-items-center\">\n                    <input type=\"text\" class=\"form-group\" [(ngModel)]=\"Name\" [ngModelOptions]=\"{standalone:true}\" [ngModelOptions]=\"{standalone:true}\" required>\n                  <label>Name</label>\n\n            </div>\n\n            <div class=\" form-group align-items-center\">\n                <input type=\"text\" class=\"form-group\"  [(ngModel)]=\"Description\" [ngModelOptions]=\"{standalone:true}\" [ngModelOptions]=\"{standalone:true}\" required>\n                <label>Description</label>\n          </div>\n\n          <div class=\" form-group align-items-center\">\n              <input type=\"file\" class=\"form-group\" (change)= \"onFileChange($event)\" [(ngModel)]=\"ImagePath\"[ngModelOptions]=\"{standalone:true}\" required>\n              <label>Image</label>\n\n        </div>\n\n        <div class=\" form-group align-items-center\">\n            <input type=\"text\" class=\"form-group\"  [(ngModel)]=\"Size\" [ngModelOptions]=\"{standalone:true}\" required>\n            <label>Size</label>\n\n      </div>\n      <div class=\" form-group align-items-center\">\n          <input type=\"text\" class=\"form-group\"  [(ngModel)]=\"Price\" [ngModelOptions]=\"{standalone:true}\" required>\n          <label>Price</label>\n\n    </div>\n\n      <div class=\" form-group align-items-center\">\n          <input type=\"text\" class=\"form-group\" [(ngModel)]=\"CategoryType\" [ngModelOptions]=\"{standalone:true}\" required>\n          <label>Category Type</label>\n    </div>\n\n    <div class=\" form-group align-items-center\">\n        <input type=\"text\" class=\"form-group\" [(ngModel)]=\"Number\" [ngModelOptions]=\"{standalone:true}\" required>\n        <label>Number</label>\n      </div>\n\n            <div class=\"form-inline ui-g-6\">\n                <input type=\"submit\" value=\"Save\" (click)=\"SaveCategory()\" class=\"btn float-right login_btn\">\n              </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/post-items/post-items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/post-items/post-items.component.ts ***!
  \****************************************************/
/*! exports provided: PostItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemsComponent", function() { return PostItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../categories/category.model */ "./src/app/categories/category.model.ts");
/* harmony import */ var _categories_State_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories/State.component */ "./src/app/categories/State.component.ts");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories/category.service */ "./src/app/categories/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostItemsComponent = /** @class */ (function () {
    function PostItemsComponent(catService) {
        this.catService = catService;
        this.selectedFile = null;
        this.categories = [];
        // this.createForm();private fb:FormBuilder
    }
    PostItemsComponent.prototype.ngOnInit = function () {
    };
    // createForm(){
    //   this.form = this.fb.group({
    //     name:['',Validators.required],
    //     picture:null
    //   });
    // }
    PostItemsComponent.prototype.SaveCategory = function () {
        var category;
        category = new _categories_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"](this.Name, this.Description, this.Price, this.ImagePath, this.Size, this.Number, this.CategoryId, this.CategoryType);
        category._CategoryType = this.CategoryType;
        category.state = _categories_State_component__WEBPACK_IMPORTED_MODULE_2__["State"].New;
        this.categories.push(category);
        this.currentCategory = category;
        this.catService.PostCategory(category).subscribe(function (res) { return console.log("res = ", res); }, function (err) { return console.log(err); });
        //catgeory = new Category(this.Name,this.Description,this.Price,this.ImagePath,)
    };
    PostItemsComponent.prototype.onFileChange = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        this.ImagePath = this.selectedFile.name;
        //let reader = new FileReader();
        // if(event.target.files && event.target.files.length > 0){
        //   let file = event.target.files[0];
        //   reader.readAsDataURL(file);
        //   reader.onload = () => {
        //     this.form.get('picture').setValue({
        //       filename: file.name,
        //       filetype: file.type,
        //       value: reader.result.split(',')[1]
        //     })
        //   }
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PostItemsComponent.prototype, "fileInput", void 0);
    PostItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-items',
            template: __webpack_require__(/*! ./post-items.component.html */ "./src/app/post-items/post-items.component.html"),
            styles: [__webpack_require__(/*! ./post-items.component.css */ "./src/app/post-items/post-items.component.css")]
        }),
        __metadata("design:paramtypes", [_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], PostItemsComponent);
    return PostItemsComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 100%;\r\nalign-content: center;\r\n/* background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg'); */\r\n background-image: url('background.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\n}\nlabel{\r\n    color:white;\r\n}\n.card{\r\nheight: 370px;\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.5) !important;\r\n}\n.social_icon span{\r\nfont-size: 60px;\r\nmargin-left: 10px;\r\ncolor: #FFC312;\r\n}\n.social_icon span:hover{\r\ncolor: white;\r\ncursor: pointer;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n.social_icon{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\n.input-group-prepend span{\r\nwidth: 100px;\r\nbackground-color: #FFC312;\r\ncolor: black;\r\nborder:0 !important;\r\n}\n.larger{\r\n    height:30px;\r\n}\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\n/*\r\n.full-width{\r\n    width:100%;\r\n}\r\ninput{\r\n    margin-left: 10px;\r\n}*/\n.remember{\r\ncolor: white;\r\n}\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\n.login_btn{\r\ncolor: black;\r\nbackground-color: #FFC312;\r\nwidth: 100px;\r\n}\nform input[type=submit].login_btn:hover{\r\ncolor: black;\r\nbackground-color: #ccc;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}\n* {\r\n    box-sizing: border-box;\r\n  }\nform {\r\n    width: 320px;\r\n    /* float: left; */\r\n    margin: 20px;\r\n  }\nform > div {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\nform input, form textarea {\r\n    width: 100%;\r\n    /* border: 2px solid gray; */\r\n    background: none;\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    padding: 8px 12px;\r\n    outline: 0;\r\n  }\nform input:valid, form textarea:valid {\r\n    background: white;\r\n  }\nform input[type = submit].login_btn{\r\n    color: black;\r\n    background-color: #FFC312;\r\n    width: 100px;\r\n   }\nform input:focus, form textarea:focus {\r\n    border-color: #1d06f0;\r\n    /* 1e0fe7 */\r\n  }\nform input:focus + label, form textarea:focus + label {\r\n    background: #1d06f0;\r\n    color: white;\r\n    font-size: 90%;\r\n    padding: 1px 6px;\r\n    z-index: 2;\r\n    text-transform: capitalize;\r\n  }\nform label {\r\n    transition: background 0.2s, color 0.2s, top 0.2s, bottom 0.2s, right 0.2s, left 0.2s;\r\n    position: absolute;\r\n    color: white;\r\n    padding: 7px 6px;\r\n  }\nform textarea {\r\n    display: block;\r\n    resize: vertical;\r\n  }\nform.go-bottom label {\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n  }\nform.go-bottom input:focus, form.go-bottom textarea:focus {\r\n    padding: 4px 6px 20px 6px;\r\n  }\nform.go-bottom input:focus + label, form.go-bottom textarea:focus + label {\r\n    top: 100%;\r\n    margin-top: -29px;\r\n  }\nform.go-right label {\r\n    top: 2px;\r\n    right: 100%;\r\n    width: 100%;\r\n    margin-right: -100%;\r\n    bottom: 2px;\r\n  }\nform.go-right input:focus + label, form.go-right textarea:focus + label {\r\n    right: 0;\r\n    margin-right: 0;\r\n    width: 40%;\r\n    padding-top: 5px;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <form class=\"form-group\">\n        <div class=\"header\">\n            <p ><b>Registration Page</b></p>\n          </div>\n          <div class=\"ui-g-12\">\n            <span class=\"ui-accordion md-inputfiled\" style=\"padding-top:0px; padding-bottom: 30px;\">\n                <label for=\"fName\">Last Name:</label>\n                <input type=\"text\" id = \"fName\" class=\"full-width c-input\" placeholder=\"Enter your Last Name\" pInputext><br/>\n            </span>\n\n            <label for=\"lName\">First Name:</label>\n            <input type=\"text\" id = \"lName\"placeholder=\"Enter your First Name\"><br/>\n            <label for=\"pNumber\">Phone Number:</label>\n            <input type=\"text\" id = \"pNumber\"placeholder=\"Enter your Phone Number\"><br/>\n            <label for=\"email\">Email:</label>\n            <input type=\"text\" id = \"email\"placeholder=\"Enter your Email\"><br/>\n            <label for=\"address\">Address:</label>\n            <input type=\"text\" id = \"address\"placeholder=\"Address\">\n\n\n          </div>\n    </form>\n</div>\n<div class=\"ui-g-12\">\n    <span class=\"ui-g-12 md-inputfield\" style=\"padding-top: 0px;padding-bottom: 30px;\">\n<input type=\"text\" class=\"full-width c-input\" placeholder=\"e.g. John Doe\" id=\"txtDisplayName\"  pInputText>\n<label>Display Name:</label>\n</span>\n</div> -->\n<div class=\"container\">\n       \n        <div class=\"d-flex justify-content-center h-100\">\n          <div class=\" login-panel\">\n            <div class=\"card-header\">\n                <div class=\"ui-g-12\">\n                    <img src=\"../../assets/images/logoMoi.PNG\" style=\"width:100px\">\n                </div>\n              <h3>Register</h3>\n              <!-- <div class=\"d-flex justify-content-end social_icon\">\n                          <span><i class=\"fab fa-facebook-square\"></i></span>\n                          <span><i class=\"fab fa-google-plus-square\"></i></span>\n                          <span><i class=\"fab fa-fac\"></i></span>\n              </div> -->\n              \n            </div>\n          \n            <div class=\"card-body\">\n              <form class=\"go-bottom\">\n                <div class=\" align-items-center\">\n                        <input id=\"fName\" name=\"fName\" type=\"text\" class=\"form-group\" required>\n                   <label for=\"fName\" >First Name</label>\n                </div>\n\n                <div class=\" form-group align-items-center\">\n                        <input type=\"text\" class=\"form-group\" required>\n                   \n                      <label>Middle Name</label>\n                    \n                </div>\n\n                <div class=\" form-group align-items-center\">\n                        <input type=\"text\" class=\"form-group\" required>\n                        <label>Last Name</label>\n                </div>\n\n                <div class=\" form-group align-items-center\">\n                        <input type=\"text\" class=\"form-group\" required>\n                        <label>Email</label>\n                  \n                </div>\n\n                <div class=\" form-group align-items-center\">\n                        <input type=\"text\" class=\"form-group\" required>\n                        <label>Phone Number</label>\n                       \n                </div>\n\n                <div class=\" form-group align-items-center\">\n                        <input type=\"text\" class=\"form-group\" required>\n                        <label>Address</label>\n                </div>\n                \n                <div class=\" form-group align-items-center\">\n                    <input type=\"password\" class=\"form-group\" required>\n                    <label>Password</label>\n                  <!-- <div class=\"ui-g-12\">\n                      <span class=\"md-inputfield\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n                          <label>Password</label>\n                      </span>\n                  </div> -->\n                </div>\n                <div class=\" form-group align-items-center\">\n                        <input type=\"password\" class=\"form-group\" required>\n                         <label>Confirm Password</label>\n                      </div>\n\n                \n                <div class=\"row align-items-center remember ui-g-6\">\n                    <input type=\"checkbox\">Remember Me\n                  </div>\n                <div class=\"form-inline ui-g-6\">\n                    <input type=\"submit\" value=\"Register\" class=\"btn float-right login_btn\">\n                  </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/shared/Item.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/Item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/shopping-list/ShoppingList.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/ShoppingList.service.ts ***!
  \*******************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_Item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Item.model */ "./src/app/shared/Item.model.ts");
/* harmony import */ var _categories_category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../categories/category.model */ "./src/app/categories/category.model.ts");
/* harmony import */ var _SizeVarType_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SizeVarType.component */ "./src/app/SizeVarType.component.ts");




var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.itemsChanged = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemCatChanged = new _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = [
            new _shared_Item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]('Short Gown', 3),
            new _shared_Item_model__WEBPACK_IMPORTED_MODULE_1__["Item"]('Trouser', 2),
        ];
        this.itemCat = [
            new _categories_category_model__WEBPACK_IMPORTED_MODULE_2__["Category"]('Test', 'A test', 200, '../../assets/images/bag5.jpg', _SizeVarType_component__WEBPACK_IMPORTED_MODULE_3__["SizeVarType"][_SizeVarType_component__WEBPACK_IMPORTED_MODULE_3__["SizeVarType"].Small], 1, 'pro1', 3)
        ];
    }
    ShoppingListService.prototype.getItems = function () {
        console.log('getting items');
        return this.items.slice();
    };
    ShoppingListService.prototype.getItemCat = function () {
        console.log('getting items category');
        return this.itemCat.slice();
    };
    ShoppingListService.prototype.addItem = function (item) {
        this.items.push(item);
        this.itemsChanged.emit(this.items.slice());
    };
    ShoppingListService.prototype.addItems = function (items) {
        (_a = this.items).push.apply(_a, items);
        this.itemsChanged.emit(this.items.slice());
        var _a;
    };
    ShoppingListService.prototype.addItemCat = function (item) {
        this.itemCat.push(item);
        this.itemsChanged.emit(this.items.slice());
    };
    ShoppingListService.prototype.addItemCategory = function (items) {
        (_a = this.itemCat).push.apply(_a, items);
        console.log('push', this.itemCat);
        this.itemCatChanged.emit(this.itemCat.slice());
        var _a;
    };
    return ShoppingListService;
}());



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <!-- <app-shopping-edit\n        (ingredientAdded)=\"onIngredientAdded($event)\"></app-shopping-edit> -->\n\n        <hr>\n       <ul class=\"list-group\">\n         <a class=\"list-group-item\" style=\"cursor: pointer\"\n         *ngFor=\"let item of items\">\n        {{ item.name}}({{item.amount}})\n        </a>\n       </ul>\n  </div>\n"

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ShoppingList_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShoppingList.service */ "./src/app/shopping-list/ShoppingList.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(slService) {
        this.slService = slService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.slService.getItems();
        this.slService.itemsChanged
            .subscribe(function (items) {
            _this.items = items;
        });
        this.itemsCat = this.slService.getItemCat();
        this.slService.itemCatChanged
            .subscribe(function (itemsCat) {
            _this.itemsCat = itemsCat;
        });
    };
    ShoppingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ShoppingList_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingListService"]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular2\WunmiProject\WomenFashionNew\WomenFashion\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
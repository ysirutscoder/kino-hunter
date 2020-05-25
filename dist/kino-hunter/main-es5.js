(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/movie-details/movie-details.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/movie-details/movie-details.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details__outer\">\n    <img [src]=\"getBgImgUrl()\" [alt]=\"movie.title\" class=\"details__background\">\n    <div class=\"details__inner\"></div>\n    <div class=\"details__content\">\n        <div class=\"details__text\">\n          <h3 class=\"details__title\">{{movie.title}}</h3>\n          <h6 class=\"details__release-date\"><span>Дата выхода: </span>{{movie.release_date.slice(0,4)}}</h6>\n          <p class=\"details__overview\" *ngIf=\"!expanded\">{{movie.overview.split(' ').slice(0,15).join(' ')}}...<span\n              *ngIf=\"!expanded\" (click)=\"expanded=!expanded\">Читать дальше</span></p>\n          <p class=\"details__overview\" *ngIf=\"expanded\">{{movie.overview}}<span *ngIf=\"expanded\"\n              (click)=\"expanded=!expanded\">Скрыть</span></p>\n        </div>\n        <div class=\"details__player\">\n            <img [src]=\"getImgUrl()\" [alt]=\"movie.title\">\n            <i (click)=\"playMovie()\" class=\"large material-icons \">play_circle_filled</i>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/movies-list/movies-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/movies-list/movies-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"movies-list__outer\">\n    <div class=\"movies-list__shadow\"></div>\n    <div class=\"movies-list\">\n      <div *ngFor=\"let movie of movies\">\n        <img [routerLink]=\"[movie.id]\" [src]=\"getImgUrl(movie.poster_path)\" [alt]=\"movie.original_title\"\n          class=\"movie-poster\">\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/site-layout/site-layout.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-sidenav></app-sidenav> -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"sidenav sidenav-fixed a-sidenav\">\r\n    <h4>KinoHunter</h4>\r\n    <li class=\"bold active\"><a routerLink=\"/list\" class=\"waves-effect waves-orange\">List</a></li>\r\n    <li class=\"bold\"><a routerLink=\"/{{film_id}}\" class=\"waves-effect waves-orange\">Movies</a></li>\r\n\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/watch-movie/watch-movie.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/watch-movie/watch-movie.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n    <i class=\"material-icons player__back-btn\" [routerLink]=\"['/list']\" >keyboard_backspace</i>\n    <img [src]=\"imgPath\" alt=\"movie.title\">\n    <i (click)=\"play()\" class=\"large material-icons player__play\">play_circle_filled</i>\n    <div id=\"yohoho\" [attr.data-title]=\"searchIdentifier\" ></div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/movie-details/movie-details.component */ "./src/app/main/movie-details/movie-details.component.ts");
/* harmony import */ var _main_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/movies-list/movies-list.component */ "./src/app/main/movies-list/movies-list.component.ts");
/* harmony import */ var _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-movie/watch-movie.component */ "./src/app/watch-movie/watch-movie.component.ts");







var routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    {
        path: '', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_1__["SiteLayoutComponent"], children: [
            {
                path: 'list', component: _main_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"], children: [
                    { path: ':id', component: _main_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"] },
                ]
            },
            { path: 'watch/:id', component: _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_6__["WatchMovieComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/movies.service */ "./src/app/shared/movies.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kino-hunter';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_shared_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _main_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/movies-list/movies-list.component */ "./src/app/main/movies-list/movies-list.component.ts");
/* harmony import */ var _main_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/movie-details/movie-details.component */ "./src/app/main/movie-details/movie-details.component.ts");
/* harmony import */ var _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./watch-movie/watch-movie.component */ "./src/app/watch-movie/watch-movie.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_4__["SiteLayoutComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
                _main_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_8__["MoviesListComponent"],
                _main_movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
                _watch_movie_watch_movie_component__WEBPACK_IMPORTED_MODULE_10__["WatchMovieComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/movie-details/movie-details.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/movie-details/movie-details.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  font-family: \"Nanum Gothic\", sans-serif;\n}\n.details__outer {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.details__title {\n  font-size: 3em;\n}\n.details__background {\n  width: 100%;\n  height: auto;\n}\n.details__inner {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.details__text {\n  color: white;\n  max-width: 43%;\n  font-size: 1.2em;\n  max-height: 19em;\n}\n.details__text span {\n  color: #c7c7c7;\n  margin-left: 10px;\n  font-size: 0.95em;\n}\n.details__text span:hover {\n  cursor: pointer;\n}\n.details__release-date span {\n  color: #28ff28;\n}\n.details__content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 10px;\n  max-width: 90%;\n  left: 5%;\n  right: 5%;\n}\n.details__player {\n  position: relative;\n}\n.details__player img {\n  max-width: 15em;\n}\n.details__player i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  text-shadow: 0 0 2px black;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n.details__player i:hover {\n  cursor: pointer;\n  color: #e7e4e4;\n}\n/* width */\n::-webkit-scrollbar {\n  width: 5px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: #fafafa;\n  border-radius: 2px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #b30000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb3ZpZS1kZXRhaWxzL0M6XFxVc2Vyc1xcU2lhcmhlaVxcRGVza3RvcFxcQ3JlYXRpdmVDb2RlcnNcXGtpbm8taHVudGVyL3NyY1xcYXBwXFxtYWluXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDSjtBREVFO0VBQ0UsY0FBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FES0U7RUFJRSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBRUEsZ0JBQUE7QUNSSjtBRFdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNUTjtBRFdNO0VBQ0UsZUFBQTtBQ1RSO0FEZUk7RUFDRSxjQUFBO0FDYk47QURpQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDZko7QURrQkU7RUFDRSxrQkFBQTtBQ2hCSjtBRGtCSTtFQUNFLGVBQUE7QUNoQk47QURtQkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNqQk47QURtQk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2pCUjtBRHVCQSxVQUFBO0FBQ0E7RUFDRSxVQUFBO0FDcEJGO0FEd0JBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FDckJGO0FEd0JBLFdBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNyQkY7QUR3QkEsb0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FDckJGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyB7XHJcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAmX19vdXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcblxyXG4gICZfX2JhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0IHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMTBweDtcclxuICAgIC8vIGxlZnQ6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXgtd2lkdGg6IDQzJTtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXgtaGVpZ2h0OiAxOWVtO1xyXG4gICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3JlbGVhc2UtZGF0ZSB7XHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICBjb2xvcjogcmdiKDQwLCAyNTUsIDQwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICByaWdodDogNSU7XHJcbiAgfVxyXG5cclxuICAmX19wbGF5ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTVlbTtcclxuICAgIH1cclxuXHJcbiAgICBpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCBibGFjaztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjMxLCAyMjgsIDIyOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA1cHg7XHJcblxyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNiMzAwMDA7XHJcbn1cclxuIiwiLmRldGFpbHMge1xuICBmb250LWZhbWlseTogXCJOYW51bSBHb3RoaWNcIiwgc2Fucy1zZXJpZjtcbn1cbi5kZXRhaWxzX19vdXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5kZXRhaWxzX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuLmRldGFpbHNfX2JhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmRldGFpbHNfX2lubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kZXRhaWxzX190ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDQzJTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWF4LWhlaWdodDogMTllbTtcbn1cbi5kZXRhaWxzX190ZXh0IHNwYW4ge1xuICBjb2xvcjogI2M3YzdjNztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xufVxuLmRldGFpbHNfX3RleHQgc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZXRhaWxzX19yZWxlYXNlLWRhdGUgc3BhbiB7XG4gIGNvbG9yOiAjMjhmZjI4O1xufVxuLmRldGFpbHNfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIHJpZ2h0OiA1JTtcbn1cbi5kZXRhaWxzX19wbGF5ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlsc19fcGxheWVyIGltZyB7XG4gIG1heC13aWR0aDogMTVlbTtcbn1cbi5kZXRhaWxzX19wbGF5ZXIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggYmxhY2s7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG4uZGV0YWlsc19fcGxheWVyIGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZTdlNGU0O1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/movie-details/movie-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/movie-details/movie-details.component.ts ***!
  \***************************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/movies.service */ "./src/app/shared/movies.service.ts");




var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, router, moviesService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.moviesService = moviesService;
        this.id = +this.route.snapshot.params['id'];
        this.movie = this.moviesService.getMovie(this.id);
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.movie = _this.moviesService.getMovie(_this.id);
            _this.expanded = false;
        });
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
    };
    MovieDetailsComponent.prototype.getBgImgUrl = function () {
        return this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path;
    };
    MovieDetailsComponent.prototype.getImgUrl = function () {
        return this.moviesService.httpConfig.imgBaseUrl + this.movie.poster_path;
    };
    MovieDetailsComponent.prototype.playMovie = function () {
        this.router.navigate(['/watch', this.movie.id], { relativeTo: this.route });
    };
    MovieDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_shared_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
    ]; };
    MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details',
            template: __webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/movie-details/movie-details.component.html"),
            styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/main/movie-details/movie-details.component.scss")]
        })
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/movies-list/movies-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/movies-list/movies-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movies-list {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.movies-list__shadow {\n  position: fixed;\n  top: 50%;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n}\n.movies-list__outer {\n  height: 50%;\n  overflow: scroll;\n  position: fixed;\n  bottom: 0;\n}\n.movie-poster {\n  max-height: 20em;\n}\n@-webkit-keyframes hiding {}\n@keyframes hiding {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb3ZpZXMtbGlzdC9DOlxcVXNlcnNcXFNpYXJoZWlcXERlc2t0b3BcXENyZWF0aXZlQ29kZXJzXFxraW5vLWh1bnRlci9zcmNcXGFwcFxcbWFpblxcbW92aWVzLWxpc3RcXG1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUdBLFdBQUE7RUFDQSxXQUFBO0FDREo7QURLRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDSEo7QURPQTtFQUNFLGdCQUFBO0FDSkY7QURPQSwyQkFBQTtBQUFBLG1CQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZXMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICZfX3NoYWRvdyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgNDBweCAyNXB4ICMyMTFlMWU7XHJcblxyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAmX19vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubW92aWUtcG9zdGVyIHtcclxuICBtYXgtaGVpZ2h0OiAyMGVtO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhpZGluZyB7XHJcbiAgMCUge31cclxufVxyXG4iLCIubW92aWVzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1vdmllcy1saXN0X19zaGFkb3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubW92aWVzLWxpc3RfX291dGVyIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xufVxuXG4ubW92aWUtcG9zdGVyIHtcbiAgbWF4LWhlaWdodDogMjBlbTtcbn1cblxuQGtleWZyYW1lcyBoaWRpbmcge30iXX0= */"

/***/ }),

/***/ "./src/app/main/movies-list/movies-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/movies-list/movies-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/movies.service */ "./src/app/shared/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService, router, route) {
        this.moviesService = moviesService;
        this.router = router;
        this.route = route;
        this.movies = [];
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.moviesService.fetchMovies()];
                    case 1:
                        _a.sent();
                        this.movies = this.moviesService.getMovies();
                        this.router.navigate([this.movies[Math.ceil(Math.random() * (this.movies.length))].id], { relativeTo: this.route });
                        return [2 /*return*/];
                }
            });
        });
    };
    MoviesListComponent.prototype.getImgUrl = function (imgPath) {
        return this.moviesService.httpConfig.imgBaseUrl + imgPath;
    };
    MoviesListComponent.ctorParameters = function () { return [
        { type: src_app_shared_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! raw-loader!./movies-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/main/movies-list/movies-list.component.scss")]
        })
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL3NpdGUtbGF5b3V0L3NpdGUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SiteLayoutComponent = /** @class */ (function () {
    function SiteLayoutComponent() {
    }
    SiteLayoutComponent.prototype.ngOnInit = function () {
    };
    SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-layout',
            template: __webpack_require__(/*! raw-loader!./site-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/layouts/site-layout/site-layout.component.html"),
            styles: [__webpack_require__(/*! ./site-layout.component.scss */ "./src/app/shared/layouts/site-layout/site-layout.component.scss")]
        })
    ], SiteLayoutComponent);
    return SiteLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/movie.model.ts ***!
  \***************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(id, original_title, title, overview, release_date, poster_path, backdrop_path) {
        this.id = id;
        this.original_title = original_title;
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
    }
    Movie.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Movie;
}());



/***/ }),

/***/ "./src/app/shared/movies.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/movies.service.ts ***!
  \******************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.model */ "./src/app/shared/movie.model.ts");


var MoviesService = /** @class */ (function () {
    function MoviesService() {
        this.movies = [];
        this.httpConfig = {
            baseUrl: 'https://api.themoviedb.org/3',
            apiKey: '1fafe97d2ee12ba14e11814dc5afeaa2',
            language: 'ru-RU',
            imgBaseUrl: 'https://image.tmdb.org/t/p/w300/',
            imgBackgroundBaseUrl: 'https://image.tmdb.org/t/p/w1280/'
        };
    }
    MoviesService.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    };
    MoviesService.prototype.getMovie = function (id) {
        return this.movies.find(function (item) { return item.id == id; });
    };
    MoviesService.prototype.getMovies = function () {
        return this.movies.slice();
    };
    MoviesService.prototype.fetchMovies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, response, films;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.httpConfig.baseUrl + "/movie/popular?api_key=" + this.httpConfig.apiKey + "&language=" + this.httpConfig.language + "&page=1&region=RU";
                        return [4 /*yield*/, fetch(url, { method: "GET" })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        films = _a.sent();
                        films.results.forEach(function (movie) {
                            _this.movies.push(new _movie_model__WEBPACK_IMPORTED_MODULE_1__["Movie"](movie.id, movie.original_title, movie.title, movie.overview, movie.release_date, movie.poster_path, movie.backdrop_path));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  width: 10% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9DOlxcVXNlcnNcXFNpYXJoZWlcXERlc2t0b3BcXENyZWF0aXZlQ29kZXJzXFxraW5vLWh1bnRlci9zcmNcXGFwcFxcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwidWwge1xuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/sidenav/sidenav.component.scss")]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/watch-movie/watch-movie.component.scss":
/*!********************************************************!*\
  !*** ./src/app/watch-movie/watch-movie.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#yohoho {\n  height: 100vh;\n  width: 100%;\n}\n\n.player img {\n  width: 100vw;\n  height: auto;\n  position: fixed;\n}\n\n.player__back-btn {\n  position: fixed;\n  z-index: 10;\n  top: 30px;\n  left: 30px;\n  font-size: 3em;\n  color: white;\n  -webkit-transition: all ease 0.3s;\n  transition: all ease 0.3s;\n}\n\n.player__back-btn:hover {\n  left: 28px;\n  cursor: pointer;\n}\n\n.player__play {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  font-size: 10em;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white;\n  -webkit-animation: playBtnMove 1s;\n          animation: playBtnMove 1s;\n}\n\n.player__play:hover {\n  cursor: pointer;\n  color: #d8d8d8;\n}\n\n@-webkit-keyframes playBtnMove {\n  0% {\n    top: 23%;\n    left: 87%;\n    font-size: 6em;\n  }\n  100% {\n    top: 50%;\n    left: 50%;\n    font-size: 10em;\n  }\n}\n\n@keyframes playBtnMove {\n  0% {\n    top: 23%;\n    left: 87%;\n    font-size: 6em;\n  }\n  100% {\n    top: 50%;\n    left: 50%;\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gtbW92aWUvQzpcXFVzZXJzXFxTaWFyaGVpXFxEZXNrdG9wXFxDcmVhdGl2ZUNvZGVyc1xca2luby1odW50ZXIvc3JjXFxhcHBcXHdhdGNoLW1vdmllXFx3YXRjaC1tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2F0Y2gtbW92aWUvd2F0Y2gtbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDREo7O0FER0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0ROOztBREtFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0hKOztBREtJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNITjs7QURRQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxjQUFBO0VDTEY7RURRQTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtFQ05GO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtFQ0xGO0VEUUE7SUFDRSxRQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2F0Y2gtbW92aWUvd2F0Y2gtbW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjeW9ob2hvIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxheWVyIHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuXHJcbiAgJl9fYmFjay1idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3BsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEwZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFuaW1hdGlvbjogcGxheUJ0bk1vdmUgMXM7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcGxheUJ0bk1vdmUge1xyXG4gIDAlIHtcclxuICAgIHRvcDogMjMlO1xyXG4gICAgbGVmdDogODclO1xyXG4gICAgZm9udC1zaXplOiA2ZW07XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxMGVtO1xyXG4gIH1cclxufVxyXG4iLCIjeW9ob2hvIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wbGF5ZXIgaW1nIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5wbGF5ZXJfX2JhY2stYnRuIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAzMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xufVxuLnBsYXllcl9fYmFjay1idG46aG92ZXIge1xuICBsZWZ0OiAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWVyX19wbGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBmb250LXNpemU6IDEwZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGFuaW1hdGlvbjogcGxheUJ0bk1vdmUgMXM7XG59XG4ucGxheWVyX19wbGF5OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2Q4ZDhkODtcbn1cblxuQGtleWZyYW1lcyBwbGF5QnRuTW92ZSB7XG4gIDAlIHtcbiAgICB0b3A6IDIzJTtcbiAgICBsZWZ0OiA4NyU7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/watch-movie/watch-movie.component.ts":
/*!******************************************************!*\
  !*** ./src/app/watch-movie/watch-movie.component.ts ***!
  \******************************************************/
/*! exports provided: WatchMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchMovieComponent", function() { return WatchMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/movies.service */ "./src/app/shared/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../script.js */ "./src/script.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_4__);





var WatchMovieComponent = /** @class */ (function () {
    function WatchMovieComponent(moviesService, route) {
        var _this = this;
        this.moviesService = moviesService;
        this.route = route;
        this.id = +this.route.snapshot.params['id'];
        this.movie = this.moviesService.getMovie(this.id);
        this.searchIdentifier = this.movie.title + " / " + this.movie.original_title + " (" + this.movie.release_date.slice(0, 4) + ")";
        this.imgPath = this.moviesService.httpConfig.imgBackgroundBaseUrl + this.movie.backdrop_path;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.movie = _this.moviesService.getMovie(_this.id);
        });
    }
    WatchMovieComponent.prototype.ngOnInit = function () {
    };
    WatchMovieComponent.prototype.play = function () {
        Object(_script_js__WEBPACK_IMPORTED_MODULE_4__["yo"])();
    };
    WatchMovieComponent.ctorParameters = function () { return [
        { type: _shared_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    WatchMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watch-movie',
            template: __webpack_require__(/*! raw-loader!./watch-movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/watch-movie/watch-movie.component.html"),
            styles: [__webpack_require__(/*! ./watch-movie.component.scss */ "./src/app/watch-movie/watch-movie.component.scss")]
        })
    ], WatchMovieComponent);
    return WatchMovieComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function yo_ahoy_key(event) {
    if (!event || (!event.key && !event.keyCode)) return;
    var key='';'Enter'===event.key||13===event.keyCode?key='fullscreen':'Left'===event.key||'ArrowLeft'===event.key||37===event.keyCode?key='prev':'Right'===event.key||'ArrowRight'===event.key||39===event.keyCode?key='next':'Up'===event.key||'ArrowUp'===event.key||38===event.keyCode?key='up':'Down'===event.key||'ArrowDown'===event.key||40===event.keyCode?key='down':'0'===event.key||48===event.keyCode?key='0':'1'===event.key||49===event.keyCode?key='1':'2'===event.key||50===event.keyCode?key='2':'3'===event.key||51===event.keyCode?key='3':'4'===event.key||52===event.keyCode?key='4':'5'===event.key||53===event.keyCode?key='5':'6'===event.key||54===event.keyCode?key='6':'7'===event.key||55===event.keyCode?key='7':'8'===event.key||56===event.keyCode?key='8':'9'!==event.key&&57!==event.keyCode||(key='9');
    if (key && (key === 'up' || key === 'down')) {
        var a = document.querySelector('.yohoho-active');
        console.log(key, a.dataset.event, a && a.dataset && a.dataset.event && parseInt(a.dataset.event));
        if (a && a.dataset && a.dataset.event && parseInt(a.dataset.event)) {
            var u = key === 'up'
                ? document.querySelector('[data-event="' + (parseInt(a.dataset.event)-1) + '"]:not([style*="display:none"]):not([style*="display: none"]')
                : document.querySelector('[data-event="' + (parseInt(a.dataset.event)+1) + '"]:not([style*="display:none"]):not([style*="display: none"]');
            if (!u && key === 'up') {
                var p = document.querySelector('[data-event="prev"]:not([style*="display:none"]):not([style*="display: none"]');
                if (p && typeof p.onclick === 'function') {
                    p.onclick.apply(p);
                }
            }
            else if (!u && key === 'down') {
                var n = document.querySelector('[data-event="next"]:not([style*="display:none"]):not([style*="display: none"]');
                if (n && typeof n.onclick === 'function') {
                    n.onclick.apply(n);
                }
            }
            else if (u && typeof u.onclick === 'function') {
                u.onclick.apply(u);
            }
        }
    }
    else if (key && key === 'fullscreen') {
        yo_fullscreen();
    }
    else {
        var e = document.querySelectorAll('[data-event]:not([style*="display:none"]):not([style*="display: none"]');
        if (e && e.length) {
            for (var i = 0; i < e.length; i++) {
                if (key && e[i].dataset.event === key && typeof e[i].onclick === 'function') {
                    e[i].onclick.apply(e[i]);
                    return;
                }
            }
        }
    }
}

function yo(self) {
    var h, a, w, i, l, y, s, t = false, p = '';

    var sel = self && self.getAttribute('data-ahoy')
        ? self.getAttribute('data-ahoy')
        : 'yohoho';

    y = document.querySelector('#' + sel);
    if (!y) {
        y = document.querySelector('#yohoho-online');
        if (!y) {
            y = document.querySelector('#yohoho-torrent');
            if (!y) {
                return false;
            }
            else {
                t = true;
            }
        }
    }

    var yohoho = document.createElement('div');
    var attr = Array.prototype.slice.call(y.attributes);
    while(a = attr.pop()) {yohoho.setAttribute(a.nodeName, a.nodeValue);}
    yohoho.innerHTML = y.innerHTML;
    y.parentNode.replaceChild(yohoho, y);

    var options = [].slice.call(yohoho.attributes).reduce(function (o, a) {
        return /^data-/.test(a.name) && (o[a.name.substr(5)] = decodeURIComponent(a.value)), o;
    }, {});

    if (self && self.attributes) {
        [].slice.call(self.attributes).reduce(function (o, a) {
            if (/^data-/.test(a.name)) {
                options[a.name.substr(5)] = decodeURIComponent(a.value)
            }
        }, {});
    }

    if ((options.title && /трейлер|trailer|teaser/i.test(options.title)) || t) {
        options.player = 'trailer';
    }

    options.player = ((options.title && /трейлер|trailer|teaser/i.test(options.title)) || t)
        ? 'trailer'
        : options.player
            ? options.player
            : 'videocdn,collaps,hdvb,bazon,ustore,alloha,iframe,kodik,pleer';

    var bg = (options.bg && options.bg.replace(/[^0-9a-z]/ig, ''))
        ? options.bg.replace(/[^0-9a-z]/ig, '')
        : '2A3440';

    var language = (options.language && !/ru/i.test(options.language))
        ? {"trailer":"TRAILER","torrent":"DOWNLOAD","next":"NEXT","prev":"PREV"}
        : {"trailer":"ТРЕЙЛЕР","torrent":"СКАЧАТЬ","next":"ВПЕРЕД","prev":"НАЗАД"};

    var btns = {};
    options.button = (options.button)
        ? options.button
        : 'videocdn: {Q} {T}, hdvb: {Q} {T}, bazon: {Q} {T}, ustore: {Q} {T}, alloha: {Q} {T}, kodik: {Q} {T}, iframe: {Q} {T}, collaps: {Q} {T}';
    if (options.button) {
        options.button.split(',').forEach(function (button) {
            var btn = button.split(':');
            if (btn.length === 2 && btn[0] && btn[1]) {
                btns[btn[0].trim().toLowerCase()] = btn[1].trim();
            }
        });
    }
    options.button_limit = (options.button_limit && parseInt(options.button_limit) < 8)
        ? parseInt(options.button_limit)
        : 8;
    options.button_size = (options.button_size && parseFloat(options.button_size))
        ? parseFloat(options.button_size)
        : 1;
    options.separator = (options.separator)
        ? options.separator
        : ',';

    for (var data in options) {
        if (options.hasOwnProperty(data) && options[data]) {
            p += (p)
                ? '&' + data + '=' + encodeURIComponent(options[data])
                : data + '=' + encodeURIComponent(options[data]);
        }
        else {
            options[data] = '';
        }
    }

    if (!options.kinopoisk && !options.title && !options.imdb && !options.tmdb) {
        return false;
    }

    if (options.tv) {
        document.addEventListener('keydown', yo_ahoy_key);
    }

    if (options.resize) {
        window.addEventListener('orientationchange', yo_resize, false);
        window.addEventListener('resize', yo_resize, false);
    }

    var yohoho_loading = document.querySelector('#yohoho-loading');
    if (yohoho_loading) {
        yohoho_loading.parentNode.removeChild(yohoho_loading);
    }
    var yohoho_buttons = document.querySelector('#yohoho-buttons');
    if (yohoho_buttons) {
        yohoho_buttons.parentNode.removeChild(yohoho_buttons);
    }
    var yohoho_iframe = document.querySelector('#yohoho-iframe');
    if (yohoho_iframe) {
        yohoho_iframe.parentNode.removeChild(yohoho_iframe);
    }
    var data_ahoy = document.querySelectorAll('[data-ahoy]');
    for (var da in data_ahoy) {
        if (data_ahoy.hasOwnProperty(da) && data_ahoy[da]) {
            var yohoho_da = document.querySelector('#' + data_ahoy[da].getAttribute('data-ahoy'));
            if (yohoho_da) {
                yohoho_da.removeAttribute('style');
            }
        }
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var css = '#yohoho-loading{z-index:9999;position:absolute;left:0;top:0;width:100%;height:100%;background:#' + bg + ' url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpcmFsIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImJrIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTU0LjUgODkuOWMtOS42IDAtMTguNi0zLjktMjUuNC0xMSAtNi44LTcuMS0xMC41LTE2LjYtMTAuNS0yNi43IDAtOC45IDMuMy0xNy4yIDkuMi0yMy41UzQxLjcgMTkgNTAuMiAxOWM4LjQgMCAxNi40IDMuNCAyMi4zIDkuNyA2IDYuMyA5LjIgMTQuNiA5LjIgMjMuNSAwIDE1LjgtMTIuMiAyOC43LTI3LjMgMjguNyAtMTUgMC0yNy4zLTEyLjktMjcuMy0yOC43IDAtMTMuMyAxMC4zLTI0LjIgMjMtMjQuMnMyMyAxMC44IDIzIDI0LjJjMCAxMC44LTguNCAxOS42LTE4LjcgMTkuNiAtMTAuMyAwLTE4LjctOC44LTE4LjctMTkuNiAwLTguMyA2LjUtMTUuMSAxNC40LTE1LjEgNy45IDAgMTQuNCA2LjggMTQuNCAxNS4xIDAgNS44LTQuNSAxMC42LTEwLjEgMTAuNnMtMTAuMS00LjgtMTAuMS0xMC42YzAtMy40IDIuNi02LjEgNS44LTYuMSAzLjIgMCA1LjggMi43IDUuOCA2LjEgMCAwLjktMC43IDEuNi0xLjUgMS42IC0wLjggMC0xLjUtMC43LTEuNS0xLjYgMC0xLjYtMS4zLTIuOS0yLjgtMi45IC0xLjUgMC0yLjggMS4zLTIuOCAyLjkgMCA0LjEgMy4yIDcuNCA3LjEgNy40czcuMS0zLjMgNy4xLTcuNGMwLTYuNi01LjEtMTItMTEuNC0xMiAtNi4zIDAtMTEuNCA1LjQtMTEuNCAxMiAwIDkuMSA3IDE2LjUgMTUuNyAxNi41IDguNiAwIDE1LjctNy40IDE1LjctMTYuNSAwLTExLjYtOS0yMS0yMC0yMXMtMjAgOS40LTIwIDIxYzAgMTQuMSAxMC45IDI1LjUgMjQuMyAyNS41czI0LjMtMTEuNCAyNC4zLTI1LjVjMC0xNi42LTEyLjgtMzAtMjguNi0zMCAtMTUuOCAwLTI4LjYgMTMuNS0yOC42IDMwIDAgOS4yIDMuNCAxNy45IDkuNiAyNC40IDYuMiA2LjUgMTQuNSAxMC4xIDIzLjIgMTAuMXMxNy0zLjYgMjMuMi0xMC4xYzYuMi02LjUgOS42LTE1LjIgOS42LTI0LjQgMC0xMC40LTMuOS0yMC4yLTEwLjktMjcuNiAtNy03LjQtMTYuMy0xMS40LTI2LjMtMTEuNHMtMTkuMyA0LjEtMjYuMyAxMS40UzEzIDQxLjggMTMgNTIuMmMwIDAuOS0wLjcgMS42LTEuNSAxLjZTMTAgNTMuMSAxMCA1Mi4yYzAtMTEuMyA0LjItMjEuOSAxMS44LTI5LjkgNy42LTggMTcuNy0xMi40IDI4LjQtMTIuNCAxMC43IDAgMjAuOCA0LjQgMjguNCAxMi40IDcuNiA4IDExLjggMTguNiAxMS44IDI5LjkgMCAxMC4xLTMuNyAxOS41LTEwLjUgMjYuN0M3My4xIDg2IDY0LjEgODkuOSA1NC41IDg5Ljl6IiBmaWxsPSIjZmZmIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+) 50% 50% no-repeat}#yohoho-buttons{position:absolute;z-index:9999;right:0;top:50px;text-align:left}#yohoho-buttons:hover{right:0!important}#yohoho-buttons div{font-family:Verdana,sans-serif;font-weight:normal;text-shadow:none;line-height:normal;font-size:' + 12 * options.button_size + 'px;color:#fff;background:#' + bg + ';border-radius:5px 0 0 5px;padding:5px;margin:5px 0 5px 5px;opacity:.7;}#yohoho-buttons div:hover,#yohoho-buttons div.yohoho-active{color:#fff;background:#' + bg + ';cursor:pointer;opacity:1}';
    s = document.createElement('style');
    s.type = 'text/css';
    if (s.styleSheet) {
        s.styleSheet.cssText = css;
    }
    else {
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);

    l = document.createElement('div');
    l.setAttribute('id', 'yohoho-loading');
    yohoho.innerHTML = '';
    yohoho.appendChild(l);

    i = document.createElement('iframe');
    i.setAttribute('id', 'yohoho-iframe');
    i.setAttribute('frameborder', '0');
    i.setAttribute('allowfullscreen', 'allowfullscreen');
    yohoho.appendChild(i);

    if (parseInt(yohoho.offsetWidth)) {
        w = parseInt(yohoho.offsetWidth);
    }
    else if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetWidth)) {
        w = parseInt(yohoho.parentNode.offsetWidth);
    }
    else {
        w = 610;
    }

    if (yohoho.parentNode && yohoho.parentNode.tagName && yohoho.parentNode.tagName.toLowerCase() === 'body') {
        h = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    }
    else if (parseInt(yohoho.offsetHeight) && parseInt(yohoho.offsetHeight) < 370) {
        if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetHeight) && parseInt(yohoho.parentNode.offsetHeight) >= 370) {
            h = parseInt(yohoho.parentNode.offsetHeight);
        }
        else {
            h = 370;
        }
    }
    else if (parseInt(yohoho.offsetHeight) && w/3 < parseInt(yohoho.offsetHeight)) {
        h = parseInt(yohoho.offsetHeight);
    }
    else if (yohoho.parentNode && parseInt(yohoho.parentNode.offsetHeight) && w/3 < parseInt(yohoho.parentNode.offsetHeight)) {
        h = parseInt(yohoho.parentNode.offsetHeight);
    }
    else {
        h = w/2;
    }

    var style = 'width:' + w + 'px;height:' + h + 'px;border:0;margin:0;padding:0;overflow:hidden;position:relative';
    i.setAttribute('style', style);
    i.setAttribute('width', w);
    i.setAttribute('height', h);
    yohoho.setAttribute('style', style);

    yo_get('https://ahoy.yohoho.online?cache' + Math.random().toString().substr(2, 3), p,
        function (players) {
            var first = true;
            var buttons = document.createElement('div');
            buttons.setAttribute('id', 'yohoho-buttons');
            var keys = options.player.split(options.separator);
            if (/\/\/|%2F%2F/i.test(options.player)) {
                var p = [];
                for (var k = 0; k < keys.length; k++) {
                    var re = keys[k].match(/^(.*?)(http.*|\/\/.*)$/i);
                    if (!re || !re[1] || !re[1].trim()) continue;
                    p.push(re[1].trim());
                }
                if (p.length) {
                    keys = p;
                } else {
                    var yo_res = Object.keys(players);
                    var yo_new = [];
                    for (var ps = 0; ps < keys.length; ps++) {
                        for (var pp = 0; pp < yo_res.length; pp++) {
                            if (keys[ps].toLowerCase().indexOf(yo_res[pp].toLowerCase())+1) {
                                yo_new.push(yo_res[pp]);
                            }
                        }
                    }
                    keys = yo_new;
                }
            }
            var j = 0;
            for (var i = 0, len = keys.length; i < len; i++) {
                var key = keys[i].toLowerCase().trim();
                if (players.hasOwnProperty(key) && players[key] && players[key].iframe) {
                    players[key].quality = (players[key].quality)
                        ? players[key].quality.replace(/"/g, '\'')
                        : '';
                    players[key].translate = (players[key].translate)
                        ? players[key].translate.replace(/"/g, '\'')
                        : '';
                    var option = document.createElement('div');
                    option.setAttribute('onclick', 'yo_player("' + encodeURIComponent(players[key].iframe) + '", "' + players[key].quality + '", "' + players[key].translate + '", this, "' + options.button_size + '")');
                    option.dataset.event = '' + (j+1);
                    option.dataset.page = Math.ceil((j+1)/options.button_limit) + '';
                    option.dataset.iframe = players[key].iframe;
                    option.dataset.quality = players[key].quality;
                    option.dataset.translate = players[key].translate;
                    if (btns.hasOwnProperty(key) && btns[key]) {
                        var q = (players[key].quality)
                            ? (players[key].quality.toUpperCase().search(/TS|TC|SCR|CAM/gi)+1)
                                ? 'ЭКРАН'
                                : (players[key].quality.toUpperCase().search(/720P/gi)+1)
                                    ? '720P'
                                    : (players[key].quality.toUpperCase().search(/1080P/gi)+1)
                                        ? '1080P'
                                        : players[key].quality
                                            .toUpperCase()
                                            .replace(/\s?ХОРОШЕЕ\s?|\s?СРЕДНЕЕ\s?|\s?ПЛОХОЕ\s?/gi, '')
                            : '';
                        var t = (players[key].translate)
                            ? /ДУБЛ/i.test(players[key].translate)
                                ? 'ДУБЛЯЖ'
                                : /ПРОФ/i.test(players[key].translate)
                                    ? 'ПРОФ.'
                                    : /ЛЮБИТ/i.test(players[key].translate)
                                        ? 'ЛЮБИТ.'
                                        : /АВТОР/i.test(players[key].translate)
                                            ? 'АВТОР.'
                                            : /МНОГОГОЛ/i.test(players[key].translate)
                                                ? 'МНОГОГОЛ.'
                                                : /ОДНОГОЛ/i.test(players[key].translate)
                                                    ? 'ОДНОГОЛ.'
                                                    : /ДВУХГОЛ/i.test(players[key].translate)
                                                        ? 'ДВУХГОЛ.'
                                                        : /ОРИГИНАЛ/i.test(players[key].translate)
                                                            ? 'ОРИГИНАЛ'
                                                            : /(ENG|ORIG|СУБТ)/i.test(players[key].translate)
                                                                ? options.language && /en/i.test(options.language)
                                                                    ? 'ENGLISH'
                                                                    : 'СУБТИТИРЫ'
                                                                : players[key].translate.toUpperCase()
                            : '';
                        j++;
                        btns[key] = btns[key]
                            .replace('{N}', j)
                            .replace('{Q}', q)
                            .replace('{T}', t)
                            .replace(/\s+/g, ' ')
                            .replace(/(^\s*)|(\s*)$/g, '');
                        btns[key] = (btns[key]) ? btns[key] : key.toUpperCase();
                        option.innerText = j + '► ' + btns[key];
                    }
                    else if (key === 'trailer') {
                        j++;
                        option.innerText = j + '► ' + language.trailer.toUpperCase();
                    }
                    else if (key === 'torrent') {
                        j++;
                        option.innerText = j + '► ' + language.torrent.toUpperCase();
                    }
                    else {
                        j++;
                        option.innerText = j + '► ' + key.toUpperCase();
                    }
                    if (first) {
                        yo_player(players[key].iframe, players[key].quality, players[key].translate, option, buttons, options.button_size);
                        first = false;
                    }
                    buttons.appendChild(option);
                    if (j && !(j % options.button_limit) && keys[i+1]) {
                        var next = document.createElement('div');
                        next.setAttribute('onclick', 'yo_page(' + Math.ceil((j+1)/options.button_limit) + ');' + 'yo_player("' + encodeURIComponent(players[keys[i+1].toLowerCase().trim()].iframe) + '", "' + players[keys[i+1].toLowerCase().trim()].quality + '", "' + players[keys[i+1].toLowerCase().trim()].translate + '", document.querySelector(\'[data-event="' + (j+1) + '"]\'), "' + options.button_size + '")');
                        next.dataset.event = 'next';
                        next.dataset.page = Math.ceil(j/options.button_limit) + '';
                        next.innerText = '-► ' + language.next;
                        buttons.appendChild(next);

                        var prev = document.createElement('div');
                        prev.setAttribute('onclick', 'yo_page(' + Math.ceil(j/options.button_limit) + ');' + 'yo_player("' + encodeURIComponent(players[keys[i-1].toLowerCase().trim()].iframe) + '", "' + players[keys[i-1].toLowerCase().trim()].quality + '", "' + players[keys[i-1].toLowerCase().trim()].translate + '", document.querySelector(\'[data-event="' + (j) + '"]\'), "' + options.button_size + '")');
                        prev.dataset.event = 'prev';
                        prev.dataset.page = Math.ceil((j+1)/options.button_limit) + '';
                        prev.innerText = '◄- ' + language.prev;
                        buttons.appendChild(prev);
                    }
                }
            }
            if (j < 1) {
                var yohohoLoading = document.querySelector('#yohoho-loading');
                yohohoLoading.style.display = 'none';
            }
            else if (j > 1) {
                yohoho.appendChild(buttons);
                if (keys.length > options.button_limit) {
                    yo_page(1);
                }
            }
        });

}

function yo_player(iframe, quality, translate, element, buttons, size) {
    window.parent.postMessage({"quality": quality, "translate": translate}, "*");
    var yohohoLoading = document.querySelector('#yohoho-loading');
    yohohoLoading.style.display = 'block';
    setTimeout(function () {
        yohohoLoading.style.display = 'none';
    }, 2000);
    var yohohoIframe = document.querySelector('#yohoho-iframe');
    yohohoIframe.style.display = 'block';
    if (iframe.indexOf('4h0y') + 1) {
        yo_get(decodeURIComponent(iframe), '',function (json, html) {
            yohohoIframe.setAttribute('src', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
        });
    } else {
        yohohoIframe.setAttribute('src', decodeURIComponent(iframe));
    }
    yohohoIframe.setAttribute('class', '');
    if (typeof element.setAttribute === 'function') {
        var yohohoActive = document.querySelectorAll('.yohoho-active');
        if (yohohoActive) {
            for (var i = 0; i < yohohoActive.length; i++) {
                yohohoActive[i].setAttribute('class', '');
            }
        }
        element.setAttribute('class', 'yohoho-active');
    }
    var yohohoButtons = (buttons) ? buttons : document.querySelector('#yohoho-buttons');
    size = size ? parseFloat(size) : 1;
    if (yohohoButtons) {
        yohohoButtons.style = yohohoButtons.style ? yohohoButtons.style : {};
        if (yohohoButtons.style && typeof yohohoButtons.style === 'object') {
            yohohoButtons.style.right = '0';
        } else {
            yohohoButtons.style = {right: '0'};
        }
        setTimeout(function () {
            var btn = setInterval(function () {
                if (parseInt(yohohoButtons.style && yohohoButtons.style.right || '0') > -parseInt(yohohoButtons.offsetWidth)+(30*size))  {
                    yohohoButtons.style.right = (parseInt(yohohoButtons.style.right)-1) + 'px';
                }
                else {
                    clearInterval(btn);
                }
            }, 5);
        }, 5000);
    }
}

function yo_page(page) {
    var yohohoPages = document.querySelectorAll('div[data-page]');
    if (yohohoPages) {
        for (var i = 0; i < yohohoPages.length; i++) {
            yohohoPages[i].style.display = 'none';
        }
    }
    var yohohoPage = document.querySelectorAll('div[data-page="' + page + '"]');
    if (yohohoPage) {
        for (var j = 0; j < yohohoPage.length; j++) {
            yohohoPage[j].style.display = 'block';
        }
    }
    var yohohoButtons = document.querySelector('#yohoho-buttons');
    if (yohohoButtons) {
        yohohoButtons.style.right = 0;
    }
}

function yo_get(url, body, callback) {
    var YoXmlHttp = new XMLHttpRequest();
    YoXmlHttp.onreadystatechange = function() {
        if (YoXmlHttp.readyState === 4) {
            if (YoXmlHttp.status === 200) {
                callback(yo_json(YoXmlHttp.responseText), YoXmlHttp.responseText);
            }
            else {
                callback({}, '');
            }
        }
    };
    YoXmlHttp.open('POST', url, true);
    YoXmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    YoXmlHttp.send(body);
}

function yo_json(jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }
    return {};
}

function yo_fullscreen() {
    var isInFullScreen = (document.fullscreenElement) ||
        (document.webkitFullscreenElement) ||
        (document.mozFullScreenElement) ||
        (document.msFullscreenElement);

    var iframe = document.querySelector('#yohoho-iframe');
    if (!isInFullScreen) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullScreen) {
            iframe.webkitRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function yo_resize() {
    var yi = document.querySelector('#yohoho-iframe');
    if (!yi || !yi.parentNode || !yi.parentNode.parentNode || !yi.parentNode.parentNode.offsetWidth) return;
    var w = parseInt(yi.parentNode.parentNode.offsetWidth);
    yi.style.width = w + 'px';
    yi.setAttribute('width', w.toString());
    yi.parentNode.style.width = w + 'px';
}

(function() {
    var a = document.querySelectorAll('[data-ahoy]');
    if (a && a.length) {
        for (var i in a) {
            if (a.hasOwnProperty(i) && a[i]) {
                a[i].addEventListener('click', function() {
                    yo(this);
                });
            }
        }
    }
    else {
        yo();
    }
})();

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Siarhei\Desktop\CreativeCoders\kino-hunter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
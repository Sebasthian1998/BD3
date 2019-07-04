webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<style>\n  .navigation .navbar *{\n    background-color: darkblue !important;\n    color: greenyellow !important;\n  }\n</style>\n\n<div class=\"navigation col-lg-12 bg-dark\">\n  <nav class=\"navbar\">\n    <div class=\"container-fluid\">\n\n      <ul class=\"nav navbar-nav\" *ngIf=\"identity\">\n        <li> \n          <a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-home\"></span>\n            Home\n          </a>\n        </li>\n\n        <li> \n          <a [routerLink]=\"['/timeline']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-th-list\"></span>\n            Publicaciones\n          </a>\n        </li>\n\n        <li> \n          <a [routerLink]=\"['/mensajes']\" [routerLinkActive]=\"['active']\">\n            <span class=\"glyphicon glyphicon-envelope\"></span>\n            Mensajes\n          </a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar navbar-nav navbar-right\" *ngIf=\"!identity\">\n          <li> \n            <a [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-log-in\"></span>\n              Login\n            </a>\n          </li>\n\n          <li> \n            <a [routerLink]=\"['/registro']\" [routerLinkActive]=\"['active']\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n              Registro\n            </a>\n          </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"identity\">\n        <li class=\"avatar\">\n          <!--cargar imagen de usuario-->\n          <img src=\"{{ url + 'get-image-user/' + identity.image }}\" *ngIf=\"identity && identity.image\" />\n        </li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            {{identity.nick}} <span class=\"caret\"></span>\n          </a>\n\n          <ul class=\"dropdown-menu\">\n              <li>\n                  <a [routerLink]=\"['/mis-datos']\">\n                    <span class=\"glyphicon glyphicon-cog\"></span>\n                    Mis datos\n                  </a>\n                <a [routerLink]=\"['/perfil',identity._id]\">\n                  <span class=\"glyphicon glyphicon-user\"></span>\n                  Mi perfil\n                </a>\n              </li>\n              <li>\n                \n              </li>\n              <li>\n                <a class=\"pointer\" (click)=\"logout()\">\n                  <span class=\"glyphicon glyphicon-log-out\"></span>\n                  Cerrar sesión\n                </a>\n              </li>\n          </ul>\n        </li>\n      </ul>\n\n\n    </div>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'UNMSM';
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.identity = this._userService.getIdentity();
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_module__ = __webpack_require__("../../../../../src/app/messages/messages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_publications_publications_component__ = __webpack_require__("../../../../../src/app/components/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_following_following_component__ = __webpack_require__("../../../../../src/app/components/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_followed_followed_component__ = __webpack_require__("../../../../../src/app/components/followed/followed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_guard__ = __webpack_require__("../../../../../src/app/services/user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Modulo custom

// Componentes












// Servicios


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_edit_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_timeline_timeline_component__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_publications_publications_component__["a" /* PublicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_following_following_component__["a" /* FollowingComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_followed_followed_component__["a" /* FollowedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_6__messages_messages_module__["a" /* MessagesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* appRoutingProviders */],
                __WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__services_user_guard__["a" /* UserGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_users_component__ = __webpack_require__("../../../../../src/app/components/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_timeline_timeline_component__ = __webpack_require__("../../../../../src/app/components/timeline/timeline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_following_following_component__ = __webpack_require__("../../../../../src/app/components/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_followed_followed_component__ = __webpack_require__("../../../../../src/app/components/followed/followed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_guard__ = __webpack_require__("../../../../../src/app/services/user.guard.ts");

// Componentes










var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'mis-datos', component: __WEBPACK_IMPORTED_MODULE_4__components_user_edit_user_edit_component__["a" /* UserEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'gente', component: __WEBPACK_IMPORTED_MODULE_5__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'gente/:page', component: __WEBPACK_IMPORTED_MODULE_5__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_6__components_timeline_timeline_component__["a" /* TimelineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'perfil/:id', component: __WEBPACK_IMPORTED_MODULE_7__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'siguiendo/:id/:page', component: __WEBPACK_IMPORTED_MODULE_8__components_following_following_component__["a" /* FollowingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: 'seguidores/:id/:page', component: __WEBPACK_IMPORTED_MODULE_9__components_followed_followed_component__["a" /* FollowedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/followed/followed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\r\n\t<h1 class=\"h1-strong\">{{title}} {{user.name}}</h1>\r\n\r\n\t<div class=\"people\" *ngIf=\"followed\">\r\n\r\n\t\t<!--LISTADO-->\r\n\t\t<div *ngFor=\"let follow of followed\" class=\"item-user\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + follow.user.image }}\" *ngIf=\"follow.user.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!follow.user.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"user-name pull-left\">\r\n\t\t\t\t\t\t<p class=\"name-surname\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/perfil',follow.user._id]\">\r\n\t\t\t\t\t\t\t\t{{follow.user.name + ' ' + follow.user.surname}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"pull-right\" *ngIf=\"follow.user._id != identity._id\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" *ngIf=\"follows.indexOf(follow.user._id) < 0\"\r\n\t\t\t\t\t\t(click)=\"followUser(follow.user._id)\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\tSeguir\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" \r\n\t\t\t\t\t\t*ngIf=\"follows.indexOf(follow.user._id) >= 0\"\r\n\t\t\t\t\t\t(mouseenter)=\"mouseEnter(follow.user._id)\"\r\n\t\t\t\t\t\t(mouseleave)=\"mouseLeave(follow.user._id)\"\r\n\t\t\t\t\t\t(click)=\"unfollowUser(follow.user._id)\"\r\n\t\t\t\t\t\t[class.btn-danger]=\"follow.user._id == followUserOver\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span *ngIf=\"follow.user._id == followUserOver; else following\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus-sign\"></span>\r\n\t\t\t\t\t\t\t\tDejar de seguir\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<ng-template #following>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok-sign\"></span>\r\n\t\t\t\t\t\t\t\tSiguiendo\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!--PAGINACION-->\r\n\t\t<ul class=\"pagination pull-right\">\r\n\t\t\t<li *ngIf=\"page > 1\"><a [routerLink]=\"['/seguidores', userPageId, prev_page]\">Anterior</a></li>\r\n\t\t\t<li *ngIf=\"pages != page\"><a [routerLink]=\"['/seguidores', userPageId, next_page]\">Siguiente</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<sidebar></sidebar>\r\n\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/followed/followed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_follow__ = __webpack_require__("../../../../../src/app/models/follow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowedComponent = (function () {
    function FollowedComponent(_route, _router, _userService, _followService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this.title = 'Seguidores ';
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    FollowedComponent.prototype.ngOnInit = function () {
        console.log("Componente user cargado");
        this.actualPage();
    };
    FollowedComponent.prototype.actualPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var user_id = params['id'];
            _this.userPageId = user_id;
            var page = +params['page'];
            _this.page = page;
            if (!params['page']) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page <= 0) {
                    _this.prev_page = 1;
                }
            }
            // devolver listado de usuarios
            _this.getUser(user_id, page);
        });
    };
    FollowedComponent.prototype.getFollows = function (user_id, page) {
        var _this = this;
        this._followService.getFollowed(this.token, user_id, page).subscribe(function (response) {
            if (!response.follows) {
                _this.status = 'error';
            }
            else {
                console.log(response);
                _this.total = response.total;
                _this.followed = response.follows;
                _this.pages = response.pages;
                _this.follows = response.users_following;
                if (page > _this.pages) {
                    _this._router.navigate(['/gente', 1]);
                }
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowedComponent.prototype.getUser = function (user_id, page) {
        var _this = this;
        this._userService.getUser(user_id).subscribe(function (response) {
            if (response.user) {
                _this.user = response.user;
                _this.getFollows(user_id, page);
            }
            else {
                _this._router.navigate(['/home']);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowedComponent.prototype.mouseEnter = function (user_id) {
        this.followUserOver = user_id;
    };
    FollowedComponent.prototype.mouseLeave = function (user_id) {
        this.followUserOver = 0;
    };
    FollowedComponent.prototype.followUser = function (followed) {
        var _this = this;
        var follow = new __WEBPACK_IMPORTED_MODULE_2__models_follow__["a" /* Follow */]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(function (response) {
            if (!response.follow) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.follows.push(followed);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowedComponent.prototype.unfollowUser = function (followed) {
        var _this = this;
        this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            var search = _this.follows.indexOf(followed);
            if (search != -1) {
                _this.follows.splice(search, 1);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'followed',
            template: __webpack_require__("../../../../../src/app/components/followed/followed.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]])
    ], FollowedComponent);
    return FollowedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/following/following.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\r\n\t<h1 class=\"h1-strong\">{{title}} {{user.name}}</h1>\r\n\r\n\t<div class=\"people\" *ngIf=\"following\">\r\n\r\n\t\t<!--LISTADO-->\r\n\t\t<div *ngFor=\"let follow of following\" class=\"item-user\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + follow.followed.image }}\" *ngIf=\"follow.followed.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!follow.followed.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"user-name pull-left\">\r\n\t\t\t\t\t\t<p class=\"name-surname\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/perfil',follow.followed._id]\">\r\n\t\t\t\t\t\t\t\t{{follow.followed.name + ' ' + follow.followed.surname}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"nickname\">{{follow.followed.nick}}</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class=\"pull-right\" *ngIf=\"follow.followed._id != identity._id\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" *ngIf=\"follows.indexOf(follow.followed._id) < 0\"\r\n\t\t\t\t\t\t(click)=\"followUser(follow.followed._id)\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\tSeguir\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" \r\n\t\t\t\t\t\t*ngIf=\"follows.indexOf(follow.followed._id) >= 0\"\r\n\t\t\t\t\t\t(mouseenter)=\"mouseEnter(follow.followed._id)\"\r\n\t\t\t\t\t\t(mouseleave)=\"mouseLeave(follow.followed._id)\"\r\n\t\t\t\t\t\t(click)=\"unfollowUser(follow.followed._id)\"\r\n\t\t\t\t\t\t[class.btn-danger]=\"follow.followed._id == followUserOver\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span *ngIf=\"follow.followed._id == followUserOver; else following\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus-sign\"></span>\r\n\t\t\t\t\t\t\t\tDejar de seguir a este usuario\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<ng-template #following>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok-sign\"></span>\r\n\t\t\t\t\t\t\t\tSiguiendo a este usuario\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!--PAGINACION-->\r\n\t\t<ul class=\"pagination pull-right\">\r\n\t\t\t<li *ngIf=\"page > 1\"><a [routerLink]=\"['/siguiendo', userPageId, prev_page]\">Anterior</a></li>\r\n\t\t\t<li *ngIf=\"pages != page\"><a [routerLink]=\"['/siguiendo', userPageId, next_page]\">Siguiente</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<sidebar></sidebar>\r\n\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/following/following.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_follow__ = __webpack_require__("../../../../../src/app/models/follow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowingComponent = (function () {
    function FollowingComponent(_route, _router, _userService, _followService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this.title = 'Usuarios seguidos ';
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    FollowingComponent.prototype.ngOnInit = function () {
        console.log("Componente user cargado");
        this.actualPage();
    };
    FollowingComponent.prototype.actualPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var user_id = params['id'];
            _this.userPageId = user_id;
            var page = +params['page'];
            _this.page = page;
            if (!params['page']) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page <= 0) {
                    _this.prev_page = 1;
                }
            }
            // devolver listado de usuarios
            _this.getUser(user_id, page);
        });
    };
    FollowingComponent.prototype.getFollows = function (user_id, page) {
        var _this = this;
        this._followService.getFollowing(this.token, user_id, page).subscribe(function (response) {
            if (!response.follows) {
                _this.status = 'error';
            }
            else {
                console.log(response);
                _this.total = response.total;
                _this.following = response.follows;
                _this.pages = response.pages;
                _this.follows = response.users_following;
                if (page > _this.pages) {
                    _this._router.navigate(['/gente', 1]);
                }
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowingComponent.prototype.getUser = function (user_id, page) {
        var _this = this;
        this._userService.getUser(user_id).subscribe(function (response) {
            if (response.user) {
                _this.user = response.user;
                _this.getFollows(user_id, page);
            }
            else {
                _this._router.navigate(['/home']);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowingComponent.prototype.mouseEnter = function (user_id) {
        this.followUserOver = user_id;
    };
    FollowingComponent.prototype.mouseLeave = function (user_id) {
        this.followUserOver = 0;
    };
    FollowingComponent.prototype.followUser = function (followed) {
        var _this = this;
        var follow = new __WEBPACK_IMPORTED_MODULE_2__models_follow__["a" /* Follow */]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(function (response) {
            if (!response.follow) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.follows.push(followed);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowingComponent.prototype.unfollowUser = function (followed) {
        var _this = this;
        this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            var search = _this.follows.indexOf(followed);
            if (search != -1) {
                _this.follows.splice(search, 1);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    FollowingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'following',
            template: __webpack_require__("../../../../../src/app/components/following/following.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]])
    ], FollowingComponent);
    return FollowingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n\ta{\r\n\tborder:1px solid;\r\n\tpadding: 10px;\r\n\tmargin:10px;\r\n\twidth:130px;\r\n\t \r\n\t}\r\n\r\n\tdiv{\r\n\t\tbackground-color: rgb(128, 124, 124) \r\n\t}\r\ninput[type=submit]{\r\n\tpadding: 5px 15px;\r\n\twidth: 90%;\r\n}\r\n</style>\r\n\r\n<div class=\"col-lg-8 col-lg-offset-2 \" >\r\n\t\r\n\t<div class=\"jumbotron\" id=\"mi_panel\">\r\n\t\t<h1>{{title}}</h1>\t\r\n\t\t\t<img width=\"800px\" height=\"500px\" src=\"https://upload.wikimedia.org/wikipedia/commons/3/3a/UNMSM_coatofarms_seal.svg\" alt=\"\">\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Red Social UNMSM';
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home.component cargado !!');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n\tbody{\r\n\tbackground-color: black;\r\n\t}\r\n\t#milogin{\r\n    border: 3px solid rgba(33, 58, 201, 0.966);\r\n\tborder-radius: 20px;\r\n\tpadding: 17px;\r\n\twidth:600px;\r\n\tposition: absolute;\r\n\ttop:50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);  \r\n\tbackground-color:rgb(43, 100, 35) \r\n\t}\r\n\r\ninput[type=submit]{\r\n\tpadding: 5px 15px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media (max-width: 600px){\r\n\t#milogin{\r\n\t\twidth: 90%;\r\n\t}\r\n\r\n}\r\n</style>\r\n\r\n\r\n<div class=\"col-lg-5\" id=\"milogin\">\r\n\t<h1 class=\"h1-strong\">{{title}}</h1>\r\n\r\n\t<div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n\t\tTe has logeado\r\n\t</div>\r\n\r\n\t<div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n\t\tContraseña o usuario no existe\r\n\t</div>\r\n\r\n\t<form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12\">\r\n\t\t<p>\r\n\t\t\t<label>Correo electrónico</label>\r\n\t\t\t<input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\r\n\t\t\t<span *ngIf=\"!email.valid && email.touched\">\r\n\t\t\t\tEl email no es valido\r\n\t\t\t</span>\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\t<label>Contraseña</label>\r\n\t\t\t<input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" required />\r\n\t\t\t<span *ngIf=\"!password.valid && password.touched\">\r\n\t\t\t\t La contraseña es obligatoria\r\n\t\t\t</span>\r\n\t\t</p>\r\n\t\t<input type=\"submit\" value=\"Entrar\" class=\"btn btn-success\" [disabled]=\"!loginForm.form.valid\" />\r\n\t</form>\r\n\t\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Login';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]("", "", "", "", "", "", "", "ROLE_USER", "");
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('Componente de login cargado...');
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // loguear al usuario y conseguir sus datos
        this._userService.signup(this.user).subscribe(function (response) {
            _this.identity = response.user;
            console.log(_this.identity);
            if (!_this.identity || !_this.identity._id) {
                _this.status = 'error';
            }
            else {
                // PERSISTIR DATOS DEL USUARIO
                localStorage.setItem('identity', JSON.stringify(_this.identity));
                // Conseguir el token
                _this.getToken();
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    LoginComponent.prototype.getToken = function () {
        var _this = this;
        this._userService.signup(this.user, 'true').subscribe(function (response) {
            _this.token = response.token;
            console.log(_this.token);
            if (_this.token.length <= 0) {
                _this.status = 'error';
            }
            else {
                // PERSISTIR TOKEN DEL USUARIO
                localStorage.setItem('token', _this.token);
                // Conseguir los contadores o estadisticas del usuario
                _this.getCounters();
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    LoginComponent.prototype.getCounters = function () {
        var _this = this;
        this._userService.getCounters().subscribe(function (response) {
            localStorage.setItem('stats', JSON.stringify(response));
            _this.status = 'success';
            _this._router.navigate(['/']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\r\n\t<h1 class=\"h1-strong\">\r\n\t\t{{title}}\r\n\t</h1>\r\n\r\n\t<div id=\"data-profile\" *ngIf=\"user\">\r\n\t\t<div class=\"avatar pull-left\">\r\n\t\t\t<img src=\"{{ url + 'get-image-user/' + user.image }}\" *ngIf=\"user.image\"/>\r\n\t\t\t<img src=\"assets/user.png\" *ngIf=\"!user.image\" />\r\n\t\t</div>\r\n\r\n\t\t<div class=\"user-name pull-left\">\r\n\t\t\t<div class=\"label label-default pull-left\" *ngIf=\"followed\">\r\n\t\t\t\tTe sigue\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t<p class=\"name\">{{user.name +' '+ user.surname}}</p>\r\n\t\t\t\t<p class=\"nick\">{{user.nick}}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\r\n\t\t\t<div class=\"follow pull-left\">\r\n\t\t\t\t<button class=\"btn btn-success\" *ngIf=\"!following\" (click)=\"followUser(user._id)\">\r\n\t\t\t\t\tSeguir a este usuario\r\n\t\t\t\t</button>\r\n\t\t\t\t<button \r\n\t\t\t\t  class=\"btn btn-success\" \r\n\t\t\t\t  *ngIf=\"following\" \r\n\t\t\t\t  (click)=\"unfollowUser(user._id)\"\r\n\t\t\t\t  (mouseenter)=\"mouseEnter(user._id)\"\r\n\t\t\t\t  (mouseleave)=\"mouseLeave()\"\r\n\t\t\t\t  [class.btn-danger]=\"user._id == followUserOver\"\r\n\t\t\t\t >\r\n\t\t\t\t \t<span *ngIf=\"user._id == followUserOver; else following\">\r\n\t\t\t\t\t\tDejar de seguir a este usuario\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<ng-template #following>\r\n\t\t\t\t\t\tSiguiendo\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-lg-12 publications\" *ngIf=\"user\">\r\n\t\t\t<publications [user]=\"user._id\"></publications>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</div>\r\n\r\n<sidebar></sidebar>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_follow__ = __webpack_require__("../../../../../src/app/models/follow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(_route, _router, _userService, _followService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this.title = 'Perfil de Usuario';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
        this.followed = false;
        this.following = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadPage();
    };
    ProfileComponent.prototype.loadPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getUser(id);
            _this.getCounters(id);
        });
    };
    ProfileComponent.prototype.getUser = function (id) {
        var _this = this;
        this._userService.getUser(id).subscribe(function (response) {
            if (response.user) {
                console.log(response);
                _this.user = response.user;
                if (response.following && response.following._id) {
                    _this.following = true;
                }
                else {
                    _this.following = false;
                }
                if (response.followed && response.followed._id) {
                    _this.followed = true;
                }
                else {
                    _this.followed = false;
                }
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            console.log(error);
            _this._router.navigate(['/perfil', _this.identity._id]);
        });
    };
    ProfileComponent.prototype.getCounters = function (id) {
        var _this = this;
        this._userService.getCounters(id).subscribe(function (response) {
            _this.stats = response;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.followUser = function (followed) {
        var _this = this;
        var follow = new __WEBPACK_IMPORTED_MODULE_2__models_follow__["a" /* Follow */]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(function (response) {
            _this.following = true;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.unfollowUser = function (followed) {
        var _this = this;
        this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            _this.following = false;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.mouseEnter = function (user_id) {
        this.followUserOver = user_id;
    };
    ProfileComponent.prototype.mouseLeave = function () {
        this.followUserOver = 0;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"publications\">\r\n\t\t<div *ngFor=\"let publication of publications\" class=\"item-publication\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + publication.user.image }}\" *ngIf=\"publication.user.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!publication.user.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<span class=\"user-name\">\r\n\t\t\t\t\t\t\t{{publication.user.name + ' ' + publication.user.surname }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t<span class=\"date\">\r\n\t\t\t\t\t\t\t{{ (publication.created_at | amFromUnix) | amLocale:'es' | amTimeAgo }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<h4 class=\"publication-text pull-left\">\r\n\t\t\t\t\t\t{{publication.text}}\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12 text-center\" *ngIf=\"publications && publications.length\">\r\n\t\t<p>\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"viewMore()\" *ngIf=\"!noMore\">\r\n\t\t\t\tVer más publicaciones de usuarios\r\n\t\t\t</button>\r\n\t\t</p>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicationsComponent = (function () {
    function PublicationsComponent(_route, _router, _userService, _publicationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this.noMore = false;
        this.title = 'Publicaciones';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.page = 1;
    }
    PublicationsComponent.prototype.ngOnInit = function () {
        console.log('Publicaciones cargado');
        this.getPublications(this.user, this.page);
    };
    PublicationsComponent.prototype.getPublications = function (user, page, adding) {
        var _this = this;
        if (adding === void 0) { adding = false; }
        this._publicationService.getPublicationsUser(this.token, user, page).subscribe(function (response) {
            if (response.publications) {
                _this.total = response.total_items;
                _this.pages = response.pages;
                _this.itemsPerPage = response.items_per_page;
                if (!adding) {
                    _this.publications = response.publications;
                }
                else {
                    var arrayA = _this.publications;
                    var arrayB = response.publications;
                    _this.publications = arrayA.concat(arrayB);
                    $("html, body").animate({ scrollTop: $('html').prop("scrollHeight") }, 500);
                }
                if (page > _this.pages) {
                    //this._router.navigate(['/home']);
                }
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    PublicationsComponent.prototype.viewMore = function () {
        this.page += 1;
        if (this.page == this.pages) {
            this.noMore = true;
        }
        this.getPublications(this.user, this.page, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PublicationsComponent.prototype, "user", void 0);
    PublicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'publications',
            template: __webpack_require__("../../../../../src/app/components/publications/publications.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_publication_service__["a" /* PublicationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_publication_service__["a" /* PublicationService */]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\r\n\t#miformulario{\r\n    border: 3px solid rgba(64, 33, 201, 0.966);\r\n\tborder-radius: 20px;\r\n\tpadding: 20px;\r\n\twidth:500px;\r\n\tposition: absolute;\r\n\ttop:60%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n    background-color:rgb(43, 100, 35) \r\n}\r\n\r\ninput[type=submit]{\r\n\tpadding: 5px 15px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media (max-width: 600px){\r\n\t#miformulario{\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n\r\n</style>\r\n\r\n<div class=\"col-lg-5\" id=\"miformulario\">\r\n\t<h1 class=\"h1-strong\">{{title}}</h1>\r\n\t\r\n\t<div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n\t\tRegistro completado correctamente, <a [routerLink]=\"['/login']\">identificate aquí</a>\r\n\t</div>\r\n\r\n\t<div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n\t\tEl registro no ha podido completarse, quizas tu email o nickname ya esté en uso, intentalo de nuevo con otros datos\r\n\t</div>\r\n\r\n\t<form #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\" class=\"col-lg-12\">\r\n\t\t<p>\r\n\t\t\t<label>Nombre</label>\r\n\t\t\t<input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" required />\r\n\t\t\t<span *ngIf=\"!name.valid && name.touched\">\r\n\t\t\t\tEl nombre es obligatorio!!\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Apellidos</label>\r\n\t\t\t<input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\" required />\r\n\t\t\t<span *ngIf=\"!surname.valid && surname.touched\">\r\n\t\t\t\tLos apellidos son obligatorios!!\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Codigo Institucional</label>\r\n\t\t\t<input type=\"text\" name=\"code\" #code=\"ngModel\" [(ngModel)]=\"user.code\" class=\"form-control\" required pattern=\"[0-9]{8}\"/>\r\n\t\t\t<span *ngIf=\"!code.valid && code.touched\">\r\n\t\t\t\tSu codigo es incorrecto (codigo del carné)!!\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Nickname</label>\r\n\t\t\t<input type=\"text\" name=\"nick\" #nick=\"ngModel\" [(ngModel)]=\"user.nick\" class=\"form-control\" required />\r\n\t\t\t<span *ngIf=\"!nick.valid && nick.touched\">\r\n\t\t\t\tEl apodo es obligatorio!!\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Correo electrónico</label>\r\n\t\t\t<input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" required pattern=\"[a-z0-9._%+-]+@unmsm.edu.pe$\"/>\r\n\t\t\t<span *ngIf=\"!email.valid && email.touched\">\r\n\t\t\t\tIngrese su correo instucional ejemplo name.surname@unmsm.edu.pe\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\r\n\t\t<p>\r\n\t\t\t<label>Contraseña</label>\r\n\t\t\t<input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" required pattern=\"[a-zA-Z0-9._%+-]{6,20}\" />\r\n\t\t\t<span *ngIf=\"!password.valid && password.touched\">\r\n\t\t\t\tLa constraseña es obligatoria, minimo 6 caracteres!!\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<input type=\"submit\" value=\"{{title}}\" class=\"btn btn-success\" [disabled]=\"!registerForm.form.valid\" /> \r\n\t</form>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(_route, _router, _userService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.title = 'Registrarse';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]("", "", "", "", "", "", "", "ROLE_USER", "");
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log('Componente de registro cargando...');
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._userService.register(this.user).subscribe(function (response) {
            if (response.user && response.user._id) {
                //console.log(response.user);
                _this.status = 'success';
                form.reset();
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 sidebar-32\">\r\n<h1 class=\"h1-strong\">Hola, {{identity.name}}</h1>\r\n</div>\r\n<div id=\"user-card\" class=\"col-lg-4 panel panel-default pull-left\">\r\n\t<div class=\"avatar pull-left\">\r\n\t\t<img src=\"{{ url + 'get-image-user/' + identity.image }}\" *ngIf=\"identity.image\"/>\r\n\t\t<img src=\"assets/user.png\" *ngIf=\"!identity.image\"/>\r\n\t</div>\r\n\r\n\t<div class=\"name-surname pull-left\">\r\n\t\t<a [routerLink]=\"['/perfil',identity._id]\" class=\"username\">\r\n\t\t\t{{identity.name +' '+ identity.surname}}\r\n\t\t</a>\r\n\t\t<p class=\"nickname\">{{identity.nick}}</p>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t</div>\r\n\r\n\t<div class=\"clearfix\"></div>\r\n\r\n\t<div class=\"stats\" *ngIf=\"stats\">\r\n\t\t<div class=\"following-data\">\r\n\t\t\t<a [routerLink]=\"['/siguiendo',identity._id,1]\">\r\n\t\t\t\t<span class=\"label-stats\">\r\n\t\t\t\t\tSiguiendo\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"number-stats\">\r\n\t\t\t\t\t{{stats.following}}\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"following-data\">\r\n\t\t\t<a [routerLink]=\"['/seguidores',identity._id,1]\">\r\n\t\t\t\t<span class=\"label-stats\">\r\n\t\t\t\t\tSeguidores de {{identity.name}}\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"number-stats\">\r\n\t\t\t\t\t{{stats.followed}}\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"following-data\">\r\n\t\t\t<a [routerLink]=\"['/perfil',identity._id]\">\r\n\t\t\t\t<span class=\"label-stats\">\r\n\t\t\t\t\tPublicaciones realizadas\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"number-stats\">\r\n\t\t\t\t\t{{stats.publications}}\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--formulario de publicaciones-->\r\n<div id=\"new-publication\" class=\"col-lg-4 pull-left panel panel-default\">\r\n\t\r\n\t<div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n\t\tPublicación enviada \r\n\t</div>\r\n\t<div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n\t\tPublicación no enviada \r\n\t</div>\r\n\r\n\t<form #newPubForm=\"ngForm\" (ngSubmit)=\"onSubmit(newPubForm, $event);\" class=\"col-lg-10\">\r\n\t\t<p>\r\n\t\t\t<label>¿Que deseas publicar?</label>\r\n\t\t\t<textarea name=\"text\" #text=\"ngModel\" [(ngModel)]=\"publication.text\" class=\"form-control\" required></textarea>\r\n\t\t\t<span *ngIf=\"!text.valid && text.touched\">\r\n\t\t\t\tEl texto es obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Sube una foto</label>\r\n\t\t\t<input type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n\t\t</p>\r\n\r\n\t\t<input type=\"submit\" value=\"Enviar\" class=\"btn btn-success\" [disabled]=\"!newPubForm.form.valid\" />\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_publication__ = __webpack_require__("../../../../../src/app/models/publication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidebarComponent = (function () {
    function SidebarComponent(_userService, _publicationService, _uploadService, _route, _router) {
        this._userService = _userService;
        this._publicationService = _publicationService;
        this._uploadService = _uploadService;
        this._route = _route;
        this._router = _router;
        // Output
        this.sended = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.stats = this._userService.getStats();
        this.url = __WEBPACK_IMPORTED_MODULE_3__services_global__["a" /* GLOBAL */].url;
        this.publication = new __WEBPACK_IMPORTED_MODULE_4__models_publication__["a" /* Publication */]("", "", "", "", this.identity._id);
    }
    SidebarComponent.prototype.ngOnInit = function () {
        console.log("sidebar.component ha sido cargado!!");
    };
    SidebarComponent.prototype.onSubmit = function (form, $event) {
        var _this = this;
        this._publicationService.addPublication(this.token, this.publication).subscribe(function (response) {
            if (response.publication) {
                //this.publication = response.publication;
                if (_this.filesToUpload && _this.filesToUpload.length) {
                    //Subir imagen
                    _this._uploadService.makeFileRequest(_this.url + 'upload-image-pub/' + response.publication._id, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this.status = 'success';
                        _this.publication.file = result.image;
                        form.reset();
                        _this._router.navigate(['/timeline']);
                        _this.sended.emit({ send: 'true' });
                    });
                }
                else {
                    _this.status = 'success';
                    form.reset();
                    _this._router.navigate(['/timeline']);
                    _this.sended.emit({ send: 'true' });
                }
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    SidebarComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    SidebarComponent.prototype.sendPublication = function (event) {
        this.sended.emit({ send: 'true' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "sended", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_publication_service__["a" /* PublicationService */], __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\r\n\t<h1 class=\"h1-strong\">\r\n\t\t{{title}}\r\n\t\t<button class=\"btn btn-success btn-sm\" (click)=\"refresh($event)\">Mostrar Publicaciones</button>\r\n\t</h1>\r\n\r\n\t<div id=\"publications\">\r\n\t\t<div *ngFor=\"let publication of publications\" class=\"item-publication\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + publication.user.image }}\" *ngIf=\"publication.user.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!publication.user.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<a [routerLink]=\"['/perfil',publication.user._id]\" class=\"user-name\">\r\n\t\t\t\t\t\t\t{{publication.user.name + ' ' + publication.user.surname }}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t<span class=\"date\">\r\n\t\t\t\t\t\t\t{{ (publication.created_at | amFromUnix) | amLocale:'es' | amTimeAgo }}\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\t<h4 class=\"publication-text pull-left\">\r\n\t\t\t\t\t\t{{publication.text}}\r\n\t\t\t\t\t</h4>\r\n\r\n\t\t\t\t\t<div class=\"pull-right\" *ngIf=\"publication.user._id == identity._id\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t<!-- Button HTML (to Trigger Modal) -->\r\n\t\t\t\t\t\t<a href=\"#myModal{{publication._id}}\" role=\"button\" class=\"btn btn-large btn-danger\" data-toggle=\"modal\" *ngIf=\"showImage != publication._id\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t \r\n\t\t\t\t\t\t<!-- Modal HTML -->\r\n\t\t\t\t\t\t<div id=\"myModal{{publication._id}}\" class=\"modal fade\">\r\n\t\t\t\t\t\t    <div class=\"modal-dialog\">\r\n\t\t\t\t\t\t        <div class=\"modal-content\">\r\n\t\t\t\t\t\t            <div class=\"modal-header\">\r\n\t\t\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t\t\t\t                <h4 class=\"modal-title\">\r\n\t\t\t\t\t\t                \t¿Seguro que quieres eliminar?\r\n\t\t\t\t\t\t                </h4>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t            <div class=\"modal-body\">\r\n\t\t\t\t\t\t                <p>Al borrar no se recupera</p>\r\n\t\t\t\t\t\t                <p>{{publication.text}}</p>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t            <div class=\"modal-footer\">\r\n\t\t\t\t\t\t                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancelar</button>\r\n\t\t\t\t\t\t                <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePublication(publication._id)\" data-dismiss=\"modal\"> \r\n\t\t\t\t\t\t                \tBorrar \r\n\t\t\t\t\t\t                </button>\r\n\t\t\t\t\t\t            </div>\r\n\t\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"pull-right\" *ngIf=\"publication.file != 'null' \">\r\n\t\t\t\t\t\t<button class=\"btn btn-warning pull-right\" (click)=\"showThisImage(publication._id)\" *ngIf=\"showImage != publication._id\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-picture\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button class=\"btn btn-danger pull-right\" (click)=\"hideThisImage(publication._id)\" *ngIf=\"showImage == publication._id\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove-circle\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-12\" *ngIf=\"publication.file != 'null' && showImage == publication._id\">\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t<img src=\"{{ url + 'get-image-pub/' + publication.file}}\" class=\"col-lg-12\"/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"col-lg-12 text-center\" *ngIf=\"publications && publications.length\">\r\n\t\t<p>\r\n\t\t\t<button class=\"btn btn-success\" (click)=\"viewMore()\" *ngIf=\"!noMore\">\r\n\t\t\t\tVer más publicaciones\r\n\t\t\t</button>\r\n\t\t</p>\r\n\t</div>\r\n</div>\r\n\r\n<sidebar (sended)=\"refresh($event)\"></sidebar>\r\n\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/timeline/timeline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_publication_service__ = __webpack_require__("../../../../../src/app/services/publication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TimelineComponent = (function () {
    function TimelineComponent(_route, _router, _userService, _publicationService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._publicationService = _publicationService;
        this.noMore = false;
        this.title = 'Publicaciones';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_2__services_global__["a" /* GLOBAL */].url;
        this.page = 1;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        console.log('timeline.component cargado correctamente!!');
        this.getPublications(this.page);
    };
    TimelineComponent.prototype.getPublications = function (page, adding) {
        var _this = this;
        if (adding === void 0) { adding = false; }
        this._publicationService.getPublications(this.token, page).subscribe(function (response) {
            if (response.publications) {
                _this.total = response.total_items;
                _this.pages = response.pages;
                _this.itemsPerPage = response.items_per_page;
                if (!adding) {
                    _this.publications = response.publications;
                }
                else {
                    var arrayA = _this.publications;
                    var arrayB = response.publications;
                    _this.publications = arrayA.concat(arrayB);
                    $("html, body").animate({ scrollTop: $('body').prop("scrollHeight") }, 500);
                }
                if (page > _this.pages) {
                    //this._router.navigate(['/home']);
                }
            }
            else {
                _this.status = 'error';
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    TimelineComponent.prototype.viewMore = function () {
        this.page += 1;
        if (this.page == this.pages) {
            this.noMore = true;
        }
        this.getPublications(this.page, true);
    };
    TimelineComponent.prototype.refresh = function (event) {
        if (event === void 0) { event = null; }
        this.getPublications(1);
    };
    TimelineComponent.prototype.showThisImage = function (id) {
        this.showImage = id;
    };
    TimelineComponent.prototype.hideThisImage = function (id) {
        this.showImage = 0;
    };
    TimelineComponent.prototype.deletePublication = function (id) {
        var _this = this;
        this._publicationService.deletePublication(this.token, id).subscribe(function (response) {
            _this.refresh();
        }, function (error) {
            console.log(error);
        });
    };
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',
            template: __webpack_require__("../../../../../src/app/components/timeline/timeline.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_publication_service__["a" /* PublicationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_publication_service__["a" /* PublicationService */]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5\">\r\n\t<h1 class=\"h1-strong\">{{title}}</h1>\r\n\r\n\t<div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n\t\tTus datos se actualizaron\r\n\t</div>\r\n\r\n\t<div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n\t\tNo se pudo actualizar datos\r\n\t</div>\r\n\r\n\t<form #userEditForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"col-lg-12\">\r\n\t\t<p>\r\n\t\t\t<label>Nombre</label>\r\n\t\t\t<input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" required class=\"form-control\"/>\r\n\t\t\t<span *ngIf=\"!name.value && name.touched\">\r\n\t\t\t\tNombre obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Apellidos</label>\r\n\t\t\t<input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" required class=\"form-control\"/>\r\n\t\t\t<span *ngIf=\"!surname.value && surname.touched\">\r\n\t\t\t\tApellido  obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Nick</label>\r\n\t\t\t<input type=\"text\" name=\"nick\" #nick=\"ngModel\" [(ngModel)]=\"user.nick\" required class=\"form-control\"/>\r\n\t\t\t<span *ngIf=\"!nick.value && nick.touched\">\r\n\t\t\t\tNick obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Correo electronico</label>\r\n\t\t\t<input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" required pattern=\"[a-z0-9._%+-]+@unmsm.edu.pe$\" class=\"form-control\"/>\r\n\t\t\t<span *ngIf=\"!email.value && email.touched\">\r\n\t\t\t\tEmail obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<div class=\"user-image-for-edit\" *ngIf=\"user.image\">\r\n\t\t\t<img src=\"{{ url + 'get-image-user/' + user.image }}\" />\r\n\t\t</div>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Subir Imagen</label>\r\n\t\t\t<input type=\"file\" placeholder=\"Subir imagen\" (change)=\"fileChangeEvent($event)\"/>\r\n\t\t</p>\r\n\r\n\t\t<input type=\"submit\" value=\"{{title}}\" class=\"btn btn-danger\" [disabled]=\"!userEditForm.form.valid\" />\r\n\t</form>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = (function () {
    function UserEditComponent(_route, _router, _userService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = "Actualizar datos de usuario ";
        this.user = this._userService.getIdentity();
        this.identity = this.user;
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_4__services_global__["a" /* GLOBAL */].url;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        console.log(this.user);
        console.log('user-edit.component se ha cargado!!');
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.user);
        this._userService.updateUser(this.user).subscribe(function (response) {
            if (!response.user) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                localStorage.setItem('identity', JSON.stringify(_this.user));
                _this.identity = _this.user;
                // SUBIDA DE IMAGEN DE USUARIO
                _this._uploadService.makeFileRequest(_this.url + 'upload-image-user/' + _this.user._id, [], _this.filesToUpload, _this.token, 'image')
                    .then(function (result) {
                    _this.user.image = result.user.image;
                    localStorage.setItem('identity', JSON.stringify(_this.user));
                });
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    UserEditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-edit',
            template: __webpack_require__("../../../../../src/app/components/user-edit/user-edit.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-8\">\r\n\t<h1 class=\"h1-strong\">{{title}}</h1>\r\n\r\n\t<div class=\"people\">\r\n\r\n\t\t<!--LISTADO-->\r\n\t\t<div *ngFor=\"let user of users\" class=\"item-user\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + user.image }}\" *ngIf=\"user.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!user.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"user-name pull-left\">\r\n\t\t\t\t\t\t<p class=\"name-surname\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/perfil',user._id]\">\r\n\t\t\t\t\t\t\t\t{{user.name + ' ' + user.surname}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class=\"nickname\">{{user.nick}}</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- SEGUIR/DEJAR DE SEGUIR -->\r\n\t\t\t\t\t<div class=\"pull-right\" *ngIf=\"user._id != identity._id\">\r\n\t\t\t\t\t\t<button class=\"btn btn-success\" *ngIf=\"follows.indexOf(user._id) < 0\"\r\n\t\t\t\t\t\t(click)=\"followUser(user._id)\">\r\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\tSeguir a este usuario\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" \r\n\t\t\t\t\t\t*ngIf=\"follows.indexOf(user._id) >= 0\"\r\n\t\t\t\t\t\t(mouseenter)=\"mouseEnter(user._id)\"\r\n\t\t\t\t\t\t(mouseleave)=\"mouseLeave(user._id)\"\r\n\t\t\t\t\t\t(click)=\"unfollowUser(user._id)\"\r\n\t\t\t\t\t\t[class.btn-danger]=\"user._id == followUserOver\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span *ngIf=\"user._id == followUserOver; else following\">\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-minus-sign\"></span>\r\n\t\t\t\t\t\t\t\tDejar de seguir a este usuario\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<ng-template #following>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ok-sign\"></span>\r\n\t\t\t\t\t\t\t\tSiguiendo\r\n\t\t\t\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!--PAGINACION-->\r\n\t\t<ul class=\"pagination pull-right\">\r\n\t\t\t<li *ngIf=\"page > 1\"><a [routerLink]=\"['/gente', prev_page]\">Anterior</a></li>\r\n\t\t\t<li *ngIf=\"pages != page\"><a [routerLink]=\"['/gente', next_page]\">Siguiente</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<sidebar></sidebar>\r\n\r\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_follow__ = __webpack_require__("../../../../../src/app/models/follow.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = (function () {
    function UsersComponent(_route, _router, _userService, _followService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._followService = _followService;
        this.title = 'Usuarios';
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }
    UsersComponent.prototype.ngOnInit = function () {
        console.log("users.component ha sido cargado");
        this.actualPage();
    };
    UsersComponent.prototype.actualPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var page = +params['page'];
            _this.page = page;
            if (!params['page']) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page <= 0) {
                    _this.prev_page = 1;
                }
            }
            // devolver listado de usuarios
            _this.getUsers(page);
        });
    };
    UsersComponent.prototype.getUsers = function (page) {
        var _this = this;
        this._userService.getUsers(page).subscribe(function (response) {
            if (!response.users) {
                _this.status = 'error';
            }
            else {
                _this.total = response.total;
                _this.users = response.users;
                _this.pages = response.pages;
                _this.follows = response.users_following;
                if (page > _this.pages) {
                    _this._router.navigate(['/gente', 1]);
                }
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    UsersComponent.prototype.mouseEnter = function (user_id) {
        this.followUserOver = user_id;
    };
    UsersComponent.prototype.mouseLeave = function (user_id) {
        this.followUserOver = 0;
    };
    UsersComponent.prototype.followUser = function (followed) {
        var _this = this;
        var follow = new __WEBPACK_IMPORTED_MODULE_2__models_follow__["a" /* Follow */]('', this.identity._id, followed);
        this._followService.addFollow(this.token, follow).subscribe(function (response) {
            if (!response.follow) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.follows.push(followed);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    UsersComponent.prototype.unfollowUser = function (followed) {
        var _this = this;
        this._followService.deleteFollow(this.token, followed).subscribe(function (response) {
            var search = _this.follows.indexOf(followed);
            if (search != -1) {
                _this.follows.splice(search, 1);
            }
        }, function (error) {
            var errorMessage = error;
            console.log(errorMessage);
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'users',
            template: __webpack_require__("../../../../../src/app/components/users/users.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/components/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10\">\r\n\t<h3>{{title}}</h3>\r\n\r\n\t<div class=\"alert alert-success\" *ngIf=\"status == 'success'\">\r\n\t\tmensaje enviado <a [routerLink]=\"['/mensajes/enviados']\">tus mensajes enviados</a>\r\n\t</div>\r\n\r\n\t<div class=\"alert alert-danger\" *ngIf=\"status == 'error'\">\r\n\t\tMensaje no enviado\r\n\t</div>\r\n\r\n\t<form #formAdd=\"ngForm\" (ngSubmit)=\"onSubmit(formAdd)\">\r\n\t\t<p>\r\n\t\t\t<label>Enviar a:</label>\r\n\t\t\t<!--listado de seguidores-->\r\n\t\t\t<select *ngIf=\"follows\" name=\"receiver\" #receiver=\"ngModel\" [(ngModel)]=\"message.receiver\" class=\"form-control\" required>\r\n\t\t\t\t<option *ngFor=\"let follow of follows\" value=\"{{follow.user._id}}\">\r\n\t\t\t\t\t{{follow.user.name + ' ' + follow.user.surname + ' ('+ follow.user.nick + ')'}}\r\n\t\t\t</select>\r\n\t\t</p>\r\n\r\n\t\t<p>\r\n\t\t\t<label>Mensaje</label>\r\n\t\t\t<textarea name=\"text\" #text=\"ngModel\" [(ngModel)]=\"message.text\" class=\"form-control\" required></textarea>\r\n\t\t\t<span *ngIf=\"!text.valid && text.touched\">\r\n\t\t\t\tEl mensaje es obligatorio\r\n\t\t\t</span>\r\n\t\t</p>\r\n\r\n\t\t<input type=\"submit\" value=\"{{title}}\" class=\"btn btn-success\" />\r\n\t</form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/components/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_message__ = __webpack_require__("../../../../../src/app/models/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddComponent = (function () {
    function AddComponent(_route, _router, _followService, _messageService, _userService) {
        this._route = _route;
        this._router = _router;
        this._followService = _followService;
        this._messageService = _messageService;
        this._userService = _userService;
        this.title = 'Escribir mensaje';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_6__services_global__["a" /* GLOBAL */].url;
        this.message = new __WEBPACK_IMPORTED_MODULE_2__models_message__["a" /* Message */]('', '', '', '', this.identity._id, '');
    }
    AddComponent.prototype.ngOnInit = function () {
        console.log('Componente añadir');
        this.getMyFollows();
    };
    AddComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._messageService.addMessage(this.token, this.message).subscribe(function (response) {
            if (response.message) {
                _this.status = 'success';
                form.reset();
            }
        }, function (error) {
            _this.status = 'error';
            console.log(error);
        });
    };
    AddComponent.prototype.getMyFollows = function () {
        var _this = this;
        this._followService.getMyFollows(this.token).subscribe(function (response) {
            _this.follows = response.follows;
        }, function (error) {
            console.log(error);
        });
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add',
            template: __webpack_require__("../../../../../src/app/messages/components/add/add.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_follow_service__["a" /* FollowService */], __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_follow_service__["a" /* FollowService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4\">\r\n\t<h3>{{title}}</h3>\r\n\t<div class=\"sidebar-admin\">\r\n\t\t<ul class=\"nav nav-pills  nav-pills-stacked\">\r\n\t\t\t<li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n\t\t\t\t<a [routerLink]=\"['recibidos']\">Mensajes recibidos</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n\t\t\t\t<a [routerLink]=\"['enviados']\">Mensajes enviados</a>\r\n\t\t\t</li>\r\n\t\t\t<li role=\"presentation\" [routerLinkActive]=\"['active']\">\r\n\t\t\t\t\t<a [routerLink]=\"['enviar']\">Escribir mensaje</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<img width=\"400px\" height=\"500px\" src=\"https://upload.wikimedia.org/wikipedia/commons/3/3a/UNMSM_coatofarms_seal.svg\" alt=\"\">\r\n</div>\r\n\r\n<div class=\"col-lg-8\">\r\n\t\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.title = 'Mensajeria';
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log('Componente maun cargando');
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main',
            template: __webpack_require__("../../../../../src/app/messages/components/main/main.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/components/received/received.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10\">\r\n\t<h3>{{title}}</h3>\r\n\r\n\t<!--listado de mensajes recibidos-->\r\n\t<div class=\"people\" *ngIf=\"messages\">\r\n\r\n\t\t<!--LISTADO-->\r\n\t\t<div *ngFor=\"let message of messages\" class=\"item-user\">\r\n\t\t\t<div class=\"panel panel-default\" *ngIf=\"message.emitter\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + message.emitter.image }}\" *ngIf=\"message.emitter.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!message.emitter.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"user-name pull-left\">\r\n\t\t\t\t\t\t<p class=\"name-surname\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/perfil',message.emitter._id]\">\r\n\t\t\t\t\t\t\t\t{{message.emitter.name + ' ' + message.emitter.surname}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"nickname\">{{message.emitter.nick}}</span>\r\n\t\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"date nickname\">\r\n\t\t\t\t\t\t\t\t{{ (message.created_at | amFromUnix) | amLocale:'es' | amTimeAgo }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t{{message.text}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!--PAGINACION-->\r\n\t\t<ul class=\"pagination pull-right\">\r\n\t\t\t<li *ngIf=\"page > 1\"><a [routerLink]=\"['/mensajes/recibidos', prev_page]\">Anterior</a></li>\r\n\t\t\t<li *ngIf=\"pages != page\"><a [routerLink]=\"['/mensajes/recibidos', next_page]\">Siguiente</a></li>\r\n\t\t</ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/components/received/received.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReceivedComponent = (function () {
    function ReceivedComponent(_route, _router, _followService, _messageService, _userService) {
        this._route = _route;
        this._router = _router;
        this._followService = _followService;
        this._messageService = _messageService;
        this._userService = _userService;
        this.title = 'Mensajes recibidos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
    }
    ReceivedComponent.prototype.ngOnInit = function () {
        this.actualPage();
    };
    ReceivedComponent.prototype.actualPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var page = +params['page'];
            if (!params['page']) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page <= 0) {
                    _this.prev_page = 1;
                }
            }
            _this.page = page;
            console.log(_this.page);
            // devolver listado de usuarios
            _this.getMessages(_this.token, _this.page);
        });
    };
    ReceivedComponent.prototype.getMessages = function (token, page) {
        var _this = this;
        this._messageService.getMyMessages(token, page).subscribe(function (response) {
            if (!response.messages) {
            }
            else {
                _this.messages = response.messages;
                _this.total = response.total;
                _this.pages = response.pages;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ReceivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'received',
            template: __webpack_require__("../../../../../src/app/messages/components/received/received.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], ReceivedComponent);
    return ReceivedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/components/sended/sended.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-10\">\r\n\t<h3>{{title}}</h3>\r\n\r\n\t<!--listado de mensajes enviados-->\r\n\t<div class=\"people\" *ngIf=\"messages\">\r\n\r\n\t\t<!--LISTADO-->\r\n\t\t<div *ngFor=\"let message of messages\" class=\"item-user\">\r\n\t\t\t<div class=\"panel panel-default\" *ngIf=\"message.emitter\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"image-user pull-left\">\r\n\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<img src=\"{{ url +'get-image-user/' + message.emitter.image }}\" *ngIf=\"message.emitter.image\"/>\r\n\t\t\t\t\t\t\t<img src=\"assets/user.png\" class=\"avatar-default\" *ngIf=\"!message.emitter.image\"/>\r\n\t\t\t\t\t\t</a>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"user-name pull-left\">\r\n\t\t\t\t\t\t<p class=\"name-surname\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/perfil',message.emitter._id]\">\r\n\t\t\t\t\t\t\t\t{{message.emitter.name + ' ' + message.emitter.surname}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"nickname\">{{message.emitter.nick}}</span>\r\n\t\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"date nickname\">\r\n\t\t\t\t\t\t\t\t{{ (message.created_at | amFromUnix) | amLocale:'es' | amTimeAgo }}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t&nbsp;|&nbsp;\r\n\t\t\t\t\t\t\t<span class=\"\">\r\n\t\t\t\t\t\t\t\tEnviado a <a [routerLink]=\"['/perfil', message.receiver._id]\">{{ message.receiver.name + ' ' + message.receiver.surname }}</a>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t{{message.text}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!--PAGINACION-->\r\n\t\t<ul class=\"pagination pull-right\">\r\n\t\t\t<li *ngIf=\"page > 1\"><a [routerLink]=\"['/mensajes/enviados', prev_page]\">Anterior</a></li>\r\n\t\t\t<li *ngIf=\"pages != page\"><a [routerLink]=\"['/mensajes/enviados', next_page]\">Siguiente</a></li>\r\n\t\t</ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/components/sended/sended.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_follow_service__ = __webpack_require__("../../../../../src/app/services/follow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SendedComponent = (function () {
    function SendedComponent(_route, _router, _followService, _messageService, _userService) {
        this._route = _route;
        this._router = _router;
        this._followService = _followService;
        this._messageService = _messageService;
        this._userService = _userService;
        this.title = 'Mensajes enviados';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = __WEBPACK_IMPORTED_MODULE_5__services_global__["a" /* GLOBAL */].url;
    }
    SendedComponent.prototype.ngOnInit = function () {
        console.log('sended.component cargado...');
        this.actualPage();
    };
    SendedComponent.prototype.actualPage = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var page = +params['page'];
            if (!params['page']) {
                page = 1;
            }
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page <= 0) {
                    _this.prev_page = 1;
                }
            }
            _this.page = page;
            // devolver listado de usuarios
            _this.getMessages(_this.token, _this.page);
        });
    };
    SendedComponent.prototype.getMessages = function (token, page) {
        var _this = this;
        this._messageService.getEmmitMessages(token, page).subscribe(function (response) {
            if (!response.messages) {
            }
            else {
                _this.messages = response.messages;
                _this.total = response.total;
                _this.pages = response.pages;
            }
        }, function (error) {
            console.log(error);
        });
    };
    SendedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sended',
            template: __webpack_require__("../../../../../src/app/messages/components/sended/sended.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_follow_service__["a" /* FollowService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], SendedComponent);
    return SendedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__ = __webpack_require__("../../../../../src/app/messages/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_add_add_component__ = __webpack_require__("../../../../../src/app/messages/components/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_received_received_component__ = __webpack_require__("../../../../../src/app/messages/components/received/received.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sended_sended_component__ = __webpack_require__("../../../../../src/app/messages/components/sended/sended.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_guard__ = __webpack_require__("../../../../../src/app/services/user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//componentes





var messagesRoutes = [
    {
        path: 'mensajes',
        component: __WEBPACK_IMPORTED_MODULE_2__components_main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', redirectTo: 'recibidos', pathMatch: 'full' },
            { path: 'enviar', component: __WEBPACK_IMPORTED_MODULE_3__components_add_add_component__["a" /* AddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_guard__["a" /* UserGuard */]] },
            { path: 'recibidos', component: __WEBPACK_IMPORTED_MODULE_4__components_received_received_component__["a" /* ReceivedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_guard__["a" /* UserGuard */]] },
            { path: 'recibidos/:page', component: __WEBPACK_IMPORTED_MODULE_4__components_received_received_component__["a" /* ReceivedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_guard__["a" /* UserGuard */]] },
            { path: 'enviados', component: __WEBPACK_IMPORTED_MODULE_5__components_sended_sended_component__["a" /* SendedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_guard__["a" /* UserGuard */]] },
            { path: 'enviados/:page', component: __WEBPACK_IMPORTED_MODULE_5__components_sended_sended_component__["a" /* SendedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_user_guard__["a" /* UserGuard */]] }
        ]
    }
];
var MessagesRoutingModule = (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(messagesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_routing_module__ = __webpack_require__("../../../../../src/app/messages/messages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__ = __webpack_require__("../../../../../src/app/messages/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_add_component__ = __webpack_require__("../../../../../src/app/messages/components/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_received_received_component__ = __webpack_require__("../../../../../src/app/messages/components/received/received.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sended_sended_component__ = __webpack_require__("../../../../../src/app/messages/components/sended/sended.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_guard__ = __webpack_require__("../../../../../src/app/services/user.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modulos




// Rutas

// Componentes




// Servicios


var MessagesModule = (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_received_received_component__["a" /* ReceivedComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_sended_sended_component__["a" /* SendedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__messages_routing_module__["a" /* MessagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_moment__["MomentModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_received_received_component__["a" /* ReceivedComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_sended_sended_component__["a" /* SendedComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__services_user_guard__["a" /* UserGuard */]
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/follow.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Follow; });
var Follow = (function () {
    function Follow(_id, user, followed) {
        this._id = _id;
        this.user = user;
        this.followed = followed;
    }
    return Follow;
}());



/***/ }),

/***/ "../../../../../src/app/models/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(_id, text, viewed, created_at, emitter, receiver) {
        this._id = _id;
        this.text = text;
        this.viewed = viewed;
        this.created_at = created_at;
        this.emitter = emitter;
        this.receiver = receiver;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/models/publication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publication; });
var Publication = (function () {
    function Publication(_id, text, file, created_at, user) {
        this._id = _id;
        this.text = text;
        this.file = file;
        this.created_at = created_at;
        this.user = user;
    }
    return Publication;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, name, surname, code, nick, email, password, role, image) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.code = code;
        this.nick = nick;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/services/follow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FollowService = (function () {
    function FollowService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
    }
    FollowService.prototype.addFollow = function (token, follow) {
        var params = JSON.stringify(follow);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post(this.url + 'follow', params, { headers: headers });
    };
    FollowService.prototype.deleteFollow = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.delete(this.url + 'follow/' + id, { headers: headers });
    };
    FollowService.prototype.getFollowing = function (token, userId, page) {
        if (userId === void 0) { userId = null; }
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        var url = this.url + 'following';
        if (userId != null) {
            url = this.url + 'following/' + userId + '/' + page;
        }
        return this._http.get(url, { headers: headers });
    };
    FollowService.prototype.getFollowed = function (token, userId, page) {
        if (userId === void 0) { userId = null; }
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        var url = this.url + 'followed';
        if (userId != null) {
            url = this.url + 'followed/' + userId + '/' + page;
        }
        return this._http.get(url, { headers: headers });
    };
    FollowService.prototype.getMyFollows = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get(this.url + 'get-my-follows/true', { headers: headers });
    };
    FollowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    //url: 'http://localhost:3800/api/'
    url: 'http://68.183.233.210:3800/api/'
};


/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
    }
    MessageService.prototype.addMessage = function (token, message) {
        var params = JSON.stringify(message);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post(this.url + 'message', params, { headers: headers });
    };
    MessageService.prototype.getMyMessages = function (token, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get(this.url + 'my-messages/' + page, { headers: headers });
    };
    MessageService.prototype.getEmmitMessages = function (token, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get(this.url + 'messages/' + page, { headers: headers });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/publication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationService = (function () {
    function PublicationService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
    }
    PublicationService.prototype.addPublication = function (token, publication) {
        var params = JSON.stringify(publication);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.post(this.url + 'publication', params, { headers: headers });
    };
    PublicationService.prototype.getPublications = function (token, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get(this.url + 'publications/' + page, { headers: headers });
    };
    PublicationService.prototype.getPublicationsUser = function (token, user_id, page) {
        if (page === void 0) { page = 1; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.get(this.url + 'publications-user/' + user_id + '/' + page, { headers: headers });
    };
    PublicationService.prototype.deletePublication = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', token);
        return this._http.delete(this.url + 'publication/' + id, { headers: headers });
    };
    PublicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = (function () {
    function UploadService() {
        this.url = __WEBPACK_IMPORTED_MODULE_1__global__["a" /* GLOBAL */].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = (function () {
    function UserGuard(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    UserGuard.prototype.canActivate = function () {
        var identity = this._userService.getIdentity();
        if (identity && (identity.role == 'ROLE_USER' || identity.role == 'ROLE_ADMIN')) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    UserGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/services/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.register = function (user) {
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'register', params, { headers: headers });
    };
    UserService.prototype.signup = function (user, gettoken) {
        if (gettoken === void 0) { gettoken = null; }
        if (gettoken != null) {
            user.gettoken = gettoken;
        }
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'login', params, { headers: headers });
    };
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService.prototype.getStats = function () {
        var stats = JSON.parse(localStorage.getItem('stats'));
        if (stats != "undefined") {
            this.stats = stats;
        }
        else {
            this.stats = null;
        }
        return this.stats;
    };
    UserService.prototype.getCounters = function (userId) {
        if (userId === void 0) { userId = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        if (userId != null) {
            return this._http.get(this.url + 'counters/' + userId, { headers: headers });
        }
        else {
            return this._http.get(this.url + 'counters', { headers: headers });
        }
    };
    UserService.prototype.updateUser = function (user) {
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.put(this.url + 'update-user/' + user._id, params, { headers: headers });
    };
    UserService.prototype.getUsers = function (page) {
        if (page === void 0) { page = null; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get(this.url + 'users/' + page, { headers: headers });
    };
    UserService.prototype.getUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json')
            .set('Authorization', this.getToken());
        return this._http.get(this.url + 'user/' + id, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
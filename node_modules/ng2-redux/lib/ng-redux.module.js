"use strict";
var core_1 = require('@angular/core');
var ng_redux_1 = require('./components/ng-redux');
var dev_tools_1 = require('./components/dev-tools');
var NgReduxModule = (function () {
    function NgReduxModule() {
    }
    NgReduxModule.forRoot = function () {
        return {
            ngModule: NgReduxModule,
            providers: provideRedux(),
        };
    };
    NgReduxModule.decorators = [
        { type: core_1.NgModule, args: [{},] },
    ];
    /** @nocollapse */
    NgReduxModule.ctorParameters = [];
    return NgReduxModule;
}());
exports.NgReduxModule = NgReduxModule;
;
function _ngReduxFactory() {
    return new ng_redux_1.NgRedux(null);
}
exports._ngReduxFactory = _ngReduxFactory;
function provideRedux() {
    return [
        { provide: ng_redux_1.NgRedux, useFactory: _ngReduxFactory },
        dev_tools_1.DevToolsExtension,
    ];
}
exports.provideRedux = provideRedux;
//# sourceMappingURL=ng-redux.module.js.map
"use strict";
var redux_1 = require('redux');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
require('rxjs/add/operator/filter');
require('rxjs/add/observable/from');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var shallow_equal_1 = require('../utils/shallow-equal');
var wrap_action_creators_1 = require('../utils/wrap-action-creators');
var type_checks_1 = require('../utils/type-checks');
var omit_1 = require('../utils/omit');
var invariant_1 = require('../utils/invariant');
var get_in_1 = require('../utils/get-in');
var VALID_SELECTORS = ['string', 'string[]', 'number', 'symbol', 'function'];
var ERROR_MESSAGE = "Expected selector to be one of:\n    " + VALID_SELECTORS.join(',') + ". Instead recieved %s";
var checkSelector = function (s) { return VALID_SELECTORS.indexOf(typeof s, 0) >= 0 ||
    Array.isArray(s); };
var NgRedux = (function () {
    /**
     * Creates an instance of NgRedux.
     *
     * The parameter is deprecated and left for backwards compatibility.
     * It doesn't do anything. It will be removed in a future major version.
     */
    function NgRedux(deprecated) {
        var _this = this;
        this._store = null;
        this._store$ = null;
        this.wrapActionCreators = function (actions) { return wrap_action_creators_1.default(actions); };
        /**
         * Map the specified actions to the target
         * @param {any} actions the actions to bind to the target
         * @returns {(target:any)=>void} a function to pass your target into
         */
        this.mapDispatchToTarget = function (actions) { return function (target) {
            return _this.updateTarget(target, {}, _this.getBoundActions(actions));
        }; };
        /**
         * Connect your component to your redux state.
         *
         * @param {*} mapStateToTarget connect will subscribe to Redux store
         * updates. Any time it updates, mapStateToTarget will be called. Its
         * result must be a plain object, and it will be merged into `target`.
         * If you have a component which simply triggers actions without needing
         * any state you can pass null to `mapStateToTarget`.
         *
         * @param {*} mapDispatchToTarget  Optional. If an object is passed,
         * each function inside it will be assumed to be a Redux action creator.
         * An object with the same function names, but bound to a Redux store,
         * will be merged onto `target`. If a function is passed, it will be given
         * `dispatch`. It’s up to you to return an object that somehow uses
         * `dispatch` to bind action creators in your own way. (Tip: you may
         * use the
         * [`bindActionCreators()`]
         * (http://gaearon.github.io/redux/docs/api/bindActionCreators.html)
         * helper from Redux.).
         * @returns a function that accepts a target object to map the state
         * and/or dispatch onto, or a function that will recieve the result of
         * mapStateToTarget and mapDispatchToTarget as paramaters
         */
        this.connect = function (mapStateToTarget, mapDispatchToTarget) {
            var finalMapStateToTarget = mapStateToTarget
                || _this._defaultMapStateToTarget;
            invariant_1.invariant(type_checks_1.isFunction(finalMapStateToTarget), 'mapStateToTarget must be a Function. Instead received %s.', finalMapStateToTarget);
            var slice = _this.getStateSlice(_this._store.getState(), finalMapStateToTarget);
            var boundActionCreators = _this.getBoundActions(mapDispatchToTarget);
            return function (target) {
                invariant_1.invariant(type_checks_1.isFunction(target) || type_checks_1.isObject(target), 'The target parameter passed to connect must be a Function or' +
                    'a plain object.');
                // Initial update
                _this.updateTarget(target, slice, boundActionCreators);
                var unsubscribe = _this._store.subscribe(function () {
                    var nextSlice = _this.getStateSlice(_this._store.getState(), finalMapStateToTarget);
                    if (!shallow_equal_1.default(slice, nextSlice)) {
                        slice = nextSlice;
                        _this.updateTarget(target, slice, boundActionCreators);
                    }
                });
                return unsubscribe;
            };
        };
        /**
         * Get the current state of the application
         * @returns {RootState} the application state
         */
        this.getState = function () {
            return _this._store.getState();
        };
        /**
         * Subscribe to the Redux store changes
         *
         * @param {() => void} listener callback to invoke when the state is updated
         * @returns a function to unsubscribe
         */
        this.subscribe = function (listener) {
            return _this._store.subscribe(listener);
        };
        /**
        * Replaces the reducer currently used by the store to calculate the state.
        *
        * You might need this if your app implements code splitting and you want to
        * load some of the reducers dynamically. You might also need this if you
        * implement a hot reloading mechanism for Redux.
        *
        * @param nextReducer The reducer for the store to use instead.
        */
        this.replaceReducer = function (nextReducer) {
            return _this._store.replaceReducer(nextReducer);
        };
        /**
         * Dispatch an action to Redux
         */
        this.dispatch = function (action) {
            invariant_1.invariant(!!_this._store, 'Dispatch failed: did you forget to configure your store? ' +
                'https://github.com/angular-redux/ng2-redux/blob/master/' +
                'README.md#quick-start');
            return _this._store.dispatch(action);
        };
        this.getBoundActions = function (actions) {
            var finalMapDispatchToTarget = type_checks_1.isPlainObject(actions) ?
                wrap_action_creators_1.default(actions) :
                actions || _this._defaultMapDispatchToTarget;
            invariant_1.invariant(type_checks_1.isPlainObject(finalMapDispatchToTarget)
                || type_checks_1.isFunction(finalMapDispatchToTarget), 'mapDispatchToTarget must be a plain Object or a Function. ' +
                'Instead received % s.', finalMapDispatchToTarget);
            return finalMapDispatchToTarget(_this._store.dispatch);
        };
        NgRedux.instance = this;
        this._store$ = new BehaviorSubject_1.BehaviorSubject(null)
            .filter(function (n) { return n !== null; })
            .switchMap(function (n) {
            return Observable_1.Observable.from(n);
        });
    }
    /**
     * configures a Redux store and allows NgRedux to observe and dispatch
     * to it.
     *
     * This should only be called once for the lifetime of your app, for
     * example in the constructor of your root component.
     *
     * @param {Redux.Reducer<RootState>} reducer Your app's root reducer
     * @param {RootState} initState Your app's initial state
     * @param {Redux.Middleware[]} middleware Optional Redux middlewares
     * @param {Redux.StoreEnhancer<RootState>[]} Optional Redux store enhancers
     */
    NgRedux.prototype.configureStore = function (reducer, initState, middleware, enhancers) {
        if (middleware === void 0) { middleware = []; }
        if (enhancers === void 0) { enhancers = []; }
        invariant_1.invariant(!this._store, 'Store already configured!');
        // Workaround for Redux issue #1935 - remove once Redux 3.6.0 is
        // released.
        var reTypedCompose = redux_1.compose;
        var finalCreateStore = reTypedCompose.apply(void 0, [redux_1.applyMiddleware.apply(void 0, middleware)].concat(enhancers))(redux_1.createStore);
        var store = finalCreateStore(reducer, initState);
        this.setStore(store);
    };
    /**
     * Accepts a Redux store, then sets it in NgRedux and
     * allows NgRedux to observe and dispatch to it.
     *
     * This should only be called once for the lifetime of your app, for
     * example in the constructor of your root component. If configureStore
     * has been used this cannot be used.
     *
     * @param {Redux.Store} store Your app's store
     */
    NgRedux.prototype.provideStore = function (store) {
        invariant_1.invariant(!this._store, 'Store already configured!');
        this.setStore(store);
    };
    ;
    /**
     * Select a slice of state to expose as an observable.
     *
     * @template S
     * @param { PropertySelector |
     *  PathSelector |
     *  FunctionSelector<RootState, S>}
     * selector key or function to select a part of the state
     * @param { Comparator } [comparer] Optional
     * comparison function called to test if an item is distinct
     * from the previous item in the source.
     *
     * @returns {Observable<S>} an Observable that emits items from the
     * source Observable with distinct values.
     */
    NgRedux.prototype.select = function (selector, comparator) {
        invariant_1.invariant(checkSelector(selector), ERROR_MESSAGE, selector);
        var result;
        if (typeof selector === 'string' ||
            typeof selector === 'number' ||
            typeof selector === 'symbol') {
            result = this._store$
                .map(function (state) { return state[selector]; });
        }
        else if (Array.isArray(selector)) {
            result = this._store$
                .map(function (state) { return get_in_1.getIn(state, selector); });
        }
        else {
            result = this._store$
                .map(selector);
        }
        return result.distinctUntilChanged(comparator);
    };
    NgRedux.prototype.updateTarget = function (target, StateSlice, dispatch) {
        if (type_checks_1.isFunction(target)) {
            target(StateSlice, dispatch);
        }
        else {
            Object.assign(target, StateSlice, dispatch);
        }
    };
    NgRedux.prototype.getStateSlice = function (state, mapStateToScope) {
        var slice = mapStateToScope(state);
        invariant_1.invariant(type_checks_1.isPlainObject(slice), '`mapStateToScope` must return an object. Instead received %s.', slice);
        return slice;
    };
    /**
     * Helper function to set the store to NgRedux and
     * allow NgRedux to observe and dispatch to it.
     *
     * @param {Redux.Store} store The redux store
     */
    NgRedux.prototype.setStore = function (store) {
        this._store = store;
        this._store$.next(store);
        this._defaultMapStateToTarget = function () { return ({}); };
        this._defaultMapDispatchToTarget = function (dispatch) { return ({ dispatch: dispatch }); };
        var cleanedStore = omit_1.omit(store, [
            'dispatch',
            'getState',
            'subscribe',
            'replaceReducer']);
        Object.assign(this, cleanedStore);
    };
    /** @nocollapse */
    NgRedux.ctorParameters = [
        { type: core_1.ApplicationRef, decorators: [{ type: core_1.Optional },] },
    ];
    return NgRedux;
}());
exports.NgRedux = NgRedux;
;
//# sourceMappingURL=ng-redux.js.map
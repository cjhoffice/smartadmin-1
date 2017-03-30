import { ModuleWithProviders } from '@angular/core';
import { NgRedux } from './components/ng-redux';
export declare class NgReduxModule {
    static forRoot(): ModuleWithProviders;
}
export declare function _ngReduxFactory(): NgRedux<{}>;
export declare function provideRedux(): any[];

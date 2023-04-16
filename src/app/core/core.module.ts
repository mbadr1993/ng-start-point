import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpRequestInterceptor} from "./interceptors/http-request.interceptor";
import {SpinnerInterceptor} from "./interceptors/spinner.interceptor";
import {SpinnerComponent} from './components/spinner/spinner.component';


@NgModule({
    declarations: [
        SpinnerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SpinnerComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SpinnerInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
}

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorRequest } from './interceptor-request';
import { InterceptorError } from './interceptor-error';

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorRequest, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorError, multi: true }
];
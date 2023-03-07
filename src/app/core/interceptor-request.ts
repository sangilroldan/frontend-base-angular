
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

import { from, Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

/**
 * This will append jwt token for the http requests.
 *
 * @export
 * @class InterceptorRequest
 * @implements {HttpInterceptor}
 */
@Injectable()
export class InterceptorRequest implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(Auth.currentSession())
            .pipe(
                switchMap((auth: any) => {
                    let jwt = auth.accessToken.jwtToken;
                    let with_auth_request = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${jwt}`,
                            'x-api-key': 'CTMngmddoDq3YD0cog293B523DNpH5d6LZHQi5Xh',
                            'Access-Control-Allow-Origin': 'http://localhost:4200',
                            'Content-Type': 'application/json'
                        }
                    });

                    return next.handle(with_auth_request);
                }),
                catchError(() => {
                    return next.handle(request);
                })
            );
    }
}
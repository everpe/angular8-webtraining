import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectRequestHeaderInterceptor } from './inject-request-header.interceptor';

export const httpInterceptorProviders=[{
    provide: HTTP_INTERCEPTORS,
    useClass: InjectRequestHeaderInterceptor,
    multi:true,
    },
];
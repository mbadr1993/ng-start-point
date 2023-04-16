import {Injectable} from "@angular/core";
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../services/user.service";
import {AuthenticationHeaders} from "../../shared/contants/defines";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private urlsNotToUse: string[]
  constructor(private translateService: TranslateService, private userService: UserService) {
  }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const language = this.translateService.currentLang.toUpperCase();
    const userEmail = this.userService.getUserEmail();
    const accessToken = this.userService.getUserToken();

    const authReq = req.clone({
      headers: new HttpHeaders({
        ...AuthenticationHeaders,
        userEmail: userEmail,
        userToken: accessToken,
        language: language
      })
    });

    return next.handle(authReq);
  }
}

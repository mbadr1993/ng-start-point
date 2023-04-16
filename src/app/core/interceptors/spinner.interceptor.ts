import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {SpinnerService} from "../services/spinner.service";
import {finalize, Observable} from "rxjs";
import {APIConfig} from "../../../config/api-config";
import {Injectable} from "@angular/core";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const showFullSpinnerApis = this.checkApiFullSpinner(APIConfig);
    if (showFullSpinnerApis.includes(req.url)) {
      this.spinnerService.display(true);
      return next.handle(req).pipe(
        finalize(() => this.spinnerService.display(false))
      )
    } else {
      return next.handle(req)
    }
  }

  checkApiFullSpinner(obj: any) {
    const keys = Object.keys(obj)
    let urls: string[] = [];
    keys.forEach(key => {
      if (obj[key].showFullSpinner === true) {
        urls.push(obj[key].url.split('?')[0])
      }
    })
    return urls
  }
}

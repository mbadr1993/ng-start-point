import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SpinnerService} from "./core/services/spinner.service";
import {UserService} from "./core/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showSpinner: boolean;

  constructor(private translate: TranslateService, private userService: UserService, private spinnerService: SpinnerService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.spinnerService.status.subscribe(value => {
      this.showSpinner = value;
    })
  }
}

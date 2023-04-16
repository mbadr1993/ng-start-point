import {Injectable} from '@angular/core';
import {UserInterface} from "../../shared/interfaces/user.interface";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: UserInterface;

  constructor() {
  }

  setUserData(userToken:string) {
    const tokenData:UserInterface = jwtDecode(userToken);
    this.user = {...tokenData, userToken:userToken};
  }

  getUserId() {
    return this.user.id;
  }

  getUserName() {
    return this.user.name;
  }

  getUserEmail() {
    return this.user.email;
  }

  getUserRoles() {
    return this.user.roles;
  }

  getUserImageUrl() {
    return this.user.imageUrl;
  }

  getUserToken() {
    return this.user.userToken;
  }
}

import { Injectable, EventEmitter } from "@angular/core";
import { CanActivate } from "@angular/router";


@Injectable()
export class AuthService {
    isHeaderVisible= new EventEmitter<boolean>();
    checkCredentials(userName: string, password: string):boolean{
        console.log("Inside Service");
        if(userName === "libraryApp" && password === "libraryApp@books"){
            localStorage.setItem(userName, password);
            this.isHeaderVisible.emit(true);
            return true;
        }
        return false;
    }
}
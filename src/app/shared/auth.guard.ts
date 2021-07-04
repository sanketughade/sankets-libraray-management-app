import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
    allowIntoApp: boolean=false;
    constructor(private authService: AuthService, private router: Router, private activeRoute: ActivatedRoute) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log("Inside auth-guard");
        if (localStorage.getItem('libraryApp') != null) {
            this.allowIntoApp=true;
        }
        else{
            this.router.navigate(['/login'],{relativeTo: this.activeRoute});
        }
        return this.allowIntoApp;
    }
}
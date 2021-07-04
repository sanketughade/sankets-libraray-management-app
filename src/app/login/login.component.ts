import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName:string='';
 password:string='';
 areCredentialsValid: boolean=false;
 showWrongCredentialsMessage=false;
  constructor(private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: LocationStrategy,) { 
                history.pushState(null, '', window.location.href);  
                this.location.onPopState(() => {
                            history.pushState(null, '', window.location.href);
                });
                this.authService.isHeaderVisible.emit(false);
              }

  ngOnInit(): void {
  }

  onLogIn(){
    if(this.userName==='' || this.password===''){
      alert("Please enter into all fields provided.")
      return;
    }
    this.areCredentialsValid=this.authService.checkCredentials(this.userName, this.password);
    if(this.areCredentialsValid){
      this.router.navigate(['../books'],{relativeTo: this.activatedRoute});
    }
    else{
      this.router.navigate(['../login'], {relativeTo: this.activatedRoute});
      this.showWrongCredentialsMessage=true;
    }

  }

}

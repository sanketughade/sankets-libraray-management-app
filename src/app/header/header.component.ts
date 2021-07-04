import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isHeaderVisible: boolean=false;
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.isHeaderVisible.subscribe(
      (isHeaderVisibleRecieved: boolean)=>{
        this.isHeaderVisible=isHeaderVisibleRecieved;
      }
    )
  }

  onLogOut(){
    this.router.navigate(['/login']);
    this.authService.isHeaderVisible.emit(false);
    localStorage.clear();
  }

}

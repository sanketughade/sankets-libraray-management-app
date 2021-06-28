import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrNotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string){
    this.toastr.error(message, title,{
        enableHtml: true,
        closeButton: true,
        timeOut: 10000
    })
}
}
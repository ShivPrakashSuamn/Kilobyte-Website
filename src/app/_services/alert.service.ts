import { Injectable } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  constructor(private toast: NgToastService) { }

  showSuccess(msg: any) {
    this.toast.success({ detail: "SUCCESS", summary: msg });
  }

  showError(msg: any) {
    this.toast.error({ detail: "ERROR", summary: msg });  // butten click remove toastre (sticky: true)
  }

  showInfo(msg: any) {
    this.toast.info({ detail: "INFO", summary: msg });
  }

  showWarning(msg: any) {
    this.toast.warning({ detail: "WARNING", summary: msg});
  }

  //show Toast on top center position
  showSuccessTopCenter(msg: any) {
    this.toast.success({ detail: "SUCCESS", summary: msg, position: 'topCenter' });
  }

  //show Toast on bottom center position
  showErrorBottonCenter(msg: any) {
    this.toast.error({ detail: "ERROR", summary: msg, sticky: true, position: 'bottomRight' });
  }
  // constructor(private toastr: ToastrService) { }

  // success(msg:any){
  //   this.toastr.success('Success!',msg)
  // }
  // error(msg:any){
  //   this.toastr.error('Error!',msg)
  // }
  // warning(msg:any){
  //   this.toastr.warning('Warning!',msg)
  // }
  // info(msg:any){
  //   this.toastr.info('Info!',msg)
  // } 

}

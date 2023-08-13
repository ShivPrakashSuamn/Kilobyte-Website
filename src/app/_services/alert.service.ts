import { Injectable } from '@angular/core';
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
    this.toast.error({ detail: "ERROR", summary: msg });
  }

  showInfo(msg: any) {
    this.toast.info({ detail: "INFO", summary: msg });
  }

  showWarning(msg: any) {
    this.toast.warning({ detail: "WARNING", summary: msg });
  }

}

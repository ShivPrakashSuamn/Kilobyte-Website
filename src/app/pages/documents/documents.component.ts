import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  search: any = '';
  limit: any = 10;
  page: any = 1;
  totalRows: any = 0;
  totalPage: any = 0;
  data: any = [];
  id: any;
  loginUser: any;
  loginData: any;
  orderData: any = [];
  userAddress: any = [];
  // ------------------    life cycle of angular    ----------------------- ||

  constructor(private apiService: ApiService, private alertService: AlertService, private route: ActivatedRoute, private routr: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != undefined) {
      this.getData(this.id);
      this.loginUser = localStorage.getItem('loginUser');
      this.loginData = JSON.parse(this.loginUser);
    }
  }

  // -----------------     custome methods       ------------------------- ||

  getData(id: any) {
    let url = `/documents?clientId=${id}`; // 5f60e62502392e786fa4ae95&financialYear=2020-2021 -- use this Id get data 
    let headers = new HttpHeaders().set("authorization", ` ${localStorage.getItem('token')}`);
    this.apiService.get(url, headers).subscribe((data: any) => {
      if ( data.records.length > 0 ) {
        this.data = data.records;
        this.page = data._metaData.page;
        this.totalRows = data._metaData.total_count;
        this.totalPage = data._metaData.page_count;
        this.alertService.showSuccess('Data Get SuccessFully ');
      } else {
        this.alertService.showInfo('No Record Found ?');
      }
    });
  }
  pageChange(e: any) {    //  Page Change funcation   -----------------------------
    this.page = e;
    this.getData(this.id);
  }

  getTOFROM() {          //  pagination List  offset  ----------------------------
    let offset = (this.page - 1) * this.limit;
    let l = this.limit;
    let lastOffset = parseInt(l) + offset;
    return `${offset + 1} to ${lastOffset}`;
  }

  logout() {
    localStorage.clear();
    this.routr.navigate(['/login']);
  }
}

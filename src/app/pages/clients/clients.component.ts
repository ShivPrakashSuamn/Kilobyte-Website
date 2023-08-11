import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {


  search:any='';
  limit:any = 10;
  page:any = 1;
  totalRows:any = 0;
  totalPage:any = 0;
  order_by:any = 'id'; 
  order_type:any = 'desc';
  data: any = [];
  allOrders: any;
  displayedColumns: string[] = ['clientID', 'companyName', 'createdAt', 'name', 'action'];

  constructor(private apiService: ApiService, private alertService: AlertService, private route:Router ) {

  }
  ngOnInit(): void {
    this.getData();
  }

  getData() { 
    let url: string = `/users?pageNo=${this.page}&size=${this.limit}`;
    let headers = new HttpHeaders().set("authorization", `${localStorage.getItem('token')}`);
    this.apiService.get(url, headers).subscribe((data: any) => {
      console.log('----',data._metaData);
      if ( data.records.length > 0 ) {
        this.data = data.records;
        this.page = data._metaData.page;
        this.totalRows = data._metaData.total_count;
        this.totalPage = data._metaData.page_count;
      } else {
        this.alertService.showWarning('No Record Found ?');
      }
    }
    );
  }

  pageChange(e:any){    //  Page Change funcation   -----------------------------
    console.log('dfd',e);
    this.page = e;
    this.getData();
  }

  getTOFROM(){          //  pagination List  offset  ----------------------------
    console.log('dfd');
    let offset = (this.page -1 )*this.limit; 
    let l = this.limit;
    let lastOffset = parseInt(l)+offset; 
    return `${offset+1} to ${lastOffset}`;
  } 

  logout(){
    localStorage.clear();
    this.route.navigate(['/auth/login']);
  }
}

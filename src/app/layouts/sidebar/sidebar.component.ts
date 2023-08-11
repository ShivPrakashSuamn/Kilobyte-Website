import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  title:any;
  constructor( private router:Router, private route: ActivatedRoute ) {

  }
  ngOnInit(): void {
    this.title = this.route.snapshot.url[0].path;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}

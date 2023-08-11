import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

//  Ui material ---
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

//  Component   ---
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DocumentUploadedFileComponent } from './pages/document-uploaded-file/document-uploaded-file.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';
import { NgToastModule } from 'ng-angular-popup';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#380ce0',
  bgsPosition: POSITION.centerCenter,
  fgsColor: '#380ce0',
  pbColor: '#380ce0'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ClientsComponent,
    DocumentUploadedFileComponent,
    DocumentsComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgToastModule,

    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
    // material ---
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }

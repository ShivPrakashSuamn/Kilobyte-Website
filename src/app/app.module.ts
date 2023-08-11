import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//  Ui material ---
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

//  Component   ---
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DocumentUploadedFileComponent } from './pages/document-uploaded-file/document-uploaded-file.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';
import { NgToastModule } from 'ng-angular-popup';

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

    // material ---
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DocumentUploadedFileComponent } from './pages/document-uploaded-file/document-uploaded-file.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'users', component: ClientsComponent },
  { path: 'documents/:id', component: DocumentsComponent },
  { path: 'documentsFile/:id', component: DocumentUploadedFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

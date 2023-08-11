import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services/alert.service';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-document-uploaded-file',
  templateUrl: './document-uploaded-file.component.html',
  styleUrls: ['./document-uploaded-file.component.css']
})
export class DocumentUploadedFileComponent {
  uploadedForm: FormGroup;
  submitted: boolean = false;
  id:any;
  
  
  constructor(private fb: FormBuilder, private apiService: ApiService, private route: ActivatedRoute,  private router: Router, private alertService: AlertService) {
    this.uploadedForm = fb.group({
      file: ['https://hma-docs.s3.ap-south-1.amazonaws.com/6646b710-4e27-4728-9053-1d2103d3704f.pdf', Validators.required],
      preview: ['https://hma-docs.s3.ap-south-1.amazonaws.com/7af73066-3818-4866-bb56-ae475b59fcb0.png', Validators.required]
    });
  }

  submit() {
    this.submitted = true;
    if (this.uploadedForm.valid) {
      let url = `/documents/5f7feb5e28c6d9c2c8183f41`;
      let body ={ 
        "folder": [
        {
          "file": this.uploadedForm.value.file,
          "preview": this.uploadedForm.value.preview
        }
      ],
      "status": "COMPLETED"
    }
      let headers = new HttpHeaders().set("authorization", `${localStorage.getItem('token')}`);
      let options = { headers: headers };
      this.apiService.put(url, body, options).subscribe((data: any) => {
        if (data) {
          this.alertService.showSuccess(data.message);
        } else {
          this.alertService.showInfo('File Upload Failed ?');
        }
      });
    } else {
      this.alertService.showWarning('This is input Empty ?');
    }
  }

  backButton(){

  }
}

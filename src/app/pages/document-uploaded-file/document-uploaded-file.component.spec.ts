import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadedFileComponent } from './document-uploaded-file.component';

describe('DocumentUploadedFileComponent', () => {
  let component: DocumentUploadedFileComponent;
  let fixture: ComponentFixture<DocumentUploadedFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentUploadedFileComponent]
    });
    fixture = TestBed.createComponent(DocumentUploadedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

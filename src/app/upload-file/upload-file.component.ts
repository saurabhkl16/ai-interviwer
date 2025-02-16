import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  imports: [],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
  standalone: true,
})
export class UploadFileComponent {
  constructor() {}

  ngOnInit() {}

  // Handle file upload
  public async onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      console.log(file);
    } else {
      alert('Please upload a valid PDF file');
    }
  }
}

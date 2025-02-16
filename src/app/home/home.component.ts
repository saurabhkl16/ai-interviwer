import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavebarComponent } from '../navebar/navebar.component';
import { RouterModule } from '@angular/router';
import { ManuallyAddQuestionsComponent } from '../manually-add-questions/manually-add-questions.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    ManuallyAddQuestionsComponent,
    UploadFileComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  
  public show_content: boolean = true;
  public show_file_upload_content: boolean = false;
  public show_manually_add_content: boolean = false;
  public show_choose_topic__content: boolean = false;

  public handleUploadFileComponent() {
    this.show_content = false;
    this.show_manually_add_content = false;
    this.show_choose_topic__content = false;
    this.show_file_upload_content = true;
  }

  public handleManuallyComponent() {
    this.show_file_upload_content = false;
    this.show_content = false;
    this.show_choose_topic__content = false;
    this.show_manually_add_content = true;
  }

  public handleChooseTopicComponent() {
    this.show_file_upload_content = false;
    this.show_content = false;
    this.show_manually_add_content = false;
    this.show_choose_topic__content = true;
  }
}

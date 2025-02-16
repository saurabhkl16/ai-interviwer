import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavebarComponent } from './navebar/navebar.component';
import { CommonModule } from '@angular/common';
import { ManuallyAddQuestionsComponent } from './manually-add-questions/manually-add-questions.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    NavebarComponent,
    FooterComponent,
    RouterModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'ai-interviwer';
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

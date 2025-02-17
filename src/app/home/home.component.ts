import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManuallyAddQuestionsComponent } from '../manually-add-questions/manually-add-questions.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { CommonModule } from '@angular/common';
import { InterviewTopicsComponent } from '../interview-topics/interview-topics.component';
import { AppServiceService } from '../app-service.service';
import { MeetingComponent } from '../meeting/meeting.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    ManuallyAddQuestionsComponent,
    UploadFileComponent,
    InterviewTopicsComponent,
    CommonModule,
    MeetingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
})
export class HomeComponent {
  constructor(public service: AppServiceService) {}

  ngOnInit() {
    this.whenOpenHomeComponent();
  }

  public handleUploadFileComponent() {
    this.service.show_home_content.set(false);
    this.service.hideManuallyComponent();
    this.service.show_choose_topic_content.set(false);
    // this.service.show_file_upload_content.set(true);
    alert('Working on this feature , Comming soon..!');
    this.whenOpenHomeComponent();
  }

  public handleManuallyComponent() {
    this.service.show_file_upload_content.set(false);
    this.service.show_home_content.set(false);
    this.service.show_choose_topic_content.set(false);
    this.service.showManuallyComponent();
  }

  public handleChooseTopicComponent() {
    this.service.show_file_upload_content.set(false);
    this.service.show_home_content.set(false);
    this.service.hideManuallyComponent();
    this.service.show_choose_topic_content.set(true);
  }

  public whenOpenHomeComponent() {
    this.service.show_home_content.set(true);
    this.service.hideManuallyComponent();
    this.service.show_choose_topic_content.set(false);
    this.service.show_file_upload_content.set(false);
    this.service.stopInterview();
  }
}

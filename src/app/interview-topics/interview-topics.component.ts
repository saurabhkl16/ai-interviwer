import { Component } from '@angular/core';
import { QuestionService } from '../questions.service';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-interview-topics',
  imports: [],
  templateUrl: './interview-topics.component.html',
  styleUrl: './interview-topics.component.scss',
  standalone: true,
})
export class InterviewTopicsComponent {
  public interviewQuestions: any;

  constructor(
    private questionsService: QuestionService,
    private service: AppServiceService
  ) {}

  ngOnInit() {
    console.log(this.questionsService.getQuestions());
    this.interviewQuestions = this.questionsService.getQuestions();
  }

  public startInterview(topic: string) {
    console.log(this.interviewQuestions[topic]);
    this.service.questions.set([...this.interviewQuestions[topic]]);
    console.log(this.service.questions());
    this.service.show_choose_topic_content.set(false);
    this.service.startInterview();
  }
}

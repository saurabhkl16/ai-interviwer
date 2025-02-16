import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manually-add-questions',
  imports: [FormsModule, CommonModule],
  templateUrl: './manually-add-questions.component.html',
  styleUrl: './manually-add-questions.component.scss',
  standalone: true,
})
export class ManuallyAddQuestionsComponent {
  questions: string[] = [];
  newQuestion: string = '';
  currentQuestion: string | null = null;

  constructor() {}

  addQuestion() {
    if (this.newQuestion.trim()) {
      this.questions.push(this.newQuestion.trim());
      this.newQuestion = '';
    }
  }

  startInterview() {
    if (this.questions.length > 0) {
      this.askQuestion();
    }
  }

  askQuestion() {
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.currentQuestion = this.questions[randomIndex];
    this.speakQuestion(this.currentQuestion);
  }

  speakQuestion(text: string) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  }
}

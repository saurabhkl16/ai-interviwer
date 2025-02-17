import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-manually-add-questions',
  imports: [FormsModule, CommonModule],
  templateUrl: './manually-add-questions.component.html',
  styleUrl: './manually-add-questions.component.scss',
  standalone: true,
})
export class ManuallyAddQuestionsComponent {
  service = inject(AppServiceService); // Inject the service
  newQuestion = signal<string>(''); // Signal for input field
  questions = computed(() => this.service.questions()); // Computed signal for reactive updates
  currentQuestion = signal<string | null>(null); // Signal for the current question

  constructor() {
    // Debugging effect (logs whenever questions update)
    effect(() => console.log('Updated Questions:', this.questions()));
  }

  public addQuestion() {
    if (this.newQuestion().trim()) {
      this.service.questions.update((q) => [...q, this.newQuestion().trim()]); // Update signal
      this.newQuestion.set(''); // Clear input after adding
    }
  }

  startInterview() {
    if (this.questions().length > 0) {
      this.service.hideManuallyComponent();
      this.service.startInterview();
    }
  }
}

import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting',
  imports: [CommonModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.scss',
  standalone: true,
})
export class MeetingComponent {
  @ViewChild('studentVideo') studentVideo!: ElementRef<HTMLVideoElement>;
  private stream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  public service = inject(AppServiceService); // Inject the service
  public newQuestion = signal<string>(''); // Signal for input field
  public questions = computed(() => this.service.questions());
  // public currentQuestion = signal<string | null>(null); // Signal for the current question
  public cameraOn = false;
  public recording = false;
  public showCameraElement = false;
  public currentIndex = signal<number>(0);
  public currentQuestion = computed(() =>
    this.questions().length > 0 ? this.questions()[this.currentIndex()] : null
  );

  constructor() {}

  async toggleCamera() {
    if (!this.cameraOn) {
      this.showCameraElement = true;
      await setTimeout(() => {
        this.startCamera();
      });
    } else {
      this.showCameraElement = false;
      this.stopCamera();
    }
  }

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        // audio: true,
      });
      this.studentVideo.nativeElement.srcObject = this.stream;
      this.cameraOn = true;
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Error accessing camera. Please try again.');
    }
  }

  public stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.studentVideo.nativeElement.srcObject = null;
      this.stream = null;
      this.cameraOn = false;
    }
  }

  public async toggleRecording() {
    if (!this.recording) {
      this.showCameraElement = true;
      await this.startCamera();
      this.startRecording();
    } else {
      this.stopCamera();
      this.stopRecording();
      this.showCameraElement = true;
    }
  }

  public startRecording() {
    if (!this.stream) {
      alert('Please turn on the camera first.');
      return;
    }

    this.recordedChunks = [];
    this.mediaRecorder = new MediaRecorder(this.stream);
    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
      }
    };

    this.mediaRecorder.onstop = () => {
      this.autoDownloadRecording();
    };

    this.mediaRecorder.start();
    this.recording = true;
  }

  public stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.recording = false;
    }
  }

  public autoDownloadRecording() {
    const blob = new Blob(this.recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recorded-video.webm';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  startInterview() {
    if (this.questions().length > 0) {
      console.log('mee', this.questions());
      this.service.hideManuallyComponent();
      this.service.startInterview();
      // this.askQuestion();
      this.speakQuestion(this.currentQuestion());
    }
  }

  // askQuestion() {
  //   const questionsList = this.questions();
  //   if (questionsList.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * questionsList.length);
  //     this.currentQuestion.set(questionsList[randomIndex]);
  //     this.speakQuestion(this.currentQuestion());
  //   }
  // }

  speakQuestion(text: string | null) {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US';
      speech.rate = 1;
      speech.pitch = 5;
      window.speechSynthesis.speak(speech);
    }
  }

  nextQuestion() {
    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.set(this.currentIndex() + 1);
      this.speakQuestion(this.currentQuestion());
    } else {
      this.speakQuestion('thats all from my side, thank you');
    }
  }

  previousQuestion() {
    if (this.currentIndex() > 0) {
      this.currentIndex.set(this.currentIndex() - 1);
      this.speakQuestion(this.currentQuestion());
    }
  }

  public stopInterview() {
    this.currentIndex.set(0);
    this.service.stopInterview();
    this.autoDownloadRecording();
    this.service.show_home_content.set(true);
  }

  ngOnDestroy() {}
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  public questions = signal<string[]>([]);
  public startInterwalComp = signal<boolean>(false);
  public showManuallyAddContent = signal<boolean>(false);
  public show_home_content = signal<boolean>(false);
  public show_file_upload_content = signal<boolean>(false);
  public show_choose_topic_content = signal<boolean>(false);

  constructor() {}

  startInterview() {
    this.startInterwalComp.set(true);
  }

  stopInterview() {
    this.startInterwalComp.set(false);
  }

  showManuallyComponent() {
    this.showManuallyAddContent.set(true);
  }

  hideManuallyComponent() {
    this.showManuallyAddContent.set(false);
  }
}

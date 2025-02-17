import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ManuallyAddQuestionsComponent } from './manually-add-questions/manually-add-questions.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'upload-file', component: UploadFileComponent },
  { path: 'manually', component: ManuallyAddQuestionsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'interview-topics', component: AboutComponent },
];

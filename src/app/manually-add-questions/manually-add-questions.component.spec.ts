import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuallyAddQuestionsComponent } from './manually-add-questions.component';

describe('ManuallyAddQuestionsComponent', () => {
  let component: ManuallyAddQuestionsComponent;
  let fixture: ComponentFixture<ManuallyAddQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManuallyAddQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuallyAddQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

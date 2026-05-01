import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSlugComponent } from './project-slug.component';
import { provideRouter } from '@angular/router';

describe('ProjectSlugComponent', () => {
  let component: ProjectSlugComponent;
  let fixture: ComponentFixture<ProjectSlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSlugComponent],
      providers: [provideRouter([])] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewerComponentComponent } from './course-viewer-component.component';

describe('CourseViewerComponentComponent', () => {
  let component: CourseViewerComponentComponent;
  let fixture: ComponentFixture<CourseViewerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseViewerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseViewerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

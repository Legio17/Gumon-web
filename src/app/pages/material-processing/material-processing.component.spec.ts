import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProcessingComponent } from './material-processing.component';

describe('MaterialProcessingComponent', () => {
  let component: MaterialProcessingComponent;
  let fixture: ComponentFixture<MaterialProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

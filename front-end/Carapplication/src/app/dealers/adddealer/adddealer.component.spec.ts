import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddealerComponent } from './adddealer.component';

describe('AdddealerComponent', () => {
  let component: AdddealerComponent;
  let fixture: ComponentFixture<AdddealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubBodyComponent } from './pub-body.component';

describe('PubBodyComponent', () => {
  let component: PubBodyComponent;
  let fixture: ComponentFixture<PubBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

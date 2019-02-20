import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpNgFlashCardsComponent } from './jp-ng-flash-cards.component';

describe('JpNgFlashCardsComponent', () => {
  let component: JpNgFlashCardsComponent;
  let fixture: ComponentFixture<JpNgFlashCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpNgFlashCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpNgFlashCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuotationComponent } from './modal-quotation.component';

describe('ModalQuotationComponent', () => {
  let component: ModalQuotationComponent;
  let fixture: ComponentFixture<ModalQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

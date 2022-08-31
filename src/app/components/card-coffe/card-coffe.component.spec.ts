import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoffeComponent } from './card-coffe.component';

describe('CardCoffeComponent', () => {
  let component: CardCoffeComponent;
  let fixture: ComponentFixture<CardCoffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCoffeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

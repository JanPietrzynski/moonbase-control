import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    fixture.componentRef.setInput('card', {
      id: 'total-missions',
      title: 'Total Missions',
      value: 3,
      icon: 'rocket',
      lastUpdated: new Date('2026-07-24T08:15:00Z'),
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

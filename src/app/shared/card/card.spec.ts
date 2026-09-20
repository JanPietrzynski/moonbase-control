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

  it('should display the card title and value', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h3')?.textContent).toContain('Total Missions');
    expect(element.querySelector('span')?.textContent).toContain('3');
  });

  it('should emit the card id when the card is clicked', () => {
    const emitted: string[] = [];
    component.selected.subscribe((id) => emitted.push(id));
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    button.click();

    expect(emitted).toEqual(['total-missions']);
  });
});

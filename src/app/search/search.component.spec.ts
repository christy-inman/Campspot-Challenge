import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <button> with "Search Reservations"', () => {
    const buttonElement: HTMLElement = fixture.nativeElement
    const button = buttonElement.querySelector('button')
    expect(button?.textContent).toEqual('Search Reservations')
  })

  it('should click search button', () => {
    const buttonElement: HTMLElement = fixture.nativeElement
    const button = buttonElement.querySelector('button')

    fixture.detectChanges()
    button?.click()

    fixture.whenStable().then(() => {
      expect(component.search).toHaveBeenCalled()
    })
  })

  it('should return unavailable campsite ids correctly', () => {
    const expectedResult: number[] = [1, 2, 3, 4]
    const startUTC: number = 1527811200000
    const endUTC: number = 1528502400000

    const result = component.evaluateReservations(startUTC, endUTC)

    expect(result).toEqual(expectedResult)
  })
});

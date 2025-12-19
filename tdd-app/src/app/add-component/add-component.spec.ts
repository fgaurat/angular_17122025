import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add-component';
import { By } from '@angular/platform-browser';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sum two numbers', () => {
    // arrrange
    const inputElements = fixture.debugElement.queryAll(By.css('input'));
    const buttonElement = fixture.debugElement.query(By.css('button'));
    const resultElement = fixture.debugElement.query(By.css('p'));


    //act 
    inputElements[0].nativeElement.value = "2"
    inputElements[0].nativeElement.dispatchEvent(new Event('input'))

    inputElements[1].nativeElement.value = "1"
    inputElements[1].nativeElement.dispatchEvent(new Event('input'))
    buttonElement.nativeElement.click()
    fixture.detectChanges()

    //assert
    expect(resultElement.nativeElement.textContent).toContain('3')


  });
});

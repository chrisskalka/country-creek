import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndenturesComponent } from './indentures.component';

describe('IndenturesComponent', () => {
  let component: IndenturesComponent;
  let fixture: ComponentFixture<IndenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndenturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

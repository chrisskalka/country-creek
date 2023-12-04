import { ComponentFixture, TestBed } from '@angular/core/testing';

import { picturePageComponent } from './picturePage.component';

describe('picturePageComponent', () => {
  let component: picturePageComponent;
  let fixture: ComponentFixture<picturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [picturePageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(picturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

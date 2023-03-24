import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLineComponent } from './css-line.component';

describe('CssLineComponent', () => {
  let component: CssLineComponent;
  let fixture: ComponentFixture<CssLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

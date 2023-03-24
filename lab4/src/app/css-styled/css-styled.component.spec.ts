import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStyledComponent } from './css-styled.component';

describe('CssStyledComponent', () => {
  let component: CssStyledComponent;
  let fixture: ComponentFixture<CssStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssStyledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

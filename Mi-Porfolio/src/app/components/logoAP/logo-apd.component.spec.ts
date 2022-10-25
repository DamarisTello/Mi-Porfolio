import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAPdComponent } from './logo-apd.component';

describe('LogoAPdComponent', () => {
  let component: LogoAPdComponent;
  let fixture: ComponentFixture<LogoAPdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoAPdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoAPdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

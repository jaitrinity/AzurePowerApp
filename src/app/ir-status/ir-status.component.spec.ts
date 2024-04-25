import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrStatusComponent } from './ir-status.component';

describe('IrStatusComponent', () => {
  let component: IrStatusComponent;
  let fixture: ComponentFixture<IrStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

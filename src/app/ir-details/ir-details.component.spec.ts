import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrDetailsComponent } from './ir-details.component';

describe('IrDetailsComponent', () => {
  let component: IrDetailsComponent;
  let fixture: ComponentFixture<IrDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

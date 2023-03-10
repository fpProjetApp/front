import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCreateComponent } from './compte-create.component';

describe('CompteCreateComponent', () => {
  let component: CompteCreateComponent;
  let fixture: ComponentFixture<CompteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemestrePage } from './semestre.page';

describe('SemestrePage', () => {
  let component: SemestrePage;
  let fixture: ComponentFixture<SemestrePage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SemestrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
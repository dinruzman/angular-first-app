import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Welcome3Page } from './welcome3.page';

describe('Welcome3Page', () => {
  let component: Welcome3Page;
  let fixture: ComponentFixture<Welcome3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Welcome3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

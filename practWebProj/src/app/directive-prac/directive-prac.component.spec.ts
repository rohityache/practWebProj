import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePracComponent } from './directive-prac.component';

describe('DirectivePracComponent', () => {
  let component: DirectivePracComponent;
  let fixture: ComponentFixture<DirectivePracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePracComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

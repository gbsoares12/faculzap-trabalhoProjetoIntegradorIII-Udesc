import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMateriaCardComponent } from './container-materia-card.component';

describe('ContainerMateriaCardComponent', () => {
  let component: ContainerMateriaCardComponent;
  let fixture: ComponentFixture<ContainerMateriaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerMateriaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMateriaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

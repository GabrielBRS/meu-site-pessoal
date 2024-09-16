import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSiteComponent } from './building-site.component';

describe('BuildingSiteComponent', () => {
  let component: BuildingSiteComponent;
  let fixture: ComponentFixture<BuildingSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

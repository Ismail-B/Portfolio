import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetComponent } from './skill-set.component';

describe('SkillSetComponent', () => {
  let component: SkillSetComponent;
  let fixture: ComponentFixture<SkillSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRecipeComponent } from './room-recipe.component';

describe('RoomRecipeComponent', () => {
  let component: RoomRecipeComponent;
  let fixture: ComponentFixture<RoomRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

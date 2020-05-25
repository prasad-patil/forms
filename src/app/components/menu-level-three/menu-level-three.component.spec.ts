import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLevelThreeComponent } from './menu-level-three.component';

describe('MenuLevelThreeComponent', () => {
  let component: MenuLevelThreeComponent;
  let fixture: ComponentFixture<MenuLevelThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLevelThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

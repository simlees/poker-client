import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBadgeComponent } from './player-badge.component';

describe('PlayerCardComponent', () => {
  let component: PlayerBadgeComponent;
  let fixture: ComponentFixture<PlayerBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

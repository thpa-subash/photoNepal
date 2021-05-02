import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFollowersComponent } from './top-followers.component';

describe('TopFollowersComponent', () => {
  let component: TopFollowersComponent;
  let fixture: ComponentFixture<TopFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFollowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingTableComponent } from './following-table-component';

describe('FollowingTableComponent', () => {
  let component: FollowingTableComponent;
  let fixture: ComponentFixture<FollowingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

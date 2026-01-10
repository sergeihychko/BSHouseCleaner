import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedTableComponent } from './followed-table-component';

describe('FollowedTableComponent', () => {
  let component: FollowedTableComponent;
  let fixture: ComponentFixture<FollowedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

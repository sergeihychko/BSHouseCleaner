import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSearchOverlay } from './feed-search-overlay';

describe('FeedSearchOverlay', () => {
  let component: FeedSearchOverlay;
  let fixture: ComponentFixture<FeedSearchOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedSearchOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedSearchOverlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

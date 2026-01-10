import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSearchBar } from './feed-search-bar';

describe('FeedSearchBar', () => {
  let component: FeedSearchBar;
  let fixture: ComponentFixture<FeedSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedSearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsByHashtagComponent } from './tweets-by-hashtag.component';

describe('TweetsByHashtagComponent', () => {
  let component: TweetsByHashtagComponent;
  let fixture: ComponentFixture<TweetsByHashtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsByHashtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsByHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

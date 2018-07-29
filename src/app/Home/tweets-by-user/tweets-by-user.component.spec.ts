import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsByUserComponent } from './tweets-by-user.component';

describe('SearchByuserComponent', () => {
  let component: TweetsByUserComponent;
  let fixture: ComponentFixture<TweetsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

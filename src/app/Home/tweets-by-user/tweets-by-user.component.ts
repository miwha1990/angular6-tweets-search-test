import {Component, OnInit} from '@angular/core';

import {TweetModel} from '../../model';
import {Subject} from 'rxjs';
import {TweetsService} from '../../services/tweets/tweets.service';
import {PagerService} from '../../services/pager.service';

@Component({
  selector: 'ngwzp-product',
  templateUrl: './tweets-by-user.component.html',
  styleUrls: ['./tweets-by-user.component.scss']
})
export class TweetsByUserComponent implements OnInit {
  public tweets: TweetModel[];
  public error;
  public tweetsLength = 0;
  public isLoading = false;
  public displayedColumns: string[] = ['Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'];
  public pager: any = {};
  public pagedItems: any[];
  public searchTerm$ = new Subject<string>();

  constructor(private tweetService: TweetsService, private pagerService: PagerService) {
    this.tweetService.searchByUser(this.searchTerm$)
      .subscribe(tweets => {
        this.error = '';
        this.tweetsLength = tweets.length;
        this.tweets = tweets;
        this.setPage(1);
        this.isLoading = false;
      },
        error => {
        this.tweetsLength = 0;
        this.tweets = [];
        this.error = error.error.message;
        this.isLoading = false;
      });
  }

  ngOnInit() { }

  onSearchChange(event) {
    if (event.target.value.length > 3) {
      this.isLoading = true;
      this.searchTerm$.next(event.target.value);
    }
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.tweetsLength, page);

    // get current page of items
    this.pagedItems = this.tweets.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

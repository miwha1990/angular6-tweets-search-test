import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import {TweetsService} from '../../services/tweets/tweets.service';
import {PagerService} from '../../services/pager.service';
import {TweetModel} from '../../model';

@Component({
  selector: 'ngwzp-shop-window',
  templateUrl: './tweets-by-hashtag.component.html',
  styleUrls: ['./tweets-by-hashtag.component.scss']
})
export class TweetsByHashtagComponent implements  OnInit {
  public tweets: TweetModel[];
  public tweetsLength = 0;
  public isLoading = false;
  public displayedColumns: string[] = ['Tweet', 'Likes', 'Replies', 'Retweets', 'Hashtags', 'Date'];
  public pager: any = {};
  public pagedItems: any[];
  public searchTerm$ = new Subject<string>();

  constructor(private tweetService: TweetsService, private pagerService: PagerService) {
    this.tweetService.searchByHashtag(this.searchTerm$)
      .subscribe(tweets => {
            this.tweetsLength = tweets.length;
            this.tweets = tweets;
            this.setPage(1);
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

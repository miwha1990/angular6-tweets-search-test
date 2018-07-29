import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TweetModel} from '../../model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable()
export class TweetsService {

  constructor(private http: HttpClient) { }

  searchByUser(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(term => this.getTweetsByUser(term))
    );
  }

  searchByHashtag(terms: Observable<string>) {
      return terms.pipe(
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(term => this.getTweetsByHashtag(term))
      );
  }

  public getTweetsByHashtag(tag): Observable<Array<TweetModel>> {
    return this.http.get<Array<TweetModel>>('https://am-twitter-scrape.herokuapp.com/hashtags/' + tag + '?pages_limit=3&wait=0');
  }

  public getTweetsByUser(user): Observable<TweetModel[]> {
    return this.http.get<Array<TweetModel>>('https://am-twitter-scrape.herokuapp.com/users/' + user + '?pages_limit=3&wait=0');
  }
}

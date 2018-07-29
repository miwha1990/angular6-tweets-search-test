import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../material/material.module';
import {DomChangeDirective} from '../directives/ng-html-change.directive';
import {TweetsService} from '../services/tweets/tweets.service';
import {PagerService} from '../services/pager.service';
import {TweetsByHashtagComponent} from './tweets-by-hashtag/tweets-by-hashtag.component';
import {TweetsByUserComponent} from './tweets-by-user/tweets-by-user.component';
import {PagerComponent} from '../Components/pager/pager.component';
import {TableContentComponent} from '../Components/TableContent/table-content.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TweetsByHashtagComponent, TweetsByUserComponent, DomChangeDirective, PagerComponent, TableContentComponent],
  providers: [TweetsService, PagerService]
})
export class HomeModule {
}

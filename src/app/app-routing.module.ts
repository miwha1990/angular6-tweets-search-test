import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TweetsByHashtagComponent} from './Home/tweets-by-hashtag/tweets-by-hashtag.component';
import {TweetsByUserComponent} from './Home/tweets-by-user/tweets-by-user.component';

const routes: Routes = [
  {
    path: '',
    component: TweetsByHashtagComponent
  },
  {
    path: 'by-user',
    component: TweetsByUserComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

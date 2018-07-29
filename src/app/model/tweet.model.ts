export class TweetModel {
  account: Account;
  hashtags: Array<string>;
  likes: number;
  replies: number;
  retweets: number;
  text: string;
}
class Account {
  id: number;
  fullName: string;
  href: string;
}

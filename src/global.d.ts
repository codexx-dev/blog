/// <reference types="@solidjs/start/env" />

declare type Post = {
  title: string
  route: string
};
declare type PostList = Array<Post>;
declare const __postlist__: PostList;

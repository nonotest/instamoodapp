# Description

1. Server imports lists of posts matching keywords from a number of social sources (instagram, youtube, quotable...)
2. List of posts are stored and organised in a redis store
3. Firebase exposes public api to retrieve paginated versions of the post lists
4. A mobile app displays the feeds and allow to interact with the posts (play video, like etc)

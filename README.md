# Description

1. Import at regular interval posts matching specific keywords from a number of social sources:
   - Instagram (public api)
   - Youtube
   - Quotable
   - ... whatever we need next
2. Posts are stored and organised in a redis store as sorted sets
3. Firebase exposes a public api to retrieve paginated versions of the lists
4. A mobile app displays the feeds and allow to interact with the posts (play video, like etc)
5. There is a slot to display ads every x posts and fixed at the bottom of the screen.

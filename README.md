| react-native                  | flutter |
| ----------------------------- | ------- |
| ![](current-react-native.gif) |         |

# Description

1. Import at regular interval posts matching specific keywords from a number of social sources:
   - Instagram (public api)
   - Youtube
   - Quotable
   - ... whatever we need next
2. Posts are stored and organised in a postgres database
3. We use graphql/hasura to call a postgres function that will return a list of medias
4. A mobile app displays the feeds and allow to interact with the posts (play video, like etc)
5. There is a slot to display ads every x posts and fixed at the bottom of the screen.

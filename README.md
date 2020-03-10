| react-native                  | flutter                  |
| ----------------------------- | ------------------------ |
| ![](current-react-native.gif) | ![](current-flutter.gif) |

# Description

1. Import current trends for twitter australia
2. Import at regular interval posts matching specific the trending hashtags from a number of social sources:

   - Instagram (public api)
   - Youtube
   - Quotable
   - ... whatever we need next

     Posts are stored and organised in a postgres database.
     We use a graphql server on top of postgres (hasura)

3. We load the posts on the app via a graphql query sent (apollo client on react native, and similar on flutter). Pagination is done via a postgres function that takes a limit and offset. The medias are ranked by score for each trend.
4. [TODO] allow to interact with the posts (play video, like etc)
5. [TODO] display ads every x posts and fixed at the bottom of the screen.

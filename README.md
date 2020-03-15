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

| react-native          | flutter                  |
| --------------------- | ------------------------ |
| ![](react-native.gif) | ![](current-flutter.gif) |

# How does it work ?

1. Spin up the servers

```
# TODO: Add a step to seed the db (only the sources).
docker-compose up
```

2. Generate ts types

```
docker exec -i -t server_node_1  /bin/ash
yarn generate_hasura --watch
```

3. Import medias

(still big wip)

```
docker exec -i -t server_go_1  /bin/ash
cd feedme
go run main.go instagram
```

3. Environments

- mobile app
  .env is the default
  .env.live is the live env

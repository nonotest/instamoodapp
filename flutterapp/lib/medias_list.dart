import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:flutterapp/media_widget.dart' show DisplayMedias;
import 'package:flutterapp/media.dart';

class PagingMedias extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Query(
      options: QueryOptions(
        documentNode: gql(r'''
    query GetMediasByTopTrendsQuery($skip: Int!, $take: Int!) {
    read_top_medias_by_top_trends(args: { skip: $skip, take: $take }) {
      uuid
      external_id
      metadata
      media_source_name
      trend_name
      created_at
    }
  }'''),
        variables: {
          'skip': 0,
          'take': 5,
        },
      ),
      builder: (
        QueryResult result, {
        Refetch refetch,
        FetchMore fetchMore,
      }) {
        if (result.hasException) {
          return Text(result.exception.toString());
        }

        if (result.loading && result.data == null) {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }

        // read_top_medias_by_top_trends
        final nextPage = 5;
        final List<dynamic> medias =
            result.data['read_top_medias_by_top_trends'] as List<dynamic>;

        final List<Media> listOfMedias = medias.map((dynamic e) {
          return Media(
              externalId: e["external_id"],
              metadata: Metadata(url: e["metadata"]["url"]),
              mediaSourceName: e["media_source_name"],
              trendName: e["trend_name"],
              createdAt: e["created_at"],
              uuid: e["uuid"]);
        }).toList();

        return Column(
          children: <Widget>[
            Expanded(
              child: DisplayMedias(
                medias: listOfMedias,
              ),
            ),
            (result.loading)
                ? Center(
                    child: CircularProgressIndicator(),
                  )
                : RaisedButton(
                    onPressed: () {
                      fetchMore(
                        FetchMoreOptions(
                          variables: {'skip': 0, 'take': 5},
                          updateQuery: (existing, newMedias) => ({
                            'medias': [
                              ...existing['read_top_medias_by_top_trends'],
                              ...newMedias['read_top_medias_by_top_trends']
                            ],
                          }),
                        ),
                      );
                    },
                    child: Text('LOAD PAGE $nextPage'),
                  ),
          ],
        );
      },
    );
  }
}

T cast<T>(x) => x is T ? x : null;

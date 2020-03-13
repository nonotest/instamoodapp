import gql from 'graphql-tag';

/**
 * Source of truth for generated named gql queries.
 */

export const GET_TS_TOP_TRENDS = gql`
  query GetTsTopTrends {
    ts_top_trends_vw {
      id
      hashtag
    }
  }
`;

export const GET_MEDIAS_BY_TOP_TRENDS = gql`
  query GetMediasByTopTrends(
    $limit: Int!
    $offset: Int!
    $uniqueDeviceId: String!
  ) {
    read_top_medias_by_top_trends(
      args: {
        limit: $limit
        offset: $offset
        user_unique_device_id: $uniqueDeviceId
      }
    ) @connection(key: "read_top_medias_by_top_trends") {
      id
      uuid
      external_id
      metadata
      media_source_name
      trend_name
      like_count
      dislike_count
      sentiment_type_id
      created_at
    }
  }
`;

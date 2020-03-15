import gql from 'graphql-tag';

/**
 * Source of truth for generated named gql queries.
 */

export const GET_TS_TOP_TRENDS = gql`
  query GetTopTrends {
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

//
export const GET_COMMENTS_FOR_MEDIA = gql`
  query GetCommentsForMedia($mediaId: Int!)
    @connection(key: "get_comments_for_media", filter: ["mediaId"]) {
    ts_medias_comments(
      where: { media_id: { _eq: $mediaId } }
      order_by: { id: desc }
    ) {
      id
      comment
      unique_device_id
      created_at
    }
  }
`;

export const GET_NEWER_COMMENTS_FOR_MEDIA = gql`
  query GetNewerCommentsForMedia($mediaId: Int!, $lastId: Int!) {
    ts_medias_comments(
      where: { _and: { media_id: { _eq: $mediaId }, id: { _gt: $lastId } } }
      order_by: { id: desc }
    ) {
      id
      comment
      unique_device_id
      created_at
    }
  }
`;

import gql from 'graphql-tag';

/**
 * Source of truth for generated named gql queries.
 */

export const INSERT_TS_MEDIA_DISLIKE = gql`
  mutation InsertTsMediaDislike($mediaId: Int!) {
    insert_ts_medias_sentiments(
      objects: { media_id: $mediaId, dislike_count: 1 }
    ) {
      affected_rows
    }
  }
`;

export const INSERT_TS_MEDIA_LIKE = gql`
  mutation InsertTsMediaLike($mediaId: Int!) {
    insert_ts_medias_sentiments(
      objects: { media_id: $mediaId, like_count: 1 }
    ) {
      affected_rows
    }
  }
`;

// export const UPDATE_TS_MEDIA_COUNT = gql`
//   query IncrementMediaCount {
//     ts_top_trends_vw {
//       id
//       hashtag
//     }
//   }
// `;

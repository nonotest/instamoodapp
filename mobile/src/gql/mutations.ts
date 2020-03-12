import gql from 'graphql-tag';

/**
 * Source of truth for generated named gql queries.
 */

export const INSERT_TS_MEDIA_SENTIMENT = gql`
  mutation InsertTsMediaSentimentsLike(
    $mediaId: Int!
    $uniqueDeviceId: String!
    $sentimentTypeId: Int!
  ) {
    insert_ts_medias_sentiments_like(
      objects: {
        media_id: $mediaId
        unique_device_id: $uniqueDeviceId
        sentiment_type_id: $sentimentTypeId
      }
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

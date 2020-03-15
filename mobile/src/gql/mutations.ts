import gql from 'graphql-tag';

/**
 * Source of truth for generated named gql queries.
 */

export const INSERT_TS_MEDIA_SENTIMENT = gql`
  mutation InsertTsMediaSentiments(
    $mediaId: Int!
    $uniqueDeviceId: String!
    $sentimentTypeId: Int!
  ) {
    insert_ts_medias_sentiments(
      objects: {
        media_id: $mediaId
        unique_device_id: $uniqueDeviceId
        sentiment_type_id: $sentimentTypeId
      }
    ) {
      affected_rows
      returning {
        media_id
        sentiment_type_id
      }
    }
  }
`;

export const DELETE_TS_MEDIA_SENTIMENT = gql`
  mutation DeleteTsMediaSentiments(
    $mediaId: Int!
    $uniqueDeviceId: String!
    $sentimentTypeId: Int!
  ) {
    delete_ts_medias_sentiments(
      where: {
        _and: {
          media_id: { _eq: $mediaId }
          unique_device_id: { _eq: $uniqueDeviceId }
          sentiment_type_id: { _eq: $sentimentTypeId }
        }
      }
    ) {
      affected_rows
      returning {
        media_id
        sentiment_type_id
      }
    }
  }
`;

const test = '';

import gql from 'graphql-tag';

export const SUBSCRIBE_COMMENTS_FOR_MEDIA = gql`
  subscription subscribeCommentsForMedia($mediaId: Int!) {
    ts_medias_comments(
      where: { media_id: { _eq: $mediaId } }
      order_by: { created_at: desc }
      limit: 1
    ) {
      id
      comment
      unique_device_id
      created_at
    }
  }
`;

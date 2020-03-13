import * as ApolloReactHooks from '@apollo/react-hooks';
import * as ApolloReactCommon from '@apollo/react-common';

import {
  InsertTsMediaSentimentsMutation,
  DeleteTsMediaSentimentsMutation,
} from '../../generated/graphql';

type HandleSentimentPressFn = Promise<
  ApolloReactCommon.MutationFetchResult<
    InsertTsMediaSentimentsMutation | DeleteTsMediaSentimentsMutation
  >
> | void;

export type SentimentProps = {
  likeColor: string;
  dislikeColor: string;
  handleSentimentPress: (sentimentTypeId: number) => HandleSentimentPressFn;
};

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  jsonb: any;
  uuid: any;
  bigint: any;
};


export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type Jsonb_Comparison_Exp = {
  _contained_in?: Maybe<Scalars['jsonb']>;
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  _has_key?: Maybe<Scalars['String']>;
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_read_top_medias_by_top_trends_fn?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Mutation_Response>;
  delete_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  delete_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  delete_ts_medias_sentiments?: Maybe<Ts_Medias_Sentiments_Mutation_Response>;
  delete_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
  insert_read_top_medias_by_top_trends_fn?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Mutation_Response>;
  insert_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  insert_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  insert_ts_medias_sentiments?: Maybe<Ts_Medias_Sentiments_Mutation_Response>;
  insert_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
  update_read_top_medias_by_top_trends_fn?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Mutation_Response>;
  update_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  update_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  update_ts_medias_sentiments?: Maybe<Ts_Medias_Sentiments_Mutation_Response>;
  update_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
};


export type Mutation_RootDelete_Read_Top_Medias_By_Top_Trends_FnArgs = {
  where: Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp;
};


export type Mutation_RootDelete_Ts_Media_SourcesArgs = {
  where: Ts_Media_Sources_Bool_Exp;
};


export type Mutation_RootDelete_Ts_MediasArgs = {
  where: Ts_Medias_Bool_Exp;
};


export type Mutation_RootDelete_Ts_Medias_SentimentsArgs = {
  where: Ts_Medias_Sentiments_Bool_Exp;
};


export type Mutation_RootDelete_Ts_TrendsArgs = {
  where: Ts_Trends_Bool_Exp;
};


export type Mutation_RootInsert_Read_Top_Medias_By_Top_Trends_FnArgs = {
  objects: Array<Read_Top_Medias_By_Top_Trends_Fn_Insert_Input>;
};


export type Mutation_RootInsert_Ts_Media_SourcesArgs = {
  objects: Array<Ts_Media_Sources_Insert_Input>;
  on_conflict?: Maybe<Ts_Media_Sources_On_Conflict>;
};


export type Mutation_RootInsert_Ts_MediasArgs = {
  objects: Array<Ts_Medias_Insert_Input>;
  on_conflict?: Maybe<Ts_Medias_On_Conflict>;
};


export type Mutation_RootInsert_Ts_Medias_SentimentsArgs = {
  objects: Array<Ts_Medias_Sentiments_Insert_Input>;
  on_conflict?: Maybe<Ts_Medias_Sentiments_On_Conflict>;
};


export type Mutation_RootInsert_Ts_TrendsArgs = {
  objects: Array<Ts_Trends_Insert_Input>;
  on_conflict?: Maybe<Ts_Trends_On_Conflict>;
};


export type Mutation_RootUpdate_Read_Top_Medias_By_Top_Trends_FnArgs = {
  _append?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Append_Input>;
  _delete_at_path?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Delete_Elem_Input>;
  _delete_key?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Delete_Key_Input>;
  _inc?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Inc_Input>;
  _prepend?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Prepend_Input>;
  _set?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Set_Input>;
  where: Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp;
};


export type Mutation_RootUpdate_Ts_Media_SourcesArgs = {
  _inc?: Maybe<Ts_Media_Sources_Inc_Input>;
  _set?: Maybe<Ts_Media_Sources_Set_Input>;
  where: Ts_Media_Sources_Bool_Exp;
};


export type Mutation_RootUpdate_Ts_MediasArgs = {
  _append?: Maybe<Ts_Medias_Append_Input>;
  _delete_at_path?: Maybe<Ts_Medias_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Ts_Medias_Delete_Elem_Input>;
  _delete_key?: Maybe<Ts_Medias_Delete_Key_Input>;
  _inc?: Maybe<Ts_Medias_Inc_Input>;
  _prepend?: Maybe<Ts_Medias_Prepend_Input>;
  _set?: Maybe<Ts_Medias_Set_Input>;
  where: Ts_Medias_Bool_Exp;
};


export type Mutation_RootUpdate_Ts_Medias_SentimentsArgs = {
  _inc?: Maybe<Ts_Medias_Sentiments_Inc_Input>;
  _set?: Maybe<Ts_Medias_Sentiments_Set_Input>;
  where: Ts_Medias_Sentiments_Bool_Exp;
};


export type Mutation_RootUpdate_Ts_TrendsArgs = {
  _inc?: Maybe<Ts_Trends_Inc_Input>;
  _set?: Maybe<Ts_Trends_Set_Input>;
  where: Ts_Trends_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
  read_top_medias_by_top_trends: Array<Read_Top_Medias_By_Top_Trends_Fn>;
  read_top_medias_by_top_trends_aggregate: Read_Top_Medias_By_Top_Trends_Fn_Aggregate;
  read_top_medias_by_top_trends_fn: Array<Read_Top_Medias_By_Top_Trends_Fn>;
  read_top_medias_by_top_trends_fn_aggregate: Read_Top_Medias_By_Top_Trends_Fn_Aggregate;
  ts_media_sources: Array<Ts_Media_Sources>;
  ts_media_sources_aggregate: Ts_Media_Sources_Aggregate;
  ts_media_sources_by_pk?: Maybe<Ts_Media_Sources>;
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  ts_medias_by_pk?: Maybe<Ts_Medias>;
  ts_medias_by_top_trends_vw: Array<Ts_Medias_By_Top_Trends_Vw>;
  ts_medias_by_top_trends_vw_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_medias_sentiments: Array<Ts_Medias_Sentiments>;
  ts_medias_sentiments_aggregate: Ts_Medias_Sentiments_Aggregate;
  ts_medias_sentiments_by_pk?: Maybe<Ts_Medias_Sentiments>;
  ts_medias_sentiments_vw: Array<Ts_Medias_Sentiments_Vw>;
  ts_medias_sentiments_vw_aggregate: Ts_Medias_Sentiments_Vw_Aggregate;
  ts_top_trends_vw: Array<Ts_Top_Trends_Vw>;
  ts_top_trends_vw_aggregate: Ts_Top_Trends_Vw_Aggregate;
  ts_trends: Array<Ts_Trends>;
  ts_trends_aggregate: Ts_Trends_Aggregate;
  ts_trends_by_pk?: Maybe<Ts_Trends>;
};


export type Query_RootRead_Top_Medias_By_Top_TrendsArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Query_RootRead_Top_Medias_By_Top_Trends_AggregateArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Query_RootRead_Top_Medias_By_Top_Trends_FnArgs = {
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Query_RootRead_Top_Medias_By_Top_Trends_Fn_AggregateArgs = {
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Query_RootTs_Media_SourcesArgs = {
  distinct_on?: Maybe<Array<Ts_Media_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Media_Sources_Order_By>>;
  where?: Maybe<Ts_Media_Sources_Bool_Exp>;
};


export type Query_RootTs_Media_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Media_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Media_Sources_Order_By>>;
  where?: Maybe<Ts_Media_Sources_Bool_Exp>;
};


export type Query_RootTs_Media_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTs_MediasArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Query_RootTs_Medias_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Query_RootTs_Medias_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTs_Medias_By_Top_Trends_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Query_RootTs_Medias_By_Top_Trends_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Query_RootTs_Medias_SentimentsArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};


export type Query_RootTs_Medias_Sentiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};


export type Query_RootTs_Medias_Sentiments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTs_Medias_Sentiments_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>;
};


export type Query_RootTs_Medias_Sentiments_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>;
};


export type Query_RootTs_Top_Trends_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Top_Trends_Vw_Bool_Exp>;
};


export type Query_RootTs_Top_Trends_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Top_Trends_Vw_Bool_Exp>;
};


export type Query_RootTs_TrendsArgs = {
  distinct_on?: Maybe<Array<Ts_Trends_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Trends_Order_By>>;
  where?: Maybe<Ts_Trends_Bool_Exp>;
};


export type Query_RootTs_Trends_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Trends_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Trends_Order_By>>;
  where?: Maybe<Ts_Trends_Bool_Exp>;
};


export type Query_RootTs_Trends_By_PkArgs = {
  id: Scalars['Int'];
};

export type Read_Top_Medias_By_Top_Trends_Args = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  user_unique_device_id?: Maybe<Scalars['String']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn = {
   __typename?: 'read_top_medias_by_top_trends_fn';
  created_at?: Maybe<Scalars['timestamptz']>;
  dislike_count?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};


export type Read_Top_Medias_By_Top_Trends_FnMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Aggregate = {
   __typename?: 'read_top_medias_by_top_trends_fn_aggregate';
  aggregate?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Aggregate_Fields>;
  nodes: Array<Read_Top_Medias_By_Top_Trends_Fn>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Aggregate_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_aggregate_fields';
  avg?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Max_Fields>;
  min?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Min_Fields>;
  stddev?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Fields>;
  stddev_pop?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Samp_Fields>;
  sum?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Sum_Fields>;
  var_pop?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Var_Pop_Fields>;
  var_samp?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Var_Samp_Fields>;
  variance?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Variance_Fields>;
};


export type Read_Top_Medias_By_Top_Trends_Fn_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Aggregate_Order_By = {
  avg?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Max_Order_By>;
  min?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Min_Order_By>;
  stddev?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Order_By>;
  stddev_pop?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Stddev_Samp_Order_By>;
  sum?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Sum_Order_By>;
  var_pop?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Var_Pop_Order_By>;
  var_samp?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Var_Samp_Order_By>;
  variance?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Variance_Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Arr_Rel_Insert_Input = {
  data: Array<Read_Top_Medias_By_Top_Trends_Fn_Insert_Input>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Avg_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_avg_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Avg_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>>>;
  _not?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dislike_count?: Maybe<Int_Comparison_Exp>;
  external_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  like_count?: Maybe<Int_Comparison_Exp>;
  media_source_name?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  sentiment_type_id?: Maybe<Int_Comparison_Exp>;
  trend_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Inc_Input = {
  dislike_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dislike_count?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Max_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dislike_count?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dislike_count?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Min_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dislike_count?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dislike_count?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Mutation_Response = {
   __typename?: 'read_top_medias_by_top_trends_fn_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Read_Top_Medias_By_Top_Trends_Fn>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Obj_Rel_Insert_Input = {
  data: Read_Top_Medias_By_Top_Trends_Fn_Insert_Input;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Order_By = {
  created_at?: Maybe<Order_By>;
  dislike_count?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export enum Read_Top_Medias_By_Top_Trends_Fn_Select_Column {
  CreatedAt = 'created_at',
  DislikeCount = 'dislike_count',
  ExternalId = 'external_id',
  Id = 'id',
  LikeCount = 'like_count',
  MediaSourceName = 'media_source_name',
  Metadata = 'metadata',
  Score = 'score',
  SentimentTypeId = 'sentiment_type_id',
  TrendName = 'trend_name',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Read_Top_Medias_By_Top_Trends_Fn_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dislike_count?: Maybe<Scalars['Int']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_stddev_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Pop_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_stddev_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Pop_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Samp_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_stddev_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Stddev_Samp_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Sum_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_sum_fields';
  dislike_count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  like_count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Sum_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Var_Pop_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_var_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Var_Pop_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Var_Samp_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_var_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Var_Samp_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Variance_Fields = {
   __typename?: 'read_top_medias_by_top_trends_fn_variance_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Read_Top_Medias_By_Top_Trends_Fn_Variance_Order_By = {
  dislike_count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  read_top_medias_by_top_trends: Array<Read_Top_Medias_By_Top_Trends_Fn>;
  read_top_medias_by_top_trends_aggregate: Read_Top_Medias_By_Top_Trends_Fn_Aggregate;
  read_top_medias_by_top_trends_fn: Array<Read_Top_Medias_By_Top_Trends_Fn>;
  read_top_medias_by_top_trends_fn_aggregate: Read_Top_Medias_By_Top_Trends_Fn_Aggregate;
  ts_media_sources: Array<Ts_Media_Sources>;
  ts_media_sources_aggregate: Ts_Media_Sources_Aggregate;
  ts_media_sources_by_pk?: Maybe<Ts_Media_Sources>;
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  ts_medias_by_pk?: Maybe<Ts_Medias>;
  ts_medias_by_top_trends_vw: Array<Ts_Medias_By_Top_Trends_Vw>;
  ts_medias_by_top_trends_vw_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_medias_sentiments: Array<Ts_Medias_Sentiments>;
  ts_medias_sentiments_aggregate: Ts_Medias_Sentiments_Aggregate;
  ts_medias_sentiments_by_pk?: Maybe<Ts_Medias_Sentiments>;
  ts_medias_sentiments_vw: Array<Ts_Medias_Sentiments_Vw>;
  ts_medias_sentiments_vw_aggregate: Ts_Medias_Sentiments_Vw_Aggregate;
  ts_top_trends_vw: Array<Ts_Top_Trends_Vw>;
  ts_top_trends_vw_aggregate: Ts_Top_Trends_Vw_Aggregate;
  ts_trends: Array<Ts_Trends>;
  ts_trends_aggregate: Ts_Trends_Aggregate;
  ts_trends_by_pk?: Maybe<Ts_Trends>;
};


export type Subscription_RootRead_Top_Medias_By_Top_TrendsArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Subscription_RootRead_Top_Medias_By_Top_Trends_AggregateArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Subscription_RootRead_Top_Medias_By_Top_Trends_FnArgs = {
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Subscription_RootRead_Top_Medias_By_Top_Trends_Fn_AggregateArgs = {
  distinct_on?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Read_Top_Medias_By_Top_Trends_Fn_Order_By>>;
  where?: Maybe<Read_Top_Medias_By_Top_Trends_Fn_Bool_Exp>;
};


export type Subscription_RootTs_Media_SourcesArgs = {
  distinct_on?: Maybe<Array<Ts_Media_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Media_Sources_Order_By>>;
  where?: Maybe<Ts_Media_Sources_Bool_Exp>;
};


export type Subscription_RootTs_Media_Sources_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Media_Sources_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Media_Sources_Order_By>>;
  where?: Maybe<Ts_Media_Sources_Bool_Exp>;
};


export type Subscription_RootTs_Media_Sources_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTs_MediasArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Subscription_RootTs_Medias_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Subscription_RootTs_Medias_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTs_Medias_By_Top_Trends_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Subscription_RootTs_Medias_By_Top_Trends_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Subscription_RootTs_Medias_SentimentsArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};


export type Subscription_RootTs_Medias_Sentiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};


export type Subscription_RootTs_Medias_Sentiments_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTs_Medias_Sentiments_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>;
};


export type Subscription_RootTs_Medias_Sentiments_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>;
};


export type Subscription_RootTs_Top_Trends_VwArgs = {
  distinct_on?: Maybe<Array<Ts_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Top_Trends_Vw_Bool_Exp>;
};


export type Subscription_RootTs_Top_Trends_Vw_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Top_Trends_Vw_Bool_Exp>;
};


export type Subscription_RootTs_TrendsArgs = {
  distinct_on?: Maybe<Array<Ts_Trends_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Trends_Order_By>>;
  where?: Maybe<Ts_Trends_Bool_Exp>;
};


export type Subscription_RootTs_Trends_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Trends_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Trends_Order_By>>;
  where?: Maybe<Ts_Trends_Bool_Exp>;
};


export type Subscription_RootTs_Trends_By_PkArgs = {
  id: Scalars['Int'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Ts_Media_Sources = {
   __typename?: 'ts_media_sources';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type Ts_Media_SourcesTs_MediasArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Ts_Media_SourcesTs_Medias_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};

export type Ts_Media_Sources_Aggregate = {
   __typename?: 'ts_media_sources_aggregate';
  aggregate?: Maybe<Ts_Media_Sources_Aggregate_Fields>;
  nodes: Array<Ts_Media_Sources>;
};

export type Ts_Media_Sources_Aggregate_Fields = {
   __typename?: 'ts_media_sources_aggregate_fields';
  avg?: Maybe<Ts_Media_Sources_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Media_Sources_Max_Fields>;
  min?: Maybe<Ts_Media_Sources_Min_Fields>;
  stddev?: Maybe<Ts_Media_Sources_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Media_Sources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Media_Sources_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Media_Sources_Sum_Fields>;
  var_pop?: Maybe<Ts_Media_Sources_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Media_Sources_Var_Samp_Fields>;
  variance?: Maybe<Ts_Media_Sources_Variance_Fields>;
};


export type Ts_Media_Sources_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Media_Sources_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Media_Sources_Aggregate_Order_By = {
  avg?: Maybe<Ts_Media_Sources_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Media_Sources_Max_Order_By>;
  min?: Maybe<Ts_Media_Sources_Min_Order_By>;
  stddev?: Maybe<Ts_Media_Sources_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Media_Sources_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Media_Sources_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Media_Sources_Sum_Order_By>;
  var_pop?: Maybe<Ts_Media_Sources_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Media_Sources_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Media_Sources_Variance_Order_By>;
};

export type Ts_Media_Sources_Arr_Rel_Insert_Input = {
  data: Array<Ts_Media_Sources_Insert_Input>;
  on_conflict?: Maybe<Ts_Media_Sources_On_Conflict>;
};

export type Ts_Media_Sources_Avg_Fields = {
   __typename?: 'ts_media_sources_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Media_Sources_Bool_Exp>>>;
  _not?: Maybe<Ts_Media_Sources_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Media_Sources_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  ts_medias?: Maybe<Ts_Medias_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Ts_Media_Sources_Constraint {
  TsMediaSourcesPkey = 'ts_media_sources_pkey'
}

export type Ts_Media_Sources_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Ts_Media_Sources_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ts_medias?: Maybe<Ts_Medias_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Media_Sources_Max_Fields = {
   __typename?: 'ts_media_sources_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Media_Sources_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Min_Fields = {
   __typename?: 'ts_media_sources_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Media_Sources_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Mutation_Response = {
   __typename?: 'ts_media_sources_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Ts_Media_Sources>;
};

export type Ts_Media_Sources_Obj_Rel_Insert_Input = {
  data: Ts_Media_Sources_Insert_Input;
  on_conflict?: Maybe<Ts_Media_Sources_On_Conflict>;
};

export type Ts_Media_Sources_On_Conflict = {
  constraint: Ts_Media_Sources_Constraint;
  update_columns: Array<Ts_Media_Sources_Update_Column>;
  where?: Maybe<Ts_Media_Sources_Bool_Exp>;
};

export type Ts_Media_Sources_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  ts_medias_aggregate?: Maybe<Ts_Medias_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Ts_Media_Sources_Select_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Ts_Media_Sources_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Media_Sources_Stddev_Fields = {
   __typename?: 'ts_media_sources_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Stddev_Pop_Fields = {
   __typename?: 'ts_media_sources_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Stddev_Samp_Fields = {
   __typename?: 'ts_media_sources_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Sum_Fields = {
   __typename?: 'ts_media_sources_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Ts_Media_Sources_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Ts_Media_Sources_Update_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Ts_Media_Sources_Var_Pop_Fields = {
   __typename?: 'ts_media_sources_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Var_Samp_Fields = {
   __typename?: 'ts_media_sources_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Media_Sources_Variance_Fields = {
   __typename?: 'ts_media_sources_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Ts_Media_Sources_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Ts_Medias = {
   __typename?: 'ts_medias';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  external_id: Scalars['String'];
  id: Scalars['Int'];
  media_source_id?: Maybe<Scalars['Int']>;
  metadata: Scalars['jsonb'];
  score: Scalars['Int'];
  trend_id?: Maybe<Scalars['Int']>;
  ts_media_source?: Maybe<Ts_Media_Sources>;
  ts_medias_sentiments: Array<Ts_Medias_Sentiments>;
  ts_medias_sentiments_aggregate: Ts_Medias_Sentiments_Aggregate;
  ts_trend?: Maybe<Ts_Trends>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};


export type Ts_MediasMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


export type Ts_MediasTs_Medias_SentimentsArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};


export type Ts_MediasTs_Medias_Sentiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Sentiments_Order_By>>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};

export type Ts_Medias_Aggregate = {
   __typename?: 'ts_medias_aggregate';
  aggregate?: Maybe<Ts_Medias_Aggregate_Fields>;
  nodes: Array<Ts_Medias>;
};

export type Ts_Medias_Aggregate_Fields = {
   __typename?: 'ts_medias_aggregate_fields';
  avg?: Maybe<Ts_Medias_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Medias_Max_Fields>;
  min?: Maybe<Ts_Medias_Min_Fields>;
  stddev?: Maybe<Ts_Medias_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Medias_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Medias_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Medias_Sum_Fields>;
  var_pop?: Maybe<Ts_Medias_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Medias_Var_Samp_Fields>;
  variance?: Maybe<Ts_Medias_Variance_Fields>;
};


export type Ts_Medias_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Medias_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Medias_Aggregate_Order_By = {
  avg?: Maybe<Ts_Medias_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Medias_Max_Order_By>;
  min?: Maybe<Ts_Medias_Min_Order_By>;
  stddev?: Maybe<Ts_Medias_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Medias_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Medias_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Medias_Sum_Order_By>;
  var_pop?: Maybe<Ts_Medias_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Medias_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Medias_Variance_Order_By>;
};

export type Ts_Medias_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export type Ts_Medias_Arr_Rel_Insert_Input = {
  data: Array<Ts_Medias_Insert_Input>;
  on_conflict?: Maybe<Ts_Medias_On_Conflict>;
};

export type Ts_Medias_Avg_Fields = {
   __typename?: 'ts_medias_avg_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Avg_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Medias_Bool_Exp>>>;
  _not?: Maybe<Ts_Medias_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Medias_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  external_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  media_source_id?: Maybe<Int_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  trend_id?: Maybe<Int_Comparison_Exp>;
  ts_media_source?: Maybe<Ts_Media_Sources_Bool_Exp>;
  ts_medias_sentiments?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
  ts_trend?: Maybe<Ts_Trends_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

export type Ts_Medias_By_Top_Trends_Vw = {
   __typename?: 'ts_medias_by_top_trends_vw';
  created_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};


export type Ts_Medias_By_Top_Trends_VwMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Aggregate = {
   __typename?: 'ts_medias_by_top_trends_vw_aggregate';
  aggregate?: Maybe<Ts_Medias_By_Top_Trends_Vw_Aggregate_Fields>;
  nodes: Array<Ts_Medias_By_Top_Trends_Vw>;
};

export type Ts_Medias_By_Top_Trends_Vw_Aggregate_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_aggregate_fields';
  avg?: Maybe<Ts_Medias_By_Top_Trends_Vw_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Medias_By_Top_Trends_Vw_Max_Fields>;
  min?: Maybe<Ts_Medias_By_Top_Trends_Vw_Min_Fields>;
  stddev?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Medias_By_Top_Trends_Vw_Sum_Fields>;
  var_pop?: Maybe<Ts_Medias_By_Top_Trends_Vw_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Medias_By_Top_Trends_Vw_Var_Samp_Fields>;
  variance?: Maybe<Ts_Medias_By_Top_Trends_Vw_Variance_Fields>;
};


export type Ts_Medias_By_Top_Trends_Vw_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Aggregate_Order_By = {
  avg?: Maybe<Ts_Medias_By_Top_Trends_Vw_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Medias_By_Top_Trends_Vw_Max_Order_By>;
  min?: Maybe<Ts_Medias_By_Top_Trends_Vw_Min_Order_By>;
  stddev?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Medias_By_Top_Trends_Vw_Sum_Order_By>;
  var_pop?: Maybe<Ts_Medias_By_Top_Trends_Vw_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Medias_By_Top_Trends_Vw_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Medias_By_Top_Trends_Vw_Variance_Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Avg_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_avg_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Avg_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>>>;
  _not?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  external_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  media_source_name?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  trend_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

export type Ts_Medias_By_Top_Trends_Vw_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Ts_Medias_By_Top_Trends_Vw_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Max_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Min_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export enum Ts_Medias_By_Top_Trends_Vw_Select_Column {
  CreatedAt = 'created_at',
  ExternalId = 'external_id',
  Id = 'id',
  MediaSourceName = 'media_source_name',
  Metadata = 'metadata',
  Score = 'score',
  TrendName = 'trend_name',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Sum_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_sum_fields';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Sum_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Pop_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Samp_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Variance_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_variance_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Variance_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export enum Ts_Medias_Constraint {
  TsMediasExternalIdKey = 'ts_medias_external_id_key',
  TsMediasPkey = 'ts_medias_pkey'
}

export type Ts_Medias_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Ts_Medias_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

export type Ts_Medias_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
  ts_media_source?: Maybe<Ts_Media_Sources_Obj_Rel_Insert_Input>;
  ts_medias_sentiments?: Maybe<Ts_Medias_Sentiments_Arr_Rel_Insert_Input>;
  ts_trend?: Maybe<Ts_Trends_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Ts_Medias_Max_Fields = {
   __typename?: 'ts_medias_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_Min_Fields = {
   __typename?: 'ts_medias_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_Mutation_Response = {
   __typename?: 'ts_medias_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Ts_Medias>;
};

export type Ts_Medias_Obj_Rel_Insert_Input = {
  data: Ts_Medias_Insert_Input;
  on_conflict?: Maybe<Ts_Medias_On_Conflict>;
};

export type Ts_Medias_On_Conflict = {
  constraint: Ts_Medias_Constraint;
  update_columns: Array<Ts_Medias_Update_Column>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};

export type Ts_Medias_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
  ts_media_source?: Maybe<Ts_Media_Sources_Order_By>;
  ts_medias_sentiments_aggregate?: Maybe<Ts_Medias_Sentiments_Aggregate_Order_By>;
  ts_trend?: Maybe<Ts_Trends_Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

export type Ts_Medias_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

export enum Ts_Medias_Select_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  ExternalId = 'external_id',
  Id = 'id',
  MediaSourceId = 'media_source_id',
  Metadata = 'metadata',
  Score = 'score',
  TrendId = 'trend_id',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Ts_Medias_Sentiments = {
   __typename?: 'ts_medias_sentiments';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  ts_media?: Maybe<Ts_Medias>;
  unique_device_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

export type Ts_Medias_Sentiments_Aggregate = {
   __typename?: 'ts_medias_sentiments_aggregate';
  aggregate?: Maybe<Ts_Medias_Sentiments_Aggregate_Fields>;
  nodes: Array<Ts_Medias_Sentiments>;
};

export type Ts_Medias_Sentiments_Aggregate_Fields = {
   __typename?: 'ts_medias_sentiments_aggregate_fields';
  avg?: Maybe<Ts_Medias_Sentiments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Medias_Sentiments_Max_Fields>;
  min?: Maybe<Ts_Medias_Sentiments_Min_Fields>;
  stddev?: Maybe<Ts_Medias_Sentiments_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Medias_Sentiments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Medias_Sentiments_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Medias_Sentiments_Sum_Fields>;
  var_pop?: Maybe<Ts_Medias_Sentiments_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Medias_Sentiments_Var_Samp_Fields>;
  variance?: Maybe<Ts_Medias_Sentiments_Variance_Fields>;
};


export type Ts_Medias_Sentiments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Medias_Sentiments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Medias_Sentiments_Aggregate_Order_By = {
  avg?: Maybe<Ts_Medias_Sentiments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Medias_Sentiments_Max_Order_By>;
  min?: Maybe<Ts_Medias_Sentiments_Min_Order_By>;
  stddev?: Maybe<Ts_Medias_Sentiments_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Medias_Sentiments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Medias_Sentiments_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Medias_Sentiments_Sum_Order_By>;
  var_pop?: Maybe<Ts_Medias_Sentiments_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Medias_Sentiments_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Medias_Sentiments_Variance_Order_By>;
};

export type Ts_Medias_Sentiments_Arr_Rel_Insert_Input = {
  data: Array<Ts_Medias_Sentiments_Insert_Input>;
  on_conflict?: Maybe<Ts_Medias_Sentiments_On_Conflict>;
};

export type Ts_Medias_Sentiments_Avg_Fields = {
   __typename?: 'ts_medias_sentiments_avg_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Avg_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Medias_Sentiments_Bool_Exp>>>;
  _not?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Medias_Sentiments_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  media_id?: Maybe<Int_Comparison_Exp>;
  sentiment_type_id?: Maybe<Int_Comparison_Exp>;
  ts_media?: Maybe<Ts_Medias_Bool_Exp>;
  unique_device_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Ts_Medias_Sentiments_Constraint {
  TsMediasSentimentsPkey = 'ts_medias_sentiments_pkey'
}

export type Ts_Medias_Sentiments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  ts_media?: Maybe<Ts_Medias_Obj_Rel_Insert_Input>;
  unique_device_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Sentiments_Max_Fields = {
   __typename?: 'ts_medias_sentiments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  unique_device_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Sentiments_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  unique_device_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Min_Fields = {
   __typename?: 'ts_medias_sentiments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  unique_device_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Sentiments_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  unique_device_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Mutation_Response = {
   __typename?: 'ts_medias_sentiments_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Ts_Medias_Sentiments>;
};

export type Ts_Medias_Sentiments_Obj_Rel_Insert_Input = {
  data: Ts_Medias_Sentiments_Insert_Input;
  on_conflict?: Maybe<Ts_Medias_Sentiments_On_Conflict>;
};

export type Ts_Medias_Sentiments_On_Conflict = {
  constraint: Ts_Medias_Sentiments_Constraint;
  update_columns: Array<Ts_Medias_Sentiments_Update_Column>;
  where?: Maybe<Ts_Medias_Sentiments_Bool_Exp>;
};

export type Ts_Medias_Sentiments_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
  ts_media?: Maybe<Ts_Medias_Order_By>;
  unique_device_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Ts_Medias_Sentiments_Select_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Id = 'id',
  MediaId = 'media_id',
  SentimentTypeId = 'sentiment_type_id',
  UniqueDeviceId = 'unique_device_id',
  UpdatedAt = 'updated_at'
}

export type Ts_Medias_Sentiments_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
  unique_device_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_Sentiments_Stddev_Fields = {
   __typename?: 'ts_medias_sentiments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Stddev_Pop_Fields = {
   __typename?: 'ts_medias_sentiments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Stddev_Samp_Fields = {
   __typename?: 'ts_medias_sentiments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Sum_Fields = {
   __typename?: 'ts_medias_sentiments_sum_fields';
  id?: Maybe<Scalars['Int']>;
  media_id?: Maybe<Scalars['Int']>;
  sentiment_type_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Sum_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export enum Ts_Medias_Sentiments_Update_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Id = 'id',
  MediaId = 'media_id',
  SentimentTypeId = 'sentiment_type_id',
  UniqueDeviceId = 'unique_device_id',
  UpdatedAt = 'updated_at'
}

export type Ts_Medias_Sentiments_Var_Pop_Fields = {
   __typename?: 'ts_medias_sentiments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Var_Samp_Fields = {
   __typename?: 'ts_medias_sentiments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Variance_Fields = {
   __typename?: 'ts_medias_sentiments_variance_fields';
  id?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
  sentiment_type_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Variance_Order_By = {
  id?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
  sentiment_type_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw = {
   __typename?: 'ts_medias_sentiments_vw';
  dislike_count?: Maybe<Scalars['bigint']>;
  like_count?: Maybe<Scalars['bigint']>;
  media_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Vw_Aggregate = {
   __typename?: 'ts_medias_sentiments_vw_aggregate';
  aggregate?: Maybe<Ts_Medias_Sentiments_Vw_Aggregate_Fields>;
  nodes: Array<Ts_Medias_Sentiments_Vw>;
};

export type Ts_Medias_Sentiments_Vw_Aggregate_Fields = {
   __typename?: 'ts_medias_sentiments_vw_aggregate_fields';
  avg?: Maybe<Ts_Medias_Sentiments_Vw_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Medias_Sentiments_Vw_Max_Fields>;
  min?: Maybe<Ts_Medias_Sentiments_Vw_Min_Fields>;
  stddev?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Medias_Sentiments_Vw_Sum_Fields>;
  var_pop?: Maybe<Ts_Medias_Sentiments_Vw_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Medias_Sentiments_Vw_Var_Samp_Fields>;
  variance?: Maybe<Ts_Medias_Sentiments_Vw_Variance_Fields>;
};


export type Ts_Medias_Sentiments_Vw_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Medias_Sentiments_Vw_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Medias_Sentiments_Vw_Aggregate_Order_By = {
  avg?: Maybe<Ts_Medias_Sentiments_Vw_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Medias_Sentiments_Vw_Max_Order_By>;
  min?: Maybe<Ts_Medias_Sentiments_Vw_Min_Order_By>;
  stddev?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Medias_Sentiments_Vw_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Medias_Sentiments_Vw_Sum_Order_By>;
  var_pop?: Maybe<Ts_Medias_Sentiments_Vw_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Medias_Sentiments_Vw_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Medias_Sentiments_Vw_Variance_Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Avg_Fields = {
   __typename?: 'ts_medias_sentiments_vw_avg_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Avg_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>>>;
  _not?: Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Medias_Sentiments_Vw_Bool_Exp>>>;
  dislike_count?: Maybe<Bigint_Comparison_Exp>;
  like_count?: Maybe<Bigint_Comparison_Exp>;
  media_id?: Maybe<Int_Comparison_Exp>;
};

export type Ts_Medias_Sentiments_Vw_Max_Fields = {
   __typename?: 'ts_medias_sentiments_vw_max_fields';
  dislike_count?: Maybe<Scalars['bigint']>;
  like_count?: Maybe<Scalars['bigint']>;
  media_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Vw_Max_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Min_Fields = {
   __typename?: 'ts_medias_sentiments_vw_min_fields';
  dislike_count?: Maybe<Scalars['bigint']>;
  like_count?: Maybe<Scalars['bigint']>;
  media_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Vw_Min_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export enum Ts_Medias_Sentiments_Vw_Select_Column {
  DislikeCount = 'dislike_count',
  LikeCount = 'like_count',
  MediaId = 'media_id'
}

export type Ts_Medias_Sentiments_Vw_Stddev_Fields = {
   __typename?: 'ts_medias_sentiments_vw_stddev_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Stddev_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Stddev_Pop_Fields = {
   __typename?: 'ts_medias_sentiments_vw_stddev_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Stddev_Pop_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Stddev_Samp_Fields = {
   __typename?: 'ts_medias_sentiments_vw_stddev_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Stddev_Samp_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Sum_Fields = {
   __typename?: 'ts_medias_sentiments_vw_sum_fields';
  dislike_count?: Maybe<Scalars['bigint']>;
  like_count?: Maybe<Scalars['bigint']>;
  media_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sentiments_Vw_Sum_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Var_Pop_Fields = {
   __typename?: 'ts_medias_sentiments_vw_var_pop_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Var_Pop_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Var_Samp_Fields = {
   __typename?: 'ts_medias_sentiments_vw_var_samp_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Var_Samp_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sentiments_Vw_Variance_Fields = {
   __typename?: 'ts_medias_sentiments_vw_variance_fields';
  dislike_count?: Maybe<Scalars['Float']>;
  like_count?: Maybe<Scalars['Float']>;
  media_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Sentiments_Vw_Variance_Order_By = {
  dislike_count?: Maybe<Order_By>;
  like_count?: Maybe<Order_By>;
  media_id?: Maybe<Order_By>;
};

export type Ts_Medias_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Ts_Medias_Stddev_Fields = {
   __typename?: 'ts_medias_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Stddev_Pop_Fields = {
   __typename?: 'ts_medias_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Stddev_Samp_Fields = {
   __typename?: 'ts_medias_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Sum_Fields = {
   __typename?: 'ts_medias_sum_fields';
  id?: Maybe<Scalars['Int']>;
  media_source_id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  trend_id?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_Sum_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export enum Ts_Medias_Update_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  ExternalId = 'external_id',
  Id = 'id',
  MediaSourceId = 'media_source_id',
  Metadata = 'metadata',
  Score = 'score',
  TrendId = 'trend_id',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Ts_Medias_Var_Pop_Fields = {
   __typename?: 'ts_medias_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Var_Samp_Fields = {
   __typename?: 'ts_medias_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Medias_Variance_Fields = {
   __typename?: 'ts_medias_variance_fields';
  id?: Maybe<Scalars['Float']>;
  media_source_id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  trend_id?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_Variance_Order_By = {
  id?: Maybe<Order_By>;
  media_source_id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_id?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw = {
   __typename?: 'ts_top_trends_vw';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Top_Trends_Vw_Aggregate = {
   __typename?: 'ts_top_trends_vw_aggregate';
  aggregate?: Maybe<Ts_Top_Trends_Vw_Aggregate_Fields>;
  nodes: Array<Ts_Top_Trends_Vw>;
};

export type Ts_Top_Trends_Vw_Aggregate_Fields = {
   __typename?: 'ts_top_trends_vw_aggregate_fields';
  avg?: Maybe<Ts_Top_Trends_Vw_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Top_Trends_Vw_Max_Fields>;
  min?: Maybe<Ts_Top_Trends_Vw_Min_Fields>;
  stddev?: Maybe<Ts_Top_Trends_Vw_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Top_Trends_Vw_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Top_Trends_Vw_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Top_Trends_Vw_Sum_Fields>;
  var_pop?: Maybe<Ts_Top_Trends_Vw_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Top_Trends_Vw_Var_Samp_Fields>;
  variance?: Maybe<Ts_Top_Trends_Vw_Variance_Fields>;
};


export type Ts_Top_Trends_Vw_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Top_Trends_Vw_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Top_Trends_Vw_Aggregate_Order_By = {
  avg?: Maybe<Ts_Top_Trends_Vw_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Top_Trends_Vw_Max_Order_By>;
  min?: Maybe<Ts_Top_Trends_Vw_Min_Order_By>;
  stddev?: Maybe<Ts_Top_Trends_Vw_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Top_Trends_Vw_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Top_Trends_Vw_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Top_Trends_Vw_Sum_Order_By>;
  var_pop?: Maybe<Ts_Top_Trends_Vw_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Top_Trends_Vw_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Top_Trends_Vw_Variance_Order_By>;
};

export type Ts_Top_Trends_Vw_Avg_Fields = {
   __typename?: 'ts_top_trends_vw_avg_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Avg_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Top_Trends_Vw_Bool_Exp>>>;
  _not?: Maybe<Ts_Top_Trends_Vw_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Top_Trends_Vw_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  hashtag?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Ts_Top_Trends_Vw_Max_Fields = {
   __typename?: 'ts_top_trends_vw_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Top_Trends_Vw_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Min_Fields = {
   __typename?: 'ts_top_trends_vw_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Top_Trends_Vw_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Ts_Top_Trends_Vw_Select_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Hashtag = 'hashtag',
  Id = 'id',
  Name = 'name',
  Score = 'score',
  UpdatedAt = 'updated_at'
}

export type Ts_Top_Trends_Vw_Stddev_Fields = {
   __typename?: 'ts_top_trends_vw_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Stddev_Pop_Fields = {
   __typename?: 'ts_top_trends_vw_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Stddev_Samp_Fields = {
   __typename?: 'ts_top_trends_vw_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Sum_Fields = {
   __typename?: 'ts_top_trends_vw_sum_fields';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Ts_Top_Trends_Vw_Sum_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Var_Pop_Fields = {
   __typename?: 'ts_top_trends_vw_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Var_Samp_Fields = {
   __typename?: 'ts_top_trends_vw_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Top_Trends_Vw_Variance_Fields = {
   __typename?: 'ts_top_trends_vw_variance_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Top_Trends_Vw_Variance_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends = {
   __typename?: 'ts_trends';
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  score: Scalars['Int'];
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type Ts_TrendsTs_MediasArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};


export type Ts_TrendsTs_Medias_AggregateArgs = {
  distinct_on?: Maybe<Array<Ts_Medias_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_Order_By>>;
  where?: Maybe<Ts_Medias_Bool_Exp>;
};

export type Ts_Trends_Aggregate = {
   __typename?: 'ts_trends_aggregate';
  aggregate?: Maybe<Ts_Trends_Aggregate_Fields>;
  nodes: Array<Ts_Trends>;
};

export type Ts_Trends_Aggregate_Fields = {
   __typename?: 'ts_trends_aggregate_fields';
  avg?: Maybe<Ts_Trends_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ts_Trends_Max_Fields>;
  min?: Maybe<Ts_Trends_Min_Fields>;
  stddev?: Maybe<Ts_Trends_Stddev_Fields>;
  stddev_pop?: Maybe<Ts_Trends_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ts_Trends_Stddev_Samp_Fields>;
  sum?: Maybe<Ts_Trends_Sum_Fields>;
  var_pop?: Maybe<Ts_Trends_Var_Pop_Fields>;
  var_samp?: Maybe<Ts_Trends_Var_Samp_Fields>;
  variance?: Maybe<Ts_Trends_Variance_Fields>;
};


export type Ts_Trends_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ts_Trends_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ts_Trends_Aggregate_Order_By = {
  avg?: Maybe<Ts_Trends_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ts_Trends_Max_Order_By>;
  min?: Maybe<Ts_Trends_Min_Order_By>;
  stddev?: Maybe<Ts_Trends_Stddev_Order_By>;
  stddev_pop?: Maybe<Ts_Trends_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ts_Trends_Stddev_Samp_Order_By>;
  sum?: Maybe<Ts_Trends_Sum_Order_By>;
  var_pop?: Maybe<Ts_Trends_Var_Pop_Order_By>;
  var_samp?: Maybe<Ts_Trends_Var_Samp_Order_By>;
  variance?: Maybe<Ts_Trends_Variance_Order_By>;
};

export type Ts_Trends_Arr_Rel_Insert_Input = {
  data: Array<Ts_Trends_Insert_Input>;
  on_conflict?: Maybe<Ts_Trends_On_Conflict>;
};

export type Ts_Trends_Avg_Fields = {
   __typename?: 'ts_trends_avg_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Avg_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Trends_Bool_Exp>>>;
  _not?: Maybe<Ts_Trends_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Trends_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  hashtag?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  ts_medias?: Maybe<Ts_Medias_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Ts_Trends_Constraint {
  TsTrendsHashtagKey = 'ts_trends_hashtag_key',
  TsTrendsNameKey = 'ts_trends_name_key',
  TsTrendsPkey = 'ts_trends_pkey'
}

export type Ts_Trends_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Ts_Trends_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  ts_medias?: Maybe<Ts_Medias_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Trends_Max_Fields = {
   __typename?: 'ts_trends_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Trends_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Trends_Min_Fields = {
   __typename?: 'ts_trends_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Trends_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Trends_Mutation_Response = {
   __typename?: 'ts_trends_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Ts_Trends>;
};

export type Ts_Trends_Obj_Rel_Insert_Input = {
  data: Ts_Trends_Insert_Input;
  on_conflict?: Maybe<Ts_Trends_On_Conflict>;
};

export type Ts_Trends_On_Conflict = {
  constraint: Ts_Trends_Constraint;
  update_columns: Array<Ts_Trends_Update_Column>;
  where?: Maybe<Ts_Trends_Bool_Exp>;
};

export type Ts_Trends_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  hashtag?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  ts_medias_aggregate?: Maybe<Ts_Medias_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Ts_Trends_Select_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Hashtag = 'hashtag',
  Id = 'id',
  Name = 'name',
  Score = 'score',
  UpdatedAt = 'updated_at'
}

export type Ts_Trends_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  hashtag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Trends_Stddev_Fields = {
   __typename?: 'ts_trends_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Stddev_Pop_Fields = {
   __typename?: 'ts_trends_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Stddev_Samp_Fields = {
   __typename?: 'ts_trends_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Sum_Fields = {
   __typename?: 'ts_trends_sum_fields';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Ts_Trends_Sum_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export enum Ts_Trends_Update_Column {
  CreatedAt = 'created_at',
  DeletedAt = 'deleted_at',
  Hashtag = 'hashtag',
  Id = 'id',
  Name = 'name',
  Score = 'score',
  UpdatedAt = 'updated_at'
}

export type Ts_Trends_Var_Pop_Fields = {
   __typename?: 'ts_trends_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Var_Samp_Fields = {
   __typename?: 'ts_trends_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Ts_Trends_Variance_Fields = {
   __typename?: 'ts_trends_variance_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Trends_Variance_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type InsertTsMediaSentimentsMutationVariables = {
  mediaId: Scalars['Int'];
  uniqueDeviceId: Scalars['String'];
  sentimentTypeId: Scalars['Int'];
};


export type InsertTsMediaSentimentsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_ts_medias_sentiments: Maybe<(
    { __typename?: 'ts_medias_sentiments_mutation_response' }
    & Pick<Ts_Medias_Sentiments_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'ts_medias_sentiments' }
      & Pick<Ts_Medias_Sentiments, 'media_id' | 'sentiment_type_id'>
    )> }
  )> }
);

export type DeleteTsMediaSentimentsMutationVariables = {
  mediaId: Scalars['Int'];
  uniqueDeviceId: Scalars['String'];
  sentimentTypeId: Scalars['Int'];
};


export type DeleteTsMediaSentimentsMutation = (
  { __typename?: 'mutation_root' }
  & { delete_ts_medias_sentiments: Maybe<(
    { __typename?: 'ts_medias_sentiments_mutation_response' }
    & Pick<Ts_Medias_Sentiments_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'ts_medias_sentiments' }
      & Pick<Ts_Medias_Sentiments, 'media_id' | 'sentiment_type_id'>
    )> }
  )> }
);

export type GetTsTopTrendsQueryVariables = {};


export type GetTsTopTrendsQuery = (
  { __typename?: 'query_root' }
  & { ts_top_trends_vw: Array<(
    { __typename?: 'ts_top_trends_vw' }
    & Pick<Ts_Top_Trends_Vw, 'id' | 'hashtag'>
  )> }
);

export type GetMediasByTopTrendsQueryVariables = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  uniqueDeviceId: Scalars['String'];
};


export type GetMediasByTopTrendsQuery = (
  { __typename?: 'query_root' }
  & { read_top_medias_by_top_trends: Array<(
    { __typename?: 'read_top_medias_by_top_trends_fn' }
    & Pick<Read_Top_Medias_By_Top_Trends_Fn, 'id' | 'uuid' | 'external_id' | 'metadata' | 'media_source_name' | 'trend_name' | 'like_count' | 'dislike_count' | 'sentiment_type_id' | 'created_at'>
  )> }
);


export const InsertTsMediaSentimentsDocument = gql`
    mutation InsertTsMediaSentiments($mediaId: Int!, $uniqueDeviceId: String!, $sentimentTypeId: Int!) {
  insert_ts_medias_sentiments(objects: {media_id: $mediaId, unique_device_id: $uniqueDeviceId, sentiment_type_id: $sentimentTypeId}) {
    affected_rows
    returning {
      media_id
      sentiment_type_id
    }
  }
}
    `;
export type InsertTsMediaSentimentsMutationFn = ApolloReactCommon.MutationFunction<InsertTsMediaSentimentsMutation, InsertTsMediaSentimentsMutationVariables>;

/**
 * __useInsertTsMediaSentimentsMutation__
 *
 * To run a mutation, you first call `useInsertTsMediaSentimentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTsMediaSentimentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTsMediaSentimentsMutation, { data, loading, error }] = useInsertTsMediaSentimentsMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      uniqueDeviceId: // value for 'uniqueDeviceId'
 *      sentimentTypeId: // value for 'sentimentTypeId'
 *   },
 * });
 */
export function useInsertTsMediaSentimentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTsMediaSentimentsMutation, InsertTsMediaSentimentsMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTsMediaSentimentsMutation, InsertTsMediaSentimentsMutationVariables>(InsertTsMediaSentimentsDocument, baseOptions);
      }
export type InsertTsMediaSentimentsMutationHookResult = ReturnType<typeof useInsertTsMediaSentimentsMutation>;
export type InsertTsMediaSentimentsMutationResult = ApolloReactCommon.MutationResult<InsertTsMediaSentimentsMutation>;
export type InsertTsMediaSentimentsMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTsMediaSentimentsMutation, InsertTsMediaSentimentsMutationVariables>;
export const DeleteTsMediaSentimentsDocument = gql`
    mutation DeleteTsMediaSentiments($mediaId: Int!, $uniqueDeviceId: String!, $sentimentTypeId: Int!) {
  delete_ts_medias_sentiments(where: {_and: {media_id: {_eq: $mediaId}, unique_device_id: {_eq: $uniqueDeviceId}, sentiment_type_id: {_eq: $sentimentTypeId}}}) {
    affected_rows
    returning {
      media_id
      sentiment_type_id
    }
  }
}
    `;
export type DeleteTsMediaSentimentsMutationFn = ApolloReactCommon.MutationFunction<DeleteTsMediaSentimentsMutation, DeleteTsMediaSentimentsMutationVariables>;

/**
 * __useDeleteTsMediaSentimentsMutation__
 *
 * To run a mutation, you first call `useDeleteTsMediaSentimentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTsMediaSentimentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTsMediaSentimentsMutation, { data, loading, error }] = useDeleteTsMediaSentimentsMutation({
 *   variables: {
 *      mediaId: // value for 'mediaId'
 *      uniqueDeviceId: // value for 'uniqueDeviceId'
 *      sentimentTypeId: // value for 'sentimentTypeId'
 *   },
 * });
 */
export function useDeleteTsMediaSentimentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTsMediaSentimentsMutation, DeleteTsMediaSentimentsMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTsMediaSentimentsMutation, DeleteTsMediaSentimentsMutationVariables>(DeleteTsMediaSentimentsDocument, baseOptions);
      }
export type DeleteTsMediaSentimentsMutationHookResult = ReturnType<typeof useDeleteTsMediaSentimentsMutation>;
export type DeleteTsMediaSentimentsMutationResult = ApolloReactCommon.MutationResult<DeleteTsMediaSentimentsMutation>;
export type DeleteTsMediaSentimentsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTsMediaSentimentsMutation, DeleteTsMediaSentimentsMutationVariables>;
export const GetTsTopTrendsDocument = gql`
    query GetTsTopTrends {
  ts_top_trends_vw {
    id
    hashtag
  }
}
    `;

/**
 * __useGetTsTopTrendsQuery__
 *
 * To run a query within a React component, call `useGetTsTopTrendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTsTopTrendsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTsTopTrendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTsTopTrendsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTsTopTrendsQuery, GetTsTopTrendsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTsTopTrendsQuery, GetTsTopTrendsQueryVariables>(GetTsTopTrendsDocument, baseOptions);
      }
export function useGetTsTopTrendsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTsTopTrendsQuery, GetTsTopTrendsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTsTopTrendsQuery, GetTsTopTrendsQueryVariables>(GetTsTopTrendsDocument, baseOptions);
        }
export type GetTsTopTrendsQueryHookResult = ReturnType<typeof useGetTsTopTrendsQuery>;
export type GetTsTopTrendsLazyQueryHookResult = ReturnType<typeof useGetTsTopTrendsLazyQuery>;
export type GetTsTopTrendsQueryResult = ApolloReactCommon.QueryResult<GetTsTopTrendsQuery, GetTsTopTrendsQueryVariables>;
export const GetMediasByTopTrendsDocument = gql`
    query GetMediasByTopTrends($limit: Int!, $offset: Int!, $uniqueDeviceId: String!) {
  read_top_medias_by_top_trends(args: {limit: $limit, offset: $offset, user_unique_device_id: $uniqueDeviceId}) @connection(key: "read_top_medias_by_top_trends") {
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

/**
 * __useGetMediasByTopTrendsQuery__
 *
 * To run a query within a React component, call `useGetMediasByTopTrendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediasByTopTrendsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediasByTopTrendsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      uniqueDeviceId: // value for 'uniqueDeviceId'
 *   },
 * });
 */
export function useGetMediasByTopTrendsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMediasByTopTrendsQuery, GetMediasByTopTrendsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMediasByTopTrendsQuery, GetMediasByTopTrendsQueryVariables>(GetMediasByTopTrendsDocument, baseOptions);
      }
export function useGetMediasByTopTrendsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMediasByTopTrendsQuery, GetMediasByTopTrendsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMediasByTopTrendsQuery, GetMediasByTopTrendsQueryVariables>(GetMediasByTopTrendsDocument, baseOptions);
        }
export type GetMediasByTopTrendsQueryHookResult = ReturnType<typeof useGetMediasByTopTrendsQuery>;
export type GetMediasByTopTrendsLazyQueryHookResult = ReturnType<typeof useGetMediasByTopTrendsLazyQuery>;
export type GetMediasByTopTrendsQueryResult = ApolloReactCommon.QueryResult<GetMediasByTopTrendsQuery, GetMediasByTopTrendsQueryVariables>;
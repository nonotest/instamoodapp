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
  delete_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  delete_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  delete_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
  insert_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  insert_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  insert_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
  update_ts_media_sources?: Maybe<Ts_Media_Sources_Mutation_Response>;
  update_ts_medias?: Maybe<Ts_Medias_Mutation_Response>;
  update_ts_trends?: Maybe<Ts_Trends_Mutation_Response>;
};


export type Mutation_RootDelete_Ts_Media_SourcesArgs = {
  where: Ts_Media_Sources_Bool_Exp;
};


export type Mutation_RootDelete_Ts_MediasArgs = {
  where: Ts_Medias_Bool_Exp;
};


export type Mutation_RootDelete_Ts_TrendsArgs = {
  where: Ts_Trends_Bool_Exp;
};


export type Mutation_RootInsert_Ts_Media_SourcesArgs = {
  objects: Array<Ts_Media_Sources_Insert_Input>;
  on_conflict?: Maybe<Ts_Media_Sources_On_Conflict>;
};


export type Mutation_RootInsert_Ts_MediasArgs = {
  objects: Array<Ts_Medias_Insert_Input>;
  on_conflict?: Maybe<Ts_Medias_On_Conflict>;
};


export type Mutation_RootInsert_Ts_TrendsArgs = {
  objects: Array<Ts_Trends_Insert_Input>;
  on_conflict?: Maybe<Ts_Trends_On_Conflict>;
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
  read_top_medias_by_top_trends: Array<Ts_Medias_By_Top_Trends_Vw>;
  read_top_medias_by_top_trends_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_media_sources: Array<Ts_Media_Sources>;
  ts_media_sources_aggregate: Ts_Media_Sources_Aggregate;
  ts_media_sources_by_pk?: Maybe<Ts_Media_Sources>;
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  ts_medias_by_pk?: Maybe<Ts_Medias>;
  ts_medias_by_top_trends_vw: Array<Ts_Medias_By_Top_Trends_Vw>;
  ts_medias_by_top_trends_vw_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_top_trends_vw: Array<Ts_Top_Trends_Vw>;
  ts_top_trends_vw_aggregate: Ts_Top_Trends_Vw_Aggregate;
  ts_trends: Array<Ts_Trends>;
  ts_trends_aggregate: Ts_Trends_Aggregate;
  ts_trends_by_pk?: Maybe<Ts_Trends>;
};


export type Query_RootRead_Top_Medias_By_Top_TrendsArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Query_RootRead_Top_Medias_By_Top_Trends_AggregateArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
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
  read_top_medias_by_top_trends: Array<Ts_Medias_By_Top_Trends_Vw>;
  read_top_medias_by_top_trends_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_media_sources: Array<Ts_Media_Sources>;
  ts_media_sources_aggregate: Ts_Media_Sources_Aggregate;
  ts_media_sources_by_pk?: Maybe<Ts_Media_Sources>;
  ts_medias: Array<Ts_Medias>;
  ts_medias_aggregate: Ts_Medias_Aggregate;
  ts_medias_by_pk?: Maybe<Ts_Medias>;
  ts_medias_by_top_trends_vw: Array<Ts_Medias_By_Top_Trends_Vw>;
  ts_medias_by_top_trends_vw_aggregate: Ts_Medias_By_Top_Trends_Vw_Aggregate;
  ts_top_trends_vw: Array<Ts_Top_Trends_Vw>;
  ts_top_trends_vw_aggregate: Ts_Top_Trends_Vw_Aggregate;
  ts_trends: Array<Ts_Trends>;
  ts_trends_aggregate: Ts_Trends_Aggregate;
  ts_trends_by_pk?: Maybe<Ts_Trends>;
};


export type Subscription_RootRead_Top_Medias_By_Top_TrendsArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
};


export type Subscription_RootRead_Top_Medias_By_Top_Trends_AggregateArgs = {
  args: Read_Top_Medias_By_Top_Trends_Args;
  distinct_on?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ts_Medias_By_Top_Trends_Vw_Order_By>>;
  where?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
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
  ts_trend?: Maybe<Ts_Trends>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};


export type Ts_MediasMetadataArgs = {
  path?: Maybe<Scalars['String']>;
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
  ts_trend?: Maybe<Ts_Trends_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

export type Ts_Medias_By_Top_Trends_Vw = {
   __typename?: 'ts_medias_by_top_trends_vw';
  created_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
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
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Avg_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>>>;
  _not?: Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ts_Medias_By_Top_Trends_Vw_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  external_id?: Maybe<String_Comparison_Exp>;
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
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Min_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  external_id?: Maybe<Scalars['String']>;
  media_source_name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  trend_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
  media_source_name?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  trend_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Order_By = {
  created_at?: Maybe<Order_By>;
  external_id?: Maybe<Order_By>;
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
  MediaSourceName = 'media_source_name',
  Metadata = 'metadata',
  Score = 'score',
  TrendName = 'trend_name',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_stddev_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Stddev_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Sum_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_sum_fields';
  score?: Maybe<Scalars['Int']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Sum_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Pop_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_var_pop_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Pop_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Samp_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_var_samp_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Var_Samp_Order_By = {
  score?: Maybe<Order_By>;
};

export type Ts_Medias_By_Top_Trends_Vw_Variance_Fields = {
   __typename?: 'ts_medias_by_top_trends_vw_variance_fields';
  score?: Maybe<Scalars['Float']>;
};

export type Ts_Medias_By_Top_Trends_Vw_Variance_Order_By = {
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

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = (
  { __typename?: 'query_root' }
  & { ts_top_trends_vw: Array<(
    { __typename?: 'ts_top_trends_vw' }
    & Pick<Ts_Top_Trends_Vw, 'id' | 'hashtag'>
  )> }
);

export type GetMediasByTopTrendsQueryQueryVariables = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type GetMediasByTopTrendsQueryQuery = (
  { __typename?: 'query_root' }
  & { read_top_medias_by_top_trends: Array<(
    { __typename?: 'ts_medias_by_top_trends_vw' }
    & Pick<Ts_Medias_By_Top_Trends_Vw, 'uuid' | 'external_id' | 'metadata' | 'media_source_name' | 'trend_name' | 'created_at'>
  )> }
);


export const GetMediasByTopTrendsQueryDocument = gql`
    query GetMediasByTopTrendsQuery($limit: Int!, $offset: Int!) {
  read_top_medias_by_top_trends(args: {limit: $limit, offset: $offset}) {
    uuid
    external_id
    metadata
    media_source_name
    trend_name
    created_at
  }
}
    `;

/**
 * __useGetMediasByTopTrendsQueryQuery__
 *
 * To run a query within a React component, call `useGetMediasByTopTrendsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMediasByTopTrendsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMediasByTopTrendsQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetMediasByTopTrendsQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMediasByTopTrendsQueryQuery, GetMediasByTopTrendsQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMediasByTopTrendsQueryQuery, GetMediasByTopTrendsQueryQueryVariables>(GetMediasByTopTrendsQueryDocument, baseOptions);
      }
export function useGetMediasByTopTrendsQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMediasByTopTrendsQueryQuery, GetMediasByTopTrendsQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMediasByTopTrendsQueryQuery, GetMediasByTopTrendsQueryQueryVariables>(GetMediasByTopTrendsQueryDocument, baseOptions);
        }
export type GetMediasByTopTrendsQueryQueryHookResult = ReturnType<typeof useGetMediasByTopTrendsQueryQuery>;
export type GetMediasByTopTrendsQueryLazyQueryHookResult = ReturnType<typeof useGetMediasByTopTrendsQueryLazyQuery>;
export type GetMediasByTopTrendsQueryQueryResult = ApolloReactCommon.QueryResult<GetMediasByTopTrendsQueryQuery, GetMediasByTopTrendsQueryQueryVariables>;
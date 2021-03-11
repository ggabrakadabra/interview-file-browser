import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  listEntries?: Maybe<ListEntriesResult>;
  entriesSummary?: Maybe<SummaryResult>;
};

export type QueryListEntriesArgs = {
  path: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
};

export type QueryEntriesSummaryArgs = {
  path: Scalars['String'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
};

export type ListEntriesResult = {
  __typename?: 'ListEntriesResult';
  pagination: Pagination;
  entries: Array<Maybe<Entry>>;
};

export type SummaryResult = {
  __typename?: 'SummaryResult';
  totalNumberOfFiles?: Maybe<Scalars['Int']>;
  totalSize?: Maybe<Scalars['Int']>;
};

export type File = {
  __typename?: 'File';
  path: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  lastModified: Scalars['String'];
};

export type Directory = {
  __typename?: 'Directory';
  path: Scalars['String'];
  name: Scalars['String'];
};

export type Entry = File | Directory;

export type EntriesSummaryQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type EntriesSummaryQuery = (
  { __typename?: 'Query' }
  & { entriesSummary?: Maybe<(
    { __typename?: 'SummaryResult' }
    & Pick<SummaryResult, 'totalSize' | 'totalNumberOfFiles'>
  )> }
);

export type ListEntriesQueryVariables = Exact<{
  path: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
}>;


export type ListEntriesQuery = (
  { __typename?: 'Query' }
  & { listEntries?: Maybe<(
    { __typename?: 'ListEntriesResult' }
    & { pagination: (
      { __typename?: 'Pagination' }
      & Pick<Pagination, 'page' | 'pageCount' | 'prevPage' | 'nextPage'>
    ), entries: Array<Maybe<(
      { __typename: 'File' }
      & Pick<File, 'path' | 'name' | 'size' | 'lastModified'>
    ) | (
      { __typename: 'Directory' }
      & Pick<Directory, 'path' | 'name'>
    )>> }
  )> }
);


export const EntriesSummaryDocument = gql`
    query EntriesSummary($path: String!) {
  entriesSummary(path: $path) {
    totalSize
    totalNumberOfFiles
  }
}
    `;

/**
 * __useEntriesSummaryQuery__
 *
 * To run a query within a React component, call `useEntriesSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntriesSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntriesSummaryQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useEntriesSummaryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EntriesSummaryQuery, EntriesSummaryQueryVariables>) {
        return ApolloReactHooks.useQuery<EntriesSummaryQuery, EntriesSummaryQueryVariables>(EntriesSummaryDocument, baseOptions);
      }
export function useEntriesSummaryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EntriesSummaryQuery, EntriesSummaryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EntriesSummaryQuery, EntriesSummaryQueryVariables>(EntriesSummaryDocument, baseOptions);
        }
export type EntriesSummaryQueryHookResult = ReturnType<typeof useEntriesSummaryQuery>;
export type EntriesSummaryLazyQueryHookResult = ReturnType<typeof useEntriesSummaryLazyQuery>;
export type EntriesSummaryQueryResult = ApolloReactCommon.QueryResult<EntriesSummaryQuery, EntriesSummaryQueryVariables>;
export const ListEntriesDocument = gql`
    query ListEntries($path: String!, $page: Int) {
  listEntries(path: $path, page: $page) {
    pagination {
      page
      pageCount
      prevPage
      nextPage
    }
    entries {
      __typename
      ... on File {
        path
        name
        size
        lastModified
      }
      ... on Directory {
        path
        name
      }
    }
  }
}
    `;

/**
 * __useListEntriesQuery__
 *
 * To run a query within a React component, call `useListEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEntriesQuery({
 *   variables: {
 *      path: // value for 'path'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useListEntriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListEntriesQuery, ListEntriesQueryVariables>) {
        return ApolloReactHooks.useQuery<ListEntriesQuery, ListEntriesQueryVariables>(ListEntriesDocument, baseOptions);
      }
export function useListEntriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListEntriesQuery, ListEntriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListEntriesQuery, ListEntriesQueryVariables>(ListEntriesDocument, baseOptions);
        }
export type ListEntriesQueryHookResult = ReturnType<typeof useListEntriesQuery>;
export type ListEntriesLazyQueryHookResult = ReturnType<typeof useListEntriesLazyQuery>;
export type ListEntriesQueryResult = ApolloReactCommon.QueryResult<ListEntriesQuery, ListEntriesQueryVariables>;

module.exports = {
  schema: [
    {
      'http://graphql-engine:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'myadminsecretkey'
        }
      }
    }
  ],
  documents: ['/mobile/src/gql/*.ts'],
  overwrite: true,
  generates: {
    '/mobile/src/generated/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

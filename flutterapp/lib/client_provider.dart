import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:flutter/material.dart';

String uuidFromObject(Object object) {
  if (object is Map<String, Object>) {
    final String typeName = object['__typename'] as String;
    final String id = object['id'].toString();
    if (typeName != null && id != null) {
      return <String>[typeName, id].join('/');
    }
  }
  return null;
}

final OptimisticCache cache = OptimisticCache(
  dataIdFromObject: uuidFromObject,
);

ValueNotifier<GraphQLClient> clientFor({
  @required String uri,
}) {
  final ErrorLink errorLink = ErrorLink(errorHandler: (ErrorResponse response) {
    Operation operation = response.operation;
    FetchResult result = response.fetchResult;
    OperationException exception = response.exception;
    print(exception.toString());
  });

  Link link = HttpLink(
    uri: uri,
    headers: {
      'x-hasura-admin-secret': 'myadminsecretkey',
    },
  );

  return ValueNotifier<GraphQLClient>(
    GraphQLClient(
      cache: InMemoryCache(),
      link: Link.from([errorLink, link]),
    ),
  );
}

/// Wraps the root application with the `graphql_flutter` client.
/// We use the cache for all state management.
class ClientProvider extends StatelessWidget {
  ClientProvider({
    @required this.child,
    @required String uri,
  }) : client = clientFor(
          uri: uri,
        );

  final Widget child;
  final ValueNotifier<GraphQLClient> client;

  @override
  Widget build(BuildContext context) {
    return GraphQLProvider(
      client: client,
      child: child,
    );
  }
}

import 'package:flutter/material.dart';
import './client_provider.dart';
import './medias_list.dart';

final String GRAPHQL_ENDPOINT = 'http://localhost:8080/v1/graphql';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ClientProvider(
      uri: GRAPHQL_ENDPOINT,
      child: MaterialApp(
        title: 'Le Feed',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyHomePage(title: 'Le Feed'),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text(
            "Le Feed",
            style: new TextStyle(color: Colors.white),
          ),
        ),
        body: new Container(
          child: new Center(
            // Use future builder and DefaultAssetBundle to load the local JSON file
            child: new PagingMedias(),
          ),
        ));
  }
}

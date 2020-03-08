import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutterapp/media.dart';
import 'package:flutterapp/medias.dart';
import 'package:flutter/services.dart' show rootBundle;

void main() {
  runApp(new MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: new ThemeData(
      primaryColor: const Color(0xFF02BB9F),
      primaryColorDark: const Color(0xFF167F67),
      accentColor: const Color(0xFF167F67),
    ),
    home: new MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  @override
  MyAppState createState() => new MyAppState();
}

class MyAppState extends State<MyApp> {
  List data;

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
            child: new FutureBuilder(
                future: rootBundle.loadString('assets/medias.json'),
                builder: (context, snapshot) {
                  List<Media> medias = parseJson(snapshot.data.toString());
                  return medias.isNotEmpty
                      ? new Column(children: <Widget>[
                          new Expanded(
                              child: Container(
                                  child: new MediaList(medias: medias)))
                        ])
                      : new Center(child: new CircularProgressIndicator());
                }),
          ),
        ));
  }

  List<Media> parseJson(String response) {
    if (response == null) {
      return [];
    }
    final parsed =
        json.decode(response.toString()).cast<Map<String, dynamic>>();
    return parsed.map<Media>((json) => new Media.fromJson(json)).toList();
  }
}

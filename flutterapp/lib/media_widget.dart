import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutterapp/media.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'dart:convert';

MemoryImage imageFromBase64String(String base64String) {
  return MemoryImage(base64Decode(base64String));
}

class DisplayMedias extends StatelessWidget {
  const DisplayMedias({
    Key key,
    @required this.medias,
  }) : super(key: key);

  final List<Media> medias;

  @override
  Widget build(BuildContext context) {
    return new ListView.builder(
        physics: const AlwaysScrollableScrollPhysics(), // new
        itemCount: medias == null ? 0 : medias.length,
        itemBuilder: (BuildContext context, int index) {
          return new Card(
            child: new Container(
              child: new Center(
                  child: new Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  CachedNetworkImage(
                    imageUrl: medias[index].metadata.url,
                    placeholder: (BuildContext context, String url) =>
                        Container(
                      width: 320,
                      height: 240,
                      color: Colors.purple,
                    ),
                    errorWidget: (context, url, error) => Icon(Icons.error),
                  ),
                  new Text(medias[index].trendName),
                ],
              )),
              padding: const EdgeInsets.all(15.0),
            ),
          );
        });
  }
}

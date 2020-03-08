class Media {
  String _uuid;
  String _externalId;
  Metadata _metadata;
  String _mediaSourceName;
  String _trendName;
  String _createdAt;

  Media(
      {String uuid,
      String externalId,
      Metadata metadata,
      String mediaSourceName,
      String trendName,
      String createdAt}) {
    this._uuid = uuid;
    this._externalId = externalId;
    this._metadata = metadata;
    this._mediaSourceName = mediaSourceName;
    this._trendName = trendName;
    this._createdAt = createdAt;
  }

  String get uuid => _uuid;
  set uuid(String uuid) => _uuid = uuid;
  String get externalId => _externalId;
  set externalId(String externalId) => _externalId = externalId;
  Metadata get metadata => _metadata;
  set metadata(Metadata metadata) => _metadata = metadata;
  String get mediaSourceName => _mediaSourceName;
  set mediaSourceName(String mediaSourceName) =>
      _mediaSourceName = mediaSourceName;
  String get trendName => _trendName;
  set trendName(String trendName) => _trendName = trendName;
  String get createdAt => _createdAt;
  set createdAt(String createdAt) => _createdAt = createdAt;

  Media.fromJson(Map<String, dynamic> json) {
    _uuid = json['uuid'];
    _externalId = json['external_id'];
    _metadata = json['metadata'] != null
        ? new Metadata.fromJson(json['metadata'])
        : null;
    _mediaSourceName = json['media_source_name'];
    _trendName = json['trend_name'];
    _createdAt = json['created_at'];
  }
}

class Metadata {
  String _url;

  Metadata({String url}) {
    this._url = url;
  }

  String get url => _url;
  set url(String url) => _url = url;

  Metadata.fromJson(Map<String, dynamic> json) {
    _url = json['url'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['url'] = this._url;
    return data;
  }
}

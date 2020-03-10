# Build

```
go build --tags netgo --ldflags '-extldflags "-lm -lstdc++ -static"
```

# Importing trends

Australia WOED: 1098081

```
curl --location --request GET 'https://api.twitter.com/1.1/trends/place.json?id=1098081' \
--header 'Authorization: '
```

# Remove the root array element in the json response.

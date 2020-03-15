import React, { useState } from 'react';
import {
  Keyboard,
  Button,
  InputAccessoryView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { DateTime } from 'luxon';
import { withApollo } from 'react-apollo';
import {
  useInsertTsMediaCommentsMutation,
  useGetCommentsForMediaQuery,
  useSubscribeCommentsForMediaSubscription,
  GetCommentsForMediaDocument,
} from '../../generated/graphql';
import { useStore } from '../../context/StoreContext';
import { Avatar } from 'react-native-elements';

function Comment({ comment }) {
  const dt = DateTime.fromISO(comment.created_at, { zone: 'utc' });

  return (
    <View style={styles.commentWrapper}>
      <View style={styles.header}>
        <Avatar
          source={{
            uri:
              'https://i.pinimg.com/564x/aa/2a/46/aa2a4680ac35dadccb21ed83e8c7ddf1.jpg',
          }}
          rounded
          size={30}
        />
        <View
          style={{
            paddingHorizontal: 5,
            paddingVertical: 2,
            flex: 1,
            minHeight: 35,
          }}
        >
          <Text style={styles.username}>
            {comment.unique_device_id.substr(0, 10)}
            <Text style={styles.commentText}>
              {'  '} {comment.comment}
            </Text>
          </Text>
        </View>
        <View>
          <FontAwesome5 name="heart" size={16} solid />
        </View>
      </View>
      <View>
        <Text>{dt.toRelative()}</Text>
      </View>
    </View>
  );
}

function TextInputBar({ deviceId, media }) {
  const [comment, setComment] = useState('');
  const [insertComment] = useInsertTsMediaCommentsMutation();

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => {
          setComment(text);
        }}
        value={comment}
        placeholder={'Add a comment...'}
      />
      <Button
        onPress={async () => {
          const res = await insertComment({
            variables: {
              mediaId: media.id,
              uniqueDeviceId: deviceId,
              comment,
            },
          });
          if (!res.errors) {
            setComment('');
            Keyboard.dismiss();
          }
        }}
        title="Send"
      />
    </View>
  );
}

const BAR_HEIGHT = 44;
function CommentsScreen({ route, client }) {
  const { media } = route.params;

  const { uniqueDeviceId } = useStore();
  const { loading, error, data } = useGetCommentsForMediaQuery({
    variables: {
      mediaId: media.id,
    },
  });

  const {
    error: wsError,
    loading: wsLoading,
  } = useSubscribeCommentsForMediaSubscription({
    variables: {
      mediaId: media.id,
    },
    onSubscriptionData: event => {
      if (event.subscriptionData.data.ts_medias_comments.length > 0) {
        // new to add to apollo cache
        let localData;
        try {
          localData = client.readQuery({
            query: GetCommentsForMediaDocument,
            variables: {
              mediaId: media.id,
            },
          });
        } catch (e) {
          console.log({ e });
          return;
        }

        const comments = event.subscriptionData.data.ts_medias_comments;
        const newData = localData.ts_medias_comments.concat(comments);
        // merge

        client.writeQuery({
          query: GetCommentsForMediaDocument,
          data: {
            ts_medias_comments: newData,
          },
        });
      }
    },
  });

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>Error</Text>;
  }
  if (!data) {
    return <Text>No Data!</Text>;
  }

  return (
    <View style={styles.fill}>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'black',
          padding: 10,
        }}
      >
        <Text>From: {media.media_source_name}</Text>
        <Text>Trend: {media.trend_name}</Text>
      </View>
      <ScrollView keyboardDismissMode="interactive">
        <View style={{}}>
          <View style={{ padding: 10 }}>
            {data.ts_medias_comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </View>
        </View>
      </ScrollView>
      <InputAccessoryView backgroundColor="#fffffff7">
        <TextInputBar deviceId={uniqueDeviceId} media={media} />
      </InputAccessoryView>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: BAR_HEIGHT,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },

  commentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    paddingLeft: 10,
    color: 'black',
    fontWeight: 'normal',
  },
  username: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default withApollo(CommentsScreen);

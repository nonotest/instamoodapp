import React from 'react';
import TimeAgo from 'react-native-timeago';

type Props = {
  firebaseDate: string;
};

function FirebaseDateWidget({ firebaseDate }: Props) {
  return <TimeAgo time={new Date(firebaseDate)} />;
}

export default FirebaseDateWidget;

import React, { useRef } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import { contains, delay, timing, onGestureEvent } from 'react-native-redash';

const {
  Value,

  call,
  eq,
  set,
  and,
  interpolate,
  useCode,
  neq,

  block,
  cond,
} = Animated;

const easing = Easing.inOut(Easing.ease);
const duration = 250;

function LikeButton({ onPress, iconProps }) {
  // const state = new Value(State.UNDETERMINED);
  const stateRef = useRef(new Value(State.UNDETERMINED));
  const shouldSpring = new Value(0);
  const animation = new Value(0);
  const gestureHandler = onGestureEvent({
    state: stateRef.current,
  });

  useCode(
    () =>
      block([
        cond(eq(stateRef.current, State.BEGAN), set(shouldSpring, 1)),
        cond(
          contains([State.FAILED, State.CANCELLED], stateRef.current),
          set(shouldSpring, 0),
        ),
        cond(eq(stateRef.current, State.END), [
          delay(set(shouldSpring, 0), 150),
        ]),
        cond(
          and(eq(shouldSpring, 1), neq(animation, 1)),
          set(
            animation,
            timing({
              from: animation,
              to: 1,
              easing,
              duration,
            }),
          ),
        ),
        cond(
          and(eq(shouldSpring, 0), neq(animation, 0)),
          set(
            animation,
            timing({
              from: animation,
              to: 0,
              easing,
              duration,
            }),
          ),
        ),
        cond(and(eq(animation, 1), eq(shouldSpring, 0)), call([], onPress)),
      ]),
    [animation, stateRef.current, shouldSpring],
  );

  const scale = interpolate(animation, {
    inputRange: [0, 0.25, 1],
    outputRange: [1, 0.9, 1.25],
  });

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View
        style={{
          transform: [
            {
              scale,
            },
          ],
        }}
      >
        <FontAwesome5 {...iconProps} solid />
      </Animated.View>
    </TapGestureHandler>
  );
}

export default LikeButton;

/**
 *
 */

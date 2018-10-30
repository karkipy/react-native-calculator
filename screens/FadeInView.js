import React from 'react';
import { Animated, Text, View } from 'react-native';

class FadeInView extends React.Component {
  constructor() {
    super()
    const fadeAnim = new Animated.Value(0);
    this.state = {
      fadeAnim, // Initial value for opacity: 0
    }
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,
        useNativeDriver: true,            // Timer
      }
    ).start();                        // Starts the animation
  }

  componentWillUnmount() {
    let { fadeAnim } = this.state;
    fadeAnim.setValue(1);
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
        useNativeDriver: true,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;
    let { historyList } = this.props;
    return (
      <Animated.View                 // Special animatable View
        style={{
          width: `${(100 / 4) * 3} %`,
          height: 465,
          backgroundColor: 'white',
          position: 'absolute',
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          left: '0%',
          bottom: '0%',
        }}
      >
      {historyList.map((h, idx) => {
        const { equation, result} = h;
        return (
          <View key={idx} style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
            <Text>{equation} = {result} </Text>
          </View>
        );
      })}
      </Animated.View>
    );
  }
}

export default FadeInView;

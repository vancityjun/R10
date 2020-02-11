import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
} from 'react-native';
import {List, Desc} from '../Style';

const Drawer = ({title, description}) => {
  const [open, setOpen] = useState(false);
  // const [animatedValue] = useState(new Animated.Value(0));

  const animationConfig = {
    duration: 200,
    update: {
      type: 'easeIn',
      springDamping: 0.1,
    },
  };
  const onPress = () => {
    LayoutAnimation.configureNext(animationConfig);
    setOpen(!open);
  };
  return (
    <View>
      <List onPress={() => onPress()}>{title}</List>
      {open ? <Desc style={{opacity: open}}>{description}</Desc> : null}
    </View>
  );
};

export default Drawer;

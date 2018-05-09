import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';

const UserQuestionScreenView = () => (
  <View style={styles.container}>
    <Text>Question</Text>
  </View>
);

UserQuestionScreenView.propTypes = {};

UserQuestionScreenView.navigationOptions = {
  title: 'Question page',
};

export default UserQuestionScreenView;

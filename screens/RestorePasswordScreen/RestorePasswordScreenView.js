import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';

const RestorePasswordScreenView = () => (
  <View style={styles.container}>
    <Text>Restore password</Text>
  </View>
);

RestorePasswordScreenView.propTypes = {};

RestorePasswordScreenView.navigationOptions = {
  title: 'Restore password',
};

export default RestorePasswordScreenView;

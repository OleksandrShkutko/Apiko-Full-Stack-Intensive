import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const SignInScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.RestorePassword)}>
      Forgot password?
    </Text>
  </View>
);

SignInScreenView.propTypes = {
  navigation: T.object,
};

SignInScreenView.navigationOptions = {
  title: 'SignIn',
};

export default SignInScreenView;

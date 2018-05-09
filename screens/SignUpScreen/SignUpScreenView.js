import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const SignUpScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.SignIn)}>
      Already has an account?
    </Text>
  </View>
);

SignUpScreenView.propTypes = {
  navigation: T.object,
};

SignUpScreenView.navigationOptions = ({ navigation }) => ({
  title: 'SignUp',
  headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Drawer</Text>,
});

export default SignUpScreenView;

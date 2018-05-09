import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const UserQuestionsScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.UserQuestion)}>
      Question
    </Text>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.AuthorizedApplication)}>
      SignIn to navigation
    </Text>
    <Text style={styles.link} onPress={() => navigation.navigate(screens.UnauthorizedApplication)}>
      SignOut to navigation
    </Text>
  </View>
);

UserQuestionsScreenView.propTypes = {
  navigation: T.object,
};

UserQuestionsScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Drawer</Text>,
});

export default UserQuestionsScreenView;

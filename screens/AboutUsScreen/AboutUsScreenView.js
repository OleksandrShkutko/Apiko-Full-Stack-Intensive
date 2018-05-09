import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';

const AboutUsScreenView = () => (
  <View style={styles.container}>
    <Text>AboutUs</Text>
  </View>
);

AboutUsScreenView.propTypes = {};

AboutUsScreenView.navigationOptions = ({ navigation }) => ({
  title: 'About us',
  headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Drawer</Text>,
});

export default AboutUsScreenView;

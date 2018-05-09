import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';

import styles from '../../styles';
import { screens } from '../../navigation';

const SearchScreenView = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Search</Text>
  </View>
);

SearchScreenView.propTypes = {
  navigation: T.object,
};

SearchScreenView.navigationOptions = ({ navigation }) => ({
  title: 'Search',
  headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Drawer</Text>,
});

export default SearchScreenView;

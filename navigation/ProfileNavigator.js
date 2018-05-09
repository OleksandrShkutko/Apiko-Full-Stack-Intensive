import { createStackNavigator } from 'react-navigation';

import { screens } from './';
import { ProfileScreen } from '../screens';

export default createStackNavigator({
  [screens.Profile]: { screen: ProfileScreen },
});

import { createStackNavigator } from 'react-navigation';

import { screens } from './';
import { AboutUsScreen } from '../screens';

export default createStackNavigator({
  [screens.AboutUs]: { screen: AboutUsScreen },
});

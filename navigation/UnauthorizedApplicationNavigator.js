import { createDrawerNavigator } from 'react-navigation';

import { screens } from './';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import AboutUsNavigator from './AboutUsNavigator';

export default createDrawerNavigator({
  [screens.Home]: { screen: HomeNavigator },
  [screens.AboutUs]: { screen: AboutUsNavigator },
  [screens.SignUp]: { screen: AuthNavigator },
});

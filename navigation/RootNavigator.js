import { createSwitchNavigator } from 'react-navigation';

import { screens } from './';
import AuthorizedApplication from './AuthorizedApplicationNavigator';
import UnauthorizedApplication from './UnauthorizedApplicationNavigator';

export default createSwitchNavigator(
  {
    [screens.AuthorizedApplication]: { screen: AuthorizedApplication },
    [screens.UnauthorizedApplication]: { screen: UnauthorizedApplication },
  },
  { initialRouteName: screens.UnauthorizedApplication },
);

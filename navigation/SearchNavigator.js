import { createStackNavigator } from 'react-navigation';

import { screens } from './';
import { SearchScreen, UserQuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.Search]: { screen: SearchScreen },
  [screens.UserQuestion]: { screen: UserQuestionScreen },
});

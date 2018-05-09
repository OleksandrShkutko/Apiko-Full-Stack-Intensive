import { createStackNavigator } from 'react-navigation';

import { screens } from './';
import { CreateQuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.CreateQuestion]: { screen: CreateQuestionScreen },
});

import { createStackNavigator } from 'react-navigation';

import { screens } from './';
import { UserQuestionsScreen, UserQuestionScreen } from '../screens';

export default createStackNavigator({
  [screens.UserQuestions]: { screen: UserQuestionsScreen },
  [screens.UserQuestion]: { screen: UserQuestionScreen },
});

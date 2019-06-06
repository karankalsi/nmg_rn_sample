/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/route/AppNavigator';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
const App = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => App);

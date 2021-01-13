import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList192234Navigator from '../features/NotificationList192234/navigator';
import Settings192233Navigator from '../features/Settings192233/navigator';
import Settings192225Navigator from '../features/Settings192225/navigator';
import UserProfile192223Navigator from '../features/UserProfile192223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList192234: { screen: NotificationList192234Navigator },
Settings192233: { screen: Settings192233Navigator },
Settings192225: { screen: Settings192225Navigator },
UserProfile192223: { screen: UserProfile192223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

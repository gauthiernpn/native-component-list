import { StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});

const RootNavigation = StackNavigator(
  {
    MainTabs: { screen: MainTabNavigator },
  },
  {
    headerMode: 'none',
    initialRouteName: 'MainTabs',
    cardStyle: styles.card,
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default RootNavigation;

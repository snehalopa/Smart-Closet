import { StackNavigator } from "react-navigation";
import Home from "./Welcome";
import Login from "./Login";
import SignUp from './signup';
import Main from './main';
const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: { 
      screen: Login,
      navigationOptions: () => ({
        title: `Home`,
      }),
    },
    SignUp : {
      screen: SignUp,
      navigationOptions: () => ({
        title: `Home`,
      }),
    },
   Main : {
     screen: Main,
   }
  }
);

export default AppNavigator;

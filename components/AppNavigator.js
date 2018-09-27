import { createStackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from './signup';
import Main from './main';
import ImagePreview from './imagepreview';
import MyComponent from './floatingAction'
import Closet from './closet';
import Formal from './clothes/formal';
const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null
      }
    },
    Login: { 
      screen: Login,
      navigationOptions: () => ({
        title: `Login`,
      }),
    },
    SignUp : {
      screen: SignUp,
      navigationOptions: () => ({
        title: `SignUp`,
      }),
    },
   Main: {
     screen: Main,
     navigationOptions: () => ({
       header: null,
     }),
   },
   ImagePreview : {
     screen: ImagePreview,
     navigationOptions: () => ({
      //header: null,
      title: `Add Item to Closet`,
    }),
   },
   Formal: {
     screen: Formal,
     navigationOptions: () => ({
      header: null,
    }),
   }
  }
);

export default AppNavigator;

import { createStackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from './signup';
import Main from './main';
import ImagePreview from './imagepreview';
import MyComponent from './floatingAction'
import Closet from './closet';
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
   }
  }
);

export default AppNavigator;

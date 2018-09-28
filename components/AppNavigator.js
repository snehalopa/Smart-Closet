import { createStackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from './signup';
import Main from './main';
import AddNewItemForm from './imagepreview';
import CameraPreview from './CameraPreview';
import galleryBrowser from './galleryBrowser';
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
   AddNewItemForm : {
     screen: AddNewItemForm,
     navigationOptions: () => ({
      //header: null,
      title: `Add Item to Closet`,
    }),
   },
   cameraPreview : {
    screen: CameraPreview,
    navigationOptions: () => ({
      //header: null,
      title: `Preview`,
    })
    },
  //  galleryBrowser: {
  //   screen: galleryBrowser,
  // //   navigationOptions: () => ({
  // //    //header: null,
  // //    title: `Preview`,
  // //  }),
  //  }
  // },
   Formal: {
     screen: Formal,
     navigationOptions: () => ({
      header: null,
    }),
  }
});

export default AppNavigator;

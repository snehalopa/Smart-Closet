import React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { CameraRoll, View, PermissionsAndroid, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import pickDevicePhotos from './pickDevicePhotos';
import { createStackNavigator } from 'react-navigation';
import AddNewItem from './imagepreview';

// const AppNavigator = createStackNavigator({
//   form: {
//     screen: AddNewItem
//   },
// });

export default class MyComponent extends React.Component {
  state = {
    open: false,
    photos: [],
  };

  async onPressHandle(media) {
      //do your stuff here. scroll screen up
      console.log('Save pressed ' + media);
      //write if else based on media whether gallery or campera to intent
      console.log("###############")

      CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
         console.log('Save pressed ERROR ' + err);
      });
    

      // try {
      //     const granted = await PermissionsAndroid.request(
      //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      //       {
      //         'title': 'Access Storage',
      //         'message': 'Access Storage for the pictures'
      //       }
      //     )
      //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //       console.log("You can use read from the storage");
      //       pickDevicePhotos();
      //     } else {
      //       console.log("Storage permission denied")
      //     }
      //   } catch (err) {
      //     console.warn(err)
      //   }

      // try {
      //     await AsyncStorage.setItem('closet:items', {name: 'manash'});
      //   } catch (error) {
      //     // Error saving data
      //   }
  }

  render() {
    console.log(this.props.navigation)
    return (
          <FAB.Group style={{position: 'absolute', top: 1, right: 1}}
            open={this.state.open}
            icon={this.state.open ? 'today' : 'add'}
            actions={[
              //{ icon: 'add', onPress: () => console.log('Pressed add') },
              { icon: 'photo', label: 'Pick from Gallery', onPress: () => {this.props.navigation.navigate("ImagePreview")}},
              { icon: 'camera', label: 'Take a Picture', onPress: () => this.onPressHandle('camera') },
              //{ icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                // do something if the speed dial is open
              }
            }}
          />
    );
  }
}

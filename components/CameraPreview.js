'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  //Text,
  TouchableOpacity,
  View
} from 'react-native';
import Camera, { RNCamera } from 'react-native-camera';
import { DefaultTheme, Button, Text } from "react-native-paper";

export default class CameraPreview extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <RNCamera
    //         ref={ref => {
    //           this.camera = ref;
    //         }}
    //         style = {styles.preview}
    //         type={RNCamera.Constants.Type.back}
    //         flashMode={RNCamera.Constants.FlashMode.on} 
    //         permissionDialogTitle={'Permission to use camera'}
    //         permissionDialogMessage={'We need your permission to use your camera phone'}
    //         onGoogleVisionBarcodesDetected={({ barcodes }) => {
    //             //not needed as of now
    //           console.log(barcodes)
    //         }}
    //     />
    //     <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
    //     <TouchableOpacity
    //         onPress={this.takePicture.bind(this)}
    //         style = {styles.capture}
    //     >
    //         <Text style={{fontSize: 14, backgroundColor: 'white'}}> Capture </Text>
    //     </TouchableOpacity>
    //     </View>
    //   </View>
    // );
    return (
        <View style={styles.container}>
          <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              aspect={Camera.constants.Aspect.fill}
              captureTarget={Camera.constants.CaptureTarget.disk}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  //not needed as of now
                console.log(barcodes)
              }}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14, color: 'white'}}> Capture </Text>
          </TouchableOpacity>
          </View>
        </View>
      );
  }

  takePicture = async function() {
    this.camera.capture()
    .then((data) => {
      console.log(data);
      //this.setState({ path: data.path })
      this.props.navigation.navigate("AddNewItemForm", {
        photo: data.path,
        //otherParam: 'anything you want here',
      });
    })
    .catch(err => console.error(err));
    /*
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //Now this uri need to pass to another navigation to view
      console.log(data.path);
      //data.path
      //CameraRoll.saveToCameraRoll('smartcloset', [type]);
      //need to pass data
      this.props.navigation.navigate("AddNewItemForm", {
        photo: data.path,
        //otherParam: 'anything you want here',
      });
    }
    */
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: DefaultTheme.colors.primary,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

//AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);
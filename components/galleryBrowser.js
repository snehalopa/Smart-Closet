'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  //Text,
  TouchableOpacity,
  View,
  CameraRoll
} from 'react-native';
//import Camera, { RNCamera } from 'react-native-camera';
import { DefaultTheme, Button, Text } from "react-native-paper";
const { width, height } = Dimensions.get('window')
let styles

export default class galleryBrowser extends Component {

    static navigationOptions = {
        title: 'Gallery Images',
    }

    state = {
    images: [],
    loading: true,
    page: 1
    }
    
    getPhotos = () => {
        CameraRoll.getPhotos({
          first: 20,
          assetType: 'All'
        })
        .then(r => this.setState({ photos: r.edges }))
      }
  render() {
    
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        {this.getPhotos()}
          {
            this.state.images.map((image, i) => {
              return (
                <TouchableHighlight
                  key={i}
                  // onPress={() => this.saveToCameraRoll(image)}
                  underlayColor='transparent'
                >
                  <Image
                    style={styles.image}
                    source={{ uri: image.urls.small }}
                  />
                </TouchableHighlight>
              )
            })
          }
        </ScrollView>
      );
  }
};


styles = StyleSheet.create({
    scrollContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    centerLoader: {
      height: height - 100,
      width,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: width / 2, height: width / 2
    },
    title: {
      textAlign: 'center',
      padding: 20
    }
  })
  

//AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);
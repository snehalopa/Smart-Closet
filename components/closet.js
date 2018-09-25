import React, { Component } from 'react'
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native';
import { Text, FAB, Portal, Appbar } from 'react-native-paper';
import FloatingAction from './floatingAction';

  // const actions = [{
  //   text: 'Accessibility',
  //   icon: require('./sample_silktop.jpeg'),
  //   name: 'bt_accessibility',
  //   position: 1
  // }, {
  //   text: 'Language',
  //   icon: require('./sample_silktop.jpeg'),
  //   name: 'bt_language',
  //   position: 2
  // }, {
  //   text: 'Location',
  //   icon: require('./sample_silktop.jpeg'),
  //   name: 'bt_room',
  //   position: 3
  // }, {
  //   text: 'Video',
  //   icon: require('./sample_silktop.jpeg'),
  //   name: 'bt_videocam',
  //   position: 4
  // }];

const PHOTOS = Array.from({ length: 4 }).map(
  (_, i) => `https://unsplash.it/300/300/?random&__id=library${i}`
);

export default class Closet extends Component {

  render() {
    return (
      <View style={{paddingBottom: 80}}>
        <Appbar.Header>
          {/* <Appbar.BackAction
            onPress={this._goBack}
          /> */}
          <Appbar.Content
            title="Title"
            subtitle="Subtitle"
          />
          {/* <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
        </Appbar.Header>
      
        <ScrollView contentContainerStyle={styles.content}>
          {PHOTOS.map(uri => (
            <View key={uri} style={styles.item}>
              <Image source={{ uri }} style={styles.photo} />
              <Text> photo name </Text>
            </View>
          ))}
          <FloatingAction></FloatingAction>
        </ScrollView>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  item: {
    height: Dimensions.get('window').width / 2,
    width: '50%',
    padding: 4,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});

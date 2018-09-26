import React, { Component } from 'react'
import { ScrollView, View, Image, Dimensions, StyleSheet } from 'react-native';
import { Text, FAB, Portal, Appbar } from 'react-native-paper';
import FloatingAction from './floatingAction';

const PHOTOS = Array.from({ length: 4 }).map(
  (_, i) => `https://unsplash.it/300/300/?random&__id=library${i}`
);
export default class Closet extends Component {

  // constructor(props) {
  //   super(props);
  //   //this.props.navigation.setParams({otherParam: 'Updated!'})
  //   //navigation.setParams({ param: value })
  //   props.navigation.setParams({name: 'Updated!'})
  // }

  render() {
    console.log('INSIDE Closet NNNNNNNNNNNNNNNNNNNNNNNNANANANANNANANANNANANNANANANANANNANAN')
    //console.log('sneha 35 ', this.props.navigation)
    return (
      <View style={{paddingBottom: 80}}>
        <Appbar.Header>
          {/* <Appbar.BackAction
            onPress={this._goBack}
          /> */}
          <Appbar.Content
            title="Closet"
            subtitle="All Items"
          />
          {/* <Appbar.Action icon="search" onPress={this._onSearch} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} /> */}
        </Appbar.Header>
      
        <ScrollView contentContainerStyle={styles.content}>
          {PHOTOS.map(uri => (
            <View key={uri} style={styles.item}>
              <Image source={{ uri }} style={styles.photo} />
              <Text> dress name </Text>
            </View>
          ))}
          {console.log(this.props.navigation)}
          <FloatingAction navigation={this.props.navigation}></FloatingAction>
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

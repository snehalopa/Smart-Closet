import React, { Component } from 'react'
import { ScrollView, View, Image, Dimensions, StyleSheet,TouchableHighlight } from 'react-native';
import { Text, FAB, DefaultTheme, Appbar } from 'react-native-paper';
import FloatingAction from './floatingAction';

// const PHOTOS = Array.from({ length: 12 }).map(
//   (_, i) => `samplw${i}`
// );
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
      
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps='always'>
        
        <TouchableHighlight underlayColor={DefaultTheme.colors.primary} style={styles.item} onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("Formal");
            }}      
        >
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: '90%', width: '100%'}} source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }}/>
              <Text> Formal Wear </Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor={DefaultTheme.colors.primary} style={styles.item} onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("Formal");
            }}      
        >
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: '90%', width: '100%'}} source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }}/>
              <Text> Party Wear </Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor={DefaultTheme.colors.primary} style={styles.item} onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("Formal");
            }}      
        >
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: '90%', width: '100%'}} source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166027906/003/s3details/WE5166027906003-e-david.jpg' }}/>
              <Text> Casual Wear </Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor={DefaultTheme.colors.primary} style={styles.item} onPress={() => {
              console.log("###########################################"),
                this.props.navigation.navigate("Formal");
            }}      
        >
            <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{height: '90%', width: '100%'}} source={{ uri : 'https://dx0woejilafh2.cloudfront.net/sys-master/m0/WE/2017/2/WE5166017906/003/s3details/WE5166017906003-d-grammo.jpg' }}/>
              <Text> Tradtional Wear </Text>
            </View>
        </TouchableHighlight>

          {/* <FloatingAction navigation={this.props.navigation}></FloatingAction> */}
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

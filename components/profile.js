import React, { Component } from 'react'
import { Image, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

export default class profile extends Component {
  render() {
    return (
      <View style={{paddingBottom: 80}}>
        <Appbar.Header>
          <Appbar.Content
            title="Profile"
            subtitle="account settings"
          />
        </Appbar.Header>
        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <Text> photo name hello </Text>
          </View>
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


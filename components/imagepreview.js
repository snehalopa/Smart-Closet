import React, { Component } from 'react'
import { Button, Image, CameraRoll, PermissionsAndroid, KeyboardAvoidingView, Text, AsyncStorage, TextInput, Picker } from 'react-native';


export default class imagepreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: {x:0, y:0 },
            name: '',
            category_type: '',
            ocassion_type: '',
        };
      }

    async onPressSave() {
        //do your stuff here. scroll screen up
        console.log('Save pressed');

        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              {
                'title': 'Access Storage',
                'message': 'Access Storage for the pictures'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use read from the storage")
            } else {
              console.log("Storage permission denied")
            }
          } catch (err) {
            console.warn(err)
          }


        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
             console.log('CameraRoll pressed ', err);
          });


        try {
            await AsyncStorage.setItem('closet:items', {name: 'sneha'});
          } catch (error) {
            // Error saving data
          }
    }

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={{paddingBottom: 5}}>


        <Image
        source={require('./sample_silktop.jpeg')}
            style={{
                alignContent: 'center',
                justifyContent: 'center',
                resizeMode: 'contain',
                width: '100%',
                height: 250,//we need to calculate based on device height
                // marginLeft: 50,
                //opacity: 0.8,
                borderColor: 'green',
                borderWidth: 1,
                //borderStyle: 'solid',
            }}/>

        <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}} 
            placeholder="Enter name"
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
        />

        <Picker
            selectedValue={this.state.category_type}
            style={{ height: 50 }} 
            
            onValueChange={(itemValue, itemIndex) => this.setState({category_type: itemValue})}>
            <Picker.Item label="Choose Item type" value="" />
            <Picker.Item label="Top" value="top" />
            <Picker.Item label="Bottom" value="bottom" />
            <Picker.Item label="Frock" value="frock" />
            <Picker.Item label="shoe" value="shoe" />
        </Picker>

        <Picker
            selectedValue={this.state.ocassion_type}
            style={{ height: 50 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ocassion_type: itemValue})}>
            <Picker.Item label="Choose Ocassion" value="" />
            <Picker.Item label="Office" value="office" />
            <Picker.Item label="Casual" value="casual" />
            <Picker.Item label="Party" value="party" />
            <Picker.Item label="Outdoor Shopping" value="outdoor" />
        </Picker>

        <Button
        onPress={this.onPressSave.bind(this)} 
        title="Save"
        color="#303F9F"
        accessibilityLabel="save"
        />

        </KeyboardAvoidingView>
    )
  }
}

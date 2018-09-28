import React, { Component } from 'react'
import { Button, Image, CameraRoll, PermissionsAndroid, KeyboardAvoidingView, AsyncStorage, TextInput, Picker } from 'react-native';

export default class Imagepreview extends Component {

    constructor(props) {
      super(props);
      //const { navigation } = props;
      console.log('99999999999999999999999999999999999999999999999999');
      const { navigation } = this.props;
      const photoUri = navigation.getParam('photo'); //will need to pass some default image placeholder as secodn param
    // const otherParam = navigation.getParam('otherParam', 'some default value');
      console.log(photoUri);
      this.state = {
          photo: photoUri,
          name: '',
          category_type: '',
          ocassion_type: '',
      };
    }

    async onPressSave() {
        //do your stuff here. scroll screen up
        console.log('Save pressed');

        // CameraRoll.getPhotos({
        //     first: 20,
        //     assetType: 'Photos',
        //   })
        //   .then(r => {
        //     this.setState({ photos: r.edges });
        //   })
        //   .catch((err) => {
        //      //Error Loading Images
        //      console.log('CameraRoll pressed ', err);
        //   });


        try {
            await AsyncStorage.setItem('closet:items', {name: 'sneha'});
          } catch (error) {
            // Error saving data
          }
    }

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={{paddingBottom: 5}}>

{console.log(5050505050050505, this.state.photo)}
        <Image
        uri={this.state.photo}
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
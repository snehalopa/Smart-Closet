import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

const emptyView =
<View>
    <Appbar.Header>
        <Appbar.Content
        title="My Closet App"
        subtitle="Todays recommendation"
        />
    </Appbar.Header>
    <View style={{ alignItems: 'center', justifyContent: 'center',}}>
        <Image
        source={require('./slightly_frowning_face_emoji_round_sticker-re5f660b967dc441fbe38bd98d3b590f4_v9waf_8byvr_324.jpg')}
        style={{
            resizeMode: 'contain',
            width: 250,
            marginLeft: 30,
            
            justifyContent: 'center',
            alignContent: 'center'
        }}
        />
        <Text style={{fontFamily: 'monospace', fontStyle: 'italic', fontSize:20 }}>
            Awww!!!
            You have not added any clothes yet. Start by pressing the closet button.
        </Text>
    </View>
</View>
;

const recommendView =
<View style={{ alignItems: 'center', justifyContent: 'center',}}>

    <Image
    source={require('./sample_silktop.jpeg')}
    style={{
        alignContent: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        width: '100%',
        height: '45%',//we need to calculate based on device height
        // marginLeft: 50,
        //opacity: 0.8,
        // borderColor: 'green',
        // borderWidth: 1,
        // borderStyle: 'solid',
    }}
    />

    <Image
    source={require('./sample_skirt.jpeg')}
    style={{
        alignContent: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        width: '100%',
        height: '45%',//we need to calculate based on device height
        // marginLeft: 50,
        //opacity: 0.8,
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
    }}
    />

    <Text> Here is my recomendation from me</Text>
    
</View>;



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEmpty: true

        };

        // Toggle the state
        // this.setState(previousState => {
        //     return { isEmpty: !previousState.isEmpty };
        // });
    }

    render() {
        return (
            <View> 
                { this.state.isEmpty ? emptyView : recommendView }
            </View>
        )
    }
}

export default Home;


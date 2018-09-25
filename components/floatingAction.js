import React from 'react';
import { FAB, Portal } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
        <FAB.Group style={{position: 'absolute', top: 1, right: 1}}
          open={this.state.open}
          icon={this.state.open ? 'today' : 'add'}
          actions={[
            { icon: 'add', onPress: () => console.log('Pressed add') },
            { icon: 'photo', label: 'Pick from Gallery', onPress: () => console.log('Pressed Gallery')},
            { icon: 'camera', label: 'Take a Picture', onPress: () => console.log('Pressed Picture') },
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
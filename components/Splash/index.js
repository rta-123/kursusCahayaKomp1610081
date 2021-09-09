import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBa, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('HomePage');
    }, 3000);
  };

  render() {
    return (
      <LinearGradient colors={['#358f80', '#78c6a3']} style={styles.container}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../icon/iconkomp.png')} />
          <View style={{marginLeft: 15}}>
            <Text style={styles.text1}>Cahaya</Text>
            <Text style={styles.text2}>Komputer</Text>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },

  text1: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 18,
  },

  text2: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 18,
    marginTop: -6,
  },
});

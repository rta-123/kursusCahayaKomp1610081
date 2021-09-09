import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#358f80', 'white']}
        style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>Cahaya Komputer</Text>
        </View>
        <View style={styles.konten}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('KaryawanPage')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#358f80', '#88d4ab']}
              style={styles.card}>
              <Image source={require('../../icon/karyawan.png')} />
              <Text style={styles.txtcard}>Data Karyawan</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('PembayaranPage')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#88d4ab', '#358f80']}
              style={styles.card}>
              <Image source={require('../../icon/pembay.png')} />
              <Text style={styles.txtcard}>Data Pembayaran</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('ProfilPage')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#358f80', '#88d4ab']}
              style={styles.card}>
              <Image source={require('../../icon/profil.png')} />
              <Text style={styles.txtcard}>Profil</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.txtfooter}>Lembaga Kursus dan Pelatihan</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    backgroundColor: '#358f80',
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
  },

  konten: {
    flex: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 40,
  },

  footer: {
    height: 40,
    backgroundColor: '#358f80',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 50,
  },

  txtheader: {
    marginBottom: 20,
    fontSize: 27,
    marginHorizontal: 20,
    color: 'white',
    fontFamily: 'Raleway-Bold',
  },

  txtfooter: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    color: 'white',
  },

  txtcard: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Raleway-Medium',
    marginLeft: 18,
  },

  card: {
    backgroundColor: '#358f80',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 35,
    flexDirection: 'row',
    paddingHorizontal: 30,
    height: 140,
    alignItems: 'center',
  },
});

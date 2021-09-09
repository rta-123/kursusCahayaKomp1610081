import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class KaryawanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKaryawan: [],
    };
  }

  getDataKaryawan = () => {
    fetch('http://192.168.153.18/cahaya_comp1610081/public/karyawan')
      .then(response => response.json())
      .then(json => this.setState({dataKaryawan: json}))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDataKaryawan();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>List Data Karyawan</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#358f80', '#88d4ab']}
          style={styles.konten}>
          <FlatList
            style={{marginTop: 20}}
            data={this.state.dataKaryawan}
            keyExtractor={item => item.kodekar}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.cardlist}
                onPress={() =>
                  this.props.navigation.navigate('EditKaryawanPage', {
                    kodeKAR: item.kodekar,
                  })
                }>
                <Text style={styles.txtcard}>{item.namakar}</Text>
                <Text style={styles.txtcard2}>{item.jkkar}</Text>
                <Text style={styles.txtcard2}>{item.tgllahirkar}</Text>
                <Text style={styles.txtcard2}>{item.bidangkar}</Text>
                <Text style={styles.txtcard2}>{item.statuskar}</Text>
                <Text style={styles.txtcard2}>{item.alamatkar}</Text>
              </TouchableOpacity>
            )}
          />
        </LinearGradient>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.footer}
          onPress={() => this.props.navigation.navigate('TambahKaryawanPage')}>
          <Text style={styles.txtfooter}>Tambah Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default KaryawanPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },

  header: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomRightRadius: 0,
    justifyContent: 'flex-end',
  },

  konten: {
    flex: 9,
    backgroundColor: '#358f80',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    marginLeft: 12,
  },

  footer: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 0,
  },

  txtheader: {
    marginBottom: 20,
    fontSize: 20,
    marginHorizontal: 30,
    color: '#121416',
    fontFamily: 'Raleway-Bold',
  },

  txtfooter: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: 'white',
    backgroundColor: '#358f80',
    paddingHorizontal: 17,
    paddingVertical: 6,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  cardlist: {
    backgroundColor: '#88d4ab',
    marginLeft: 20,
    marginTop: 0,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginBottom: 20,
  },

  txtcard: {
    color: '#121416',
    fontFamily: 'Raleway-SemiBold',
    fontSize: 22,
  },

  txtcard2: {
    color: '#121416',
    fontFamily: 'Raleway-Medium',
    fontSize: 13,
  },
});

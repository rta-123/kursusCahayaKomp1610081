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

class PembayaranPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPembayaran: [],
    };
  }

  getDataPembayaran = () => {
    fetch('http://192.168.153.18/cahaya_comp1610081/public/pembayaran')
      .then(response => response.json())
      .then(json => this.setState({dataPembayaran: json}))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDataPembayaran();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>List Data Pembayaran</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#358f80', '#88d4ab']}
          style={styles.konten}>
          <FlatList
            style={{marginTop: 20}}
            data={this.state.dataPembayaran}
            keyExtractor={item => item.kodepem}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.cardlist}
                onPress={() =>
                  this.props.navigation.navigate('EditPembayaranPage', {
                    kodePEM: item.kodepem,
                  })
                }>
                <Text style={styles.txtcard}>{item.tglpem}</Text>
                <Text style={styles.txtcard2}>{item.pemkodepend}</Text>
                <Text style={styles.txtcard2}>{item.pambayar}</Text>
              </TouchableOpacity>
            )}
          />
        </LinearGradient>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.footer}
          onPress={() =>
            this.props.navigation.navigate('TambahPembayaranPage')
          }>
          <Text style={styles.txtfooter}>Tambah Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PembayaranPage;

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
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    marginRight: 12,
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
    marginHorizontal: 20,
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
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },

  cardlist: {
    backgroundColor: '#88d4ab',
    marginRight: 20,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
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

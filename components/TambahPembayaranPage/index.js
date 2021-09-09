import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class TambahPembayaranPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPembayaran: [],
      kodepem: '',
      tglpem: '',
      pemkodepend: '',
      pambayar: '',
    };
  }

  saveDataPembayaran = () => {
    fetch('http://192.168.153.18/cahaya_comp1610081/public/pembayaran', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kodepem: this.state.kodepem,
        tglpem: this.state.tglpem,
        pemkodepend: this.state.pemkodepend,
        pambayar: this.state.pambayar,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.replace('PembayaranPage');
        json.status == 201
          ? Alert.alert('Sukses', 'data berhasil disimpan')
          : '';
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({kodepem: ''});
        this.setState({tglpem: ''});
        this.setState({pemkodepend: ''});
        this.setState({pambayar: ''});
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>Tambah Data Pembayaran</Text>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#358f80', '#88d4ab']}
          style={styles.konten}>
          <ScrollView
            style={{
              marginTop: 20,
            }}>
            <View>
              <Text style={styles.txtlabel}>Kode Pembayaran</Text>
              <TextInput
                value={this.state.kodepem}
                onChangeText={value => this.setState({kodepem: value})}
                placeholder="Masukkan kode pembayaran"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Tanggal Pembayaran</Text>
              <TextInput
                value={this.state.tglpem}
                onChangeText={value => this.setState({tglpem: value})}
                placeholder="Masukkan tanggal pembayaran"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Kode Pendaftaran</Text>
              <TextInput
                value={this.state.pemkodepend}
                onChangeText={value => this.setState({pemkodepend: value})}
                placeholder="Masukkan kode pendaftaran"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Jumlah bayar</Text>
              <TextInput
                value={this.state.pambayar}
                onChangeText={value => this.setState({pambayar: value})}
                keyboardType="number-pad"
                placeholder="Masukkan jumlah bayar"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>
          </ScrollView>
        </LinearGradient>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.footer}
          onPress={() => this.saveDataPembayaran()}>
          <Text style={styles.txtfooter}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TambahPembayaranPage;

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

  txtinput: {
    borderWidth: 0,

    borderRadius: 50,
    borderBottomLeftRadius: 50,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: '#121416',
    color: '#121416',
    fontFamily: 'Raleway-Medium',
    fontSize: 15,
    backgroundColor: '#dcf9ee',
    marginBottom: 18,
  },

  txtlabel: {
    marginLeft: 38,
    fontFamily: 'Raleway-Medium',
    color: '#121416',
    fontSize: 15,
    marginBottom: 5,
  },
});

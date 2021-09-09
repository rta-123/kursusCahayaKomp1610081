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
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class EditPembayaranPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kodePembayaran: this.props.route.params.kodePEM,
      dataPembayaran: [],
      tglpem: '',
      pemkodepend: '',
      pambayar: '',
    };
  }

  getDetail = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/pembayaran/' +
        this.state.kodePembayaran,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({dataPembayaran: json[0]});
        console.log('====================================');
        console.log(json);
        console.log('====================================');
        this.setState({tglpem: this.state.dataPembayaran.tglpem});
        this.setState({pemkodepend: this.state.dataPembayaran.pemkodepend});
        this.setState({pambayar: this.state.dataPembayaran.pambayar});
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDetail();
  };

  deletePembayaran = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/pembayaran/' +
        this.state.kodePembayaran,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.replace('PembayaranPage');
      })
      .catch(err => console.log(err));
  };

  updatePembayaran = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/pembayaran/' +
        this.state.kodePembayaran,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tglpem: this.state.tglpem,
          pemkodepend: this.state.pemkodepend,
          pambayar: this.state.pambayar,
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        ToastAndroid.show(
          `Data dengan kode ${this.state.kodePembayaran} berhasil diupdate`,
          ToastAndroid.SHORT,
        );
        this.props.navigation.replace('PembayaranPage');
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>Edit Data Pembayaran</Text>
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
                value={this.state.dataPembayaran.kodepem}
                editable={false}
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Tanggal Pembayaran</Text>
              <TextInput
                value={this.state.tglpem}
                onChangeText={value => this.setState({tglpem: value})}
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Kode Pendaftaran</Text>
              <TextInput
                value={this.state.pemkodepend}
                onChangeText={value => this.setState({pemkodepend: value})}
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Jumlah bayar</Text>
              <TextInput
                keyboardType="number-pad"
                value={this.state.pambayar}
                onChangeText={value => this.setState({pambayar: value})}
                style={styles.txtinput}
              />
            </View>
          </ScrollView>
        </LinearGradient>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.footer}
            onPress={() =>
              Alert.alert('Tunggu Dulu !!!', 'Yakin data ini mau dihapus ?', [
                {
                  text: 'Oh Tidak',
                  style: 'Tidak',
                  onPress: () => null,
                },
                {
                  text: 'Hapus Saja',
                  onPress: () => this.deletePembayaran(),
                },
              ])
            }>
            <Text style={styles.txtfooterdelete}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.footer}
            onPress={() => this.updatePembayaran()}>
            <Text style={styles.txtfooterupdate}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EditPembayaranPage;

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

  txtfooterupdate: {
    marginHorizontal: 10,
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

  txtfooterdelete: {
    marginHorizontal: 10,
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: 'white',
    backgroundColor: 'red',
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

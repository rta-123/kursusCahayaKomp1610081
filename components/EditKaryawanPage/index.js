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

class EditKaryawanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kodeKaryawan: this.props.route.params.kodeKAR,
      dataKaryawan: [],
      namakar: '',
      jkkar: '',
      tgllahirkar: '',
      bidangkar: '',
      statuskar: '',
      alamatkar: '',
    };
  }

  getDetail = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/karyawan/' +
        this.state.kodeKaryawan,
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({dataKaryawan: json[0]});
        console.log('====================================');
        console.log(json);
        console.log('====================================');
        this.setState({namakar: this.state.dataKaryawan.namakar});
        this.setState({jkkar: this.state.dataKaryawan.jkkar});
        this.setState({tgllahirkar: this.state.dataKaryawan.tgllahirkar});
        this.setState({bidangkar: this.state.dataKaryawan.bidangkar});
        this.setState({statuskar: this.state.dataKaryawan.statuskar});
        this.setState({alamatkar: this.state.dataKaryawan.alamatkar});
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getDetail();
  };

  deleteKaryawan = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/karyawan/' +
        this.state.kodeKaryawan,
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
        this.props.navigation.replace('KaryawanPage');
      })
      .catch(err => console.log(err));
  };

  updateKaryawan = () => {
    fetch(
      'http://192.168.153.18/cahaya_comp1610081/public/karyawan/' +
        this.state.kodeKaryawan,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          namakar: this.state.namakar,
          jkkar: this.state.jkkar,
          tgllahirkar: this.state.tgllahirkar,
          bidangkar: this.state.bidangkar,
          statuskar: this.state.statuskar,
          alamatkar: this.state.alamatkar,
        }),
      },
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        ToastAndroid.show(
          `Data dengan kode ${this.state.kodeKaryawan} berhasil diupdate`,
          ToastAndroid.SHORT,
        );
        this.props.navigation.replace('KaryawanPage');
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.dataKaryawan) {
      return (
        <View>
          <Text>Tidak ada Data</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtheader}>Edit Data Karyawan</Text>
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
                <Text style={styles.txtlabel}>Kode Karyawan</Text>
                <TextInput
                  value={this.state.dataKaryawan.kodekar}
                  editable={false}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Nama Karyawan</Text>
                <TextInput
                  value={this.state.namakar}
                  onChangeText={value => this.setState({namakar: value})}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Jenis Kelamin</Text>
                <TextInput
                  value={this.state.jkkar}
                  onChangeText={value => this.setState({jkkar: value})}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Tanggal Lahir</Text>
                <TextInput
                  value={this.state.tgllahirkar}
                  onChangeText={value => this.setState({tgllahirkar: value})}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Bidang</Text>
                <TextInput
                  value={this.state.bidangkar}
                  onChangeText={value => this.setState({bidangkar: value})}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Status Karyawan</Text>
                <TextInput
                  value={this.state.statuskar}
                  onChangeText={value => this.setState({statuskar: value})}
                  style={styles.txtinput}
                />
              </View>

              <View>
                <Text style={styles.txtlabel}>Alamat</Text>
                <TextInput
                  value={this.state.alamatkar}
                  onChangeText={value => this.setState({alamatkar: value})}
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
                    onPress: () => this.deleteKaryawan(),
                  },
                ])
              }>
              <Text style={styles.txtfooterdelete}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.footer}
              onPress={() => this.updateKaryawan()}>
              <Text style={styles.txtfooterupdate}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

export default EditKaryawanPage;

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

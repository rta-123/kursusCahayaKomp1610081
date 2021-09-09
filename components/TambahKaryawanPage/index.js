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

class TambahKaryawanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKaryawan: [],
      kodekar: '',
      namakar: '',
      jkkar: '',
      tgllahirkar: '',
      bidangkar: '',
      statuskar: '',
      alamatkar: '',
    };
  }

  saveDataKaryawan = () => {
    fetch('http://192.168.153.18/cahaya_comp1610081/public/karyawan', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kodekar: this.state.kodekar,
        namakar: this.state.namakar,
        jkkar: this.state.jkkar,
        tgllahirkar: this.state.tgllahirkar,
        bidangkar: this.state.bidangkar,
        statuskar: this.state.statuskar,
        alamatkar: this.state.alamatkar,
      }),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.props.navigation.replace('KaryawanPage');
        json.status == 201
          ? Alert.alert('Sukses', 'data berhasil disimpan')
          : '';
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({kodekar: ''});
        this.setState({namakar: ''});
        this.setState({jkkar: ''});
        this.setState({tgllahirkar: ''});
        this.setState({bidangkar: ''});
        this.setState({statuskar: ''});
        this.setState({alamatkar: ''});
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.txtheader}>Tambah Data Karyawan</Text>
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
                value={this.state.kodekar}
                onChangeText={value => this.setState({kodekar: value})}
                placeholder="Masukkan kode karyawan"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Nama Karyawan</Text>
              <TextInput
                value={this.state.namakar}
                onChangeText={value => this.setState({namakar: value})}
                placeholder="Masukkan nama karyawan"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Jenis Kelamin</Text>
              <TextInput
                value={this.state.jkkar}
                onChangeText={value => this.setState({jkkar: value})}
                placeholder="Masukkan jenis kelamin"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Tanggal Lahir</Text>
              <TextInput
                value={this.state.tgllahirkar}
                onChangeText={value => this.setState({tgllahirkar: value})}
                placeholder="Masukkan tanggal lahir"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Bidang</Text>
              <TextInput
                value={this.state.bidangkar}
                onChangeText={value => this.setState({bidangkar: value})}
                placeholder="Masukkan bidang"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Status Karyawan</Text>
              <TextInput
                value={this.state.statuskar}
                onChangeText={value => this.setState({statuskar: value})}
                placeholder="Masukkan status karyawan"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>

            <View>
              <Text style={styles.txtlabel}>Alamat</Text>
              <TextInput
                value={this.state.alamatkar}
                onChangeText={value => this.setState({alamatkar: value})}
                placeholder="Masukkan alamat"
                placeholderTextColor="grey"
                style={styles.txtinput}
              />
            </View>
          </ScrollView>
        </LinearGradient>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.footer}
          onPress={() => this.saveDataKaryawan()}>
          <Text style={styles.txtfooter}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TambahKaryawanPage;

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

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class ProfilPage extends Component {
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
          <Text style={styles.txtheader}>User Profile</Text>
        </View>
        <View style={styles.konten}>
          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.frameimage}>
                <Image
                  source={require('../../icon/rian.jpeg')}
                  style={styles.image}
                />
              </View>
              <View style={{marginLeft: 20}}>
                <Text style={styles.nama1}>Rian</Text>
                <Text style={styles.nama2}>Nurdiansyah</Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.judulbio}>Tentang saya :</Text>
              <Text style={styles.bio}>1610081</Text>
              <Text style={styles.bio}>Sistem Informasi</Text>
              <Text style={styles.bio}>06 September 1995</Text>
              <Text style={styles.bio}>Anak ke 3 dari 5 bersaudara</Text>
              <View style={{marginTop: 20}}>
                <Text style={styles.judulbio}>Judul Skripsi :</Text>
                <Text style={styles.bio}>
                  Analisa dan pembangunan sistem informasi pengolahan data
                  peserta di lembaga kursus dan pelatihan (LKP) Cahaya komputer
                  Pariaman.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.txtfooter}>Cahaya Komputer Pariaman</Text>
        </View>
      </LinearGradient>
    );
  }
}

export default ProfilPage;

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

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },

  frameimage: {
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#358f80',
  },

  nama1: {
    fontFamily: 'Raleway-Bold',
    fontSize: 33,
  },

  nama2: {
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    marginTop: -10,
  },

  judulbio: {
    fontFamily: 'Raleway-Bold',
    fontSize: 17,
    color: '#358f80',
    marginBottom: 5,
  },

  bio: {
    fontFamily: 'Raleway-Medium',
    fontSize: 15,
  },
});

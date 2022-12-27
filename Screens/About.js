/* eslint-disable prettier/prettier */
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Sandy Aasre</Text>
      <Text style={styles.paraStyle}> I am a UI developer 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require('../assets/sandy.jpg')}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Aenean commodo ligula eget dolor.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow me on Social Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/sandy_a_a_s_r_e_/')
          }>
          <Image
            style={styles.iconStyle}
            source={require('../assets/insta.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/watch?v=Iq8L9fCNtsU'
            )
          }>
          <Image
            style={styles.iconStyle}
            source={require('../assets/youTube.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://www.linkedin.com/in/sandy-aasre-98b8341a5/')}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/linkdel.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 26,
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Home = (props) => {
  const description =
    'Bansal Tech professionals private limited is a next-generation global technology company that helps enterprises reimagine their businesses for the digital age.';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require('../assets/bansal.png')}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={styles.mainHeadname}>Bansal Tech</Text>
        {/*    <Text style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            },
            ]}>
                {props.channelName}
            </Text> */}

        <Text style={styles.paraStyle}>{description} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTop: {
    // height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 30,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    marginTop: 20,
  },
  mainHeadname: {
    fontSize: 33,
    color: '#4c5dab',
    marginTop: 0,
  },

  paraStyle: {
    textAlign: 'left',
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 27,
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Home;
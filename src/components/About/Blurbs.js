import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Blurbs extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.header}>
          our story
        </Text>

        <View style={styles.blurbsView}>
          <Text style={styles.blurbs}>
            On a cold winter’s morning in San Francisco, Linda walked into a nice and cozy
            café for breakfast. She ordered a cappuccino and a croissant.{"\n"}
          </Text>
          <View style={styles.leftCircleView}>
            <Image source={require("../../img/img-clipart-os-coffee.png")} style={styles.leftBlurbImages}/>
          </View>
        </View>

        <View style={styles.blurbsView}>
          <View style={styles.rightCircleView}>
            <Image source={require("../../img/img-clipart-os-snowflake.png")} style={styles.rightBlurbImages}/>
          </View>
          <Text style={styles.blurbs}>
            Just as she was about to take a bite of her croissant, she noticed a homeless
            person walking back and forth at a bus stop not knowing where to be, shivering
            in the cold with barely enough warm clothing.{"\n"}
          </Text>
        </View>

        <View style={styles.blurbsView}>
          <Text style={styles.blurbs}>
            At that moment, Linda recalled all the poverty she witnessed in Indonesia,
            Vietnam, Thailand, and China. She could not imagine that she would witness
            homelessness in a wealthy city like San Francisco.{"\n"}
          </Text>
          <View style={styles.leftCircleView}>
            <Image source={require("../../img/img-clipart-os-sf.jpg")} style={styles.fillSfImage}/>
          </View>
        </View>

        <View style={styles.blurbsView}>
          <View style={styles.rightCircleView}>
            <Image source={require("../../img/img-clipart-os-heart.png")} style={styles.rightBlurbImages}/>
          </View>
          <Text style={styles.blurbs}>
            Her heart went out to the homeless people as she witnessed more of such scenarios in San Francisco.{"\n"}
          </Text>
        </View>

        <View style={styles.blurbsView}>
          <Text style={styles.blurbs}>
            She decided that something has to be done to help these people get out of the vicious cycle of not even having a roof over their heads.
            She thought of mobilizing the able to help those in need, beginning with the homeless in SF.{"\n"}
          </Text>
          <View style={styles.leftCircleView}>
            <Image source={require("../../img/img-clipart-os-jam.png")} style={styles.leftBlurbImages}/>
          </View>
        </View>

        <View style={styles.blurbsView}>
           <View style={styles.rightCircleView}>
            <Image source={require("../../img/img-logo-colored.jpg")} style={styles.fillLogoBlurb}/>
          </View>
          <Text style={styles.blurbs}>
            And that''s the story of how fortissimo was conceived.{"\n"}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    verticalAlign: 'middle',
    margin: 20,
  },

  header: {
    color: '#9739E8',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: 'lighter',
    textAlign: 'center',
  },

  blurbsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  blurbs: {
    position: 'relative',
    left: '5%',
    backgroundColor: '#E8D3F7',
    width: '73%',
    fontFamily: 'Raleway',
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'lighter',
    padding: 20,
    borderRadius: 5,
    display: 'inline-block',
    overflow: 'hidden',
  },

  leftCircleView: {
    width: 80,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 50,
    marginLeft: 20,
    backgroundColor: 'white',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },

  rightCircleView: {
    width: 80,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: 'white',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },

  leftBlurbImages: {
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
    resizeMode: 'contain',
  },

  rightBlurbImages: {
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
    resizeMode: 'contain',
  },

  fillSfImage: {
    width: 80,
    height: 80,
    marginTop: -10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    borderRadius: 40,
    backgroundColor: 'white',
  },

  fillLogoBlurb: {
    width: 80,
    height: 80,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    borderRadius: 40,
    backgroundColor: 'white',
  }

});

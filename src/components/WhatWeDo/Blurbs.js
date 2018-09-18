import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Hr from 'react-native-hr-component';


export default class Blurbs extends React.Component {

  render() {
    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.header}>
            what we do
          </Text>
        </View>

        <View style={styles.catchView}>
          <View>
            <Text style={styles.catch}>
              We want you to make a difference in someone else''s life while you reap the health benefits of breakfast. {"\n"}

              {// <Hr lineColor='blue' height={1} width={200} text="hello"/>
              }
              Breakfast Software Served Sunny-side Up to Change Lives
            </Text>
          </View>
        </View>


        <View style={styles.blurbsView}>
          <View style={styles.rightCircleView}>
            <Image source={require("../../img/img-clipart-wwd-question.png")} style={styles.rightBlurbImage}/>
          </View>
          <Text style={styles.blurbsContainer}>
            So how does our breakfast app change lives?
          </Text>
        </View>


        <View style={styles.blurbsView}>
          <Text style={styles.blurbsContainer}>
            The app enables individuals to purchase a healthy and low-price breakfast.
          </Text>
          <View style={styles.leftCircleView}>
            <Image source={require("../../img/img-clipart-wwd-money.png")} style={styles.leftBlurbImage} />
          </View>
        </View>


        <View style={styles.blurbsView}>
          <View style={styles.rightCircleView}>
            <Image source={require("../../img/img-clipart-wwd-percent.png")} style={styles.rightBlurbImage}/>
          </View>
          <Text style={styles.blurbsContainer}>
            A percentage of your purchase is immediately contributed to helping people in need when using our app.
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

  catchView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  catch: {
    position: 'relative',
    backgroundColor: '#E8D3F7',
    left: '135%', /* this is keeping it in the center, edit later */
    width: '50%',
    fontFamily: 'Raleway',
    fontSize: 8,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bolder',
    borderRadius: 5,
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  blurbsContainer: {
    position: 'relative',
    left: '5%',
    backgroundColor: '#E8D3F7',
    width: '73%',
    fontFamily: 'Raleway',
    fontSize: 8,
    textAlign: 'center',
    fontWeight: 'normal',
    padding: 20,
    borderRadius: 5,
    display: 'inline-block',
    overflow: 'hidden',
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

  rightBlurbImage: {
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
  },

  leftBlurbImage: {
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
  }
});

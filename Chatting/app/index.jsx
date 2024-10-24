import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useFonts } from "expo-font";


const index = () => {

  useFonts({

    'bruso': require('./../assets/fonts/BrunoAceSC-Regular.ttf')

  })

  return (
    <SafeAreaView style={{
      backgroundColor: '#171A29',
      height: '100%',
    }}>
     
      <ScrollView >
        <View>
          <Image source={require('./../assets/images/1 (1).jpg')}
            style={hstyles.images}
          />

          <View style={hstyles.msgbox}>
            <Text style={hstyles.msg}>"Life is a matter of courtship and wooing, flirting and chatting."</Text>
          </View>


          <View style={hstyles.linkview}>
            <Link href="/chat" style={hstyles.linkbox} >
              <Text style={hstyles.linktext}>GET STARTED</Text>
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const hstyles = StyleSheet.create({
  images: {
    width: '98%',
    height: 500,
    borderRadius: 20,
    margin: 4,

  },
  msg: {
    fontSize: 28,
    textAlign: 'center',
    color: '#03BBFE'

  },
  msgbox: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  linkbox: {
    padding: 10,
    marginTop: 100,
    backgroundColor: '#07B3FE',
    width: 350,
    borderRadius: 14,
    textAlign: 'center'
  },
  linkview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linktext: {
    fontSize: 20,
    color: '#171A29',
    fontFamily: 'bruso',
  }
})

export default index
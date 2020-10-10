import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Images from '../common/Images';

export default function Header() {
  return (
    <View style={styles.header}>
          <Image style={{ height:100, width:200, resizeMode:'contain' }} source={Images.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  header : {
    height:175,
    backgroundColor:'#000',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    borderBottomRightRadius : 300,
    borderBottomLeftRadius:300
  },
});

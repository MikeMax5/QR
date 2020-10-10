import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Images from '../common/Images';
import ConfirmCode from './ConfirmCode';

export default function PinCode(props) {
  return (
    <View style={styles.container}> 
        <View style={{display:'flex', padding:10}}>
          <Image resizeMode={"contain"} source={Images.pinCode} style={{width:'100%' , height:'100%'}}/>
        </View>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#6D6B6B', textAlign:'center'}}>
            ENTREZ VOTRE CODE PIN
        </Text>
        <View style={{marginTop : 20, paddingHorizontal:15}}>
          <ConfirmCode goBack={props.goBack} sendCode={props.sendCode}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    flex:1,
    width:'100%',
  },
  scanner : {
    backgroundColor:'#ddd',
    flex:1,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10
  },
  infos : {
    flex:1,
    paddingTop:10,
    backgroundColor:'#fff',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  scanInfo : {
    color : "#545353",
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }

});

import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import Images from '../common/Images';
import Camera from './Camera';

export default function Scanner(props) {
  const [hidden,setHidden] = React.useState(true) ; 
  return (
    <View style={styles.container}>
        <View style={styles.scanner}>
            {!hidden && <Camera sendData={props.sendData}/>}
        </View>
        <TouchableOpacity activeOpacity={0.5} onLongPress={()=> setHidden(!hidden)} style={styles.infos}>
            <Text style={styles.scanInfo}>
              Scannez votre carte ici
            </Text>
            <View style={{display:'flex', flex:1, padding:10}}>
              <Image resizeMode={"cover"} source={Images.qr} style={{width:'100%' , height:'100%'}}/>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    flex:1,
    height:220,
    width:'100%',
    borderWidth:3,
    borderColor:'#000',
    borderRadius:10
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

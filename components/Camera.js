import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Camera(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [type,setType] = useState(BarCodeScanner.Constants.Type.back) ; 
    const [lastScanned,setLast] = React.useState() ; 
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  var timer = null ; 
  const handleBarCodeScanned = ({ type, data }) => {
      if((data == lastScanned) && scanned){
        return ; 
      }
      clearTimeout(timer) ; 
      setScanned(true) ;
      timer = setTimeout(()=> {
          setScanned(false)
      }, 60000)
      props.sendData(data)
      setLast(data) ; 
  };

  if (hasPermission === null) {
    return <Text></Text>;
  }
  if (hasPermission === false) {
    return <Text style={{textAlign:'center', marginTop:5}}>Accès à la caméra non autorisé</Text>;
  }

  return (
    <TouchableOpacity
        activeOpacity={1}
        onLongPress={()=> setType(type == BarCodeScanner.Constants.Type.front ? BarCodeScanner.Constants.Type.back : BarCodeScanner.Constants.Type.front)}
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        type={type}
      />

    </TouchableOpacity>
  );
}
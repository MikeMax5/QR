import React from 'react';
import { StyleSheet, Text, View,Alert, ScrollView } from 'react-native';
import DateTimeDIsplayer from '../components/DateTimeDIsplayer';
import Scanner from '../components/Scanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { sendData, getData } from '../API';

export default function MainView(props) {

  const sendDataFunc = (scannedData) => {
    var date = new Date() ; 
    var time = date.toLocaleTimeString() ;
    var day = date.toLocaleDateString();
    sendData({
      student_code : scannedData,
      scan_time : time,
      date : day,
      mode : 'scan'
    })
    Alert.alert('Opération réussie')
  }

  return (

    <ScrollView contentContainerStyle={{paddingBottom:40}} style={styles.container}>
        <View>
          <Header/>
        </View>
        <View style={styles.mainView}>
          <View style={styles.separator}>
            <DateTimeDIsplayer/>
          </View>
          <View style={styles.separator}>
            <Scanner sendData={sendDataFunc} />
          </View>
          <View style={styles.separator}>
            <Footer 
              goToPinCode={()=> props.navigation.navigate('PinCodeView')} 
              goToAdmin={()=> props.navigation.navigate('AdminView')}
            />
          </View>
          
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  
  mainView :{
    flex:1,
    paddingHorizontal:20,
    marginTop:20
  },
  separator : {
    marginBottom:30,
    flex:1
  }
});

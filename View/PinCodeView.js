import React from 'react';
import { StyleSheet, Text,KeyboardAvoidingView, View, Alert, ScrollView } from 'react-native';
import DateTimeDIsplayer from '../components/DateTimeDIsplayer';
import Scanner from '../components/Scanner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PinCode from '../components/PinCode';
import { sendData } from '../API';

export default function PinCodeView(props) {
  const sendCode = (value) => {
      var date = new Date() ; 
      var time = date.toLocaleTimeString() ;
      var day = date.toLocaleDateString();
      sendData({
        student_code : value,
        scan_time : time,
        date : day,
        mode : 'pin'
      })
      Alert.alert('Opération réussie')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{flex:1}}
    >
      <ScrollView contentContainerStyle={{paddingBottom:40}} style={styles.container}>
          <View>
            <Header/>
          </View>
          <View style={{marginTop:20}}>
            <PinCode goBack={() => props.navigation.navigate('MainView')} sendCode={sendCode} />
          </View>
      </ScrollView>
    </KeyboardAvoidingView>

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

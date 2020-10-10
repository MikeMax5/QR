import React from 'react';
import { StyleSheet,KeyboardAvoidingView, Platform, Text, View,Alert, ScrollView } from 'react-native';
import DateTimeDIsplayer from '../components/DateTimeDIsplayer';
import Scanner from '../components/Scanner';
import Footer from '../components/Footer';
import Admin from '../components/Admin';

import Header from '../components/Header';
import { addNewUser } from '../API';

export default function AdminView(props) {
  const addUser = (userData) => {
    addNewUser(userData)
    Alert.alert('Ajout effectué')
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
            <View style={{paddingHorizontal:20}}>
              <Admin goToDisplayer={()=> props.navigation.navigate('UserDisplayView')} addUser={addUser} goBack={() => props.navigation.navigate('MainView')}/>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    
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

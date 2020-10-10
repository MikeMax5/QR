import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Footer(props) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={props.goToPinCode} style={styles.button}>
          <Text style={styles.buttonText}>
            UTILISER SON CODE PIN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={props.goToAdmin} style={styles.button}>
          <Text style={styles.buttonText}>
            ADMINISTRATEUR
          </Text>
        </TouchableOpacity>

      </View>
     
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  buttonText : {
    color : '#fff',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center'
  },
  button : {
    backgroundColor:'#FFCC00',
    paddingVertical:15,
    borderRadius:10,
    marginBottom:20,
    shadowOffset : {
      height : 5,
      width:5
    },
    
    shadowColor:"#F05774",
    shadowOpacity:100
  }
  

});

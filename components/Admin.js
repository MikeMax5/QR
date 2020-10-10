import React from 'react';
import { StyleSheet, Text,Alert,TextInput, View,TouchableOpacity } from 'react-native';

export default function Admin(props) {

  const [studentData, setStudentData] = React.useState({}) ; 
  const addNewStudent = () => {

    const {firstname,lastname, pinCode, id, referent} = studentData ;
    if(firstname && lastname && pinCode && id && referent){
      props.addUser(studentData) ; 
      props.goBack() ; 
      return ; 
    }
    else {
      Alert.alert('Tous les champs sont obligatoires')
    }
  }

  const updateText = (field,data) => {
    setStudentData({
      ...studentData,
      [field] : data
    })
  }
  return (
    
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={props.goToDisplayer} activeOpacity={0.5} style={styles.button}>
          <Text style={styles.buttonText}>
            SUIVI
          </Text>
        </TouchableOpacity>

        <TouchableOpacity  activeOpacity={1} style={{...styles.button, shadowOpacity:0}}>
          <Text style={styles.buttonText}>
            AJOUTER NOUVEL ETUDIANT
          </Text>
        </TouchableOpacity>

        <View style={styles.textView}>
          <TextInput 
            placeholderTextColor='#999'
            selectionColor={'#fff'}
            onChangeText={text => updateText("lastname",text)}
            placeholder={'NOM'} style={styles.textInput}
          />
        </View>

        <View style={styles.textView}>
          <TextInput 
            placeholderTextColor='#999'
            selectionColor={'#fff'}
            onChangeText={text => updateText("firstname",text)}
            placeholder={'PRENOM'} style={styles.textInput}
          />
        </View>

        <View style={styles.textView}>
          <TextInput 
            placeholderTextColor='#999'
            selectionColor={'#fff'}
            onChangeText={text => updateText("id",text)}
            placeholder={'ID'} style={styles.textInput}
          />
        </View>

        <View style={styles.textView}>
          <TextInput 
            placeholderTextColor='#999'
            selectionColor={'#fff'}
            onChangeText={text => updateText("referent",text)}
            placeholder={'RÉFÉRENT'} style={styles.textInput}
          />
        </View>

        <View style={styles.textView}>
          <TextInput 
            placeholderTextColor='#999'
            selectionColor={'#fff'}
            onChangeText={text => updateText("pinCode",text)}
            placeholder={'CODE PIN'} style={styles.textInput}
          />
        </View>

      </View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity onPress={addNewStudent} style={{...styles.button, marginTop:20, shadowOpacity:0, width:200}}>
            <Text style={styles.buttonText}>
              VALIDER
            </Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={props.goBack}>
          <Text style={{...styles.buttonText, color:'#F05774'}}>
            Annuler
          </Text>
      </TouchableOpacity>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    paddingTop:30
  },
  textInput : {
    borderWidth:1,
    height:48,
    borderRadius:5,
    backgroundColor:'#D4D7DD',
    color : '#fff',
    fontSize:16,
    paddingLeft:10,
    tintColor:'#fff',
    borderColor:'#fff',
   
  },
  textView: {
    marginTop:20
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

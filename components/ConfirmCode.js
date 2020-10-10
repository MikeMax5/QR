import React, {useState} from 'react';
import {SafeAreaView, TextInput,Alert, Text,View, StyleSheet, TouchableOpacity} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  codeFieldRoot: {marginTop: 20, },
  cell: {
    width: 80,
    height: 80,
    lineHeight: 76,
    fontSize: 40,
    //backgroundColor:'#fff',
    textAlign: 'center',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#6D6B6B',
    color : '#6D6B6B'
  },
  focusCell: {
    borderColor: '#000',

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
 
const CELL_COUNT = 4;
 
const ConfirmCode = (mainProps) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const sendCode = () => {
      if(value && (value.length == 4)){
        mainProps.sendCode(value) ; 
        mainProps.goBack()
        return ; 
      }
      Alert.alert('Format incorrect') ; 
  }
  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        autoFocus
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        //textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity onPress={sendCode} style={{...styles.button, marginTop:20, shadowOpacity:0, width:200}}>
                <Text style={styles.buttonText}>
                VALIDER
                </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={mainProps.goBack}>
          <Text style={{...styles.buttonText, color:'#F05774'}}>
            Annuler
          </Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
};
 

  
export default ConfirmCode;
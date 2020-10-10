import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {timezoneToTime,timezoneToDate,timezoneToDynamicTime} from '../common/TimeManager' ; 
export default function DateTimeDIsplayer() {
  
  const [timestamp,setData] = React.useState(new Date()) ;

  React.useEffect(()=> {
    setInterval( () => {
      setData(
         new Date()
      )
    },1000)
  },[])
  
  

  return (
    <View style={styles.container}>
        <Text style={styles.time}>
          {timezoneToTime(timestamp)}
        </Text>
        <Text style={styles.date}>
        {timezoneToDate(timestamp)}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    shadowOpacity:0.1,
    shadowColor:'#000',
    shadowOffset : {height:5, width:5}
  },
  time : {
    color :"#545353",
    fontSize:39,
    fontWeight:'bold'
  },
  date : {
    color :"#6D6B6B",
    fontSize:16
  }
});

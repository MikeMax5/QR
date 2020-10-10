import React from 'react';
import { StyleSheet,  View } from 'react-native';
import UserDisplay from '../components/UserDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getData } from '../API';

export default function UserDisplayView(props) {
  

  const [data,setData] = React.useState([])
  const [header,setHeader] = React.useState([])
  const [loaded,setLoaded] = React.useState(false) ;
  if(!loaded){
    getData().then(response => response.json()).then( resp => {
      console.log('resp',resp)
      formatData(resp.values)
      setLoaded(true)
    })
  }

  const formatData = ([first,...allRows]) => {
    setHeader(first);
    setData(allRows)
  }
  if(!loaded){
    return <View/>
  }
  return (
      <SafeAreaView  style={styles.container}>
          <UserDisplay header={header}  data={data} />
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  }
});

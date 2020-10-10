
import React from 'react' ;
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
export default function UserDisplay (props) {

    const [data,setData] = React.useState(props.data) ; 
    const [searchText,setSearchText] = React.useState("") ; 
    
    const includes = (tab,elts) => {
        console.log('elts',elts)
        var contains = true ; 
        var i = 0 ;
        while( contains && i < elts.length){
            const elt = elts[i]
            contains = !elt || (tab.join(' ').includes(elt))
             i++ ;
        }
        return contains ; 
    }
    const filter = (text) => {
        setSearchText(text)
        if(!text){
            setData(props.data) ;
            return ;
        }
        const fields = text.split(' ') ;
        const remaining = props.data.filter(elt => includes(elt,fields)) ;
        setData(remaining)
    }

    const getDisplayer = (elt) => {
        return (
        <View style={{flex:1, display:'flex', flexDirection:'row'}}>
            {elt.map(e=> <Text style={{flex:1, textAlign:'center', fontSize:18}}>{e}</Text>)} 
        </View>
        )
    }

    return (
        <View style={{display:'flex', flex:1}}>
            <View>
                <SearchBar value={searchText} onChangeText={text => filter(text ? text.toLowerCase() : text)} placeholder={props.header.join(', ')} lightTheme/>
            </View>
            <View style={{ display:'flex', flexDirection:'row'}}>
               {props.header.map(e => (
                   <Text style={{flex:1, textAlign:'center', fontSize:16, fontWeight:'bold'}}>{e}</Text>
               ))}
            </View>
            <ScrollView style={{flex:1}}>
                {
                    data.map((elt) => getDisplayer(elt))
                }
            </ScrollView>
        </View>
    )
}
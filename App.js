import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [bg,setbg] = useState("purple");
  const [bgfirst,setbgfirst] = useState("#fff");
  const [bgsecond,setsecond] = useState("#000");
  const colorgenerator = ()=>{
    let color = '#'
    const indexcolor = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        color += indexcolor[Math.floor(Math.random()*16)]
    }
    return color
  }
  const changebg = ()=>{
       const bgcolor = colorgenerator();
       const bgcolor1 = colorgenerator();
       const bgcolor2 = colorgenerator();
       setbg(bgcolor)
       setbgfirst(bgcolor1)
       setsecond(bgcolor2)
  }
  return (
    <>
       <StatusBar backgroundColor={bg}/>
       <View style={[styles.container,{backgroundColor: bg}]}> 
          <View style={styles.first}>
            <View style={[styles.second,{backgroundColor:bgfirst}]}></View>
            <View style={[styles.second,{backgroundColor:bgsecond}]}></View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={changebg}>
                <Text style={styles.txt}>Press me</Text>
          </TouchableOpacity>
       </View>
    </>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn:{
     backgroundColor:'gray',
     paddingHorizontal:30,
     paddingVertical:10,
     fontWeight:4,
     borderRadius:20,
     marginBottom:100,
  },
  txt:{
    color:'#fff',
  },
  second:{
    height:300,
    width:300,
    // backgroundColor:'#fff',
    marginHorizontal:10,
    borderRadius:10,
    margin:40,
  },
  first:{
    // margin:100,
    // flex:1,
    // flexDirection:'row',
   
    
  }
  
});

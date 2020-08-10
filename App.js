import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, TextInput,TouchableOpacity,Keyboard, Alert, TouchableWithoutFeedback } from 'react-native';


const currencyPerRupee= {
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000001
}

export default class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
inputvalue:"",
resultvalue:"0.0"
   }
 }

 buttonPressed = currency => {
   if(this.state.inputvalue === ""){
     Alert.alert("Enter some value")
   }
   let result = parseFloat(this.state.inputvalue) * 
   currencyPerRupee[currency];

   this.setState({resultvalue : result.toFixed(2)});
 };

  render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView  style={styles.container}>
    <View style={styles.screenview}>
    <View style={styles.resultcontainer}>
    <Text style={styles.resultvalue}>{this.state.resultvalue}</Text>
    </View>
    <View style={styles.inputcontainer}>
    <TextInput
    style={styles.input}
    selectionColor="#FFF"
    keyboardType="numeric"
    placeholder="Enter Value"
    value={this.state.inputvalue}
    onChangeText={inputvalue => this.setState({inputvalue})}
    
    />
    
    </View>
    <View style={styles.converterbuttoncontainer}> 
    <TouchableOpacity
    onPress={() => this.buttonPressed("DOLLAR")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>$</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("EURO")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Euro</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("POUND")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>pound</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("AUSDOLLAR")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Aus</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("CANADADOLLAR")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Canada</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("YEN")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Yen</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("DINAR")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Dinar</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("BITCOIN")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Bit</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => this.buttonPressed("RUBEL")}
    style={styles.converterbutton}>
    <Text style={styles.converterbuttontext}>Rubel</Text>
    </TouchableOpacity>
    </View>


    </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#535C68",
    marginTop:20
   
  },
  screenview:{
    flex:1
  },
  resultcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DF",
    borderWidth:2
  },
  resultvalue:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },
  inputcontainer:{
    height:70,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"#c1c1c1",
    borderWidth:2,
    backgroundColor:"#0A79DF"
  },
  input:{
fontSize:30,
color:"#FFF"
  },
  converterbuttoncontainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  converterbutton:{
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#0A79DF",
  height:100,
  borderColor:"#c1c1c1",
  borderWidth:2,
  width:"33.3%"
  },
  converterbuttontext:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  }
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  AppRegistry,
  ActivityIndicator,
  ListView,
  FlatList,
  Image
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
GetItem (names) {
   
  alert(names);
 
  }

  static navigationOptions = {
    title:'Productos'
  }
 
 
  renderItem = ({item})=> {
    return (
     <View  style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }} > 
     <Image style={{ width: 80, height: 80, margin: 5 }} source={{ uri: 'http://sustento.000webhostapp.com/'+item.imagenProd+'' }} /> 
     <View  style={{ fLex: 1, justifyContent: 'center', marginLeft: 5 }} > 
     <Text  style={styles.cont} > {item.nomProd} </Text> 
     <Text  style={styles.cont} > Stock: {item.cantProd} </Text> 
     <Text  style={styles.cont} > Lps. {item.precioProd} </Text>  
       </View> 
     </View> 
     
      )
  }

  componentDidMount() {
       const url = "http://sustento.000webhostapp.com/products.php";
       fetch(url).then((response)=>response.json())
                 .then((responseJson)=> {
                   this.setState({
                     dataSource : responseJson
                   })
                  })
                  .catch((error)=> {
                    console.log(error);
                  })      
  }


  render() {
     return (
       <View style={styles.MainContainer}> 
           <FlatList 
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
       </View>
        )

  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
padding: 5,
backgroundColor: '#fff',
color: '#000'
},
 
   rowViewContainer: {
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'#fff',
        color:'#000',
        
      },

      cont:{
        color: '#000'
      }
 
})

AppRegistry.registerComponent('Home', () => Myproject);
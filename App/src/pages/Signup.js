import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component{

  goBack() {
      Actions.pop();
  }

  static navigationOptions = {
    title:'Register'
  }

  constructor(props){
    super(props)
    this.state={
        UserEmail:'',
        UserPassword:'',
        UserName:'',
    }
}
    signup=()=>{
        const {UserEmail,UserPassword,UserName}=this.state;
        fetch('http://sustento.000webhostapp.com/register.php',{
            method:'post',
            header:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                // we will pass our input data to server
                email: UserEmail,
                password: UserPassword,
                name: UserName,
            })
            
        })
        .then((response) => response.json())
        .then((responseJson)=>{
            if(responseJson === 'Data Matched')
            {
              alert('Registrado')
              this.props.navigation.navigate('Login');
    
            }
            else{
            alert(responseJson);
            }
        })
        .catch((error)=>{
        console.error(error);
    });
    }
	render() {
		return(
			<View style={styles.container}>
        <Logo/>
        <TextInput style={styles.inputBox} 
              onChangeText={UserName=>this.setState({UserName})}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"
              placeholderTextColor = "#000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
				<TextInput style={styles.inputBox} 
              onChangeText={UserEmail=>this.setState({UserEmail})}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#000"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              />
          <TextInput style={styles.inputBox} 
              onChangeText={UserPassword=>this.setState({UserPassword})}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#000"
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress={this.signup}>Registrarse</Text>
           </TouchableOpacity> 
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Ya tienes cuenta?</Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}>Ingresar</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'#001',
  	fontSize:16
  },
  signupButton: {
  	color:'#000',
  	fontSize:16,
  	fontWeight:'500'
  },
  
  inputBox: {
    width:300,
    backgroundColor:'#0001',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#000',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});

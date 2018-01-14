import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import Resultado from './components/Resultado';


export default class App extends Component<{}> {

  state = {
    opcaoUsuario    : '',
    opcaoComputador : '',
    resultado       : '',
  };

  jokenpo = (opcaoUsuario) => {

    var randomOpcaoComputador = Math.floor(Math.random() * 3);
    var opcaoComputador       = '';
    var resultado             = '';

    switch(randomOpcaoComputador)
    {
      case 0: opcaoComputador = "pedra"; break;
      case 1: opcaoComputador = "papel"; break;
      case 2: opcaoComputador = "tesoura"; break;
    }

    if (opcaoUsuario == "pedra")
    {
      if(opcaoComputador == "pedra")
      {
        resultado = "Empate!";
      }
      else if (opcaoComputador = "papel")
      {
        resultado = "Computador ganhou!";
      }
      else if (opcaoComputador = "tesoura")
      {
        resultado = "Jogador ganhou!";        
      }
    }
    else if (opcaoUsuario == "papel")
    {
      if(opcaoComputador == "papel")
      {
        resultado = "Empate!";
      }
      else if (opcaoComputador = "pedra")
      {
        resultado = "Jogador ganhou!";
      }
      else if (opcaoComputador = 'tesoura')
      {
        resultado = "Computador ganhou!";        
      }
    }
    else if (opcaoUsuario == "tesoura")
    {
      if(opcaoComputador == "tesoura")
      {
        resultado = "Empate!";
      }
      else if (opcaoComputador = "pedra")
      {
        resultado = "Computador ganhou!";
      }
      else if (opcaoComputador = "papel")
      {
        resultado = "Jogador ganhou!";        
      }      
    }

    this.setState({
      opcaoUsuario    : opcaoUsuario,
      opcaoComputador : opcaoComputador,
      resultado       : resultado
    });

  };

  render() {
    return (
      <View>
        <View>
          <Image source={require('./images/jokenpo.png')} />
        </View>

        <View style= { styles.containerButton }>
          <Button title="Pedra"   style={ styles.buttonStyle } onPress={ () => {this.jokenpo('pedra')}}   />
          <Button title="Papel"   style={ styles.buttonStyle } onPress={ () => {this.jokenpo('papel')}}   />
          <Button title="Tesoura" style={ styles.buttonStyle } onPress={ () => {this.jokenpo('tesoura')}} />
        </View>

        <View style={ styles.containerResult }> 
          <Text style={ styles.fontResultado }>{this.state.resultado}</Text>
          <Resultado jogador="Jogador" escolha={this.state.opcaoUsuario}></Resultado>
          <Resultado jogador="Computador" escolha={this.state.opcaoComputador}></Resultado>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }, 
  buttonStyle: {   
    borderRadius: 8,
  },
  containerResult: {
    alignItems: 'center',
    marginTop: 10,    
  },
  fontResultado: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 40,

  }
});

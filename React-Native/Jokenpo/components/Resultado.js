import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';


export default class Resultado extends Component {
    render(){

        if(this.props.escolha == "pedra")
        {
            return(
                <View style={ styles.styleView }>
                    <Text style={ styles.styleJogador }>{this.props.jogador}</Text>
                    <Image source={require('./images/pedra.png')}/>
                </View>
            );
        }
        else if(this.props.escolha == "papel")
        {
            return(
                <View style={ styles.styleView }>
                    <Text style={ styles.styleJogador }>{this.props.jogador}</Text>
                    <Image source={require('./images/papel.png')}/>
                </View>
            );
        }
        else if(this.props.escolha == "tesoura")
        {
            return(
                <View style={ styles.styleView }>
                    <Text style={ styles.styleJogador }>{this.props.jogador}</Text>
                    <Image source={require('./images/tesoura.png')}/>
                </View>
            );
        }
        else
        {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    styleJogador: {
        fontSize: 16,
        fontWeight: 'bold',        
    },
    styleView: {
        alignItems: 'center',
    },
});
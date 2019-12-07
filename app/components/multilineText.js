import React,{Component} from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native'

export default class MultilineText extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contentText:''
        }
    }

    render() {
        return (
            <View   
                style={styles.multilineText}>
                <TextInput  
                    multiline={true}
                    maxLength={this.props.maxLength || 10000}
                    underlineColorAndroid='transparent'
                    placeholder={this.props.placeholder}
                    textAlignVertical={'top'}
                    style={{height:global.rem*3}}
                    onChangeText={this.ChangeText}
                />
                {this.props.maxLength &&
                <Text style={styles.multilineCalculate}>
                    <Text>{this.state.contentText.length}</Text>/<Text>{this.props.maxLength}</Text>
                </Text>}
            </View>
        );
    }

    ChangeText=(str)=>{
        this.setState({
            contentText:str
        })
    }
}

const styles = StyleSheet.create({
    multilineText:{
        height:global.rem*3.5,
        paddingBottom:global.rem*0.5,
        borderRadius:global.rem*0.15,
        position:'relative',
        backgroundColor:'#eee'
    },
    multilineCalculate:{
        width:global.rem*2,
        textAlign:'center',
        borderRadius:global.rem*0.5,
        position: 'absolute',
        right:5,bottom:5,
        backgroundColor:'#ccc'
    },
})
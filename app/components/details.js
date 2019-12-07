import React,{Component} from 'react'
import {
    View,
    Text
} from 'react-native'

export default class Details extends Component{
    render(){
        return(
            <View   style={{flexDirection:'row',
                            padding:global.rem*0.3,
                            backgroundColor:this.props.bgn,
                            borderBottomColor:'#eee',
                            borderBottomWidth:this.props.borderBottom===true?
                            1:0}}>
                <Text>
                    {this.props.title}
                </Text>
                <View   
                    style={{width:global.rem*7,
                            height:'auto',
                            marginLeft:global.rem*0.3}}>
                    {this.props.val}
                </View>
            </View>
        )
    }
}
import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

export default class SetATime extends Component{
    render(){
        return(
            <TouchableWithoutFeedback
                onPress={()=>{alert(1)}}>
                <View   style={styles.setATimeC}>
                    <Text> 2018-03-09 </Text>
                    <Icon name="chevron-right" size={global.rem*0.36}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    setATimeC:{
        position: 'relative',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
})
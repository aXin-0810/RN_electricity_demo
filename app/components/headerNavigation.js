import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class HeaderNavigation extends Component{
    render(){
        return(
                <View style={styles.headNav}>
                {/* 设置返回键 */}
                <View style={{width:'30%',textAlign:'left'}}>
                    {this.props.returnPage &&
                    <Icon name="chevron-left" size={global.rem*0.36} onPress={ this.props.returnPage } style={{width:15}}/>}
                </View>

                {/* 到航头名称 */}
                <Text style={{width:'40%',textAlign:'center',fontSize:global.rem*0.48}}>
                    {this.props.title}
                </Text>

                {/* 右功能键 */}
                <Text style={{width:'30%',textAlign:'right',fontSize:global.rem*0.35}} onPress={ this.props.more }>
                    {this.props.jump || ''}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headNav: {
        width:global.width,
        height:global.rem*1.2,
        paddingLeft:global.rem*0.2,
        paddingRight:global.rem*0.2,
        borderBottomWidth:1,
        borderBottomColor:'#eee',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative'
    },
});
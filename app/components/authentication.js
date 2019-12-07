import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class Authentication extends Component {
    render(){
        return(
            <View style={[styles.personalText]}>
                <View style={[styles.certificationIcon,{backgroundColor:'#0aa1ed'}]}>
                    <Image  
                        source={require('../assets/icon/phone.png')}
                        style={styles.certifiIconSize}
                    />
                </View>
        
                <View style={[styles.certificationIcon,{backgroundColor:'#ff9630'}]}>
                    <Image  
                        source={require('../assets/icon/jiangpai.png')}
                        style={styles.certifiIconSize}
                    />
                </View>
        
                <View style={[styles.certificationIcon,{backgroundColor:'red'}]}>
                    <Image  
                        source={require('../assets/icon/zhengshu.png')}
                        style={styles.certifiIconSize}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 认证小图标
    certificationIcon: {
        width:global.rem*0.35,
        height:global.rem*0.35,
        borderRadius:global.rem*0.1,
        marginRight:global.rem*0.1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    // 认证图标尺寸
    certifiIconSize: {
        width:global.rem*0.3,
        height:global.rem*0.3,
    },
    // 文本详情
    personalText:{
        width:global.rem*7,
        flexDirection:'row',
    },
})
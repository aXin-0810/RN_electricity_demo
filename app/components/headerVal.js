import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class HeaderVal extends Component{
    render(){
        return(
            <View style={styles.dataValconent}>
                {/* 背景 */}
                <Image  
                    source={{uri:'http://pic2.ooopic.com/12/36/82/15b1OOOPIC5a.jpg'}}
                    style={styles.dataBackground}
                />

                {/* 头像 */}
                <TouchableWithoutFeedback   onPress={()=>{alert('头像')}}>
                    <Image  
                        source={{uri:'http://img3.duitang.com/uploads/item/201508/07/20150807093300_PfsQS.jpeg'}}
                        style={styles.dataTopPhoto}
                    />
                </TouchableWithoutFeedback>

                {/* 姓名性别年龄 */}
                <View style={styles.dataAgeSex}>
                    <Text style={styles.dataName}>林茜茜</Text>
                    <View style={styles.dataAgeConent}>
                        <Image  
                            source={require('../assets/icon/nvxing2.png')}
                            style={styles.dataAgeIcon}
                        />
                        <Text style={styles.dataAgeText}>24岁</Text>
                    </View>
                </View>

                {/* 地区定位 */}
                <View style={styles.addressLocation}>
                    <Text style={styles.addCity}> 
                        <Image  
                            source={require('../assets/icon/dingwei.png')}
                            style={styles.addressLocationIcon}
                        />
                        <Text>广州市 白云区 磨刀南街 11.2KM</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 用户资料布局
    dataValconent: {
        width:global.width,
        height:global.rem*7,
        position:'relative',
        paddingTop:global.rem*3,
        alignItems:'center'
    },
    // 背景图
    dataBackground: {
        width:global.width,
        height:global.rem*7,
        position:'absolute',
        top:0,left:0
    },
    // 头像图片
    dataTopPhoto: {
        width:global.rem*1.5,
        height:global.rem*1.5,
        borderRadius:global.rem*0.75
    },
    dataAgeSex: {
        position:'relative',
        marginTop:global.rem*0.24
    },
    dataName: {
        color:'#fff',
        fontSize:global.rem*0.45
    },
    dataAgeConent: {
        position:'absolute',
        top:global.rem*0.05,
        right:-50,
        flexDirection:'row',
        alignItems:'center'
    },
    dataAgeIcon: {
        width:global.rem*0.35,
        height:global.rem*0.35
    },
    dataAgeText: {
        color:'#fff',
        fontSize:global.rem*0.4
    },
    addressLocation: {
        width:global.rem*8,
        height:'auto',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    addressLocationIcon: {
        width:global.rem*0.35,
        height:global.rem*0.35
    },
    addCity: {
        color:'#fff',
        fontSize:global.rem*0.4
    },
})
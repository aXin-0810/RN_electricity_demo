import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

import Authentication from './authentication'

export default class OrderCard extends Component{
    render(){
        return(
            <View style={styles.OrderCardView}>
                {/* 卡片信息描述 */}
                <TouchableWithoutFeedback
                    onPress={ this.props.click }>
                    <View style={styles.OrderCardDescribe}>
                        {/* 发布者简述 */}
                        <View style={styles.publisherView}>
                            <Image
                                source={{uri:'http://i.shangc.net/2017/0405/20170405010128748.jpg'}}
                                style={styles.publisherImg}
                            />
                            <View>
                                <View style={styles.publisherInformation}>
                                    {/* 发布者昵称 */}
                                    <Text>hogfrn</Text>
                                    {/* 发布者距离 */}
                                    <View style={styles.centeredLayout}>
                                        <Image
                                            source={require('../assets/icon/dingwei2.png')}
                                            style={styles.publisherPositionIcon}
                                        />
                                        <Text>13.02km</Text>
                                    </View>
                                </View>
                                
                                {/* 发布者性别 */}
                                <View style={styles.centeredLayout}>
                                    <Image
                                        source={require('../assets/icon/nvxing.png')}
                                        style={styles.publisherGenderIcon}
                                    />
                                    <Text>26岁</Text>
                                </View>
                            </View>
                        </View>
                        
                        {/* 发布者需求信息 */}
                        <View>
                            <View style={styles.requirementsDescribe}>
                                <View style={{ flexDirection:'row' }}>
                                    <Image
                                        source={require('../assets/icon/xuqiu.png')}
                                    />
                                    <Text style={styles.requirementsText}>
                                        {'健身'}
                                    </Text>
                                    <Text>{'3天后过期'}</Text>
                                </View>

                                <Text>发布时间:{'2018-03-09'}</Text>
                            </View>
                            
                            {/* 发布者认证信息 */}
                            <View style={{ alignItems:'center',flexDirection:'row' }}>
                                <Text style={{marginRight:global.rem*0.2}}>认证:</Text>
                                {/* 认证小图标 */}
                                <Authentication/>
                            </View>
                        </View>
                        
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.OrderCardBtnView}>
                    <Text 
                        style={styles.invitedBtn}
                        onPress={ ()=>{alert('应邀赚钱')} }
                    >
                        {'应邀赚钱'}
                    </Text>
                    <Text 
                        style={styles.shareBtn}
                        onPress={ ()=>{alert('应邀赚钱')} }
                    >
                        {'分享赚钱'}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    OrderCardView:{
        width:global.width,
        height:'auto',
        marginBottom:global.rem*0.3,
        backgroundColor:'#fff'
    },
    OrderCardDescribe:{
        width:global.width,
        height:'auto',
        paddingTop:global.rem*0.2,
        paddingBottom:global.rem*0.2,
        paddingLeft:global.rem*0.35,
        paddingRight:global.rem*0.35,
        borderBottomWidth:global.rem*0.02,
        borderTopWidth:0.02,
        borderColor:'#ddd'
    },
    publisherView:{
        flexDirection:'row',
        marginBottom:global.rem*0.2
    },
    publisherImg:{
        width:global.rem*1.2,
        height:global.rem*1.2,
        borderRadius:global.rem*0.6,
        marginRight:global.rem*0.3,
    },
    publisherInformation: {
        width:global.rem*7.6,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    centeredLayout:{
        flexDirection:'row',
        alignItems:'center'
    },
    publisherPositionIcon:{
        width:global.rem*0.4,
        height:global.rem*0.4
    },
    publisherGenderIcon:{
        width:global.rem*0.3,
        height:global.rem*0.3
    },
    requirementsDescribe:{
        width:global.rem*9.2,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    requirementsText:{
        color:'#444',
        marginRight:global.rem*0.6,
    },
    OrderCardBtnView:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:global.rem*0.2
    },
    invitedBtn:{
        paddingTop:global.rem*0.15,
        paddingBottom:global.rem*0.15,
        paddingLeft:global.rem*0.5,
        paddingRight:global.rem*0.5,
        borderRadius:global.rem*0.5,
        backgroundColor:'red',
        color:'#fff'
    },
    shareBtn:{
        paddingTop:global.rem*0.15,
        paddingBottom:global.rem*0.15,
        paddingLeft:global.rem*0.5,
        paddingRight:global.rem*0.5,
        borderRadius:global.rem*0.5,
        borderWidth:global.rem*0.02,
        borderColor:'#ddd',
        color:'red'
    },
})
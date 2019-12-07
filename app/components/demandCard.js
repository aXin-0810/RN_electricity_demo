import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class DemandCard extends Component{
    render(){
        return(
            <View  style={styles.demandCard}>
                <TouchableWithoutFeedback onPress={ this.props.click }>
                    <View>
                        {/* 需求类目信息 */}
                        <View style={styles.demandCardTitle}>
                            <View style={styles.demandCardTitleView}>
                                <Image
                                    source={require('../assets/icon/xuqiu.png')}
                                    style={styles.demandCardTitleImg}
                                />
                                <Text>程序编写</Text>
                            </View>
                            <Text>未成交</Text>
                        </View>

                        {/* 需求期限时间 */}
                        <View
                            style={styles.demandPeriod}>
                            <Image
                                source={require('../assets/icon/shijian.png')}
                                style={styles.demandPeriodImg}
                            />
                            <Text>24天后过期</Text>
                            <Text>发布:2018-03-09</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                    
                {/* 应邀者显示区 */}
                <View>
                    <View style={styles.wasInvited}>
                        <View style={[styles.wasInvitedLine,{marginRight:global.rem*0.5}]} />
                        <Text>已有6位应邀者</Text>
                        <View style={[styles.wasInvitedLine,{marginLeft:global.rem*0.5}]} />
                    </View>
                    {/* 应邀者头像 */}
                    <View style={{ alignItems:'center' }}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator = {false}
                            keyExtractor = {(item ,index)=>{return "index"+index+item}}
                            data={[1,2,3,4,5,6,7,8,9,10]}
                            renderItem={()=>(
                                <TouchableWithoutFeedback onPress={ ()=>{alert('进入应邀者服务信息')} }>
                                    <Image
                                        source={{uri:'http://imgsrc.baidu.com/baike/pic/item/42a98226cffc1e17f1253d854890f603728de9e8.jpg'}}
                                        style={styles.wasInvitedImg}
                                    />
                                </TouchableWithoutFeedback>
                            )}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    demandCard:{
        width:global.width,
        height:'auto',
        marginBottom:global.rem*0.35,
        paddingTop:global.rem*0.2,
        paddingBottom:global.rem*0.2,
        paddingLeft:global.rem*0.35,
        paddingRight:global.rem*0.35,
        // borderBottomWidth:global.rem*0.02,
        // borderTopWidth:0.02,
        // borderColor:'#ddd',
        backgroundColor:'#fff'
    },
    demandCardTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:global.rem*0.2
    },
    demandCardTitleView:{
        flexDirection:'row',
        alignItems:'center'
    },
    demandCardTitleImg:{
        width:global.rem*0.4,
        height:global.rem*0.4,
        marginRight:global.rem*0.2
    },
    demandPeriod:{
        flexDirection:'row',
        alignItems:'center'
    },
    demandPeriodImg:{
        width:global.rem*0.4,
        height:global.rem*0.4,
        marginRight:global.rem*0.2
    },
    wasInvited:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:global.rem*0.35
    },
    wasInvitedLine:{
        width:global.rem*2.5,
        borderTopWidth:1,
        borderTopColor:'#ddd',
    },
    wasInvitedImg:{
        width:global.rem*1.1,
        height:global.rem*1.1,
        borderRadius:global.rem*0.55,
        marginLeft:global.rem*0.2,
        marginRight:global.rem*0.2,
    },
});
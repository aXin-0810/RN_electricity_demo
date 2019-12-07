import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

import HeaderNavigation from '../components/headerNavigation'
import OrderCard from '../components/orderCard'

// 信息类型筛选
const informationTypes=(this_)=>{
    // 导航跳转
    function navMatching(item){
        if(item=='我的需求'){
            this_.routing( 'DemandList', 1 )
        }else

        if(item=='我的技能'){
            this_.routing( 'SkillsList', 1 )
        }else

        if(item=='认证中心'){
            this_.routing( 'DemandList', 1 )
        }else

        if(item=='赚钱攻略'){
            this_.routing( 'DemandList', 1 )
        }
    };

    return (
        <View style={styles.orderType}>
            <FlatList
                horizontal={true}
                data={['我的需求','我的技能','认证中心','赚钱攻略']}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                renderItem={({item,index})=>(
                    <TouchableWithoutFeedback
                        onPress={()=>{navMatching(item)}}>
                        <View style={styles.orderTypeView}>
                            <Image
                                source={require('../assets/icon/jineng.png')}
                                style={styles.orderTypeImg}
                            />
                            <Text style={{ fontSize:global.rem*0.35 }}>
                                {item}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    )
};

// 自动推送订单筛选
const automaticPushOrder=(this_)=>{
    return(
        <View style={styles.pushOrderType}>
            <FlatList
                horizontal={true}
                data={['待应邀','已应邀','已成交','已过期']}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                renderItem={({item,index})=>(
                    <View style={styles.pushOrderTypeView}>
                        <Text 
                            style={{ fontSize:global.rem*0.35 }}
                            onPress={()=>{ alert(item) }}>
                            {item}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
};

// 推送订单筛选
const pushOrderFiltering=(this_)=>{
    return(
        <View style={styles.pushScreen}>
            <FlatList
                horizontal={true}
                data={['筛选','全部服务','批量应邀']}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                renderItem={({item,index})=>(
                    <View style={[styles.pushScreenView,{borderRightWidth:index!==3?global.rem*0.02:0,}]}>
                        <Text style={{ fontSize:global.rem*0.35 }}>
                            {item}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
};

// 订单推送卡片
const orderPushCard=(this_)=>{
    return(
        <View style={{backgroundColor:'#efefef'}}>
            <FlatList
                data={[1,2,3,4,5,6]}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                showsVerticalScrollIndicator = {false}
                ListFooterComponent={()=>( <View style={{height:global.rem*11.5}}/> )}
                renderItem={({item ,index})=>(
                    <OrderCard
                        click={()=>{ this_.routing( 'OrderShow', 1 ) }}
                    />
                )}
            />
        </View>
    )
};

export default class DemandList extends Component{

    //页面跳转fun
    routing=(src,val)=>{
        this.props.navigate(src,{index:val})
    }

    render(){
        return(
            <View>
                {/* 信息管理页title */}
                <HeaderNavigation title={'信息管理'} />

                {/* 信息类型筛选 */   informationTypes(this)}
                
                {/* 自动推送订单筛选 */   automaticPushOrder(this)}
                
                {/* 推送订单筛选 */   pushOrderFiltering(this)}
                
                {/* 订单推送卡片 */   orderPushCard(this)}
            </View>                
        )
    }
}

const styles = StyleSheet.create({
    orderType:{
        width:global.width,
        height:'auto',
        backgroundColor:'#fff',
        marginBottom:global.rem*0.45,
        paddingTop:global.rem*0.3,
        paddingBottom:global.rem*0.3
    },
    orderTypeView:{
        width:global.width/4,
        height:'auto',
        justifyContent:'space-around',
        alignItems:'center'
    },
    orderTypeImg:{
        width:global.rem*0.8,
        height:global.rem*0.8,
        marginBottom:global.rem*0.1
    },
    pushOrderType:{
        width:global.width,
        height:global.rem*1,
        backgroundColor:'#fff'
    },
    pushOrderTypeView:{
        width:global.width/4,
        height:global.rem*1,
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:global.rem*0.02
    },
    pushScreen:{
        width:global.width,
        height:global.rem*1.1,
        backgroundColor:'#fff',
        borderBottomWidth:global.rem*0.02,
        borderBottomColor:'#ddd'
    },
    pushScreenView:{
        width:global.width/3,
        height:global.rem*1.1,
        justifyContent:'space-around',
        alignItems:'center',
        borderRightColor:'#ddd'
    },
})
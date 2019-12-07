import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

import HeaderVal from '../components/headerVal'
import BasicInformation from '../components/basicInformation'
import ServiceInformation from '../components/serviceInformation'

// 头部按钮模块
const topTheModule = (this_) => {
    return (
        <View   style={styles.topBtnCon}>
            {/* title */}
            <View   style={[styles.topTitle,{opacity:this_.state.opacityVal}]}>
                <Text   style={{fontSize:global.rem*0.55}}>
                    {'林茜茜'}
                </Text>
            </View>

            {/* 返回上一页按钮 */}
            <TouchableWithoutFeedback onPress={ this_.returnPage }>
                <View   style={styles.backBtn}>
                    <Icon name="reply" size={global.rem*0.35} color="red"/>
                </View>
            </TouchableWithoutFeedback>

            {/* 收藏按钮 */}
            <TouchableWithoutFeedback onPress={()=>{alert('返回')}}>
                <View   style={styles.collectionBtn}>
                    <Icon name="heart" size={global.rem*0.35} color="red"/>
                </View>
            </TouchableWithoutFeedback>

            {/* 更多按钮 */}
            <TouchableWithoutFeedback   onPress={()=>{alert('返回')}}>
                <View   style={styles.moreMore}>
                    <Icon name="ellipsis-v" size={global.rem*0.35} color="red"/>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

// 底部按钮组件模块
const bottomTheModule = (this_) => {
    return (
        <View style={styles.bottomBtnCon}>
            {/* 约他按钮 */}
            <Text style={styles.redBtn}> 约TA </Text>
            
            {/* 去赚钱按钮 */}
            <Text style={styles.redBtn}> 去赚钱 </Text>
            
            {/* 点赞按钮 */}
            <View style={styles.viewBtn}>
                <Image  source={require('../assets/icon/zan.png')}/>
                <Text   style={{fontSize:global.rem*0.3}}>1235</Text>
            </View>
            
            {/* 分享按钮 */}
            <View style={styles.viewBtn}>
                <Image  source={require('../assets/icon/fenxiang.png')}/>
            </View>
        </View>
    )
};

// 服务详情模块
const serviceDetailsModule = (this_) => {
    return(
        <View>
            <HeaderVal/>
            <BasicInformation/>
            <ServiceInformation/>
        </View>
    )
};

export default class InformationShow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            opacityVal:0
        };
    }

    render(){
        return(
            <View style={{position:'relative'}}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    onScroll={(event)=>{
                        this.setState({
                            // 根据滚动距离设置顶栏背景色透明度
                            opacityVal:(event.nativeEvent.contentOffset.y/100)
                        })
                    }}>

                    {/* 服务详情 */ serviceDetailsModule(this)}
                    
                    {/* 底部间距 */}
                    <View style={{height:global.rem*1.2}}/>
                </ScrollView>
                
                <View style={{position:'absolute', top:0,left:0}}>
                    {/* 头部信息导航 */ topTheModule(this)}
                </View>

                <View style={{position:'absolute', bottom:0,left:0}}>
                    {/* 底部按钮 */ bottomTheModule(this)}
                </View>
            </View>
        )
    }

    //页面跳转fun
    routing=(src,val)=>{
        this.props.navigation.navigate(src,{index:val})
    }
    
    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }

}

const styles = StyleSheet.create({
    // 顶部按钮布局
    topBtnCon: {   width:global.width,
        height:global.rem*1.3,
        position:'relative'
    },
    // 顶部title
    topTitle: {
        width:global.width,
        height:global.rem*1.3,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    // 返回上一页按钮
    backBtn: {
        width:global.rem*0.7,
        height:global.rem*0.7,
        borderRadius:global.rem*0.35,
        left:global.rem*0.35,
        top:global.rem*0.3,
        position:'absolute',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    // 收藏按钮
    collectionBtn:{
        width:global.rem*0.7,
        height:global.rem*0.7,
        borderRadius:global.rem*0.35,
        right:global.rem*1.4,
        top:global.rem*0.3,
        position:'absolute',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    // 更多按钮
    moreMore:{
        width:global.rem*0.7,
        height:global.rem*0.7,
        borderRadius:global.rem*0.35,
        right:global.rem*0.35,
        top:global.rem*0.3,
        position:'absolute',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    // 底栏按钮布局
    bottomBtnCon: {
        width:global.width,
        height:global.rem*1.2,
        paddingLeft:global.rem*0.24,
        paddingRight:global.rem*0.24,
        backgroundColor:'#fff',
        borderTopWidth:global.rem*0.02,
        borderTopColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    redBtn: {
        fontSize:global.rem*0.4,
        color:'#fff',
        paddingTop:global.rem*0.1,
        paddingBottom:global.rem*0.1,
        paddingLeft:global.rem*0.5,
        paddingRight:global.rem*0.5,
        borderRadius:global.rem*0.5,
        backgroundColor:'red'
    },
    viewBtn: {
        width:global.rem*2,
        height:global.rem*0.8,
        paddingLeft:global.rem*0.2,
        paddingRight:global.rem*0.2,
        borderRadius:global.rem*0.5,
        borderWidth:global.rem*0.03,
        borderColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },

});
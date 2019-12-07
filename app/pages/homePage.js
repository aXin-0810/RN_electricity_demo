import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
    StyleSheet,
    // BackAndroid, 
    // ToastAndroid,
} from 'react-native'

// 分类导航按钮
import PopularCategories    from '../components/popularCategories'
// 热约卡片
import HotAbout             from '../components/hotAbout'
// 服务展示卡片
import ServiceCard          from '../components/serviceCard'

// 轮播图广告模块
const bannerModule = (this_) => {
    return (
        <View style={styles.bannerSize}>
            <Swiper 
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={5}>
                {this_.state.imageVal.map((item,index,arr) => { return (
                    <TouchableWithoutFeedback   
                        key={index}
                        onPress={()=>{alert(item.key)}}>
                        <Image  
                            key={index}
                            resizeMode='stretch'
                            source={{uri:item.uri}}
                            style={styles.bannerSize}
                        />
                    </TouchableWithoutFeedback>
                )})}
            </Swiper>
        </View>
    )
};

// 服务导航模块
const serviceNavModule = (this_) => {
    return (
        <View
            style={styles.serviceNav}>
            {this_.state.imgVal.map((item,index,arr) => { return (
                <View style={{ margin: global.rem * 0.3 }}
                    key={index}>
                    <PopularCategories
                        IconObj={item}
                        click={() => {
                            if(index != (this_.state.imgVal.length-1)){
                                this_.routing( 'ListPage', 1)
                            }else{
                                this_.routing( 'AllCategories', { tag: 0 })
                            }
                        }}
                    />
                </View>
            )})}
        </View>
    );
};

// 头条快讯模块
const headlineAlertsModule = (this_) => {
    return(
        <View style={styles.headlinesConentS}>
            <Image
                source={require('../assets/img/kuaixun.png')}
                style={styles.headlinesImgS}
            />
            <View style={styles.headlinesBanner}>
                <Swiper
                    autoplay={true}
                    horizontal={false}
                    showsButtons={false}
                    showsPagination={false}
                    autoplayTimeout={6}>

                    <View>
                        <Text style={styles.headlinesFontS}>
                            <Text style={{ color: 'red' }}> *kklx90* </Text>
                            <Text> 通过了验证 </Text>
                        </Text>
                        <Text style={styles.headlinesFontS}>
                            <Text style={{ color: 'red' }}> *kklx90* </Text>
                            <Text> 通过了验证 </Text>
                        </Text>
                    </View>
                    
                </Swiper>
            </View>
        </View>
    )
};

// 同城热约模块
const cityHotAboutModule = (this_) => {
    return (
        <View>
            {/* 头部小图标 */}
            <View
                style={styles.CityHotTop}>
                <Image
                    source={ require('../assets/img/hot.png') }
                    style={styles.CityHotTopImg0}
                />
                <Image
                    source={ require('../assets/img/reyue1.png') }
                    style={styles.CityHotTopImg1}
                />
            </View>
            {/* 循环 */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item, index) => { return "index" + index + item }}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={() =>
                    // 热约卡片
                    <HotAbout
                        fun={() => {
                            this_.routing( 'InformationShow', 1 )
                        }}
                    />
                }
            />
        </View>
    )
};

// 订单数据以及功能推广模块
const functionalitySetModule = (this_) => {
    return (
        <View>
            {/* 数据统计 */}
            <View style={styles.dataTheSame}>
                <Text style={styles.dataSameText}>今日成交订单:0.61万个</Text>
                <Text style={styles.dataSameText}>今日成交金额:103.7万元</Text>
            </View>
            
            {/* 功能推荐 */}
            <View style={styles.recommended}>
                <View style={styles.recommendedConent}>
                    {this_.state.valList.map((item,index,arr) => { if(index<2) return (
                        <TouchableWithoutFeedback   
                            onPress={()=>{alert(index)}}
                            key={index}>
                            <Image  
                                key={index}
                                source={{uri:item.imgUri}}
                                style={{
                                    width:global.rem*4.7,
                                    height:global.rem*4.7-index*global.rem*2.4,
                                    borderRadius:global.rem*0.1
                                }}
                            />
                        </TouchableWithoutFeedback>
                    )})}
                </View>
                <View style={styles.recommendedConent}>
                    {this_.state.valList.map((item,index,arr) => { if(index>=2) return (
                        <TouchableWithoutFeedback   
                            onPress={()=>{alert(index)}}
                            key={index}>
                            <Image  
                                key={index}
                                source={{uri:item.imgUri}}
                                style={{
                                    width:global.rem*4.7,
                                    height:global.rem*2.3,
                                    borderRadius:global.rem*0.1
                                }}
                            />
                        </TouchableWithoutFeedback>
                    )})}
                </View>
            </View>
        </View>
    )
};

// 服务卡片展示模块
const serviceDisplayModule = (this_) => {
    return (
        <View>
            {/* 服务搜索条件 */}
            <View   style={styles.searchConditional}>
                {this_.state.valList_.map((item,index,arr) => { return (
                    <Text   
                        key={index}
                        onPress={()=>{alert(index)}}
                        style={styles.searchConditionalText}>
                        {item.title}
                    </Text>
                )})}
            </View>
                
            {/* 服务展示卡片 */}
            <FlatList
                data={[1,2,3,4]}
                keyExtractor={(item, index) => { return "index" + index + item }}
                renderItem={() =>
                    <View style={styles.interval}>
                        <ServiceCard
                            enterThe={() => {
                                this_.routing( 'InformationShow', 1 )
                            }}
                        />
                    </View>
                }
            />
        </View>
    )
};

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgVal: [
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                    title: '京东超市'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                    title: '京东生鲜'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                    title: '京东服饰'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5707/83/1407890143/14681/29321e2c/59263c71Nc7d16503.png',
                    title: '领券'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png',
                    title: '京东到家'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png',
                    title: '充值缴费'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png',
                    title: '全球购'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png',
                    title: '火车票'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png',
                    title: '赚钱'
                },
                {
                    uri: 'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                    title: '京东超市'
                }
            ],

            imageVal:[
                {uri:'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg_q50.jpg',
                 key:'1'},
                {uri:'https://gw.alicdn.com/imgextra/i2/117/TB2oM7iX4SYBuNjSspjXXX73VXa_!!117-0-lubanu.jpg_q50.jpg',
                 key:'2'},
                {uri:'https://gw.alicdn.com/imgextra/i2/10/TB29vW9aSCWBuNjy0FhXXb6EVXa_!!10-0-lubanu.jpg_q50.jpg',
                 key:'3'},
                {uri:'https://img.alicdn.com/simba/img/TB15vNdXFuWBuNjSspnSut1NVXa.jpg_q50.jpg',
                 key:'4'}
            ],

            valList:[
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t19471/313/106581090/309221/291f8d04/5a5d9de8Nc370615c.jpg!q70.jpg.webp',
                val:'1'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t10213/250/1662344512/310644/5b797fc7/59e555dcN50c1e391.jpg!q70.jpg.webp',
                val:'2'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t3166/255/4024706889/445879/da567099/57feed2dN26c7b9f0.jpg!q70.jpg.webp',
                val:'3'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t6904/202/1288427273/391315/37378e0d/59801a38N8f2e3c6b.jpg!q70.jpg.webp',
                val:'4'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t10885/134/910614024/262997/b88e5060/59d99d13N1d08ff1f.jpg!q70.jpg.webp',
                val:'5'
                },
            ],

            valList_:[
                {
                    title:'智能搜索'
                },
                {
                    title:'人气最高'
                },
                {
                    title:'距离最近'
                },
                {
                    title:'最新发布'
                }
            ],
        };
    }

    render() {
        return (
            <View style={{ backgroundColor: '#f8f8f8' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {/* 轮播图组件 */ bannerModule(this)}
                    </View>

                    <View style={styles.interval}>
                        {/* 服务分类按钮组件 */ serviceNavModule(this)}
                        {/* 头条快讯 */ headlineAlertsModule(this)}
                    </View>

                    <View>
                        {/* 广告 */}
                        <Image
                            source={{ uri: 'https://m.360buyimg.com/mobilecms/jfs/t14593/101/2296218332/260027/92aabe11/5a94cabdNe4821b1b.jpg!q70.jpg' }}
                            style={styles.advertisingS}
                        />
                    </View>

                    <View style={styles.interval}>
                        {/* 同城热约 */ cityHotAboutModule(this)}
                    </View>

                    <View style={styles.interval}>
                        {/* 订单数据&&功能推荐 */ functionalitySetModule(this)}
                    </View>

                    {/* 推荐筛选/服务展示卡 */  serviceDisplayModule(this)}
                </ScrollView>
            </View>
        );
    }

    //页面跳转fun
    routing = (src, val) => {
        this.props.navigate(src, { val: val })
    }

    /****************************************************   设置双击返回键退出应用   ************************************************************** */

    // componentWillMount(){
    //     // 监听返回建
    //     BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    // }
    
    // componentWillUnmount() {
    //     // 移除返回键监听
    //     BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    // }
    
    // // 返回键双击退出引用
    // onBackAndroid = () => {
    //     //最近2秒内按过back键，可以退出应用。
    //     if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) { return false }
    //     this.lastBackPressed = Date.now();
    //     ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     return true;
    // }

    /****************************************************   设置双击返回键退出应用   ************************************************************** */
};

const styles = StyleSheet.create({
    interval: {
        backgroundColor: '#fff',
        marginBottom: 10
    },
    // 轮播图尺寸
    bannerSize: {
        width:global.width,
        height:global.rem*4.5
    },
    // 服务分导航区域样式
    serviceNav: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: global.width,
        height: 'auto'
    },
    // 头条布局
    headlinesConentS: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    // 头条图片定位
    headlinesImgS:{
        width: global.rem * 1.5,
        height: global.rem * 1.5,
        marginRight: global.rem * 0.2
    },
    // 头条字体样式
    headlinesFontS: {
        fontSize: global.rem * 0.28,
        height: global.rem * 0.4
    },
    // 头条消息轮播
    headlinesBanner: {
        width: global.rem * 7,
        height: global.rem * 0.8
    },
    // 广告图片样式
    advertisingS: {
        width: global.width,
        height: global.rem * 1.8,
        marginBottom: 10
    },
    // 同城热约头部图片布局
    CityHotTop: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: global.rem * 0.24
    },
    // 图片1
    CityHotTopImg0: {
        width: global.rem * 0.4,
        height: global.rem * 0.4
    },
    // 图片2
    CityHotTopImg1: {
        width: global.rem * 2.1,
        height: global.rem * 0.7
    },
    // 数据统计布局
    dataTheSame: {
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:global.rem*0.01,
        borderColor:'#ddd'
    },
    // 数据统计文本
    dataSameText: {
        fontSize:global.rem*0.32,
        margin:global.rem*0.24
    },
    // 功能推荐
    recommended:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:global.rem*0.24
    },
    recommendedConent: {
        width:global.rem*4.7,
        height:global.rem*7.1,
        justifyContent:'space-between'
    },
    // 搜索条件布局
    searchConditional: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#fff',
        alignItems:'center',
        borderColor:'#ddd',
        borderBottomWidth:global.rem*0.02
    },
    searchConditionalText: {
        fontSize:global.rem*0.35,
        width:global.rem*2.5,
        textAlign:'center',
        borderColor:'#ddd',
        borderRightWidth:global.rem*0.02,
        paddingTop:global.rem*0.3,
        paddingBottom:global.rem*0.3
    },
});
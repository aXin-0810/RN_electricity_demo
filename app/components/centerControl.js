import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'

import PopularCategories from './popularCategories'

export default class CenterControl extends Component{
    render(){
        return(
            <View>
                <View
                    style={[
                        styles.frame,
                        {
                            paddingTop:global.rem*0.35,
                            paddingBottom:global.rem*0.35
                        }
                    ]}>

                    <PopularCategories
                        click={()=>{
                            alert(1)
                        }}  
                        IconObj={
                            {
                                require:require('../assets/icon/qianbao.png'),
                                title:'我的账户'
                            }
                        }
                    />
                    <PopularCategories
                        click={()=>{
                            alert(1)
                        }}  
                        IconObj={
                            {
                                require:require('../assets/icon/daili.png'),
                                title:'我是代理'
                            }
                        }
                    />
                    <PopularCategories
                        click={()=>{
                            alert(1)
                        }}  
                        IconObj={
                            {
                                require:require('../assets/icon/renzheng.png'),
                                title:'认证中心'
                            }
                        }
                    />
                    <PopularCategories
                        click={()=>{
                            alert(1)
                        }}  
                        IconObj={
                            {
                                require:require('../assets/icon/shoucang.png'),
                                title:'收藏管理'
                            }
                        }
                    />

                </View>

                <View
                    style={{
                        width:global.rem*9.3,
                        height:global.rem*2,
                        marginBottom:global.rem*0.35
                    }}>
                    <Image
                        source={{uri:'https://gw.alicdn.com/imgextra/i1/154/TB2VJXsdTlYBeNjSszcXXbwhFXa_!!154-0-lubanu.jpg_q50.jpg'}}
                        style={{
                            width:global.rem*9.3,
                            height:global.rem*2
                        }}
                    />
                </View>

                <View
                    style={styles.frame}>

                    <FlatList
                        keyExtractor={(item,index)=>{return 'index'+index+item}}
                        ItemSeparatorComponent={()=><View   style={{borderTopWidth:global.rem*0.025,borderTopColor:'#ddd'}}/>}
                        data={[
                            {
                                title:'赚钱攻略',
                                require:require('../assets/icon/gonglue.png'),
                                jump:''
                            },
                            {
                                title:'任务中心',
                                require:require('../assets/icon/renwu.png'),
                                jump:''
                            },
                            {
                                title:'邀请好友',
                                require:require('../assets/icon/yaoqing.png'),
                                jump:''
                            },
                            {
                                title:'商家合作',
                                require:require('../assets/icon/hezuo.png'),
                                jump:''
                            }
                        ]}
                        renderItem={({item})=>(
                            <TouchableWithoutFeedback
                                onPress={()=>{
                                    alert('跳转')
                                }}>
                                <View
                                    style={{
                                        width:global.rem*9.3,
                                        height:global.rem*1.35,
                                        padding:global.rem*0.25,
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center'
                                    }}>
                                    <View
                                        style={{
                                            flexDirection:'row',
                                            alignItems:'center'
                                        }}>
                                        <Image
                                            source={item.require}
                                            style={{
                                                width:global.rem*0.8,
                                                height:global.rem*0.8,
                                                marginRight:global.rem*0.3
                                            }}
                                        />
                                        <Text>{item.title}</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection:'row',
                                            alignItems:'center'
                                        }}>
                                        <Text>
                                            {item.jump}
                                        </Text>
                                        <Image
                                            source={require('../assets/icon/right.png')}
                                            style={{
                                                width:global.rem*0.35,
                                                height:global.rem*0.35,
                                                marginLeft:global.rem*0.2
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />

                </View>

                <View
                    style={styles.frame}>
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            alert('跳转')
                        }}>
                        <View
                            style={{
                                width:global.rem*9.3,
                                height:global.rem*1.35,
                                padding:global.rem*0.25,
                                flexDirection:'row',
                                justifyContent:'space-between',
                                alignItems:'center'
                            }}>
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center'
                                }}>
                                <Image
                                    source={require('../assets/icon/gonglue.png')}
                                    style={{
                                        width:global.rem*0.8,
                                        height:global.rem*0.8,
                                        marginRight:global.rem*0.3
                                    }}
                                />
                                <Text>{'控制中心'}</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center'
                                }}>
                                <Text>
                                    {}
                                </Text>
                                <Image
                                    source={require('../assets/icon/right.png')}
                                    style={{
                                        width:global.rem*0.35,
                                        height:global.rem*0.35,
                                        marginLeft:global.rem*0.2
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                

            </View>
        )
    }
}

var styles = StyleSheet.create({
    frame:{
        width:global.rem*9.3,
        height:'auto',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:global.rem*0.35,
        borderRadius:global.rem*0.35,
        borderBottomWidth:2,
        borderLeftWidth:0.5,
        borderRightWidth:0.5,
        borderColor:'#ddd',
        backgroundColor:'#fff'
    }
})
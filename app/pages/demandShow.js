import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView
} from 'react-native'

import '../common/screen'

import HeaderNavigation from '../components/headerNavigation'
import Details from '../components/details'
import Inviter from '../components/inviter'

export default class DemandShow extends Component{


    //页面跳转fun
    routing=(src,val)=>{
        this.props.navigation.navigate(src,{index:val})
    }

    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }

    render(){
        return(
            <View>
                <HeaderNavigation   
                    title={'需求详情'}
                    jump={'删除'}
                    returnPage={this.returnPage}
                />

                <ScrollView showsHorizontalScrollIndicator={false}>

                    {/* 头像及信息 */}
                    <View   
                        style={{
                            flexDirection:'row',
                            padding:global.rem*0.3,
                            backgroundColor:'#fff'
                        }}>
                        <Image  
                            source={{uri:'https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png'}}    
                            style={{
                                width:global.rem*1.2,
                                height:global.rem*1.2,
                                borderRadius:global.rem*0.3,
                                marginRight:global.rem*0.5
                            }}
                        />

                        <View
                            style={{
                                width:'auto',
                                height:global.rem*1.2,
                                justifyContent:'space-between'
                            }}>
                            <View   
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center'    
                                }}>
                                <Text
                                    style={{
                                        fontSize:global.rem*0.4,
                                        marginRight:global.rem*0.3,
                                        color:'#555'
                                    }}>
                                    程序编写
                                </Text>
                                    
                                <Text>25天后过期</Text>
                            </View>
                           
                            <Text   
                                style={{
                                    fontSize:global.rem*0.35
                                }}>
                                发布时间：2018-3-13
                            </Text>
                        </View>

                    </View>  

                    {/* 需求详细信息 */}
                    <View   
                        style={{
                            width:global.width,
                            height:'auto',
                            marginBottom:global.rem*0.3,
                            backgroundColor:'#fff'
                        }}>
                        <FlatList
                            keyExtractor = {(item ,index)=>{return "index"+index+item}}
                            data={[1,2,3]}
                            renderItem={({item})=>(
                                <Details
                                    title={'诚意金'}
                                    val={<Text>健身</Text>}
                                    borderBottom={true}
                                />
                            )}    
                        />
                        <View   
                            style={{
                                width:global.width,
                                height:global.rem*0.8,
                                justifyContent:'space-around',
                                alignItems:'center'
                            }}>
                            <Image
                                source={require('../assets/icon/shouqi.png')}
                                style={{
                                    width:global.rem*0.5,
                                    height:global.rem*0.5
                                }}
                            />
                        </View>
                    </View>
                    
                    {/* 应邀者信息 */}
                    <View   
                        style={{
                            backgroundColor:'#fff',
                            alignItems:'center'
                        }}>
                        
                        {/* 其他应邀者 */}
                        <View   
                            style={{
                                flexDirection:'row',
                                justifyContent:'space-around',
                                alignItems:'center',
                                padding:global.rem*0.35
                            }}>
                            <View   
                                style={{
                                    width:global.rem*3,
                                    borderTopWidth:1,
                                    borderTopColor:'#ddd'
                                }}
                            />

                                <Text>已有6位应邀者</Text>

                            <View   
                                style={{
                                    width:global.rem*3,
                                    borderTopWidth:1,
                                    borderTopColor:'#ddd'
                                }}
                            />
                        </View>
                        
                        <View   
                            style={{
                                width:'auto',
                                height:global.rem*1.2,
                                marginBottom:global.rem*0.3
                            }}>
                            <FlatList
                                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                                horizontal={true}
                                data={[1,2,3]}
                                renderItem={()=>(
                                    <View
                                        style={{
                                            width:global.rem*1,
                                            height:global.rem*1.2,
                                            paddingBottom:global.rem*0.2,
                                            marginLeft:global.rem*0.3,
                                            marginRight:global.rem*0.3,
                                            borderBottomWidth:global.rem*0.01,
                                            borderBottomColor:'red'
                                        }}>
                                        <Image
                                            source={{uri:'https://m.360buyimg.com/mobilecms/jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png'}}
                                            style={{
                                                width:global.rem*1,
                                                height:global.rem*1,
                                                borderRadius:global.rem*0.6
                                            }}
                                        />
                                        <Image
                                            source={require('../assets/icon/sanjiao.png')}
                                            style={{
                                                width:global.rem*0.3,
                                                height:global.rem*0.3,
                                                alignSelf:'center'
                                            }}
                                        />
                                    </View>
                                )}
                            />
                        </View>

                        <View>
                            <Inviter/>
                        </View>

                    </View>

                    <View   style={{height:global.rem*1.2}}/>
                </ScrollView>
            </View>                
        )
    }
}
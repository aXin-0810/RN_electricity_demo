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
import InvitationCard from '../components/invitationCard'
import Credentials from '../components/credentials'

export default class OrderShow extends Component{

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
                    title={'订单详情'}
                    jump={'删除'}
                    returnPage={this.returnPage}
                />

                <ScrollView showsHorizontalScrollIndicator={false}>

                    {/* 头像及信息 */}
                    <View   
                        style={{
                            flexDirection:'row',
                            padding:global.rem*0.3,
                            backgroundColor:'#fff',
                            marginBottom:global.rem*0.3
                        }}>
                        <Image  
                            source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1520917154&di=d713f40bcfeda9bc0d4d8b11169375d4&src=http://pic1.win4000.com/wallpaper/2017-12-19/5a387cdbbdfe0.jpg'}}    
                            style={{
                                width:global.rem*1.2,
                                height:global.rem*1.2,
                                borderRadius:global.rem*0.6,
                                marginRight:global.rem*0.5
                            }}
                        />

                        <View
                            style={{
                                width:'auto',
                                height:global.rem*1.2,
                                justifyContent:'space-between'
                            }}>
                            <View   style={{flexDirection:'row'}}>
                                <Text>Davidnt8</Text>
                                
                                <View   style={{marginLeft:global.rem*0.3}}>
                                    <Image/>
                                    <Text>35岁</Text>
                                </View>
                                
                                <View   style={{marginLeft:global.rem*0.3}}>
                                    <Image/>
                                    <Text>11.25km</Text>
                                </View>
                            </View>
                            <Text   
                                style={{
                                    fontSize:global.rem*0.35
                                }}>
                                2天以后过期
                            </Text>
                        </View>

                    </View>    

                    {/* 认证 */}
                    <View   style={{marginBottom:global.rem*0.3}}>
                        <Details
                            title={'认证'}
                            val={<Credentials/>}
                            bgn={'#fff'}
                            borderBottom={false}
                        />
                    </View>

                    {/* 诚意金 */}
                    <View   style={{marginBottom:global.rem*0.3}}>
                        <Details
                            title={'诚意金'}
                            val={<Text>健身</Text>}
                            bgn={'#fff'}
                            borderBottom={false}
                        />
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

                                <Text>其他应邀者</Text>

                            <View   
                                style={{
                                    width:global.rem*3,
                                    borderTopWidth:1,
                                    borderTopColor:'#ddd'
                                }}
                            />
                        </View>
                        
                        <View>
                            <InvitationCard/>
                        </View>

                        <View
                            style={{
                                width:global.width,
                                height:global.rem*1.2,
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'space-around'
                            }}>

                            <Text
                                style={{
                                    paddingTop:global.rem*0.2,
                                    paddingBottom:global.rem*0.2,
                                    paddingLeft:global.rem*0.5,
                                    paddingRight:global.rem*0.5,
                                    borderRadius:global.rem*0.5,
                                    backgroundColor:'red',
                                    color:'#fff'
                                }}>
                                应邀赚钱
                            </Text>

                            <Text
                                style={{
                                    paddingTop:global.rem*0.2,
                                    paddingBottom:global.rem*0.2,
                                    paddingLeft:global.rem*0.5,
                                    paddingRight:global.rem*0.5,
                                    borderRadius:global.rem*0.5,
                                    backgroundColor:'red',
                                    color:'#fff'
                                }}>
                                分享赚钱
                            </Text>

                        </View>
                    </View>

                    <View   style={{height:global.rem*1.2}}/>
                </ScrollView>
            </View>                
        )
    }
}
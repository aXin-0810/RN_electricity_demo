import React,{Component} from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

import Details from './details'
import Credentials from './credentials'

export default class InvitationCard extends Component{
    render(){
        return(
            <View   
                style={{
                    width:global.width,
                    marginBottom:global.rem*0.3,
                    backgroundColor:'#f8f8f8',
                    paddingTop:global.rem*0.3,
                    paddingBottom:global.rem*0.3
                }}>

                {/* 头像及信息 */}
                <View   
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:global.rem*0.3
                    }}>

                    <Image
                        source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1520917154&di=d713f40bcfeda9bc0d4d8b11169375d4&src=http://pic1.win4000.com/wallpaper/2017-12-19/5a387cdbbdfe0.jpg'}}    
                        style={{
                            width:global.rem*1,
                            height:global.rem*1,
                            borderRadius:global.rem*0.5,
                            marginRight:global.rem*0.5
                        }}
                    />

                    <Text
                        style={{
                            marginRight:global.rem*0.3
                        }}>
                        padding
                    </Text>

                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                        <Image
                            source={require('../assets/icon/nvxing.png')}
                            style={{
                                width:global.rem*0.3,
                                height:global.rem*0.3
                            }}
                        />
                        <Text>
                            25岁
                        </Text>
                    </View>

                </View>

                {/* 认证 */}
                <View>
                    <Details
                        title={'认证'}
                        val={<Credentials/>}
                        borderBottom={true}
                    />
                </View>

                {/* 服务方式及报价 */}
                <View>
                    <Details
                        title={'服务方式'}
                        val={<Text>健身</Text>}
                        borderBottom={true}
                    />
                </View>

                {/* 应邀时间及距离 */}
                <View   
                    style={{width:global.width,
                            height:'auto',
                            position:'relative'}}>
                    <Details
                        title={'应邀时间'}
                        val={<Text>健身</Text>}
                        borderBottom={false}
                    />
                    <Text   
                        style={{position: 'absolute',
                                right:global.rem*0.5,
                                top:global.rem*0.3}}>
                        9.5km
                    </Text>
                </View>
                
            </View>
        )
    }
}
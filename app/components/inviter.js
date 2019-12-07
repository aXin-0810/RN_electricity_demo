import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'

export default class Inviter extends Component{
        render(){
            return(
                <View
                    style={{
                        width:global.rem*9.5,
                        height:'auto',
                        borderRadius:global.rem*0.25,
                        backgroundColor:'#f8f8f8'
                    }}>
                    
                    <View
                        style={{
                            padding:global.rem*0.2,
                            borderBottomWidth:1,
                            flexDirection:'row',
                            alignItems:'center',
                            borderBottomColor:'#fff'
                        }}>
                        <Image
                            source={{uri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4027457064,435066525&fm=27&gp=0.jpg'}}
                            style={{
                                width:global.rem*1.2,
                                height:global.rem*1.2,
                                borderRadius:global.rem*0.6,
                                marginRight:global.rem*0.3
                            }}
                        />

                        <Text>
                            毓婷
                        </Text>
                    </View>

                    <FlatList
                        keyExtractor = {(item ,index)=>{return "index"+index+item}}
                        data={[1,2,3,4,5]}
                        renderItem={()=>(
                            <View
                                style={{
                                    padding:global.rem*0.2,
                                    borderBottomWidth:1,
                                    flexDirection:'row',
                                    alignItems:'center',
                                    borderBottomColor:'#fff'
                                }}>
                                <Text>线下服务:</Text>
                                <Text>100元/次</Text>
                            </View>
                        )}
                    />

                    <View
                        style={{
                            padding:global.rem*0.2,
                            borderBottomWidth:1,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            alignItems:'center',
                            borderBottomColor:'#fff'
                        }}>
                        <Text
                            style={{
                                fontSize:global.rem*0.38,
                                width:global.rem*9,
                                color:'red'
                            }}>
                            与服务者沟通后确定Ta来服务,约Ta见面,先给Ta支付定金吧
                        </Text>
                    </View>

                    <View
                        style={{
                            padding:global.rem*0.2,
                            borderBottomWidth:1,
                            flexDirection:'row',
                            justifyContent:'space-around',
                            alignItems:'center',
                            borderBottomColor:'#fff'
                        }}>
                        <Text
                            style={{
                                paddingTop:global.rem*0.15,
                                paddingBottom:global.rem*0.15,
                                paddingLeft:global.rem*0.6,
                                paddingRight:global.rem*0.6,
                                borderRadius:global.rem*0.5,
                                backgroundColor:'red',
                                color:'#fff'
                            }}>
                            发消息
                        </Text>

                        <Text
                            style={{
                                paddingTop:global.rem*0.15,
                                paddingBottom:global.rem*0.15,
                                paddingLeft:global.rem*0.6,
                                paddingRight:global.rem*0.6,
                                borderRadius:global.rem*0.5,
                                backgroundColor:'red',
                                color:'#fff'
                            }}>
                            预付款
                        </Text>
                    </View>

                </View>
            )
        }
}
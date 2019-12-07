import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView
} from 'react-native'


import '../common/screen'
import CenterHead from '../components/centerHead'
import CenterControl from '../components/centerControl'

export default class PersonalCenter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            opacityVal:0
        };
    }

    render(){
        return(
            <View>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    onScroll={(event)=>{
                        this.setState({
                            opacityVal:event.nativeEvent.contentOffset.y
                        })
                    }}>
                    {/* 头部信息 */}
                    <View>
                        <CenterHead/>
                    </View>

                    <View
                        style={{
                            alignItems:'center',
                            marginTop:global.rem*0.8*(-1),
                        }}>
                        <CenterControl/>
                    </View>

                    <View   style={{height:global.rem*2}}/>
                </ScrollView>

                <View   
                    style={{
                        width:global.width,
                        height:global.rem*1.3,
                        position:'absolute',
                        top:0,
                        left:0,
                        opacity:this.state.opacityVal/66
                    }}>
                
                    {/* title */}
                    <View   style={{width:global.width,
                                    height:global.rem*1.3,
                                    justifyContent:'space-around',
                                    alignItems:'center',
                                    backgroundColor:'#fff'}}>
                        <Text   style={{fontSize:global.rem*0.45}}>
                            个人中心
                        </Text>
                    </View>
                    
                    {/* 头像 */}
                    <Image   
                        source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3084053675,2508203699&fm=27&gp=0.jpg'}}
                        style={{
                            width:global.rem*0.8,
                            height:global.rem*0.8,
                            borderRadius:global.rem*0.4,
                            position:'absolute',
                            left:global.rem*0.35,
                            top:global.rem*0.3
                        }}
                    />

                </View>
            </View>
        )
    }
}
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native'

export default class HotAbout extends Component{
    render(){
        return(
            <TouchableWithoutFeedback   
                onPress={this.props.fun}>
                <View   style={{position:'relative',
                                width:global.rem*2.84,
                                height:global.rem*4,
                                margin:global.rem*0.24,
                                borderRadius:global.rem*0.2,
                                borderTopRightRadius:0,
                                borderWidth:global.rem*0.02,
                                borderColor:'#aaa',
                                alignItems:'center'}}>

                    <Image  source={require('./../assets/img/a1.png')}
                            resizeMode='stretch'
                            style={{width:global.rem*2,
                                    height:global.rem*0.5,
                                    zIndex:5,
                                    position:'absolute',
                                    right:0,
                                    top:0}}/>

                    <Text   style={{fontSize:global.rem*0.25,
                                    color:'#fff',
                                    zIndex:10,
                                    position:'absolute',
                                    right:global.rem*0.4,
                                    top:global.rem*0.05}}>
                        男士SPA
                    </Text>

                    <Image  source={{uri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t14518/227/514384764/174572/d3fe6bf5/5a2fc8acNcdb3cdfa.jpg!q70.jpg.webp'}}
                            style={{width:global.rem*2.8,
                                    height:global.rem*2.8,
                                    borderTopLeftRadius:global.rem*0.2}}/>
                
                    <Text   style={{fontSize:global.rem*0.35,
                                    color:'red'}}>
                        TT小宝宝
                    </Text>





                </View>
            </TouchableWithoutFeedback>
        )
    }
}
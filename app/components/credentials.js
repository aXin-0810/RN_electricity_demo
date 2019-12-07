import React,{Component} from 'react'
import {
    View,
    Image,
    FlatList
} from 'react-native'

export default class Credentials extends Component{
    render(){
        return(
            <View>
                <FlatList
                    keyExtractor = {(item ,index)=>{return "index"+index+item}}
                    data={[1]}
                    renderItem={()=>(
                        <View
                            style={{
                                width:global.rem*0.35,
                                height:global.rem*0.35,
                                borderRadius:global.rem*0.1,
                                justifyContent:'space-around',
                                alignItems:'center',
                                backgroundColor:'red'
                            }}>
                            <Image
                                source={require('../assets/icon/jiangpai.png')}
                                style={{
                                    width:global.rem*0.3,
                                    height:global.rem*0.3
                                }}
                            />
                        </View>
                    )}
                />
            </View>
        )
    }
}
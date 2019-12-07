import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

import Authentication from './authentication'

export default class ServiceCard extends Component{
    render(){
        return(
            <View>
                <TouchableWithoutFeedback   
                    onPress={this.props.enterThe}>
                    <View style={{padding:global.rem*0.24}}>
                        <View style={{flexDirection:'row', marginBottom:global.rem*0.24}}>
                            {/* 服务上头像 */}
                            <Image  
                                source={{uri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t3424/37/1940529936/205024/c5a7593f/583e7d1dNdfb3a469.jpg!q70.jpg.webp'}}
                                style={styles.providerImg}
                            />
                            {/* 服务商描述 */}
                            <View>
                                {/* 发布者昵称 */}
                                <View><Text>安妮</Text></View>
                                {/* 发布者认证信息 */}
                                <View style={{ alignItems:'center',flexDirection:'row',position:'relative' }}>
                                    <Text style={{marginRight:global.rem*0.2}}>认证:</Text>
                                    {/* 认证小图标 */}
                                    <Authentication/>
                                    {/* 距离 */}
                                    <Text style={{position:'absolute', right:0}}>
                                        47.93km
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* 服务展示图片 */}
                        <View style={styles.serviceImgList}>
                            {[1,2,3].map((item,index,arr)=>{ if(index<=2) return (
                                <Image  
                                    key={index}
                                    source={{uri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t3424/37/1940529936/205024/c5a7593f/583e7d1dNdfb3a469.jpg!q70.jpg.webp'}}
                                    style={styles.serviceImgSize}
                                />
                            )})}
                        </View>

                        {/* 服务描述 */}
                        <View>
                            <Text style={{color:'red', fontSize:global.rem*0.4}}>
                                男士SPA
                            </Text>
                            <Text style={{fontSize:global.rem*0.38}}>
                                最专业的按摩手法,善解人意而且非常健谈,
                                除了让你享受到优质的按摩服务,更是一段美好的经历。
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                {/* 卡片按钮集合 */}
                <View style={styles.serviceBtnList}>
                    <Text style={styles.serviceBtnText}>4.4万</Text>
                    <Text style={styles.serviceBtnText}>601</Text>
                    <Text style={styles.serviceBtnText}>18562</Text>
                    <Text style={styles.serviceBtnText}>约TA</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    providerImg:{
        width:global.rem*1.2,
        height:global.rem*1.2,
        borderRadius:global.rem*0.6,
        marginRight:global.rem*0.3,
    },
    serviceImgList:{
        flexDirection:'row',
        marginBottom:global.rem*0.24,
    },
    serviceImgSize:{
        width:global.rem*3.1,
        height:global.rem*3.1,
        marginRight:global.rem*0.1,
    },
    serviceBtnList:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopColor:'#ddd',
        borderTopWidth:global.rem*0.02,
        padding:global.rem*0.24
    },
    serviceBtnText:{
        fontSize:global.rem*0.35
    },
})
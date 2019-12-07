import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
} from 'react-native'

// 认证小图标
import Authentication from './authentication'
// 图片相册
import PhotoAlbum from '../components/photoAlbum'

//个人相册
const personalPhoto = (this_) => {
    return (
        <View style={styles.personalText}>
            <PhotoAlbum
                imgSize={'min'}
                imageArr={[
                    'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                    'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                    'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                    'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                    'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                ]}
            />
        </View>
    )
};

// ( 等级积分 / 个人简介 )
const personalIntroduction = (this_ , data) => {
    return (
        <View>
            <Text style={styles.personalText}>{data}</Text>
        </View>
    );
};

export default class BasicInformation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
            
                <View   style={[styles.aDetails,{alignItems:'flex-start'}]}>
                    <Text style={styles.aDetailsText}>个人介绍</Text>
                    {/* 个人介绍 */ personalIntroduction(this , 'React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。 React Native所使用的基础UI组件和原生应用完全一致。')}
                </View>

                <View   style={styles.aDetails}>
                    <Text style={styles.aDetailsText}>个人相册</Text>
                    {/* 个人相册 */ personalPhoto(this)}
                </View>

                <View   style={styles.aDetails}>
                    <Text style={styles.aDetailsText}>个人认证</Text>
                    {/* 个人认证 */}
                    <Authentication/>
                </View>

                <View   style={styles.aDetails}>
                    <Text style={styles.aDetailsText}>等级积分</Text>
                    {/* 等级积分 */ personalIntroduction(this , 19940810)}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 文本详情
    personalText:{
        width:global.rem*7.2
    },
    aDetails: {
        width:global.width,
        height:'auto',
        // borderBottomWidth:global.rem*0.02,
        // borderBottomColor:'#cfcfcf',
        marginBottom:global.rem*0.1,
        padding:global.rem*0.24,
        flexDirection:'row',
        alignItems:'center'
    },
    aDetailsText: {
        marginRight:global.rem*0.35
    },
})
import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class PopularCategories extends Component{
    render(){
        return(
            <TouchableWithoutFeedback   
                onPress={()=>{ this.props.click() }}>
                <View style={styles.iconContainer}>
                    {/* 图标 */}
                    <Image  
                        resizeMode='stretch'
                        style={styles.iconImg}
                        source={ (this.props.IconObj.uri && {uri:this.props.IconObj.uri}) || this.props.IconObj.require }
                    />
                    
                    {/* 热门图标 */}
                    {this.props.IconObj.hot && <Text style={styles.hotIcon}>HOT</Text>}
                    
                    {/* 服务文本 */}
                    <Text style={styles.iconText}>
                        {this.props.IconObj.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        width:global.rem*1.4,
        height:global.rem*1.6,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    iconImg: {
        width:global.rem*1,
        height:global.rem*1
    },
    hotIcon: {
        fontSize:global.rem*0.2,
        padding:global.rem*0.02,
        borderRadius:global.rem*0.1,
        backgroundColor:'red',
        color:'#fff',
        position: 'absolute',
        right:1,
        top:1
    },
    iconText:{
        fontSize:global.rem*0.3
    },
});
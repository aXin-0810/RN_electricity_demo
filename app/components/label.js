import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

export default class Label extends Component{
    render(){
        return(
            <View   style={styles.labelcontainer}>
                {/* 标题 */}
                <View   style={styles.labelTitle}>
                    <Text   style={styles.labelTitleText}> {this.props.title} </Text>
                </View>
                {/* 内容 */}
                <View   style={{padding:global.rem*0.24}}>
                    {/* 显示内容 */}
                    {this.props.mainContent}

                    {/* 警告提示 */}
                    {(this.props.warning!='' && this.props.warning!=undefined) &&
                    <Text style={styles.labelWarning}>
                        {this.props.warning}
                    </Text>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    labelcontainer:{
        backgroundColor:'#fff',
        marginBottom:global.rem*0.24
    },
    labelTitle:{
        padding:global.rem*0.24,
        borderBottomWidth:global.rem*0.02,
        borderBottomColor:'#ddd'
    },
    labelTitleText:{
        paddingLeft:global.rem*0.5,
        borderLeftWidth:5,
        borderColor:'red',
    },
    labelWarning:{
        width:global.rem*9,
        fontSize:global.rem*0.35,
        color:'red',
        marginTop:global.rem*0.2,
        marginLeft:global.rem*0.2
    },

})
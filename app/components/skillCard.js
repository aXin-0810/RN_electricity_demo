import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    Switch,
    StyleSheet,
} from 'react-native'

// 服务卡片操作按钮
const skillCardOperation=(this_)=>{
    return(
        <View style={styles.skillCardOptCollec}>
            <Text
                style={styles.skillCardOpt}
                onPress={()=>{ alert('编辑') }}>
                {'编辑'}
            </Text>
            <Text
                style={styles.skillCardOpt}
                onPress={()=>{ alert('置顶') }}>
                {'置顶'}
            </Text>
            <Text
                style={styles.skillCardOpt}
                onPress={()=>{ alert('推广') }}>
                {'推广'}
            </Text>
            <Text
                style={[styles.skillCardOpt,{ borderColor:'red', color:'red' }]}
                onPress={()=>{ alert('分享') }}>
                {'分享'}
            </Text>
        </View>
    )
};

export default class skillCard extends Component{

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            skillState: true
        };
    }

    render(){
        return(
            <View style={{backgroundColor:'#fff'}}>
                <View style={{ padding:global.rem*0.3 }}>
                    <View style={styles.skillDescribe}>
                        <Image
                            source={{uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png'}}
                            style={styles.skillIcon}
                        />
                        <View style={styles.skillTextDescribe}>
                            <View style={styles.stateMarkView}>
                                <Text> {'程序编写'} </Text>
                                <Text style={{ color:'green' }}> {'审核通过'} </Text>
                            </View>
                            <View style={styles.stateMarkView}>
                                <Text style={styles.markText}> {'2018/03/09创建'} </Text>
                                <Text style={styles.markText}> {'已经完成22次应邀'} </Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.farAsLayout}>
                        <Text> {'线下服务:100元/小时'} </Text>
                        <View style={styles.farAsLayout}>
                            <Text style={styles.markText}> {'技能已开启'} </Text>
                            {/* 技能服务状态开关 */}
                            <Switch
                                value={this.state.skillState}
                                onValueChange={(state)=>{this.setState({skillState: state})}}
                            />
                        </View>
                    </View>

                </View>

                {/* 服务卡片操作按钮 */     skillCardOperation(this)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    skillDescribe:{
        flexDirection:'row',
        marginBottom:global.rem*0.3,
    },
    skillTextDescribe:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    skillIcon:{
        width:global.rem*1.2,
        height:global.rem*1.2,
        borderRadius:global.rem*0.3,
        marginRight:global.rem*0.2
    },
    farAsLayout:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    stateMarkView:{
        width:global.rem*8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    markText:{
        fontSize:global.rem*0.35,
        color:'#888'
    },
    skillCardOptCollec:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:global.rem*0.3,
        borderTopColor:'#ddd',
        borderTopWidth:global.rem*0.02
    },
    skillCardOpt:{
        paddingTop:global.rem*0.1,
        paddingBottom:global.rem*0.1,
        paddingLeft:global.rem*0.6,
        paddingRight:global.rem*0.6,
        borderRadius:global.rem*0.25,
        borderWidth:global.rem*0.02,
        borderColor:'#888'
    },
})
import React,{Component} from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    Switch
} from 'react-native'

import HeaderNavigation from '../components/headerNavigation'
import SkillCard from '../components/skillCard'

// 技能展示卡片
const skillCard=(this_)=>{
    return(
        <View style={{backgroundColor:'#f8f8f8'}}>
            <FlatList
                data={[1,2,3,4,5,6,7,8]}
                keyExtractor={(item,index)=>{return 'index'+index+item}}
                showsVerticalScrollIndicator = {false}
                ListFooterComponent={()=>(<View style={{height:global.rem*3}}/>)}
                renderItem={()=>(
                    <View style={{marginBottom:global.rem*0.35}}>
                        <SkillCard/>
                    </View>
                )}
            />
        </View>
    )
};

export default class SkillsList extends Component{

    render(){
        return(
            <View>
                {/* 头部信息 */}
                <HeaderNavigation
                    title={'技能管理'}
                    returnPage={this.returnPage}
                />

                {/* 技能展示卡片 */   skillCard(this)}
                
            </View>
        )
    }

    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }
}
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    StyleSheet,
} from 'react-native'

import HeaderNavigation from '../components/headerNavigation'
import DemandCard from '../components/demandCard'

// 筛选搜索
const stateFilteringSearch=(this_)=>{
    return(
        <View style={styles.conditionsSearch}>
            <FlatList
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                horizontal={true}
                data={['全部','未成交','已成交','已过期']}
                renderItem={({item,index})=>(
                    <View 
                        style={[
                            styles.conditionsText,
                            {borderRightWidth:index!==3? global.rem*0.02:0,}
                        ]}>
                        <Text onPress={()=>{alert(item)}}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
};

// 需求卡片数据列表
const demandCardListV=(this_)=>{
    return(
        <View style={styles.demandCardList}>
            <FlatList
                data={[1,2,3,4,5,6]}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                showsVerticalScrollIndicator = {false}
                ListFooterComponent={()=>( <View style={{height:global.rem*5}}/> )}
                renderItem={({item ,index})=>(
                    <DemandCard
                        click={()=>{ this_.routing( 'DemandShow', 1 ) }}
                    />
                )}
            />
        </View>
    )
};

export default class DemandList extends Component{

    render(){
        return(
            <View>
                {/* 头部导航 */}
                <HeaderNavigation   
                    title={'需求管理'}
                    returnPage={this.returnPage}
                />

                {/* 筛选搜索 */   stateFilteringSearch(this)}
                
                {/* 需求卡片数据列表 */   demandCardListV(this)}
                
            </View>                
        )
    }

    //页面跳转fun
    routing=(src,val)=>{
        this.props.navigation.navigate(src,{index:val})
    }
    
    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }
}

const styles = StyleSheet.create({
    // 条件搜索
    conditionsSearch:{
        width:global.width,
        height:global.rem*1,
        backgroundColor:'#fff',
        borderBottomWidth:global.rem*0.02,
        borderBottomColor:'#ddd',
    },
    conditionsText:{
        width:global.width/4,
        height:global.rem*1,
        justifyContent:'space-around',
        alignItems:'center',
        borderRightColor:'#ddd'
    },
    demandCardList:{
        backgroundColor:'#f8f8f8',
    },
});
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

import ServiceCard from '../components/serviceCard'
import HeaderNavigation from '../components/headerNavigation'

// 筛选分类
const screeningClassification=(this_)=>{
    // 筛选分类切换
    function screeningVal(title){
        if(this_.state.conditionsTitle !== title){
            this_.setState({
                conditionsTitle:title,
                conditionsView:(<View><Text>{title}</Text></View>)
            })
            if(!this_.state.open){
                this_.openModal()
            };
        }else{
            this_.modalDidClose()
            this_.setState({
                conditionsTitle:'',
                conditionsView:'',
            })
        };
    };

    return(
        <View   style={styles.serviceListType}>
            <FlatList   
                horizontal={true}
                data={this_.state.screeningBtn}
                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                renderItem={({item})=>(
                    <Text  
                        style={styles.serviceListTypeText}
                        onPress={()=>{screeningVal(item.title)}}>
                        {item.title}
                    </Text>
                )}
            />
        </View>
    )
};

// 服务卡显示区
const serviceCardDisplay=(this_)=>{
    return(
        <View  style={{height:global.height-global.rem*2.8,backgroundColor:'#f8f8f8'}}>
            <FlatList   
                refreshing={false}
                data={[1,2,3,4,5,6,7,8]}
                onEndReachedThreshold={0.5}
                onRefresh={()=>{alert('刷新数据')}}
                onEndReached={()=>{alert('加载数据')}}
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item, index) => { return "index" + index + item }}
                ListFooterComponent={()=>( <View style={{height:global.rem*0.5}}/> )}
                renderItem={()=>(
                    <View style={{backgroundColor:'#fff', marginBottom:10}}>
                        <ServiceCard
                            enterThe={()=>{this_.routing('InformationShow',1)}}
                        />
                    </View>
                )}
            />
        </View>
    )
};

// 筛选遮罩
const filterMask=(this_)=>{
    return(
        <Modal
            open={this_.state.open}
            modalDidClose={this_.modalDidClose}
            containerStyle={{ top:global.rem*1.2 }}
            modalStyle={styles.modalCon}
            >
            {this_.state.conditionsView}
        </Modal>
    )
};


export default class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            conditionsTitle:'',
            conditionsView:'',
            screeningBtn:[
                {title:'智能排序',  conditions:''},
                {title:'筛选',      conditions:''},
                {title:'全部服务',  conditions:''},
            ],
        };
    }

    render() {
        return (
            <View>
                {/* 头部信息 */}
                <HeaderNavigation   
                    title={'健身'} 
                    returnPage={this.returnPage}                      
                />

                {/* 筛选列表 */}
                <View style={styles.serviceListContainer}>
                    {/* 筛选分类 */     screeningClassification(this)}

                    {/* 服务卡显示区 */     serviceCardDisplay(this)}
                    
                    {/* 筛选遮罩 */     filterMask(this)}
                </View>
            </View>
        );
    }

    //页面跳转fun
    routing=(src,val)=>{
        this.props.navigation.navigate(src,{index:val})
    }

    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }

    // 关闭遮罩
    modalDidClose = () => {
        this.setState({ open: false });
    }

    // 打开遮罩
    openModal = () => {
        this.setState({ open: true })
    }
}

const styles = StyleSheet.create({
    serviceListContainer:{
        height:'auto',
        width:global.width,
        position:'relative'
    },
    serviceListType:{width:global.width,
        height:global.rem*1.2,
        borderBottomWidth:0.5,
        borderBottomColor:'#eee',
        backgroundColor:'#fff',
        flexDirection:'row'
    },
    serviceListTypeText:{
        width:global.width/3,
        height:global.rem*1.2,
        paddingTop:global.rem*0.3,
        borderLeftWidth:0.5,
        borderLeftColor:'#eee',
        textAlign:'center'
    },
    modalCon:{
        width:global.width,
        height:100,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor:'#fff',
        borderRadius:0,
        top: 0,
    },
})
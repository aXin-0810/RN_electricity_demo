import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    ScrollView,
    SectionList,
    StyleSheet,
} from 'react-native';

import HeaderNavigation from '../components/headerNavigation'
import PopularCategories from'../components/popularCategories'

export default class AllCategories extends Component{

    constructor(props) {
        super(props);
        this.state = {
            val_:[ 
                {   key:'休闲娱乐',
                    data:[
                        [
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                                title:'京东服饰'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                                title:'京东服饰'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            }
                        ]
                    ]
                },
                {   key:'休闲娱乐',
                    data:[
                        [
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                                title:'京东服饰'
                            }
                        ]
                    ]
                },
                {   key:'休闲娱乐',
                    data:[
                        [
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                                title:'京东服饰'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            }
                        ]
                    ]
                },
                {   key:'休闲娱乐',
                    data:[
                        [
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t14281/4/2001573997/14338/5a719a2b/5a67003dN05690911.png',
                                title:'京东超市'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t15904/189/2080004638/17202/7933ea0d/5a913209N4f638034.png',
                                title:'京东生鲜'
                            },
                            {
                                uri:'https://m.360buyimg.com/mobilecms/jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',
                                title:'京东服饰'
                            }
                        ]
                    ]
                }   
            ],

        };
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'rgba(250,250,250,0.01)'}}>
                
                {/* 页头 */}
                <View>
                    <HeaderNavigation   
                        returnPage={this.returnPage}
                        title={'全部分类'}
                        jump={'首页定制'}
                        more={()=>{alert('首页定制')}}
                    />
                </View>

                <View  style={{flexDirection:'row'}}>
                    {/* 一级标题 */}
                    <View   style={styles.tableOne}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <FlatList
                                data={this.state.val_}
                                renderItem={({item}) =>(
                                    <Text   style={styles.levelOneText}> {item.key} </Text>
                                )}
                            />
                        </ScrollView>
                    </View>

                    {/* 副标题 */}
                    <View   style={styles.tableTow}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {/* 三级图标按钮 */}
                            <SectionList    
                                sections={this.state.val_}
                                keyExtractor = {(item ,index)=>{return "index"+index+item}}
                                renderSectionHeader={({section})=>(
                                    // 副分类标题
                                    <Text   style={styles.levelTowText}> {section.key} </Text>
                                )}
                                renderItem={({item})=>(
                                    <View style={styles.tableThree}>
                                        {item.map((item_,index,arr) => { return (
                                            <View key={index} style={{margin:global.rem*0.4}}>
                                                <PopularCategories 
                                                    IconObj={item_}
                                                    click={()=>{ this.routing() }}
                                                />
                                            </View>
                                        )})}
                                    </View>
                                )}
                            />
                            
                            {/* 下边距间隔 */}
                            <View   style={{height:global.height/12}}/>
                        </ScrollView>
                    </View>
                </View>

            </View>
        );
    }
    
    //页面跳转fun
    routing=(val)=>{
        var tag=this.props.navigation.state.params.val.tag;
            src='';
        if(tag===0){
            src='ListPage'
        }else if(tag===1){
            src='InformationRelease'
        }else if(tag===2){
            src='InformationRelease'
        }
        this.props.navigation.navigate(src,{val:val})
    }

    //跳转上一页
    returnPage=()=>{
        this.props.navigation.goBack()
    }
}

const styles = StyleSheet.create({
    // 一级标题区域
    tableOne: {
        width:global.rem*2.3,
        height:global.height-global.rem*1.7,
        backgroundColor:'#fff',
        borderRightWidth:0.5,
        borderRightColor:'#eee',
    },
    // 一级标题按钮
    levelOneText: {
        width:global.rem*2.3,
        height:global.height/12,
        fontSize:global.rem*0.38,
        borderBottomWidth:0.5,
        borderBottomColor:'#eee',
        textAlign:'center',
        paddingTop:global.rem*0.5,
    },
    // 副标题区域
    tableTow: {
        width:global.rem*7.2,
        height:global.height-global.rem*1.7,
        marginLeft:global.rem*0.25
    },
    // 副标题文本
    levelTowText: {
        marginTop:global.rem*0.42,
        marginBottom:global.rem*0.42,
        fontSize:global.rem*0.45
    },
    // 三级按钮区域
    tableThree: {
        width:global.rem*7.2,
        padding:global.rem*0.2,
        backgroundColor:'#fff',
        flexDirection:'row',
        flexWrap:'wrap'
    },

});
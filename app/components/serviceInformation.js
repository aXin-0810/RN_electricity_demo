import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

// 
import Label from './label'
// 分类导航按钮
import PopularCategories    from '../components/popularCategories'
// 图片相册
import PhotoAlbum from '../components/photoAlbum'

// 技能筛选
const skillsScreen = (this_) => {
    return (
        <View style={styles.skillsScreenContainer}>
            {/* 标题 */}
            <View style={styles.skillsScreenTitle}>
                <Text>TA的技能</Text>
            </View>

            {/* 技能分类 */}
            <View style={styles.skillsScreenType}>
                <FlatList  
                    horizontal={true}
                    data={this_.state.imgVal}
                    keyExtractor = {(item ,index)=>{return "index"+index+item}}
                    renderItem={({item,index})=>(
                        <View   style={[styles.skillsScreenBtn,(false && {borderBottomWidth:3})]}>
                            <PopularCategories
                                IconObj={item}
                                click={() => { alert(1) }}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
    )
};

//技能相册
const skillsPhoto=(this_)=>{
    return( 
        <PhotoAlbum
            imgSize={'mid'}
            imageArr={[
                'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
                'http://img.mp.itc.cn/upload/20160806/0a602a7a70bf4dc2ba07b9bbaeb58d88_th.jpg',
            ]}
        />
    )
};

// 纯单文本
const plainText=(this_)=>{
    return(
        <Text style={{width:global.rem*9}}>{'123456'}</Text>
    )
};

// 分段文本
const breakpointText=(this_)=>{
    return(
        <View style={{flexDirection:'row', flexWrap:'wrap', width:global.rem*9}}>
            {['健身','跑步'].map((item,index,arr) => { return (
                <Text key={index} style={{marginRight:global.rem*0.2}}>
                    {item}
                </Text>
            )})}
        </View>
    )
};

//历程文本
const courseText=(this_)=>{
    return(
        <FlatList  
            data={[1,2]}
            keyExtractor = {(item ,index)=>{return "index"+index+item}} 
            renderItem={({item})=>(
                <View   style={{marginTop:global.rem*0.2}}>
                    <Text style={{width:global.rem*9}}> 广州体育职业技术学院 </Text>
                    <Text style={{color:'#aaa'}}> 2015.9----2017.7 </Text>
                </View>
            )}
        />
    )
};

// 信息详情
const throughDetails=(this_,data)=>{
    return(
        <FlatList   
            data={data}
            keyExtractor = {(item ,index)=>{return "index"+index+item}}
            renderItem={({item})=>(
                item.val && item.val!='' &&
                <View style={{flexDirection:'row'}}>
                    <Image  
                        resizeMode='stretch'
                        source={item.imgUri}
                        style={styles.throughDetailsImg}
                    />
                    <View>
                        <Text style={{color:'#888'}}> {item.title} </Text>
                        <View style={{marginTop:global.rem*0.4, marginBottom:global.rem*0.4}}>
                            {item.val()}
                        </View>
                    </View>
                </View>
            )}
        />
    )
};

export default class ServiceInformation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            imgVal:[
                {
                    uri:'https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png',
                    title:'物流'
                },
                {
                    uri:'https://m.360buyimg.com/mobilecms/jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png',
                    title:'物流'
                }
            ],

            detailsArr:[
                {
                    title:'技能信息',
                    data:[
                            {   
                                imgUri:require('../assets/icon/xiangce.png'),
                                title:'技能相册',
                                val:skillsPhoto
                            },
                            {   
                                imgUri:require('../assets/icon/xiangce.png'),
                                title:'服务介绍',
                                val:plainText
                            },
                            {   
                                imgUri:require('../assets/icon/xiangce.png'),
                                title:'专业擅长',
                                val:breakpointText
                            },
                            {   
                                imgUri:require('../assets/icon/xiangce.png'),
                                title:'工作经历',
                                val:courseText
                            }
                        ]
                },
                {
                    title:'服务方式',
                    data:[
                            {
                                imgUri:require('../assets/icon/xiangce.png'),
                                title:'工作经历',
                                val:courseText
                            }
                        ]
                }
            ]
        };
    }

    render(){
        return(
            <View>
                {/* 技能筛选查看 */}
                {skillsScreen(this)}

                {/* 技能详情展示 */}
                <View style={{marginTop:global.rem*1}}>
                    <FlatList   
                        data={this.state.detailsArr}
                        keyExtractor = {(item ,index)=>{return "index"+index+item}}
                        renderItem={({item})=>(
                            <Label
                                title={item.title}
                                mainContent={throughDetails(this,item.data)}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // 技能筛选容器
    skillsScreenContainer: {
        backgroundColor:'#fff'
    },
    // 技能title
    skillsScreenTitle:{
        width:global.width,
        height:'auto',
        padding:global.rem*0.24,
        borderTopWidth:global.rem*0.02,
        borderTopColor:'#dedede',
        borderBottomWidth:global.rem*0.02,
        borderBottomColor:'#dedede',
    },
    // 技能分类
    skillsScreenType:{
        width:global.width,
        height:'auto',
        paddingTop:global.rem*0.2,
    },
    // 技能图标按钮
    skillsScreenBtn:{
        height:'auto',
        alignItems:'center',
        borderBottomWidth:0,
        borderBottomColor:'red',
        marginRight:global.rem*0.4,
        marginLeft:global.rem*0.4,
    },
    throughDetailsImg:{
        width:global.rem*0.5,
        height:global.rem*0.5,
        marginRight:global.rem*0.1
    },
})


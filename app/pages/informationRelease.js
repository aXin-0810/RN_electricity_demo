import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    Button,
    FlatList,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'

import HeaderNavigation from '../components/headerNavigation'
import SetATime from '../components/setATime'
import MultilineText from '../components/multilineText'
import Label from '../components/label'


// 需求类品
const category=(this_)=>{
    return(
        <View style={{flexDirection:'row'}}>
            <Text style={{marginRight:global.rem*1.5}}> 健身 </Text>
            <Text style={{width:global.rem*7}}>
                私人教练叫你健身,塑造完美身段,享受健康人生！
            </Text>
        </View>
    )
};

// 预约时间
const conventionTime=()=>{
    return(
        <SetATime/>
    )
};

// 多按钮组件
const collectionBtn=(this_,ArrVal)=>{
    return(
        <View   style={{flexDirection:'row', flexWrap:'wrap'}}>
            {ArrVal.map((item,index,arr)=>{return (
                <View   
                    key={index}
                    style={{
                        marginLeft:index%3===0? 0:global.rem*0.2,
                        marginBottom: (arr.length-3)<=index? 0:global.rem*0.3
                    }}>
                    <Text   
                        onPress={item.fun}
                        style={styles.textBtnCollec}>
                        {item.text}
                    </Text>
                </View>
            )})}
        </View>
    )
};

// 服务方式
const serviceMode=(this_,ArrVal)=>{
    return(
        <View style={styles.serviceMode}>
            {ArrVal.map((item,index,arr)=>{return (
                <TouchableWithoutFeedback   
                    key={index}
                    onPress={()=>{alert(1)}}>
                    <View   
                        style={styles.serviceModeSelec}>
                        <Image  
                            source={item.require}
                            style={[styles.serviceModeSelecImg,{tintColor:'red'}]}
                        />
                        <Text style={{fontSize:global.rem*0.35}}>
                            {item.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            )})}
        </View>
    )
};

// 服务详情/介绍（多行文本输入）
const serviceDetails=(this_)=>{
    return(
        <MultilineText
            placeholder={'可以接收您的从业年限,有哪些证书,是否有作品,以及您的服务特点和优势。'}
            maxLength={150}
        />
    )
};

export default class InformationRelease extends Component{

    constructor(props) {
        super(props);
        this.state = {
            xuqiu:[
                {
                    title:'需求类品',
                    viewList:category()
                },
                {
                    title:'预约时间',
                    viewList:conventionTime()
                },
                {
                    title:'需求有效期',
                    viewList:collectionBtn(this,[
                        {text:'30天',fun:()=>{alert(1)}},
                        {text:'16天',fun:()=>{alert(1)}},
                        {text:'8天',fun:()=>{alert(1)}},
                    ]),
                    warning:'选择"30天"有效期,您可以与最多10为应邀的服务者畅聊30天'
                },
                {
                    title:'服务方式',
                    viewList:serviceMode(this,[
                        {title:'上门',require:require('../assets/icon/shangmen.png')},
                        {title:'到店',require:require('../assets/icon/daodian.png')},
                        {title:'线上',require:require('../assets/icon/xianshang.png')},
                        {title:'咨询',require:require('../assets/icon/zixun.png')}
                    ])
                },
                {
                    title:'您的水平',
                    viewList:collectionBtn(this,[
                        {text:'无经验',fun:()=>{alert(1)}},
                        {text:'初级',fun:()=>{alert(1)}},
                        {text:'中级',fun:()=>{alert(1)}},
                        {text:'高级',fun:()=>{alert(1)}}
                    ])
                },
                {
                    title:'训练部位',
                    viewList:collectionBtn(this,[
                        {text:'手臂肌群',fun:()=>{alert(1)}},
                        {text:'背部肌群',fun:()=>{alert(1)}},
                        {text:'腿部肌群',fun:()=>{alert(1)}},
                        {text:'胸部肌群',fun:()=>{alert(1)}},
                        {text:'腹部肌群',fun:()=>{alert(1)}},
                        {text:'臀部肌群',fun:()=>{alert(1)}},
                        {text:'其他',fun:()=>{alert(1)}},
                    ])
                },
                {
                    title:'需求描述',
                    viewList:serviceDetails()
                },
                {
                    title:'诚意金',
                    viewList:collectionBtn(this,[
                        {text:'30元',fun:()=>{alert(1)}},
                        {text:'50元',fun:()=>{alert(1)}},
                        {text:'100元',fun:()=>{alert(1)}},
                        {text:'200元',fun:()=>{alert(1)}},
                        {text:'300元',fun:()=>{alert(1)}},
                        {text:'500元',fun:()=>{alert(1)}},
                        {text:'1000元',fun:()=>{alert(1)}},
                    ]),
                    warning:`注:防止虚假订单,成交后诚意金可用于订单支付;若订单未成交,诚意金将退回您的平台账户。`
                }
            ]
        }
    }

    render(){
        return(
            <View>    
                {/* 页头 */}
                <View>
                    <HeaderNavigation   
                        title={'发布需求'}
                        returnPage={this.returnPage}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* 详情发布表单 */}
                    <FlatList  
                        data={this.state.xuqiu}
                        keyExtractor = {(item ,index)=>{return "index"+index+item}} 
                        renderItem={({item})=>(
                            <View>
                                <Label  
                                    title={item.title}
                                    mainContent={item.viewList}
                                    warning={item.warning}
                                />
                            </View>
                        )}
                    />

                    {/* 发布按钮 */}
                    <View   style={styles.releaseBtnC}>
                        <View style={styles.releaseBtn}>
                            <Button 
                                color={'red'}
                                title={'发布需求'}
                                onPress={()=>{alert(1)}}
                            />
                        </View>
                        <Text> 发布需求成功,即为同意《服务协议》 </Text>
                    </View>

                    <View style={{marginBottom:global.rem*1.2}}/>
                </ScrollView>
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
    textBtnCollec:{
        width:global.rem*3,
        height:global.rem*0.8,
        textAlign:'center',
        paddingTop:global.rem*0.1,
        borderRadius:global.rem*0.4,
        borderWidth:global.rem*0.02,
        borderColor:'#ccc'
    },
    serviceMode:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    serviceModeSelec:{
        width:global.rem*2,
        height:global.rem*2,
        paddingTop:global.rem*0.2,
        alignItems:'center',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:global.rem*0.2
    },
    serviceModeSelecImg:{
        width:global.rem*1.2,
        height:global.rem*1.2,
    },
    releaseBtn:{
        width:global.rem*8,
        height:global.rem*1,
        marginBottom:global.rem*0.3
    },
    releaseBtnC: {
        backgroundColor:'#fff',
        alignItems:'center',
        padding:global.rem*0.5
    },
})
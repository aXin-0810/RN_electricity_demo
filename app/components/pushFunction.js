import React,{Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback 
} from 'react-native'

export default class PushFunction extends Component{

    constructor(props) {
        super(props);
        this.state = {
            valList:[
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t19471/313/106581090/309221/291f8d04/5a5d9de8Nc370615c.jpg!q70.jpg.webp',
                val:'1'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s636x636_jfs/t10213/250/1662344512/310644/5b797fc7/59e555dcN50c1e391.jpg!q70.jpg.webp',
                val:'2'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t3166/255/4024706889/445879/da567099/57feed2dN26c7b9f0.jpg!q70.jpg.webp',
                val:'3'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t6904/202/1288427273/391315/37378e0d/59801a38N8f2e3c6b.jpg!q70.jpg.webp',
                val:'4'
                },
                {
                imgUri:'https://m.360buyimg.com//mobilecms/s364x364_jfs/t10885/134/910614024/262997/b88e5060/59d99d13N1d08ff1f.jpg!q70.jpg.webp',
                val:'5'
                },
            ]
        }
    }

    render(){
        return(
            <View>

                <View   style={{flexDirection:'row',
                                justifyContent:'space-between',
                                margin:global.rem*0.24}}>

                    <View   style={{width:global.rem*4.7,
                                    height:global.rem*7.1,
                                    justifyContent:'space-between'}}>
                        {
                            (()=>{
                                var flatList=[];
                                var valList=this.state.valList;
                                for(let i=0; i<2;i++){
                                  flatList.push(
                                    <TouchableWithoutFeedback   onPress={()=>{alert(i)}}
                                                                key={i}>
                                        <Image  source={{uri:valList[i].imgUri}}
                                                style={{width:global.rem*4.7,
                                                        height:global.rem*4.7-i*global.rem*2.4,
                                                        borderRadius:global.rem*0.1}}
                                                key={i}/>
                                    </TouchableWithoutFeedback>
                                  )
                                };
                                return flatList; 
                            })()
                        }
                    </View>
                    <View   style={{width:global.rem*4.7,
                                    height:global.rem*7.1,
                                    justifyContent:'space-between'}}>

                        {
                            (()=>{
                                var flatList=[];
                                var valList=this.state.valList;
                                for(let i=2; i<5;i++){
                                  flatList.push(
                                    <TouchableWithoutFeedback   onPress={()=>{alert(i)}}
                                                                key={i}>
                                        <Image  source={{uri:valList[i].imgUri}}
                                                style={{width:global.rem*4.7,
                                                        height:global.rem*2.3,
                                                        borderRadius:global.rem*0.1}}
                                                key={i}/>
                                    </TouchableWithoutFeedback>
                                  )
                                };
                                return flatList; 
                            })()
                        }
                    </View>

                </View>

            </View>
        )
    }
}
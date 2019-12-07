//搜索框组件

import React,{Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio
} from 'react-native'

export default class Search extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
        };
    }

    render() {
        return (
            <View>
                <TextInput
                placeholder="请输入关键字"
                style={{
                    borderWidth:1,
                    marginLeft: 5,
                    paddingLeft:global.rem*.5,
                    borderColor: '#ccc',
                    borderRadius: global.rem*5
                }}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}/>
            </View>
        );
      }
}

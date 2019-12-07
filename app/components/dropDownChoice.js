import React from 'react';
import {StyleSheet} from 'react-native';
 
export default class DropDownChoice extends React.Component {
 
  render() {
    return (
        <ModalDropdown
            options={[1,2,3,4,5,6,7,8,9,10]}
            defaultValue={'请选择'}
            onSelect={(index,value)=>{}}
            style={[styles.ChoiceBtn]}
            textStyle={[styles.ChoiceBtnText]}
            dropdownStyle={[styles.dropdownChoice]}
            // dropdownTextStyle={{}}
            dropdownTextHighlightStyle={[styles.dropdownTextHighlight]}
        />
    );
  }
}

const styles = StyleSheet.create({
    // 下拉框按钮样式
    ChoiceBtn:{
        width:'100%',
        height:global.rem*1,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
    },
    ChoiceBtnText:{
        fontSize:global.rem*0.4,
        lineHeight:global.rem*0.95,
        paddingLeft:global.rem*0.2,
        paddingRight:global.rem*0.2,
    },
    dropdownChoice:{
        width:'100%',
        borderRadius:5,
    },
    dropdownTextHighlight:{
        color:'red'
    },
})
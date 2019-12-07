import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native'

export default class PhotoAlbum extends Component {
    render(){
        return (
            <View style={styles.photoAlbumContainer}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator = {false}
                    data={this.props.imageArr}
                    keyExtractor = {(item ,index)=>{return "index"+index+item}}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback 
                            onPress={()=>{ alert('看大图') }}>
                            <Image
                                source={{uri:item}}
                                style={[
                                    {marginRight:global.rem*0.1},
                                    (this.props.imgSize == 'min' && {width:global.rem*1.8, height:global.rem*1.8 }),
                                    (this.props.imgSize == 'mid' && {width:global.rem*2.5, height:global.rem*2.5 })
                                ]}
                            />
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    photoAlbumContainer:{
        flexDirection:'row',
        width:'95%',
        height:'auto'
    }
})
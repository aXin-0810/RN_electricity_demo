import React, {	Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	ToastAndroid,
} from 'react-native';
import * as WeChat from 'react-native-wechat';


class CustomButton extends Component {
	render() {
		return (
			<TouchableHighlight
				style={styles.button}
				underlayColor="#a5a5a5"
				onPress={this.props.onPress}>
				<Text style={styles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}

export default class WeChatModule extends Component {
	constructor(props) {
		super(props);
		//应用注册
		WeChat.registerApp('wxa9346b8b08e6bec6');
	}
	render() {
		return (
			<View style={{ margin: 20 }}>
				<CustomButton text='微信好友分享-文本'
					onPress={() => {
						WeChat.isWXAppInstalled().then((isInstalled) => {
							if (isInstalled) {
								WeChat.shareToSession({
									type: 'text',
									description: '测试微信好友分享文本'
								}).catch((error) => {
									ToastAndroid.show(error.message, ToastAndroid.SHORT);
								});
							} else {
								ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT);
							}
						});
					}}
				/>
				<CustomButton text='微信好友分享-链接'
					onPress={() => {
						WeChat.isWXAppInstalled()
							.then((isInstalled) => {
								if (isInstalled) {
									WeChat.shareToSession({
										type: 'news',
										title: '微信好友测试链接',
										description: '项目测试',
										thumbImage: 'http://hiphotos.baidu.com/image/w=730;crop=0,0,730,405/sign=c4fb8f4c0024ab18e016e33405c185bf/b219ebc4b74543a914bb90a617178a82b9011433.jpg',
										webpageUrl: 'http://hiphotos.baidu.com/image/w=730;crop=0,0,730,405/sign=c4fb8f4c0024ab18e016e33405c185bf/b219ebc4b74543a914bb90a617178a82b9011433.jpg'
									}).catch((error) => {
										ToastAndroid.show(error.message, ToastAndroid.SHORT);
									});
								} else {
									ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT);
								}
							});
					}}
				/>
				<CustomButton text='微信朋友圈分享-文本'
					onPress={() => {
						WeChat.isWXAppInstalled()
							.then((isInstalled) => {
								if (isInstalled) {
									WeChat.shareToTimeline({
										type: 'text',
										description: '测试微信朋友圈分享文本'
									}).catch((error) => {
										ToastAndroid.show(error.message, ToastAndroid.SHORT);
									});
								} else {
									ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT);
								}
							});
					}}
				/>
				<CustomButton text='微信朋友圈分享-链接'
					onPress={() => {
						WeChat.isWXAppInstalled()
							.then((isInstalled) => {
								if (isInstalled) {
									WeChat.shareToTimeline({
										type: 'news',
										title: '微信朋友圈测试链接',
										description: '项目测试',
										thumbImage: 'http://hiphotos.baidu.com/image/w=730;crop=0,0,730,405/sign=c4fb8f4c0024ab18e016e33405c185bf/b219ebc4b74543a914bb90a617178a82b9011433.jpg',
										webpageUrl: 'http://hiphotos.baidu.com/image/w=730;crop=0,0,730,405/sign=c4fb8f4c0024ab18e016e33405c185bf/b219ebc4b74543a914bb90a617178a82b9011433.jpg'
									})
										.catch((error) => {
											ToastAndroid.show(error.message, ToastAndroid.SHORT);
										});
								} else {
									ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT);
								}
							});
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	button: {
		margin: 5,
		backgroundColor: 'white',
		padding: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#cdcdcd',
	},
});

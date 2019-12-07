import React, { Component } from 'react'
var ReactNative = require('react-native')
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  BackAndroid, 
  ToastAndroid,
  UIManager,
} from 'react-native'

// 引入聊天ui库
import IMUI from 'aurora-imui-react-native'
// 聊天输入框模块
const InputView = IMUI.ChatInput
// 聊天消息列表视图模块
const MessageListView = IMUI.MessageList
// 事件操作
const AuroraIController = IMUI.AuroraIMUIController


// 消息基本对象数据
function constructNormalMessage() {
  var user = {
    // 消息发送者ID
    userId: "",
    // 消息发送者昵称
    displayName: "replace your nickname",
    // 消息发送者头像
    avatarPath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534943746996&di=ad157c6f6cf0559b272718793c5af048&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1206%2F21%2Fc2%2F12078509_12078509_1340246370201.jpg"
  };
  // 消息对象
  var message = {};
  // 获取当前时间对象
  var date = new Date();
  // 消息id
  message.msgId = date.getTime().toString();
  // 消息状态
  message.status = "send_succeed";
  // 消息是发送还是接受（true为发送的false为接收的）
  message.isOutgoing = true;
  // 消息时间
  message.timeString = date.getHours() + ":" + date.getMinutes();
  // 用户信息
  message.fromUser = user;

  return message
}


var imageUrlArray = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534943746996&di=ad157c6f6cf0559b272718793c5af048&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1206%2F21%2Fc2%2F12078509_12078509_1340246370201.jpg"
]

export default class App extends Component {
  constructor(props) {
    super(props);
    let initHeight;
    
    if (Platform.OS === "ios") {
      initHeight = 46
    } else {
      initHeight = 100
    }

    this.state = {
      inputLayoutHeight: initHeight,
      messageListLayout: { flex: 1, width: global.width, margin: 0 },
      inputViewLayout: { width: global.width, height: initHeight, },
      isAllowPullToRefresh: true,
      navigationBar: {},
    }
    

    this.onMsgClick = this.onMsgClick.bind(this);
    this.messageListDidLoadEvent = this.messageListDidLoadEvent.bind(this);
  }


  // react-native钩子函数 (在render渲染之后)
  componentDidMount() {
    /**
     * 在别的界面计算一次软键盘的高度，然后初始化一次菜单栏高度，如果用户唤起了软键盘，则之后会自动计算高度。
     */
    if (Platform.OS === "android") {
      this.refs["ChatInput"].setMenuContainerHeight(320)
    }
    this.resetMenu()
    AuroraIController.addMessageListDidLoadListener(this.messageListDidLoadEvent);
  }

  messageListDidLoadEvent() {
    this.getHistoryMessage()
  }
  
  // 获取历史聊天记录
  getHistoryMessage() {
    var messages = []

    for (var index in imageUrlArray) {
      var message = constructNormalMessage()
      message.fromUser.avatarUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534926548887&di=f107f4f8bd50fada6c5770ef27535277&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F67%2F23%2F69i58PICP37.jpg",//1
      message.msgType = 'image'
      message.mediaPath = imageUrlArray[index]
      messages.push(message)
    }

    // 初始渲染聊天信息
    AuroraIController.appendMessages(messages)
    AuroraIController.scrollToBottom(true)
  }

  // 取消对 MessageListDidLoad 事件的监听。
  componentWillUnmount() {
    AuroraIController.removeMessageListDidLoadListener(this.messageListDidLoadEvent)
  }

/****************************************聊天信息列操作函数********************************************** */

  // 点击头像操作
  onAvatarClick = (message) => {
    console.log('你点击了头像');
    this.takeToImage();
    // 删除聊天信息
    // AuroraIController.removeMessage(message.msgId)
  }

  // 点击聊天信息
  onMsgClick(message) {
    console.log('你点击了当前聊天信息')
    // Alert.alert("message", JSON.stringify(message))
  }

  // 点击消息状态按钮触发函数
  onStatusViewClick = (message) => {
    message.status = 'send_succeed'
    AuroraIController.updateMessage(message)
  }

  // 点击消息列表触发
  onTouchMsgList = () => {
    console.log('你点击了聊天列表')
    AuroraIController.hidenFeatureView(true)
  }

  // 滑动信息列表是触发
  onBeginDragMessageList = () => {
    alert('你正在滑动聊天数据');
    this.resetMenu()
    AuroraIController.hidenFeatureView(true)
  }

  // 滚动聊天列表视图区指定刷新
  onPullToRefresh = () => {
    console.log("聊天数据滚动到顶部时刷新触发")
    var messages = []
    for (var i = 0; i < 14; i++) {
      var message = constructNormalMessage()
      // if (index%2 == 0) {
      message.msgType = "text"
      message.text = "" + i
      // }

      if (i % 3 == 0) {
        message.msgType = "video"
        message.text = "" + i
        message.mediaPath = "/storage/emulated/0/ScreenRecorder/screenrecorder.20180323101705.mp4"
        message.duration = 12
      }
      messages.push(message)
    }

    // 聊天列表顶部追加消息
    AuroraIController.insertMessagesToTop(messages)
    if (Platform.OS === 'android') {
      this.refs["MessageList"].refreshComplete()
    }
  }




/****************************************输入框操作函数********************************************** */
  
  // 点击麦克风按钮触发功能
  onSwitchToMicrophoneMode = () => {
    AuroraIController.scrollToBottom(true)
  }

  // 点击表情图标按钮触发功能
  onSwitchToEmojiMode = () => {
    AuroraIController.scrollToBottom(true)
  }

  // 点击图片按钮触发
  onSwitchToGalleryMode = () => {
    AuroraIController.scrollToBottom(true)
  }

  // 点击相机功能
  onSwitchToCameraMode = () => {
    AuroraIController.scrollToBottom(true)
  }

  // Android 点击输入框时触发
  onTouchEditText = () => {
    this.refs["ChatInput"].showMenu(false)
  }

  // 文本输入框尺寸变化触发
  onInputViewSizeChange = (size) => {
    if (this.state.inputLayoutHeight != size.height) {
      this.setState({
        inputLayoutHeight: size.height,
        inputViewLayout: { width: global.width, height: size.height },
        messageListLayout: { flex: 1, width: global.width, margin: 0 }
      })
    }
  }

  // 发送文本消息函数
  onSendText = (text) => {
    // 获取消息基本对象数据
    var message = constructNormalMessage()
    // 设置消息发送类型
    message.msgType = 'text'
    // 消息内容
    message.text = text
    // 在聊天列表视图区追加新消息
    AuroraIController.appendMessages([message])
  }

  // 发送图片消息函数
  onTakePicture = (media) => {
    // 获取消息基本对象数据
    var message = constructNormalMessage()
    // 设置消息发送类型
    message.msgType = 'image'
    // 获取图片路径
    message.mediaPath = media.mediaPath
    // 在聊天列表视图区追加新消息
    AuroraIController.appendMessages([message])
    // 隐藏功能区域
    this.resetMenu()
  }

  // 点击录音按钮触发
  onStartRecordVoice = (e) => {
    console.log('你点击了录音按钮')
  }

  // 取消录制语音时触发
  onCancelRecordVoice = () => {
    console.log("你取消了本次录音")
  }

  // 发送语音消息
  onFinishRecordVoice = (mediaPath, duration) => {
    alert(mediaPath)
    // 获取消息基本对象数据
    var message = constructNormalMessage()
    // 设置消息发送类型
    message.msgType = "voice"
    // 获取音频路径
    message.mediaPath = mediaPath
    // 语音时长
    message.duration = duration
    // 在聊天列表视图区追加新消息
    AuroraIController.appendMessages([message])
    // 隐藏功能区域
    this.resetMenu()
  }

  // 发送相册图片或视频
  onSendGalleryFiles = (mediaFiles) => {
    
    
    /**
     * 这里返回的是原图，直接插入大会话列表会很大且耗内存.
     * 应该做裁剪操作后再插入到 messageListView 中，
     * 一般的 IM SDK 会提供裁剪操作，或者开发者手动进行裁剪。
     * 代码用例不做裁剪操作。
     */
    for (index in mediaFiles) {
      alert(mediaFiles[index].mediaPath)
      // 获取消息基本对象数据
      var message = constructNormalMessage()

      // 判断选中媒体文件类型
      if (mediaFiles[index].mediaType == "image") {
        message.msgType = "image"
      } else {
        message.msgType = "video"
        message.duration = mediaFiles[index].duration
      }

      // 获取图片路径
      message.mediaPath = mediaFiles[index].mediaPath
      // 在聊天列表视图区追加新消息
      AuroraIController.appendMessages([message])
    }
    // 隐藏功能区域
    this.resetMenu()
  }

  // 相册按钮图标
  onClickSelectAlbum = () => {
    console.log("你点击了打开相册按钮")
  }

  // 切换相机模式
  switchCameraMode = (isRecordVideoMode) => {
    if (isRecordVideoMode) {
      this.setState({
        messageListLayout: { flex: 0, width: 0, height: 0 },
        inputViewLayout: { flex: 1, width: global.width, height: global.height },
        navigationBar: { height: 0 }
      })
    } 
  }

  // 相机功能全屏时触发
  onFullScreen = () => {
    console.log("相机当前为全屏状态")
    this.setState({
      messageListLayout: { flex: 0, width: 0, height: 0 },
      inputViewLayout: { flex: 1, width: global.width, height: global.height },
      navigationBar: { height: 0 }
    })
    // 监听返回建
    BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  // 相机取消全屏时触发
  onRecoverScreen = () => {
    console.log("相机取消全屏，当前为小屏状态")
    this.setState({
      inputLayoutHeight: 100,
      messageListLayout: { flex: 1, width: global.width, margin: 0 },
      inputViewLayout: { flex: 0, width: global.width, height: 100 },
      navigationBar: { height: 45, justifyContent: 'center' }
    })
    // 移除返回键监听
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  // 相机全屏时返回键监听触发
  onBackAndroid = () => {
    ToastAndroid.show('当前正在使用相机,请先退出全屏操作', ToastAndroid.SHORT);
    return true;
  }

  // 录制视频开始录制按钮
  onStartRecordVideo = () => {
    console.log("视频开始录制")
  }

  // 录制视频完成录制按钮
  onFinishRecordVideo = (video) => {
    console.log("视频完成录制")
  }

  // 关闭相机功能
  onCloseCamera = () => {
    this.setState({
      inputLayoutHeight: 100,
      messageListLayout: { flex: 1, width: global.width, margin: 0 },
      inputViewLayout: { flex: 0, width: global.width, height: 100 },
      navigationBar: { height: 45, justifyContent: 'center' }
    })
    // 移除返回键监听
    BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  // 隐藏功能区域
  resetMenu() {
    // 判断安卓系统手机隐藏功能区域
    if (Platform.OS === "android") {
      this.refs["ChatInput"].showMenu(false)
      this.setState({
        messageListLayout: { flex: 1, width: global.width, margin: 0 },
        navigationBar: { height: 45, justifyContent: 'center' },
      })
    } else 
    // 判断ios系统隐藏功能区域
    {
      AuroraIController.hidenFeatureView(true)
    }
  }

  takeToImage() {
    
  }

  render() {
    return (
      <View style={styles.container} ref="location">
        <View 
          style={this.state.navigationBar}
          ref="NavigatorView">
          <Text>佩奇</Text>
        </View>
        {/* 聊天信息列表视图区域 */}
        <MessageListView style={this.state.messageListLayout}
          ref="MessageList"
          
          // 是否开启下拉刷新功能(true/false)
          isAllowPullToRefresh={true}

          // 点击头像触发函数
          onAvatarClick={this.onAvatarClick}

          // 点击消息气泡触发函数
          onMsgClick={this.onMsgClick}

          // 点击消息状态按钮触发函数
          onStatusViewClick={this.onStatusViewClick}

          // 点击消息列表触发
          onTouchMsgList={this.onTouchMsgList}

          // 开始滑动消息列表的时候触发
          onBeginDragMessageList={this.onBeginDragMessageList}

          // 滚动 MessageList 到顶部时，下拉触发
          onPullToRefresh={this.onPullToRefresh}

          // 头像大小
          avatarSize={{ width: 40, height: 40 }}

          // 设置头像圆角半径
          avatarCornerRadius={20}

          // 设置消息列表背景颜色
          messageListBackgroundColor={"#f3f3f3"}

          // 设置发送消息的文本大小
          sendBubbleTextSize={18}

          // 设置消息的文本颜色
          sendBubbleTextColor={"#000000"}

          // 发送消息泡泡的内边距
          sendBubblePadding={{ left: 10, top: 10, right: 15, bottom: 10 }}

          // 设置时间的内边距
          datePadding={{ left: 5, top: 5, right: 5, bottom: 5 }}

          // 设置时间的背景颜色
          dateBackgroundColor={"#F3F3F3"}

          // 设置气泡的最大宽度。值为屏幕宽度的百分比。
          maxBubbleWidth={0.7}
        />
        <InputView style={this.state.inputViewLayout}
          ref="ChatInput"

          // 输入文字后点击发送按钮触发
          onSendText={this.onSendText}

          // 点击拍照按钮触发
          onTakePicture={this.onTakePicture}

          // 点击录音按钮触发
          onStartRecordVoice={this.onStartRecordVoice}

          // 录音完成后松开手指触发
          onFinishRecordVoice={this.onFinishRecordVoice}

          // 手指移动到取消录音区域后，抬起手指触发。
          onCancelRecordVoice={this.onCancelRecordVoice}

          // 点击录制视频按钮触发。
          onStartRecordVideo={this.onStartRecordVideo}

          // 完成录制视频触发
          onFinishRecordVideo={this.onFinishRecordVideo}

          // 选中视频或图片后点击发送按钮触发
          onSendGalleryFiles={this.onSendGalleryFiles}

          // 点击菜单栏表情按钮触发。
          onSwitchToEmojiMode={this.onSwitchToEmojiMode}

          // 点击菜单栏麦克风按钮触发。
          onSwitchToMicrophoneMode={this.onSwitchToMicrophoneMode}

          // 点击菜单栏图片按钮触发。
          onSwitchToGalleryMode={this.onSwitchToGalleryMode}

          // 点击菜单栏拍照按钮触发。
          onSwitchToCameraMode={this.onSwitchToCameraMode}

          // 点击输入框触发。
          onTouchEditText={this.onTouchEditText}

          // 当摄像机全屏的时候触发这个回调
          onFullScreen={this.onFullScreen}

          // 摄像机取消全屏的时候触发这个回调
          onRecoverScreen={this.onRecoverScreen}

          // 输入组件尺寸变更时触发
          onSizeChange={this.onInputViewSizeChange}

          // 关闭相机
          closeCamera={this.onCloseCamera}

          // 切换相机模式
          switchCameraMode={this.switchCameraMode}

          // 点击选择相册按钮触发
          onClickSelectAlbum={this.onClickSelectAlbum}

          // 设置选择相册按钮的可见性。
          showSelectAlbumBtn={true}

          // 设置视频录制按钮的可见性。
          showRecordVideoBtn={true}

          // 设置输入框内边距。
          inputPadding={{ left: 30, top: 10, right: 10, bottom: 10 }}


          galleryScale={0.6}//default = 0.5

          // 压缩质量
          compressionQuality={0.6}

          // 自定义 ChatInput 组件和布局。
          customLayoutItems={{
            // left: ['emoji'],
            right: ['send'],
            bottom: ['voice','gallery','camera','emoji'],
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
  inputView: {
    backgroundColor: 'green',
    width: global.width,
    height: 100,
  },
  btnStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7'
  }
});
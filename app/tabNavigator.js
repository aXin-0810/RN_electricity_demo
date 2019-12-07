import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { createAppContainer,createBottomTabNavigator } from "react-navigation";

import HomePage       from './pages/homePage'
import OrderList      from './pages/orderList'
import PublishPage    from './pages/publishPage'
import PersonalCenter from './pages/personalCenter'
import Texta          from './pages/text'
import DropDownChoice from './components/dropDownChoice'


// 首页
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="home" size={global.rem*0.6} color={tintColor}/>
    )
  };
  render() {
    return (
      <View  style={styles.container}>
          <HomePage
            navigate={this.props.navigation.navigate}
          />
      </View>
    );
  }
}
 
// 即时聊天
class Circle extends Component {
  static navigationOptions = {
    tabBarLabel: '微聊',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="comments" size={global.rem*0.6} color={tintColor}/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Texta
          navigate={this.props.navigation.navigate}
        />
      </View>
    );
  }
}
 
// 发布页
class Tools extends Component {
  static navigationOptions = {
    tabBarLabel: '发布',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="paper-plane" size={global.rem*0.6} color={tintColor}/>
    )
  };
  render() {
    return (
      <View 
        style={styles.container}>
        <PublishPage
          navigate={this.props.navigation.navigate}
        />
      </View>
    );
  }
}
 
// 管理页
class wach extends Component {
    static navigationOptions = {
      tabBarLabel: '管理',
      tabBarIcon: ({ focused, tintColor }) => (
        <Icon name="list-alt" size={global.rem*0.6} color={tintColor}/>
      )
    };
    render() {
      return (
        <View style={styles.container}>
          <OrderList
            navigate={this.props.navigation.navigate}
          />
        </View>
      );
    }
  }
   
// 个人主页
class Mypage extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="user" size={global.rem*0.6} color={tintColor}/>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <PersonalCenter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

const TabNavigator = createAppContainer(createBottomTabNavigator(
  {
      Home:     {  screen: Home,  },
      Circle:   {  screen: Circle,  },
      Tools:    {  screen: Tools,  },
      wach:     {  screen:wach  },
      Mypage:   {  screen: Mypage,  },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      pressColor: '#823453',
      inactiveTintColor:'#888',
      activeTintColor: '#ee1d24',
      pressOpacity: 0.8,
      style: {
        paddingBottom: 0,
        borderTopWidth: 0,
        height:global.height*0.08,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
      },
      labelStyle: {
        margin: 1,
        fontSize: global.rem*0.3,
      },
      //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      indicatorStyle: { height: 0 }, 
    },
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'none',
    tabBarPosition: 'bottom',
  }
));
 
module.exports = TabNavigator
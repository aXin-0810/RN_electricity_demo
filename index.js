import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import OrientationUtil from './app/common/orientationUtil';

// 设置全局对象数据
import './app/common/screen'
// 导航页
import  TabNavigator      from './app/tabNavigator';
import  IMPage            from './app/pages/IM_page'
import  AllCategories     from './app/pages/allCategories'
import  ListPage          from './app/pages/listPage'
import  InformationShow   from './app/pages/informationShow'
import  InformationRelease from './app/pages/informationRelease'
import  OrderShow         from './app/pages/orderShow'
import  DemandShow        from './app/pages/demandShow'
import  DemandList        from './app/pages/demandList'
import  SkillsList        from './app/pages/skillsList'

// 设置路由导航
const MasterArts = createAppContainer(createStackNavigator({
  //首页ok
  MyApp: {
    screen: TabNavigator,
    navigationOptions:{
      header:null
    }
  },
  // 聊天页面
  IMPage: {
    screen: IMPage,
    navigationOptions:{
      header:null
    }
  },
  //全部分类页ok
  AllCategories:{
    screen:AllCategories,
    navigationOptions:{
      header:null
    }
  },
  //服务列表页ok
  ListPage:{
    screen:ListPage,
    navigationOptions:{
      header:null
    }
  },
  //服务信息展示ok
  InformationShow:{
    screen:InformationShow,
    navigationOptions:{
      header:null
    }
  },
  //需求与服务信息发布页ok
  InformationRelease:{
    screen:InformationRelease,
    navigationOptions:{
      header:null
    }
  },
  //需求列表页ok
  DemandList:{
    screen:DemandList,
    navigationOptions:{
      header:null
    }
  },
  //技能管理ok
  SkillsList:{
    screen:SkillsList,
    navigationOptions:{
      header:null
    }
  },
  //订单信息展示页
  OrderShow:{
    screen:OrderShow,
    navigationOptions:{
      header:null
    }
  },
  //需求详情页
  DemandShow:{
    screen:DemandShow,
    navigationOptions:{
      header:null
    }
  },
  // 技能详情页
  // 发布技能页面
  // 认证页面
  // 赚钱攻略页面
  // 资金账户页面
  // 代理组织架构页面
  // 收藏管理页
  // 商家合作页面
  // 个人信息展示页面

}));

// 锁定竖屏
OrientationUtil.addOrientationListener(function(){
  OrientationUtil.screenLockToPortrait();
})

// 关闭全部黄色警告
console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => MasterArts);

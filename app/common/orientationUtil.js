/**
 * 封装的横竖屏工具类
 */
import Orientation from 'react-native-orientation';

export default class OrientationUtil {


    static screenLockToPortrait() {
        Orientation.lockToPortrait();  //控制屏幕锁定竖屏
    }

    static screenLockToLandscape() {
        Orientation.lockToLandscape();  //控制屏幕锁定横屏
    }

    static screenunLockAllOrientations() {
        Orientation.unlockAllOrientations();  //解锁所有屏幕锁定方向
    }

    static addOrientationListener(listener) {
        Orientation.addOrientationListener(listener);  //监听屏幕横屏竖屏
    }

    static removeOrientationListener(listener) {
        Orientation.removeOrientationListener(listener);  //移除监听
    }

    // 获取屏幕状态
    // Orientation.getInitialOrientation();
}
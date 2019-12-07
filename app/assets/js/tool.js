export default {
  // 对象合并
  mergeObjects : function(){
    return Object.assign({},{});
  },

  // 时间转换函数
  getdateTime : function(num,type){
    var now = new Date(num),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
        m = (m < 10 ? "0" + m : m);
        d = (d < 10 ? "0" + d : d);

    if(type=='y-m-d'){
      return y + "-" + m + "-" + d;
    }else if(type=='m-d'){
      return m + "-" + d;
    }else if(type=='h:m:s'){
      return now.toTimeString().substr(0, 8);
    }else if(type=='h:m'){
      return now.toTimeString().substr(0, 5);
    }else{
      return y + "-" + m + "-" + d + " " + now.toTimeString().substr(0, 8);
    };
  },

  // 强转两位整数
  fix : function(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
  },

  // 数字转换时分秒
  conversionHMS : function(num){
    var h = parseInt(num/(60*60));
    var m = parseInt((num-(h*60*60))/60);
    var s = num%60;

    return this.fix(h,2)+':'+this.fix(m,2)+':'+this.fix(s,2);
  },

  // 时间函数递增函数
  timingFun : function(){
    var hours_ = 0;
    var minutes_ = 0;
    var seconds_ = 0;
    // 定时器
    var theTimer ;

    // 初始时间数据
    function initial(){  clearInterval(theTimer);  hours_ = minutes_ = seconds_ = 0  };

    // 时间计时
    function progress(){  theTimer = setInterval( timing() , 1000 )  };

    // 暂停计时
    function suspended(){  clearInterval(theTimer)  };
    
    // 获取时间字符
    function joiningStr(){  return this.fix(hours_,2)+':'+this.fix(minutes_,2)+':'+this.fix(seconds_,2)  };

    // 计时递增
    function timing(){
      if(seconds_<59){
        seconds_++;
      }else if(seconds_==59){
        if(minutes_==59){
          hours_=hours_+1;
          minutes_=0;
        }else{
          minutes_=minutes_+1;
        }
        seconds_=0;
      };
    };
    return{  initial,  progress,  suspended,  joiningStr  };
  },

  // 文字转换UTF-8
  toUtf8 : function(str) {    
    var out, i, len, c;    
    out = "";    
    len = str.length;    
    for(i = 0; i < len; i++) {    
      c = str.charCodeAt(i);    
      if ((c >= 0x0001) && (c <= 0x007F)) {    
        out += str.charAt(i);    
      } else if (c > 0x07FF) {    
        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
      } else {    
        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
      }    
    };  return out;
  },

  // 深度拷贝
  deepCopy : function(p, c) {
    var c = c || {};
    for (var i in p) {
      if (typeof p[i] === 'object') {
        c[i] = (p[i].constructor === Array) ? [] : {};
        this.deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
    return c;
  },

  // 判断手机号码和邮箱地址
  judgeAccount : function(str){
    if(/^1(3|4|5|7|8)\d{9}$/.test(str)){ 
      return "mobile";
    }else if(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)){
      return "e-mail";
    }
  },

  // 判断对象是否为空
  objSome : function(obj){
    if(JSON.stringify(obj) == "{}"){
      return false
    }else{ return true }
  },

  // 判断对象是否相同
  objSame : function(...obj){
    var bool_ = true;
    var contrast = JSON.stringify(obj[0]);
    for(var i=1;i<obj.length;i++){
      str = JSON.stringify(obj[i])
      if(str !== contrast){ bool_ = false; break}
    };
    return bool_
  },

  // 判断数组是否为空
  arrSome : function(arr){
    if(arr.length == 0){
      return false
    }else{ return true }
  },

  // 判断数组是否相同
  arrSame : function(...arr){
    var bool_ = true;
    var contrast = arr[0].join(',');
    for(var i=1;i<arr.length;i++){
      str = arr[i].join(',')
      if(str !== contrast){ bool_ = false; break}
    };
    return bool_
  },

  // 判断数据是否存在并且是否返回(设置默认返回)
  valReal : function(value_,bool_,str){
    if(value_){
      if(bool_){  return value_  }else{  return true  }
    }else{
      if(bool_){  
        if(str){  return str  }else{  return "-"  }
      }else{  return false  }
    }
  },

  // 循环导出
  forView : function(array,cbok){
    var viewArr = []
    array.forEach((item,index,arr) => {
      viewArr.push(cbok(item,index))
    });
    return viewArr
  },


}
/**
 * Created by Administrator on 2018-04-06.
 */


//配置禁用小圆环
//NProgress.configure({showSpinner: false });


//开启进度条
//NProgress.start();
//
//
//setTimeout(function(){
//  //关闭进度条
//  NProgress.done();
//},500)

//ajaxStart 所有的ajax开始调用
$(document).ajaxStart(function(){
  NProgress.start();
})


//ajaxStop 所有的ajax结束调用
$(document).ajaxStart(function(){
  NProgress.done();
})
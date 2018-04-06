/**
 * Created by Administrator on 2018-04-06.
 */

//入口函数
//防止全局变量污染，等待dom渲染再执行
$(function(){
  //1.进行表单校验
  //  校验要求：1.用户名不能为空
  //           2.密码不能为空，切必须是6-12位
  $("#form").bootstrapValidator({

    //配置图标
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok',
      invalid:'glyphicon glyphicon-remove',
      validating:'glyphicon glyphicon-refresh'
    },
    //对字段进行校验：数组或对象 这里是对象
    fields:{
      username:{
        //校验的规则，也是一个对象
        validators:{
          //非空校验
          //还是一个对象
          notEmpty:{
            //为空时，显示的提示信息
            message:"用户名不能为空"
          },
          stringLength:{
            min:2,
            max:6,
            message:"用户名长度必须是2-6位",
          }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          //长度校验
          stringLength:{
            min:6,
            max:12,
            message:"密码长度必须是6-12位",
          }
        }
      }
    }
  });
})
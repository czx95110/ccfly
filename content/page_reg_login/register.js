(function(){
  var msg0='用户名不能为空',
      msg1='用户名长度不符合要求，请重新输入6-12位的名字',
      msg2='用户名含非法字符，请重新输入';
  $('#userName').on('blur', function (e) {
    var value =  $(this).val();
    if(value.length===0){
      layer.tips(msg0,'#userName',{
        tips:[2,'#f00'],
        time:2000
      })
    }else if(value.length<6 || value.length>12){
      layer.tips(msg1,'#userName',{
        tips:[2,'#f60'],
        time:3000
      })
    }else{

    }
  });
})();


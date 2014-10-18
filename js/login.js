$(document).ready(function(){
	updatelogin=function(name,password){
		var data=function(){
			this.page="login";
			this.username="";
			this.password="";
		}
		var data1=new data();
		data1.username=name;
		data1.password=password;
		console.log(data1);
		$.ajax({
			url : "login",
			dataType : 'json',
			data:data1,
			type : 'post',
			async:false,
		}).done(function(json){
			if(json.msg=="success")
				self.location='main.html';
			if(json.msg=="failed")
				alert("用户名与密码填的不对哦，再仔细检查一下吧~~")
		}).fail(function(){
			alert("!");
		})

	}
	$("#login-button").click(function(){
		if($("#account").val()==""||$("#password").val()==""){
			alert("用户名或密码不可以不填哦~~");
		}
		else{
			updatelogin($("#account").val(),$("#password").val());
		}
	})
	$(".cover").click(function(){
		$(this).hide();
		$(this).prev().focus();
	})
	$(".input").click(function(){
		$(this).next().hide();
		$(this).focus();
	})
	$(".input").focus(function(){
		$(this).css("border-color","black");
	})
	$(".input").blur(function(){
		$(this).css("border-color","rgb(186,186,186)");
	})
});
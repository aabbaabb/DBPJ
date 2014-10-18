
$(document).ready(function(){


	
	
	var searchxkcontent="<li><div><span class='intro' >课程名：</span><span class='intro classname'  >${classname}</span></div>"+
						"<div><span class='intro' >任课教师：</span><span class='intro' >${classteacher}</span></div>"+
						"<div><span class='intro' >选课人数：</span><span class='intro' >${classnum}</span></div></li>";
	var searchgradecontent="<li><div><span class='intro' >课程名：</span><span class='intro classname'    >${classname}</span></div>"
						+"<div><span class='intro' >任课教师：</span><span class='intro' >${classteacher}</span></div>"
							+"<div><span class='intro' >成绩：</span><span class='intro' >${grade}</span></div></li>";
	var searchrankcontent="<li><div><span class='intro' >课程名：</span><span class='intro classname'    >${classname}</span></div>"
							+"<div><span class='intro' >任课教师：</span><span class='intro' >${classteacher}</span></div>"
							+"<div><span class='intro' >平均成绩：</span><span class='intro' >${avggrade}</span></div>"
							+"<div><span class='intro' >排名：</span><span class='intro' >${rank}</span></div></li>";
	var searchclasscontent="<li><div><span class='intro' >学生名：</span><span class='intro name' >${studentname}</span></div>"
						+"<div><span class='intro' >学号：</span><span class='intro id' >${studentid}</span></div>"
						+"<div><span class='intro' >性别：</span><span class='intro' >${sex}</span></div></li>";
	var changegradecontent="<li><div><span class='intro' >课程号：</span><span class='intro' >${classid}</span></div>"
						+"<div><span class='intro'>课程名：</span><span class='intro classname' >${classname}</span></div>"
						+"<div><span class='intro' >选课人数：</span><span class='intro' >${classnum}</span></div>"
						+"<div><span class='intro' >平均成绩：</span><span class='intro' >${avggrade}</span></div></li>";
	var changegradedetail="<li><div><span class='intro' >学号：</span><span class='intro sth id' >${studentid}</span><span class='intro input idinput' ><input type='text' /></span></div>"
							+"<div><span class='intro' >学生名：</span><span class='intro' >${studentname}</span></div>"
							+"<div><span class='intro' >成绩：</span><span class='intro grade sth' >${score}</span><span class='intro input' ><input type='text' /></span></div>"
							+"<div><span class='intro'>等第：</span><span class='intro'>${grade}</span></div>"
							+"</div></li>"
	var changeclasscontent="<li>"
						+"<div><span class='intro' >学号：</span>"
							+"<span class='intro id sth' >${studentid}</span>"
							+"<span class='intro input idinput' ><input type='text' /></span></div>"
							+"<div><span class='intro' >学生名：</span><span class='intro name' >${studentname}</span></div>"
						+"<div><span class='intro' >性别：</span><span class='intro'>${sex}</span></div></li>";
	var searchclassgrade="<li><div><span class='intro' >学生号：</span><span class='intro id'  >${studentid}</span></div>"+
						"<div><span class='intro' >学生名：</span><span class='intro'  >${studentname}</span></div>"+
						"<div><span class='intro' >平均成绩：</span><span class='intro' >${avgscore}</span></div></li>";
	var changestudentcontent="<li>"
						+"<div><span class='intro' >学号：</span>"
							+"<span class='intro id sth' >${studentid}</span>"
							+"<span class='intro input idinput' ><input type='text' /></span></div>"
							+"<div><span class='intro' >学生名：</span><span class='intro name sth' >${studentname}</span><span class='intro input nameinput' ><input type='text' /></span></div>"
						+"<div><span class='intro' >性别：</span><span class='intro sth'>${sex}</span><span class='intro input' ><input type='text' /></span></div></li>";	
	var changeteachercontent="<li>"
						+"<div><span class='intro' >工号：</span>"
							+"<span class='intro id sth' >${teacherid}</span>"
							+"<span class='intro input idinput' ><input type='text' /></span></div>"
							+"<div><span class='intro' >教师名：</span><span class='intro name sth' >${teachername}</span><span class='intro input nameinput' ><input type='text' /></span></div>"
						+"<div><span class='intro' >性别：</span><span class='intro sth'>${sex}</span><span class='intro input' ><input type='text' /></span></div></li>";
	var changeclassteachercontent="<li><div><span class='intro' >班级号：</span><span class='intro  sth'>${classid}</span><span class='intro input shortidinput'><input type='text' /></span></div>"
						+"<div><span class='intro' >班主任工号：</span>"
							+"<span class='intro id sth' >${teacherid}</span>"
							+"<span class='intro input idinput' ><input type='text' /></span></div>"
							+"<div><span class='intro' >班主任名：</span><span class='intro name sth' >${teachername}</span><span class='intro input nameinput' ><input type='text' /></span></div>"
						+"<div><span class='intro' >性别：</span><span class='intro sth'>${sex}</span><span class='intro input' ><input type='text' /></span></div></li>";
	var changexkcontent="<li><div><span class='intro'>学号：</span><span class='intro id sth'>${studentid}</span><span class='intro input idinput' ><input type='text' /></span></div>"
						+"<div><span class='intro'>课程号：</span><span class='intro id sth' >${classid}</span><span class='intro input idinput' ><input type='text' /></span></div>"
						+"<div><span class='intro'>成绩：</span><span class='intro sth'>${score}</span><span class='intro input' ><input type='text' /></span></div></li>"
	var changeskcontent="<li><div><span class='intro'>工号：</span><span class='intro id sth'>${teacherid}</span><span class='intro input idinput' ><input type='text' /></span></div>"
						+"<div><span class='intro'>课程号：</span><span class='intro id sth' >${classid}</span><span class='intro input idinput' ><input type='text' /></span></div></li>"										
	var changebjcontent="<li><div><span class='intro'>班级号：</span><span class='intro sth'>${classid}</span><span class='intro input shortidinput' ><input type='text' /></span></div>"
						+"<div><span class='intro'>学生号：</span><span class='intro id sth' >${studentid}</span><span class='intro input idinput' ><input type='text' /></span></div></li>"
	var authorization;
	var userid;

	var searchdata=function(){
		this.page;
		this.id;
		this.term="4026";
	}
	var gradedata=function(){
		this.id;
		this.score;
		this.page;
	}
	var classdata=function(){
		this.id;
		this.page;
	}
	var inf;
	titleconvert=function(authorization){
		if(authorization=="student")
			string="学生";
		if(authorization=="teacher")
			string="教师";
		if(authorization=="classteacher")
			string="班主任";
		if(authorization=="jwc")
			string="教务处";
		return string;
	}
	updatesearchclassgrade=function(term){
		var data1=new searchdata();
		data1.page="searchclassgrade";
		if(term){
			data1.term=term;
		}
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/search-class-grade.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.searchclassgrade;
			$("#highestgrade").text(json.highestgrade);
			$("#higheststudent").text(json.higheststudent);
			if(json&&json.success=="1"){
				data=json.data;
				var i;
				for(i=0;i<data.length;i++){
					console.log(data[i]);
					$("#search-class-grade ul").append(interpolate(searchclassgrade,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});

	}

	changebjsave=function(){
		var bjdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
		}
		var a=function(){
			this.classid;
			this.studentid;
		}

		var i;
		for(i=0;i<$("#change-bj-content"+" .show").length;i++){
			$("#change-bj-content"+" .show:eq("+i+")").prev().text($("#change-bj-content"+" .show:eq("+i+") input").val());
			$("#change-bj-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new bjdata();
		
		var datatemp=new Array();
		$("#change-bj-content ul li").each(function(i,obj){
			var temp=new a();
			temp.classid=$(obj).find(".sth").eq(0).text();
			temp.studentid=$(obj).find(".sth").eq(1).text();
			datatemp[i]=temp;
		})
		data1.num=$("#change-bj-content ul li").length;
		data1.cat=$("#change-bj-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-bj-content input").val();
		console.log(data1);

		
		$("#change-bj-content"+" .input").hide();
		$("#change-bj-content"+" .show").removeClass("show");
		$.ajax({
			url : "bjsave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	changestudentsave=function(){
		var studentdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
		}
		var a=function(){
			this.id;
			this.name;
			this.sex;
		}

		var i;
		for(i=0;i<$("#change-student-content"+" .show").length;i++){
			$("#change-student-content"+" .show:eq("+i+")").prev().text($("#change-student-content"+" .show:eq("+i+") input").val());
			$("#change-student-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new studentdata();
		
		var datatemp=new Array();
		$("#change-student-content ul li").each(function(i,obj){
			var temp=new a();
			temp.id=$(obj).find(".sth").eq(0).text();
			temp.name=$(obj).find(".sth").eq(1).text();
			temp.sex=$(obj).find(".sth").eq(2).text();
			datatemp[i]=temp;
		})
		data1.num=$("#change-student-content ul li").length;
		data1.cat=$("#change-student-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-student-content input").val();
		console.log(data1);

		
		$("#change-student-content"+" .input").hide();
		$("#change-student-content"+" .show").removeClass("show");
		$.ajax({
			url : "studentsave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}

	changeteachersave=function(){
		var teacherdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
		}
		var a=function(){
			this.id;
			this.name;
			this.sex;
		}

		var i;
		for(i=0;i<$("#change-teacher-content"+" .show").length;i++){
			$("#change-teacher-content"+" .show:eq("+i+")").prev().text($("#change-teacher-content"+" .show:eq("+i+") input").val());
			$("#change-teacher-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new teacherdata();
		
		var datatemp=new Array();
		$("#change-teacher-content ul li").each(function(i,obj){
			var temp=new a();
			temp.id=$(obj).find(".sth").eq(0).text();
			temp.name=$(obj).find(".sth").eq(1).text();
			temp.sex=$(obj).find(".sth").eq(2).text();
			datatemp[i]=temp;
		});
		data1.num=$("#change-teacher-content ul li").length;
		data1.cat=$("#change-teacher-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-teacher-content input").val();
		console.log(data1);

		
		$("#change-teacher-content"+" .input").hide();
		$("#change-teacher-content"+" .show").removeClass("show");
		$.ajax({
			url : "teachersave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	changeclassteachersave=function(){
		var classteacherdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
		}
		var a=function(){
			this.classid;
			this.classteacherid;
			this.name;
			this.sex;
		}

		var i;
		for(i=0;i<$("#change-classteacher-content"+" .show").length;i++){
			$("#change-classteacher-content"+" .show:eq("+i+")").prev().text($("#change-classteacher-content"+" .show:eq("+i+") input").val());
			$("#change-classteacher-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new classteacherdata();
		
		var datatemp=new Array();
		$("#change-classteacher-content ul li").each(function(i,obj){
			var temp=new a();
			temp.classid=$(obj).find(".sth").eq(0).text();
			temp.teacherid=$(obj).find(".sth").eq(1).text();
			temp.name=$(obj).find(".sth").eq(2).text();
			temp.sex=$(obj).find(".sth").eq(3).text();
			datatemp[i]=temp;
		});
		data1.num=$("#change-classteacher-content ul li").length;
		data1.cat=$("#change-classteacher-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-classteacher-content input").val();
		console.log(data1);

		
		$("#change-classteacher-content"+" .input").hide();
		$("#change-classteacher-content"+" .show").removeClass("show");
		$.ajax({
			url : "classteachersave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}

	changexksave=function(){
		var xkdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
			this.term
		}
		var a=function(){
			this.studentid;
			this.classid;
			this.score;
		}

		var i;
		for(i=0;i<$("#change-xk-content"+" .show").length;i++){
			$("#change-xk-content"+" .show:eq("+i+")").prev().text($("#change-xk-content"+" .show:eq("+i+") input").val());
			$("#change-xk-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new xkdata();
		
		var datatemp=new Array();
		$("#change-xk-content ul li").each(function(i,obj){
			var temp=new a();
			temp.studentid=$(obj).find(".sth").eq(0).text();
			temp.classid=$(obj).find(".sth").eq(1).text();
			temp.score=$(obj).find(".sth").eq(2).text();
			datatemp[i]=temp;
		})
		data1.num=$("#change-xk-content ul li").length;
		data1.cat=$("#change-xk-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-xk-content input").val();
		if($("#change-xk-all span").hasClass("click")){
			data1.term=0;
		}
		else{
			data1.term=$("#change-xk-term span:eq(1)").attr("id");
		}
		console.log(data1);

		
		$("#change-xk-content"+" .input").hide();
		$("#change-xk-content"+" .show").removeClass("show");
		$.ajax({
			url : "xksave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	changesksave=function(){
		var skdata=function(){
			this.cat;
			this.val;
			this.data;
			this.num;
			this.term
		}
		var a=function(){
			this.studentid;
			this.classid;
		}

		var i;
		for(i=0;i<$("#change-sk-content"+" .show").length;i++){
			$("#change-sk-content"+" .show:eq("+i+")").prev().text($("#change-sk-content"+" .show:eq("+i+") input").val());
			$("#change-sk-content"+" .show:eq("+i+")").prev().show();
		}
		var data1=new skdata();
		
		var datatemp=new Array();
		$("#change-sk-content ul li").each(function(i,obj){
			var temp=new a();
			temp.studentid=$(obj).find(".sth").eq(0).text();
			temp.classid=$(obj).find(".sth").eq(1).text();
			datatemp[i]=temp;
		})
		data1.num=$("#change-sk-content ul li").length;
		data1.cat=$("#change-sk-content .search-category option:selected").text();
		data1.data=datatemp;
		data1.val=$("#change-sk-content input").val();
		if($("#change-sk-all span").hasClass("click")){
			data1.term=0;
		}
		else{
			data1.term=$("#change-sk-term span:eq(1)").attr("id");
		}
		console.log(data1);

		
		$("#change-sk-content"+" .input").hide();
		$("#change-sk-content"+" .show").removeClass("show");
		$.ajax({
			url : "sksave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	changegradesave=function(term,cid){
		var gradedata=function(){
			this.data;
			this.term;
			this.num;
			this.cid;
		}
		var obj=$("#change-grade-detail"+" .click");
		var i;var temp=new Array();
		for(i=0;i<$("#change-grade-detail"+" .show").length;i++){
			var text=$("#change-grade-detail"+" .show:eq("+i+") input").val();
			temp[i]=text;
		}
		if(temp[0]&&temp[1])
			updategradeinf(temp[0],temp[1],obj);

		var data1=new gradedata();
		var datatemp=new Array();
		$("#change-grade-detail ul li").each(function(i,obj){
			var temp=new gradedata();
			temp.id=$(obj).find(".sth").eq(0).text();
			temp.score=$(obj).find(".sth").eq(1).text();
			datatemp[i]=temp;
		})
		data1.num=$("#change-grade-detail ul li").length;
		data1.data=datatemp;
		data1.term=term;
		data1.cid=cid;
		console.log(data1);

		
		$("#change-grade-detail"+" .input").hide();
		$("#change-grade-detail"+" .show").removeClass("show");
		$.ajax({
			url : "gradesave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	changeclasssave=function(query){
		var a=function(){
			this.data;
			this.classid;
			this.num;
		};
		var obj=$(query+" .click");
		var i;var temp=new Array();
		for(i=0;i<$(query+" .show").length;i++){
			var text=$(query+" .show:eq("+i+") input").val();
			temp[i]=text;
		}
		if(temp[0])
			updatestudentinf(temp[0],obj);

		var data1=new a();
		var datatemp=new Array();
		$(query+" ul li").each(function(i,obj){
			var temp=new classdata();
			temp.id=$(obj).find(".sth").eq(0).text();
			datatemp[i]=temp;
		})
		data1.num=$(query+" ul li").length;
		data1.data=datatemp;
		data1.classid=$(query+" .classid").text();
		console.log(data1);

		
		$(query+" .input").hide();
		$(query+" .show").removeClass("show");
		$.ajax({
			url : "classsave",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			alert("保存成功咯~~");
		}).fail(function(json){
			alert("啊呀，保存失败了，再试一次看看嘛~~");
		});
		
	}
	updategradeinf=function(id,score,obj){
		var data1=new gradedata();
		data1.page="gradeinf";
		data1.id=id;
		data1.score=score;
		console.log(data1);
		$.ajax({
			url : "json/grade-inf.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.gradeinf;
			if(json&&json.success=="1"){
				data=json.data;
				var i;
				
				obj.after(interpolate(changegradedetail,data));
				obj.remove();

			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatestudentinf=function(id,obj){
		var data=function(){
			this.page;
			this.id;
		}
		var data1=new data();
		data1.page="studentinf";
		data1.id=id;
		console.log(data1);
		$.ajax({
			url : "json/student-inf.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.studentinf;
			if(json&&json.success=="1"){
				data=json.data;
				obj.after(interpolate(changeclasscontent,data));
				obj.remove();

			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatesearchxk=function(term){
		
		var data1=new searchdata();
		data1.page="searchxk";
		if(term){
			data1.term=term;
		}
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/search-xk.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.searchxk;
			if(json&&json.success=="1"){
				data=json.data;
				var i;
				$("#search-xk-content ul").empty();
				for(i=0;i<data.length;i++){
					$("#search-xk-content ul").append(interpolate(searchxkcontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}

	updatechangeclass=function(term){

		var data1=new searchdata();
		data1.page="changeclass"
		data1.id=userid;
		if(term){
			data1.term=term;
		}
		console.log(data1);
		$.ajax({
			url : "json/change-class.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.changeclass;
			if(json&&json.success=="1"){
				$("#change-class-content .classteacher").text(json.classteacher);
				$("#change-class-content .classid").text(json.classid);
				data=json.data;
				inf=json.data;
				console.log(inf);
				var i;
				$("#change-class-content ul").empty();
				for(i=0;i<data.length;i++){
					console.log(data[i]);
					$("#change-class-content ul").append(interpolate(changeclasscontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}

	updatechangegrade=function(term){
		var data1=new searchdata();
		if(term){
			data1.term=term;
		}
		data1.page="changegrade"
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/change-grade.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.changegrade;
			if(json&&json.success=="1"){
				data=json.data;
				var i;
				$("#change-grade-content ul").empty();
				for(i=0;i<data.length;i++){
					console.log(data[i]);
					$("#change-grade-content ul").append(interpolate(changegradecontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatechangegradedetail=function(id,term){
		var data1=new searchdata();
		if(id){
			data1.id=id;
		}
		data1.term=term;
		$("#change-grade-detail").attr("name1",term);
		data1.page="changegradedetail";
		console.log(data1);
		$.ajax({
			url : "json/change-grade-detail.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.changegradedetail;
			if(json&&json.success=="1"){
				$("#change-grade-detail .classname").text(json.classname);
				$("#change-grade-detail .classnum").text(json.classnum);
				data=json.data;
				var i;
				$("#change-grade-detail ul").empty();
				for(i=0;i<data.length;i++){
					console.log(data[i]);
					$("#change-grade-detail ul").append(interpolate(changegradedetail,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatesearchgrade=function(term){
		
		var data1=new searchdata();
		if(term){
			data1.term=term;
		}
		data1.page="searchgrade"
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/search-grade.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.searchgrade;
			if(json&&json.success=="1"){
				data=json.data;
				var i;
				$("#search-grade-content ul").empty();
				for(i=0;i<data.length;i++){
					console.log(data[i]);
					$("#search-grade-content ul").append(interpolate(searchgradecontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}

	updatesearchrank=function(term){
		
		var data1=new searchdata();
		data1.page="searchrank";
		if(term){
			data1.term=term;
		}
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/search-rank.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.searchrank;
			if(json&&json.success=="1"){
				$("#term-rank").text(json.termrank);
				data=json.data;
				var i;
				$("#search-rank-content ul li:gt(0)").remove();
				for(i=0;i<data.length;i++){
					$("#search-rank-content ul li:eq(0)").after(interpolate(searchrankcontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}

	updatesearchclass=function(term){
		var data1=new searchdata();
		data1.page="searchclass";
		if(term){
			data1.term=term;
		}
		data1.id=userid;
		console.log(data1);
		$.ajax({
			url : "json/search-class.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			json=json.searchclass;
			if(json&&json.success=="1"){
				$("#class-id").text(json.classinf.classid);
				$("#class-teacher").text(json.classinf.classteacher);
				data=json.data;
				inf=json.data;
				var i;
				$("#search-class-content ul").empty();
				for(i=0;i<data.length;i++){
					$("#search-class-content ul").append(interpolate(searchclasscontent,data[i]));
				}
			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatechangexk=function(){
		var val=$("#change-xk-content .search-icon-wrap").prev().val();
		var cat=$("#change-xk-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
			this.term;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changexk";
		if($("#change-xk-all span").hasClass("click")){
			data1.term=0;
		}
		else{
			data1.term=$("#change-xk-term span:eq(1)").attr("id");
		}
		console.log(data1);
		$.ajax({
			url : "json/change-xk.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changexk;
			if(json&&json.success=="1"){
				var i;
				$("#change-xk-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-xk-content ul").append(interpolate(changexkcontent,data[i]));
				}
				$("#change-xk-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});

	}
	updatechangebj=function(){
		var val=$("#change-bj-content .search-icon-wrap").prev().val();
		var cat=$("#change-bj-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changebj";
		console.log(data1);
		$.ajax({
			url : "json/change-bj.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changebj;
			if(json&&json.success=="1"){
				var i;
				$("#change-bj-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-bj-content ul").append(interpolate(changebjcontent,data[i]));
				}
				$("#change-bj-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});

	}
	updatechangesk=function(){
		var val=$("#change-sk-content .search-icon-wrap").prev().val();
		var cat=$("#change-sk-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
			this.term;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changesk";
		if($("#change-sk-all span").hasClass("click")){
			data1.term=0;
		}
		else{
			data1.term=$("#change-sk-term span:eq(1)").attr("id");
		}
		console.log(data1);
		$.ajax({
			url : "json/change-sk.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changesk;
			if(json&&json.success=="1"){
				var i;
				$("#change-sk-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-sk-content ul").append(interpolate(changeskcontent,data[i]));
				}
				$("#change-sk-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});

	}
	updatechangestudent=function(){
		var val=$("#change-student-content .search-icon-wrap").prev().val();
		var cat=$("#change-student-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changestudent";
		console.log(data1);
		$.ajax({
			url : "json/change-student.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changestudent;
			if(json&&json.success=="1"){
				var i;
				$("#change-student-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-student-content ul").append(interpolate(changestudentcontent,data[i]));
				}
				$("#change-student-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});

	}
	updatechangeteacher=function(){
		var val=$("#change-teacher-content .search-icon-wrap").prev().val();
		var cat=$("#change-teacher-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changeteacher";
		console.log(data1);
		$.ajax({
			url : "json/change-teacher.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changeteacher;
			if(json&&json.success=="1"){
				var i;
				$("#change-teacher-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-teacher-content ul").append(interpolate(changeteachercontent,data[i]));
				}
				$("#change-teacher-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});

	}

	updatechangeclassteacher=function(){
		var val=$("#change-classteacher-content .search-icon-wrap").prev().val();
		var cat=$("#change-classteacher-content .search-category option:selected").text();
		var data=function(){
			this.cat;
			this.page;
			this.val;
		}
		var data1=new data();
		data1.val=val;
		data1.cat=cat;
		data1.page="changeclassteacher";
		console.log(data1);
		$.ajax({
			url : "json/change-classteacher.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#change-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#delete-icon").fadeIn();
			json=json.changeclassteacher;
			if(json&&json.success=="1"){
				var i;
				$("#change-classteacher-content ul").empty();
				data=json.data;
				console.log(data);
				for(i=0;i<data.length;i++){
					$("#change-classteacher-content ul").append(interpolate(changeclassteachercontent,data[i]));
				}
				$("#change-classteacher-content .input").hide();
			}
		}).fail(function(json){
			alert("!");
		});
	}
	updatemain=function(){
		var data=function(){
			this.page="main";
		}
		var data1=new data();
		data1.page="main";
		$.ajax({
			url : "json/user.js",
			dataType : 'json',
			type : 'get',
			data:data1,
			async:false,
		}).done(function(json){
			function changecontent(aut){
				$(".left-sub-icon").hide();
				if(aut=="student"){
					$("#search-xk").show();
					$("#search-xk").addClass("stretch");
					$("#search-xk-content").fadeIn();
					updatesearchxk();
					$("#search-grade").show();
					$("#search-rank").show();
					$("#search-class").show();
					$("#change-user").show();
				}
				if(aut=="teacher"){
					$("#change-user").show();
					$("#change-grade").show();
					$("#change-grade-content").fadeIn();
					updatechangegrade();
					$("#change-grade").addClass("stretch");
				}
				if(aut=="classteacher"){
					$("#search-classgrade").show();
					$("#search-class").show();
					$("#change-class").show();
					$("#search-class-content").fadeIn();
					$("#search-class").addClass("stretch");
					updatesearchclass();
				}
				if(aut=="jwc"){
					$("#change-student").show();
					$("#change-teacher").show();
					$("#change-classteacher").show();
					$("#change-xk").show();
					$("#change-sk").show();
					$("#change-bj").show();

				}
			}
			json=json.user;
			if(json.success="1"&&json){
				json=json.data;
				authorization=json.authorization;
				userid=json.id;
				$(".account-display-name").text(json.name);
				$(".account-display-id").text(userid);
				var string;
				string=titleconvert(authorization);
				$(".account-display-title").text(string);
				changecontent(json.authorization);
				
			}
		
		}).fail(function(){
			alert("!");
		})
	}
	showterm=function(obj,add){
		var now=obj.attr("id");
		now=parseInt(now)+add;
		obj.attr("id",now);
		var string=parseInt(now/2)+"年第";
		if((now-parseInt(now/2)*2)==0)
			string=string+"一学期";
		else
			string=string+"二学期";	
		obj.html(string);
	}
	bind=function(){
		$(".all-term span").click(function(){
			if(!$(this).hasClass("click")){
				$(this).addClass("click");

			}
			else{
				$(this).removeClass("click");
				
			}
		})
		$("#search-rank-all").click(function(){
			if(!$(this).hasClass("click"))
				updatesearchrank("0");
			else
				updatesearchrank($(this).parent().next().find(".left-arrow").next().attr("id"));
		})
		$("#search-class-grade-all").click(function(){
			if(!$(this).hasClass("click"))
				updatesearchclassgrade("0");
			else
				updatesearchclassgrade($(this).parent().next().find(".left-arrow").next().attr("id"));
		})
		$("#change-grade-all").click(function(){
			if(!$(this).hasClass("click"))
				updatechangegrade("0");
			else
				updatechangegrade($(this).parent().next().find(".left-arrow").next().attr("id"));
		})
		$("#search-grade-all").click(function(){
			if(!$(this).hasClass("click"))
				updatesearchgrade("0");
			else
				updatesearchgrade($(this).parent().next().find(".left-arrow").next().attr("id"));
		})
		$(".left-arrow").click(function(){
			showterm($(this).next(),-1);
			$(".all-term span.click").removeClass("click");
		})
		$(".right-arrow").click(function(){
			showterm($(this).prev(),1);
			$(".all-term span.click").removeClass("click");

		})
		$("#search-class-content .search-icon-wrap").click(function(){
			searchshow("#search-class-content",$(this));


		})
		$("#change-class-content .search-icon-wrap").click(function(){
			searchshow("#change-class-content",$(this));
		})
		$("#change-student-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
				updatechangestudent();
			else{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-student-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})
		$("#change-teacher-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
				updatechangeteacher();
			else
			{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-student-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})
		$("#change-xk-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
			{
				updatechangexk();
			}
			else
			{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-xk-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})
		$("#change-bj-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
				updatechangebj();
			else{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-bj-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})
		$("#change-sk-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
			{
				updatechangesk();
			}
			else
			{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-sk-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})
		$("#change-classteacher-content .search-icon-wrap").click(function(){

			if($(this).prev().val()!="")
				updatechangeclassteacher();
			else
			{
				alert("我还不知道你要搜索什么哦~~");
				$("#change-student-content ul").empty();
				$("#add-icon").fadeIn();
				$("#change-icon").hide();
				$("#delete-icon").hide();
			}
		})

		function searchshow(query,obj){
			if($(this).prev().val()==""){
				alert("我不知道你要搜索什么哦~~");
				var i;
				$(query+" ul").slideDown();
			}
			else{
				var val=obj.prev().val();
				var i;
				var cat=$(query+" .search-category option:selected").text();
				$(query+" ul li").each(function(i,obj){
					obj=$(obj);
					obj.show();
					(obj).removeClass("hide");
					if(!(cat=="姓名"&&obj.find(".name").text()==val)&&!(cat=="学号"&&obj.find(".id").text()==val)){
						(obj).addClass("hide");
					}
				});
				$(query+" li.hide").slideUp();
						
				
				
			}
		}
		


		$("#search-xk-content .left-arrow").click(function(){
			updatesearchxk($(this).next().attr("id"));
		})
		$("#search-grade-content .left-arrow").click(function(){
			updatesearchgrade($(this).next().attr("id"));
		})
		$("#search-rank-content .left-arrow").click(function () {
			updatesearchrank($(this).next().attr("id"));
		})
		$("#change-grade-content .left-arrow").click(function () {
			updatechangegrade($(this).next().attr("id"));
		})
		$("#search-class-grade .left-arrow").click(function(){
			updatesearchclassgrade($(this).next().attr("id"));
		})

		$("#search-xk-content .right-arrow").click(function(){
			updatesearchxk($(this).prev().attr("id"));
		})
		$("#search-grade-content .right-arrow").click(function(){
			updatesearchgrade($(this).prev().attr("id"));
		})
		$("#search-rank-content .right-arrow").click(function(){
			updatesearchrank($(this).prev().attr("id"));
		})
		$("#change-grade-content .right-arrow").click(function () {
			updatechangegrade($(this).prev().attr("id"));
		})
		$("#search-class-grade .right-arrow").click(function(){
			updatesearchclassgrade($(this).prev().attr("id"));
		})
		$(".back-button").click(function(){
			$("#change-grade-detail").hide();
			$("#change-grade-content").fadeIn();

		})
		
		$(".left-sub-icon").click(function(){
			if(!$(this).hasClass("stretch")){
				$(".stretch").removeClass("stretch");
				$(this).addClass("stretch");
			}
		})
		$("#main-logo").click(function(){
			self.location='login.html';
		})

		
		$("#change-inf-button").click(function(){
			function data(){
				this.account="";
				this.password="";
			}
			 var a=new data();
			 a.account=$("#change-account").val();
			 a.password=$("#change-password").val();
			 console.log(a);
			$.ajax({
				url:"",
				data:a,
				dataType: 'json',
				type: "post",
				async:false
			}).done(function(){

			}).fail(function(){
				alert("!");
			})
		});
		
		$(".left-sub-icon").click(function(){
			$("#main-right").children().hide();
			
		})
		$("#left-sub .left-sub-icon").click(function(){
			$("#main-header-icon-wrap").fadeOut();
		})
		$("#change-student").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-student-content").fadeIn();
			$("#change-student-content ul").empty();
			libind("#change-student-content");

		})
		$("#change-teacher").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-teacher-content").fadeIn();
			$("#change-teacher-content ul").empty();
			libind("#change-teacher-content");
			$("#change-student-content .search-category option:eq(1)").text("工号");
		})
		$("#change-bj").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-bj-content").fadeIn();
			$("#change-bj-content ul").empty();
			libind("#change-bj-content");
		})
		$("#change-classteacher").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-classteacher-content").fadeIn();
			$("#change-classteacher-content ul").empty();
			libind("#change-classteacher-content");

		})
		$("#change-xk").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-xk-content").fadeIn();
			$("#change-xk-content ul").empty();
			libind("#change-xk-content");

		})
		$("#change-sk").click(function(){
			$("#main-header-icon-wrap").show();
			$("#main-header-icon-wrap .main-header-icon").hide();
			$("#add-icon").fadeIn();
			$("#save-icon").fadeIn();
			$("#change-sk-content").fadeIn();
			$("#change-sk-content ul").empty();
			libind("#change-sk-content");

		})


		$("#change-user").click(function(){
			
			$("#change-inf-content").fadeIn();
		})
		$("#search-classgrade").click(function(){
			$("#main-right").children().hide();
			$("#search-class-grade").fadeIn();
			updatesearchclassgrade();
		})

		$("#search-xk").click(function(){
			$("#search-xk-content").fadeIn();
			updatesearchxk();

		})
		$("#search-grade").click(function(){
			$("#search-grade-content").fadeIn();
			updatesearchgrade();
		})
		$("#search-class").click(function(){
			$("#search-class-content").fadeIn();
			$("#search-class-content .input").hide();
			updatesearchclass();
		})
		$("#search-rank").click(function(){
			$("#search-rank-content").fadeIn();
			updatesearchrank();
		})
		$("#change-grade").click(function(){
			$("#change-grade-content").fadeIn();
			updatechangegrade();
		})
		$("#change-class").click(function(){
			$("#change-class-content").fadeIn();
			updatechangeclass();
			libind("#change-class-content");
			$("#change-class-content .input").hide();
			$("#main-header-icon-wrap").fadeIn();
			libind("#change-class-content");
			
		})
		
		$("#change-grade-content ul li").live("click",function(){
			$("#change-grade-content").hide();
			$("#change-grade-detail").fadeIn();
			var term;
			if($("#change-grade-all span").hasClass("click"))
				term="0";
			else
				term=$("#search-grade-term .left-arrow").next().attr("id");
			var id=$(this).find("div").eq(0).find(".intro").eq(1).text();
			updatechangegradedetail(id,term);
			$("#change-grade-detail").attr("name2",id);
			$("#main-header-icon-wrap").fadeIn();
			$(".input").hide();

			libind("#change-grade-detail");
		})


		
		function libind(query){
			$(query+" li").live("click",function(){
				if(!$(this).hasClass("click")){
					var obj=$(query+" .click");
					
					
					var i;var temp=new Array();
					for(i=0;i<$(query+" .show").length;i++){
						var text=$(query+" .show:eq("+i+") input").val();
						$(query+" .click .sth:eq("+i+")").text(text);
						temp[i]=text;
					}

					$(query+" .click").removeClass("click");
					$(this).addClass("click");
					$(query+" .sth").show();
					if(query=="#change-grade-detail"){
						if(temp[0]&&temp[1])
							updategradeinf(temp[0],temp[1],obj);
					}
					if(query=="#change-class-content"){
						if(temp[0])
							updatestudentinf(temp[0],obj);
					}
					$(query+" .input").hide();
					$(query+" .show").removeClass("show");

					

				}
			});
		}
		//修改按钮
		function additem(query){
			var a=$(query+" li.content-click");
			a.find(".sth").hide();
			a.find(".input").show();
			a.find(".input").addClass("show");
			$(query+" .content-click .input:eq(0) input").focus();
		}
		function changeitem(query){
			additem(query);
			var i;
			for(i=0;i<$(query+" li.content-click .sth").length;i++){
				var text=$(query+" li.content-click .sth:eq("+i+")").text();
				$(query+" li.content-click .sth:eq("+i+")").next().find("input").val(text);
			}
			
		
		
		}
		function deleteitem(query){
			$(query+" li.content-click").fadeOut(function(){
				$(query+" li.content-click").remove();
			});
		}
		function add(query,b){
			$(query+" ul li.click").removeClass("click");
			$(query+" ul").append(b);
			$(query+" ul li:last .sth").text("");
			if(query=="#change-grade-detail"||query=="#change-class-content"){
				$(query+" ul li:last div:last .intro:last").text("");
				$(query+" ul li:last div:eq(1) .intro:last").text("");
			}
			$(query+" li.content-click").removeClass("content-click");
			$(query+" ul li:last").addClass("content-click");
			$(query+" ul li:last").addClass("click");
			additem(query);
		}
		$("#change-icon").click(function(){
			var i=0;
			for(i=0;i<$(".couldchange").length;i++){
				if($(".couldchange:eq("+i+")").css("display")=="block")
				{
					changeitem("#"+$(".couldchange:eq("+i+")").attr("id"));
				}
			}
		})
		//保存按钮
		$("#save-icon").click(function(){
			if($("#change-class-content").css("display")=="block")
				changeclasssave("#change-class-content");
			if($("#change-grade-detail").css("display")=="block")
				changegradesave($("#change-grade-detail").attr("name1"),$("#change-grade-detail").attr("name2"));
			if($("#change-student-content").css("display")=="block")
				changestudentsave();
			if($("#change-teacher-content").css("display")=="block")
				changeteachersave();
			if($("#change-classteacher-content").css("display")=="block")
				changeclassteachersave();
			if($("#change-xk-content").css("display")=="block")
				changexksave();
			if($("#change-sk-content").css("display")=="block")
				changesksave();
			if($("#change-bj-content").css("display")=="block")
				changebjsave();

		})
		//删除按钮
		$("#delete-icon").click(function(){
			var i=0;
			for(i=0;i<$(".couldchange").length;i++){
				if($(".couldchange:eq("+i+")").css("display")=="block")
				{
					deleteitem("#"+$(".couldchange:eq("+i+")").attr("id"));
				}

			}
		})
		$("#add-icon").click(function(){
			if($("#change-class-content").css("display")=="block")
				add("#change-class-content",changeclasscontent);
			if($("#change-grade-detail").css("display")=="block")
				add("#change-grade-detail",changegradedetail);
			if($("#change-student-content").css("display")=="block")
				add("#change-student-content",changestudentcontent);
			if($("#change-teacher-content").css("display")=="block")
				add("#change-teacher-content",changeteachercontent);
			if($("#change-classteacher-content").css("display")=="block")
				add("#change-classteacher-content",changeclassteachercontent);
			if($("#change-xk-content").css("display")=="block")
				add("#change-xk-content",changexkcontent);
			if($("#change-sk-content").css("display")=="block")
				add("#change-sk-content",changeskcontent);
			if($("#change-bj-content").css("display")=="block")
				add("#change-bj-content",changebjcontent);
		})


		
		$(".content ul li").live("click",function(){
			$(".content-click").removeClass("content-click");
			$(this).addClass("content-click");
		});

		$(".search-category").change(function(){
			var text="";
			$(this).next().val("");
			var text=$(this).find("option:selected").text();
			if(text=="姓名")
				$(this).next().animate({width:"51px"},"fast");
			if(text=="学号")
				$(this).next().animate({width:"120px"},"fast");
		})

	}

	
	changecontent= function(){
		$("#change-account").val($("#account-display span:eq(0)").html());
	}
	init=function(){

		$("#main-right").children().hide();
		$("#main-header-icon-wrap").hide();
	}

	function interpolate(tmpl, obj) {	//模版填充函数
		return tmpl.replace(/\$\{([\w\-]+?)\}/g, function (match, content) {
			return obj[content] || match;
		});
	};
	bind();
	changecontent();
	init();
	updatemain();
});
window.onload = function(){
	var liNodes = document.querySelectorAll("#head > .headMain > .nav > li");
	var arrowNode = document.querySelector("#head > .headMain > .arrow");
	var firstLiNode = liNodes[0];
	var liUpNodes = document.querySelectorAll("#head > .headMain > .nav > li .up");
	var firstLiUpNode = liUpNodes[0];
	var contentNode = document.querySelector("#content");
	var headNode = document.querySelector("#head");
	var banners = document.querySelectorAll("#content > .nav > li");
	var clickNode = document.querySelector("#content > .nav");
	var now = 0;
	var timer = 0;
	var dots = document.querySelectorAll("#content > .dot > li");
	var home2LiNodes = document.querySelectorAll("#content > .nav > .home .home2 > li");
	var home1LiNodes = document.querySelectorAll("#content > .nav > .home .home1 > li");
	var home1 = document.querySelector("#content > .nav > .home .home1");
	var home2 = document.querySelector("#content > .nav > .home .home2");
	
	var teamLis = document.querySelectorAll("#content > .nav > .team > .zong > .team3 > ul > li");
	var team3 = document.querySelector("#content > .nav > .team > .zong > .team3");
	var teamUl = document.querySelector("#content > .nav > .team > .zong > .team3 > ul");
	
	var music = document.querySelector("#head > .headMain .music");
	var audio = document.querySelector("#head > .headMain .music audio");
	
	
	
	//音频
	music.onclick=function(){
		if(audio.paused){
			audio.play();
			music.style.background ="url(img/musicon.gif)";
		}else{
			audio.pause();
			music.style.background ="url(img/musicoff.gif)";
		}
	}
	
	//出入场
	var anArr=[
		{
			inAn:function(){
				// var home1 = document.querySelector("#content > .nav > .home .home1");
				// var home2 = document.querySelector("#content > .nav > .home .home2");
				//
				// home1.style.transform="translateY(0px)";
				// home2.style.transform="translateY(0px)";
				// home1.style.opacity=1;
				// home2.style.opacity=1;
			},
			outAn:function(){
				// var home1 = document.querySelector("#content > .nav > .home .home1");
				// var home2 = document.querySelector("#content > .nav > .home .home2");
				//
				// home1.style.transform="translateY(-400px)";
				// home2.style.transform="translateY(100px)";
				// home1.style.opacity=0;
				// home2.style.opacity=0;
			}
		},
		{
			inAn:function(){
				var plane1 = document.querySelector("#content  .course .plane1");
				var plane2 = document.querySelector("#content  .course .plane2");
				var plane3 = document.querySelector("#content  .course .plane3");
				
				plane1.style.transform = "translate(0px,0px)";
				plane2.style.transform = "translate(0px,0px)";
				plane3.style.transform = "translate(0px,0px)";
			},
			outAn:function(){
				var plane1 = document.querySelector("#content  .course .plane1");
				var plane2 = document.querySelector("#content  .course .plane2");
				var plane3 = document.querySelector("#content  .course .plane3");
				
				plane1.style.transform = "translate(-200px,-200px)";
				plane2.style.transform = "translate(-200px,200px)";
				plane3.style.transform = "translate(200px,-200px)";
			}
		},
		{
			inAn:function(){
				var pencel1 = document.querySelector("#content  .works .pencel1");
				var pencel2 = document.querySelector("#content  .works .pencel2");
				var pencel3 = document.querySelector("#content  .works .pencel3");
				
				pencel1.style.transform = "translateY(0px)";
				pencel2.style.transform = "translateY(0px)";
				pencel3.style.transform = "translateY(0px)";
			},
			outAn:function(){
				var pencel1 = document.querySelector("#content  .works .pencel1");
				var pencel2 = document.querySelector("#content  .works .pencel2");
				var pencel3 = document.querySelector("#content  .works .pencel3");
				
				pencel1.style.transform = "translateY(-100px)";
				pencel2.style.transform = "translateY(100px)";
				pencel3.style.transform = "translateY(100px)";
			}
		},
		{
			inAn:function(){
				var Rect1 = document.querySelector("#content > .nav > .about .about3 > .item:nth-child(1)");
				var Rect2 = document.querySelector("#content > .nav > .about .about3 > .item:nth-child(2)");
				
				Rect1.style.transform = "rotate(0deg)";
				Rect2.style.transform = "rotate(0deg)";
			},
			outAn:function(){
				var Rect1 = document.querySelector("#content > .nav > .about .about3 > .item:nth-child(1)");
				var Rect2 = document.querySelector("#content > .nav > .about .about3 > .item:nth-child(2)");
				
				Rect1.style.transform = "rotate(45deg)";
				Rect2.style.transform = "rotate(-45deg)";
			}
		},
		{
			inAn:function(){
				var Rect1 = document.querySelector("#content > .nav > .team .team1");
				var Rect2 = document.querySelector("#content > .nav > .team .team2");
				
				Rect1.style.transform = "translateX(0px)";
				Rect2.style.transform = "translateX(0px)";
			},
			outAn:function(){
				var Rect1 = document.querySelector("#content > .nav > .team .team1");
				var Rect2 = document.querySelector("#content > .nav > .team .team2");
				
				Rect1.style.transform = "translateX(-200px)";
				Rect2.style.transform = "translateX(200px)";
			}
		}
	]
	
	for(var i=0;i<anArr.length;i++){
		anArr[i]["outAn"]();
	}
	setTimeout(function(){
		anArr[0].inAn();
	},1000)
	
	
	
	// 第五屏
	QiPao();
	function QiPao(){
		var oc = null;
		var time1=0;
		var time2=0;
		for(var i=0;i<teamLis.length;i++){
			teamLis[i].onmouseenter = function(){
				for(var i=0;i<teamLis.length;i++){
					teamLis[i].style.opacity = 0.2;
				}
				this.style.opacity = 1;
				addCanvas();
				oc.style.left = this.offsetLeft+"px";
			}
			
		}
		
		function addCanvas(){
			if(!oc){
				oc = document.createElement("canvas");
				oc.width = teamLis[0].offsetWidth;
				oc.height = teamLis[0].offsetHeight*2/3;
				
				team3.onmouseleave = function(){
					for(var i=0;i<teamLis.length;i++){
						teamLis[i].style.opacity = 1;
					}
					removeCanvas();
				}
				
				team3.appendChild(oc);
				QiPao();
			}
		}
		
		function QiPao(){
			if(oc.getContext){
				var ctx = oc.getContext("2d");
				var arr=[];

				time1=setInterval(function(){
					ctx.clearRect(0,0,oc.width,oc.height);

					for(var i=0;i<arr.length;i++){
						arr[i].deg+=10;
						arr[i].x = arr[i].startX +  Math.sin( arr[i].deg*Math.PI/180 )*arr[i].step*2;
						arr[i].y = arr[i].startY - (arr[i].deg*Math.PI/180)*arr[i].step ;
						
						if(arr[i].y <=50){
							arr.splice(i,1)
						}
					}

					for(var i=0;i<arr.length;i++){
						ctx.save();
						ctx.fillStyle="rgba("+arr[i].red+","+arr[i].green+","+arr[i].blue+","+arr[i].alp+")";
						ctx.beginPath();
						ctx.arc(arr[i].x,arr[i].y,arr[i].r,0,2*Math.PI);
						ctx.fill();
						ctx.restore();
					}
				},1000/60)
				

				time2=setInterval(function(){
					var r =Math.random()*6+2;
					var x = Math.random()*oc.width;
					var y = oc.height - r;
					var red =   Math.round(Math.random()*255);
					var green = Math.round(Math.random()*255);
					var blue =  Math.round(Math.random()*255);
					var alp = 1;
					
					
					var deg =0;
					var startX = x;
					var startY = y;

					var step =Math.random()*20+10;
					arr.push({
						x:x,
						y:y,
						r:r,
						red:red,
						green:green,
						blue:blue,
						alp:alp,
						deg:deg,
						startX:startX,
						startY:startY,
						step:step
					})
				},50)
			}
			
		}
		
		function removeCanvas(){
			oc.remove();
			oc=null;
			clearInterval(time1);
			clearInterval(time2);
		}
	}
	
	
	
	// 第四屏图片炸裂效果
	var aboutUls = document.querySelectorAll("#content > .nav > .about > .zong > .about3 > .item > ul");
	picBoom();
	function picBoom(){
		for(var i=0;i<aboutUls.length;i++){
			 change(aboutUls[i]);
		}
		
		
		function change(UL){
			var src = UL.dataset.src;
			var w = UL.offsetWidth/2;
			var h = UL.offsetHeight/2;
			for(var i=0;i<4;i++){
				var liNode = document.createElement("li");
				liNode.style.width = w+"px";
				liNode.style.height = h+"px";
				var imgNode = document.createElement("img");
				
				// 1. left:0    top:0
				// 2. left:-w   top:0
				// 3. left:0    top:-h
				// 4. left:-w   top:-h  
				imgNode.style.left =-(i%2)*w + "px";
				imgNode.style.top =-Math.floor(i/2)*h + "px";
				imgNode.src = src;
				
				liNode.appendChild(imgNode);
				UL.appendChild(liNode);
			}
			
			// 1. left:0    top:h
			// 2. left:-2w   top:0
			// 3. left:w    top:-h
			// 4. left:-w   top:-2h  
			UL.onmouseenter = function(){
				var imgNodes = this.querySelectorAll("li>img");
				imgNodes[0].style.top = h+"px";
				imgNodes[1].style.left = -2*w+"px";
				imgNodes[2].style.left = w+"px";
				imgNodes[3].style.top = -2*h+"px";
			}
			
			UL.onmouseleave = function(){
				var imgNodes = this.querySelectorAll("li > img");
				imgNodes[0].style.top = 0+"px";
				imgNodes[1].style.left = -w+"px";
				imgNodes[2].style.left = 0+"px";
				imgNodes[3].style.top = -h+"px";
			}
			
		}
	}
	
	

	
	
	// #content交互
	contentH();
	function contentH(){
		contentNode.style.height = document.documentElement.clientHeight - headNode.offsetHeight + "px";
		for(i=0;i<banners.length;i++){
			banners[i].style.height = document.documentElement.clientHeight - headNode.offsetHeight + "px";
		}
	}
	
	window.onresize = function(){
		contentH();
		clickNode.style.top = -now * (document.documentElement.clientHeight - headNode.offsetHeight) + "px";
		arrowNode.style.left = liNodes[now].offsetLeft + liNodes[now].offsetWidth/2 - arrowNode.offsetWidth/2 + "px";
	}
	
	//鼠标滚轮
	if(contentNode.addEventListener){
		contentNode.addEventListener("DOMMouseScroll",function(ev){
			ev = ev||event;
			clearTimeout(timer);
			timer = setTimeout(function(){
				fn(ev)
			},200)
		});
	}
	contentNode.onmousewheel = function(ev){
		ev = ev||event;
		clearTimeout(timer);
		timer = setTimeout(function(){
			fn(ev)
		},200)
	};
	function fn(ev){
		ev = ev||event;
		var dir = "";
		if(ev.detail){
			dir = ev.detail<0?"up":"down";
		}else if(ev.wheelDelta){
			dir = ev.wheelDelta>0?"up":"down";
		}
		preIndex = now;
		switch (dir){
			case "up":
				if(now > 0){
					now--;
					move(now);
				}
				break;
			case "down":
				if(now < banners.length-1){
					now++;
					move(now);
				}
				break;
		}
	}
	
	//#head
	firstLiUpNode.style.width = "100%";
	arrowNode.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth/2 - arrowNode.offsetWidth/2 + "px";
	for(var i=0;i<liNodes.length;i++){
			liNodes[i].index = i;
			liNodes[i].onclick = function(){
				preIndex = now;
				move(this.index);
				now = this.index;
			}
		}
	for(var i=0;i<dots.length;i++){

		dots[i].index = i;
		dots[i].onclick=function(){

			preIndex = now;
			move(this.index);
			now = this.index;
		}
	}
	

//第一屏3D效果
var oldIndex = 0;
var timer3D ="dhajkdhaskj";
var autoIndex =0;

home3D();
function home3D(){
	for(var i=0;i<home2LiNodes.length;i++){
		home2LiNodes[i].index = i;

		home2LiNodes[i].onclick=function(){
			clearInterval(timer3D);
			for(var i=0;i<home2LiNodes.length;i++){
				home2LiNodes[i].classList.remove("active");
			}
			this.classList.add("active");
			
			
			//从左往右
			if(this.index>oldIndex){
				home1LiNodes[this.index].classList.remove("leftShow");
				home1LiNodes[this.index].classList.remove("leftHide");
				home1LiNodes[this.index].classList.remove("rightHide");
				home1LiNodes[this.index].classList.add("rightShow");
				
				
				home1LiNodes[oldIndex].classList.remove("leftShow");
				home1LiNodes[oldIndex].classList.remove("rightShow");
				home1LiNodes[oldIndex].classList.remove("rightHide");
				home1LiNodes[oldIndex].classList.add("leftHide");
			}
			
			//从右往左
			if(this.index<oldIndex){
				home1LiNodes[this.index].classList.remove("rightShow");
				home1LiNodes[this.index].classList.remove("leftHide");
				home1LiNodes[this.index].classList.remove("rightHide");
				home1LiNodes[this.index].classList.add("leftShow");
				
				
				home1LiNodes[oldIndex].classList.remove("leftShow");
				home1LiNodes[oldIndex].classList.remove("rightShow");
				home1LiNodes[oldIndex].classList.remove("leftHide");
				home1LiNodes[oldIndex].classList.add("rightHide");
			}
			
			oldIndex = this.index;
			

			autoIndex = this.index;
			

			//move();
		}
	}
	
	//自动轮播
	move();
	function move(){
		 clearInterval(timer3D);

		 timer3D = setInterval(function(){
				autoIndex ++;
			
				//无缝
				if(autoIndex == home1LiNodes.length ){
					autoIndex =0;
				}
			
			
				for(var i=0;i<home2LiNodes.length;i++){
					home2LiNodes[i].classList.remove("active");
				}
				home2LiNodes[autoIndex].classList.add("active");
			
				home1LiNodes[autoIndex].classList.remove("leftShow");
				home1LiNodes[autoIndex].classList.remove("leftHide");
				home1LiNodes[autoIndex].classList.remove("rightHide");
				home1LiNodes[autoIndex].classList.add("rightShow");
				
				
				home1LiNodes[oldIndex].classList.remove("leftShow");
				home1LiNodes[oldIndex].classList.remove("rightShow");
				home1LiNodes[oldIndex].classList.remove("rightHide");
				home1LiNodes[oldIndex].classList.add("leftHide");
			

				oldIndex = autoIndex;
				
		 },2000);
	}
	
	
	home1.onmouseenter=function(){
		clearInterval(timer3D);
	}
	
	home1.onmouseleave=function(){
		move();
	}
}

	
	// head交互
	// move(4);
	function move(index){
		for(var i=0;i<liUpNodes.length;i++){
			liUpNodes[i].style.width = "";
		}
		liUpNodes[index].style.width = "100%";
		arrowNode.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth/2 - arrowNode.offsetWidth/2 + "px";
		clickNode.style.top = -index * (document.documentElement.clientHeight - headNode.offsetHeight) + "px";
		for(var i=0;i<dots.length;i++){
			dots[i].className="";
		}
		dots[index].className="active";
		
		//出入场
		if(anArr[index]&&typeof anArr[index]["inAn"] === "function"){
			anArr[index]["inAn"]();
		}
		if(anArr[preIndex]&&typeof anArr[preIndex]["inAn"] === "function"){
			anArr[preIndex]["outAn"]();
		}
		
	}
	
	



}
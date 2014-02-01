$("button#start").on("click", function() {
	var type = $("input[name=type]:checked").val();
	var size = $("input[name=size]:checked").val();
	window.location = type + "_" + size + ".html";
});

$("button#textBox").on("click", function() {
	$('.text').toggleClass("border")
});

$("button#clone").on("click", function() {
	var imageCount = $('#image_count').val();
	for(var i = 2;i<=imageCount;i++) {
		if(i==2) {
			$('#first').clone().insertAfter(".image1").removeAttr("class").removeAttr("id").addClass("image" + i).prepend("<p>Image"+i+"</p>");
			$(".image2 p").css({"fontWeight": "bold","font-size": "25px"});
			$('.image2').find('*').addClass("2");
		}
		
		else {
			var classNumber = "" + i;
			var newImage = '.image' + (i-1); 
			var boldP = '.image' + (i); 
			$('#first').clone().insertAfter(newImage).removeAttr("class").removeAttr("id").addClass("image" + i).prepend("<p>Image"+i+"</p>");
			$(boldP).children("p").css({"fontWeight": "bold","font-size": "25px"});
			$(boldP).find('*').addClass(classNumber);
		}
	};

$("form.dynamic").on("change", function() {
	var dynamic = $(this).children("input[name=dynamic]:checked").val();
	$(this).siblings('.dynamic_distance').css("display", dynamic);	
});


$(".distance_text").on("keyup", function() {
	var text = $(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().html(text);
});


$("select.alignment").on("change", function() {
	var alignment = $(this).children("option[name=alignment]:selected").val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("text-align", alignment);
});


var height=$("#height").val();
		$(".text").css("height", height +"px");



var width=$("#width").val();
	$(".text").css("width", width + "px");



$(".creative_url").keyup(function() {
	var creative_url = $(this).val();
	$(this).parents().next(".three_twenty_fifty").children().children().css("background-image", 'url(' + creative_url + ')');
});


	$(".margin_left").keyup(function() {
	var marginLeft = $(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("margin-left", marginLeft + "px");
	$(this).parents().children(".width").children().val(320-marginLeft);
	var width=320-$(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("width", width + "px");
});


	$(".margin_top").keyup(function() {
	var marginTop = $(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("margin-top", marginTop + "px");
	$(this).parents().children(".height").children().val(50-marginTop);
	var height=50-$(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("height", height + "px");
});



	$(".height").keyup(function() {
	var height=$(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("height", height + "px");
	});



	$(".width").keyup(function() {
	var width=$(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("width", width + "px");
	});



$("select.font").on("change", function() {
	var font = $(this).children("option[name=font]:selected").val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("font-family", font);	
});



$(".color").keyup(function() {
		var color=$(this).val();
		$(this).parents().prev(".three_twenty_fifty").children().children().children().css("color", color);
	});



$(".font-size").keyup(function() {
	var fontSize=$(this).val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("font-size", fontSize + "px");
	});



$("form.bold").on("change", function() {
	var bold = $(this).children("input[name=bold]:checked").val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("font-weight", bold);	
});



$("form.italic").on("change", function() {
	var italic = $(this).children("input[name=italic]:checked").val();
	$(this).parents().prev(".three_twenty_fifty").children().children().children().css("font-style", italic);	
});
});


$("button#testing").on("click", function() {
	var imageCount = $('#image_count').val();
	var theBigArray = [];
	for(var i = 1;i<=imageCount;i++) {
		var allStyles = new Object();
		var className = '.image' + (i);
		var spanId = 'image' + (i);
		var height = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().height();
		var width = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().width();
		var text = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().html();
		var textAlign = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("text-align");
		var marginLeft = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("margin-left");
		var marginTop = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("margin-top");
		var fontFamily = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("font-family");
		var color = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("color");
		var fontWeight = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("font-weight");
		var fontStyle = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("font-style");
		var fontSize = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().children().css("font-size");
		var backgroundImage = $(className).children(".dynamic").siblings(".three_twenty_fifty").children().children().css("background-image");
		allStyles.spanId=spanId;
		allStyles.height=height;
		allStyles.width=width;
		allStyles.text=text;
		allStyles.textAlign=textAlign;
		allStyles.marginLeft=marginLeft;
		allStyles.marginTop=marginTop;
		allStyles.fontFamily=fontFamily;
		allStyles.color=color;
		allStyles.fontWeight=fontWeight;
		allStyles.fontStyle=fontStyle;
		allStyles.fontSize=fontSize;
		allStyles.backgroundImage=backgroundImage;
		theBigArray.push(allStyles);
	};
		
		var destinationUrl = $("#destination_url").val();
		
		var spanText = "";
		spanText+=('<a href="'+ destinationUrl+ '" style="text-decoration:none;display:block;">');
		for(var i = 0;i<=imageCount-1;i++) {
				if(i==0) {
				spanText+=('<span id="'+theBigArray[(i)].spanId+'" style="position:absolute;background:'+theBigArray[(i)].backgroundImage+' no-repeat;background-size:100%;width:320px;height:50px;display:block;"><span style="font-family:'+theBigArray[(i)].fontFamily+';font-size:'+theBigArray[(i)].fontSize+';color:'+theBigArray[(i)].color+';margin-top:'+ theBigArray[(i)].marginTop+';margin-left:'+theBigArray[(i)].marginLeft+';float:left;text-align:'+theBigArray[(i)].textAlign+';font-weight:'+theBigArray[(i)].fontWeight+';width:'+theBigArray[(i)].width+'px;height:'+theBigArray[(i)].height+'px">'+theBigArray[(i)].text+'</span></span>')
			}
			else {
				spanText+=('<span id="'+theBigArray[(i)].spanId+'" style="background:'+theBigArray[(i)].backgroundImage+' no-repeat;background-size:100%;width:320px;height:50px;display:none;"><span style="font-family:'+theBigArray[(i)].fontFamily+';font-size:'+theBigArray[(i)].fontSize+';color:'+theBigArray[(i)].color+';margin-top:'+ theBigArray[(i)].marginTop+';margin-left:'+theBigArray[(i)].marginLeft+';float:left;text-align:'+theBigArray[(i)].textAlign+';font-weight:'+theBigArray[(i)].fontWeight+';width:'+theBigArray[(i)].width+'px;height:'+theBigArray[(i)].height+'px">'+theBigArray[(i)].text+'</span></span>')
			};
		};
		spanText+=('</a><script type="text/javascript"> window.onload = function(){var i_one=2, step=1;function cycleImage(){');
		for(var i = 1;i<=imageCount;i++) {
		 if(i==1) {
		 spanText+=('if (i_one === '+i+') {');
			 	 spanText+=('document.getElementById("image'+i+'").style.display = "block";');
			 	 var z=i;
			 	 for(var y = 1;y<=imageCount-1;y++) {
			 	 	spanText+=('document.getElementById("image'+((z%imageCount)+1)+'").style.display = "none";');
			 	 	z++;
			 	};
			 	spanText+=('}')
			 }
			 else if(i==imageCount) {
			 	spanText+=('else if (i_one === '+i+') {');
			 	 spanText+=('document.getElementById("image'+i+'").style.display = "block";');
			 	 var z=i;
			 	 for(var y = 1;y<=imageCount-1;y++) {
			 	 	spanText+=('document.getElementById("image'+((z%imageCount)+1)+'").style.display = "none";');
			 	 	z++;
			 	};
			 	spanText+=('i_one=0;}');
			 }
			 else {
			 	spanText+=('else if (i_one === '+i+') {');
			 	 spanText+=('document.getElementById("image'+i+'").style.display = "block";');
			 	 var z=i;
			 	 for(var y = 1;y<=imageCount-1;y++) {
			 	 	spanText+=('document.getElementById("image'+((z%imageCount)+1)+'").style.display = "none";');
			 	 	z++;
			 	};
			 	spanText+=('}');
			 };
			};
			spanText+=('i_one++;step++;if (step <'+(imageCount*3)+') { setTimeout(cycleImage, 2000);}	 }	 setTimeout(cycleImage, 2000);}</script>');
		$('#code').text(spanText);
			
});

window.onbeforeunload = function() {
  return "WAIT! You'll lose everything if you refresh!";
};




$("button#finish").on("click", function() {
	var destinationUrl = $("#destination_url").val();
	var alignment = $("option[name=alignment]:selected").val();
	var creative_url = $("#creative_url").val();
	var marginLeft = $("#margin_left").val();
	var width=$("#width").val();
	var marginTop = $("#margin_top").val();
	var height=$("#height").val();
	var color=$("#color").val();
	var fontSize=$("#font-size").val();
	var font = $("option[name=font]:selected").val();
	var bold = $("input[name=bold]:checked").val();
	var italic = $("input[name=italic]:checked").val();
	var text = $("#distance_text").val();
	$('div#code').text('<a style="text-decoration:none" href="' + destinationUrl + '"><span style="background-image:url( ' + creative_url + ' );background-repeat:no-repeat;background-size:100%;width:320px;height:50px;display:block;"><span style="display:block;text-align: ' + alignment + ';margin-left: ' + marginLeft + 'px;margin-top:' + marginTop +'px;width:' + width + 'px;height:' + height + 'px;color:' + color + ';font-size:' + fontSize + 'px;font-family:' + font + ';font-weight:' + bold + ';font-style:' + italic + ';float:left">' + text + '</span></span></a>');
});





//the script that will need to be written

/* <a href="%{URL0}" style="text-decoration:none;display:block;"> 
	<span id="thinknear-ad-container1" style="background:url(http://thinknear-hosted.thinknearhub.com/production/creatives/creative_120131210200025.png) no-repeat;background-size:100%;width:320px;height:50px;display:block;">	 
		<span id="merchant" style="line-height:14px;font-family:Arial, Helvetica, sans-serif;font-size:15px;color:#662d23;margin-top: 24px;margin-left: 57px;float:left;text-align:center;text-transform:uppercase;font-weight:bold;width:180px;">
		</span>	
	</span> 
	<span id="thinknear-ad-container2" style="background:url(http://thinknear-hosted.thinknearhub.com/production/creatives/creative_120131210200058.png) no-repeat;background-size:100%;width:320px;height:50px;display:none">	 
		<span id="merchant" style="line-height:14px;font-family:Arial, Helvetica, sans-serif;font-size:15px;color:#662d23;margin-top: 2px;width: 285px;float:left;text-align:center;font-weight:bold;">
		</span>	
	</span>
	<span id="thinknear-ad-container3" style="background:url(http://thinknear-hosted.thinknearhub.com/production/creatives/creative_120131210200122.png) no-repeat;background-size:100%;width:320px;height:50px;display:none;">	 
		<span id="merchant" style="line-height:14px;font-family:Arial, Helvetica, sans-serif;font-size:15px;color:#662d23;margin-top: 20px;margin-left: 60px;float:left;text-align:center;text-transform:none;font-weight:bold;width:180px;">
		</span>	 
	</span>
	<span id="thinknear-ad-container4" style="background:url(http://thinknear-hosted.thinknearhub.com/production/creatives/creative_120131210200148.png) no-repeat;background-size:100%;width:320px;height:50px;display:none;">	 
		<span id="merchant" style="line-height:14px;font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#662d23;margin-top: 12px;margin-left: 50px;float:left;text-align:center;text-transform:uppercase;font-weight:bold;width:260px;letter-spacing: -1;">Arby's is only %{DISTANCE_ALL_CAPS} away!
		</span>
	</span>	 
	</a>	
	<script type="text/javascript"> window.onload = function(){	 
		var i_one=1, step=0; 
		function cycleImage(){
			 if (i_one === 1) {
			 	 document.getElementById("thinknear-ad-container1").style.display = "block";
			 	 document.getElementById("thinknear-ad-container2").style.display = "none";
			 	 document.getElementById("thinknear-ad-container3").style.display = "none";
			 	 document.getElementById("thinknear-ad-container4").style.display = "none";	 
			 	 }
			 else if (i_one === 2) {
			 	document.getElementById("thinknear-ad-container2").style.display = "block";	 
			 	document.getElementById("thinknear-ad-container1").style.display = "none"; 
			 	document.getElementById("thinknear-ad-container3").style.display = "none";	 
			 	document.getElementById("thinknear-ad-container4").style.display = "none";	 
			 	}
			 else if (i_one === 3) {
			 	document.getElementById("thinknear-ad-container3").style.display = "block";	 
			 	document.getElementById("thinknear-ad-container2").style.display = "none"; 
			 	document.getElementById("thinknear-ad-container1").style.display = "none";
			 	document.getElementById("thinknear-ad-container4").style.display = "none";
			 	} 
			 else if (i_one === 4) {
			 	document.getElementById("thinknear-ad-container4").style.display = "block";
			 	document.getElementById("thinknear-ad-container3").style.display = "none"; 
			 	document.getElementById("thinknear-ad-container2").style.display = "none";	 
			 	document.getElementById("thinknear-ad-container1").style.display = "none";	 
			 	i_one = 0;	 
			 	} 
			 i_one++; 
			 step++;	 
			/*you can remove if conditional to have a continue cycle */	 
			/*--replace 8 with 4x the number of images in the cycle*/	 
			/*
			if (step < 12) { 
				setTimeout(cycleImage, 4000);	 
			}	 }	 setTimeout(cycleImage, 4000); } </script> 
			*/
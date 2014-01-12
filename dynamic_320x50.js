//DATA - saving data locally 
//SUB - cloning objects as NEW 
//NODE - library 
//Angular and Ember 
//indesign
//node.codeschool.com
//codeschool (js paths . . . backbone? node?)

$("button#start").on("click", function() {
	var type = $("input[name=type]:checked").val();
	var size = $("input[name=size]:checked").val();
	window.location = type + "_" + size + ".html";
});

$("button#textBox").on("click", function() {
	$('#text').toggleClass("border")
});

$("form#dynamic").on("change", function() {
	var dynamic = $("input[name=dynamic]:checked").val();
	$(".dynamic_distance").css("display", dynamic);	
});

$("button#clone").on("click", function() {
	var imageCount = $('#image_count').val();
	for(var i = 2;i<=imageCount;i++) {
		if(i==2) {
			$('#first').clone().insertAfter(".image").removeAttr("class").removeAttr("id").addClass("image" + i).prepend("<p>Image"+i+"</p>");
			$(".image2 p").css({"fontWeight": "bold","font-size": "25px"});
			$('.image2').find('*').addClass("2");
			$('.image2').find('*').each(function(){
				var currentID = this.id;
				var newID = currentID + "2";
				this.id = newID;
				console.log(newID);
			});
			$('.image2 input#distance_text').val("");
		}
		else {
			var classNumber = "" + i;
			var newImage = '.image' + (i-1); 
			var boldP = '.image' + (i); 
			$('#first').clone().insertAfter(newImage).removeAttr("class").removeAttr("id").addClass("image" + i).prepend("<p>Image"+i+"</p>");
			$(boldP).children("p").css({"fontWeight": "bold","font-size": "25px"});
			$(boldP).find('*').addClass(classNumber);
			$(boldP).find('*').each(function(){
				var currentID = this.id;
				var newID = currentID + (i);
				this.id = newID;
				console.log(newID);
			});
		}
	};

var height=$("#height").val();
		$("#text").css("height", height);

var width=$("#width").val();
	$("#text").css("width", width);

$("#distance_text").keyup(function() {
	var text = $("#distance_text").val();
	$("#text").html(text);
});

$("#distance_text2").keyup(function() {
	var text = $("#distance_text2").val();
	$("#text2").html(text);
});

$("#creative_url").keyup(function() {
	var creative_url = $("#creative_url").val();
	$("#background").css("background-image", 'url(' + creative_url + ')');
});

	$("select.alignment").on("change", function() {
	var alignment = $("option[name=alignment]:selected").val();
	$("#text").css("text-align", alignment);	
});

	$("#margin_left").keyup(function() {
	var marginLeft = $("#margin_left").val();
	$("#text").css("margin-left", marginLeft + "px");
	$("#width").val(320-marginLeft);
	var width=$("#width").val();
	$("#text").css("width", width);
});

	$("#margin_top").keyup(function() {
		var marginTop = $("#margin_top").val();
		$("#text").css("margin-top", marginTop + "px");
		$("#height").val(50-marginTop);
		var height=$("#height").val();
		$("#text").css("height", height);
	});

		$("#height").keyup(function() {
	var height=$("#height").val();
	$("#text").css("height", height);
	});

	$("#width").keyup(function() {
		var width=$("#width").val();
		$("#text").css("width", width);
	});

$("#color").keyup(function() {
		var color=$("#color").val();
		$("#text").css("color", color);
	});

$("#font-size").keyup(function() {
	var fontSize=$("#font-size").val();
	$("#text").css("font-size", fontSize + "px");
	});

$("select.font").on("change", function() {
	var font = $("option[name=font]:selected").val();
	$("#text").css("font-family", font);	
});

$("form#bold").on("change", function() {
	var bold = $("input[name=bold]:checked").val();
	$("#text").css("font-weight", bold);	
});

$("form#italic").on("change", function() {
	var italic = $("input[name=italic]:checked").val();
	$("#text").css("font-style", italic);	
});
});



/*$("form#dynamic").on("change", function() {
	var dynamic = $("input[name=dynamic]:checked").val();
	$(".dynamic_distance").css("display", dynamic);	
});

var height=$("#height").val();
		$("#text").css("height", height);

var width=$("#width").val();
	$("#text").css("width", width);

$("#distance_text").keyup(function() {
	var text = $("#distance_text").val();
	$("#text").html(text);
});


$("#creative_url").keyup(function() {
	var creative_url = $("#creative_url").val();
	$("#background").css("background-image", 'url(' + creative_url + ')');
});

	$("select.alignment").on("change", function() {
	var alignment = $("option[name=alignment]:selected").val();
	$("#text").css("text-align", alignment);	
});

	$("#margin_left").keyup(function() {
	var marginLeft = $("#margin_left").val();
	$("#text").css("margin-left", marginLeft + "px");
	$("#width").val(320-marginLeft);
	var width=$("#width").val();
	$("#text").css("width", width);
});

	$("#margin_top").keyup(function() {
		var marginTop = $("#margin_top").val();
		$("#text").css("margin-top", marginTop + "px");
		$("#height").val(50-marginTop);
		var height=$("#height").val();
		$("#text").css("height", height);
	});

		$("#height").keyup(function() {
	var height=$("#height").val();
	$("#text").css("height", height);
	});

	$("#width").keyup(function() {
		var width=$("#width").val();
		$("#text").css("width", width);
	});

$("#color").keyup(function() {
		var color=$("#color").val();
		$("#text").css("color", color);
	});

$("#font-size").keyup(function() {
	var fontSize=$("#font-size").val();
	$("#text").css("font-size", fontSize + "px");
	});

$("select.font").on("change", function() {
	var font = $("option[name=font]:selected").val();
	$("#text").css("font-family", font);	
});

$("form#bold").on("change", function() {
	var bold = $("input[name=bold]:checked").val();
	$("#text").css("font-weight", bold);	
});

$("form#italic").on("change", function() {
	var italic = $("input[name=italic]:checked").val();
	$("#text").css("font-style", italic);	
})

/*$("form#bold").on("change", function() {
	var bold = $("input[name=bold]:checked").val();
	$("#text").css("font-style", bold);	
});*/

//Code to enter inner html for div#code

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
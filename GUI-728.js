$("button#start").on("click", function() {
	var type = $("input[name=type]:checked").val();
	var size = $("input[name=size]:checked").val();
	window.location = type + "_" + size + ".html";
});

$("button#textBox").on("click", function() {
	$('#text').toggleClass("border")
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
	$("#width").val(728-marginLeft);
	var width=$("#width").val();
	$("#text").css("width", width);
});

	$("#margin_top").keyup(function() {
		var marginTop = $("#margin_top").val();
		$("#text").css("margin-top", marginTop + "px");
		$("#height").val(90-marginTop);
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
	$('div#code').text('<a style="text-decoration:none" href="' + destinationUrl + '"><span style="background-image:url( ' + creative_url + ' );background-repeat:no-repeat;background-size:100%;width:728px;height:90px;display:block;"><span style="display:block;text-align: ' + alignment + ';margin-left: ' + marginLeft + 'px;margin-top:' + marginTop +'px;width:' + width + 'px;height:' + height + 'px;color:' + color + ';font-size:' + fontSize + 'px;font-family:' + font + ';font-weight:' + bold + ';font-style:' + italic + ';float:left">' + text + '</span></span></a>');
});

window.onbeforeunload = function() {
  return "WAIT! You'll lose everything if you refresh!";
};
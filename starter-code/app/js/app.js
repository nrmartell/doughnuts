// jQuery Document Ready
$(function() {
  

var dArray= [];

$("#doughnut-list").click(function(){
	dArray.forEach(function(doughnutsObj,index){
	var flavor = doughnutsObj.flavor;
	var style = doughnutsObj.style;
	var yum = document.createElement("li");
	$(yum).text(flavor + style);
	$("#doughnuts")[0].appendChild(yum);
	return false;
});

})

$.ajax ({
	url:"http://api.doughnuts.ga/doughnuts",
	datatype: "jsonp",
	method: "GET",
	success: function (data){
		for (var i =0; i < data.length; i++){
			var flavor= data[i].flavor;
			var style = data[i].style;
			dArray.push({flavor: flavor, style: style});
		}
	} 
});


$('#addit').on('click', function(){
	console.log("test");
	var flavor = $('#doughnut-flavor').val();
	var style  = $('#doughnut-style').val();

	console.log("doughnut flavor: ", flavor);
	console.log("doughnut style: ", style);
	// dArray.push({flavor: flavor, style: style});
	// $("#doughnuts").append('<li>'{flavor: flavor, style: style}'</li>');
 //    $("#doughnuts").append('<li>'style'</li>');

	$.ajax({
		url:'http://api.doughnuts.ga/doughnuts',
		method: 'POST',
		datatype: 'json',
		data:{
			item: {
				flavor: flavor,
				style: style				
			}
		},
		success: function(data){
		$("#doughnuts").append('<li>'+ flavor + " "+ style +'</li>');
		},
		fail: function(){
			console.log('fail!');
			console.log(err);
		},
		always: function(){
			console.log('I always happen');
		}

		

			
	});

	});


});



    	
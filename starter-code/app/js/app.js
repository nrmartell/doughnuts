// jQuery Document Ready
$(function() {
  
 $('#addit').on('click', function(){
    	var flavor = $('#doughnut-flavor').val();
    	var style  = $('#doughnut-style').val();

    	
    	
    	console.log("doughnut flavor: ", flavor);
    	console.log("doughnut style: ", style);
    	$("#doughnuts").append(flavor).promise();
    	$("#doughnuts").append(style).promise();
    	

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
    		done: function(data, textStatus, jqXHR){
    			console.log('success!');
    			console.log(data);

    		},
    		fail: function(){
    			console.log('fail!');
    			console.log(err);

    		},
    		always: function(){

    			console.log('I always happen');
    		}


    	});

    	return false;


    });
});
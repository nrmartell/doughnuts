// jQuery Document Ready
$(function() {
  
 $('#addit').on('click', function(){
    	var flavor = $('#doughnut-flavor').val();
    	
    	
    	console.log("doughnut flavor: ", flavor);
    	

    	$.ajax({
    		url:'http://api.doughnuts.ga/doughnuts',
    		method: 'POST',
    		datatype: 'json',
    		data:{
    			item: {

    				flavor: flavor,
    				
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
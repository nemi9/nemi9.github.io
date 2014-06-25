$(document).ready(function() {


$("#names, #places").sortable({containment: 'document', tolerance: 'pointer',
   cursor: 'pointer', revert: true, opacity: 0.60, connectWith:"#names, #places"}) 
     
	 
	     update: function() {
	     content = $(this).text()
      $('#sort_status').text(content);
}

});


  





// single line code //

/* multi-line comment*/

















/* Multiple selectors top shows specific ID OR CLASS. Bottom shows how to select everything.
$(document).ready(function() {
	
	$('#button, #paragraph').click(function() {
		alert('something has been clicked');
		
		
		});




	$('input:button, p').click(function() {
		alert('click something');
		
		
		});

/*

/* :text will select the specific id or class of the input. : input will select all of the text fields.

$(document).ready(function() {
	
	$(':input').mouseenter(function() { 
	
	$(this).css('background-color', "yellow");
	
	
	});
	
	
	
	$(':input').mouseleave(function() { 
	
	$(this).css('background-color', "red");
	
	
	});

*/







/*Fadein a message
$(document).ready(function() {
	$("#message").fadeIn("slowest");
	
});

*/


/* Hide Paragraph Function




$(document).ready(function() {
	$("#paragraph").click(function() {
		$("#paragraph").hide();
		
	});
});

*/








/* Show and Hide paragraph html jquery code


$(document).ready(function() {
	
	$('#toggle_message').click(function() {
		var value = $("#toggle_message").attr ('value');
		$('#message').toggle('fast');
	
	
	if('value' == 'Hide') {
		
		$('#toggle_message').attr('value', 'Show');
		
	}else if ('value'=='Show') {
		$('#toggle_message').attr('value','Hide');
	}
	});
	

 
 
 
});


*/

	



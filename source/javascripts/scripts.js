$(document).ready(function(){

	var onText = '<p><span class="bold-font-name">You have successfully activated your Fraud Alert Cancelations!</span><br/>We will automatically cancel orders marked high risk by Shopify.</p>';
	var offText = '<p><span class="bold-font-name">Fraud Alert Cancelations are off.</span> <br/>Click the toggle when ready to activate.</p>';

	$('#console-event').html(offText);

    $(function() {
    $('#activate-toggle').change(function() {
 
	  if ($(this).is(':checked')) {
	    $('#console-event').html(onText);
	  } else {
	    $('#console-event').html(offText);
	  }

    })
  })


});

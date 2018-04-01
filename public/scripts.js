(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();



 $('.button-collapse').sideNav({
      menuWidth: 175, // Default is 300
      edge: 'right', // Choose the horizontal origin
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );

$('#inputbox').keyup(function(){
	var inputval = $('#inputbox').val();
	// var year-lead = inputval.substring(0, 3);
	// alert(year-lead);
if(inputval !='' && inputval >= 0)
{
	if(inputval >= 1700 && inputval < 2019){
		 $('.hidden').slideDown();
	 $('#cd').html('Hmmm...'+inputval)
	fetch("http://numbersapi.com/"+inputval+"/year")
		.then((res) => res.text() )
		.then( data => {
			$('#res-p').html(data+ '<br><br><small id="try"><em>Try another number or year</em></small>').slideDown();
		})
		.catch(err => console.log(err))
		$('#inputbox').focus();
	}else{
		 $('.hidden').slideDown();
	 $('#cd').html('Hmmm...'+inputval)
	fetch("http://numbersapi.com/"+inputval)
		.then((res) => res.text() )
		.then( data => {
			$('#res-p').html(data+ '<br><br><small id="try"><em>Try another number or year</em></small>').slideDown();
		})
		.catch(err => console.log(err))
		$('#inputbox').focus();
	}
	

}
else{
	$('#res-p').html('Enter a number greater than or equals to 0').slideDown();
	$('#inputbox').focus();
}	

})


$.ajax({
url:"https://api.count.io/1/count/myfactpeople/person+",
type: "POST"
});
 
  }); // end of document ready
  		
})(jQuery); // end of jQuery name space
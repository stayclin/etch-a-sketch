$(document).ready(function(){
	var $sketchpad = $('#sketchpad');

	function createPad(padSize){
		//draw a square of set size
		//make the square size relative to sketchpad size
		var padWidth, padHeight;
		padWidth = $sketchpad.width();
		padHeight = $sketchpad.height();
		alert(padWidth + " " +padHeight);
		//input from user
		/*var numSquares, squareSize;
		numSquares = 5;
		squareSize = padWidth/numSquares;
		//numSquares=padSize;
		alert("squareSize " + squareSize);
		*/
		//var numSquares=10;
		var numSquares = padSize;
		var squareW = (padWidth / numSquares) + "px";
		var squareH = (padHeight / numSquares) + "px";
		//alert(squareH);
		var totalSquares = numSquares*numSquares;
		for(var i=0; i<totalSquares; i++){
			$('<div class="square">').css('background-color', 'gray').appendTo($sketchpad);
			//borders take up extra space...
			//$('<div class="square">').css('border', '1px solid black').appendTo($sketchpad);
		}
		$squares = $(".square");
		$($squares).css("width", squareW);
		$($squares).css("height", squareH);
		//alert("squareH " + squareH);
		alert("squareSize " + ($squares).height());

		//change color when hover over square
		$($squares).hover(function(){
      	$(this).css('background-color', 'white');
   		});
	}
	createPad(16);

		//change color when hover over square
		//$($squares).hover(function(){
      	//$(this).css('background-color', 'white');
   		//});

    //button functions
    $("#reset").click(function(){
        alert('reset button clicked');
        $sketchpad.empty();
        var newSize = prompt("Please enter a new size:");
        //alert(newSize);
        createPad(newSize);
        //
        //$($squares).hover(function(){
    	//$(this).css('background-color', 'white');
		//});
    });

});
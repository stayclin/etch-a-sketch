$(document).ready(function(){
	var $sketchpad = $('#sketchpad');

	//set mode
	var mode = "normal";

	function createPad(padSize){
		//draw a square of set size
		//make the square size relative to sketchpad size
		var padWidth, padHeight;
		padWidth = $sketchpad.width();
		padHeight = $sketchpad.height();
		console.log(padWidth + " " +padHeight);

		var numSquares = padSize;
		var squareW = (padWidth / numSquares) + "px";
		var squareH = (padHeight / numSquares) + "px";
		//console.log(squareH);
		var totalSquares = numSquares*numSquares;
		for(var i=0; i<totalSquares; i++){
			$('<div class="square">').css('background-color', 'white').appendTo($sketchpad);
			//borders take up extra space...
			//$('<div class="square">').css('border', '1px solid black').appendTo($sketchpad);
		}
		$squares = $(".square");
		$($squares).css("width", squareW);
		$($squares).css("height", squareH);
		//console.log("squareH " + squareH);
		console.log("squareSize " + ($squares).height());

		//change color when hover over square
		squareHover();

	}
	createPad(16);


	//change color when hover over square
	function squareHover(){
		//if gray
		if(mode == "normal"){
			//$($squares).hover(function(){
			//mouseover/mouseout, mouseenter/mouseleave
			//hover accepts event for in and out, thats why changes color in and out
			$($squares).mouseover(function(){
				//simple one color 
	      		//$(this).css('background-color', 'gray');

				//console.log($(this).css('background-color'));
				if($(this).css('background-color') === 'rgb(255, 255, 255)'){
					console.log('testtt');
	      			//$(this).css('background-color', 'gray');
	      			$(this).css('background-color', 'black');
	      			$(this).css('opacity', .25);
				}
				//subsequent hovers
				//opacity returns a string
				else{
					console.log('more');
					var newOpacity = parseFloat($(this).css('opacity')) + 0.25;
					console.log(newOpacity);
					$(this).css('opacity', newOpacity);
				}
      			//console.log("opacity: " + $(this).css('opacity'));
   			});
		}
		//else random color hover
		else if(mode == "random"){
        	//alert('random color hover');
        	$($squares).mouseover(function(){
      			$(this).css('background-color', getRandomColor());
   			});
		}

	}


    //button functions
    //clears board
    $("#reset").click(function(){
        //alert('reset button clicked');
        $sketchpad.empty();
        var newSize = prompt("Please enter a new size:");
        //console.log(newSize);
        createPad(newSize);
    });

    $("#normal").click(function(){
        //alert('normal button clicked');
        $sketchpad.empty();
        mode = "normal";
        var newSize = prompt("Please enter a new size:");
        //console.log(newSize);
        createPad(newSize);
    });

    $("#random").click(function(){
        //alert('random button clicked');
        $sketchpad.empty();
        mode = "random";
        var newSize = prompt("Please enter a new size:");
        //console.log(newSize);
        createPad(newSize);
        //getRandomColor();
    });

    //get random color
    function getRandomColor(){
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	//console.log(color);
    	return color;
    }


});
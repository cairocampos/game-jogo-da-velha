var vez = "o";

function nextPlayer()
{
	if (vez == "o") {
		$('.next-player img').attr('src', 'o.png');
	} else if(vez == "x") {
		$('.next-player img').attr('src', 'x.png');
	}
}

nextPlayer();
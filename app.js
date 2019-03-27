var vez = "o";

//Essa função verifica quem é o próximo jogador e exibe para o usuário.
function nextPlayer()
{
	if (vez == "o") {
		$('.next-player img').attr('src', 'o.png');
	} else if(vez == "x") {
		$('.next-player img').attr('src', 'x.png');
	}
}

function existeGanhador(){

	var a1 = $('.a1').attr("data-marcador");
	var a2 = $('.a2').attr("data-marcador");
	var a3 = $('.a3').attr("data-marcador");

	var b1 = $('.b1').attr("data-marcador");
	var b2 = $('.b2').attr("data-marcador");
	var b3 = $('.b3').attr("data-marcador");

	var c1 = $('.c1').attr("data-marcador");
	var c2 = $('.c2').attr("data-marcador");
	var c3 = $('.c3').attr("data-marcador");

	var ganhador = '';
	var letra = '';

	for(var i = 0; i<=1; i++) {
		if( i == 0) {
			letra = "o";
		} else {
			letra = "x";
		}

		if(a1 == letra && a2 == letra && a3 == letra) {
			ganhador = letra;
		} else if(b1 == letra && b2 == letra && b3 == letra) {
			ganhador = letra;
		} else if(c1 == letra && c2 == letra && c3 == letra){
			ganhador = letra;
		} else if(a1 == letra && b1 == letra && c1 == letra){
			ganhador = letra;
		} else if(a2 == letra && b2 == letra && c2 == letra){
			ganhador = letra;
		} else if(a3 == letra && b3 == letra && c3 == letra){
			ganhador = letra;
		} else if(a1 == letra && b2 == letra && c3 == letra) {
			ganhador = letra;
		} else if(a3 == letra && b2 == letra && c1 == letra){
			ganhador = letra;
		}

	}

	if (ganhador != '') {
		if(ganhador == "o") {
			$('#congratulations').addClass('active');
			$('#congratulations').html("PARABÉNS!! O ganhador dessa partida foi: <span style='font-weight: bold; color: #000'>O</span>");
		} else if(ganhador == "x"){
			$('#congratulations').addClass('active');
			$('#congratulations').html("PARABÉNS!! O ganhador dessa partida foi: <span style='font-weight: bold; color: #000'>X</span>");

		}

		$("#reset").css("display", "block");

	}

}

function jogarNovamente(){
	$('.area').html('');
	$('.area').attr('data-marcado', '');

	$("#congratulations").removeClass("active");
	$("#reset").css("display", "none");

}

nextPlayer();


//Criando ancora para manipulação
$('.area').on("click", function(){

	if ($(this).find('img').length == 0) {

		if (vez == 'o') {
			$(this).html("<img src='o.png' height='50'>");
			vez = "x";
			$(this).attr("data-marcador", "o");
		} else if(vez == 'x'){
			$(this).html("<img src='x.png' height='50'></img>");
			vez = "o";
			$(this).attr("data-marcador", "x");

		}
	}

	nextPlayer();

	existeGanhador();


});
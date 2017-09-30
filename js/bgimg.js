$(document).ready(function() {
	//var party = ['01.png', '02.png'];
	//$('<img class="draggable imgimg" src="img/party/'+party[Math.floor(Math.random()*party.length)]+'">').appendTo('#partyimg');
	
	//if portrait
	if(window.innerHeight > window.innerWidth)
		{var images = ['OR-V-BG-1.svg', 'OR-V-BG-2.svg', 'OR-V-BG-3.svg','OR-V-BG-4.svg', 'OR-V-BG-5.svg', 'OR-V-BG-6.svg'];
		$('<img src="/img/default/'+images[Math.floor(Math.random()*images.length)]+'">').appendTo('#bgimg');}

		//if landscape
		if(window.innerHeight < window.innerWidth)
			{    var images = ['OR-H-BG-1.svg', 'OR-H-BG-2.svg', 'OR-H-BG-3.svg', 'OR-H-BG-4.svg', 'OR-H-BG-5.svg', 'OR-H-BG-6.svg', 'OR-H-BG-7.svg', 'OR-H-BG-8.svg', 'OR-H-BG-9.svg', 'OR-H-BG-10.svg', 'OR-H-BG-11.svg', 'OR-H-BG-12.svg'];
   	 	$('<img src="/img/default/'+images[Math.floor(Math.random()*images.length)]+'">').appendTo('#bgimg');}});
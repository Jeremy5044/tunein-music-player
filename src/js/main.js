import $ from 'jquery';
import token from "./token.js"





$(".searchButton").click(function(event){
	var searchTerm = $("#searchInput").val();
	var data = getDataRequest(searchTerm);
	data.then(grabResults);

})


function grabResults (data){
	console.log(data);
	var totalHtml = "";
	data.forEach(function(object){
		if(object.artwork_url===null){
			var imageHTML = `<img src="https://pedrocadiz13.files.wordpress.com/2014/01/default.png?w=200&h=200">`;
		}else {
			var imageHTML = `<img src=${object.artwork_url}>`;
		}
		var Html = `<div class="hugeBox"><div srcURL=${object.stream_url} class ="ArtistBox">${imageHTML}</div><div class="p">${object.title}</div> </div>`;
		totalHtml = totalHtml + Html;
	})
	$(".container").html(totalHtml);
	$(".ArtistBox").click(function(event){
		var target = event.target.parentNode;
		var musicSource = $(target).attr("srcURL") + `?client_id=${token}`;
		console.log(musicSource);
		$(".sourceURL").attr("src", musicSource);
		
       document.getElementById("audioPlayer").load();

	})

}

function getDataRequest (objectives){

	return $.ajax({
		url:"https://api.soundcloud.com/tracks",
		data:{
			client_id: token,
			q: objectives,
			limit: 20,
			streamable: true
		}
	})
}



		


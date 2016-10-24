import $ from 'jquery';

function grabResults (data){
	var totalHtml = "";
	data.forEach(function(object){
		// if(object.artwork_url===null){
		// 	var imageHTML = `<img src="https://pedrocadiz13.files.wordpress.com/2014/01/default.png?w=200&h=200">`;
		// }else {
		// 	var imageHTML = `<img src=${object.artwork_url}`;
		// }
		var Html = `<div class ="ArtistBox"></div>`;
		console.log(Html);
		totalHtml = totalHtml + Html;
	})
	${".container"}.html(totalHtml);
	return totalHtml;

}

export { grabResults };

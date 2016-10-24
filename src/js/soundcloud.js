import $ from 'jquery';
import token from "./token.js"




function getDataRequest (objectives){
	console.log(token);

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


export {getDataRequest};
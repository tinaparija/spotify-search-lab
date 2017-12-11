// wait for DOM to load before running JS
$(document).ready( function() {


$(".search_form").on("submit", function(e) {
	event.preventDefault();
	$("#results").html("");
	let searchTerm = $(".search-input").val()
	$.ajax({
		method: 'GET',
		url:"http://content.guardianapis.com/search?q="+searchTerm+"&api-key=a91e9908-b93d-4f28-a5b7-efbbd3730208",
		success: onSuccess,
		error: console.log("bleh")
	});
	});

function onSuccess(json){
	for (let i=0; i < json.response.results.length; i++){
	$("#results").append(`<a href="${json.response.results[i].webUrl}" target="_blank">${json.response.results[i].webTitle}</a>`);
};
};

}); 

// Bazaarvoice Client Autofill
var clientArray = [];
$.getJSON('../bazaarvoice/clients.json', function(json) {
	$.each(json, function(c, client){
		clientArray.push(json[c].name);
	})
})
$("#clientname").autocomplete({
	source: function(req, response) {
    			var results = $.ui.autocomplete.filter(clientArray, req.term);
    			response(results.slice(0, 20)); //for getting 20 results
   			}
})
// Api Key:
// NCWFcjgphTcq8gGzLPS918neSnqMDRDO

$(document).ready(function() {

var searchTerms = []
function displayGiphs() {
    $("#img-field").empty()
    var giph = $("#search-item").val().trim();
    searchTerms.push(giph)
    $("#btn-field").append("<button type='button' class='btn btn-info'id="+giph+">"+giph+"</button>")
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giph + "&rating=g&fmt=json&api_key=NCWFcjgphTcq8gGzLPS918neSnqMDRDO&limit=10";

    // Creating an AJAX call for giph retreivale
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(result) {
        var newP = $("<p>")
        var rating = result.rating

        result.data.forEach(element => {
            $("#img-field").append("<img src="+element.images.fixed_height.url+">")
        });
    })
    
}; // end function

$("#btn-giph-search").click(displayGiphs)


window.addEventListener("keypress", enterSearch, false);

function enterSearch(e) {
    if (e.keyCode == 13 ) {
    displayGiphs()
} else {
    console.log(e.keyCode)
}
}


});
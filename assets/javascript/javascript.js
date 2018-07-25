// Api Key:
// NCWFcjgphTcq8gGzLPS918neSnqMDRDO

$(document).ready(function() {

var searchTerms = []
var btnPress = false
var searchType = "";
var findGiph = "";

window.addEventListener("keypress", enterKeyIsHit, false)

// if enter is hit
function enterKeyIsHit(e) {
    if ($("#search-item").val().trim()!="") {
        if (e.keyCode == 13 ) {
        findGiph = $("#search-item").val().trim();
        displayGiphs()
        }   
    }    
}
// if search button is clicked
$(document).on("click", "#btn-giph-search",function(){
    searchType = "search-button";
    findGiph = $("#search-item").val().trim();
    console.log(findGiph)
    displayGiphs()
});
// if field button is clicked
$(document).on("click", ".giphResult-btn",function(){
    searchType = "field-button"
    findGiph = $(this).attr("id")
    console.log($(this).attr("id"))
    displayGiphs()
});

function displayGiphs(type) {
    // empty image field
    $("#img-field").empty()

    // determine what triggered function, search btn click or field btn click
    switch (searchType) {

        case "search-button" :
        console.log("search button")
        break;

        case "field-button" :
        console.log("field-button")
        break;

        default : 
        break;
    }
    // if not already a part of the button field array, add it to it
    if (searchTerms.indexOf(findGiph) == -1){
        searchTerms.push(findGiph)
        $("#btn-field").append("<button type='button' class='btn btn-info giphResult-btn'id="+findGiph+">"+findGiph+"</button>")
        }    

    // *** AJAX Section ***
    // Creating an AJAX call for giph retrieval

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + findGiph + "&rating=g&fmt=json&api_key=NCWFcjgphTcq8gGzLPS918neSnqMDRDO&limit=10";
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(result) {
        console.log(result)
        result.data.forEach(element => {
            // $("#img-field").append("<span><img src="+element.images.fixed_height.url+"></span>")
            $("#img-field").append(`<span class='card' id=`+findGiph+`style='width: 14rem;'>\<img class='card-img-top' src=`+element.images.fixed_height.url+`>\<span class='card-body'>\<span class='card-text'>`+element.title+` Rating: `+element.rating+` </span></span></span>`)
        });
    })
}; // end function





}); //document ready closing tag
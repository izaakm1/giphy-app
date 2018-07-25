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
    if ($("#search-item").val().trim()!="") {
        searchType = "search-button";
        findGiph = $("#search-item").val().trim();
        console.log(findGiph)
        displayGiphs()
    }
});
// if field button is clicked
$(document).on("click", ".giphResult-btn",function(){
    searchType = "field-button"
    findGiph = $(this).attr("id")
    console.log($(this).attr("id"))
    displayGiphs()
});
//if random button is selected
$(document).on("click", "#btn-giph-random-search",function(){
    displayRandomGiphs()
});

function displayGiphs() {
    // empty image field
    $("#img-field").empty()

    // if not already a part of the button field array, add it to it
    if (searchTerms.indexOf(findGiph) == -1){
        searchTerms.push(findGiph)
        $("#btn-field").append("<button type='button' class='btn btn-info giphResult-btn' id="+findGiph+">"+findGiph+"</button>")
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
            $("#img-field").append("<span class='card' id="+findGiph+" style='width: 10rem;'>\<img class='card-img-top' src="+element.images.fixed_height.url+">\<span class='card-body'>\<span class='card-text'>"+element.title+" Rating: "+element.rating+" </span></span></span>")
        });
    })
}; // end function

function displayRandomGiphs() {
    $("#img-field").empty()
    // *** AJAX Section ***
    // Creating an AJAX call for giph retrieval

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=NCWFcjgphTcq8gGzLPS918neSnqMDRDO&rating=g&fmt=json&";
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(result) {
        console.log(result)

        // result.data.forEach(element => {
            // $("#img-field").append("<span><img src="+element.images.fixed_height.url+"></span>")
            $("#img-field").append(`<span class="card" id="+result.data.title+"style="width: 10rem;">\<img class='card-img-top' src=`+result.data.images.fixed_height.url+`>\<span class='card-body'>\<span class='card-text'>`+result.data.title+` Rating: `+result.data.rating+` </span></span></span>`)
        // });
    })
}//end random function


}); //document ready closing tag
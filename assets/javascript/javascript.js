$(document).ready(function() {

var searchTerms = []
var findGiph = "";

window.addEventListener("keypress", enterKeyIsHit, false)

// if enter is hit
function enterKeyIsHit(e) {
    var $sItem = $("#search-item").val().trim()
    if ($sItem!="") {
        if (e.keyCode == 13 ) {
            e.preventDefault();
            findGiph = $sItem;
            displayGiphs()
            console.log(findGiph)
        }   
    }
    // console.log(e)    
}
// if search button is clicked
$(document).on("click", "#btn-giph-search",function(){
    if ($("#search-item").val().trim()!="") {
        // searchType = "search-button";
        findGiph = $("#search-item").val().trim();
        console.log(findGiph)
        displayGiphs()
    }
});
// if field button is clicked
$(document).on("click", ".giphResult-btn",function(){
    findGiph = $(this).attr("id")
    console.log($(this).attr("id"))
    displayGiphs()
});
//if random button is selected
$(document).on("click", "#btn-giph-random-search",function(){
    displayRandomGiphs()
});
// if stop button is hit
$(document).on("click", ".pause-giphs",function(){
    findGiph = $(this).attr("id")

});

function displayGiphs() {
    // empty image field
    $("#img-field").empty()
    console.log(findGiph)
    // $(".bulletin").append("<div class='freetext'>Recently Viewed")
    // if not already a part of the button field array, add it to it
    if (searchTerms.indexOf(findGiph) == -1){
        searchTerms.push(findGiph)
        $("#btn-field").append("<button type='button' class='btn btn-info giphResult-btn' id='"+findGiph+"'>"+findGiph+"</button>")
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
            $("#img-field").append("<img class='result-img'src="+element.images.fixed_height.url+">")
        });
    })}; // end function

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
        
        var resultTitle = result.data.title
        console.log(resultTitle)
        $("#img-field").append("<div class='display-img''><img class='result-img' src="+result.data.images.fixed_height.url+"></div>")
    })
}//end random function

}); //document ready closing tag

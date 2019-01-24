let express = require('express');
let router = express.Router();
let axios = require('axios')

let queryURL = "https://api.giphy.com/v1/gifs/"
let APIKEY = "NCWFcjgphTcq8gGzLPS918neSnqMDRDO&limit=10"

router.get('/getStartUpGiphs', function(req, res, next) {
  console.log("/getStartUpGiphs route hit")

  // let params = `https://api.giphy.com/v1/gifs/trending&rating=g&fmt=json&api_key=${APIKEY}`
    axios.get("https://api.giphy.com/v1/gifs/trending?&rating=pg&fmt=json&api_key=NCWFcjgphTcq8gGzLPS918neSnqMDRDO")
    .then(function(result) {
        let giphs = result.data.data
        let returnArr = []
        
        giphs.forEach(giph => {
          let returnObj = {}
            returnObj.title = giph.title
            returnObj.username = (giph.username === '') ? "unknown" : giph.user.display_name
            returnObj.url = giph.url
            returnObj.rating = giph.rating
            returnObj.originalStill = giph.images.original_still
            returnObj.fixedHeightStill = giph.images.fixedHeightStill
            returnObj.fixedHeight = giph.images.fixed_height.url
            returnObj.looping = giph.looping

            returnArr.push(returnObj)
            // console.log(`length of array is : ${returnArr.length}`)
        })
        res.send({returnArr});
    })
    .catch(err=>{
      console.dir(err,{depth:null,colors:true}
      )})
})

module.exports = router;

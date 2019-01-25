let express = require('express');
let router = express.Router();
let axios = require('axios')

// let queryURL = "https://api.giphy.com/v1/gifs/"
let APIKEY = "NCWFcjgphTcq8gGzLPS918neSnqMDRDO&limit=10"

router.get('/getStartUpGiphs', (req, res, next) => {
    axios.get("https://api.giphy.com/v1/gifs/trending?&rating=pg&fmt=json&api_key="+APIKEY+"")
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
        })
        res.send({returnArr});
    })
    .catch(err=>{
      console.dir(err,{depth:null,colors:true})
        res.send("Something went wrong. Check Routes/Api")
      })
})

router.get("/searchGiphs",(req,res,next) => {
  console.dir(req.body,{depth:null,colors:true})
  // axios.get("https://api.giphy.com/v1/gifs/search?q="+query+"&rating=pg&fmt=json&api_key="+APIKEY+"")
  //   .then(result=>{
  //     console.log(result.data.data.length)
  //   })
})

module.exports = router;

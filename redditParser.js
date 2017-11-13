var fetch = require('node-fetch')
var tweetit = require('./tweetit');

let awwData = {};
let newTweet = ''
const url = 'https://www.reddit.com/r/aww/top.json'

const randomInt = function(){
  return Math.floor(Math.random() * 10)
}

const getData = function(){
  fetch(url)
  .then((resp) => resp.json())
  .then(data => {
    //console.log('randomInt', randomInt())
    let random = randomInt()
    awwData.title = data.data.children[random].data.title
    awwData.img = data.data.children[random].data.url
    //console.log('test', awwData)
    newTweet = `This is so cute! '` + awwData.title + `' `  + awwData.img
    console.log('newTweet', newTweet)
    tweetit.tweetIt(newTweet)
  })
  .catch()
  //return awwData
}

//getData()

module.exports = getData

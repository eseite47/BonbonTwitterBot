var fetch = require('node-fetch')

let awwData;
const url = 'https://www.reddit.com/r/aww/top.json'

fetch(url)
.then(data => {
  console.log('test', data)
  awwData = data.children
})

module.exports.redditData = awwData

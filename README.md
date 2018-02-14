# Bonbon the Twitter Bot

Bonbon was a personal project of mine before entering FullStack Academy in June/July 2017. I sought to practice javascript while doing something fun and challenging.
This project was the first time I got to use Node.

## Technologies

The tweeting functionalities are powered by Node, the Twitter Streaming and REST API, and the [Twit npm module](https://www.npmjs.com/package/twit).
I started my project simply:
* Tweeting uplifting messages at randomly selected followers
* Thanking new followers
* Tweeting quotes

Once that was up and running, I plugged into the reddit API for the r/aww subreddit, parsed it randomly and use that as the content for new tweets.

The most challenging part of this application was dealing with asynchronisity and building callback functions that would run once the data was received by either Reddit or Twitter.
Overall, this project relies mainly on vanilla JS and I was happy to be able to do so much while still very early in my software dev career.

## Next Steps

My plan is to eventually deploy Bonbon on a raspberry Pi and for it to tweet at regular intervals. I have the rasberry pi but have not come around to setting it up yet.

// Diclaring Gloval variable
const API_KEY = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0';
const CHANNEL_ID = 'UCNdvDMh56hgSP4pepXgkwbA';
const SN_CHANNEL_ID = 'UC4TW4FcIA6mdxZAy4cCoHlw';


// Create a function to fetch and embed the latest video
async function embedLatestVideo(API_KEY, CHANNEL_ID){
    try {

        // Fetch the latest video from your channel using the YouTube Data API
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&type=video&part=snippet&maxResults=1`);
        const data = await response.json();

        const videoid = data.items[0].id.videoId;

        return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" frameborder="0" allowfullscreen></iframe>`;
    }catch (error) {
        console.error('Error:', error);
        return '';
    }
}




// making a if-else condision to get 10+10(20) video id
async function extractingids(){
    try{
        // Creating empty embed code to store iframe
        const embedcode = ' '

        //condition
        if (i=0, i<10, i++){
            const embed1 = embedLatestVideo(API_KEY, CHANNEL_ID);
            const embed2 = embedLatestVideo(API_KEY, SN_CHANNEL_ID);
            embedcode += embed1+embed2;
        }
        
        // Replacing embed code
        const latestVideosDiv = document.getElementById('latest-videos');
        latestVideosDiv.innerHTML = embedcode;

        //errorcatch
    }catch (error) {
        console.error('Error:', error)
        return ''
    }
}




// Call the function to embed the latest video when the page loads
// window.onload = embedLatestVideo;
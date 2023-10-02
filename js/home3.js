// Diclaring Gloval variable
const API_KEY = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0';
const CHANNEL_ID = 'UCNdvDMh56hgSP4pepXgkwbA';
const SN_CHANNEL_ID = 'UC4TW4FcIA6mdxZAy4cCoHlw';


// Create a function to fetch and embed the latest video
async function embedLatestVideo(channel) {

    // Fetch the latest video from your channel using the YouTube Data API
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel}&order=date&type=video&part=snippet&maxResults=1`);
    const data = await response.json();

    // Extract the video ID
    const latestVideoId = data.items[0].id.videoId;

    // Generate the HTML iframe code for embedding the video
    console.log(`Embedded latest video with ID: ${latestVideoId}`);

    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${latestVideoId}" frameborder="0" allowfullscreen></iframe>`;

    // Replace the content of the 'latest-video' div with the new embed code
    // const latestVideoDiv = document.getElementById('latestvideo');
    // latestVideoDiv.innerHTML = embedCode;

}
const embedCode = '';
for (let i = 0; i < 10; i++) {
    const dnVID = embedLatestVideo(CHANNEL_ID);
    const snVID = embedLatestVideo(SN_CHANNEL_ID);
    embedCode += dnVID + snVID;
};



// Call the function to embed the latest video when the page loads
window.onload = embedLatestVideo;

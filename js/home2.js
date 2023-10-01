
// Embadding youtube latest 10 videos (DANBO DN)

const API_KEY = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0'
const CHANNEL_ID = 'UCNdvDMh56hgSP4pepXgkwbA'
// Create a function to fetch and embed the latest video
async function embedLatestVideo() {
    try {
        // Fetch the latest video from your channel using the YouTube Data API
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&type=video&part=snippet&maxResults=10`);
        const data = await response.json();

        // Extract the video ID
        let embedCode = ' '
        data.items.forEach((item) => {
            let Videoid = item.id.videoId
            embedCode += `<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/${Videoid}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>`
        });

        // Replace the content of the 'latest-video' div with the new embed code
        const latestVideoDiv = document.getElementById('latest-video');
        latestVideoDiv.innerHTML = embedCode;

    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to embed the latest video when the page loads
window.onload = embedLatestVideo;
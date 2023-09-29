
// Embadding youtube latest 10 videos (DANBO DN)
// Create a function to fetch and embed the latest video
async function embedLatestVideo() {
    try {
        // Fetch the latest video from your channel using the YouTube Data API
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${'AIzaSyBWPzFSJqE3LuET_2ccDKoF3rv3PHhXTiM'}&channelId=${'UCNdvDMh56hgSP4pepXgkwbA'}&order=date&type=video&part=snippet&maxResults=10`);
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
        const latestVideoDiv = document.getElementById('latest-dn-video');
        latestVideoDiv.innerHTML = embedCode;

    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to embed the latest video when the page loads
window.onload = embedLatestVideo;
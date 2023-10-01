
        // Set your API keys and channel IDs
        const API_KEY_CHANNEL_1 = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0';
        const API_KEY_CHANNEL_2 = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0';
        const CHANNEL_ID_1 = 'UCNdvDMh56hgSP4pepXgkwbA';
        const CHANNEL_ID_2 = 'UC4TW4FcIA6mdxZAy4cCoHlw';

        // Create functions to fetch and embed the latest videos from both channels
        async function fetchAndEmbedVideos(API_KEY_CHANNEL_1, CHANNEL_ID_1) {
            try {
                // Fetch the latest video from the specified channel using the YouTube Data API
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY_CHANNEL_1}&channelId=${CHANNEL_ID_1}&order=date&type=video&part=snippet&maxResults=1`);
                const data = await response.json();

                // Extract the video ID
                const videoId = data.items[0].id.videoId;

                // Generate the HTML iframe code for embedding the video
                return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
            } catch (error) {
                console.error('Error:', error);
                return '';
            }
        }

        // Create a function to embed alternating videos from both channels
        async function embedAlternatingVideos() {
            try {
                // Initialize an empty string to store the combined HTML iframe code for all videos
                let embedCode = '';

                // Fetch and embed videos from both channels alternately
                for (let i = 0; i < 5; i++) {
                    const embed1 = await fetchAndEmbedVideos(API_KEY_CHANNEL_1, CHANNEL_ID_1);
                    const embed2 = await fetchAndEmbedVideos(API_KEY_CHANNEL_2, CHANNEL_ID_2);
                    embedCode += embed1 + embed2;
                }

                // Replace the content of the 'latest-videos' div with the combined embed code
                const latestVideosDiv = document.getElementById('latest-videos');
                latestVideosDiv.innerHTML = embedCode;

                console.log('Embedded latest videos');
            } catch (error) {
                console.error('Error:', error);
            }
        }

        // Call the function to embed alternating videos when the page loads
        window.onload = embedAlternatingVideos;

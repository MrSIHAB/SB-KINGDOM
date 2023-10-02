import os
import googleapiclient.discovery

# Set your API key and channel ID
API_KEY = 'AIzaSyDOT8j31z0GKvX2E6OAlqi3KfgAPcG0TE0'
CHANNEL_ID = 'UCNdvDMh56hgSP4pepXgkwbA'

# Create a YouTube Data API client
youtube = googleapiclient.discovery.build('youtube', 'v3', developerKey=API_KEY)

# Call the API to get the latest video from your channel
response = youtube.search().list(
    channelId=CHANNEL_ID,
    order='date',
    type='video',
    part='id',
    maxResults=1
).execute()

# Extract the video ID
latest_video_id = response['items'][0]['id']['videoId']

# Generate the HTML iframe code for embedding the video
embed_code = f'<iframe width="560" height="315" src="https://www.youtube.com/embed/{latest_video_id}" frameborder="0" allowfullscreen></iframe>'

# Replace the HTML in your webpage with the new embed code
# You can write this embed_code to your HTML file or update it in your CMS
# Example of writing to an HTML file:
with open('index.html', 'r+') as f:
    content = f.read()
    content = content.replace('<!-- INSERT_YOUTUBE_VIDEO -->', embed_code)
    f.seek(0)
    f.write(content)
    f.truncate()

print(f'Embedded latest video with ID: {latest_video_id}')

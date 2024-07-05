export const getVideoId = (url) => {
    try {
        const urlObj = new URL(url);
        const path = urlObj.pathname;
        const videoId = path.split('/').pop(); 
        return videoId;
    } catch (error) {
        console.error("Error extracting YouTube video ID:", error);
        return null;
    }
};
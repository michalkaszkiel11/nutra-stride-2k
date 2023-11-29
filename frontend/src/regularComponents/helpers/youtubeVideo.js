export const getYouTubeVideoId = (url) => {
    try {
        const videoUrl = new URL(url);
        const videoId = videoUrl.searchParams.get("v");
        return videoId;
    } catch (error) {
        console.error("Error extracting YouTube video ID:", error);
        return null;
    }
};

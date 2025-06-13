import TikTokEmbed from "./TikTokEmbed";

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-black text-white">
      <TikTokEmbed videoId="7511370539814980894" />
      <TikTokEmbed videoId="7501234567890123456" />
      <TikTokEmbed videoId="7498765432109876543" />
    </div>
  );
};

export default VideoGallery;

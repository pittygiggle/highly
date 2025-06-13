import { useEffect, useRef } from "react";

const TikTokEmbed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-[605px] min-w-[325px] mx-auto bg-zinc-800 p-4 rounded-lg shadow-md"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@highly_media/video/7511929050487672094"
        data-video-id="7511929050487672094"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title="@highly_media"
            href="https://www.tiktok.com/@highly_media?refer=embed"
          >
            @highly_media
          </a>{" "}
          Someone in our live was talking about how they’re always getting low views and I couldn’t
          help myself. I had to accept it to. The fact is.. you gotta give people a reason to stick
          around and furthermore.. engage. I’m always posting fast pace content so I get it. It’s
          hard but that’s the game guys. The faster we accept it the faster we get to play the game.
          Let’s grow{" "}
          <a
            title="tiktoklive"
            target="_blank"
            href="https://www.tiktok.com/tag/tiktoklive?refer=embed"
          >
            #tiktoklive
          </a>{" "}
          <a
            title="livehighlights"
            target="_blank"
            href="https://www.tiktok.com/tag/livehighlights?refer=embed"
          >
            #livehighlights
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - 3D Jayyy"
            href="https://www.tiktok.com/music/original-sound-7511929058293205790?refer=embed"
          >
            ♬ original sound - 3D Jayyy
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;

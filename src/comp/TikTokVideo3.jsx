import { useEffect } from 'react';

const TikTokVideo3 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-[605px] min-w-[325px] mx-auto bg-zinc-800 p-4 rounded-lg shadow-md">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@highly_media/video/7507120548766403870"
        data-video-id="7507120548766403870"
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="@highly_media"
            href="https://www.tiktok.com/@highly_media?refer=embed"
          >
            @highly_media
          </a>{' '}
          Our channel is growing.{' '}
          <a
            title="#3d"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/3d?refer=embed"
          >
            #3d
          </a>{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="♬ original sound - 3D Jayyy"
            href="https://www.tiktok.com/music/original-sound-7507120545163381534?refer=embed"
          >
            ♬ original sound - 3D Jayyy
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokVideo3;

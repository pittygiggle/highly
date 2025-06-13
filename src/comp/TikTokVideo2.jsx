import { useEffect } from 'react';

const TikTokVideo2 = () => {
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
        cite="https://www.tiktok.com/@highly_media/video/7511370539814980894"
        data-video-id="7511370539814980894"
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
          Quality over everything. The Neweer 22” magic arm mount from TikTok shop. Hands down my favorite mount.
          <a
            title="#neweer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/neweer?refer=embed"
          >
            #neweer
          </a>{' '}
          <a
            title="#phonemount"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/phonemount?refer=embed"
          >
            #phonemount
          </a>{' '}
          <a
            title="#Tiktokshop"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/tiktokshop?refer=embed"
          >
            #Tiktokshop
          </a>{' '}
          <a
            title="#ttshop"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/ttshop?refer=embed"
          >
            #ttshop
          </a>{' '}
          <a
            title="#ttfinds"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/tag/ttfinds?refer=embed"
          >
            #ttfinds
          </a>{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="♬ Write This Down (Instrumental) - SoulChef"
            href="https://www.tiktok.com/music/Write-This-Down-Instrumental-6988190007181887489?refer=embed"
          >
            ♬ Write This Down (Instrumental) - SoulChef
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokVideo2;

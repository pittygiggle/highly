import { useEffect } from 'react';
import kim from '../assets/kim.png'
import danny from '../assets/dannyphantom2.png'
import darian from '../assets/darian.png'
import highlyvid from '../assets/CapCut Materials/v15044gf0000d14prknog65tgf7nfis0.mp4'

export default function MeetTheCreators() {
  useEffect(() => {
    const videos = document.querySelectorAll('video');

    videos.forEach((video) => {
      video.addEventListener('ended', () => {
        video.pause();
        video.currentTime = 0;
        video.load(); // This resets and shows the poster again
      });
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener('ended', () => {});
      });
    };
  }, []);

  return (
    <section className="bg-zinc-800 p-6 rounded-lg shadow-md mt-10">
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video 1 */}
        <div className="relative pb-[150%] bg-black rounded-lg overflow-hidden shadow-inner">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" 
            controls 
            preload="metadata"
            poster={danny}
          >
            <source src={highlyvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 2 */}
        <div className="relative pb-[150%] bg-black rounded-lg overflow-hidden shadow-inner">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" 
            controls 
            preload="metadata"
            poster={kim}
          >
            <source src="/path-to-video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video 3 */}
        <div className="relative pb-[150%] bg-black rounded-lg overflow-hidden shadow-inner">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" 
            controls 
            preload="metadata"
            poster={darian}
          >
            <source src={highlyvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { particlesOptions } from "../particlesConfig";

export default function ParticlesBackground({ id = "particles-js" }) {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS(id, particlesOptions);
    } else {
      console.error("particlesJS not loaded");
    }
  }, [id]);

  return (
    <div
      id={id}
      className="absolute  h-80 z-0"
      style={{width: '100%', pointerEvents: 'none'}}
      
    ></div>
  );
}

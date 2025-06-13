// src/App.jsx
import {React, useEffect } from 'react';
import logo2 from './assets/logo2.png';
import lvl1 from './assets/lvl1.png';
import highlyindex from './assets/highlyindex.png';
import sevenpoint from './assets/sevenpoint.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import gratify from './assets/gratify.png'
import ParticlesBackground from "./comp/ParticlesBackground";
import BrandsSlider from './comp/BrandsSlider';
import AnimatedCounter from './comp/AnimatedCounter';
import Footer from './comp/Footer';
import kim from './assets/kim.png'
import danny from './assets/dannyphantom2.png'
import darian from './assets/darian.png'
import highlyvid from './assets/CapCut Materials/v15044gf0000d14prknog65tgf7nfis0.mp4'
import MeetTheCreators from './comp/MeetTheCreators';
const App = () => {

  
  return (
    <div className="heroimg h-100 min-h-screen bg-black text-white font-sans" >
      <header className="p-6  bg-black border-b border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center  space-x-3">
            <img src={logo2} alt="Highly Logo" className="w-10 h-10 bg-transparent rounded-lg" />
            <h1 className="text-xl font-myfont ">Highly Media</h1>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#features" className="hover:text-highly-accent transition">Shop</a>
            <a href="#features" className="hover:text-highly-accent transition">Features</a>
            <a href="#features" className="hover:text-highly-accent transition">Pricing</a>
            <a href="#about" className="hover:text-highly-accent transition">About</a>
            <a href="#contact" className="hover:text-highly-accent transition">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section className=" px-6 text-center  flex justify-center items-end" style={{height: '60vh'}}>
    <div className="relative z-10">
        

         <div className=' mt-0'>
            <button className="bg-highly-glow hover:bg-highly-accent  text-black z-10 px-8 py-3 mb-8 rounded-full font-semibold shadow-lg transition-all" style={{marginTop: '-20px'}}>
            Join the Creator Network </button>
          </div>
       
      </div>
</section>


        


        <section
  id="about"
  className="relative py-16 px-6 text-center bg-black border-t border-zinc-800 overflow-hidden"  >
<ParticlesBackground />
  <div className="max-w-3xl mx-auto">
 
    <p className="text-zinc-100 text-lg mb-6">
      We’re a creative-first media company that believes our culture deserves premium design, intelligent tools, and bold visibility. Our mission is to empower brands through design, tech, and content creation. You dont know need a whole team to build these days but you do need a support system. Thats the problem we solved. <br></br>Welcome Creators.
    </p>
    
    <div className="flex justify-center z-10 gap-4 mt-8">
  {[
    {
      href: "https://www.tiktok.com/@yourprofile",
      label: "TikTok",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" fill="currentColor" className="w-7 h-7">
          <path d="M17.31 4.29a5.17 5.17 0 01-1.63-.34v6.69a4.77 4.77 0 11-4.77-4.77c.16 0 .31.01.46.03v2.06a2.72 2.72 0 102.25 2.66V0h2.45a5.11 5.11 0 002.61 4.29 5.1 5.1 0 001.33.44v2.36a7.48 7.48 0 01-2.7-.8z" />
        </svg>
      )
    },
    {
      href: "https://facebook.com/yourprofile",
      label: "Facebook",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M22.68 0H1.32A1.32 1.32 0 000 1.32v21.36A1.32 1.32 0 001.32 24h11.5v-9.29H9.69V11h3.13V8.41c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.46.1 2.79.14v3.23h-1.91c-1.5 0-1.8.71-1.8 1.76V11h3.6l-.47 3.71h-3.13V24h6.13A1.32 1.32 0 0024 22.68V1.32A1.32 1.32 0 0022.68 0z" />
        </svg>
      )
    },
    {
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z"/>
        </svg>
      )
    },
    {
      href: "https://x.com/yourprofile",
      label: "X",
      svg: (
        <svg className="w-6 h-6 fill-highly-accent hover:fill-highly-glow transition" viewBox="0 0 24 24">
          <path d="M24 4.6a10 10 0 01-2.8.8 5 5 0 002.2-2.7 10 10 0 01-3.1 1.2 5 5 0 00-8.5 4.6 14 14 0 01-10-5 5 5 0 001.5 6.6 5 5 0 01-2.2-.6v.1a5 5 0 004 4.9 5 5 0 01-2.2.1 5 5 0 004.7 3.5A10 10 0 012 19.5a14 14 0 007.5 2.2c9 0 14-7.5 14-14v-.6A10 10 0 0024 4.6z"/>
        </svg>
      )
    },
    {
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2 8.75h5.96V22H2zm7.69 0h5.71v1.81h.08a6.26 6.26 0 015.6-3c6 0 7.1 4 7.1 9.14V22h-5.97v-6.19c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.28V22H9.69z"/>
        </svg>
      )
    },
    {
      href: "https://youtube.com/@yourchannel",
      label: "YouTube",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5 6.2a2.8 2.8 0 00-2-2c-1.8-.5-9-.5-9-.5s-7.2 0-9 .5a2.8 2.8 0 00-2 2c-.5 1.8-.5 5.5-.5 5.5s0 3.7.5 5.5a2.8 2.8 0 002 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a2.8 2.8 0 002-2c.5-1.8.5-5.5.5-5.5s0-3.7-.5-5.5zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
        </svg>
      )
    }
  ].map(({ href, label, svg }) => (
    <a
      key={label}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-highly-accent text-highly-accent hover:text-black transition"
    >
      {svg}
    </a>
  ))}
</div>

  </div>
</section>

<section id="features" className="pt-3 pb-3 bg-zinc-900">
          
  <div className="max-w-5xl mt-4 pb-4 mx-auto px-2 grid md:grid-cols-4 gap-8">
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#00F0D9] transition">
      <h3 className="text-xl font-semibold mb-2 text-highly-accent">Social Media Monetization</h3>
      <p className="text-zinc-400">Learn how to turn views into income. We cover platform monetization, affiliate strategies, and brand deals that actually pay.</p>
    </div>
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#00F0D9] transition">
      <h3 className="text-xl font-semibold mb-2 text-highly-accent">Build with AI</h3>
      <p className="text-zinc-400">Use AI and beginner-friendly code to create and launch digital products — fast. No fluff, no experience needed.</p>
    </div>
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#00F0D9] transition">
      <h3 className="text-xl font-semibold mb-2 text-highly-accent">Product Campaigns</h3>
      <p className="text-zinc-400">We build custom campaign sites for creators and brands — fast-loading, mobile-first, and made to convert.</p>
    </div>
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#00F0D9] transition">
      <h3 className="text-xl font-semibold mb-2 text-highly-accent">Content Management</h3>
      <p className="text-zinc-400">Done-for-you content planning, posting, and brand management — built to grow while you focus on the real work.</p>
    </div>
  </div>
  
</section>

<section id="showcase" className="py-24 px-6 bg-black border-t  border-zinc-800">
  <div className="max-w-6xl mx-auto text-center">
        <AnimatedCounter targetNumber={5451} duration={2500}/>
    <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
      Active members ranging from solo start ups to the big brands we all know and love. Join a community of like minded individuals to bring your ideas to life.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-highly-glow transition-shadow">
        <img src={sevenpoint} alt="Greenhouse App UI" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-xl  font-semibold mb-2">Seven Point</h3>
          <p className="text-zinc-400 text-sm">The best store that was ever created.</p>
          <a href="#">Learn More</a>
        </div>

       
      </div>
      {/* Project 1 */}
      <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg  hover:shadow-highly-glow transition-shadow">
        <img src={gratify} alt="Bloom Collective Website" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-xl  font-semibold mb-2">Gratify</h3>
          <p className="text-zinc-400 text-sm">Hybrid SASS for increasing employee moral.</p>
          <a href="#">Learn More</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-highly-glow transition-shadow">
        <img src={highlyindex} alt="Greenhouse App UI" className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-xl  font-semibold mb-2">Highly Index</h3>
          <p className="text-zinc-400 text-sm">Its like leafly.. but better!</p>
          <a href="#">Learn More</a>
        </div>
      </div>

      {/* Project 3 */}
      
       
    </div>
    <BrandsSlider />
  </div>
</section>



         <section id="testimonials" className="py-24 px-6 text-center worldbg border-t border-zinc-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold bg-highly-accent2 drop-shadow-xl rounded-xl mb-10 font-myfont">What People Are Saying</h2>

        {/* <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  className="w-full mt-20   px-4"

>
  {[{
    img: "/src/assets/moc4.png",
    quote: "Highly helped us refine our visual identity and build a site that actually converts.",
    name: "Bloom Collective"
  }, {
    img: "/src/assets/moc2.png",
    quote: "Their affiliate picks feel like insider secrets. It’s all stuff we really use now.",
    name: "Greenhouse Studio"
  }, {
    img: "/src/assets/moc3.png",
    quote: "From content to code, they understood our brand and brought it to life fast.",
    name: "710 Digital"
  }].map((item, idx) => (
    <SwiperSlide key={idx}>
      <div className="max-w-2xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-highly-accent shadow-md">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]" />
          ))}
        </div>

        <p className="text-zinc-300 italic text-center leading-relaxed max-w-lg mx-auto">
          “{item.quote}”
        </p>
        <p className="mt-6 text-highly-accent font-semibold text-center">— {item.name}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper> */}

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
  {Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className="bg-gradient-to-br from-[#00ffd5]/10 to-[#00bfff]/10 border border-[#00ffd5]/20 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-[#00ffd5]/30 transition-all duration-300"
    >
      <p className="text-sm italic text-[#b0fdfd]">“Highly Media helped us launch our brand in 2 weeks — with style.”</p>
      <h4 className="mt-4 text-white font-semibold">– Alicia P., Brand Owner</h4>
    </div>
  ))}
</div>


    </section>
    <section className="mt-24 bg-zinc-900 rounded-2xl p-10 shadow-inner border border-zinc-700 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Get Our Free Brand Launch Kit
  </h2>
  <p className="text-zinc-400 max-w-xl mx-auto mb-8">
    A curated set of tools, templates, and tips to help you launch faster — from naming to visuals. No strings attached.
  </p>
  
  <div className="flex justify-center mb-8">
    <img 
  src={lvl1} 
  alt="Free Brand Kit" 
  className="w-60 md:w-80 rounded-xl border border-black shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
/>

  </div>

  <button className="bg-black hover:bg-highly-accent  border-white text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300">
    Download Free Kit
  </button>
</section>


<section className="bg-zinc-800 p-6 rounded-lg shadow-md mt-10">
  <h2 className=" text-2xl  text-center mb-6">
    Meet the Creators
  </h2>

  <MeetTheCreators />
</section>





        <section id="stay-in-touch" className="w-full  py-24 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    

    {/* Right: Form */}
    <div className="flex-1 w-full networkbg bg-zinc-800 p-10 rounded-2xl shadow-inner border border-zinc-700">
      <h2 className="text-4xl font-bold mb-4 text-white">Stay in Touch</h2>
      <p className="text-zinc-400 mb-8">
        Subscribe for updates or reach out to us directly — we're here to help grow your brand.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thanks for getting in touch!');
        }}
        className="space-y-4"
      >
        <input
          type="email"
          required
          placeholder="Your email address"
          className="w-full rounded-full px-4 py-3 text-black focus:outline-none shadow-inner"
        />
        <textarea
          rows="4"
          placeholder="Your message (optional)"
          className="w-full rounded-xl px-4 py-3 text-black focus:outline-none shadow-inner"
        />
        <button
          type="submit"
          className="w-full bg-zinc-400 hover:bg-highly-accent text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>

  </div>
</section>



      </main>

      <Footer />
    </div>
  );
};

export default App;

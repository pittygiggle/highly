import logo2 from '../assets/logo2.png'


const fakeBrands = [
  {
    name: 'Pine Labs',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-lime-500 text-white font-bold text-sm">
        🌲
      </div>
    ),
  },
  {
    name: 'Golden Co.',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 rounded bg-yellow-400 text-black font-semibold text-xs tracking-wide">
        GOLD
      </div>
    ),
  },
  {
    name: 'Zenith Farms',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-700 text-white text-xs font-bold uppercase">
        ZF
      </div>
    ),
  },
  {
    name: 'Highline',
    icon: (
      <svg className="h-12 w-12 text-white" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="6" />
        <path
          d="M20 80 L50 30 L80 80"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: 'Cloud 9',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-400 text-white font-bold text-sm">
        ☁️
      </div>
    ),
  },
  {
    name: 'Midnight Co.',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-gray-900 text-white text-xs rounded shadow-inner">
        M🌙
      </div>
    ),
  },
  {
    name: 'Cactus Labs',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-emerald-600 text-white text-xs rounded-full font-bold">
        🌵
      </div>
    ),
  },
  {
    name: 'FireFly',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-orange-500 text-white text-xs rounded-full font-bold">
        🔥
      </div>
    ),
  },
  {
    name: 'Nimbus Extracts',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-indigo-500 text-white text-xs font-semibold rounded-full">
        N☁️
      </div>
    ),
  },
  {
    name: 'Echo Roots',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-amber-800 text-white font-semibold rounded-full">
        🌱
      </div>
    ),
  },
  {
    name: 'Crystal Co.',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-cyan-300 text-black font-bold rounded">
        ❄️
      </div>
    ),
  },
  {
    name: 'Volt Labs',
    icon: (
      <div className="flex items-center justify-center h-12 w-12 bg-yellow-300 text-black font-bold rounded-full">
        ⚡
      </div>
    ),
  },
];



export default function BrandSlider() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-black py-8">
      <div className="flex animate-slide gap-8 min-w-full">
        {[...fakeBrands, ...fakeBrands].map((brand, index) => (
          <div
            key={index}
            title={brand.name}
            className="opacity-80 hover:opacity-100 transition transform hover:scale-105"
          >
            {brand.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

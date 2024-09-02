import Hero from "./Hero";


export default function Home() {
  return (
    <>
      <div className="w-full h-[120px] bg-gradient-to-r from-[#009CD4] to-[#00BAF2] relative">
        <svg width="1286" height="629" viewBox="0 0 1286 629" fill="none" xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-1/2 -right-1/4"
        >
          <ellipse cx="454.5" cy="374" rx="454.5" ry="255" fill="#0393CB" />
          <ellipse cx="760" cy="295" rx="526" ry="295" fill="#009CD4" />
        </svg>

      </div>
      <Hero />
    </>
  );
}



import DotGrid from "./DotGrid";

function Background({ children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background layer */}
      <div className="absolute inset-0 -z-10 bg-black">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#593592"
          activeColor="#db0000"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default Background;

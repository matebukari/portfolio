import DotGrid from "./DotGrid";

function Background({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black z-0" />
        <div className="absolute inset-0 z-10">
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
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default Background;

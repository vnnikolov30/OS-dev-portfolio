import React from "react";
import DitherBg from "./components/DitherBg";
import { Dock, Navbar, Welcome } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Browser, Terminal } from "#windows";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      {/* BG */}
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
        <DitherBg
          waveColor={[0.4, 0.6, 0.3]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={9}
          waveAmplitude={0.08}
          waveFrequency={3}
          waveSpeed={0.06}
        />
      </div>

      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Browser />
      
    </main>
  );
}

export default App;

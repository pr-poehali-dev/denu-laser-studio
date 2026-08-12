import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import { videos } from "@/components/denu/constants";

export default function VideoCarousel() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [active]);

  const prev = () => setActive((a) => (a - 1 + videos.length) % videos.length);
  const next = () => setActive((a) => (a + 1) % videos.length);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <div className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden bg-black shadow-lg aspect-[9/16]">
        <video
          ref={videoRef}
          src={videos[active]}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
        />
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition">
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition">
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
      <div className="flex gap-2">
        {videos.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-denu-pink w-5" : "bg-denu-pink/30"}`} />
        ))}
      </div>
    </div>
  );
}

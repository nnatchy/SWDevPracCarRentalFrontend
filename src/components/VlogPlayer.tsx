"use client";
import { useEffect, useRef, useState } from "react";
import { useWindowListener } from "../hooks/useWindowListener";

export function VlogPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // alert('width is ' + vdoRef.current?.videoWidth);
    if (isPlaying) {
      // alert(' Play Vdo ')
      vdoRef.current?.play();
    } else {
      // alert(' Pause Vdo ')
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  useWindowListener("resize", (e) => {alert('Window Width is ' + (e.target as Window).innerWidth)});

  return (
    <div>
      <video
        className="w-[40%]"
        src={vdoSrc}
        ref={vdoRef}
        controls
        loop
        muted
      />
    </div>
  );
}

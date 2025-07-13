"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isPlaying) {
    return (
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${
               "/jummai-thumbnail.png?height=400&width=600"
            })`,
          }}
        >
          <div
            className="absolute inset-0 bg-black/40 flex items-center justify-center"
            onClick={handlePlay}
            style={{ cursor: "pointer" }}
            >
            </div>

          {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
                onClick={handlePlay}
                size="lg"
                className="bg-transparent border-none text-transparent hover:bg-transparent p-6"
            >
                <i className="bi bi-play-fill text-3xl "></i>
            </Button>
            </div> */}

        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
      {/* {video.provider === "vimeo" ? (
        <iframe
          src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          src={`https://stream.mux.com/${video.muxPlaybackId}.m3u8`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )} */}

            <iframe
        src="https://www.youtube.com/embed/XZAVnRdLCjI?autoplay=1&rel=0"
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        ></iframe>

    </div>
  );
}
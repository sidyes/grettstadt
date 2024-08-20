interface VideoPlayerProps {
    src: string;
    alt: string;
  }
  
  export default function VideoPlayer({ src, alt }: VideoPlayerProps) {
    return (
      <div className="video-container my-4">
        <video controls className="w-full rounded-lg shadow-md">
          <source src={src} type="video/mp4" />
          {alt}
        </video>
      </div>
    );
  }
  
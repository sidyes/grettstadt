import Image from "next/image";

interface FloorPlanProps {
  src: string;
  alt: string;
}

export default function FloorPlan({ src, alt }: FloorPlanProps) {
  return (
    <div className="floor-plan-container my-4">
      <Image
        src={src}
        alt={alt}
        width={800} // Passe die Größe entsprechend an
        height={600}
        className="rounded-lg shadow-md"
      />
    </div>
  );
}

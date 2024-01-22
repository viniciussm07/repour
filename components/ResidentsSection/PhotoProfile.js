import React from "react";
import Image from "next/image";

export default function PhotoProfile({ profileImage }) {
  return (
    <div>
      <Image
      className="rounded-full w-40 p-1 m-8"
        src={profileImage}
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}

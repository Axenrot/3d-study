"use client";
import { Html } from "@react-three/drei";

const Load = () => {
  return (
    <Html>
      <div className="flex w-full justify-center items-center h-full">
        <span className="w-20 h-20 border-opacity-20 border-t-2 border-blue-500 rounded-full animate-spin" />{" "}
      </div>
    </Html>
  );
};

export default Load;

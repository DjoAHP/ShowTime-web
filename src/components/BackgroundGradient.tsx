import { MeshGradient } from "@paper-design/shaders-react";

export default function BackgroundGradient() {
  return (
    <MeshGradient
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        pointerEvents: "none",
      }}
      colors={["#0c1732", "#07232c", "#040c10", "#08261d"]}
      distortion={0.8}
      swirl={0.44}
      grainMixer={0}
      grainOverlay={0}
      speed={0.1}
    />
  );
}

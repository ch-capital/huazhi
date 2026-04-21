import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: "#0a0f1c" },
        particles: {
          number: { value: 60 },
          color: { value: "#4f9cff" },
          links: {
            enable: true,
            distance: 150,
            color: "#4f9cff",
            opacity: 0.3
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 }
        }
      }}
    />
  );
}

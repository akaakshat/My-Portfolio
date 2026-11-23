"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

function SkillNodes({ items, selected, onSelectionChange, reducedMotion }) {
  const orbit = useRef(null);
  const nodes = useMemo(() => items.map((item, index) => {
    const angle = (index / items.length) * Math.PI * 2;
    const radius = index % 2 === 0 ? 2.05 : 1.45;
    return { ...item, position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.72, (index % 3 - 1) * 0.35], index };
  }), [items]);

  useFrame((state, delta) => {
    if (!orbit.current || reducedMotion) return;
    orbit.current.rotation.y += delta * 0.055;
    orbit.current.rotation.x = THREE.MathUtils.damp(orbit.current.rotation.x, state.pointer.y * 0.08, 3, delta);
  });

  return (
    <group ref={orbit}>
      <mesh>
        <icosahedronGeometry args={[0.48, 2]} />
        <meshPhysicalMaterial color="#07121d" metalness={0.7} roughness={0.25} clearcoat={1} emissive="#0b3852" emissiveIntensity={0.3} />
      </mesh>
      {nodes.map((node) => (
        <group key={node.name} position={node.position}>
          <mesh onPointerOver={() => onSelectionChange(node.name)} onPointerOut={() => onSelectionChange(null)} onClick={() => onSelectionChange(selected === node.name ? null : node.name)}>
            <icosahedronGeometry args={[0.27, 1]} />
            <meshPhysicalMaterial color={selected === node.name ? "#9be9ff" : node.color} metalness={0.72} roughness={0.22} clearcoat={0.9} />
          </mesh>
        </group>
      ))}
      <mesh rotation={[0.3, 0.2, -0.38]}>
        <torusGeometry args={[1.72, 0.008, 8, 120]} />
        <meshBasicMaterial color="#42d7de" transparent opacity={0.46} />
      </mesh>
    </group>
  );
}

export default function SkillOrbit({ items, reducedMotion = false }) {
  const [selected, setSelected] = useState(null);
  return (
    <div className="orbit-canvas">
      <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 6.4], fov: 42 }} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 4, 4]} intensity={6} color="#65dfff" />
        <pointLight position={[-3, -3, 2]} intensity={4} color="#8f72ff" />
        <SkillNodes items={items} selected={selected} onSelectionChange={setSelected} reducedMotion={reducedMotion} />
        <Stars radius={20} depth={8} count={130} factor={2} fade speed={reducedMotion ? 0 : 0.08} />
      </Canvas>
      <div className="orbit-tooltip" aria-live="polite">
        <span>{selected ? "TECHNOLOGY" : "INTERACTIVE ORBIT"}</span>
        <strong>{selected || "Explore the toolkit"}</strong>
      </div>
    </div>
  );
}

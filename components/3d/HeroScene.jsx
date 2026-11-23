"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Torus } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function CameraTransition({ reducedMotion }) {
  const { camera } = useThree();

  useEffect(() => {
    if (reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(camera.position, {
        z: 6.6,
        y: 0.18,
        ease: "none",
        scrollTrigger: { trigger: "#about", start: "top bottom", end: "top top", scrub: 1 },
      });
    });
    return () => context.revert();
  }, [camera, reducedMotion]);

  return null;
}

function Planet() {
  const group = useRef(null);
  const shell = useRef(null);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!group.current || !shell.current) return;
    group.current.rotation.y += delta * 0.035;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.12, 3, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -pointer.x * 0.1, 3, delta);
    shell.current.rotation.y -= delta * 0.018;
    shell.current.rotation.x += delta * 0.012;
    shell.current.material.emissiveIntensity = 0.32 + Math.sin(state.clock.elapsedTime * 0.45) * 0.08;
  });

  return (
    <group ref={group} position={[2.45, -0.02, 0]}>
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.46, 5]} />
        <meshPhysicalMaterial color="#07121f" metalness={0.78} roughness={0.26} clearcoat={0.95} clearcoatRoughness={0.16} emissive="#092f4e" emissiveIntensity={0.32} />
      </mesh>
      <mesh scale={1.015}>
        <icosahedronGeometry args={[1.46, 4]} />
        <meshBasicMaterial color="#80dfff" wireframe transparent opacity={0.12} />
      </mesh>
      <Torus args={[2.06, 0.009, 12, 180]} rotation={[1.18, 0.26, -0.25]}>
        <meshBasicMaterial color="#75d7ff" transparent opacity={0.5} />
      </Torus>
      <Torus args={[2.24, 0.004, 8, 180]} rotation={[1.18, 0.26, -0.25]}>
        <meshBasicMaterial color="#a48cff" transparent opacity={0.32} />
      </Torus>
      <pointLight color="#40c9ff" intensity={18} distance={5} position={[-1.3, 0.65, 1.6]} />
      <mesh position={[-1.15, 0.88, 1.08]} scale={0.08}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#c6f5ff" metalness={0.9} roughness={0.13} emissive="#2584a8" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

function Dust() {
  const points = useRef(null);
  const positions = useMemo(() => {
    const values = new Float32Array(900 * 3);
    for (let index = 0; index < 900; index += 1) {
      values[index * 3] = (Math.sin(index * 127.1) * 0.5 + 0.5 - 0.5) * 15;
      values[index * 3 + 1] = (Math.sin(index * 311.7) * 0.5 + 0.5 - 0.5) * 9;
      values[index * 3 + 2] = (Math.sin(index * 74.7) * 0.5 + 0.5 - 0.5) * 8 - 1;
    }
    return values;
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.008;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#99c9e8" size={0.014} transparent opacity={0.52} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Satellites({ reducedMotion }) {
  const first = useRef(null);
  const second = useRef(null);
  useFrame((state) => {
    const time = reducedMotion ? 0 : state.clock.elapsedTime;
    if (first.current) first.current.position.y = Math.sin(time * 0.6) * 0.12 + 1.05;
    if (second.current) second.current.position.y = Math.cos(time * 0.42) * 0.16 - 1.18;
  });
  return (
    <>
      <Float speed={reducedMotion ? 0 : 0.45} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh ref={first} position={[0.75, 1.05, -0.6]} rotation={[0.4, 0.4, 0.2]}>
          <octahedronGeometry args={[0.24, 0]} />
          <meshPhysicalMaterial color="#b7aaff" metalness={0.82} roughness={0.2} clearcoat={1} />
        </mesh>
      </Float>
      <Float speed={reducedMotion ? 0 : 0.35} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={second} position={[4.45, -1.18, 0.2]} rotation={[0.2, 0.35, 0.6]}>
          <boxGeometry args={[0.23, 0.23, 0.23]} />
          <meshPhysicalMaterial color="#73dbd2" metalness={0.86} roughness={0.18} clearcoat={1} />
        </mesh>
      </Float>
    </>
  );
}

export default function HeroScene({ reducedMotion = false }) {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.7], fov: 40 }} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} color="#a4c6ff" />
        <directionalLight position={[-4, 5, 6]} intensity={2.2} color="#d9f3ff" />
        <pointLight position={[4, 2, 4]} intensity={3.5} color="#5638bd" />
        <CameraTransition reducedMotion={reducedMotion} />
        <Planet />
        <Dust />
        <Satellites reducedMotion={reducedMotion} />
        <Stars radius={32} depth={22} count={500} factor={2.5} saturation={0.2} fade speed={reducedMotion ? 0 : 0.12} />
      </Suspense>
    </Canvas>
  );
}

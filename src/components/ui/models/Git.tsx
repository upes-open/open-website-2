'use client';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import type { Group, Mesh, Material } from 'three';

type GLTF = {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};
type GLTFResult = GLTF & {
  nodes: { Curve003: Mesh };
  materials: { 'SVGMat.006': Material };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/git.glb',
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve003.geometry}
        material={materials['SVGMat.006']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={16.686}
      />
    </group>
  );
}

function StaticModel() {
  return (
    <group rotation={[-0.6, 0.5, 0.3]} position={[0, 0.4, 0]} scale={1.8}>
      <Model />
    </group>
  );
}

useGLTF.preload('/models/git.glb');

export default function Git3D() {
  function Rotating({ children }: { children: React.ReactNode }) {
    const ref = React.useRef<Group>(null);
    useFrame((_, delta) => {
      if (ref.current) ref.current.rotation.z += delta * 0.07;
    });
    return <group ref={ref}>{children}</group>;
  }

  return (
    <div className='h-full w-full'>
      <Canvas
        className='w-full h-full'
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 3], fov: 50 }}
      >
        <ambientLight intensity={1.0} />
        <hemisphereLight
          color={'#ffffff'}
          groundColor={'#b3b3b3'}
          intensity={0.7}
        />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <pointLight position={[10, 10, 10]} intensity={0.9} />
        <React.Suspense fallback={null}>
          <Rotating>
            <StaticModel />
          </Rotating>
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

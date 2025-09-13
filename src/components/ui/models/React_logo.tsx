'use client';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    'React-Logo_Material002_0': THREE.Mesh;
  };
  materials: {
    'Material.002': THREE.Material;
  };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/react_logo.glb',
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, 0]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  );
}

function RotatingModel() {
  const meshRef = React.useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      rotation={[-0.087, 0, -0.2]}
      position={[-0.2, -0.18, 0]}
      scale={0.8}
    >
      <Center>
        <Model />
      </Center>
    </group>
  );
}

useGLTF.preload('/models/react_logo.glb');

export default function ReactLogo3D() {
  return (
    <div className='h-full w-full'>
      <Canvas
        className='w-full h-full'
        dpr={[1, 2]}
        camera={{ position: [-3, 1, 4.2], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <React.Suspense fallback={null}>
          <RotatingModel />
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

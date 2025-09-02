'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
  };
  materials: {
    'black.001': THREE.Material;
    'white.001': THREE.Material;
    'orange.001': THREE.Material;
  };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/linux.glb',
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={materials['black.001']} />
      <mesh
        geometry={nodes.Mesh_1.geometry}
        material={materials['white.001']}
      />
      <mesh
        geometry={nodes.Mesh_2.geometry}
        material={materials['orange.001']}
      />
    </group>
  );
}

useGLTF.preload('/models/linux.glb');

export default function Linux3D() {
  return (
    <div className='w-full h-full max-w-full max-h-full'>
      <Canvas
        className='w-full h-full'
        dpr={[1, 2]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 3]} intensity={1.0} />
        <directionalLight position={[-2, -2, 3]} intensity={0.5} />
        <pointLight position={[0, 0, 2]} intensity={0.6} color='#ffffff' />
        <React.Suspense fallback={null}>
          <group
            rotation={[-0.25, 0.5, 0.4]}
            position={[-0.8, 0.3, -1]}
            scale={2}
          >
            <Model />
          </group>
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

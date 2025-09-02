'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Sphere001: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.Material;
  };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/docker.glb',
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials.Material}
        scale={0.599}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        scale={0.095}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={0.095}
      />
    </group>
  );
}

useGLTF.preload('/models/docker.glb');

export default function Docker3D() {
  return (
    <div className='h-full w-full'>
      <Canvas
        className='w-full h-full'
        dpr={[1, 2]}
        camera={{ position: [0, 1, 3], fov: 50 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <React.Suspense fallback={null}>
          <group
            rotation={[-0.2, 0.1, 0.3]}
            position={[0.1, -0.1, 0]}
            scale={1.5}
          >
            <Model />
          </group>
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={true} />
      </Canvas>
    </div>
  );
}

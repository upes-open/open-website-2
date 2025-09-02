'use client';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Environment } from '@react-three/drei';
import type { Group, Mesh, Material } from 'three';

type GLTF = {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};
type GLTFResult = GLTF & {
  nodes: {
    Object_4: Mesh;
    Object_5: Mesh;
  };
  materials: {
    glossy_putih: Material;
    github: Material;
  };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/github_logo.glb',
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[-0.055, 2.945, 6.336]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={40}
      >
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.glossy_putih}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.github} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/github_logo.glb');

export default function GithubLogo3D() {
  function Rotating({ children }: { children: React.ReactNode }) {
    const ref = React.useRef<Group>(null);
    useFrame((_, delta) => {
      if (ref.current) ref.current.rotation.z += delta * 0.1;
    });
    return <group ref={ref}>{children}</group>;
  }

  return (
    <div className='h-full w-full'>
      <Canvas
        className='w-full h-full'
        dpr={[1, 2]}
        camera={{ position: [0, 1, 2], fov: 50 }}
        gl={{ toneMappingExposure: 1.15 }}
      >
        <ambientLight intensity={0.4} />
        <hemisphereLight
          color={'#ffffff'}
          groundColor={'#ffffff'}
          intensity={0.4}
        />
        <directionalLight position={[8, 8, 8]} intensity={0.2} />
        <directionalLight position={[-2, -7, 7]} intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={0.35} />
        <Environment preset='studio' />
        <React.Suspense fallback={null}>
          <group rotation={[-0.2, -0.1, 0]} position={[0, -0.03, 0]} scale={18}>
            <Rotating>
              <Center>
                <group scale={0.0353}>
                  <Model />
                </group>
              </Center>
            </Rotating>
          </group>
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

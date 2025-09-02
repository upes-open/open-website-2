'use client';
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center } from '@react-three/drei';
import type { Group, Mesh, Material } from 'three';

type GLTF = {
  nodes: Record<string, Mesh>;
  materials: Record<string, Material>;
};
type GLTFResult = GLTF & {
  nodes: {
    Cylinder_Material002_0: Mesh;
    Cylinder001_Material001_0: Mesh;
    Cylinder002_Material003_0: Mesh;
    Sphere_Material004_0: Mesh;
    Sphere001_Material005_0: Mesh;
  };
  materials: {
    'Material.002': Material;
    'Material.001': Material;
    'Material.003': Material;
    'Material.004': Material;
    'Material.005': Material;
  };
};

type ModelProps = ThreeElements['group'];

export function Model(props: ModelProps) {
  const { nodes } = useGLTF('/models/figma.glb') as unknown as GLTFResult;

  const createMaterial = (color: string) => (
    <meshStandardMaterial color={color} metalness={0.1} roughness={0.3} />
  );

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder_Material002_0.geometry}>
        {createMaterial('#F24E1E')}
      </mesh>
      <mesh geometry={nodes.Cylinder001_Material001_0.geometry}>
        {createMaterial('#A259FF')}
      </mesh>
      <mesh geometry={nodes.Cylinder002_Material003_0.geometry}>
        {createMaterial('#1ABCFE')}
      </mesh>
      <mesh geometry={nodes.Sphere_Material004_0.geometry}>
        {createMaterial('#0ACF83')}
      </mesh>
      <mesh geometry={nodes.Sphere001_Material005_0.geometry}>
        {createMaterial('#FF7262')}
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/figma.glb');

export default function Figma3D() {
  function Rotating({ children }: { children: React.ReactNode }) {
    const ref = React.useRef<Group>(null);
    useFrame((_, delta) => {
      if (ref.current) ref.current.rotation.y += delta * 0.08;
    });
    return <group ref={ref}>{children}</group>;
  }
  return (
    <div className='w-full h-full '>
      <Canvas
        className='w-full h-full'
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 3]} intensity={1.0} />
        <directionalLight position={[-2, -2, 3]} intensity={0.5} />
        <pointLight position={[0, 0, 2]} intensity={0.6} color='#ffffff' />
        <React.Suspense fallback={null}>
          <Center>
            <Rotating>
              <group
                rotation={[0, 0, -Math.PI / 12]}
                position={[0, 0, 0]}
                scale={1.5}
              >
                <Model />
              </group>
            </Rotating>
          </Center>
        </React.Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

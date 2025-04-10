import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment, useGLTF } from '@react-three/drei';

// Компонент для показа заглушки во время загрузки модели
const LoadingFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  );
};

// Компонент для вращающейся ракеты
export const RotatingRocket = ({ autoRotate = true }) => {
  const rocketRef = useRef();
  const { scene } = useGLTF('/Imran_Vuhun.glb');

  // Анимация вращения только если autoRotate = true
  useFrame((state, delta) => {
    if (rocketRef.current && autoRotate) {
      rocketRef.current.rotation.y += delta * 0.3; // Вращение вокруг оси Y
    }
  });

  return (
    <group ref={rocketRef} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </group>
  );
};

// Прегружаем модель для кэширования
useGLTF.preload('/Imran_Vuhun.glb');

// Компонент для отображения простой 3D модели ракеты
const RocketModel = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas camera={{ position: [0, 0, 25], fov: 30 }}>
        <color attach="background" args={['#000a20']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={1} />
        
        <Suspense fallback={<LoadingFallback />}>
          <RotatingRocket />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
};

export default RocketModel; 
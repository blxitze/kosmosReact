import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';

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

  // Анимация вращения только если autoRotate = true
  useFrame((state, delta) => {
    if (rocketRef.current && autoRotate) {
      rocketRef.current.rotation.y += delta * 0.3; // Вращение вокруг оси Y
    }
  });

  return (
    <group ref={rocketRef} position={[0, 0, 0]}>
      {/* Нос ракеты */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <coneGeometry args={[0.5, 1.5, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Основной корпус */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 3, 32]} />
        <meshStandardMaterial color="#eeeeee" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Крылья */}
      {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((rotation, i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[0, rotation, 0]} castShadow>
          <boxGeometry args={[0.1, 1, 0.8]} />
          <meshStandardMaterial color="#ff4444" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
      
      {/* Сопло */}
      <mesh position={[0, -1, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.5, 0.5, 32]} />
        <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Эффект пламени */}
      <mesh position={[0, -1.5, 0]}>
        <coneGeometry args={[0.3, 1, 16]} />
        <meshStandardMaterial 
          color="#ff4400" 
          emissive="#ff8800"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

// Компонент для отображения простой 3D модели ракеты
const RocketModel = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas camera={{ position: [0, 0.5, 15], fov: 35 }}>
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
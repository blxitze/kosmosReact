import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { RotatingRocket } from './RocketModel';
import { OrbitControls, Stars } from '@react-three/drei';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const startTime = useRef(Date.now());
  const duration = 3000; // Длительность анимации в мс
  const exponentialFactor = 2.5; // Фактор экспоненциального роста

  useEffect(() => {
    const updateProgress = () => {
      const elapsed = Date.now() - startTime.current;
      const normalizedTime = Math.min(elapsed / duration, 1);
      
      // Экспоненциальная функция для прогресса
      const exponentialProgress = 1 - Math.pow(1 - normalizedTime, exponentialFactor);
      setProgress(exponentialProgress * 100);
      
      if (normalizedTime < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Когда прогресс достиг 100%, начинаем анимацию скрытия
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onLoadingComplete && onLoadingComplete();
          }, 500);
        }, 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onLoadingComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000a20',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Единый Canvas для звезд и ракеты */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      }}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <color attach="background" args={['#000a20']} />
          
          {/* Звезды */}
          <Stars 
            radius={300} 
            depth={100} 
            count={7000} 
            factor={5} 
            saturation={0}
            fade
            speed={0.5}
          />
          
          {/* Освещение */}
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#ff0055" intensity={1} />
          
          {/* Ракета */}
          <Suspense fallback={null}>
            <group position={[0, 0, 0]} scale={[0.4, 0.4, 0.4]}>
              <RotatingRocket autoRotate={false} />
            </group>
          </Suspense>
          
          {/* Полный контроль камеры */}
          <OrbitControls 
            makeDefault
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={20}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {/* Интерфейс загрузки */}
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '70vh',
        padding: '20px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          letterSpacing: '2px',
          textAlign: 'center',
          margin: '0 0 15px 0'
        }}>
          ImranVuHun Inc.
        </h2>
        
        <div style={{ width: '300px' }}>
          <div style={{ 
            fontSize: '14px', 
            marginBottom: '10px', 
            textAlign: 'right',
            fontFamily: 'monospace'
          }}>
            {progress.toFixed(0)}%
          </div>
          <div style={{ 
            width: '100%', 
            height: '4px', 
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '100%', 
              backgroundColor: '#8b5cf6',
              borderRadius: '2px',
              transition: 'width 0.1s ease'
            }} />
          </div>
          <div style={{ 
            fontSize: '12px', 
            marginTop: '10px', 
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'monospace'
          }}>
            LOADING...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 
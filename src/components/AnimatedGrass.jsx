import React, { useEffect, useRef } from 'react';

const AnimatedGrass = () => {
  const grassRef = useRef(null);

  // Helper function to create grass blade paths
  const createGrassBlades = (count, baseHeight, heightVariation, xOffset) => {
    return [...Array(count)].map((_, i) => {
      // Create random variations for each blade
      const height = baseHeight + Math.random() * heightVariation;
      const width = 20 + Math.random() * 10;
      const x = i * 60 + xOffset;
      
      // Create curved path for grass blade
      return `M${x} 200 
              C${x + width/2} ${200 - height/2}, 
                ${x + width/2} ${200 - height}, 
                ${x + width/2} ${200 - height - 10} 
              L${x + width/2} 200 Z`;
    });
  };

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      
      // Animation settings for natural movement
      const animateGrass = (selector, intensity) => {
        const blades = document.querySelectorAll(selector);
        
        blades.forEach((blade) => {
          // Random timing for each blade
          const duration = 1.5 + Math.random() * 1;
          const delay = Math.random() * 2;
          
          // Create unique animation for each blade
          gsap.to(blade, {
            skewX: `${10 + Math.random() * intensity}deg`,
            x: 5 + Math.random() * 5,
            duration: duration,
            ease: "sine.inOut",
            delay: delay,
            repeat: -1,
            yoyo: true
          });
        });
      };

      // Animate each layer with different intensities
      animateGrass('#foreground path', 15);  // Most movement
      animateGrass('#middleground path', 10); // Medium movement
      animateGrass('#background path', 5);   // Subtle movement
    };

    loadGSAP();
  }, []);

  // Generate different layers of grass
  const grassLayers = [
    {
      id: 'background',
      color: '#2d9c3f',
      blades: createGrassBlades(40, 60, 20, 0),    // Short grass
    },
    {
      id: 'middleground',
      color: '#38b54a',
      blades: createGrassBlades(40, 80, 30, 10),   // Medium grass
    },
    {
      id: 'foreground',
      color: '#44d158',
      blades: createGrassBlades(40, 110, 40, 20),  // Tall grass
    }
  ];

  return (
    <div ref={grassRef} className="w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" className="w-full">
        {grassLayers.map((layer) => (
          <g key={layer.id} id={layer.id} fill={layer.color}>
            {layer.blades.map((path, index) => (
              <path key={`${layer.id}-${index}`} d={path} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default AnimatedGrass;
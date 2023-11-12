import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { configuration } from './configutation';
// import AriaSelecMenu from "./AriaSelectMenu"
import AriaSelecMenu from './NewAriaSelectMenu';
import AriaSelecMenuWeb from './AriaSelectMenuWeb';

export default function AnimalSection({ id, images }) {
  const [animal, setAnimal] = useState('chien');
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current && setHeight(ref.current.clientHeight);
  }, []);

  const currentAnimal = configuration[animal];
  const image = images[currentAnimal.key];

  return (
    <div
      id={id}
      className="bg-gradient-to-l to-canard from-canard-light overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          L'ostéopathie pour qui ?
        </h2>
        <div>
          <AriaSelecMenu initialAnimal="chien" setAnimal={setAnimal} />
          <AriaSelecMenuWeb setAnimal={setAnimal} />
        </div>
        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16 `}
          style={{ minHeight: height !== 0 ? height : undefined }}
        >
          <Section {...configuration[animal]} image={image} />
        </div>
      </div>
    </div>
  );
}

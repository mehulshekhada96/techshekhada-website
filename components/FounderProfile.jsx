'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FounderProfile() {
  const [error, setError] = useState(false);

  return (
    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8">
      <h2 className="font-display text-2xl font-bold text-white">
        Meet the Founder
      </h2>
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-sky-500/30 bg-gradient-to-tr from-sky-500/10 to-indigo-600/10 shadow-xl flex-shrink-0">
          {!error ? (
            <Image
              src="/mehul-shekhada.png"
              alt="Mehul Shekhada"
              fill
              className="object-cover"
              onError={() => setError(true)}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-tr from-sky-500 to-indigo-600">
              MS
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Mehul Shekhada</h3>
          <p className="text-sky-400 font-medium">Founder & Lead Engineer</p>
          <p className="mt-2 text-slate-400 leading-relaxed">
            With a deep background in full-stack engineering and a passion for automation, 
            Mehul founded Tech Shekhada to build the next generation of AI-powered tools. 
            As a product founder, he personally architected and developed the entire product suite, 
            ensuring every line of code meets industrial standards for reliability and scale.
          </p>
        </div>
      </div>
    </div>
  );
}

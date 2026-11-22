import React, { lazy, Suspense } from 'react';
import Slider from './Slider';
import StatsBar from './StatsBar';

// Below-the-fold sections deferred for faster initial paint & lower TBT
const Solutions = lazy(() => import('./Solutions'));
const ValuesSection = lazy(() => import('./Values'));
const Products = lazy(() => import('./Products'));
const Testimony = lazy(() => import('./Testimony'));

function Home() {
  return (
    <>
      <Slider />
      <StatsBar />
      <Suspense fallback={<div className="py-5" style={{ minHeight: '300px' }} />}>
        <Solutions />
        <ValuesSection />
        <Products />
        <Testimony />
      </Suspense>
    </>
  );
}

export default Home;

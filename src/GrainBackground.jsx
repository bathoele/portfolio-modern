import React from "react";

export default function GrainBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-2 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise'  baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      <div className="pointer-events-none fixed inset-0 -top-75 -left-100 w-600 h-375 mx-auto z-1 blur-3xl transition-color animate-pulse [animation-duration:7s]"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255, 145, 0, 0.29) 5%, transparent 45% )' }}
      />
      <div className="pointer-events-none fixed inset-0 -top-75 w-1/1 h-375 mx-auto z-1 blur-3xl"
        style={{ background: 'radial-gradient(ellipse at top, rgba(255, 136, 0, 0.09) 5%, transparent 70% )' }}
      />
      <div className="pointer-events-none fixed inset-0 z-1 blur-3xl"
        style={{ background: 'radial-gradient(ellipse at top, transparent 5%, rgba(0, 0, 0, 0.63) 100%)' }}
      />
    </>
  )
}
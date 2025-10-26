import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to data science roles & freelance
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Turning data into decisions
            </h1>
            <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-prose">
              I’m a data scientist specializing in end-to-end ML systems — from exploratory analysis and feature engineering to model deployment and monitoring. I care about clarity, reproducibility, and business impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">
                <Rocket className="h-4 w-4" />
                View Projects
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent blur-3xl" />
    </div>
  );
}

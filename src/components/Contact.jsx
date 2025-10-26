import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch</h2>
          <p className="mt-3 text-neutral-300">Have a role, project, or idea in mind? I’m happy to chat about data, modeling, analytics engineering, and everything in between.</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <a href="mailto:you@example.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div className="text-sm text-neutral-300">you@example.com</div>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">GitHub</div>
              <div className="text-sm text-neutral-300">github.com/your-handle</div>
            </div>
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <div className="font-medium">LinkedIn</div>
              <div className="text-sm text-neutral-300">linkedin.com/in/your-handle</div>
            </div>
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 p-6">
          <p className="text-sm text-neutral-200">Prefer scheduling directly? Share availability and a short brief, and I’ll follow up with a slot.</p>
          <a href="#" className="mt-4 inline-block rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">Request a call</a>
        </div>
      </div>
    </div>
  );
}

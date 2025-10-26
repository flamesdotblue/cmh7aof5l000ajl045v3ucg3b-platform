import React from 'react';
import { Database, BarChart, Brain, Code } from 'lucide-react';

const skills = [
  { icon: Database, label: 'Data Wrangling', tools: 'SQL, Pandas, Polars' },
  { icon: BarChart, label: 'Analytics', tools: 'Experimentation, BI, Cohorts' },
  { icon: Brain, label: 'ML & MLOps', tools: 'scikit-learn, XGBoost, MLflow' },
  { icon: Code, label: 'Engineering', tools: 'Python, FastAPI, Airflow, Docker' },
];

export default function About() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">About me</h2>
          <p className="mt-3 text-neutral-300">
            I craft data products that ship. My background spans analytics engineering and ML research — I’m comfortable prototyping quickly and hardening solutions for production. I love clear notebooks, strong baselines, and measurable uplift.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, label, tools }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">{label}</div>
                  <div className="text-xs text-neutral-300">{tools}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 text-sm">
          {['Python', 'SQL', 'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'FastAPI', 'Airflow', 'Docker', 'Git', 'MLflow', 'dbt', 'BigQuery'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-neutral-300">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

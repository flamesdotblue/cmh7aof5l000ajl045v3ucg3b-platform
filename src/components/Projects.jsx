import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Churn Prediction Pipeline',
    description:
      'End-to-end churn model from EDA to deployment. Feature store, model registry with MLflow, batch scoring via Airflow, dashboard for monitoring.',
    tags: ['Python', 'scikit-learn', 'MLflow', 'Airflow', 'Postgres'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Time Series Forecasting',
    description:
      'Hierarchical demand forecasting with cross-validation, feature lags/rolling stats, and probabilistic intervals evaluated via pinball loss.',
    tags: ['Python', 'pandas', 'XGBoost', 'LightGBM'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'NLP Topic Insights',
    description:
      'Unsupervised topic modeling for support tickets using embeddings and clustering to surface themes and reduce resolution time.',
    tags: ['Python', 'spaCy', 'UMAP', 'HDBSCAN', 'BERT'],
    repo: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Highlighted projects</h2>
            <p className="mt-3 text-neutral-300 max-w-prose">A snapshot of work I enjoy: building pragmatic models, clean data pipelines, and clear, reproducible analyses.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
            <Github className="h-4 w-4" />
            More on GitHub
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                <div className="flex items-center gap-2">
                  <a href={p.repo} className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Source code">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.demo} className="p-2 rounded-md hover:bg-white/10 transition" aria-label="Live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

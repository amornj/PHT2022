'use client'

import Link from 'next/link'

const sections = [
  {
    href: '/classification',
    title: 'Classification',
    desc: 'Hemodynamic definitions, WHO Groups 1–5, pre-/post-capillary phenotypes',
    icon: '📋',
    color: 'border-blue-500',
  },
  {
    href: '/diagnosis',
    title: 'Diagnosis',
    desc: 'Suspicion → Detection → Confirmation workflow, echo, V/Q, RHC',
    icon: '🔍',
    color: 'border-emerald-500',
  },
  {
    href: '/hemodynamics',
    title: 'Hemodynamics',
    desc: 'mPAP, PAWP, PVR, CO/CI calculators with phenotype classification',
    icon: '📊',
    color: 'border-purple-500',
  },
  {
    href: '/risk',
    title: 'Risk Stratification',
    desc: 'Three-strata & four-strata risk models for PAH at diagnosis & follow-up',
    icon: '⚠️',
    color: 'border-yellow-500',
  },
  {
    href: '/pah-treatment',
    title: 'PAH Treatment',
    desc: 'Vasoreactivity, CCB, initial & sequential combination therapy, escalation',
    icon: '💊',
    color: 'border-red-500',
  },
  {
    href: '/groups',
    title: 'Groups 2 / 3 / 5',
    desc: 'PH-LHD, PH-lung disease, group 5 — what to do and what NOT to do',
    icon: '🫁',
    color: 'border-teal-500',
  },
  {
    href: '/cteph',
    title: 'CTEPH (Group 4)',
    desc: 'V/Q-first diagnosis, PEA, BPA, riociguat, multimodality treatment',
    icon: '🩸',
    color: 'border-orange-500',
  },
  {
    href: '/special',
    title: 'Special Scenarios',
    desc: 'CTD-PAH, portal HTN, HIV, CHD, pediatric PH, RV failure & ICU',
    icon: '⭐',
    color: 'border-indigo-500',
  },
  {
    href: '/ask',
    title: 'Ask NotebookLM',
    desc: 'AI-powered Q&A on the 2022 ESC/ERS PH guidelines',
    icon: '🤖',
    color: 'border-pink-500',
  },
]

export default function HomePage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Pulmonary Hypertension Clinical Guide
        </h1>
        <p className="text-gray-600 mt-2">
          Based on the 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Humbert M, Kovacs G, Hoeper MM, et al. Eur Respir J 2023; 61: 2200879
        </p>
      </div>

      {/* Quick reference card */}
      <div className="card mb-6 border-l-4 border-primary">
        <h2 className="card-header">Quick Reference: PH Definition (2022)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-2 pr-4 font-semibold text-primary">Definition</th>
                <th className="text-left py-2 font-semibold text-primary">Haemodynamic Criteria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2 pr-4 font-medium">PH</td>
                <td className="py-2">mPAP &gt;20 mmHg</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pre-capillary PH</td>
                <td className="py-2">mPAP &gt;20, PAWP ≤15, PVR &gt;2 WU</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">IpcPH</td>
                <td className="py-2">mPAP &gt;20, PAWP &gt;15, PVR ≤2 WU</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">CpcPH</td>
                <td className="py-2">mPAP &gt;20, PAWP &gt;15, PVR &gt;2 WU</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Exercise PH</td>
                <td className="py-2">mPAP/CO slope &gt;3 mmHg/L/min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link key={s.href} href={s.href}>
            <div className={`card border-l-4 ${s.color} hover:shadow-lg transition-shadow cursor-pointer h-full`}>
              <div className="flex items-start gap-3">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-xs text-yellow-800">
        <strong>Disclaimer:</strong> This tool is for educational and clinical reference purposes only.
        It does not replace clinical judgment. Always verify recommendations against the full guideline
        and local protocols. Not for direct patient care decisions without physician oversight.
      </div>
    </div>
  )
}

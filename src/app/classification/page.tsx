'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'definitions', label: 'Definitions' },
  { id: 'groups', label: 'WHO Groups' },
  { id: 'phenotypes', label: 'Phenotypes' },
]

const whoGroups = [
  {
    group: '1',
    title: 'Pulmonary Arterial Hypertension (PAH)',
    subtypes: [
      'Idiopathic PAH (IPAH)',
      'Heritable PAH (HPAH) — BMPR2, ALK1, ENG, SMAD9, CAV1, KCNK3',
      'Drug- and toxin-associated PAH (DPAH)',
      'PAH associated with: CTD, HIV, portal hypertension, CHD, schistosomiasis',
      'PAH with features of venous/capillary involvement (PVOD/PCH)',
      'Persistent PH of the newborn',
    ],
    color: 'border-red-500 bg-red-50',
  },
  {
    group: '2',
    title: 'PH associated with left heart disease',
    subtypes: [
      'Heart failure with reduced ejection fraction (HFrEF)',
      'Heart failure with preserved ejection fraction (HFpEF)',
      'Valvular heart disease',
      'Congenital/acquired cardiovascular conditions leading to post-capillary PH',
    ],
    color: 'border-blue-500 bg-blue-50',
  },
  {
    group: '3',
    title: 'PH associated with lung diseases and/or hypoxia',
    subtypes: [
      'Obstructive lung disease (COPD)',
      'Restrictive lung disease (ILD)',
      'Mixed obstructive/restrictive pattern',
      'Hypoxia without lung disease (high altitude, sleep-disordered breathing)',
      'Developmental lung disorders',
    ],
    color: 'border-green-500 bg-green-50',
  },
  {
    group: '4',
    title: 'PH associated with pulmonary artery obstructions',
    subtypes: [
      'Chronic thrombo-embolic PH (CTEPH)',
      'Other pulmonary artery obstructions (tumors, arteritis, congenital stenoses, parasites, foreign bodies)',
    ],
    color: 'border-orange-500 bg-orange-50',
  },
  {
    group: '5',
    title: 'PH with unclear and/or multifactorial mechanisms',
    subtypes: [
      'Haematological disorders (myeloproliferative, splenectomy, chronic haemolytic anaemia)',
      'Systemic and metabolic disorders (sarcoidosis, histiocytosis, LAM, Gaucher, thyroid disease)',
      'Others: chronic kidney failure, fibrosing mediastinitis, pulmonary tumour thrombotic microangiopathy',
    ],
    color: 'border-purple-500 bg-purple-50',
  },
]

export default function ClassificationPage() {
  const { classificationTab, setClassificationTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-4">Classification</h1>
      <p className="text-sm text-gray-600 mb-4">
        2022 ESC/ERS updated haemodynamic definitions and clinical classification of pulmonary hypertension
      </p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setClassificationTab(t.id)}
            className={`tab-btn whitespace-nowrap ${classificationTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {classificationTab === 'definitions' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Haemodynamic Definitions (Table 5)</h2>
            <p className="text-sm text-gray-600 mb-3">
              PH is defined by mPAP &gt;20 mmHg at rest (revised from &gt;25 mmHg in prior guidelines).
              PVR threshold revised to &gt;2 WU (from &gt;3 WU).
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-3 text-left">Definition</th>
                    <th className="py-2 px-3 text-left">mPAP</th>
                    <th className="py-2 px-3 text-left">PAWP</th>
                    <th className="py-2 px-3 text-left">PVR</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-gray-50">
                    <td className="py-2 px-3 font-medium">PH</td>
                    <td className="py-2 px-3">&gt;20 mmHg</td>
                    <td className="py-2 px-3">—</td>
                    <td className="py-2 px-3">—</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Pre-capillary PH</td>
                    <td className="py-2 px-3">&gt;20 mmHg</td>
                    <td className="py-2 px-3">≤15 mmHg</td>
                    <td className="py-2 px-3">&gt;2 WU</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-3 font-medium">IpcPH</td>
                    <td className="py-2 px-3">&gt;20 mmHg</td>
                    <td className="py-2 px-3">&gt;15 mmHg</td>
                    <td className="py-2 px-3">≤2 WU</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">CpcPH</td>
                    <td className="py-2 px-3">&gt;20 mmHg</td>
                    <td className="py-2 px-3">&gt;15 mmHg</td>
                    <td className="py-2 px-3">&gt;2 WU</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-3 font-medium">Exercise PH</td>
                    <td colSpan={3} className="py-2 px-3">mPAP/CO slope &gt;3 mmHg/L/min</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              <p><strong>Key change:</strong> mPAP threshold lowered from &gt;25 to &gt;20 mmHg. PVR threshold lowered from &gt;3 to &gt;2 WU.</p>
              <p className="mt-1"><strong>&quot;Unclassified PH&quot;:</strong> mPAP &gt;20, PAWP ≤15, PVR ≤2 WU — elevated mPAP but low PVR and low PAWP.</p>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <h3 className="font-bold text-warning mb-2">What&apos;s New in 2022</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• mPAP threshold: 25 → <strong>20 mmHg</strong></li>
              <li>• PVR threshold: 3 → <strong>2 WU</strong></li>
              <li>• New definition of <strong>exercise PH</strong> (mPAP/CO slope &gt;3 mmHg/L/min)</li>
              <li>• Vasoreactive patients with IPAH repositioned</li>
              <li>• LAM moved to Group 3</li>
              <li>• Group 4 renamed to include CTEPD (without PH)</li>
            </ul>
          </div>
        </div>
      )}

      {classificationTab === 'groups' && (
        <div className="space-y-4">
          {whoGroups.map((g) => (
            <div key={g.group} className={`card border-l-4 ${g.color}`}>
              <h3 className="font-bold text-primary">
                Group {g.group}: {g.title}
              </h3>
              <ul className="mt-2 text-sm space-y-1 text-gray-700">
                {g.subtypes.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {classificationTab === 'phenotypes' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Haemodynamic Phenotypes</h2>
            <p className="text-sm text-gray-500 mb-4">Classifying PH by haemodynamic profile guides treatment decisions</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border-2 border-red-300 bg-red-50">
                <h3 className="font-bold text-red-800">Pre-capillary PH</h3>
                <p className="text-sm text-red-700 mt-1">mPAP &gt;20, PAWP ≤15, PVR &gt;2 WU</p>
                <p className="text-xs text-red-600 mt-2">
                  Suggests pulmonary vascular disease (Groups 1, 3, 4, 5). The elevated PVR indicates
                  intrinsic pulmonary vascular remodeling.
                </p>
                <div className="mt-2">
                  <span className="badge-red">PAH</span>{' '}
                  <span className="badge-red">CTEPH</span>{' '}
                  <span className="badge-red">PH-Lung</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border-2 border-blue-300 bg-blue-50">
                <h3 className="font-bold text-blue-800">Isolated post-capillary PH (IpcPH)</h3>
                <p className="text-sm text-blue-700 mt-1">mPAP &gt;20, PAWP &gt;15, PVR ≤2 WU</p>
                <p className="text-xs text-blue-600 mt-2">
                  Elevated PA pressure due to high left-sided filling pressures.
                  PVR is normal — no significant pulmonary vascular disease.
                </p>
                <div className="mt-2">
                  <span className="badge-blue">Group 2 (LHD)</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border-2 border-purple-300 bg-purple-50">
                <h3 className="font-bold text-purple-800">Combined post-/pre-capillary PH (CpcPH)</h3>
                <p className="text-sm text-purple-700 mt-1">mPAP &gt;20, PAWP &gt;15, PVR &gt;2 WU</p>
                <p className="text-xs text-purple-600 mt-2">
                  Elevated filling pressures AND pulmonary vascular disease.
                  Worst prognosis in Group 2. May have a pre-capillary component amenable to PH therapy
                  (controversial — referral to PH center recommended).
                </p>
                <div className="mt-2">
                  <span className="badge-blue">Group 2 + vascular component</span>
                </div>
              </div>

              <div className="p-4 rounded-lg border-2 border-gray-300 bg-gray-50">
                <h3 className="font-bold text-gray-800">&quot;Unclassified PH&quot;</h3>
                <p className="text-sm text-gray-700 mt-1">mPAP &gt;20, PAWP ≤15, PVR ≤2 WU</p>
                <p className="text-xs text-gray-600 mt-2">
                  Elevated mPAP without meeting criteria for pre- or post-capillary PH.
                  May be seen in high-output states or early disease. Clinical significance under investigation.
                </p>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-primary">
            <h3 className="font-bold text-primary mb-2">Clinical Pearl</h3>
            <p className="text-sm text-gray-700">
              The distinction between IpcPH and CpcPH in Group 2 is critical: CpcPH (PVR &gt;2 WU)
              has worse outcomes and may indicate superimposed pulmonary vascular disease.
              These patients should be referred to a PH centre for further evaluation.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

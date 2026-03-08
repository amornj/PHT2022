'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'group2', label: 'Group 2 — LHD' },
  { id: 'group3', label: 'Group 3 — Lung' },
  { id: 'group5', label: 'Group 5' },
]

export default function GroupsPage() {
  const { groupsTab, setGroupsTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Groups 2, 3 & 5</h1>
      <p className="text-sm text-gray-600 mb-4">PH associated with left heart disease, lung disease, and multifactorial mechanisms</p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setGroupsTab(t.id)}
            className={`tab-btn whitespace-nowrap ${groupsTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {groupsTab === 'group2' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">PH with Left Heart Disease (Rec Tables 22A-B)</h2>
            <p className="text-sm text-gray-600 mb-3">Most common cause of PH. Treatment focuses on the underlying cardiac condition.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800">Haemodynamic Phenotyping</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• <strong>IpcPH:</strong> PAWP &gt;15, PVR ≤2 WU — pure post-capillary, treat LHD</li>
                  <li>• <strong>CpcPH:</strong> PAWP &gt;15, PVR &gt;2 WU — combined, refer to PH centre</li>
                  <li>• Borderline PAWP 13–15 → fluid challenge may unmask LHD</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800">Patient Phenotyping (Table 23)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• AF, age &gt;65, obesity, diabetes, hypertension → likely LHD</li>
                  <li>• LA enlargement, LV hypertrophy on echo</li>
                  <li>• High PAWP even when diuresed</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-3">
              <h3 className="font-semibold text-green-800">What TO DO</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• Optimize LHD therapy (diuretics, GDMT for HFrEF, valve intervention)</li>
                <li>• RHC recommended if it aids management decisions (Class I)</li>
                <li>• RHC mandatory pre-valve surgery if severe TR or suspected PH (Class I)</li>
                <li>• Refer CpcPH with severe pre-capillary component to PH centre (Class I)</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800">What NOT to Do</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• <strong>Do NOT use PAH-specific drugs</strong> in Group 2 PH (Class III)</li>
                <li>• PDE5i in HFpEF + IpcPH — NOT recommended</li>
                <li>• Do not treat all elevated mPAP with vasodilators</li>
                <li>• Individualized approach only for CpcPH with PVR &gt;5 WU at expert centres</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {groupsTab === 'group3' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">PH with Lung Disease / Hypoxia (Rec Tables 23A-B)</h2>
            <p className="text-sm text-gray-600 mb-3">Second most common cause of PH. Focus on treating the underlying lung disease.</p>

            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200 mb-4">
              <h3 className="font-semibold text-orange-800">Defining &quot;Severe&quot; PH in Lung Disease</h3>
              <p className="text-sm text-gray-700 mt-1">
                Severe PH suggested by: <strong>PVR &gt;5 WU</strong> or <strong>mPAP ≥35 mmHg</strong>, or low CI with high PVR disproportionate to lung disease severity.
                These patients may benefit from referral to PH centre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800">What TO DO (Class I)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Optimize lung disease treatment</li>
                  <li>• Long-term O₂ if chronic hypoxaemia</li>
                  <li>• Treat sleep-disordered breathing, alveolar hypoventilation</li>
                  <li>• Echo if PH suspected + interpret with ABG, PFTs, DLCO, CT</li>
                  <li>• Refer to PH centre if severe PH suspected</li>
                  <li>• RHC if results expected to aid management</li>
                  <li>• Refer for LTx evaluation</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">What NOT to Do</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Ambrisentan</strong> — NOT recommended in PH with IPF (Class III)</li>
                  <li>• <strong>Riociguat</strong> — NOT recommended in PH with IIP (Class III)</li>
                  <li>• Routine use of PDE5i in non-severe PH with COPD/ILD — not recommended</li>
                  <li>• Do not assume all dyspnoea is from the lung disease</li>
                </ul>
              </div>
            </div>

            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800">Emerging Evidence</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• Inhaled treprostinil may be considered in PH-ILD (Class IIb)</li>
                <li>• PDE5i may be considered in severe PH with ILD — individual decision at PH centres (Class IIb)</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {groupsTab === 'group5' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Group 5 — PH with Unclear/Multifactorial Mechanisms</h2>
            <p className="text-sm text-gray-600 mb-3">Heterogeneous group where PH may result from multiple mechanisms</p>

            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800">Haematological Disorders (Table 24)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Myeloproliferative disorders, splenectomy</li>
                  <li>• Chronic haemolytic anaemia (sickle cell, thalassaemia)</li>
                  <li>• PH mechanism: high output, in-situ thrombosis, splenectomy-related</li>
                </ul>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-800">Systemic / Metabolic Disorders</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Sarcoidosis — multifactorial (compression, fibrosis, vasculopathy)</li>
                  <li>• Langerhans cell histiocytosis</li>
                  <li>• Lymphangioleiomyomatosis (LAM) — now in Group 3</li>
                  <li>• Gaucher disease, thyroid disease</li>
                  <li>• Glycogen storage disease, neurofibromatosis</li>
                </ul>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800">Others</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Chronic kidney failure (on or off dialysis)</li>
                  <li>• Fibrosing mediastinitis</li>
                  <li>• Pulmonary tumour thrombotic microangiopathy (PTTM)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <h3 className="font-bold text-warning mb-2">Management Principle</h3>
            <p className="text-sm text-gray-700">
              Treat the underlying condition first. PAH-specific therapy may be considered on an
              individual basis at expert centres, particularly if a significant pre-capillary component is present.
              Evidence for PAH drugs in Group 5 is limited — mostly case series and expert opinion.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

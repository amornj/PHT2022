'use client'

import { useAppStore } from '@/store/appStore'

const steps = [
  { id: 0, label: 'Step 1: Suspicion' },
  { id: 1, label: 'Step 2: Detection' },
  { id: 2, label: 'Step 3: Confirmation' },
  { id: 3, label: 'Screening' },
]

export default function DiagnosisPage() {
  const { diagnosisStep, setDiagnosisStep } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Diagnostic Algorithm</h1>
      <p className="text-sm text-gray-600 mb-4">Three-step approach: Suspicion → Detection → Confirmation (Rec Table 2)</p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setDiagnosisStep(s.id)}
            className={`tab-btn whitespace-nowrap ${diagnosisStep === s.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {diagnosisStep === 0 && (
        <div className="space-y-4">
          <div className="card border-l-4 border-yellow-500">
            <h2 className="card-header">Step 1: Suspicion</h2>
            <p className="text-sm text-gray-600 mb-3">When should you suspect PH?</p>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800">Symptoms</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Unexplained dyspnoea (most common presenting symptom)</li>
                  <li>• Exercise intolerance / fatigue</li>
                  <li>• Syncope (especially exertional — ominous sign)</li>
                  <li>• Chest pain (RV ischaemia)</li>
                  <li>• Peripheral oedema, ascites</li>
                  <li>• Haemoptysis (rare)</li>
                </ul>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800">Signs</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Elevated JVP, prominent A wave</li>
                  <li>• Loud P2 (pulmonic component of S2)</li>
                  <li>• RV heave (parasternal lift)</li>
                  <li>• TR murmur (pansystolic at left lower sternal border)</li>
                  <li>• PR murmur (Graham Steell murmur)</li>
                  <li>• Hepatomegaly, peripheral oedema, ascites</li>
                </ul>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800">Initial Investigations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-sm text-gray-700">
                  <div>
                    <strong>ECG:</strong> RV hypertrophy, RA enlargement, right axis deviation, RV strain (ST/T changes V1-V4)
                  </div>
                  <div>
                    <strong>CXR:</strong> Enlarged pulmonary arteries, RV enlargement, pruning of peripheral vessels
                  </div>
                  <div>
                    <strong>PFTs:</strong> Low DLCO (especially in PVOD, CTD-PAH). Obstructive/restrictive patterns suggest Group 3
                  </div>
                  <div>
                    <strong>ABG:</strong> Hypoxaemia, hypocapnia (hyperventilation). Hypercapnia suggests lung disease
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {diagnosisStep === 1 && (
        <div className="space-y-4">
          <div className="card border-l-4 border-blue-500">
            <h2 className="card-header">Step 2: Detection — Echocardiography</h2>
            <p className="text-sm text-gray-600 mb-3">Echo is the key screening tool for PH (Class I, Level C)</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-3 text-left">TRV (m/s)</th>
                    <th className="py-2 px-3 text-left">Other Echo Signs</th>
                    <th className="py-2 px-3 text-left">PH Probability</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-green-50">
                    <td className="py-2 px-3">≤2.8 or not measurable</td>
                    <td className="py-2 px-3">No</td>
                    <td className="py-2 px-3"><span className="badge-green">Low</span></td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="py-2 px-3">≤2.8 or not measurable</td>
                    <td className="py-2 px-3">Yes</td>
                    <td className="py-2 px-3"><span className="badge-yellow">Intermediate</span></td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="py-2 px-3">2.9–3.4</td>
                    <td className="py-2 px-3">No</td>
                    <td className="py-2 px-3"><span className="badge-yellow">Intermediate</span></td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-2 px-3">2.9–3.4</td>
                    <td className="py-2 px-3">Yes</td>
                    <td className="py-2 px-3"><span className="badge-red">High</span></td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="py-2 px-3">&gt;3.4</td>
                    <td className="py-2 px-3">Not required</td>
                    <td className="py-2 px-3"><span className="badge-red">High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 text-sm">Additional Echo Signs Suggestive of PH (Table 10)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 text-xs text-gray-700">
                <div>
                  <strong>Ventricles:</strong> RV/LV ratio &gt;1.0, flattened septum (D-sign), TAPSE &lt;17mm, RV FAC &lt;35%
                </div>
                <div>
                  <strong>PA:</strong> RVOT AT &lt;105ms, mid-systolic notch, early diastolic PR velocity &gt;2.2 m/s, PA diameter &gt;25mm
                </div>
                <div>
                  <strong>RA/IVC:</strong> RA area &gt;18 cm², IVC &gt;21mm with &lt;50% inspiratory collapse
                </div>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-emerald-500">
            <h2 className="card-header">V/Q Scan</h2>
            <p className="text-sm text-gray-700">
              <strong>Class I recommendation:</strong> V/Q lung scan is recommended to exclude CTEPH
              in all patients with unexplained PH. V/Q has higher sensitivity than CT angiography for CTEPH.
            </p>
            <div className="mt-2 p-2 bg-red-50 rounded text-sm text-red-800">
              <strong>Do not skip V/Q!</strong> A normal V/Q scan effectively rules out CTEPH. CT angiography alone is insufficient.
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Additional Workup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-gray-50 rounded">
                <strong>Blood tests:</strong> BNP/NT-proBNP, autoimmune panel (ANA, anti-Scl70, anti-centromere), HIV, hepatic function, thyroid, iron studies
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <strong>CT chest:</strong> Lung parenchyma (ILD, emphysema), PA dilation, mosaic perfusion, mediastinal lymphadenopathy
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <strong>CMR:</strong> RV volumes, RVEF, mass. Prognostic value. Consider in intermediate echo probability
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <strong>CPET:</strong> Low peak VO₂, high VE/VCO₂ slope, low PETCO₂. Useful in intermediate probability
              </div>
            </div>
          </div>
        </div>
      )}

      {diagnosisStep === 2 && (
        <div className="space-y-4">
          <div className="card border-l-4 border-red-500">
            <h2 className="card-header">Step 3: Confirmation — Right Heart Catheterisation</h2>
            <p className="text-sm text-gray-600 mb-3">RHC is mandatory to confirm PH diagnosis and guide treatment (Class I)</p>

            <div className="p-3 bg-red-50 rounded-lg mb-4">
              <h3 className="font-semibold text-red-800">RHC should include:</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• RAP (right atrial pressure)</li>
                <li>• sPAP, dPAP, mPAP</li>
                <li>• PAWP (with proper wedge verification)</li>
                <li>• CO (thermodilution preferred, Fick if shunt suspected)</li>
                <li>• PVR = (mPAP - PAWP) / CO</li>
                <li>• Mixed venous O₂ saturation (SvO₂)</li>
                <li>• Oximetry run if shunt suspected</li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-3 text-left">Parameter</th>
                    <th className="py-2 px-3 text-left">Normal</th>
                    <th className="py-2 px-3 text-left">Abnormal</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="py-2 px-3 font-medium">mPAP</td><td className="py-2 px-3">≤20 mmHg</td><td className="py-2 px-3 text-red-600">&gt;20 mmHg</td></tr>
                  <tr className="bg-gray-50"><td className="py-2 px-3 font-medium">PAWP</td><td className="py-2 px-3">≤15 mmHg</td><td className="py-2 px-3">&gt;15 → post-capillary</td></tr>
                  <tr><td className="py-2 px-3 font-medium">PVR</td><td className="py-2 px-3">≤2 WU</td><td className="py-2 px-3 text-red-600">&gt;2 WU → pre-capillary component</td></tr>
                  <tr className="bg-gray-50"><td className="py-2 px-3 font-medium">CO/CI</td><td className="py-2 px-3">CI 2.5–4.0 L/min/m²</td><td className="py-2 px-3">Low CI &lt;2.5 → poor prognosis</td></tr>
                  <tr><td className="py-2 px-3 font-medium">RAP</td><td className="py-2 px-3">&lt;8 mmHg</td><td className="py-2 px-3">Elevated → RV failure</td></tr>
                  <tr className="bg-gray-50"><td className="py-2 px-3 font-medium">SvO₂</td><td className="py-2 px-3">&gt;65%</td><td className="py-2 px-3 text-red-600">&lt;60% → poor prognosis</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card border-l-4 border-purple-500">
            <h2 className="card-header">Vasoreactivity Testing</h2>
            <p className="text-sm text-gray-600 mb-2">
              Perform in suspected IPAH, HPAH, or DPAH to identify CCB responders (Class I)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 text-sm">Agents (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1">
                  <li>• Inhaled NO (10–20 ppm for 5 min)</li>
                  <li>• IV epoprostenol (2–12 ng/kg/min)</li>
                  <li>• Inhaled iloprost (5 μg)</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm">Positive Response</h3>
                <ul className="text-xs text-gray-700 mt-1">
                  <li>• Fall in mPAP ≥10 mmHg</li>
                  <li>• To reach absolute mPAP ≤40 mmHg</li>
                  <li>• With unchanged or increased CO</li>
                </ul>
                <p className="text-xs text-green-700 mt-2">~10% of IPAH patients are responders → eligible for CCB trial</p>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <h3 className="font-bold text-warning mb-2">Fluid Challenge</h3>
            <p className="text-sm text-gray-700">
              In patients with borderline PAWP (13–15 mmHg) and features of HFpEF,
              exercise or fluid challenge (rapid infusion of 500 mL saline) may be considered
              to unmask post-capillary PH. PAWP &gt;18 mmHg after fluid challenge suggests LHD.
            </p>
          </div>
        </div>
      )}

      {diagnosisStep === 3 && (
        <div className="space-y-4">
          <div className="card border-l-4 border-primary">
            <h2 className="card-header">Screening & Early Detection (Rec Table 3)</h2>
            <p className="text-sm text-gray-600 mb-3">High-risk populations warrant proactive screening</p>

            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">Systemic Sclerosis (Class I)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Annual echo screening recommended in all SSc patients</li>
                  <li>• Use DETECT algorithm if SSc &gt;3 years, FVC ≥40%, DLCO &lt;60%</li>
                  <li>• Consider BNP/NT-proBNP, PFTs, and CPET</li>
                  <li>• RHC if non-invasive tests unexplained</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800">BMPR2 Mutation Carriers (Class I)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Annual assessment for PAH-causing mutation carriers</li>
                  <li>• And first-degree relatives of patients with HPAH</li>
                  <li>• Echo + BNP + symptom evaluation</li>
                </ul>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800">Portal Hypertension / Liver Transplant</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Echo screening for symptomatic liver disease / portal HTN</li>
                  <li>• Mandatory echo for liver transplant evaluation (Class I)</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800">Post-PE / CTEPH Screening</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Consider CTEPH in PE survivors with exercise dyspnoea</li>
                  <li>• Persistent or new-onset dyspnoea → further diagnostic evaluation</li>
                  <li>• Mismatched perfusion defects beyond 3 months of anticoagulation → refer to PH/CTEPH centre</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'treatment', label: 'Treatment Algorithm' },
  { id: 'follow', label: 'Follow-up' },
]

export default function CTEPHPage() {
  const { ctephTab, setCtephTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">CTEPH — Group 4</h1>
      <p className="text-sm text-gray-600 mb-4">
        Chronic thrombo-embolic pulmonary hypertension and chronic thrombo-embolic pulmonary disease (CTEPD)
      </p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setCtephTab(t.id)}
            className={`tab-btn whitespace-nowrap ${ctephTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {ctephTab === 'diagnosis' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-orange-500">
            <h2 className="card-header">Diagnostic Strategy (Figure 13)</h2>
            <p className="text-sm text-gray-600 mb-3">V/Q scan is the first-line screening test for CTEPH</p>

            <div className="space-y-3">
              <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">1️⃣</span>
                  <h3 className="font-bold text-orange-800">V/Q Lung Scan (Class I)</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Normal V/Q → CTEPH effectively excluded</strong></li>
                  <li>• Mismatched perfusion defects → proceed to further imaging</li>
                  <li>• V/Q has higher sensitivity than CTPA for CTEPH</li>
                  <li>• Persistent defects &gt;3 months after adequate anticoagulation → suspect CTEPH</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">2️⃣</span>
                  <h3 className="font-bold text-blue-800">CT Pulmonary Angiography</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Confirm organized thrombi, webs, bands, stenoses</li>
                  <li>• Assess proximal vs distal disease distribution</li>
                  <li>• Mosaic perfusion pattern</li>
                  <li>• Bronchial artery enlargement (collateral flow)</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">3️⃣</span>
                  <h3 className="font-bold text-purple-800">RHC + Selective Pulmonary Angiography</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Confirm haemodynamic diagnosis of PH</li>
                  <li>• Selective angiography to map disease for surgical planning</li>
                  <li>• DSA or rotational angiography for BPA planning</li>
                  <li>• Assess operability by experienced CTEPH team</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 text-sm">Key Points</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>All CTEPH patients must be reviewed by a CTEPH team</strong> (Class I)</li>
                <li>• Antiphospholipid syndrome testing recommended (Class I)</li>
                <li>• Lifelong anticoagulation for all CTEPH patients (Class I)</li>
                <li>• CTEPD (without PH) now recognized — symptomatic patients with perfusion defects but normal haemodynamics</li>
              </ul>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <h3 className="font-bold text-warning mb-2">When to Suspect CTEPH</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Persistent or new dyspnoea after acute PE</li>
              <li>• Exercise limitation beyond 3 months of anticoagulation</li>
              <li>• Known risk factors: previous PE, large/recurrent PE, splenectomy, VP shunt, thyroid replacement, malignancy, myeloproliferative disorders</li>
              <li>• Unprovoked PE with persistent perfusion defects</li>
            </ul>
          </div>
        </div>
      )}

      {ctephTab === 'treatment' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Treatment Algorithm (Rec Tables 24A-B, Figure 14)</h2>
            <p className="text-sm text-gray-600 mb-3">Multimodality approach — always assess by CTEPH team first</p>

            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
                <h3 className="font-bold text-green-800">Pulmonary Endarterectomy (PEA) — Class I</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Treatment of choice</strong> for surgically accessible CTEPH</li>
                  <li>• Requires deep hypothermic circulatory arrest</li>
                  <li>• Potentially curative — can normalize haemodynamics</li>
                  <li>• Must be performed at experienced centres (≥50 cases/year)</li>
                  <li>• Perioperative mortality 2–5% at expert centres</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
                <h3 className="font-bold text-blue-800">Balloon Pulmonary Angioplasty (BPA) — Class I</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• For technically inoperable patients or residual PH after PEA</li>
                  <li>• Upgraded from Class IIb to <strong>Class I</strong> in 2022</li>
                  <li>• Multiple sessions typically required (4–10 sessions)</li>
                  <li>• Distal obstructions amenable to BPA</li>
                  <li>• Can be combined with medical therapy</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
                <h3 className="font-bold text-purple-800">Medical Therapy — Riociguat (Class I)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Riociguat</strong> — recommended for inoperable CTEPH or persistent/recurrent PH after PEA</li>
                  <li>• Only PAH drug with RCT evidence in CTEPH (CHEST-1 trial)</li>
                  <li>• Dose: 1 mg TID → uptitrate to max 2.5 mg TID</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                <h3 className="font-bold text-yellow-800">Other Medical Options (Class IIb)</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Off-label PAH drugs in symptomatic inoperable CTEPH (Class IIb)</li>
                  <li>• sGC stimulator + PDE5i + ERA or prostacyclin combination may be considered</li>
                  <li>• Treprostinil s.c. in WHO-FC III–IV with inoperable CTEPH or persistent PH after PEA (Class IIb)</li>
                  <li>• Medical therapy prior to BPA — may be considered (Class IIa)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-primary">
            <h3 className="font-bold text-primary mb-2">Multimodality Approach (Figure 15)</h3>
            <p className="text-sm text-gray-700">
              Many CTEPH patients benefit from a combination of PEA, BPA, and medical therapy.
              Persistent PH after PEA → consider BPA + riociguat. Inoperable disease → BPA + riociguat.
              This &quot;treat-to-target&quot; multimodality approach is a key update in 2022.
            </p>
          </div>
        </div>
      )}

      {ctephTab === 'follow' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Follow-up & Long-term Management</h2>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm">Lifelong Anticoagulation (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Recommended in ALL CTEPH patients</li>
                  <li>• VKAs preferred (INR 2.0–3.0)</li>
                  <li>• If antiphospholipid syndrome — VKAs mandatory (not DOACs)</li>
                  <li>• CTEPD without PH — individualized anticoagulation (Class IIa)</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm">Post-PEA Follow-up (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Long-term follow-up recommended for all post-PEA and post-BPA patients</li>
                  <li>• Echo, 6MWD, BNP/NT-proBNP at regular intervals</li>
                  <li>• RHC if residual symptoms or deterioration</li>
                  <li>• ~25% may have residual PH after PEA → consider BPA ± medical therapy</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 text-sm">CTEPH Centre Requirements (Rec Table 25)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Experienced PEA surgeon performing ≥50 cases/year</li>
                  <li>• BPA programme with ≥50 procedures/year</li>
                  <li>• Multidisciplinary team: surgeon, interventionalist, PH physician</li>
                  <li>• Patient registry and outcome tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

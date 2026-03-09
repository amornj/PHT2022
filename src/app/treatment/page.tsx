'use client'

import { useAppStore } from '@/store/appStore'

const sections = [
  { id: 'group1', label: 'Group 1 — PAH', icon: '💊' },
  { id: 'groups235', label: 'Groups 2 / 3 / 5', icon: '🫁' },
  { id: 'group4', label: 'Group 4 — CTEPH', icon: '🩸' },
]

const pahTabs = [
  { id: 'vasoreactivity', label: 'Vasoreactivity & CCB' },
  { id: 'initial', label: 'Initial Therapy' },
  { id: 'sequential', label: 'Sequential Therapy' },
  { id: 'comorbidity', label: 'CP Comorbidity' },
  { id: 'drugs', label: 'Drug Dosing' },
  { id: 'general', label: 'General Measures' },
]

const groupsTabs = [
  { id: 'group2', label: 'Group 2 — LHD' },
  { id: 'group3', label: 'Group 3 — Lung' },
  { id: 'group5', label: 'Group 5' },
]

const ctephTabs = [
  { id: 'diagnosis', label: 'Diagnosis' },
  { id: 'treatment', label: 'Treatment Algorithm' },
  { id: 'follow', label: 'Follow-up' },
]

export default function TreatmentPage() {
  const {
    treatmentSection, setTreatmentSection,
    treatmentTab, setTreatmentTab,
    groupsTab, setGroupsTab,
    ctephTab, setCtephTab,
  } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Treatment</h1>
      <p className="text-sm text-gray-600 mb-4">
        Evidence-based treatment by PH group — 2022 ESC/ERS Guidelines
      </p>

      {/* Top-level section selector */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setTreatmentSection(s.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
              treatmentSection === s.id
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Group 1 — PAH Treatment */}
      {treatmentSection === 'group1' && (
        <div>
          <div className="flex gap-1 mb-4 overflow-x-auto">
            {pahTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTreatmentTab(t.id)}
                className={`tab-btn whitespace-nowrap ${treatmentTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <PAHContent tab={treatmentTab} />
        </div>
      )}

      {/* Groups 2 / 3 / 5 */}
      {treatmentSection === 'groups235' && (
        <div>
          <div className="flex gap-1 mb-4 overflow-x-auto">
            {groupsTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setGroupsTab(t.id)}
                className={`tab-btn whitespace-nowrap ${groupsTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <GroupsContent tab={groupsTab} />
        </div>
      )}

      {/* Group 4 — CTEPH */}
      {treatmentSection === 'group4' && (
        <div>
          <div className="flex gap-1 mb-4 overflow-x-auto">
            {ctephTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setCtephTab(t.id)}
                className={`tab-btn whitespace-nowrap ${ctephTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <CTEPHContent tab={ctephTab} />
        </div>
      )}
    </div>
  )
}

/* ─── PAH (Group 1) Content ─── */
function PAHContent({ tab }: { tab: string }) {
  return (
    <>
      {tab === 'vasoreactivity' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-purple-500">
            <h2 className="card-header">Vasoreactivity Testing & CCB (Rec Table 7)</h2>
            <p className="text-sm text-gray-600 mb-3">Only in IPAH, HPAH, or DPAH — NOT in other PAH subgroups</p>

            <div className="p-4 bg-purple-50 rounded-lg mb-4">
              <h3 className="font-semibold text-purple-800">Positive Vasoreactivity Response</h3>
              <ul className="text-sm mt-2 space-y-1">
                <li>• Fall in mPAP ≥10 mmHg to reach mPAP ≤40 mmHg</li>
                <li>• With unchanged or increased cardiac output</li>
                <li>• ~10% of IPAH patients meet these criteria</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800">Vasoreactive → CCB Trial (Class I)</h3>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• WHO-FC I or II with haemodynamic improvement</li>
                  <li>• mPAP &lt;30 mmHg AND PVR &lt;4 WU on CCB</li>
                  <li>• <strong>Nifedipine:</strong> up to 120–240 mg/day</li>
                  <li>• <strong>Diltiazem:</strong> up to 240–720 mg/day</li>
                  <li>• <strong>Amlodipine:</strong> up to 20 mg/day</li>
                  <li>• Avoid verapamil (negative inotropic effect)</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">Not Vasoreactive → PAH Therapy</h3>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• Proceed to risk-stratified PAH treatment algorithm</li>
                  <li>• Positive response but insufficient long-term response:</li>
                  <li className="ml-4">Continue CCB + add PAH therapy (Class IIa)</li>
                  <li>• Re-assess at 3–4 months on CCB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'initial' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Initial Treatment — Non-Vasoreactive (Rec Tables 8-9)</h2>
            <p className="text-sm text-gray-600 mb-3">Based on risk stratification at diagnosis in patients without cardiopulmonary comorbidities</p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg border-2 border-green-300 bg-green-50">
                <h3 className="font-bold text-green-800">Low or Intermediate Risk</h3>
                <p className="text-sm text-green-700 mt-1 font-semibold">Initial oral combination therapy (Class I)</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• <strong>Ambrisentan + Tadalafil</strong> — recommended (Class I, Level B)</li>
                  <li>• <strong>Macitentan + Tadalafil</strong> — recommended (Class I, Level B)</li>
                  <li>• Other ERA + PDE5i combinations — may be considered (Class IIa)</li>
                  <li className="text-red-600">• Macitentan + Tadalafil + Selexipag — NOT recommended as initial triple (Class III)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border-2 border-red-300 bg-red-50">
                <h3 className="font-bold text-red-800">High Risk</h3>
                <p className="text-sm text-red-700 mt-1 font-semibold">Consider initial triple therapy including i.v./s.c. prostacyclin (Class IIa)</p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                  <li>• ERA + PDE5i + i.v./s.c. prostacyclin analogues</li>
                  <li>• Rapid uptitration of prostacyclin</li>
                  <li>• Early referral for lung transplant evaluation</li>
                  <li>• High risk indicators: WHO-FC IV, RAP ≥20, CI &lt;2.0, SvO₂ &lt;60%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-warning">
            <h3 className="font-bold text-warning mb-2">Key Changes from 2015</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Upfront oral combination therapy now standard of care (not sequential add-on)</li>
              <li>• Risk-stratified approach replaces empiric monotherapy</li>
              <li>• Initial triple therapy explicitly considered for high-risk patients</li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'sequential' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Sequential Combination Therapy (Rec Table 10)</h2>
            <p className="text-sm text-gray-600 mb-3">Based on four-strata risk assessment during follow-up</p>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800">Low Risk at Follow-up</h3>
                <p className="text-sm text-gray-700">Continue current therapy. Regular monitoring every 6–12 months.</p>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800">Intermediate-Low Risk</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• If on ERA + PDE5i: add <strong>selexipag</strong> (Class IIa)</li>
                  <li>• Switching PDE5i → <strong>riociguat</strong> may be considered (Class IIb)</li>
                  <li>• Reassess in 3–6 months</li>
                </ul>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800">Intermediate-High or High Risk</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Add macitentan to PDE5i + oral/inhaled prostacyclin</strong> (Class I)</li>
                  <li>• <strong>Add oral treprostinil</strong> to ERA or PDE5i/riociguat (Class I)</li>
                  <li>• <strong>Add i.v./s.c. prostacyclin analogues</strong> (Class IIa)</li>
                  <li>• Refer for <strong>lung transplant evaluation</strong></li>
                </ul>
              </div>

              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">Escalation to Parenteral Prostacyclins</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• i.v. epoprostenol (continuous, requires central line)</li>
                  <li>• s.c. treprostinil (continuous infusion, site pain common)</li>
                  <li>• Consider if inadequate response to oral triple therapy</li>
                  <li>• Bridge to transplant in refractory cases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card border-l-4 border-danger">
            <h3 className="font-bold text-danger mb-2">Transplant Referral Criteria (Table 20)</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Inadequate response to oral combination therapy → intermediate-high or high risk</li>
              <li>• REVEAL risk score &gt;7</li>
              <li>• High risk of death or REVEAL ≥10 despite optimized therapy including s.c./i.v. prostacyclin → list for LTx</li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'comorbidity' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">PAH with Cardiopulmonary Comorbidities (Rec Table 11)</h2>
            <p className="text-sm text-gray-600 mb-3">
              Patients with PAH who have risk factors for HFpEF (obesity, diabetes, hypertension, coronary artery disease)
              and/or low DLCO
            </p>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-4">
              <h3 className="font-semibold text-yellow-800">Identifying CP Comorbidities</h3>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>• Elderly patients with ≥3 risk factors for HFpEF</li>
                <li>• Obesity, systemic hypertension, diabetes, coronary artery disease</li>
                <li>• History of atrial fibrillation</li>
                <li>• Low DLCO (&lt;45% predicted) disproportionate to severity</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800">Treatment Approach</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Initial monotherapy</strong> with PDE5i or ERA (Class IIa)</li>
                  <li>• NOT upfront combination therapy</li>
                  <li>• Careful dose escalation</li>
                  <li>• Intermediate/high risk: add PAH medications individually (Class IIb)</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">Why Cautious Approach?</h3>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Less robust evidence for aggressive therapy</li>
                  <li>• Risk of fluid retention with ERAs</li>
                  <li>• Potential unmasking of LHD</li>
                  <li>• These patients often excluded from major PAH RCTs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 'drugs' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">PAH Drug Dosing (Table 19)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2 px-2 text-left">Drug</th>
                    <th className="py-2 px-2 text-left">Class</th>
                    <th className="py-2 px-2 text-left">Route</th>
                    <th className="py-2 px-2 text-left">Dose</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-blue-50"><td colSpan={4} className="py-1 px-2 font-bold text-blue-800">Endothelin Receptor Antagonists (ERA)</td></tr>
                  <tr><td className="py-1 px-2">Ambrisentan</td><td className="py-1 px-2">ERA</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">5 mg OD → 10 mg OD</td></tr>
                  <tr><td className="py-1 px-2">Bosentan</td><td className="py-1 px-2">ERA</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">62.5 mg BID × 4wk → 125 mg BID</td></tr>
                  <tr><td className="py-1 px-2">Macitentan</td><td className="py-1 px-2">ERA</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">10 mg OD</td></tr>

                  <tr className="bg-purple-50"><td colSpan={4} className="py-1 px-2 font-bold text-purple-800">PDE5 Inhibitors & sGC Stimulators</td></tr>
                  <tr><td className="py-1 px-2">Sildenafil</td><td className="py-1 px-2">PDE5i</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">20 mg TID (up to 80 mg TID)</td></tr>
                  <tr><td className="py-1 px-2">Tadalafil</td><td className="py-1 px-2">PDE5i</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">40 mg OD</td></tr>
                  <tr><td className="py-1 px-2">Riociguat</td><td className="py-1 px-2">sGC stim</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">1 mg TID → max 2.5 mg TID</td></tr>

                  <tr className="bg-green-50"><td colSpan={4} className="py-1 px-2 font-bold text-green-800">Prostacyclin Pathway</td></tr>
                  <tr><td className="py-1 px-2">Epoprostenol</td><td className="py-1 px-2">Prostacyclin</td><td className="py-1 px-2">i.v.</td><td className="py-1 px-2">2 ng/kg/min → uptitrate (typical 25–40)</td></tr>
                  <tr><td className="py-1 px-2">Treprostinil</td><td className="py-1 px-2">Prostacyclin</td><td className="py-1 px-2">s.c./i.v.</td><td className="py-1 px-2">1.25 ng/kg/min → uptitrate</td></tr>
                  <tr><td className="py-1 px-2">Iloprost</td><td className="py-1 px-2">Prostacyclin</td><td className="py-1 px-2">Inhaled</td><td className="py-1 px-2">2.5–5 μg × 6–9/day</td></tr>
                  <tr><td className="py-1 px-2">Selexipag</td><td className="py-1 px-2">IP receptor ag.</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">200 μg BID → max 1600 μg BID</td></tr>
                  <tr><td className="py-1 px-2">Beraprost</td><td className="py-1 px-2">Prostacyclin</td><td className="py-1 px-2">Oral</td><td className="py-1 px-2">20 μg TID → max 120 μg TID</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card border-l-4 border-danger">
            <h3 className="font-bold text-danger mb-2">Drug Interactions / Contraindications</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>Riociguat + PDE5i:</strong> Contraindicated (hypotension risk)</li>
              <li>• <strong>Bosentan + Sildenafil:</strong> Bosentan ↓ sildenafil levels (CYP3A4 induction)</li>
              <li>• <strong>ERAs:</strong> Monthly LFTs for bosentan. Check Hb (all ERAs may cause anaemia)</li>
              <li>• <strong>ACEi/ARBs/Beta-blockers:</strong> Not recommended in PAH unless required for comorbidities (Class III)</li>
            </ul>
          </div>
        </div>
      )}

      {tab === 'general' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">General Measures & Supportive Therapy (Rec Table 5)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm">Recommended (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Supervised exercise training under medical therapy</li>
                  <li>• Vaccination (COVID-19, influenza, pneumococcal)</li>
                  <li>• Iron replacement if iron-deficiency anaemia</li>
                  <li>• In-flight O₂ if PaO₂ &lt;60 mmHg at sea level</li>
                  <li>• Psychosocial support</li>
                </ul>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-800 text-sm">Consider (Class IIa-IIb)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Oral anticoagulation — individual basis, not routine (Class IIb)</li>
                  <li>• Diuretics for fluid overload</li>
                  <li>• Iron repletion even without overt anaemia (Class IIb)</li>
                  <li>• Epidural over general anaesthesia when possible (Class IIa)</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 text-sm">Not Recommended (Class III)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• ACEi, ARBs, ARNIs, SGLT-2i, beta-blockers — unless comorbid indication</li>
                  <li>• Ivabradine</li>
                  <li>• Pregnancy — strongly advised against</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 text-sm">Pregnancy (Rec Table 6)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Class I:</strong> Avoid pregnancy — counsel at diagnosis</li>
                  <li>• Contraception counselling mandatory</li>
                  <li>• If pregnant: experienced PH centre, multidisciplinary team</li>
                  <li>• ERAs are teratogenic — contraindicated in pregnancy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* ─── Groups 2/3/5 Content ─── */
function GroupsContent({ tab }: { tab: string }) {
  return (
    <>
      {tab === 'group2' && (
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

      {tab === 'group3' && (
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

      {tab === 'group5' && (
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
    </>
  )
}

/* ─── CTEPH (Group 4) Content ─── */
function CTEPHContent({ tab }: { tab: string }) {
  return (
    <>
      {tab === 'diagnosis' && (
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

      {tab === 'treatment' && (
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

      {tab === 'follow' && (
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
    </>
  )
}

'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'vasoreactivity', label: 'Vasoreactivity & CCB' },
  { id: 'initial', label: 'Initial Therapy' },
  { id: 'sequential', label: 'Sequential Therapy' },
  { id: 'comorbidity', label: 'CP Comorbidity' },
  { id: 'drugs', label: 'Drug Dosing' },
  { id: 'general', label: 'General Measures' },
]

export default function PAHTreatmentPage() {
  const { treatmentTab, setTreatmentTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">PAH Treatment (Group 1)</h1>
      <p className="text-sm text-gray-600 mb-4">Evidence-based treatment algorithm for idiopathic, heritable, or drug-associated PAH</p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTreatmentTab(t.id)}
            className={`tab-btn whitespace-nowrap ${treatmentTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {treatmentTab === 'vasoreactivity' && (
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

      {treatmentTab === 'initial' && (
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

      {treatmentTab === 'sequential' && (
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

      {treatmentTab === 'comorbidity' && (
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

      {treatmentTab === 'drugs' && (
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

      {treatmentTab === 'general' && (
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
    </div>
  )
}

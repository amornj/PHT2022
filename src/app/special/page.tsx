'use client'

import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'ctd', label: 'CTD-PAH' },
  { id: 'portal', label: 'Portal HTN' },
  { id: 'hiv', label: 'HIV' },
  { id: 'chd', label: 'CHD' },
  { id: 'pediatric', label: 'Pediatric' },
  { id: 'icu', label: 'ICU / RV Failure' },
]

export default function SpecialPage() {
  const { specialTab, setSpecialTab } = useAppStore()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Special Scenarios</h1>
      <p className="text-sm text-gray-600 mb-4">Specific PAH subsets and critical care management</p>

      <div className="flex gap-1 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setSpecialTab(t.id)}
            className={`tab-btn whitespace-nowrap ${specialTab === t.id ? 'tab-btn-active' : 'tab-btn-inactive'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {specialTab === 'ctd' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">CTD-Associated PAH (Rec Table 15)</h2>
            <p className="text-sm text-gray-600 mb-3">
              Systemic sclerosis (SSc) is the most common CTD causing PAH. SLE, MCTD also associated.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 text-sm">SSc-PAH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Prevalence 5–12% of SSc patients</li>
                  <li>• Worse prognosis than IPAH</li>
                  <li>• Annual echo screening recommended (Class I)</li>
                  <li>• DETECT algorithm for early detection</li>
                  <li>• May have concomitant ILD → careful phenotyping</li>
                  <li>• Treat per PAH algorithm — same drug classes</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm">Other CTDs</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>SLE-PAH:</strong> May respond to immunosuppression + PAH therapy</li>
                  <li>• <strong>MCTD-PAH:</strong> Similar approach to SSc-PAH</li>
                  <li>• <strong>Class I:</strong> Treat underlying CTD according to current guidelines</li>
                  <li>• RHC in all suspected cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'portal' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Portopulmonary Hypertension (Rec Table 17)</h2>
            <p className="text-sm text-gray-600 mb-3">PAH associated with portal hypertension ± liver disease</p>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-800 text-sm">Screening (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Echo recommended in symptomatic liver disease / portal HTN</li>
                  <li>• Mandatory for liver transplant evaluation</li>
                  <li>• Also screen patients evaluated for transjugular portosystemic shunt</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm">Treatment (Class IIa)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Initial monotherapy, then sequential combination if needed</li>
                  <li>• Consider liver disease severity and transplant indication</li>
                  <li>• LTx may be considered if PVR normalizes with PAH therapy (Class IIa)</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-800 text-sm">Contraindicated (Class III)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• PAH drugs NOT recommended for elevated mPAP + high CO + normal PVR</li>
                  <li>• This represents hyperdynamic circulation, not true PAH</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'hiv' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">HIV-Associated PAH (Rec Table 16)</h2>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 text-sm">Key Points</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Prevalence ~0.5% of HIV patients</li>
                  <li>• Not correlated with CD4 count or viral load</li>
                  <li>• <strong>Class I:</strong> Antiretroviral treatment according to guidelines</li>
                  <li>• <strong>Class IIa:</strong> Initial monotherapy, then sequential combination</li>
                  <li>• Consider drug interactions with HAART (especially bosentan with PIs)</li>
                  <li>• Anticoagulation not routinely recommended (bleeding risk with liver disease)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'chd' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">PAH with Congenital Heart Disease (Rec Tables 18-19, Table 21)</h2>
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 rounded-lg">
                <h3 className="font-semibold text-teal-800 text-sm">Classification (Table 21)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Eisenmenger syndrome:</strong> Large defect → reversal of shunt (R→L or bidirectional)</li>
                  <li>• <strong>PAH after defect correction:</strong> Persistent or recurrent PAH after surgery</li>
                  <li>• <strong>PAH with small/coincidental defects:</strong> Small defect unlikely to cause PAH</li>
                  <li>• <strong>PAH with systemic-to-pulmonary shunts:</strong> Moderate-large defects, still L→R</li>
                </ul>
              </div>

              <div className="p-3 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-800 text-sm">Shunt Closure Criteria (Rec Table 18)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>PVR &lt;3 WU:</strong> Closure recommended (Class I for ASD/VSD/PDA)</li>
                  <li>• <strong>PVR 3–5 WU:</strong> Shunt closure should be considered (Class IIa for ASD)</li>
                  <li>• <strong>PVR &gt;5 WU with ASD:</strong> Consider if PVR declines to &lt;5 WU on PAH treatment (Class IIb)</li>
                  <li>• <strong>PVR &gt;5 WU with ASD despite PAH treatment:</strong> NOT recommended (Class III)</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-800 text-sm">Eisenmenger Syndrome (Rec Table 19)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Bosentan</strong> recommended for symptomatic patients (Class I)</li>
                  <li>• Oral combination therapy for low/intermediate risk (Class IIa)</li>
                  <li>• i.v./s.c. prostacyclins for high risk (Class IIa)</li>
                  <li>• Phlebotomy only for hyperviscosity symptoms AND Hct &gt;65% (Class IIa)</li>
                  <li>• Routine phlebotomy — NOT recommended (Class III)</li>
                  <li>• Pregnancy — NOT recommended (Class III)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'pediatric' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Pediatric PH (Rec Table 21)</h2>
            <p className="text-sm text-gray-600 mb-3">Similar principles to adults but adapted for age (Table 22)</p>
            <div className="space-y-3">
              <div className="p-3 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-pink-800 text-sm">Key Recommendations (Class I)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Diagnostic work-up including RHC at centres with pediatric PH expertise</li>
                  <li>• Acute vasoreactivity testing in IPAH/HPAH — may benefit from CCB</li>
                  <li>• Positive response defined as: mPAP reduction ≥10 mmHg to ≤40 mmHg, with unchanged/increased CO</li>
                  <li>• Therapeutic strategy based on risk stratification, adapted for age</li>
                  <li>• Monitor treatment response serially (clinical, echo, biomarkers, exercise)</li>
                  <li>• Screen infants with bronchopulmonary dysplasia for PH</li>
                </ul>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 text-sm">Neonatal PH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Distinct approach from older children and adults (Class IIa)</li>
                  <li>• Frequent association with developmental vascular and parenchymal lung disease</li>
                  <li>• Treat underlying lung disease, optimize respiratory support before initiating PAH therapy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'icu' && (
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">ICU Management & RV Failure (Rec Table 12)</h2>
            <p className="text-sm text-gray-600 mb-3">Acute decompensated RV failure in PAH patients</p>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 text-sm">Acute RV Failure — Class I</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Involve PH physicians with ICU expertise</li>
                  <li>• Identify and treat precipitants (infection, arrhythmia, PE, non-adherence)</li>
                  <li>• Inotropes: dobutamine (first-line), milrinone</li>
                  <li>• Vasopressors: norepinephrine to maintain systemic perfusion</li>
                  <li>• Cautious fluid management — avoid volume overload</li>
                  <li>• Continue/initiate PAH-specific therapy (i.v. epoprostenol if not already on)</li>
                </ul>
              </div>

              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 text-sm">Mechanical Circulatory Support (Class IIa)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• VA-ECMO as bridge to transplant or recovery in selected patients</li>
                  <li>• Consider interhospital transfer to ECMO-capable PH centre</li>
                  <li>• Atrial septostomy — rarely used, high-risk procedure</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 text-sm">Lung Transplantation (Rec Table 13)</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Refer for LTx when intermediate-high or high risk on oral combination (Class I)</li>
                  <li>• REVEAL risk score &gt;7 → LTx evaluation</li>
                  <li>• List for LTx if high risk or REVEAL ≥10 despite optimized therapy (Class I)</li>
                  <li>• Bilateral lung transplant preferred for PAH</li>
                  <li>• Combined heart-lung transplant if irreversible cardiac dysfunction</li>
                </ul>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 text-sm">Complications</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Arrhythmias:</strong> Atrial flutter/fibrillation common; restore sinus rhythm if possible. Amiodarone preferred.</li>
                  <li>• <strong>Haemoptysis:</strong> Bronchial artery embolisation. Stop anticoagulation temporarily.</li>
                  <li>• <strong>Mechanical complications:</strong> PA aneurysm (dissection/rupture risk), LA compression</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useAppStore } from '@/store/appStore'

function classifyPH(mPAP: number, pawp: number, pvr: number) {
  if (mPAP <= 20) return { label: 'No PH', color: 'text-green-700 bg-green-50', desc: 'mPAP ≤20 mmHg — normal' }
  if (pawp <= 15 && pvr > 2) return { label: 'Pre-capillary PH', color: 'text-red-700 bg-red-50', desc: 'mPAP >20, PAWP ≤15, PVR >2 WU → Groups 1, 3, 4, or 5' }
  if (pawp > 15 && pvr <= 2) return { label: 'IpcPH (Isolated post-capillary)', color: 'text-blue-700 bg-blue-50', desc: 'mPAP >20, PAWP >15, PVR ≤2 WU → Group 2 (LHD)' }
  if (pawp > 15 && pvr > 2) return { label: 'CpcPH (Combined post-/pre-capillary)', color: 'text-purple-700 bg-purple-50', desc: 'mPAP >20, PAWP >15, PVR >2 WU → Group 2 with vascular component' }
  if (pawp <= 15 && pvr <= 2) return { label: 'Unclassified PH', color: 'text-gray-700 bg-gray-100', desc: 'mPAP >20, PAWP ≤15, PVR ≤2 WU — elevated mPAP without clear phenotype' }
  return { label: '—', color: '', desc: '' }
}

function getColor(value: number, low: number, high: number) {
  if (value <= low) return 'text-green-700'
  if (value <= high) return 'text-yellow-700'
  return 'text-red-700'
}

export default function HemodynamicsPage() {
  const { hemodynamics, setHemodynamics } = useAppStore()
  const h = hemodynamics

  const mPAP = parseFloat(h.mPAP)
  const pawp = parseFloat(h.PAWP)
  const co = parseFloat(h.CO)
  const ci = parseFloat(h.CI)
  const rap = parseFloat(h.RAP)
  const svo2 = parseFloat(h.SvO2)
  const sPAP = parseFloat(h.sPAP)
  const dPAP = parseFloat(h.dPAP)
  const height = parseFloat(h.height)
  const weight = parseFloat(h.weight)

  // Calculated values
  const bsa = height > 0 && weight > 0 ? 0.007184 * Math.pow(height, 0.725) * Math.pow(weight, 0.425) : NaN
  const calcMPAP = sPAP > 0 && dPAP > 0 ? (sPAP + 2 * dPAP) / 3 : NaN
  const pvr = mPAP > 0 && pawp >= 0 && co > 0 ? (mPAP - pawp) / co : NaN
  const calcCI = co > 0 && bsa > 0 ? co / bsa : NaN
  const dPG = dPAP > 0 && pawp >= 0 ? dPAP - pawp : NaN
  const tpg = mPAP > 0 && pawp >= 0 ? mPAP - pawp : NaN

  const canClassify = mPAP > 0 && pawp >= 0 && pvr > 0
  const phClass = canClassify ? classifyPH(mPAP, pawp, pvr > 0 ? pvr : 0) : null

  const InputField = ({ label, unit, value, field }: { label: string; unit: string; value: string; field: string }) => (
    <div>
      <label className="text-xs font-medium text-gray-600">{label} ({unit})</label>
      <input
        type="number"
        step="any"
        value={value}
        onChange={(e) => setHemodynamics({ [field]: e.target.value })}
        className="input-field mt-1 text-sm"
        placeholder={label}
      />
    </div>
  )

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Hemodynamic Calculator</h1>
      <p className="text-sm text-gray-600 mb-4">Enter RHC values to classify PH phenotype and calculate derived indices</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="card">
          <h2 className="card-header">Measured Values</h2>
          <div className="grid grid-cols-2 gap-3">
            <InputField label="sPAP" unit="mmHg" value={h.sPAP} field="sPAP" />
            <InputField label="dPAP" unit="mmHg" value={h.dPAP} field="dPAP" />
            <InputField label="mPAP" unit="mmHg" value={h.mPAP} field="mPAP" />
            <InputField label="PAWP" unit="mmHg" value={h.PAWP} field="PAWP" />
            <InputField label="CO" unit="L/min" value={h.CO} field="CO" />
            <InputField label="CI" unit="L/min/m²" value={h.CI} field="CI" />
            <InputField label="RAP" unit="mmHg" value={h.RAP} field="RAP" />
            <InputField label="SvO₂" unit="%" value={h.SvO2} field="SvO2" />
            <InputField label="Height" unit="cm" value={h.height} field="height" />
            <InputField label="Weight" unit="kg" value={h.weight} field="weight" />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="card">
            <h2 className="card-header">Calculated Values</h2>
            <div className="space-y-2 text-sm">
              {!isNaN(bsa) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>BSA (DuBois)</span>
                  <span className="font-semibold">{bsa.toFixed(2)} m²</span>
                </div>
              )}
              {!isNaN(calcMPAP) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Calculated mPAP</span>
                  <span className={`font-semibold ${calcMPAP > 20 ? 'text-red-600' : 'text-green-600'}`}>
                    {calcMPAP.toFixed(1)} mmHg
                  </span>
                </div>
              )}
              {!isNaN(pvr) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>PVR</span>
                  <span className={`font-semibold ${pvr > 2 ? 'text-red-600' : 'text-green-600'}`}>
                    {pvr.toFixed(1)} WU
                  </span>
                </div>
              )}
              {!isNaN(calcCI) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Calculated CI</span>
                  <span className={`font-semibold ${calcCI < 2.5 ? 'text-red-600' : 'text-green-600'}`}>
                    {calcCI.toFixed(2)} L/min/m²
                  </span>
                </div>
              )}
              {!isNaN(tpg) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>TPG (mPAP - PAWP)</span>
                  <span className="font-semibold">{tpg.toFixed(1)} mmHg</span>
                </div>
              )}
              {!isNaN(dPG) && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>DPG (dPAP - PAWP)</span>
                  <span className={`font-semibold ${dPG >= 7 ? 'text-red-600' : 'text-green-600'}`}>
                    {dPG.toFixed(1)} mmHg
                  </span>
                </div>
              )}
              {mPAP > 0 && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>mPAP</span>
                  <span className={`font-semibold ${mPAP > 20 ? 'text-red-600' : 'text-green-600'}`}>
                    {mPAP} mmHg {mPAP > 20 ? '(elevated)' : '(normal)'}
                  </span>
                </div>
              )}
              {rap > 0 && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>RAP</span>
                  <span className={`font-semibold ${getColor(rap, 8, 14)}`}>
                    {rap} mmHg {rap > 14 ? '(high)' : rap > 8 ? '(borderline)' : '(normal)'}
                  </span>
                </div>
              )}
              {svo2 > 0 && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>SvO₂</span>
                  <span className={`font-semibold ${svo2 < 60 ? 'text-red-600' : svo2 < 65 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {svo2}% {svo2 < 60 ? '(poor prognosis)' : svo2 < 65 ? '(borderline)' : '(adequate)'}
                  </span>
                </div>
              )}
              {ci > 0 && (
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>CI (measured)</span>
                  <span className={`font-semibold ${ci < 2.0 ? 'text-red-600' : ci < 2.5 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {ci} L/min/m²
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Classification result */}
          {phClass && (
            <div className={`card border-2 ${phClass.color} border-current`}>
              <div className={`p-4 rounded-lg ${phClass.color}`}>
                <h2 className="text-lg font-bold">{phClass.label}</h2>
                <p className="text-sm mt-1">{phClass.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reference */}
      <div className="card mt-4 border-l-4 border-primary">
        <h3 className="font-bold text-primary mb-2">Prognostic Thresholds</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="p-2 bg-gray-50 rounded"><strong>RAP</strong><br />Low risk: &lt;8 mmHg<br />High risk: &gt;14 mmHg</div>
          <div className="p-2 bg-gray-50 rounded"><strong>CI</strong><br />Low risk: ≥2.5 L/min/m²<br />High risk: &lt;2.0 L/min/m²</div>
          <div className="p-2 bg-gray-50 rounded"><strong>SvO₂</strong><br />Low risk: &gt;65%<br />High risk: &lt;60%</div>
          <div className="p-2 bg-gray-50 rounded"><strong>PVR</strong><br />Normal: ≤2 WU<br />Severe: &gt;5 WU</div>
        </div>
      </div>
    </div>
  )
}

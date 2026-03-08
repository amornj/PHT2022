'use client'

import { useState } from 'react'
import { useAppStore } from '@/store/appStore'

type RiskLevel = 'low' | 'intermediate-low' | 'intermediate-high' | 'high' | ''

const riskColors: Record<string, string> = {
  low: 'bg-green-100 text-green-800 border-green-300',
  'intermediate-low': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'intermediate-high': 'bg-orange-100 text-orange-800 border-orange-300',
  high: 'bg-red-100 text-red-800 border-red-300',
}

export default function RiskPage() {
  const [tab, setTab] = useState<'diagnosis' | 'followup'>('diagnosis')
  const { risk, setRisk } = useAppStore()

  // Three-strata model at diagnosis (Table 16)
  function getThreeStrataRisk(): { level: string; color: string; desc: string } | null {
    const whoFC = parseInt(risk.whoFC)
    const sixMWD = parseFloat(risk.sixMWD)
    const bnp = parseFloat(risk.bnpNTproBNP)
    const rapVal = parseFloat(risk.rap)
    const ciVal = parseFloat(risk.ci)
    const svo2Val = parseFloat(risk.svo2)

    const markers: RiskLevel[] = []

    if (whoFC) {
      if (whoFC <= 2) markers.push('low')
      else if (whoFC === 3) markers.push('intermediate-low')
      else markers.push('high')
    }
    if (sixMWD > 0) {
      if (sixMWD > 440) markers.push('low')
      else if (sixMWD >= 165) markers.push('intermediate-low')
      else markers.push('high')
    }
    if (bnp > 0) {
      if (risk.bnpType === 'NT-proBNP') {
        if (bnp < 300) markers.push('low')
        else if (bnp <= 1400) markers.push('intermediate-low')
        else markers.push('high')
      } else {
        if (bnp < 50) markers.push('low')
        else if (bnp <= 200) markers.push('intermediate-low')
        else markers.push('high')
      }
    }
    if (rapVal > 0) {
      if (rapVal < 8) markers.push('low')
      else if (rapVal <= 14) markers.push('intermediate-low')
      else markers.push('high')
    }
    if (ciVal > 0) {
      if (ciVal >= 2.5) markers.push('low')
      else if (ciVal >= 2.0) markers.push('intermediate-low')
      else markers.push('high')
    }
    if (svo2Val > 0) {
      if (svo2Val > 65) markers.push('low')
      else if (svo2Val >= 60) markers.push('intermediate-low')
      else markers.push('high')
    }
    if (risk.syncope) markers.push('high')
    if (risk.pericardia) markers.push('high')

    if (markers.length === 0) return null

    const highCount = markers.filter(m => m === 'high').length
    const lowCount = markers.filter(m => m === 'low').length

    if (highCount >= 2 || (markers.length <= 3 && highCount >= 1 && lowCount === 0)) {
      return { level: 'High Risk', color: riskColors.high, desc: 'Estimated 1-year mortality >20%. Consider upfront triple therapy including i.v./s.c. prostacyclin. Refer for transplant evaluation.' }
    }
    if (lowCount >= markers.length * 0.6) {
      return { level: 'Low Risk', color: riskColors.low, desc: 'Estimated 1-year mortality <5%. Initial oral combination therapy (ambrisentan + tadalafil or equivalent).' }
    }
    return { level: 'Intermediate Risk', color: riskColors['intermediate-low'], desc: 'Estimated 1-year mortality 5-20%. Initial oral combination therapy recommended. Consider individual assessment.' }
  }

  // Four-strata model at follow-up (Table 18)
  function getFourStrataRisk(): { level: string; color: string; desc: string } | null {
    const whoFC = parseInt(risk.whoFC)
    const sixMWD = parseFloat(risk.sixMWD)
    const bnp = parseFloat(risk.bnpNTproBNP)

    if (!whoFC && !sixMWD && !bnp) return null

    let fcRisk: RiskLevel = ''
    let mwdRisk: RiskLevel = ''
    let bnpRisk: RiskLevel = ''

    if (whoFC) {
      if (whoFC <= 2) fcRisk = 'low'
      else if (whoFC === 3) fcRisk = 'intermediate-low'
      else fcRisk = 'high'
    }
    if (sixMWD > 0) {
      if (sixMWD > 440) mwdRisk = 'low'
      else if (sixMWD >= 320) mwdRisk = 'intermediate-low'
      else if (sixMWD >= 165) mwdRisk = 'intermediate-high'
      else mwdRisk = 'high'
    }
    if (bnp > 0) {
      if (risk.bnpType === 'NT-proBNP') {
        if (bnp < 300) bnpRisk = 'low'
        else if (bnp <= 660) bnpRisk = 'intermediate-low'
        else if (bnp <= 1400) bnpRisk = 'intermediate-high'
        else bnpRisk = 'high'
      } else {
        if (bnp < 50) bnpRisk = 'low'
        else if (bnp <= 150) bnpRisk = 'intermediate-low'
        else if (bnp <= 300) bnpRisk = 'intermediate-high'
        else bnpRisk = 'high'
      }
    }

    const levels = [fcRisk, mwdRisk, bnpRisk].filter(Boolean)
    if (levels.length === 0) return null

    const hasHigh = levels.includes('high')
    const hasIntHigh = levels.includes('intermediate-high')
    const allLow = levels.every(l => l === 'low')
    const allLowOrIntLow = levels.every(l => l === 'low' || l === 'intermediate-low')

    if (hasHigh) return { level: 'High Risk', color: riskColors.high, desc: 'Consider adding i.v./s.c. prostacyclin analogues. Refer for lung transplant evaluation.' }
    if (hasIntHigh) return { level: 'Intermediate-High Risk', color: riskColors['intermediate-high'], desc: 'Consider adding macitentan/PDE5i to prostacyclin analogues. Evaluate for transplant referral.' }
    if (allLow) return { level: 'Low Risk', color: riskColors.low, desc: 'Continue current therapy. Monitor at 6–12 month intervals.' }
    if (allLowOrIntLow) return { level: 'Intermediate-Low Risk', color: riskColors['intermediate-low'], desc: 'Consider adding selexipag. Switching PDE5i to riociguat may be considered.' }

    return { level: 'Intermediate-Low Risk', color: riskColors['intermediate-low'], desc: 'Consider therapy escalation based on individual assessment.' }
  }

  const riskResult = tab === 'diagnosis' ? getThreeStrataRisk() : getFourStrataRisk()

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-2">Risk Stratification</h1>
      <p className="text-sm text-gray-600 mb-4">
        {tab === 'diagnosis'
          ? 'Three-strata model at diagnosis (Table 16) — uses haemodynamics + clinical markers'
          : 'Simplified four-strata model at follow-up (Table 18) — WHO-FC, 6MWD, BNP/NT-proBNP'}
      </p>

      <div className="flex gap-1 mb-4">
        <button onClick={() => setTab('diagnosis')} className={`tab-btn ${tab === 'diagnosis' ? 'tab-btn-active' : 'tab-btn-inactive'}`}>
          At Diagnosis (3-strata)
        </button>
        <button onClick={() => setTab('followup')} className={`tab-btn ${tab === 'followup' ? 'tab-btn-active' : 'tab-btn-inactive'}`}>
          Follow-up (4-strata)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card">
          <h2 className="card-header">Risk Parameters</h2>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-600">WHO Functional Class</label>
              <select value={risk.whoFC} onChange={(e) => setRisk({ whoFC: e.target.value })} className="input-field mt-1">
                <option value="">Select</option>
                <option value="1">I — No limitation</option>
                <option value="2">II — Slight limitation</option>
                <option value="3">III — Marked limitation</option>
                <option value="4">IV — Unable to carry out any activity</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">6-Minute Walk Distance (m)</label>
              <input type="number" value={risk.sixMWD} onChange={(e) => setRisk({ sixMWD: e.target.value })} className="input-field mt-1" placeholder="6MWD in meters" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Biomarker Type</label>
              <select value={risk.bnpType} onChange={(e) => setRisk({ bnpType: e.target.value as 'BNP' | 'NT-proBNP' })} className="input-field mt-1">
                <option value="NT-proBNP">NT-proBNP (pg/mL)</option>
                <option value="BNP">BNP (pg/mL)</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">{risk.bnpType} (pg/mL)</label>
              <input type="number" value={risk.bnpNTproBNP} onChange={(e) => setRisk({ bnpNTproBNP: e.target.value })} className="input-field mt-1" placeholder="Value" />
            </div>

            {tab === 'diagnosis' && (
              <>
                <div>
                  <label className="text-xs font-medium text-gray-600">RAP (mmHg)</label>
                  <input type="number" value={risk.rap} onChange={(e) => setRisk({ rap: e.target.value })} className="input-field mt-1" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600">CI (L/min/m²)</label>
                  <input type="number" step="0.1" value={risk.ci} onChange={(e) => setRisk({ ci: e.target.value })} className="input-field mt-1" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600">SvO₂ (%)</label>
                  <input type="number" value={risk.svo2} onChange={(e) => setRisk({ svo2: e.target.value })} className="input-field mt-1" />
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={risk.syncope} onChange={(e) => setRisk({ syncope: e.target.checked })} className="rounded" />
                    Syncope
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={risk.pericardia} onChange={(e) => setRisk({ pericardia: e.target.checked })} className="rounded" />
                    Pericardial effusion
                  </label>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {riskResult && (
            <div className={`card border-2 ${riskResult.color}`}>
              <h2 className="text-xl font-bold">{riskResult.level}</h2>
              <p className="text-sm mt-2">{riskResult.desc}</p>
            </div>
          )}

          {/* Reference tables */}
          {tab === 'followup' && (
            <div className="card">
              <h3 className="font-bold text-primary mb-2 text-sm">Four-Strata Thresholds (Table 18)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th className="py-1 px-2 text-left bg-gray-100">Parameter</th>
                      <th className="py-1 px-2 text-left bg-green-100">Low</th>
                      <th className="py-1 px-2 text-left bg-yellow-100">Int-Low</th>
                      <th className="py-1 px-2 text-left bg-orange-100">Int-High</th>
                      <th className="py-1 px-2 text-left bg-red-100">High</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr><td className="py-1 px-2 font-medium">WHO-FC</td><td className="py-1 px-2">I–II</td><td className="py-1 px-2">III</td><td className="py-1 px-2">III</td><td className="py-1 px-2">IV</td></tr>
                    <tr><td className="py-1 px-2 font-medium">6MWD (m)</td><td className="py-1 px-2">&gt;440</td><td className="py-1 px-2">320–440</td><td className="py-1 px-2">165–319</td><td className="py-1 px-2">&lt;165</td></tr>
                    <tr><td className="py-1 px-2 font-medium">BNP (pg/mL)</td><td className="py-1 px-2">&lt;50</td><td className="py-1 px-2">50–150</td><td className="py-1 px-2">150–300</td><td className="py-1 px-2">&gt;300</td></tr>
                    <tr><td className="py-1 px-2 font-medium">NT-proBNP</td><td className="py-1 px-2">&lt;300</td><td className="py-1 px-2">300–660</td><td className="py-1 px-2">660–1400</td><td className="py-1 px-2">&gt;1400</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="card border-l-4 border-primary">
            <h3 className="font-bold text-primary mb-2 text-sm">Treatment Implications</h3>
            <div className="text-xs text-gray-700 space-y-1">
              <p><span className="badge-green">Low</span> → Continue current therapy, monitor 6–12 monthly</p>
              <p><span className="badge-yellow">Int-Low</span> → Consider adding selexipag or switching PDE5i→riociguat</p>
              <p className="bg-orange-50 p-1 rounded"><span className="badge-red">Int-High / High</span> → Add i.v./s.c. prostacyclin. Transplant evaluation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

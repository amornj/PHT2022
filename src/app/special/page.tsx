'use client'

import Image from 'next/image'
import { useAppStore } from '@/store/appStore'

const tabs = [
  { id: 'ctd', label: 'CTD-PAH' },
  { id: 'ipah-lung', label: 'IPAH Lung Phenotype' },
  { id: 'ph-lhd', label: 'PH-LHD' },
  { id: 'copd-ph', label: 'PHT-COPD' },
  { id: 'ph-ild', label: 'PH-ILD' },
  { id: 'fvc-dlco', label: 'FVC/DLCO' },
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
          <div className="card border-l-4 border-l-red-600 bg-red-50/40">
            <h2 className="card-header text-red-800">CTD-PH Warning: Not All CTD-PH Is Group 1 PAH</h2>
            <p className="text-sm text-gray-700 mb-2">
              In connective tissue disease, pulmonary hypertension can fit <strong>Group 1, 2, 3, or 4</strong> — and some patients overlap.
              Correct phenotyping matters because PAH drugs help <strong>Group 1</strong> but may worsen congestion, gas exchange,
              or edema in <strong>Group 2/3</strong> and can be risky in <strong>PVOD-like disease</strong>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-red-100"><strong>Group 1</strong><br />True CTD-PAH</div>
              <div className="p-2 bg-white rounded border border-red-100"><strong>Group 2</strong><br />Myocardial / valvular / diastolic disease</div>
              <div className="p-2 bg-white rounded border border-red-100"><strong>Group 3</strong><br />ILD / hypoxia / overlap lung disease</div>
              <div className="p-2 bg-white rounded border border-red-100"><strong>Group 4</strong><br />CTEPH / thromboembolic phenotype</div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">CTD-PAH Phenotyping & Clinical Nuance</h2>
            <p className="text-sm text-gray-600 mb-3">
              Systemic sclerosis (SSc) is the dominant CTD-PAH phenotype in Western practice, but SLE, MCTD, pSS, RA,
              and inflammatory myopathies can all produce different PH mechanisms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Phenotype Before Treatment</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Confirm precapillary PH with <strong>RHC</strong></li>
                  <li>• Decide if the patient best fits <strong>Group 1 vs 2 vs 3 vs 4</strong></li>
                  <li>• Reassess over time — CTD patients may shift phenotype</li>
                  <li>• Mild ILD or cardiac disease can completely change treatment meaning</li>
                </ul>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 text-sm mb-2">High-Yield Clues</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Low DLCO</strong>, rising <strong>FVC/DLCO</strong>, RV dilation, NT-proBNP</li>
                  <li>• ILD burden pushes toward <strong>Group 3</strong></li>
                  <li>• LV dysfunction / valvular disease pushes toward <strong>Group 2</strong></li>
                  <li>• V/Q mismatch or thromboembolic history should trigger <strong>Group 4</strong> work-up</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm">SSc-PAH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Prevalence ~8–12% and historically worse prognosis than IPAH</li>
                  <li>• Annual screening is essential; DETECT-style logic is useful</li>
                  <li>• Risk markers: <strong>low DLCO</strong>, <strong>FVC/DLCO &gt;1.6</strong>, ACA / anti-U3-RNP, telangiectasia, digital ulcers, NT-proBNP</li>
                  <li>• SSc patients can also develop <strong>Group 2</strong>, <strong>Group 3</strong>, or mixed phenotypes</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 text-sm">Other CTDs</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>SLE-PAH:</strong> immune-active phenotype more plausible; some respond to immunosuppression</li>
                  <li>• <strong>MCTD-PAH:</strong> often younger; can have vascular + parenchymal + thrombotic overlap</li>
                  <li>• <strong>pSS-PAH:</strong> rare, but can behave severely</li>
                  <li>• <strong>RA / inflammatory myopathies:</strong> often PH from non-Group 1 mechanisms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">SSc Screening & PVOD Overlap</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">Screening in SSc</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Annual screening</strong> is recommended</li>
                  <li>• Echo + NT-proBNP + pulmonary function trends matter</li>
                  <li>• DETECT logic is especially useful when disease duration is &gt;3 years and DLCO is reduced</li>
                  <li>• New dyspnea always deserves full evaluation, even if prior screens were reassuring</li>
                </ul>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-800 text-sm">Think PVOD-Like Disease If…</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Very low DLCO</strong></li>
                  <li>• Resting or severe exertional hypoxemia</li>
                  <li>• HRCT: septal thickening, mediastinal adenopathy, centrilobular ground-glass opacities</li>
                  <li>• Vasodilators may worsen pulmonary edema or gas exchange</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Treatment Nuance in CTD-PAH</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm">PAH Therapy</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Use standard Group 1 PAH therapy only after phenotype is clear</li>
                  <li>• Upfront combination therapy is often appropriate in true CTD-PAH</li>
                  <li>• Routine anticoagulation is <strong>not</strong> recommended in CTD-PAH</li>
                  <li>• Vasoreactivity testing is usually not helpful in CTD-PAH</li>
                </ul>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 text-sm">Immunosuppression</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Can help:</strong> SLE-, MCTD-, and sometimes pSS-associated PAH</li>
                  <li>• <strong>Usually does not help:</strong> classic SSc-PAH</li>
                  <li>• Treat the underlying rheumatic disease per CTD guidelines, but do not confuse this with proven PAH reversal in SSc</li>
                </ul>
              </div>
              <div className="p-3 bg-pink-50 rounded-lg border border-pink-100">
                <h3 className="font-semibold text-pink-800 text-sm">Advanced / Emerging</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Sotatercept</strong> is promising, but telangiectasia / bleeding issues may matter more in CTD patients</li>
                  <li>• Early transplant planning is important in progressive disease</li>
                  <li>• Esophageal dysmotility / aspiration risk can complicate transplant candidacy in SSc</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'ipah-lung' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-l-amber-500 bg-amber-50/40">
            <h2 className="card-header text-amber-800">IPAH Lung Phenotype Warning</h2>
            <p className="text-sm text-gray-700 mb-2">
              Some patients who meet hemodynamic criteria for <strong>IPAH</strong> may actually behave more like
              <strong> Group 3 PH</strong> when they have a <strong>smoking history</strong> and <strong>DLCO &lt;45%</strong>.
              The Lancet registry analysis suggests these patients are not classical IPAH.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Older</strong><br />Usually ~70 years</div>
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Smoking exposed</strong><br />Current or former smoker</div>
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Gas transfer signal</strong><br />Very low DLCO despite limited CT change</div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">How to Recognize the Lung Phenotype</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Typical Pattern</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Smoking history</li>
                  <li>• <strong>DLCO &lt;45%</strong> predicted</li>
                  <li>• Often normal / near-normal spirometry</li>
                  <li>• Minimal or only mild parenchymal CT changes</li>
                  <li>• Older age and more often male than classical IPAH</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm mb-2">Why It Matters</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Prognosis is much worse than classical IPAH</li>
                  <li>• Response to PAH therapy is weaker</li>
                  <li>• Clinical behavior resembles <strong>Group 3 PH</strong> more than classical IPAH</li>
                  <li>• Do not reflexively assume this is standard Group 1 biology</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Classical IPAH vs IPAH Lung Phenotype</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">Classical IPAH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Younger</li>
                  <li>• More often female</li>
                  <li>• Better treatment response</li>
                  <li>• Better long-term survival</li>
                  <li>• DLCO usually not profoundly reduced</li>
                </ul>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                <h3 className="font-semibold text-orange-800 text-sm">IPAH with Lung Phenotype</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Older, often male</li>
                  <li>• Smoking-related background</li>
                  <li>• Markedly low DLCO</li>
                  <li>• Much smaller improvement in WHO FC / 6MWD / NT-proBNP</li>
                  <li>• Survival approaches Group 3 PH</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Registry Signal: Therapy Response & Survival</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">Response at First Follow-up (COMPERA)</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• WHO class improvement: <strong>54%</strong> classical IPAH vs <strong>26%</strong> lung phenotype</li>
                  <li>• 6MWD gain: <strong>63 m</strong> vs <strong>25 m</strong></li>
                  <li>• NT-proBNP reduction: <strong>58%</strong> vs <strong>27%</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">Survival Signal</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 5-year survival classical IPAH: <strong>~80–84%</strong></li>
                  <li>• 5-year survival lung phenotype: <strong>~21–31%</strong></li>
                  <li>• Very close to published Group 3 PH survival</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Practical Approach</h2>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 text-sm">When to suspect it</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Older patient labeled IPAH</li>
                  <li>• Smoking history</li>
                  <li>• DLCO profoundly reduced out of proportion to spirometry</li>
                  <li>• Minimal CT abnormalities but unexpectedly poor treatment response</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 text-sm">Clinical mindset</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Re-check whether the patient truly fits classical Group 1 IPAH</li>
                  <li>• Think of this as a possible <strong>smoking-related pulmonary vascular phenotype</strong></li>
                  <li>• Set expectations: poorer response and poorer prognosis than classical IPAH</li>
                  <li>• Trial evidence is still limited — avoid overconfidence with standard PAH escalation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'ph-lhd' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-l-blue-700 bg-blue-50/40">
            <h2 className="card-header text-blue-800">PH-LHD (Group 2) Core Warning</h2>
            <p className="text-sm text-gray-700 mb-2">
              Pulmonary hypertension due to left heart disease is a <strong>phenotyping-first problem</strong>.
              The hardest real-world error is misclassifying <strong>PH-HFpEF</strong> as true PAH.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-blue-100"><strong>IpcPH</strong><br />Passive post-capillary pressure transmission</div>
              <div className="p-2 bg-white rounded border border-blue-100"><strong>CpcPH</strong><br />Post-capillary PH plus pulmonary vascular remodeling</div>
              <div className="p-2 bg-white rounded border border-blue-100"><strong>Diagnostic trap</strong><br />Resting wedge may miss occult HFpEF</div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Why PH-LHD Is Difficult</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">Common problems</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• PH-LHD is common but heterogeneous</li>
                  <li>• PH-HFpEF can mimic PAH</li>
                  <li>• A single resting PAWP value can be misleading</li>
                  <li>• Atrial arrhythmia / LA dysfunction often point toward Group 2 biology</li>
                </ul>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 text-sm mb-2">When to think Group 2 first</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Older patient with HFpEF phenotype</li>
                  <li>• Hypertension, obesity, diabetes, AF</li>
                  <li>• Left atrial enlargement / diastolic dysfunction</li>
                  <li>• Valvular heart disease or cardiomyopathy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Phenotyping: Clear Definition of IpcPH vs CpcPH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">IpcPH = Isolated Post-capillary PH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>mPAP &gt;20 mmHg</strong></li>
                  <li>• <strong>PAWP &gt;15 mmHg</strong></li>
                  <li>• <strong>PVR ≤2 WU</strong></li>
                  <li>• Main mechanism = passive backward transmission of elevated left-sided filling pressure</li>
                  <li>• Think congestion / HFpEF / valvular disease first</li>
                </ul>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 text-sm">CpcPH = Combined Post- and Pre-capillary PH</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>mPAP &gt;20 mmHg</strong></li>
                  <li>• <strong>PAWP &gt;15 mmHg</strong></li>
                  <li>• <strong>PVR &gt;2 WU</strong></li>
                  <li>• Means left-sided filling pressure problem <strong>plus pulmonary vascular remodeling</strong></li>
                  <li>• Usually worse RV burden, worse exercise limitation, and worse prognosis than IpcPH</li>
                </ul>
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-gray-700">
              <strong>Clinical pearl:</strong> CpcPH is <em>not</em> classic PAH. It is still Group 2 PH, but with a stronger pulmonary vascular component.
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">How to Clarify the Diagnosis</h2>
            <div className="space-y-3">
              <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 text-sm">Stepwise approach</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Identify underlying cardiac disease first</li>
                  <li>• Use echo, LA / LV clues, and HFpEF probability tools</li>
                  <li>• Confirm with RHC</li>
                  <li>• If PAWP is borderline or phenotype remains uncertain, use provocative testing</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm">When provocative testing is useful</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Older patient with HFpEF risk factors but resting PAWP not clearly elevated</li>
                  <li>• Suspected occult left heart disease despite precapillary-looking hemodynamics</li>
                  <li>• Discordance between symptoms / imaging and resting RHC</li>
                  <li>• Borderline wedge should not falsely reassure you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Provocative Testing: Practical How-To</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm">1. Fluid Loading</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Perform during RHC in expert setting</li>
                  <li>• Give <strong>500 mL normal saline over 5–10 min</strong></li>
                  <li>• Re-measure PAWP immediately after infusion</li>
                  <li>• <strong>PAWP &gt;18 mmHg</strong> after fluid loading supports occult PH-LHD / HFpEF physiology</li>
                </ul>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 text-sm">2. Passive Leg Raise</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Useful bedside / cath-lab preload maneuver</li>
                  <li>• Raise legs to ~45° from semi-recumbent position</li>
                  <li>• Watch for rise in PAWP / filling pressure surrogates</li>
                  <li>• Less validated than formal saline challenge, but can support suspicion of preload-sensitive occult HFpEF</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">3. Exercise Testing</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Best done as <strong>exercise RHC</strong> in specialized centers</li>
                  <li>• Consider when rest hemodynamics are borderline but history strongly suggests HFpEF / Group 2 PH</li>
                  <li>• Look for abnormal rise in PAWP with exercise</li>
                  <li>• Combine with clinical context, echo, CPET, and LA/LV phenotype</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Treatment Nuance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm">What to treat</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Volume and congestion</li>
                  <li>• Rhythm / atrial disease</li>
                  <li>• Valvular disease</li>
                  <li>• Guideline-directed HF therapy</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm">What to avoid</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Do not reflexively use PAH drugs for Group 2 PH</li>
                  <li>• Most PAH-targeted therapy trials in PH-LHD have been neutral or harmful</li>
                  <li>• Fluid retention / worsening HF is a real risk</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Key Figures</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Figure 1 helps visualize the conceptual spectrum from isolated post-capillary PH to combined post- and pre-capillary PH.
                </p>
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <Image
                    src="/images/ph-lhd-figure1.png"
                    alt="PH-LHD conceptual figure"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">
                  Figure 2 highlights the practical diagnostic pathway and where provocative testing helps uncover occult PH-LHD / PH-HFpEF.
                </p>
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <Image
                    src="/images/ph-lhd-figure2.png"
                    alt="PH-LHD diagnostic figure"
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Future / Advanced Perspective</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">What the field needs</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Better IpcPH vs CpcPH phenotyping</li>
                  <li>• More longitudinal RHC / MRI / CPET data</li>
                  <li>• Better biomarkers and phenomapping</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">Clinical takeaway</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Group 2 PH is common, but not simple</li>
                  <li>• The key mistake is overcalling PAH</li>
                  <li>• Correct diagnosis changes everything</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'copd-ph' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-l-amber-600 bg-amber-50/40">
            <h2 className="card-header text-amber-800">PHT-COPD: Why This Is Different</h2>
            <p className="text-sm text-gray-700 mb-2">
              Pulmonary hypertension in COPD is usually <strong>not classic PAH</strong>. It carries a <strong>poor prognosis</strong>,
              often reflects mixed hypoxic / vascular / parenchymal disease, and usually shows a <strong>weak or absent response to pulmonary vasodilators</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Poor prognosis</strong><br />Even modest PH worsens survival and RV burden</div>
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Different treatment logic</strong><br />Optimize COPD / oxygen first, not PAH-drug reflex</div>
              <div className="p-2 bg-white rounded border border-amber-100"><strong>Different threshold nuance</strong><br />PVR &gt;5 WU is especially useful for severe vascular phenotype</div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Why COPD-PH Is Not Group 1 PAH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Typical COPD-PH biology</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Chronic hypoxic vasoconstriction</li>
                  <li>• Capillary bed loss / vascular pruning</li>
                  <li>• Vascular remodeling on top of lung disease</li>
                  <li>• Mixed ventilatory + circulatory limitation</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm mb-2">Why vasodilators disappoint</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Hemodynamic gain does not guarantee functional gain</li>
                  <li>• Can worsen <strong>V/Q mismatch</strong> and oxygenation</li>
                  <li>• Trials have mostly been neutral or harmful</li>
                  <li>• This is very different from classic PAH logic</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Recognizing the Severe Pulmonary Vascular Phenotype</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 text-sm">What to look for</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• RV burden out of proportion to spirometry</li>
                  <li>• Very low DLCO</li>
                  <li>• Severe hemodynamics despite only moderate airflow limitation</li>
                  <li>• Symptoms worse than expected from lung mechanics alone</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">PVR cut-off nuance</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Modern precapillary PH definition uses <strong>PVR &gt;2 WU</strong></li>
                  <li>• In COPD, the more clinically important severe vascular phenotype often aligns better with <strong>PVR &gt;5 WU</strong></li>
                  <li>• This higher threshold is useful for identifying disproportionate disease and worse prognosis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Practical Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">What to do</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Optimize inhaled COPD therapy</li>
                  <li>• Use long-term oxygen when indicated</li>
                  <li>• Pulmonary rehabilitation</li>
                  <li>• Treat sleep-disordered breathing if present</li>
                  <li>• Refer severe / disproportionate cases to PH expert centers</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">What not to do</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Do not assume COPD-PH should be treated like Group 1 PAH</li>
                  <li>• Do not overcall mild COPD-PH as severe vascular disease without full phenotype review</li>
                  <li>• Be cautious about pulmonary vasodilators outside expert-selected cases / trials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Figure 2: Suggested Approach to COPD-PH</h2>
            <p className="text-sm text-gray-600 mb-3">
              This figure highlights the chapter's practical management logic: supportive therapy and COPD optimization first,
              with expert-center referral and selective consideration of advanced pathways only in carefully phenotyped severe cases.
            </p>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/images/copd-figure2.png"
                alt="Figure 2 approach to pulmonary hypertension in COPD"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}

      {specialTab === 'ph-ild' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-l-violet-600 bg-violet-50/40">
            <h2 className="card-header text-violet-800">PH-ILD: Why This Is Different</h2>
            <p className="text-sm text-gray-700 mb-2">
              PH associated with interstitial lung disease carries a <strong>poor prognosis</strong> and should not be treated like classic PAH.
              The central issue is deciding whether PH is proportional to the ILD burden or reflects a stronger pulmonary vascular phenotype.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-white rounded border border-violet-100"><strong>Poor prognosis</strong><br />PH worsens exercise capacity, RV burden, and survival</div>
              <div className="p-2 bg-white rounded border border-violet-100"><strong>Different treatment logic</strong><br />ILD optimization + oxygen + rehab come first</div>
              <div className="p-2 bg-white rounded border border-violet-100"><strong>Not PAH</strong><br />Systemic vasodilators often disappoint or worsen gas exchange</div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Why PH-ILD Is Distinct</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-sm mb-2">Core pathobiology</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Parenchymal fibrosis and gas exchange impairment are central</li>
                  <li>• Hypoxic vasoconstriction + vascular remodeling both matter</li>
                  <li>• V/Q mismatch risk is a major treatment issue</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm mb-2">Why this is not PAH</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Exercise limitation is mixed ventilatory + circulatory</li>
                  <li>• Systemic pulmonary vasodilators often have weak or harmful results</li>
                  <li>• Treatment begins with the ILD, not with PAH-drug reflexes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">High-Yield Clinical Pearls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 text-sm">When to suspect vascular burden out of proportion</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• RV strain seems too severe for the amount of fibrosis</li>
                  <li>• DLCO is markedly depressed</li>
                  <li>• Symptoms are worse than PFT/HRCT alone would predict</li>
                  <li>• CPFE-like pattern with preserved volumes but severe gas-transfer abnormality</li>
                </ul>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <h3 className="font-semibold text-green-800 text-sm">Best-supported targeted therapy</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• <strong>Inhaled treprostinil</strong> is the key modern positive signal in PH-ILD</li>
                  <li>• It differs from the largely disappointing history of many systemic vasodilators</li>
                  <li>• Still integrate this with full ILD and oxygen strategy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Practical Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">What to do</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Optimize ILD-directed therapy when available</li>
                  <li>• Long-term oxygen when indicated</li>
                  <li>• Pulmonary rehabilitation</li>
                  <li>• Consider transplant referral in advanced disease</li>
                  <li>• Refer severe/disproportionate phenotypes to expert PH centers</li>
                </ul>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">What not to do</h3>
                <ul className="text-xs text-gray-700 mt-1 space-y-1">
                  <li>• Do not assume PH-ILD should follow PAH treatment logic</li>
                  <li>• Be cautious with systemic vasodilators because of V/Q mismatch risk</li>
                  <li>• Do not underestimate prognosis just because fibrosis already explains symptoms</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Key Figures</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Figure 1</p>
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <Image src="/images/ph-ild-figure1.png" alt="PH-ILD figure 1" width={1600} height={900} className="w-full h-auto" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Figure 2</p>
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <Image src="/images/ph-ild-figure2.png" alt="PH-ILD figure 2" width={1600} height={900} className="w-full h-auto" />
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Figure 3</p>
                <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                  <Image src="/images/ph-ild-figure3.png" alt="PH-ILD figure 3" width={1600} height={900} className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {specialTab === 'fvc-dlco' && (
        <div className="space-y-4">
          <div className="card border-l-4 border-l-indigo-600 bg-indigo-50/40">
            <h2 className="card-header text-indigo-800">FVC / DLCO Pattern Recognition</h2>
            <p className="text-sm text-gray-700 mb-2">
              This tab helps clinicians use <strong>spirometry + DLCO</strong> as a quick bedside pattern-recognition tool
              when differentiating <strong>COPD</strong>, <strong>ILD</strong>, <strong>obesity restriction</strong>,
              <strong>PH-LHD</strong>, <strong>PAH</strong>, and possible <strong>PVOD</strong>.
            </p>
            <div className="p-3 bg-white rounded border border-indigo-100 text-xs text-gray-700">
              <strong>Important:</strong> this is a heuristic clinical algorithm, not a stand-alone diagnostic test.
              Always integrate echo, imaging, hemodynamics, oxygenation, and full clinical context.
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Quick Algorithm</h2>
            <div className="space-y-3 text-xs text-gray-700">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">Step 1 — Check FEV1/FVC</h3>
                <ul className="space-y-1">
                  <li>• <strong>FEV1/FVC &lt;0.7</strong> → think <strong>COPD</strong></li>
                  <li>• <strong>FEV1/FVC normal</strong> → move to FVC</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm mb-2">Step 2 — Check FVC</h3>
                <ul className="space-y-1">
                  <li>• <strong>FVC &lt;80%</strong> → restriction branch</li>
                  <li>• <strong>FVC normal</strong> → preserved volume branch</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-800 text-sm mb-2">If FVC &lt;80%</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <strong>DLCO low</strong> → think <strong>ILD</strong></li>
                    <li>• <strong>DLCO normal</strong> → think <strong>obesity restriction</strong></li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <h3 className="font-semibold text-green-800 text-sm mb-2">If FVC normal</h3>
                  <ul className="space-y-1 text-xs text-gray-700">
                    <li>• <strong>DLCO &gt;70%</strong> → think <strong>normal</strong> or <strong>PH-LHD</strong></li>
                    <li>• <strong>DLCO 40–70%</strong> → check <strong>FVC/DLCO</strong></li>
                    <li>• <strong>DLCO &lt;40%</strong> → also check <strong>FVC/DLCO</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">How to Interpret FVC / DLCO Ratio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 text-sm mb-2">DLCO 40–70%</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• <strong>FVC/DLCO &gt;1.6</strong> → supports <strong>PAH</strong></li>
                  <li>• <strong>FVC/DLCO &lt;1.6</strong> → more in keeping with <strong>PH-LHD</strong></li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 text-sm mb-2">DLCO &lt;40%</h3>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>• <strong>FVC/DLCO 1.6–2.2</strong> → think <strong>severe PAH</strong></li>
                  <li>• <strong>FVC/DLCO &gt;2.5</strong> → consider <strong>PVOD</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Clinical Pearls</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">COPD clue</h3>
                <p className="text-xs text-gray-700 mt-1">An obstructive pattern (FEV1/FVC &lt;0.7) should push you toward COPD before jumping to vascular explanations.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">ILD clue</h3>
                <p className="text-xs text-gray-700 mt-1">Restrictive physiology plus reduced DLCO strongly supports an ILD phenotype rather than isolated vascular disease.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 text-sm">PVOD clue</h3>
                <p className="text-xs text-gray-700 mt-1">Very low DLCO with markedly high FVC/DLCO ratio should trigger suspicion for PVOD, especially if hypoxemia and CT signs support it.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="card-header">Reference Figure</h2>
            <div className="rounded-lg overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/images/fvc-dlco-algorithm.png"
                alt="FVC DLCO differential algorithm"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
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

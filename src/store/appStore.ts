import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface HemodynamicsState {
  mPAP: string
  PAWP: string
  PVR: string
  CO: string
  CI: string
  RAP: string
  SvO2: string
  sPAP: string
  dPAP: string
  HR: string
  height: string
  weight: string
}

interface RiskState {
  whoFC: string
  sixMWD: string
  bnpNTproBNP: string
  bnpType: 'BNP' | 'NT-proBNP'
  rap: string
  ci: string
  svo2: string
  pericardia: boolean
  syncope: boolean
  rVFunction: string
}

interface AppState {
  // Hemodynamics
  hemodynamics: HemodynamicsState
  setHemodynamics: (h: Partial<HemodynamicsState>) => void

  // Risk stratification
  risk: RiskState
  setRisk: (r: Partial<RiskState>) => void

  // Classification active tab
  classificationTab: string
  setClassificationTab: (tab: string) => void

  // Diagnosis active step
  diagnosisStep: number
  setDiagnosisStep: (step: number) => void

  // Treatment tab
  treatmentTab: string
  setTreatmentTab: (tab: string) => void

  // Groups tab
  groupsTab: string
  setGroupsTab: (tab: string) => void

  // CTEPH tab
  ctephTab: string
  setCtephTab: (tab: string) => void

  // Special tab
  specialTab: string
  setSpecialTab: (tab: string) => void

  // Reset
  resetAll: () => void
}

const defaultHemodynamics: HemodynamicsState = {
  mPAP: '', PAWP: '', PVR: '', CO: '', CI: '', RAP: '', SvO2: '',
  sPAP: '', dPAP: '', HR: '', height: '', weight: '',
}

const defaultRisk: RiskState = {
  whoFC: '', sixMWD: '', bnpNTproBNP: '', bnpType: 'NT-proBNP',
  rap: '', ci: '', svo2: '', pericardia: false, syncope: false, rVFunction: '',
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hemodynamics: defaultHemodynamics,
      setHemodynamics: (h) => set((s) => ({ hemodynamics: { ...s.hemodynamics, ...h } })),

      risk: defaultRisk,
      setRisk: (r) => set((s) => ({ risk: { ...s.risk, ...r } })),

      classificationTab: 'definitions',
      setClassificationTab: (tab) => set({ classificationTab: tab }),

      diagnosisStep: 0,
      setDiagnosisStep: (step) => set({ diagnosisStep: step }),

      treatmentTab: 'vasoreactivity',
      setTreatmentTab: (tab) => set({ treatmentTab: tab }),

      groupsTab: 'group2',
      setGroupsTab: (tab) => set({ groupsTab: tab }),

      ctephTab: 'diagnosis',
      setCtephTab: (tab) => set({ ctephTab: tab }),

      specialTab: 'ctd',
      setSpecialTab: (tab) => set({ specialTab: tab }),

      resetAll: () => set({
        hemodynamics: defaultHemodynamics,
        risk: defaultRisk,
        classificationTab: 'definitions',
        diagnosisStep: 0,
        treatmentTab: 'vasoreactivity',
        groupsTab: 'group2',
        ctephTab: 'diagnosis',
        specialTab: 'ctd',
      }),
    }),
    { name: 'pht2022-app' }
  )
)

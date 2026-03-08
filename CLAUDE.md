# PHT2022 — Pulmonary Hypertension Clinical Guide

## Overview
Clinical decision support web app based on the **2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension** (Humbert M, Kovacs G, Hoeper MM, et al. Eur Respir J 2023; 61: 2200879).

Built for use during rounds, clinic, and teaching — encodes guideline recommendations into actionable clinical tools.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State:** Zustand with persist middleware (localStorage)
- **No database, no auth** — all client-side state
- **Mobile-first** responsive design

## Architecture
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation
│   ├── page.tsx            # Home dashboard
│   ├── globals.css         # Tailwind + custom utility classes
│   ├── classification/     # PH definitions, WHO Groups, phenotypes
│   ├── diagnosis/          # 3-step algorithm: suspicion→detection→confirmation
│   ├── hemodynamics/       # RHC calculator with auto-classification
│   ├── risk/               # 3-strata (diagnosis) + 4-strata (follow-up)
│   ├── pah-treatment/      # Vasoreactivity, initial/sequential therapy, drugs
│   ├── groups/             # Groups 2/3/5 management
│   ├── cteph/              # Group 4: PEA, BPA, riociguat
│   ├── special/            # CTD, portal HTN, HIV, CHD, pediatric, ICU
│   ├── ask/                # NotebookLM AI chat
│   └── api/notebooklm/    # NLM proxy route
├── components/
│   └── Navigation.tsx      # Sidebar + mobile hamburger/drawer
└── store/
    ├── appStore.ts         # Main app state (hemodynamics, risk, tabs)
    └── chatStore.ts        # Chat messages, mode, conversationId
```

## Pages
1. **Home** (/) — Dashboard with quick reference PH definitions + navigation cards
2. **Classification** (/classification) — Hemodynamic definitions (Table 5), WHO Groups 1–5, phenotype cards
3. **Diagnosis** (/diagnosis) — Suspicion (symptoms/signs), Detection (echo probability table, V/Q), Confirmation (RHC, vasoreactivity)
4. **Hemodynamics** (/hemodynamics) — Input RHC values → auto-classify PH phenotype, calculate PVR/CI/TPG/DPG
5. **Risk Stratification** (/risk) — Three-strata model at diagnosis, four-strata model at follow-up (Tables 16, 18)
6. **PAH Treatment** (/pah-treatment) — Vasoreactivity/CCB, initial combo therapy, sequential escalation, drug dosing table, general measures
7. **Groups 2/3/5** (/groups) — PH-LHD, PH-lung disease, Group 5 with DO/DON'T cards
8. **CTEPH** (/cteph) — V/Q-first diagnosis, PEA/BPA/riociguat algorithm, follow-up
9. **Special Scenarios** (/special) — CTD-PAH, portal HTN, HIV, CHD, pediatric PH, ICU/RV failure
10. **Ask NotebookLM** (/ask) — AI chat with brief/explanatory modes, read aloud

## Design
- Primary: #003366 (dark blue)
- Danger: #B22222 (alert red)
- Success: #1E824C (green)
- Warning: #D4A017 (gold)
- Floating hamburger bottom-right (mobile)
- Slide-in sidebar drawer from right
- Two-click reset confirmation

## Environment Variables
```
NLM_PROXY_URL=<NotebookLM proxy endpoint>
NLM_PROXY_KEY=<proxy API key>
NLM_NOTEBOOK_ID=50629322-985f-4561-ad3a-3c6c14b743a1
```

## Commands
```bash
npm run dev    # Development server
npm run build  # Production build
npm run start  # Production server
npm run lint   # ESLint
```

## Key Guideline Data Encoded
- Table 5: Hemodynamic definitions (mPAP, PAWP, PVR thresholds)
- Table 10: Additional echo signs of PH
- Table 16: Three-strata risk assessment at diagnosis
- Table 18: Four-strata risk assessment at follow-up
- Table 19: PAH drug dosing
- Tables 8-11: Treatment recommendations by risk and comorbidity
- Recommendation Tables 1-25: All major recommendation classes encoded
- Echo probability stratification (TRV + signs)
- Vasoreactivity testing criteria and CCB eligibility

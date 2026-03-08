# PHT2022 — Pulmonary Hypertension Clinical Guide

Clinical decision support web app based on the **2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension**.

> Humbert M, Kovacs G, Hoeper MM, et al. Eur Respir J 2023; 61: 2200879

## Features

- **Classification** — Hemodynamic definitions, WHO Groups 1–5, pre-/post-capillary phenotypes
- **Diagnosis** — 3-step algorithm: Suspicion → Detection → Confirmation
- **Hemodynamic Calculator** — Input RHC values, auto-classify PH phenotype
- **Risk Stratification** — Three-strata (diagnosis) and four-strata (follow-up) models
- **PAH Treatment** — Vasoreactivity testing, initial/sequential combination therapy, drug dosing
- **Groups 2/3/5** — PH-LHD, PH-lung disease, multifactorial — with DO/DON'T guidance
- **CTEPH** — V/Q-first diagnosis, PEA, BPA, riociguat, multimodality approach
- **Special Scenarios** — CTD-PAH, portal HTN, HIV, CHD, pediatric PH, ICU/RV failure
- **Ask NotebookLM** — AI-powered Q&A on the full guideline (brief & explanatory modes)

## Tech Stack

- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Zustand with persist middleware (localStorage)
- Mobile-first, no database, no auth

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NLM_PROXY_URL` | NotebookLM proxy endpoint URL |
| `NLM_PROXY_KEY` | NotebookLM proxy API key |
| `NLM_NOTEBOOK_ID` | NotebookLM notebook ID (default: `50629322-985f-4561-ad3a-3c6c14b743a1`) |

## Disclaimer

This tool is for educational and clinical reference purposes only. It does not replace clinical judgment. Always verify recommendations against the full guideline and local protocols.

## License

For educational use.

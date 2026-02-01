MediNexus AI: Somaliland HMS & Clinic Management Blueprint
1. Project Mission & Local Context
MediNexus AI is a multi-tenant healthcare platform tailored for Somaliland's transitioning medical landscape. It bridge the gap between manual record-keeping and intelligent automation, ensuring compatibility with the Ministry of Health Development (MoHD) reporting standards and local payment infrastructure.

2. Technical Stack
Frontend: Next.js 15 (App Router) with Tailwind CSS & Shadcn/UI for a high-performance, mobile-responsive dashboard.

Auth: Clerk (Organization-aware for multi-clinic management).   

Backend: Convex (Real-time, reactive database for critical clinical data).

AI Orchestration: Google Antigravity (Agent-first development for rapid feature verification).

Medical Intelligence: Google Gemini 1.5 Pro & Google Vision API.   

3. Somaliland Compatibility Features
Local Payment Integration: Native support for ZAAD (Telesom) and Sahar (Somtel) mobile money via e-Billing and e-Payment APIs.

MoHD Reporting Gateway: Data export module designed to sync with Somaliland’s National Health Management Information System (HMIS) and DHIS2 platform.

Low-Bandwidth Optimization: Progressive Disclosure UX and Server Components to ensure the system remains functional on slower internet connections typical in rural regions.

Bilingual Support: Interface and AI assistants supporting both Somali and English to ensure usability for all staff levels.   

4. High-Converting Landing Page Structure
The landing page is designed to build trust with hospital directors and private clinic owners.

Hero Section: Dynamic value proposition focusing on "Eliminating Paperwork" and "Securing Medicine Integrity."

Somaliland Trust Barometer: Badges indicating ZAAD/Sahar compatibility and MoHD compliance.

Core Modules Showcase:

Clinical: AI Doctor's Copilot for SOAP notes and diagnostic support.   

Administrative: AI Receptionist for WhatsApp/Web scheduling.

Security: Multi-layer AI fake drug detection using Google Vision.

Pricing: Tiered SaaS model (Individual Practitioner vs. Multi-department Hospital).

5. Implementation Roadmap (MVP)
Phase 1: Foundation (Weeks 1-4)

Setup Clerk Multi-tenancy and Convex schema with tenantId isolation.   

Deploy the English/Somali bilingual landing page.

Phase 2: Core Workflows (Weeks 5-8)

Implement Patient EMR (SOAP notes) and Appointment Scheduling.

Integrate ZAAD e-Payment API for consultation fee processing.

Phase 3: AI Intelligence (Weeks 9-12)

Deploy Doctor AI assistant for note summarization using Gemini.   

Launch Vision-based drug authentication for the pharmacy module.

Phase 4: Regulatory Compliance (Weeks 13-16)

Finalize HMIS/DHIS2 export reporting tools for MoHD compliance.

6. Project Structure (Antigravity Friendly)
/medi-nexus-ai ├── /app # Next.js App Router │ ├── (marketing) # Landing Page, About, Contact │ ├── (auth) # Clerk Login & Org Switching │ └── (dashboard) # HMS Main Shell │ ├── /patients # EHR & Clinical Records │ ├── /pharmacy # Stock & Drug Verification │ └── /billing # ZAAD/Sahar Invoice Logic ├── /convex # Backend Data Logic │ ├── /actions # Gemini & Vision AI Tasks │ ├── /mutations # Tenant-aware data writes │ └── schema.ts # Multi-tenant definitions ├── /skills # Antigravity Autonomous Agent Skills │ ├── verify-drug.md # Agent logic for Vision processing │ └── process-billing.md # Agent logic for mobile money webhooks └── /lib # Shared Utils (DHIS2 Export, Somali Locales)


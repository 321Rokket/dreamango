# dreamcatchr comercial intelligence platform - Project Checklist

Updated Project SDLC SPECS Structure (Integrating with CHOIRBOIS)
Location: PROJECT_ROOT/SPECS/ (alongside your CHOIRBOIS.md)
General Note for each .md file below:
Each file will now have a dedicated section: **Responsible CHOIRBOIS Conductor(s):**
Checklist items and "Agent Use" / "LLM Interaction Notes" sections will explicitly mention specific conductor roles (e.g., "PROJECT_CONDUCTOR to review...", "DEVSECDATAMODELOPS_CONDUCTOR to generate pipeline configuration based on...").
References will be made to specific .md files within the CONDUCTORS/ hierarchy (e.g., CONDUCTORS/SUPER_CONDUCTORS/PROJECT_CONDUCTOR/best_practices.md).
Phase 0: Foundation & Orchestration
000_PROJECT_OVERVIEW_AND_GOALS.md
Purpose: Single source of truth for what the project is, its high-level goals, problem statement, target users, success metrics.
Responsible CHOIRBOIS Conductor(s):
Primary: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Consulted: SUPER_CONDUCTORS/PRODUCT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] PROJECT_CONDUCTOR: Validate this document aligns with initial stakeholder inputs and project kickoff templates (see WORKFLOWS/TEMPLATES/project_kickoff.md).
[ ] PRODUCT_CONDUCTOR: Ensure problem statement and target users resonate with product strategy (see CONDUCTORS/SUPER_CONDUCTORS/PRODUCT_CONDUCTOR/product_strategy_templates.md).
[ ] All Super_Conductors: Use this document as the primary context for understanding overall project intent.
001_VISION_AND_MISSION.md
Purpose: Long-term aspirational vision and the mission to achieve it.
Responsible CHOIRBOIS Conductor(s):
Primary: SUPER_CONDUCTORS/PRODUCT_CONDUCTOR
Consulted: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] PRODUCT_CONDUCTOR: Draft vision and mission statements based on stakeholder input and market analysis, adhering to templates in CONDUCTORS/SUPER_CONDUCTORS/PRODUCT_CONDUCTOR/product_strategy_templates.md.
[ ] PROJECT_CONDUCTOR: Ensure vision and mission are actionable and align with project execution capabilities.
002_SMART_OKR_TRACKER.md
Purpose: Define and track Specific, Measurable, Achievable, Relevant, Time-bound Objectives and Key Results.
Responsible CHOIRBOIS Conductor(s):
Primary: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Contributions from: SUPER_CONDUCTORS/PRODUCT_CONDUCTOR, SUPER_CONDUCTORS/QA_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] PROJECT_CONDUCTOR: Populate OKRs based on project goals, consulting with PRODUCT_CONDUCTOR for product-specific KRs and QA_CONDUCTOR for quality-related KRs.
[ ] GOVERNANCE_REPORTING_CONDUCTOR: Periodically extract KR progress and report using templates from CONDUCTORS/CONDUCTORS/GOVERNANCE_REPORTING_CONDUCTOR/reporting_templates.md.
003_PROJECT_EXECUTION_PLAN.md (Replaces the old 003_AGENT_CONDUCTOR_AND_WORKFLOWS.md as that is now handled by the CONDUCTORS & WORKFLOWS folders themselves. This doc is about this project's plan).
Purpose: Outlines the high-level phases, major milestones, dependencies, and resource allocation strategy for this specific project, referencing the CHOIRBOIS operational model.
Responsible CHOIRBOIS Conductor(s):
Primary: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] PROJECT_CONDUCTOR: Develop project phases, referencing standard workflow patterns from WORKFLOWS/ORCHESTRATION_PATTERNS/hierarchy_flows.md.
[ ] PROJECT_CONDUCTOR: Identify key CHOIRBOIS conductors needed for each phase and ensure their system_prompts are aligned with project needs.
[ ] PROJECT_CONDUCTOR: Define escalation paths for this project, based on WORKFLOWS/ORCHESTRATION_PATTERNS/escalation_paths.md and SUPER_CONDUCTORS/PROJECT_CONDUCTOR/escalation_protocols.md.
004_KEY_ASSUMPTIONS_AND_RISKS.md
Purpose: Document major assumptions and potential risks.
Responsible CHOIRBOIS Conductor(s):
Primary: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Inputs from: All Super_Conductors and relevant Conductors.
Checklist / Agent Use (Examples):
[ ] PROJECT_CONDUCTOR: Facilitate risk identification workshops (can be simulated with LLM prompts based on project overview). Use best practices from SUPER_CONDUCTORS/PROJECT_CONDUCTOR/best_practices.md for risk management.
[ ] All relevant Conductors: Propose risks pertinent to your domain (e.g., QA_CONDUCTOR for quality risks, DEVSECDATAMODELOPS_CONDUCTOR for infrastructure risks).
005_DECISION_LOG.md
Purpose: Record significant decisions.
Responsible CHOIRBOIS Conductor(s):
Managed by: SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Contributions from: All conductors making or influencing key decisions.
Checklist / Agent Use (Examples):
[ ] Any Conductor making a significant decision: Prompt GOVERNANCE_REPORTING_CONDUCTOR to log the decision, its rationale, and alternatives considered, ensuring it aligns with compliance (see CONDUCTORS/CONDUCTORS/GOVERNANCE_REPORTING_CONDUCTOR/compliance_checklists.md).
Phase 1: Architecture & Design (Primary responsibility often lies with PRODUCT_CONDUCTOR for "what" and DEVSECDATAMODELOPS_CONDUCTOR and specialized test conductors for "how" and "is it feasible/testable")
010_REQUIREMENTS_SPECIFICATION.md
Responsible CHOIRBOIS Conductor(s): SUPER_CONDUCTORS/PRODUCT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] PRODUCT_CONDUCTOR: Elicit and document functional/non-functional requirements, potentially using user_prompt_templates from its own folder to interact with stakeholders or simulate user personas.
[ ] BDD_TEST_CONDUCTOR: Review requirements for testability and assist PRODUCT_CONDUCTOR in drafting Gherkin scenarios using templates from CONDUCTORS/SEMI_CONDUCTORS/BDD_TEST_CONDUCTOR/gherkin_templates.md.
011_SYSTEM_ARCHITECTURE_OVERVIEW.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR, SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Propose system architecture based on requirements, adhering to best practices (see CONDUCTORS/CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR/best_practices.md).
[ ] PROJECT_CONDUCTOR: Ensure architecture aligns with project budget, timeline, and resource constraints.
... (Similarly for 012_BACKEND_ARCHITECTURE_DESIGN.md, 013_FRONTEND_ARCHITECTURE_DESIGN.md, 014_DATABASE_DESIGN_AND_SCHEMA.md, 015_API_DESIGN_SPECIFICATION.md, 016_DATA_MANAGEMENT_STRATEGY.md, 017_UI_UX_DESIGN_PRINCIPLES.md)
For each, identify the lead Conductor (e.g., DEVSECDATAMODELOPS_CONDUCTOR for backend/DB, PRODUCT_CONDUCTOR collaborating with UI_TEST_CONDUCTOR for UI/UX).
Checklist items should involve the Conductor generating or validating the design, referencing their specific best_practices.md or template files.
Involve relevant testing Semi-Conductors (e.g., INTEGRATION_TEST_CONDUCTOR for API design, UI_TEST_CONDUCTOR for UI specs) to ensure testability from the design phase.
Phase 2: Development Setup & Standards (Primarily DEVSECDATAMODELOPS_CONDUCTOR and Nano_Conductors like LINT_CONDUCTOR, FORMAT_CONDUCTOR)
020_LOCAL_DEVELOPMENT_SETUP_GUIDE.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Document setup process, including commands for frontend (Vite) and backend (Django/Conda). Reference PERFORMERS/EXECUTION_AGENTS/local_agents.md for expected local agent capabilities.
[ ] BUILD_CONDUCTOR: Verify build scripts and artifact management steps are correctly documented.
021_ENVIRONMENT_CONFIGURATION.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: List all ENV variable names (not values) required, referencing WORKFLOWS/INTEGRATION_PATTERNS/mcp_server_configs.md for services like GCP.
022_CODING_STANDARDS_AND_LINTING.md
Responsible CHOIRBOIS Conductor(s): NANO_CONDUCTORS/LINT_CONDUCTOR, NANO_CONDUCTORS/FORMAT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] LINT_CONDUCTOR: Define project linting rules and configurations, referencing its linting_rules.md.
[ ] FORMAT_CONDUCTOR: Specify code formatting standards and Prettier configs, referencing its formatting_standards.md.
025_TYPESCRIPT_FRONTEND_BEST_PRACTICES.md (Your detailed TypeScript document)
Responsible CHOIRBOIS Conductor(s):
Primary: CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR (for ensuring it's part of the dev environment and CI)
Guidance from: NANO_CONDUCTORS/LINT_CONDUCTOR (for TypeScript specific linting rules), SEMI_CONDUCTORS/UI_TEST_CONDUCTOR (for ensuring practices enable testability).
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Ensure \tsconfig.json` and ESLint configs align with this document.`
[ ] LINT_CONDUCTOR: Integrate TypeScript-specific rules into the overall linting process (see CONDUCTORS/NANO_CONDUCTORS/LINT_CONDUCTOR/linting_rules.md).
[ ] Any AI Performer generating frontend code: Adhere strictly to these practices. CODE_REVIEW_CONDUCTOR will validate against this.
Phase 3: Implementation & Agent Guidance (Involves various Conductors based on the task, often coordinated by PROJECT_CONDUCTOR or a "Feature Conductor" simulated by PROJECT_CONDUCTOR)
030_FEATURE_IMPLEMENTATION_CHECKLIST_TEMPLATE.md
Responsible CHOIRBOIS Conductor(s): SUPER_CONDUCTORS/PROJECT_CONDUCTOR (to define and manage usage of the template)
Checklist / Agent Use (Examples):
[ ] PROJECT_CONDUCTOR: When a new feature is initiated from 010_REQUIREMENTS_SPECIFICATION.md, copy this template and assign a specific "Feature Orchestration ID".
[ ] Task specialized Conductors (e.g., TDD_TEST_CONDUCTOR, UNIT_TEST_CONDUCTOR, DEVSECDATAMODELOPS_CONDUCTOR for coding tasks) to perform steps within the feature checklist, referencing their respective best_practices.md and workflows.
031_BACKEND_TASK_CHECKLIST.md, 032_FRONTEND_TASK_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR (overseeing), with Micro/Nano conductors for specifics.
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Ensure PERFORMERS/EXECUTION_AGENTS (e.g., claude_agents.md, cursor_agents.md) are tasked according to these checklists when implementing backend/frontend components.
[ ] UNIT_TEST_CONDUCTOR: Guide generation of unit tests as per its unit_test_patterns.md for each new function/module.
033_SECURE_CODING_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): MICRO_CONDUCTORS/SECURITY_SCAN_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] SECURITY_SCAN_CONDUCTOR: Ensure all code generated by performers is checked against these guidelines and that its vulnerability_patterns.md are considered.
[ ] CODE_REVIEW_CONDUCTOR: Include security checks from this document in its review_checklists.md.
Phase 4: Testing & Quality Assurance (Heavily involves SUPER_CONDUCTORS/QA_CONDUCTOR, CONDUCTORS/TESTING_CONDUCTOR, and all Semi/Micro Test Conductors)
040_TESTING_STRATEGY_AND_PLAN.md
Responsible CHOIRBOIS Conductor(s): SUPER_CONDUCTORS/QA_CONDUCTOR, CONDUCTORS/TESTING_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] QA_CONDUCTOR: Define overall test strategy, referencing its governance_frameworks.md.
[ ] TESTING_CONDUCTOR: Develop detailed test plan based on the strategy, using its test_strategy_templates.md and coordinating with all specialized (Semi-Conductor) test conductors.
041_UNIT_TESTING_GUIDELINES_AND_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): MICRO_CONDUCTORS/UNIT_TEST_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] UNIT_TEST_CONDUCTOR: Ensure all unit tests generated by performers adhere to these guidelines and its own unit_test_patterns.md and mocking_strategies.md.
... (Similarly for 042_INTEGRATION_TESTING_GUIDELINES_AND_CHECKLIST.md -> INTEGRATION_TEST_CONDUCTOR, 043_E2E_AND_VALIDATION_TESTING_CHECKLIST.md -> FUNCTIONAL_TEST_CONDUCTOR / UI_TEST_CONDUCTOR, 044_PERFORMANCE_TESTING_PLAN.md -> PERFORMANCE_TEST_CONDUCTOR)
Phase 5: Deployment & Operations (Dominated by SUPER_CONDUCTORS/QA_CONDUCTOR for approvals and CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR for execution)
051_CICD_PIPELINE_DESIGN_AND_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Design and implement CI/CD pipeline, referencing its pipeline_orchestration.md. Ensure all relevant Test Conductors and Scan Conductors (Security, Performance) are integrated as quality gates.
[ ] BUILD_CONDUCTOR: Manage build optimization and artifact management within the pipeline as per its best_practices.md.
052_PRODUCTION_DEPLOYMENT_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): SUPER_CONDUCTORS/QA_CONDUCTOR (for approval), CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR (for execution)
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Execute deployment steps, following WORKFLOWS/TEMPLATES/deployment_checklist.md.
[ ] QA_CONDUCTOR: Verify all pre-deployment checks passed and provide final approval based on its deployment_approval_protocols.md.
... (Similarly for 053_MONITORING_AND_LOGGING_STRATEGY.md, 054_INCIDENT_RESPONSE_PLAN.md, etc., assigning primary CHOIRBOIS conductors)
Phase 6: Maintenance & Iteration
060_CODE_REVIEW_CHECKLIST.md
Responsible CHOIRBOIS Conductor(s): MICRO_CONDUCTORS/CODE_REVIEW_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] CODE_REVIEW_CONDUCTOR: Perform automated and AI-assisted code reviews against its review_checklists.md and quality_gates.md before merging PRs.
Cross-Cutting (Utility & Project Management)
090_PROJECT_KPI_TRACKER.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/GOVERNANCE_REPORTING_CONDUCTOR, SUPER_CONDUCTORS/PROJECT_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] GOVERNANCE_REPORTING_CONDUCTOR: Collect metrics from various Performers (see PERFORMERS/REPORTING_AGENTS/metrics_collectors.md) and update KPIs.
092_THIRD_PARTY_SERVICES_AND_API_KEYS.md
Responsible CHOIRBOIS Conductor(s): CONDUCTORS/DEVSECDATAMODELOPS_CONDUCTOR
Checklist / Agent Use (Examples):
[ ] DEVSECDATAMODELOPS_CONDUCTOR: Maintain the list of service ENV variable names, referencing PERFORMERS/INTEGRATION_AGENTS/ for MCP server configurations.

## Responsible CHOIRBOIS Conductor(s)

*To be assigned*


## Core Framework Implementation
- [x] Measure Definition Models
- [x] Rules Engine
- [x] Calculation Engine
- [x] Data Models
- [x] API Endpoints
- [x] Documentation

## Measure Implementation
### Core HEDIS Measures
- [x] Breast Cancer Screening (BCS)
- [x] Colorectal Cancer Screening (COL)
- [x] Comprehensive Diabetes Care (CDC)
- [x] Asthma Medication Ratio (AMR)

### Additional HEDIS Measures
- [ ] Controlling High Blood Pressure (CBP)
- [ ] Childhood Immunization Status (CIS)
- [ ] Immunizations for Adolescents (IMA)
- [ ] Lead Screening in Children (LSC)

### Other Measure Types
- [ ] CAHPS Measures
- [ ] Star Ratings
- [ ] Custom Measures

## Testing & Validation
### Unit Tests
- [x] Core Framework Models
- [x] Measure Definitions
- [x] Rules Engine
- [x] Calculation Engine
- [ ] Measure Parser

### Integration Tests
- [ ] End-to-End Measure Calculation
- [ ] API Integration
- [ ] Data Pipeline Integration

### Performance Tests
- [ ] Load Testing
- [ ] Stress Testing
- [ ] Benchmarking

## Documentation
### Code Documentation
- [x] API Documentation
- [x] Code Comments
- [x] Type Hints
- [x] Docstrings

### Project Documentation
- [x] Architecture Overview
- [x] Setup Guide
- [x] Development Guide
- [x] API Reference

### User Documentation
- [ ] User Guide
- [ ] Tutorials
- [ ] Examples
- [ ] Best Practices

## Infrastructure
### Development Environment
- [x] Local Setup
- [x] Development Tools
- [x] Code Quality Tools
- [x] Testing Framework

### CI/CD Pipeline
- [ ] Automated Testing
- [ ] Code Quality Checks
- [ ] Documentation Generation
- [ ] Deployment Automation

## Quality Metrics
### Code Quality
- [x] Type Coverage: 100%
- [x] Documentation Coverage: 100%
- [ ] Code Coverage: 79% (Target: 90%+)
- [ ] Test Pass Rate: 82% (Target: 95%+)

### Performance
- [ ] Response Time < 100ms
- [ ] Throughput > 1000 req/sec
- [ ] Error Rate < 0.1%

### Security
- [ ] Security Audit
- [ ] Vulnerability Scanning
- [ ] Access Control
- [ ] Data Encryption

## Next Steps
1. Implement remaining HEDIS measures
2. Add tests for measure parser
3. Complete user documentation
4. Improve test coverage
5. Set up CI/CD pipeline

## Notes
- Current focus is on improving test coverage and implementing remaining measures
- Need to prioritize measure parser testing
- User documentation needs to be completed
- CI/CD pipeline setup is pending

# HEDIS Measure Engine & Analytics Platform - Developer Onboarding & Setup Checklist

**Document Status:** Active

**Version:** 1.0

**Last Updated:** 2025-05-21

**Author(s):** [Cascade AI, User]

**Related Documents:** `001_VISION.md`, `000_PROJECT_OVERVIEW.md`, `000_PROJECT_ROADMAP.md`

---

> **Purpose**: This checklist guides developers through initial setup, development practices, and quality standards for the HEDIS Measure Engine & Analytics Platform. Track progress by marking completed tasks with `[x]`.

## 📋 Project Overview

The **HEDIS Measure Engine & Analytics Platform** is a Python-based system designed for processing, calculating, and analyzing Healthcare Effectiveness Data and Information Set (HEDIS) measures. It features:
- A modern backend built with **FastAPI** and **Starlette**.
- Robust data modeling and validation using **Pydantic**.
- Comprehensive HEDIS measure calculation capabilities.
- An analytics layer for insights and reporting.
- Potential for User Interfaces using frameworks like Streamlit or modern web technologies.

##  Initial Setup

- [x] Clone repository: `git clone git@github.com:YOUR_ORG/hedis-platform.git` (Update URL to actual project repo).
- [x] Review project dependencies:
    - `requirements.txt` or `pyproject.toml` (if using Poetry/PDM) for Python packages (e.g., `fastapi`, `pydantic`, `uvicorn`, `pandas`, `sqlalchemy`, `psycopg2-binary`, `celery`, `pytest`).
- [ ] Set up any required environment variables (see `.env.example` if provided, e.g., for database connection strings, API keys, Celery broker URL).

### Local Development Environment Setup

- [x] **Install Python**: Ensure Python 3.9+ is installed (e.g., using `pyenv` or direct download from [python.org](https://www.python.org/)).
- [x] Verify Python installation: `python --version` or `python3 --version`.
- [x] **Create and Activate a Virtual Environment**:
    - Using `venv`: `python3 -m venv .venv && source .venv/bin/activate` (Linux/macOS) or `.venv\Scripts\activate` (Windows).
    - Using Conda (as per user preference for "rootenv"): `conda create -n rootenv python=3.9 && conda activate rootenv` (if not already existing, or just `conda activate rootenv`).
- [x] **Install Dependencies**:
    - `pip install -r requirements.txt` (and `requirements-dev.txt` if it exists).
    - Or if using Poetry: `poetry install`.
- [ ] **Set up Database** (if applicable for local development, e.g., PostgreSQL):
    - [ ] Install PostgreSQL locally or use Docker: `docker run --name hedis-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres`.
    - [ ] Create development database and user if needed.
    - [ ] Run database migrations (if using Alembic or Django ORM migrations): `alembic upgrade head`.
- [ ] **Run the FastAPI Application Locally**:
    - `uvicorn app.main:app --reload` (adjust path to your FastAPI app instance).
    - Verify by accessing `http://127.0.0.1:8000` and `http://127.0.0.1:8000/docs` in your browser.
- [x] **Run Tests**:
    - `pytest` (or `python -m pytest`).
- [x] **IDE Setup**:
    - [x] Configure VS Code (or your preferred IDE like PyCharm).
    - [x] Recommended VS Code extensions: `Python (ms-python.python)`, `Pylance (ms-python.vscode-pylance)`, `Black Formatter (ms-python.black-formatter)`, `Ruff (charliermarsh.ruff)`.
    - [x] Review any project-specific IDE settings or recommendations (`.vscode/settings.json.example`).
- [ ] **Pre-commit Hooks** (if configured):
    - [ ] Install: `pre-commit install` (usually run from the project root).

## 🔍 Code Quality Standards

### Testing Requirements

- [x] Run tests locally before pushing changes: `pytest`.
- [x] Verify minimum test coverage (refer to project goals, aim for >80-90% for critical logic).
  - [x] Pydantic Models & Schemas: Validation logic, edge cases.
  - [x] HEDIS Calculation Logic: Correctness for numerators, denominators, exclusions for each measure against specifications.
  - [ ] API Endpoints: Request/response validation, authentication/authorization, business logic.
  - [ ] Data Ingestion & ETL Pipelines: Data transformation, error handling.
- [x] Write tests for all new features and bug fixes:
    - [x] Unit tests for individual functions, classes, and Pydantic models.
    - [ ] Integration tests for interactions between components (e.g., API -> Service -> CRUD).
    - [ ] Functional tests for API endpoints (simulating user interactions).
    - [x] Validation tests for HEDIS measures using sample data with known outcomes.

### Code Style (Python)

- [x] Run Python formatting: `black .`.
- [x] Run Python import sorting: `isort .` (or `ruff --select I . --fix`).
- [x] Run Python linting: `ruff check .` (or `flake8 .` and `pylint your_module`).
- [x] Type Hinting: Strive for comprehensive type hinting and pass `mypy .` checks.
- [x] Adhere to PEP 8 and project-specific style guidelines.
- [x] Follow project's docstring standards (e.g., Google Style, NumPy style, or Sphinx-compatible).

## 🛠️ Development Workflow

### Feature Development (Example: New HEDIS Measure Implementation)

- [ ] Understand the NCQA technical specifications for the new HEDIS measure thoroughly.
- [ ] Design the Pydantic models for any new data entities required by the measure.
- [ ] Plan the calculation logic: cohort identification, numerator, denominator, exclusions.
- [ ] Create feature branch from `main` or `develop`: `git checkout -b feature/hedis-measure-<measure-name>`
- [ ] Develop the measure calculation logic within the appropriate service/module.
- [ ] Implement comprehensive unit tests for the measure logic using diverse test data.
- [ ] Add or update API endpoints in FastAPI if necessary to expose the new measure.
- [ ] Write integration tests for the API endpoints related to the new measure.

### Feature Development (Example: New API Endpoint)

- [ ] Define the API endpoint specification (path, method, request body, response body) using Pydantic schemas.
- [ ] Create feature branch: `git checkout -b feature/api-<endpoint-description>`
- [ ] Develop the endpoint logic in the relevant FastAPI router/controller.
- [ ] Implement any necessary service layer logic and CRUD operations.
- [ ] Add unit tests for the service logic and functional/integration tests for the API endpoint.

### General Workflow

- [ ] Create/review specifications in `SPECS/` for significant new features, architectural changes, or data models.
- [ ] Use AI assistance for drafting Pydantic models, writing boilerplate FastAPI code, generating test cases, or understanding complex HEDIS specifications, always with thorough human review.
- [ ] Keep commits focused and use conventional commit format (e.g., `feat: add X`, `fix: correct Y`, `docs: update Z`).
- [ ] Regularly update docstrings and any relevant Markdown documentation.

### Pull Requests (PRs)

- [ ] Ensure all tests pass locally: `pytest`.
- [ ] Run pre-commit checks (`black .`, `isort .`, `ruff check .`, `mypy .`).
- [ ] Create PR against `main` or `develop` branch.
- [ ] Fill out PR template, detailing the purpose of the change, implementation details, and how it was tested.
- [ ] Request review from team members.
- [ ] Ensure CI pipeline passes all checks (build, test, lint, type checking, coverage).

## 📊 CI/CD Pipeline

- [ ] Check GitHub Actions (or other CI/CD platform) status.
- [ ] Understand CI setup for:
    - Running Python linters and formatters.
    - Running type checks (MyPy).
    - Running unit, integration, and functional tests (Pytest).
    - Generating code coverage reports (e.g., using `coverage.py`).
    - Building Docker images (if applicable).
    - Deploying to staging/production environments.
- [ ] Review security scan results (e.g., `pip-audit`, `safety`).

## 🧠 AI-Assisted Development

- [ ] Familiarize with project-specific AI assistance context if provided (e.g., in a shared document or `.claude` directory) for prompts and best practices.
- [ ] Focus AI prompts on:
    - Generating Pydantic models from data descriptions or HEDIS specifications.
    - Drafting FastAPI endpoint structures.
    - Writing boilerplate for services or CRUD operations.
    - Translating HEDIS measure logic into Python code.
    - Generating test cases for various scenarios.
- [ ] **Critically review all AI-generated code** for correctness, adherence to HEDIS specifications, performance, and security.

## 📚 Documentation

- [ ] Add comprehensive docstrings to all modules, classes, functions, and methods.
- [ ] Document HEDIS measure implementations, detailing the source NCQA specification and any specific interpretations made.
- [ ] Keep API documentation (auto-generated by FastAPI at `/docs` and `/redoc`) clear and accurate by using proper Pydantic schemas and endpoint descriptions.
- [ ] Maintain `README.md` in project root with setup, build, test, and run instructions.
- [ ] Document architectural decisions in `SPECS/adr/` (Architecture Decision Records) if used.

## 🔒 Security and Compliance (HIPAA)

- [ ] Prioritize data security and privacy in all development activities.
- [ ] Ensure all Protected Health Information (PHI) is handled according to HIPAA guidelines.
- [ ] Use Pydantic for strict input validation to prevent injection attacks or malformed data.
- [ ] Implement proper authentication and authorization for API endpoints.
- [ ] Ensure data is encrypted in transit (HTTPS) and at rest (database encryption).
- [ ] Be mindful of logging sensitive information; avoid logging PHI unless absolutely necessary and properly secured.
- [ ] Run security scanning tools for dependencies (`pip-audit`, `safety`) and application code (SAST tools if available).

## ✨ HEDIS Platform Features (High-Level)

**Core Engine & APIs:**
- [ ] Data ingestion pipelines for various HEDIS data sources (claims, eligibility, etc.).
- [x] Pydantic models for all relevant HEDIS data structures (foundational framework and rules engine defined in `hedis_platform/app/models/framework_models.py`).
- [x] HEDIS measure calculation engine implementing NCQA logic.
  - [x] Populate `HealthMeasureType` instances with HEDIS measure definitions (e.g., from `hedis_json_schema.json` or similar data sources).
  - [x] Define detailed HEDIS eligibility and calculation rules (e.g., by parsing technical specifications or detailed MD files) using the Pydantic rule engine models.
- [x] Integrate STAR measures into `HealthMeasureType` (e.g., from `star_ratings_data.json` and `star_ratings_models.py`), including weights and categories.
- [ ] FastAPI endpoints for:
    - [ ] Data submission and management.
    - [ ] Triggering and monitoring HEDIS calculations.
    - [ ] Retrieving measure results at different aggregation levels.
- [ ] Asynchronous task processing for long-running calculations (e.g., using Celery).

**Analytics & Reporting:**
- [ ] Modules for data aggregation and summarization.
- [ ] Basic reporting features (e.g., export to CSV/Excel).
- [ ] (Phase 3+) Dashboards for visualizing measure performance (e.g., using Streamlit or a web frontend).
- [ ] (Phase 3+) Tools for care gap analysis.

## 💬 Communication

- [x] Join team communication channels (specify: e.g., Slack, Microsoft Teams, Zulip).
- [x] Attend regular meetings (stand-ups, sprint planning, retrospectives, technical discussions).
- [x] Report progress/blockers via issue trackers (e.g., JIRA, GitHub Issues) and meetings.

---

**Current Project Status**: Phase 1: Core Engine Development - Core framework and measure calculation logic implemented, moving to API development and data ingestion.

### 2. Pydantic Model Design & Implementation

- [x] **Core Framework Models (`framework_models.py`):**
    - [x] `AuditableModel` (Base for all models with audit fields).
    - [x] `ValueRange` (For defining numeric ranges).
    - [x] `Condition` (Individual condition for rule logic).
    - [x] `Rule` (A set of conditions, AND/OR logic).
    - [x] `EligibilityRuleSet` (Collection of rules for eligibility).
    - [x] `CalculationStep` (Individual step in a calculation).
    - [x] `MeasureCalculationLogic` (Collection of steps for calculation).
    - [x] Initial `HealthMeasureType` (Specific for health measures, to be refactored).
    - [x] Relevant Enums (e.g., `LogicalOperator`, `ComparisonOperator`).
- [x] **Ratings Framework Models (`ratings_framework_models.py`):**
    - [x] `DataTypeEnum` (For primitive data types).
    - [x] `PrimitiveType` (Defines basic data types, constraints, valid values).
    - [x] `DomainSpecificItem` (For domain-specific coded values).
    - [x] `RatingsFrameworkDefinition` (Overall structure for a ratings framework).
- [ ] **Generalized Measure Framework Models (e.g., `generalized_measure_models.py` or in `framework_models.py`):**
    - [ ] `AbstractMeasureDefinition` (Base model for all measures).
        - [ ] `measure_definition_id`, `name`, `abbreviation`, `description`.
        - [ ] `domain`, `sub_domain`, `measure_type` (consider generic enums vs. strings).
        - [ ] `rationale`, `steward`.
        - [ ] `value_type_id` (linking to `PrimitiveType`).
        - [ ] `improvement_direction` (using `ImprovementDirectionEnum`).
        - [ ] `data_sources` (using `DataSourceRequirement` model).
        - [ ] `eligibility_logic` (reusing `EligibilityRuleSet`).
        - [ ] `calculation_logic` (reusing `MeasureCalculationLogic`).
        - [ ] `interpretation_guidelines`, `tags`.
    - [ ] `ImprovementDirectionEnum`.
    - [ ] `DataSourceRequirement` model.
- [ ] **Refactor `HealthMeasureType` (`framework_models.py`):**
    - [ ] Ensure `HealthMeasureType` inherits from `AbstractMeasureDefinition`.
    - [ ] Retain/adapt health-specific fields (e.g., `category_id`, `hedis_measure_id`).
    - [ ] Update any existing instantiations or references if necessary.
- [x] All Pydantic models have clear, descriptive field names and docstrings.
- [x] Validation logic (`@validator`, `@root_validator`, or Pydantic V2 `@field_validator`, `@model_validator`) is implemented where necessary (e.g., for consistency, constraints).
- [x] Models are organized logically into appropriate files/modules.
- [x] Circular dependencies between models are avoided or managed correctly.

### 4. Measure Definition & Logic Implementation (Using Generalized Measure Framework)

- [ ] **Generalized Measure Framework Documentation:**
    - [x] `SPECS/generalized_measure_framework.md` is created and outlines the framework, `AbstractMeasureDefinition`, and its relationship to `HealthMeasureType`.
- [ ] **HEDIS Measure Implementation (as instances of refactored `HealthMeasureType`):**
    - [ ] For each HEDIS measure to be implemented:
        - [ ] Create a unique instance of `HealthMeasureType`.
        - [ ] Populate `measure_definition_id`, `name`, `abbreviation`, `description`.
        - [ ] Assign appropriate `domain`, `sub_domain`, `measure_type` (using HEDIS-specific values/enums if defined).
        - [ ] Define `value_type_id` by linking to an existing or new `PrimitiveType` instance that accurately describes the measure's output (e.g., percentage, rate per 1000).
        - [ ] Specify `improvement_direction`.
        - [ ] List required `data_sources`.
        - [ ] Define `eligibility_logic` by creating an `EligibilityRuleSet` instance that accurately reflects NCQA criteria (population, age, gender, continuous enrollment, exclusions).
        - [ ] Define `calculation_logic` by creating a `MeasureCalculationLogic` instance that accurately reflects NCQA specifications (numerator, denominator, identification of events/services, handling of different data collection methods).
        - [ ] Add `interpretation_guidelines` and relevant `tags`.
- [ ] **Rules Engine Configuration:**
    - [ ] Eligibility and calculation rules are correctly translated from NCQA specifications into the Pydantic model structures (`EligibilityRuleSet`, `MeasureCalculationLogic`).
    - [ ] Logic for handling different data sources (administrative, hybrid, ECDS) is incorporated into the rules where applicable.
- [ ] **Test Data for Measures:**
    - [ ] Small, targeted test datasets are created for each implemented measure to validate eligibility and calculation logic against known outcomes.
- [ ] **Measure Versioning:**
    - [ ] A strategy for versioning measure definitions is considered (e.g., as part of `measure_definition_id` or a separate version field in `AbstractMeasureDefinition`).

### 5. API Development (FastAPI)
- [x] **Core Framework & Ratings Framework Models:** Unit tests cover all Pydantic models in `framework_models.py` and `ratings_framework_models.py`, including validators and instantiation logic.
- [ ] **Generalized Measure Framework Models:**
    - [ ] Unit tests for `AbstractMeasureDefinition`, `DataSourceRequirement`, `ImprovementDirectionEnum`.
    - [ ] Unit tests for the refactored `HealthMeasureType` (inheritance, specific fields).
- [ ] **HEDIS Measure Instances:**
    - [ ] For each implemented HEDIS measure (instance of `HealthMeasureType`), unit tests validate:
        - [ ] Correct instantiation and population of all fields.
        - [ ] Integrity of the `eligibility_logic` (`EligibilityRuleSet`) structure.
        - [ ] Integrity of the `calculation_logic` (`MeasureCalculationLogic`) structure.
        - [ ] Correct linkage to `PrimitiveType` via `value_type_id`.
- [ ] **Measure Calculation Logic:**

- [x] `SPECS/001_VISION.md`: Updated to reflect project goals and scope, including the Generalized Measure Framework.
- [x] `SPECS/000_PROJECT_ROADMAP.md`: Updated with current project phases and timelines, incorporating tasks for the Generalized Measure Framework.
- [x] `SPECS/000_OVERALL_PROJECT_CHECKLIST.md`: This document, kept up-to-date with development progress and standards, including items for the Generalized Measure Framework.
- [x] `SPECS/generalized_measure_framework.md`: Created to document the new framework.
- [ ] `SPECS/update.md` and/or `SPECS/status_update.md`: Regularly updated with recent achievements, current status, and next steps, reflecting progress on the Generalized Measure Framework and HEDIS measure implementation.
- [ ] **Model Diagrams (Optional but Recommended):**
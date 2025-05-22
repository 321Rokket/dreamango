# Pythia 9 "The Phoenix" - Development Workflows

## Responsible CHOIRBOIS Conductor(s)

*To be assigned*


## 1. Introduction

This document outlines the development workflows, CI/CD pipeline, and best practices for the Pythia 9 "The Phoenix" project. Pythia 9 is a next-generation high-energy physics event generator, rewritten in Rust with a core focus on performance, modularity, and GPU acceleration, and planned to culminate in a full-stack web application.

This guide is intended for all contributors to ensure consistency and quality throughout the development lifecycle. It complements the `000_PROJECT_OVERVIEW.md`, `001_PHYSICS_IMPLEMENTATION.md`, and `PYTHIA_LEGACY_TO_PYTHIA9_TRANSITION.md` documents.

## 2. General Development Practices (All Phases)

### 2.1. Version Control (Git & GitHub)

-   **Repository:** All code is hosted on GitHub in the official PythiaRS repository.
-   **Branching Strategy:**
    -   `main`: Represents the latest stable release. Protected branch.
    -   `develop`: Main integration branch for ongoing development. All feature branches merge into `develop`. Protected branch.
    -   `feature/<feature-name>`: For new features or significant module development (e.g., `feature/parton-showers-v2`, `feature/gpu-mpi-kernels`, `feature/webapp-user-auth`). Branched from `develop`.
    -   `fix/<issue-number_short-description>`: For bug fixes (e.g., `fix/123_off-by-one-kinematics`). Branched from `develop` or `main` (for hotfixes).
    -   `hotfix/<version>`: For critical fixes on a release. Branched from `main` and merged back into `main` and `develop`.
    -   `release/<version>`: Used for preparing a new release (e.g., `release/v0.1.0`). Branched from `develop`.
-   **Commit Messages:** Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This aids in changelog generation and semantic versioning.
    -   Example: `feat(physics): implement initial dipole shower algorithm`
    -   Example: `fix(gpu): resolve memory leak in CUDA decay kernel`
    -   Example: `feat(web): add user registration API endpoint`
-   **Pull Requests (PRs):**
    -   All changes must be submitted via PRs to the `develop` branch (or `main` for hotfixes/releases).
    -   PRs should be linked to a GitHub Issue if applicable.
    -   Use PR templates provided in the repository.
    -   Require at least one approval from a core contributor (more for significant changes).
    -   All relevant CI checks must pass.
-   **Issue Tracking:** GitHub Issues are used for tracking tasks, features, bugs, and discussions. Utilize labels for categorization (e.g., `physics-module`, `gpu-cuda`, `web-frontend`, `web-backend`, `bug`, `enhancement`, `documentation`, `core-rust`, `phase1`, `phase4`).

### 2.2. Project Structure (Monorepo)

The project uses a monorepo structure managed with Cargo workspaces for Rust components and standard directory layouts for web components.

```
/pythiars
├── .github/                    # GitHub Actions workflows, PR/Issue templates
├── .vscode/                    # VS Code workspace settings
├── SPECS/                      # Project specifications and design documents
├── pythia9-core/               # Core Rust library for physics simulation engine
│   ├── src/
│   └── Cargo.toml
├── pythia9-cli/                # (Phase 2) Command-Line Interface application
│   ├── src/
│   └── Cargo.toml
├── pythia9-gui/                # (Phase 3) Native GUI application
│   ├── src/
│   └── Cargo.toml
├── pythia9-web/                # (Phase 4) Web application components
│   ├── frontend/               # e.g., TypeScript/React/Vue/Svelte project
│   │   ├── src/
│   │   └── package.json
│   ├── backend/                # e.g., Rust (Actix/Axum) or Python (FastAPI/Flask) service
│   │   ├── src/
│   │   └── Cargo.toml # or requirements.txt / pyproject.toml
│   ├── common/                 # Shared utilities between frontend/backend if any
│   └── dockerfiles/            # Dockerfiles for web services
├── crates/                     # Workspace for shared Rust utility crates
│   ├── pythia9-utils/
│   └── pythia9-gpu-kernels/
├── data/                       # Example input files, test data, reference outputs
├── examples/                   # Runnable examples (Rust, Python for web API usage)
├── scripts/                    # Helper scripts (build, test automation, etc.)
├── tests/                      # Integration tests, physics validation suites (Python/Rust)
├── .env.example                # Template for environment variables
├── .gitignore
├── Cargo.toml                  # Root Cargo.toml defining the Rust workspace
├── README.md
└── rust-toolchain.toml         # (Optional) Specifies Rust toolchain version
```

## 3. Phase 1-3: Rust Core, CLI & Native GUI Development

This section details workflows specific to the Rust-based components: the core physics engine, the command-line interface, and the native GUI.

### 3.1. Local Development Environment (Rust & GPU)

-   **Rust Toolchain:**
    -   Managed via `rustup`. Install from [rustup.rs](https://rustup.rs/).
    -   The specific Rust version will be defined in `rust-toolchain.toml` if strict pinning is required. Default to latest stable.
    -   Key commands: `rustup update`, `cargo build`, `cargo run`, `cargo test`, `cargo clippy`, `cargo fmt`.
-   **IDE:**
    -   Visual Studio Code (VS Code) with the `rust-analyzer` extension is highly recommended.
    -   Other editors/IDEs with Rust support (e.g., CLion with Rust plugin, Neovim with LSP) are also suitable.
-   **GPU Development SDKs & Drivers:** (Required for Phase 1 GPU features)
    -   **NVIDIA:** CUDA Toolkit. Ensure `nvcc` is in `PATH` and drivers are up-to-date.
    -   **AMD:** ROCm. Ensure compiler and libraries are correctly installed.
    -   **Intel:** oneAPI Base Toolkit.
    -   **Apple Metal:** Comes with Xcode Command Line Tools on macOS.
    -   Environment variables (e.g., `CUDA_HOME`, `ROCM_PATH`) may need setting.
-   **Dependencies:** Managed via `Cargo.toml` for each Rust crate.
-   **Pre-commit Hooks:** Highly recommended. Configure `cargo fmt` and `cargo clippy` (see Section 7.1).

### 3.2. Feature Development Lifecycle (Rust & GPU)

1.  **Planning & Design:** As per General Practices (Section 2), plus:
    -   For physics modules: research existing models (Pythia 8), define algorithms.
    -   For GPU features: identify compute-intensive sections, design kernel logic, plan data transfers.
    -   Review `SPECS/PYTHIA_LEGACY_TO_PYTHIA9_TRANSITION.md`.
2.  **Branch Creation:** `feature/...` from `develop`.
3.  **Implementation (Iterative):**
    -   Write Rust code in relevant crate(s).
    -   Develop GPU kernels (WGSL, CUDA C++/Rust, etc.).
    -   Adhere to Rust coding standards (Section 7.1).
4.  **Testing (Continuous):**
    -   Unit tests (`#[test]`).
    -   Integration tests.
    -   Physics validation tests against Pythia 8 / experimental data.
    -   GPU kernel tests on target hardware.
    -   Use `cargo test` frequently.
5.  **Documentation:** `rustdoc` comments, update `SPECS/`, add `examples/`.
6.  **Code Quality & Performance:** `cargo fmt`, `cargo clippy`. Profile and benchmark critical sections.
7.  **Pull Request & Code Review:** To `develop`, clear description, address feedback.
8.  **Merge:** After approval and CI passes.

### 3.3. Key Configuration Files (Rust)

-   **`Cargo.toml`:** (Root and per-crate) Defines dependencies, features, workspace members.
-   **`rust-toolchain.toml`:** (Optional) Pins a specific Rust toolchain version.
-   **`.pre-commit-config.yaml`:** (Recommended) For configuring pre-commit hooks for Rust. Can be extended for other languages.
    ```yaml
    # .pre-commit-config.yaml (Example focusing on Rust, extendable)
    repos:
    -   repo: https://github.com/pre-commit/pre-commit-hooks
        rev: v4.4.0 # Use the latest version
        hooks:
        -   id: check-toml
        -   id: check-yaml
        -   id: end-of-file-fixer
        -   id: trailing-whitespace
    -   repo: local
        hooks:
        -   id: cargo-fmt
            name: cargo fmt
            entry: cargo fmt --all -- --check
            language: system
            types: [rust]
            pass_filenames: false
        -   id: cargo-clippy
            name: cargo clippy
            entry: cargo clippy --all-targets --all-features -- -D warnings
            language: system
            types: [rust]
            pass_filenames: false
    ```

## 4. Phase 4: Web Application Development

This section outlines workflows for the Phase 4 full-stack web application, which will utilize the Pythia 9 Rust core.

### 4.1. Technology Stack Overview (Illustrative)

-   **Frontend:** TypeScript with a modern framework (e.g., React, Vue, Svelte, SolidJS). Bundlers like Vite or Webpack.
-   **Backend API:** Could be Rust-based (e.g., Actix, Axum, Rocket) for tight integration with `pythia9-core`, or Python (e.g., FastAPI, Flask) for rapid development of certain services.
-   **Database:** Project-dependent (e.g., PostgreSQL, SQLite).
-   **Containerization:** Docker for development and production.

### 4.2. Local Development Environment (Web)

-   **Node.js:** Latest LTS version (e.g., via `nvm`). Package manager: `npm` or `yarn`.
-   **Python:** Latest stable version (e.g., via `pyenv`). Package manager: `pip` with `venv`.
-   **Rust:** (If backend is Rust-based) As per Section 3.1.
-   **Docker & Docker Compose:** For managing services.
-   **IDE:** VS Code with extensions for TypeScript/JavaScript (e.g., ESLint, Prettier), Python, Docker.
-   **Setup Steps (Typical):**
    1.  Clone repository.
    2.  Navigate to `pythia9-web/frontend/`: `npm install` (or `yarn install`).
    3.  Navigate to `pythia9-web/backend/` (if Python): `python -m venv .venv`, `source .venv/bin/activate`, `pip install -r requirements.txt`.
    4.  (If backend is Rust): Build with `cargo build`.
    5.  Use `docker-compose up -d` from `pythia9-web/` or root to start services defined in a `docker-compose.yml` file.

### 4.3. Feature Development Lifecycle (Web)

1.  **Planning & Design:** As per General Practices (Section 2). Define API contracts (e.g., OpenAPI) between frontend and backend.
2.  **Branch Creation:** `feature/...` from `develop`.
3.  **Implementation (Iterative):**
    -   Develop frontend components (TypeScript/JavaScript).
    -   Develop backend API endpoints and logic (Rust/Python).
    -   Adhere to coding standards (Section 7.2, 7.3).
4.  **Testing (Continuous):**
    -   Frontend: Unit tests (e.g., Jest, Vitest, React Testing Library), component tests, E2E tests (e.g., Playwright, Cypress).
    -   Backend: Unit tests (e.g., Pytest for Python, standard `#[test]` for Rust), integration tests for API endpoints.
    -   Use `npm test`, `pytest`, `cargo test` as appropriate.
5.  **Documentation:** JSDoc/TSDoc for frontend, OpenAPI specs for API, standard docs for backend language.
6.  **Code Quality:**
    -   Linters: ESLint for TypeScript/JavaScript, Flake8/Pylint for Python.
    -   Formatters: Prettier for TS/JS/JSON/YAML, Black for Python.
    -   Utilize pre-commit hooks for these (extend `.pre-commit-config.yaml` or have a web-specific one).
7.  **Pull Request & Code Review:** To `develop`, clear description, address feedback.
8.  **Merge:** After approval and CI passes.

### 4.4. Key Configuration Files (Web)

-   **Frontend:** `package.json`, `tsconfig.json` (if TS), bundler configs (e.g., `vite.config.ts`).
-   **Backend (Python):** `requirements.txt` or `pyproject.toml` (with Poetry/PDM).
-   **Backend (Rust):** `Cargo.toml` within the backend crate.
-   **Containerization:** `Dockerfile`(s) for frontend server and backend services, `docker-compose.yml` for local development orchestration.
-   **Linters/Formatters:** `.eslintrc.js`, `.prettierrc.js`, `pyproject.toml` (for Black/Flake8 config).

## 5. CI/CD Pipeline (GitHub Actions)

A GitHub Actions workflow (e.g., `.github/workflows/ci.yml` or multiple workflow files) will automate checks and builds.

### 5.1. General Principles

-   **Triggers:** On pushes to `main`, `develop`, `feature/*`, `fix/*`, `release/*`, and on pull requests targeting `main` or `develop`.
-   **Matrix Builds:** Where appropriate, test on multiple OS versions or Node/Python versions.

### 5.2. CI/CD for Rust Components (Phases 1-3)

-   **Jobs:**
    1.  **Lint & Format (`rust_lint_format`):** `cargo fmt --check`, `cargo clippy -- -D warnings`.
    2.  **CPU Tests (`rust_test_cpu`):** `cargo test` across OS matrix (Linux, macOS, Windows).
    3.  **GPU Build & Basic Test (`rust_test_gpu`):** Complex, may require self-hosted runners. Build with GPU features, run minimal GPU tests.
    4.  **Build Release Artifacts (`rust_build_release`):** For CLI/library releases, build binaries/packages for various targets.

### 5.3. CI/CD for Web Application Components (Phase 4)

-   **Jobs (Illustrative, may run in parallel or sequence):**
    1.  **Frontend Checks (`web_frontend_checks`):**
        -   Setup Node.js.
        -   `npm install` (or `yarn install`).
        -   Linting (`npm run lint`).
        -   Testing (`npm test`).
        -   Build (`npm run build`). Upload build artifacts.
    2.  **Backend Checks (`web_backend_checks` - example for Python):**
        -   Setup Python.
        -   `pip install -r requirements.txt`.
        -   Linting (e.g., `flake8`, `black --check`).
        -   Testing (e.g., `pytest`).
    3.  **Build Docker Images (`web_build_docker`):** Build Docker images for frontend server and backend services. Push to a container registry (e.g., GitHub Container Registry, Docker Hub).
    4.  **(Optional) Deployment (`web_deploy_staging` / `web_deploy_production`):** Deploy to cloud environments. This is a more advanced step.

### 5.4. Future CI/CD Enhancements

-   More comprehensive GPU test automation.
-   Integration with benchmarking frameworks.
-   Automated documentation deployment (e.g., `rustdoc` to GitHub Pages, Storybook for frontend).
-   Security scanning (e.g., `cargo audit`, `npm audit`, SAST tools).

## 6. AI-Assisted Development (e.g., GitHub Copilot, Cascade)

Utilizing AI coding assistants can accelerate development, but must be done responsibly and with full human oversight, especially given the critical nature of physics simulation accuracy and performance.

### 6.1. Guidelines for Using AI Coding Assistants

-   **Understanding the Tool:** Be aware of the AI tool's capabilities and limitations. It's an assistant, not a replacement for developer expertise.
-   **Using AI Effectively:**
    -   Use AI for boilerplate code generation, exploring alternative implementations, or getting unstuck on syntax.
    -   Ask for explanations of complex code segments (either generated or existing).
    -   Leverage AI for writing unit tests or test case suggestions.
    -   Craft Clear Prompts: Be specific and provide sufficient context when asking AI for code generation or suggestions to improve the quality and relevance of its output.
-   **Human Oversight is CRITICAL:**
    -   **Never blindly trust AI-generated code.** Treat it as a first draft or a suggestion.
    -   Thoroughly review, test, and validate any code produced or modified with AI assistance, especially for physics accuracy, security, and performance.
    -   The developer using the AI is ultimately responsible for the code's quality and correctness.
-   **Iterative Refinement:** Use AI as a pair programmer or a brainstorming partner.
-   **Security & IP:** Be mindful of not exposing sensitive or proprietary information to external AI models if company policy restricts this. (Cascade operates within your environment, respecting local context).

## 7. Coding Standards

Adherence to consistent coding standards is crucial for maintainability and collaboration.

### 7.1. Rust (Phases 1-3, potential Backend for Phase 4)

-   **Formatting:** Enforced by `rustfmt` (run via `cargo fmt`). Configure via `rustfmt.toml` if needed.
-   **Linting:** Enforced by `clippy` (run via `cargo clippy`). Address all warnings, especially those promoted to errors (`-D warnings`).
-   **API Design:** Follow the [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/).
-   **Error Handling:** Use `Result` and `Option` judiciously. Define custom error types where appropriate.
-   **Documentation:** Comprehensive `rustdoc` comments for all public items.

### 7.2. TypeScript/JavaScript (Frontend & potentially Backend for Phase 4)

-   **Formatting:** Enforced by [Prettier](https://prettier.io/). Integrate into pre-commit hooks and CI.
-   **Linting:** Enforced by [ESLint](https://eslint.org/). Use a standard configuration (e.g., Airbnb, StandardJS, or a project-customized one) with relevant plugins (e.g., for TypeScript, React/Vue).
-   **TypeScript Specifics:**
    -   Enable `strict` mode in `tsconfig.json`.
    -   Use explicit types. Avoid `any` where possible.
    -   Prefer ES modules (`import`/`export`).
-   **General:** Follow functional programming principles where appropriate. Use `async/await` for asynchronous operations. Write clear, modular code.

### 7.3. Python (Backend for Phase 4, Testing Scripts)

-   **Formatting:** Enforced by [Black](https://black.readthedocs.io/).
-   **Linting:** Use [Flake8](https://flake8.pycqa.org/) along with plugins like `flake8-black`, `flake8-isort`.
-   **Style Guide:** Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/).
-   **Type Hints:** Use Python type hints (PEP 484) for all new code. Run a type checker like MyPy in CI.
-   **Project & Dependency Management:** Use `pyproject.toml` with a modern tool like Poetry or PDM, or `requirements.txt` with `pip` and `venv`.
-   **Error Handling:** Use exceptions appropriately. Define custom exceptions for application-specific errors.
-   **Documentation:** Use reStructuredText or Markdown for docstrings (e.g., Google or NumPy style), consider Sphinx or MkDocs for project documentation.
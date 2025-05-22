# CHOIRBOIS Project Management System

## Overview
CHOIRBOIS is a comprehensive project management system that combines traditional project management methodologies with AI-assisted development. It uses a conductor-based architecture to orchestrate various aspects of software development.

## Core Components

### 1. CONDUCTORS
The conductor system is organized in a hierarchical structure:

- **SUPER_CONDUCTORS**: High-level project management
  - PROJECT_CONDUCTOR: Overall project orchestration
  - PRODUCT_CONDUCTOR: Product strategy and vision
  - QA_CONDUCTOR: Quality assurance and governance

- **CONDUCTORS**: Specialized management
  - DEVSECDATAMODELOPS_CONDUCTOR: Development and operations
  - TESTING_CONDUCTOR: Testing strategy and execution
  - GOVERNANCE_REPORTING_CONDUCTOR: Compliance and reporting

- **SEMI_CONDUCTORS**: Domain-specific management
  - Various test conductors (TDD, BDD, Functional, etc.)
  - Specialized technical conductors

- **MICRO_CONDUCTORS**: Technical implementation
  - Code quality, security, performance

- **NANO_CONDUCTORS**: Low-level technical details
  - Linting, formatting, dependencies

### 2. PERFORMERS
AI agents and tools that execute tasks:

- **EXECUTION_AGENTS**: Direct code generation and modification
- **INTEGRATION_AGENTS**: External service integration
- **REPORTING_AGENTS**: Metrics and status reporting

### 3. WORKFLOWS
Standardized processes and patterns:

- **ORCHESTRATION_PATTERNS**: How conductors interact
- **INTEGRATION_PATTERNS**: External system integration
- **TEMPLATES**: Standard document templates

## Getting Started

1. Review the SPECS directory for project-specific documentation
2. Familiarize yourself with the conductor responsible for your area
3. Follow the START_HERE_CHECKLIST.md for initial setup
4. Use the appropriate conductor's templates and best practices

## Key Documents

- `000_PROJECT_OVERVIEW.md`: High-level project information
- `001_VISION.md`: Project vision and goals
- `002_SMART_OKR_TRACKER.md`: Objectives and key results
- `000_START_HERE_CHECKLIST.md`: Initial setup guide

## AI Integration

The system is designed to work with various AI models and tools. Each conductor has specific prompts and templates for AI interaction. See the respective conductor's `system_prompt.md` and `user_prompt_templates.md` for details.

## Development Workflow

1. Identify the relevant conductor for your task
2. Follow the conductor's best practices and templates
3. Use the appropriate performers for execution
4. Follow the defined workflows for consistency

## Next Steps

1. Review the START_HERE_CHECKLIST.md for initial setup
2. Familiarize yourself with the conductor responsible for your area
3. Begin with the core documentation in the SPECS directory
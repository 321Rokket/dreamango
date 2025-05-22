#!/usr/bin/env python3
import os
from pathlib import Path

def get_comment(filename):
    """Generate a single word comment based on the filename."""
    # Remove .md extension and convert to lowercase
    name = filename.replace('.md', '').lower()
    
    # Handle special cases
    if name == 'choirbois':
        return 'orchestra'
    elif 'system_prompt' in name:
        return 'instructions'
    elif 'user_prompt_templates' in name:
        return 'templates'
    elif 'best_practices' in name:
        return 'guidelines'
    elif 'escalation_protocols' in name:
        return 'procedures'
    elif 'integration_guides' in name:
        return 'connections'
    elif 'product_strategy_templates' in name:
        return 'roadmap'
    elif 'stakeholder_management' in name:
        return 'relationships'
    elif 'governance_frameworks' in name:
        return 'standards'
    elif 'deployment_approval_protocols' in name:
        return 'releases'
    elif 'pipeline_orchestration' in name:
        return 'workflow'
    elif 'security_compliance' in name:
        return 'safeguards'
    elif 'test_strategy_templates' in name:
        return 'testing'
    elif 'coverage_requirements' in name:
        return 'metrics'
    elif 'reporting_templates' in name:
        return 'reports'
    elif 'compliance_checklists' in name:
        return 'audits'
    elif 'tdd_workflows' in name:
        return 'cycles'
    elif 'red_green_refactor' in name:
        return 'process'
    elif 'gherkin_templates' in name:
        return 'scenarios'
    elif 'scenario_patterns' in name:
        return 'patterns'
    elif 'test_case_templates' in name:
        return 'cases'
    elif 'validation_criteria' in name:
        return 'criteria'
    elif 'api_testing_patterns' in name:
        return 'endpoints'
    elif 'contract_testing' in name:
        return 'agreements'
    elif 'e2e_patterns' in name:
        return 'flows'
    elif 'accessibility_testing' in name:
        return 'a11y'
    elif 'regression_suites' in name:
        return 'suites'
    elif 'risk_analysis' in name:
        return 'risks'
    elif 'unit_test_patterns' in name:
        return 'units'
    elif 'mocking_strategies' in name:
        return 'mocks'
    elif 'review_checklists' in name:
        return 'reviews'
    elif 'quality_gates' in name:
        return 'gates'
    elif 'vulnerability_patterns' in name:
        return 'vulns'
    elif 'remediation_guides' in name:
        return 'fixes'
    elif 'load_testing_patterns' in name:
        return 'loads'
    elif 'performance_benchmarks' in name:
        return 'benchmarks'
    elif 'linting_rules' in name:
        return 'rules'
    elif 'code_style_guides' in name:
        return 'styles'
    elif 'formatting_standards' in name:
        return 'format'
    elif 'prettier_configs' in name:
        return 'config'
    elif 'update_strategies' in name:
        return 'updates'
    elif 'security_advisories' in name:
        return 'alerts'
    elif 'build_optimization' in name:
        return 'builds'
    elif 'artifact_management' in name:
        return 'artifacts'
    elif 'local_agents' in name:
        return 'local'
    elif 'api_agents' in name:
        return 'api'
    elif 'cursor_agents' in name:
        return 'cursor'
    elif 'claude_agents' in name:
        return 'claude'
    elif 'windsurf_agents' in name:
        return 'windsurf'
    elif 'github_mcp' in name:
        return 'github'
    elif 'clickup_mcp' in name:
        return 'clickup'
    elif 'teams_mcp' in name:
        return 'teams'
    elif 'slack_mcp' in name:
        return 'slack'
    elif 'asana_mcp' in name:
        return 'asana'
    elif 'workspace_mcp' in name:
        return 'workspace'
    elif 'gcp_mcp' in name:
        return 'gcp'
    elif 'metrics_collectors' in name:
        return 'metrics'
    elif 'dashboard_generators' in name:
        return 'dashboards'
    elif 'notification_dispatchers' in name:
        return 'notifications'
    elif 'hierarchy_flows' in name:
        return 'hierarchy'
    elif 'escalation_paths' in name:
        return 'escalation'
    elif 'approval_chains' in name:
        return 'approvals'
    elif 'feedback_loops' in name:
        return 'feedback'
    elif 'mcp_server_configs' in name:
        return 'servers'
    elif 'api_orchestration' in name:
        return 'orchestration'
    elif 'cross_platform_sync' in name:
        return 'sync'
    elif 'project_kickoff' in name:
        return 'kickoff'
    elif 'sprint_planning' in name:
        return 'sprints'
    elif 'deployment_checklist' in name:
        return 'deploy'
    elif 'incident_response' in name:
        return 'incidents'
    else:
        return 'document'

def create_file(path, filename):
    """Create a .md file with a single word comment."""
    full_path = path / filename
    comment = get_comment(filename)
    content = f"# {filename.replace('.md', '')}\n\n{comment}"
    
    # Create directory if it doesn't exist
    path.mkdir(parents=True, exist_ok=True)
    
    # Write the file
    with open(full_path, 'w') as f:
        f.write(content)
    print(f"Created: {full_path}")

def main():
    # Base directory
    base_dir = Path("CHOIRBOIS")
    
    # Define the structure
    structure = {
        "SPECS": ["CHOIRBOIS.md"],
        "CONDUCTORS": {
            "SUPER_CONDUCTORS": {
                "PROJECT_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "escalation_protocols.md",
                    "integration_guides.md"
                ],
                "PRODUCT_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "product_strategy_templates.md",
                    "stakeholder_management.md"
                ],
                "QA_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "governance_frameworks.md",
                    "deployment_approval_protocols.md"
                ]
            },
            "CONDUCTORS": {
                "DEVSECDATAMODELOPS_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "pipeline_orchestration.md",
                    "security_compliance.md"
                ],
                "TESTING_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "test_strategy_templates.md",
                    "coverage_requirements.md"
                ],
                "GOVERNANCE_REPORTING_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "reporting_templates.md",
                    "compliance_checklists.md"
                ]
            },
            "SEMI_CONDUCTORS": {
                "TDD_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "tdd_workflows.md",
                    "red_green_refactor.md"
                ],
                "BDD_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "gherkin_templates.md",
                    "scenario_patterns.md"
                ],
                "FUNCTIONAL_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "test_case_templates.md",
                    "validation_criteria.md"
                ],
                "INTEGRATION_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "api_testing_patterns.md",
                    "contract_testing.md"
                ],
                "UI_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "e2e_patterns.md",
                    "accessibility_testing.md"
                ],
                "REGRESSION_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "regression_suites.md",
                    "risk_analysis.md"
                ]
            },
            "MICRO_CONDUCTORS": {
                "UNIT_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "unit_test_patterns.md",
                    "mocking_strategies.md"
                ],
                "CODE_REVIEW_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "review_checklists.md",
                    "quality_gates.md"
                ],
                "SECURITY_SCAN_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "vulnerability_patterns.md",
                    "remediation_guides.md"
                ],
                "PERFORMANCE_TEST_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "load_testing_patterns.md",
                    "performance_benchmarks.md"
                ]
            },
            "NANO_CONDUCTORS": {
                "LINT_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "linting_rules.md",
                    "code_style_guides.md"
                ],
                "FORMAT_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "formatting_standards.md",
                    "prettier_configs.md"
                ],
                "DEPENDENCY_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "update_strategies.md",
                    "security_advisories.md"
                ],
                "BUILD_CONDUCTOR": [
                    "system_prompt.md",
                    "user_prompt_templates.md",
                    "best_practices.md",
                    "build_optimization.md",
                    "artifact_management.md"
                ]
            }
        },
        "PERFORMERS": {
            "EXECUTION_AGENTS": [
                "local_agents.md",
                "api_agents.md",
                "cursor_agents.md",
                "claude_agents.md",
                "windsurf_agents.md"
            ],
            "INTEGRATION_AGENTS": [
                "github_mcp.md",
                "clickup_mcp.md",
                "teams_mcp.md",
                "slack_mcp.md",
                "asana_mcp.md",
                "workspace_mcp.md",
                "gcp_mcp.md"
            ],
            "REPORTING_AGENTS": [
                "metrics_collectors.md",
                "dashboard_generators.md",
                "notification_dispatchers.md"
            ]
        },
        "WORKFLOWS": {
            "ORCHESTRATION_PATTERNS": [
                "hierarchy_flows.md",
                "escalation_paths.md",
                "approval_chains.md",
                "feedback_loops.md"
            ],
            "INTEGRATION_PATTERNS": [
                "mcp_server_configs.md",
                "api_orchestration.md",
                "cross_platform_sync.md"
            ],
            "TEMPLATES": [
                "project_kickoff.md",
                "sprint_planning.md",
                "deployment_checklist.md",
                "incident_response.md"
            ]
        }
    }

    def process_structure(current_path, structure):
        if isinstance(structure, list):
            for filename in structure:
                create_file(current_path, filename)
        elif isinstance(structure, dict):
            for dirname, content in structure.items():
                new_path = current_path / dirname
                process_structure(new_path, content)

    # Start processing
    process_structure(base_dir, structure)
    print("\nDirectory structure creation complete!")

if __name__ == "__main__":
    main() 
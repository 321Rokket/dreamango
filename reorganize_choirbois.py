#!/usr/bin/env python3
import os
import shutil
from pathlib import Path
import re

class CHOIRBOISReorganizer:
    def __init__(self):
        self.root_dir = Path(".")
        self.choirbois_dir = self.root_dir / "CHOIRBOIS"
        self.specs_dir = self.root_dir / "SPECS"
        
        # Define the new structure
        self.structure = {
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

        # File mapping for reorganization
        self.file_mapping = {
            "AGENTS.md": "PERFORMERS/EXECUTION_AGENTS/local_agents.md",
            "CLAUDE_WORKFLOWS.md": "WORKFLOWS/ORCHESTRATION_PATTERNS/hierarchy_flows.md",
            "CICD_DEPLOYMENT_CHECKLIST.md": "WORKFLOWS/TEMPLATES/deployment_checklist.md",
            "ARCHITECTURAL_CHECKLIST.md": "CONDUCTORS/SUPER_CONDUCTORS/PROJECT_CONDUCTOR/best_practices.md",
            "TEST_COVERAGE_CHECKLIST.md": "CONDUCTORS/CONDUCTORS/TESTING_CONDUCTOR/coverage_requirements.md",
            "code_quality_metrics.md": "PERFORMERS/REPORTING_AGENTS/metrics_collectors.md"
        }

    def create_directory_structure(self):
        """Create the CHOIRBOIS directory structure."""
        def create_structure(current_path, structure):
            if isinstance(structure, list):
                for filename in structure:
                    file_path = current_path / filename
                    file_path.parent.mkdir(parents=True, exist_ok=True)
                    if not file_path.exists():
                        with open(file_path, 'w') as f:
                            f.write(f"# {filename.replace('.md', '').replace('_', ' ').title()}\n\n")
            elif isinstance(structure, dict):
                for dirname, content in structure.items():
                    new_path = current_path / dirname
                    create_structure(new_path, content)

        # Create CHOIRBOIS directory if it doesn't exist
        self.choirbois_dir.mkdir(exist_ok=True)
        create_structure(self.choirbois_dir, self.structure)

    def move_existing_files(self):
        """Move existing files to their new locations."""
        for old_file, new_path in self.file_mapping.items():
            old_path = self.specs_dir / old_file
            if old_path.exists():
                new_file_path = self.choirbois_dir / new_path
                new_file_path.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(old_path), str(new_file_path))
                print(f"Moved {old_file} to {new_path}")

    def standardize_specs_files(self):
        """Standardize the naming of SPECS files."""
        for file_path in self.specs_dir.glob("*.md"):
            if file_path.name.startswith(("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")):
                # Extract the number and name
                match = re.match(r"(\d+)_(.+)\.md", file_path.name)
                if match:
                    number, name = match.groups()
                    # Ensure three-digit number
                    new_number = number.zfill(3)
                    new_name = f"{new_number}_{name}.md"
                    new_path = file_path.parent / new_name
                    if file_path != new_path:
                        shutil.move(str(file_path), str(new_path))
                        print(f"Renamed {file_path.name} to {new_name}")

    def add_conductor_responsibility_section(self):
        """Add conductor responsibility section to SPECS files."""
        for file_path in self.specs_dir.glob("*.md"):
            with open(file_path, 'r+') as f:
                content = f.read()
                if "Responsible CHOIRBOIS Conductor(s):" not in content:
                    # Add the section after the first heading
                    content = re.sub(
                        r"(# .+?\n)",
                        r"\1\n## Responsible CHOIRBOIS Conductor(s)\n\n*To be assigned*\n\n",
                        content,
                        count=1
                    )
                    f.seek(0)
                    f.write(content)
                    f.truncate()
                    print(f"Added conductor responsibility section to {file_path.name}")

    def run(self):
        """Run the reorganization process."""
        print("Starting CHOIRBOIS directory reorganization...")
        
        # Create new structure
        print("\nCreating directory structure...")
        self.create_directory_structure()
        
        # Move existing files
        print("\nMoving existing files...")
        self.move_existing_files()
        
        # Standardize SPECS files
        print("\nStandardizing SPECS files...")
        self.standardize_specs_files()
        
        # Add conductor responsibility sections
        print("\nAdding conductor responsibility sections...")
        self.add_conductor_responsibility_section()
        
        print("\nReorganization complete!")

if __name__ == "__main__":
    reorganizer = CHOIRBOISReorganizer()
    reorganizer.run() 
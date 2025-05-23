# Claude AI Assistant: Optimal Setup & Workflows for Pythia 9

> **Purpose**: This guide provides best practices for configuring and using Claude effectively within the Pythia 9 project, optimizing tool permissions, and implementing proven workflows for Rust development, physics implementation, and GPU acceleration.

## Tool Customization

### Allowlist Management

Claude operates with a conservative approach to system modification for safety. You can customize permissions in several ways:

1. **Session-Level Permissions**:
   - Select "Always allow" when prompted during a session
   - Use `/allowed-tools` to add or remove tools from the allowlist
   - Examples:
     - `/allowed-tools add Edit` to allow all file edits
     - `/allowed-tools add Bash(git commit:*)` to allow git commits
     - `/allowed-tools add Bash(cargo:*)` for Rust development

2. **Project-Level Configuration**:
   - Edit `.claude/settings.json` (recommended for team sharing)
   - Example configuration:
     ```json
     {
       "allowedTools": [
         "Edit",
         "Bash(git commit:*)",
         "Bash(cargo:*)",
         "Bash(wgpu:*)"
       ]
     }
     ```

## Project Files as Knowledge Base

Using project files strategically as a knowledge base and long-term memory for Claude optimizes both performance and context management:

### Optimal Storage Strategy

1. **What to Store in Project Files**:
   - Rust coding conventions and style guides
   - Physics implementation specifications
   - GPU acceleration strategies
   - Project structure documentation
   - Technical design documents
   - Product requirements and specifications
   - Architecture diagrams and explanations
   - Workflow guides (like this document)

2. **What to Keep in Chat Sessions**:
   - Specific Rust source code for immediate tasks
   - Physics model implementation details
   - GPU kernel optimization discussions
   - Logs and error messages being analyzed
   - Short-term context for current implementation

### Implementing This Approach for Pythia 9

1. **Knowledge Base Organization**:
   - Store general knowledge in `.claude/` directory
   - Keep physics specifications in `SPECS/` directory
   - Use `AI_DOCS/` for AI-specific reference materials
   - Maintain GPU acceleration guides in `GPU_DOCS/`

2. **Documentation Workflow**:
   - After physics implementation discussions, ask Claude to prepare summary documents
   - Example: "Summarize our discussion about the parton shower implementation into a design document"
   - Save these artifacts to appropriate project directories

3. **Handling Large Refactoring**:
   - Create phased implementation plans for physics modules
   - Reference these plans in subsequent chat sessions
   - Ask Claude to document progress against the plan
   - Example: "Based on the parton shower implementation plan in SPECS/parton_showers.md, implement phase 2"

4. **Chat Session Optimization**:
   - For new chats, selectively provide relevant source files
   - Use commands to concatenate related files when needed:
     ```bash
     # Example: Combine all parton shower-related files for context
     cat pythia9-core/src/parton_showers/*.rs > /tmp/parton_shower_context.txt
     ```
   - Then provide this consolidated context to Claude

5. **Best Practices**:
   - Keep individual chat sessions focused on specific physics modules
   - Reference documents in the knowledge base rather than repeating information
   - Regularly update documentation as the project evolves
   - Ask Claude to improve documentation quality and organization

### Benefits for Pythia 9 Development

- Maintains coherent understanding of the physics implementation
- Preserves decisions and rationale across multiple sessions
- Prevents context fragmentation among team members
- Creates valuable documentation as a byproduct of development
- Improves onboarding experience for new team members

## Recommended Permissions for Pythia 9

For Pythia 9 development, we recommend:

```json
{
  "allowedTools": [
    "Edit",
    "Bash(cargo:*)",
    "Bash(git:*)",
    "Bash(wgpu:*)",
    "Bash(cargo test:*)"
  ]
}
```

## Tool Integrations

### GitHub CLI Integration

Claude can use GitHub's `gh` CLI for repository management:

1. **Installation**:
   - Install GitHub CLI: `brew install gh` (macOS) or equivalent
   - Authenticate: `gh auth login`

2. **Common GitHub Commands for Pythia 9**:
   - Create issues: `gh issue create --title "..." --body "..."`
   - Create PRs: `gh pr create --base develop --head feature/... --title "..." --body "..."`
   - View issues: `gh issue view <number>`

### Git Interactions

Claude can effectively handle Git operations for the Pythia 9 project:

1. **Git History Analysis**:
   - Ask Claude to search through git history with specific queries
   - Example prompts:
     - "What changes went into the v0.2.0 release?"
     - "Who implemented the parton shower module and when?"
     - "Why was the GPU acceleration strategy designed this way?"
   - Claude can trace decisions and implementation details through commit history

2. **Commit Message Generation**:
   - Claude automatically considers your changes and recent history
   - Let Claude craft semantic, descriptive commit messages
   - Example: "Please commit these changes with an appropriate message"

### GitHub Workflow Integration

For Pythia 9's GitHub-based workflow, Claude can:

1. **PR Management**:
   - Create PRs with appropriate titles, descriptions, and branch targets
   - Example: "Create a PR for these changes targeting the develop branch"
   - Claude understands shorthand "PR" and will handle the details

2. **Code Review Responses**:
   - Implement fixes based on review comments
   - Example: "Fix the issues mentioned in my PR"
   - Claude can read comments and make appropriate changes

3. **CI/Build Fixes**:
   - Address failing CI builds or linter warnings
   - Example: "Fix the failing CI build for my PR"
   - Claude will analyze the error logs and implement fixes

4. **Issue Triage**:
   - Process and categorize open GitHub issues
   - Example: "Loop through our open GitHub issues and categorize them by priority and complexity"

## Physics Implementation Workflows

### Module Development

1. **Planning Phase**:
   - Review Pythia 8 implementation
   - Design Rust-specific optimizations
   - Plan GPU acceleration strategy
   - Document in SPECS/

2. **Implementation Phase**:
   - Implement core functionality in Rust
   - Add GPU kernels where appropriate
   - Write comprehensive tests
   - Document API and usage

3. **Validation Phase**:
   - Compare with Pythia 8 outputs
   - Validate against experimental data
   - Performance benchmarking
   - Document results

### GPU Acceleration

1. **Kernel Development**:
   - Identify computationally intensive parts
   - Design GPU-friendly algorithms
   - Implement using wgpu
   - Benchmark against CPU version

2. **Integration**:
   - Add GPU execution paths
   - Implement fallback mechanisms
   - Document usage and requirements
   - Add performance monitoring

## Best Practices

1. **Code Organization**:
   - Follow Rust module conventions
   - Separate physics logic from GPU code
   - Use appropriate abstractions
   - Document public APIs

2. **Testing Strategy**:
   - Unit tests for core functionality
   - Integration tests for physics
   - GPU kernel tests
   - Performance benchmarks

3. **Documentation**:
   - Physics implementation details
   - API documentation
   - GPU acceleration guides
   - Performance characteristics

4. **Performance Optimization**:
   - Profile critical paths
   - Optimize GPU kernels
   - Use appropriate data structures
   - Document optimization decisions

## Custom Slash Commands

Create custom commands for repeated workflows by adding markdown files to `.claude/commands/`:

### Example: Test Coverage Report

Create `.claude/commands/test-coverage.md`:
```markdown
Please run the test suite for the Pythia 9 project with coverage reporting and analyze the results.

Follow these steps:

1. Run the tests with coverage: `./run_pytest.sh`
2. Identify areas with insufficient coverage (below targets)
3. Suggest test cases for modules with low coverage
4. Focus especially on physics module (target: 90%)
5. Provide a summary of overall project coverage vs targets

If an argument is provided, run tests for that specific module: $ARGUMENTS
```

### Example: Physics Implementation

Create `.claude/commands/implement-physics.md`:
```markdown
Please help implement the physics model for Pythia 9 based on the specification.

Follow these steps:

1. Review the specification in SPECS/003_physics_implementation.md
2. Identify all required files and changes
3. Create necessary models and migrations
4. Implement the physics logic in Rust
5. Add tests for the physics model
6. Update URLs and settings
7. Verify implementation against the specification

Focus on implementing for: $ARGUMENTS (e.g., "parton shower" or "decay process")
```

## Recommended Workflows

### 1. Explore, Plan, Code, Commit

This workflow is ideal for most development tasks:

1. **Exploration Phase**:
   - Ask Claude to read relevant files without writing code
   - Example: "Read the physics model and understand our current implementation"
   - Use subagents to investigate specific questions
   
2. **Planning Phase**:
   - Ask Claude to create a plan
   - Use "think" triggers for complex problems:
     - "think" < "think hard" < "think harder" < "ultrathink"
   - Example: "Think hard about how we should implement the parton shower"
   - Consider saving the plan as a document for reference

3. **Implementation Phase**:
   - Ask Claude to implement the solution
   - Request verification during implementation
   - Example: "Implement the parton shower in Rust based on your plan"

4. **Commit Phase**:
   - Ask Claude to commit the changes and create a PR
   - Example: "Commit these changes with a descriptive message and create a PR against develop"

### 2. Test-Driven Development (TDD)

Particularly effective for physics features:

1. **Write Tests**:
   - Ask Claude to write tests for the expected functionality
   - Example: "Write tests for the parton shower in Rust"
   - Explicitly mention TDD to prevent implementation code

2. **Verify Test Failures**:
   - Run the tests to confirm they fail appropriately
   - Example: "Run the tests and confirm they fail as expected"

3. **Implementation**:
   - Ask Claude to implement code that passes the tests
   - Example: "Now implement the parton shower in Rust that will pass these tests"

4. **Iteration**:
   - Have Claude run tests, fix issues, and iterate until passing
   - Use independent verification to avoid overfitting

5. **Commit**:
   - Commit the passing implementation
   - Example: "Commit the passing implementation with a clear message"

### 3. UI Development Workflow

For frontend work in pythia9-web:

1. **Share Visual Mock**:
   - Provide Claude with a visual design
   - Example: "Here's a mockup of our new parton shower visualization"

2. **Implementation**:
   - Ask Claude to implement the UI in HTML/CSS
   - Example: "Implement this visualization in HTML/CSS"

3. **Screenshot Iteration**:
   - Take screenshots of results
   - Have Claude iterate until it matches the design
   - Example: "Take a screenshot of the visualization and compare to the mock"

4. **Commit**:
   - Commit the final UI implementation
   - Example: "Commit these UI changes"

### 4. Codebase Q&A for Onboarding

One of Claude's most valuable uses is for learning and exploring a codebase, especially for new team members:

1. **Ask Natural Engineering Questions**:
   - Phrase questions as you would to another engineer
   - Claude will search the codebase to find answers
   - No special prompting required

2. **Example Questions for Pythia 9**:
   - "How does the parton shower work?"
   - "What's the process for adding a new physics module?"
   - "Why are we using Rust instead of Python for physics implementation?"
   - "How does the GPU acceleration strategy work?"
   - "What edge cases does the parton shower handle?"
   - "How would I create a new API endpoint for physics model updates?"
   - "Explain the multi-tenant data isolation implementation"
   - "What's happening in the parton shower at line 85 of pythia9-core/src/parton_showers/parton_shower.rs?"

3. **Comparative Questions**:
   - "What's the difference between our physics implementation and industry standards?"
   - "How does our GPU acceleration compare to other frameworks?"
   - "Would Python's physics library be easier than our Rust implementation?"

4. **Best Practices**:
   - Provide context about your role and familiarity with the codebase
   - Start with broader questions before diving into specifics
   - Ask Claude to show relevant code snippets in its explanations
   - For complex topics, ask Claude to create a summary document you can reference later

## Workflow Optimization

### Be Specific in Instructions

Claude performs significantly better with specific instructions, especially on first attempts:

| Poor | Good |
|------|------|
| "Add tests for physics" | "Write a test case for parton shower that covers the edge case where the parton has decayed" |
| "Why is our physics implementation complex?" | "Look through the physics implementation's git history and explain why we chose Rust over Python" |
| "Add physics UI" | "Implement a visualization following our existing UI patterns in pythia9-web/parton_shower.html, with fields for energy, angle, and 'Decay Process' option" |

Specificity reduces iterations and leads to better alignment with expectations.

### Share Visual Information

Claude works well with visual information:

1. **Screenshots**:
   - Paste screenshots directly (macOS: Cmd+Ctrl+Shift+4, then Ctrl+V)
   - Useful for UI mockups, error messages, and diagrams

2. **Drag and Drop**:
   - Drag image files directly into the prompt input
   - Works for design mocks and wireframes

3. **File Paths**:
   - Provide paths to image files for Claude to access
   - Example: "Please look at docs/workflow.png for reference"

### Reference Files Efficiently

Use tab-completion to quickly reference files or directories in the Pythia 9 repo:

1. Begin typing a path (e.g., "parton_showers")
2. Press Tab to see auto-completion options
3. Select the desired file/folder

This helps Claude find the right resources without manual path typing.

### Provide Relevant URLs

1. Paste specific URLs alongside your prompts
2. To avoid repetitive permission prompts:
   - Use `/allowed-tools add fetch(docs.rust-lang.org:*)`
   - Include common docs URLs in your `.claude/settings.json`

### Course Correct Early and Often

Active collaboration yields better results than autonomous operation:

1. **Plan Before Implementation**:
   - Ask Claude to create a plan before writing code
   - Review and approve the plan before implementation begins

2. **Interrupt When Needed**:
   - Press Escape to interrupt Claude's work while preserving context
   - Useful when you see Claude heading in a wrong direction

3. **History Navigation**:
   - Double-tap Escape to access history and edit previous prompts
   - Explore alternative approaches without starting over

4. **Undo Changes**:
   - Ask Claude to revert specific changes if needed
   - Example: "Let's undo the changes to pythia9-core/src/parton_showers/parton_shower.rs and try a different approach"

### Use /clear to Maintain Focus

During long sessions, clear context between tasks:

1. Use the `/clear` command to reset Claude's context window
2. Particularly useful when switching between distinct tasks
3. Start each new task with clear, specific instructions

### Use Checklists for Complex Tasks

For multi-step tasks, create structured checklists:

1. Have Claude create a Markdown file as a working checklist
2. For example, to implement the parton shower:
   - Claude creates `parton_shower_checklist.md` with all required steps
   - Each step is checked off as completed
   - Progress is tracked visually and can be committed to the repo

### Pass Data Efficiently

Several methods to provide data to Claude:

1. **Direct copy/paste**: Simplest for code snippets and small configs
2. **Pipe into Claude**: `cat physics_logs.txt | claude` for larger data
3. **Command output**: Ask Claude to run commands and process the output
4. **File reading**: "Please read pythia9-core/src/parton_showers/parton_shower.rs"

## Headless Mode for Automation

Claude Code includes headless mode for CI/CD pipelines and automation:

### Basic Usage

1. Use the `-p` flag with a prompt to enable headless mode:
   - `claude -p "Fix PEP 8 issues in pythia9-core/src/parton_showers/parton_shower.rs" --allowedTools Edit`

2. For structured output:
   - `claude -p "Analyze test coverage" --output-format stream-json`

### Automation Examples for Pythia 9

1. **Issue Triage**:
   - Create a GitHub Action that uses Claude to analyze new issues
   - Example: `claude -p "Categorize this issue: $ISSUE_BODY" --json > categorization.json`

2. **Linting Beyond Standard Tools**:
   - Use Claude as a semantic linter in pre-commit hooks
   - Example: `claude -p "Review this Rust code for security issues: $STAGED_FILES"`

### Verbose Mode

For debugging automated Claude usage:
- Add `--verbose` flag during development
- Remove in production for cleaner output

## Multi-Claude Workflows

Running multiple Claude instances in parallel offers powerful capabilities:

### Write-Review Pattern

1. **First Claude**: Writes code for a feature
2. **Second Claude**: Reviews the implementation
3. **Third Claude**: Incorporates feedback and finalizes the code

This mirrors real team collaboration and often yields better results than a single Claude.

### Multiple Repository Checkouts

1. Create 3-4 separate checkouts of the Pythia 9 repo in different folders
2. Open each in its own terminal or VS Code window
3. Assign different tasks to Claude in each checkout
4. Check progress and approve operations across all instances

### Git Worktrees

A more efficient alternative to multiple checkouts:

1. **Create Worktrees**:
   - `git worktree add ../pythia9-oauth oauth-feature`
   - `git worktree add ../pythia9-physics physics-improvements`

2. **Run Claude in Each**:
   - `cd ../pythia9-oauth && claude`
   - `cd ../pythia9-physics && claude`

3. **Benefits for Pythia 9**:
   - Implement physics model in one worktree
   - Improve GPU acceleration in another
   - Fix security issues in a third
   - All while sharing the same repository history

4. **Cleanup**:
   - `git worktree remove ../pythia9-oauth`

### Custom Harness for Large Projects

For extensive migrations or analyses:

1. **Task Generation**:
   - Have Claude create a script that generates a list of tasks
   - Example: "Create a script to identify all files needing physics model updates"

2. **Processing Loop**:
   - Loop through tasks with programmatic Claude calls
   - `claude -p "Update physics model in $FILE" --allowedTools Edit`

3. **Progress Tracking**:
   - Track completion through structured output
   - Combine results for comprehensive reporting

## Best Practices for Pythia 9

1. **Context Setting**:
   - Always start with clear context about Pythia 9's architecture
   - Example: "We're working on the Pythia 9 physics platform, which is a Rust-based B2B SaaS..."

2. **Project Standards Adherence**:
   - Remind Claude of project coding standards
   - Example: "Remember to follow our service layer pattern and always log security events"

3. **Regular Testing**:
   - Run tests frequently during implementation
   - Example: "Let's run the tests to make sure our changes don't break existing functionality"

4. **Security Focus**:
   - Emphasize security for all physics features
   - Example: "Ensure all user inputs are validated and properly sanitized"

5. **Documentation Updates**:
   - Request documentation updates with code changes
   - Example: "Please update the API documentation to include the new physics endpoints"

## Troubleshooting

- If Claude loses context, refer it to CLAUDE.md and the `.claude` directory
- For large codebases, use semantic search rather than file browsing
- When implementation struggles, break problems into smaller parts
- Use subagents for verification of complex implementations

---

**Last Updated**: August 1, 2023  
**Responsible**: [Engineering Team]

*Note: This is a living document. Update with new insights and workflows as the project evolves.* 
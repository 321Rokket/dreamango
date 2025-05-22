#!/bin/bash

# Base directory
BASE_DIR="/Users/tsili/Documents/projects/rokket_apps/dreamcatchr/dreamango/SPECS/AI_INTEGRATION"
SOURCE_DIR="/Users/tsili/Documents/projects/rokket_apps/dreamcatchr/dreamango/tmp/leaked-system-prompts"

# Clean up any existing directories
rm -rf "$BASE_DIR/SYSTEM_PROMPTS"/*

# Create necessary directories
mkdir -p "$BASE_DIR/SYSTEM_PROMPTS/ANTHROPIC"
mkdir -p "$BASE_DIR/SYSTEM_PROMPTS/OPENAI"
mkdir -p "$BASE_DIR/SYSTEM_PROMPTS/MICROSOFT"
mkdir -p "$BASE_DIR/SYSTEM_PROMPTS/GITHUB"
mkdir -p "$BASE_DIR/SYSTEM_PROMPTS/OTHER"
mkdir -p "$BASE_DIR/USER_PROMPTS/CODE_GENERATION"
mkdir -p "$BASE_DIR/USER_PROMPTS/DOCUMENTATION"
mkdir -p "$BASE_DIR/USER_PROMPTS/TESTING"
mkdir -p "$BASE_DIR/USER_PROMPTS/DEBUGGING"
mkdir -p "$BASE_DIR/USER_PROMPTS/CODE_REVIEW"
mkdir -p "$BASE_DIR/USER_PROMPTS/ARCHITECTURE"
mkdir -p "$BASE_DIR/AI_MODELS/CAPABILITIES"
mkdir -p "$BASE_DIR/AI_MODELS/REQUIREMENTS"
mkdir -p "$BASE_DIR/AI_MODELS/VERSIONS"
mkdir -p "$BASE_DIR/INTEGRATION_PATTERNS/API"
mkdir -p "$BASE_DIR/INTEGRATION_PATTERNS/ERROR_HANDLING"
mkdir -p "$BASE_DIR/INTEGRATION_PATTERNS/SECURITY"
mkdir -p "$BASE_DIR/INTEGRATION_PATTERNS/CACHING"

# Move Anthropic prompts
for file in "$SOURCE_DIR"/anthropic-*.md; do
    if [ -f "$file" ]; then
        cp "$file" "$BASE_DIR/SYSTEM_PROMPTS/ANTHROPIC/"
    fi
done

# Move OpenAI prompts
for file in "$SOURCE_DIR"/openai-*.md; do
    if [ -f "$file" ]; then
        cp "$file" "$BASE_DIR/SYSTEM_PROMPTS/OPENAI/"
    fi
done

# Move Microsoft prompts
for file in "$SOURCE_DIR"/microsoft-*.md; do
    if [ -f "$file" ]; then
        cp "$file" "$BASE_DIR/SYSTEM_PROMPTS/MICROSOFT/"
    fi
done

# Move GitHub prompts
for file in "$SOURCE_DIR"/github-*.md; do
    if [ -f "$file" ]; then
        cp "$file" "$BASE_DIR/SYSTEM_PROMPTS/GITHUB/"
    fi
done

# Move other prompts
for file in "$SOURCE_DIR"/*.md; do
    if [ -f "$file" ] && [[ ! "$file" =~ (anthropic|openai|microsoft|github|README) ]]; then
        cp "$file" "$BASE_DIR/SYSTEM_PROMPTS/OTHER/"
    fi
done

# Create model capabilities documentation
cat > "$BASE_DIR/AI_MODELS/CAPABILITIES/README.md" << 'EOL'
# AI Model Capabilities

This directory contains detailed documentation about the capabilities of each AI model.

## Model Categories

### Language Models
- Text generation
- Code generation
- Documentation
- Translation
- Summarization

### Image Models
- Image generation
- Image editing
- Style transfer
- Object detection

### Code Models
- Code completion
- Code review
- Bug detection
- Refactoring
- Documentation generation

### Assistant Models
- Task automation
- Information retrieval
- Context understanding
- Multi-turn conversations
EOL

# Create model requirements documentation
cat > "$BASE_DIR/AI_MODELS/REQUIREMENTS/README.md" << 'EOL'
# AI Model Requirements

This directory contains information about the requirements for using each AI model.

## General Requirements

### API Access
- API keys
- Authentication methods
- Rate limits
- Usage quotas

### Environment Setup
- Required dependencies
- System requirements
- Network configuration
- Security settings

### Integration Requirements
- API endpoints
- Request/response formats
- Error handling
- Retry policies
EOL

# Create model versions documentation
cat > "$BASE_DIR/AI_MODELS/VERSIONS/README.md" << 'EOL'
# AI Model Versions

This directory tracks the versions and updates of supported AI models.

## Version History

### Anthropic
- Claude 3.5 Sonnet (Latest)
- Claude 3 Opus
- Claude 3 Haiku

### OpenAI
- GPT-4 Turbo
- GPT-4
- GPT-3.5 Turbo
- DALL-E 3

### Microsoft
- Copilot (Latest)
- Bing Chat

### GitHub
- Copilot Chat (Latest)

## Version Updates
- Release dates
- Major changes
- Breaking changes
- Deprecation notices
EOL

# Create API integration patterns
cat > "$BASE_DIR/INTEGRATION_PATTERNS/API/README.md" << 'EOL'
# API Integration Patterns

This directory contains patterns for integrating with AI model APIs.

## Integration Types

### REST API
- Authentication
- Request formatting
- Response handling
- Error handling

### WebSocket
- Connection management
- Real-time updates
- Error recovery
- Reconnection strategies

### SDK Integration
- Language-specific SDKs
- Best practices
- Common patterns
- Error handling
EOL

# Create error handling patterns
cat > "$BASE_DIR/INTEGRATION_PATTERNS/ERROR_HANDLING/README.md" << 'EOL'
# Error Handling Patterns

This directory contains patterns for handling errors in AI integrations.

## Error Types

### API Errors
- Rate limiting
- Authentication
- Invalid requests
- Server errors

### Model Errors
- Invalid inputs
- Context limits
- Token limits
- Model availability

### Integration Errors
- Network issues
- Timeout handling
- Retry strategies
- Fallback options
EOL

# Create security patterns
cat > "$BASE_DIR/INTEGRATION_PATTERNS/SECURITY/README.md" << 'EOL'
# Security Patterns

This directory contains security patterns for AI integrations.

## Security Considerations

### Authentication
- API key management
- Token handling
- Access control
- Role-based access

### Data Security
- Input sanitization
- Output validation
- Data encryption
- Secure storage

### Compliance
- Data privacy
- Usage policies
- Audit logging
- Compliance requirements
EOL

# Create caching patterns
cat > "$BASE_DIR/INTEGRATION_PATTERNS/CACHING/README.md" << 'EOL'
# Caching Patterns

This directory contains patterns for caching AI model responses.

## Caching Strategies

### Response Caching
- Cache keys
- TTL policies
- Invalidation
- Storage options

### Request Caching
- Request deduplication
- Request batching
- Cache warming
- Cache invalidation

### Performance
- Cache hit rates
- Response times
- Resource usage
- Monitoring
EOL 
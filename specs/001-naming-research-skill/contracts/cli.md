# CLI Contract: naming-research skill

**Feature**: 001-naming-research-skill
**Date**: 2026-04-02

## Interface

### Invocation

```bash
naming-research [query] [options]
```

### Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `query` | Yes | Domain or product category (e.g., "compliance software", "AI assistants") |

### Options

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--names` | `-n` | Comma-separated name candidates to evaluate | None (research mode) |
| `--format` | `-f` | Output format: `markdown` or `json` | `markdown` |
| `--dimensions` | `-d` | Comma-separated dimensions to include | All 6 |
| `--help` | `-h` | Show help | - |
| `--version` | `-v` | Show version | - |

### Examples

```bash
# Basic research
naming-research "compliance software"

# Evaluate specific names
naming-research "compliance software" --names "Attest,Certify,Vouch"

# JSON output for piping
naming-research "compliance software" --names "Attest,Certify" --format json

# Specific dimensions only
naming-research "compliance software" --dimensions "trademark,linguistic"

# Help
naming-research --help
```

## Output

### Success (stdout)

**Markdown format (default)**:
```markdown
# Naming Research Report

**Domain**: compliance software
**Generated**: 2026-04-02

## 1. Naming Archetypes
[Competitive analysis content]

## 2. Trademark & Domain Clearance
[Availability table]

## 3. Linguistic & Cultural Analysis
[Pronunciation, spelling, international]

## 4. Brand Architecture Fit
[Product evolution fit]

## 5. Emotional Associations
[3 words per name]

## 6. Naming Categories
[Scored comparison table]

## Finalists
[Top 3-5 with confidence level]
```

**JSON format**:
```json
{
  "domain": "compliance software",
  "generated": "2026-04-02",
  "dimensions": {
    "archetypes": { "content": "...", "score": null },
    "trademark": { "content": "...", "candidates": [...] },
    "linguistic": { "content": "...", "candidates": [...] },
    "brandFit": { "content": "...", "candidates": [...] },
    "emotional": { "content": "...", "candidates": [...] },
    "categories": { "content": "...", "table": [...] }
  },
  "finalists": [
    {
      "name": "Attest",
      "aggregateScore": 3.95,
      "confidence": "medium",
      "rationale": "..."
    }
  ]
}
```

### Errors (stderr)

| Exit Code | Meaning | Example |
|-----------|---------|---------|
| 0 | Success | Report generated |
| 1 | Error | Invalid input, research failed |
| 2 | No results | No competitive data found |

**Error format**:
```
ERROR: Invalid input
Usage: naming-research [query] [--names <names>] [--format <format>]
```

## Exit Codes

| Code | Description |
|------|-------------|
| 0 | Success - report generated |
| 1 | Error - invalid arguments or research failure |
| 2 | No results - insufficient competitive data |

## Contract Adherence

- Output MUST be valid markdown (when format=markdown)
- Output MUST be valid JSON (when format=json)
- All 6 dimensions included unless `--dimensions` specified
- Progress logged to stderr (not stdout) to avoid corrupting output
- Exit code 0 for success, non-zero for failure

---
*CLI contract completed: 2026-04-02*

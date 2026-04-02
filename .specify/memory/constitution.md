<!--
Sync Impact Report
==================
Version Change: N/A → 1.0.0 (Initial constitution creation)

New Principles (6 total):
- I. Skills Library Architecture (NEW)
- II. Markdown-First Skills (NEW)
- III. Testability Requirement (NEW)
- IV. CLI-First Design (NEW)
- V. Research Before Codification (NEW)
- VI. Simplicity & Progressive Disclosure (NEW)

Added Sections:
- Skill Quality Gates
- Skill Structure Requirements
- Spellbook Integration

Removed Sections:
- MVP Architecture (not applicable to skill library)
- User Story First (not applicable - skills have different requirements)

Templates Status:
- .specify/templates/plan-template.md ✅ ALIGNED (Constitution Check gate)
- .specify/templates/spec-template.md ✅ ALIGNED
- .specify/templates/tasks-template.md ✅ ALIGNED
- .specify/templates/checklist-template.md ✅ ALIGNED
- .specify/templates/agent-file-template.md ✅ ALIGNED
- .pi/prompts/speckit.* ✅ ALREADY CONSISTENT
- agent.md ✅ CREATED

Follow-up TODOs:
- None

Deferred Items:
- None
-->

# Competitive Research Constitution

## What This Project Is

**Competitive Research** is a skills library providing AI agents with competitive market and competitor analysis primitives. Skills follow the spellbook (phrazzld/spellbook) architecture — portable, markdown-first modules that encode judgment, not procedures.

**Target Users:** AI coding agents (Claude, Pi, Codex, Gemini) that need systematic competitive intelligence capabilities.

## Core Principles

### I. Skills Library Architecture

This project produces skills, not applications. Skills are portable primitives that other projects consume via spellbook's focus system. Every deliverable MUST be:
- Packaged as a skill module (SKILL.md + references/)
- Self-contained with clear trigger conditions
- Importable by any spellbook-compatible harness

**Rationale**: Skills library architecture enables portability across agent harnesses and projects.

### II. Markdown-First Skills

Every skill is a markdown module (SKILL.md + optional references/). SKILL.md is the source of truth — agents read it, not a README or comments. Skills MUST have:
- **Frontmatter**: name, description (≤1024 chars), triggers, argument-hint
- **Clear trigger conditions**: when to invoke, when NOT to invoke
- **Explicit gotchas section**: what goes wrong, edge cases
- **≤ 500 lines**: deep content goes in references/

```markdown
---
name: competitor-scan
description: |
  Systematic competitor discovery and analysis for market research.
  Triggers: "competitor landscape", "market analysis", "scan competitors",
  "who are my competitors", "competitor research"
argument-hint: "[query]"
---

# Competitor Scan

## When to Use
...
## When NOT to Use
...
## Gotchas
...
```

**Rationale**: Markdown-first enables progressive disclosure — budget cost in description, depth in references/.

### III. Testability Requirement (NON-NEGOTIABLE)

Skills MUST be tested before distribution. Test harness creates a skill, invokes it, and verifies output. Tests MUST:
- Exercise the skill's trigger conditions
- Verify expected outputs against known inputs
- Cover gotchas (common failure modes)

**Rationale**: Skills used by agents must work reliably. Untested skills erode trust.

### IV. CLI-First Design

Every skill capability MUST be accessible via CLI with text I/O protocol:
- **stdin/args** → input
- **stdout** → structured output (JSON by default, `--human` for readable)
- **stderr** → errors/logs

```bash
# Structured output (default - pipelining friendly)
competitor-scan "AI coding assistants" --format json

# Human-readable output
competitor-scan "AI coding assistants" --human

# Pipelines welcome
competitor-scan "AI assistants" | jq '.competitors[].url'
```

**Rationale**: CLI-first ensures skills work in pipelines, scripts, and agent tool use.

### V. Research Before Codification

Never assert model knowledge as fact in skills. Before encoding a pattern:
- Use `/research` to gather multi-source validation
- Verify claims against live data (APIs, web, benchmarks)
- Document sources in references/

**Rationale**: Skills encode permanent judgment. Bad patterns codified are hard to remove.

### VI. Simplicity & Progressive Disclosure

Prefer simpler skill implementations. Encode judgment, not procedures — if the agent already knows how, delete the skill. Use progressive disclosure:
- **Description** (~1 sentence): Budget cost, triggers
- **SKILL.md body**: Core judgment, gotchas
- **references/**: Deep content, examples (zero budget cost until loaded)

**Rationale**: Simplicity prevents skill bloat. Progressive disclosure manages token budget.

## Skill Quality Gates

A skill MUST pass these gates before distribution:

| Gate | Requirement |
|------|-------------|
| Trigger | Description includes explicit trigger phrases |
| Size | SKILL.md ≤ 500 lines |
| Judgment | Encodes judgment, not procedures |
| Gotchas | Explicit pitfalls section present |
| Tests | Passes eval baseline comparison |

**Rationale**: Quality gates prevent skill bloat and ensure distributable quality.

## Skill Structure Requirements

```
skills/{name}/
├── SKILL.md              # Required. Frontmatter + instructions + gotchas
└── references/
    ├── api.md            # CLI interface (on-demand)
    ├── examples.md       # Usage examples (on-demand)
    └── gotchas.md        # Extended pitfalls (on-demand)
```

**Rationale**: Consistent structure enables predictable loading by agent harnesses.

## Spellbook Integration

This project IS a spellbook collection. Skills are distributable via spellbook's focus system:

```yaml
# In consuming project .spellbook.yaml
skills:
  - source: github.com/competitive-research/skills/competitor-scan
  - source: github.com/competitive-research/skills/market-intelligence
```

**Rationale**: Spellbook integration enables agents to pull these skills into any project.

## Governance

This constitution governs skill development in this repository. Amendments require:

1. **Documentation**: Proposed change with rationale and impact
2. **Approval**: Explicit sign-off
3. **Version Increment**: MAJOR for breaking changes, MINOR for additions, PATCH for clarifications

**Version**: 1.0.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-02

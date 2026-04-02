# agent.md — Competitive Research

## What This Repo Is

**Competitive Research** is a skills library for AI coding agents. It provides competitive market and competitor analysis primitives following the [spellbook](https://github.com/phrazzld/spellbook) patterns. This is NOT an application — it's a portable skill collection that agents consume via spellbook's focus system.

**This Repo Is NOT:**
- A web application or CLI tool
- A monolithic analysis platform
- A documentation site

**This Repo IS:**
- A skill library (markdown modules agents read)
- Spellbook-compatible (importable via .spellbook.yaml)
- Judgment-encoded primitives (not procedures)

## Project Type

```
Skills Library — Portable AI Agent Primitives
├── skills/           # Skill modules (SKILL.md + references/)
├── tests/            # Skill evaluation tests (harness eval)
├── src/              # TypeScript types (shared, minimal)
└── package.json      # Minimal — just for testing
```

## Domain Glossary

| Term | Definition |
|------|-----------|
| Skill | Markdown-first module (SKILL.md) encoding domain judgment |
| Trigger | Phrase that activates a skill (e.g., "competitor landscape") |
| Skill Library | Collection of related skills for distribution |
| Focus | Spellbook mechanism for pulling skills from external sources |
| Judgment | Why-decision encoded in skill, not how-procedure |

## Principles

### 1. Skills, Not Applications

Every deliverable is a skill module, not an application. Skills:
- Are markdown files agents read and execute
- Have clear trigger conditions
- Encode judgment, not procedures

```markdown
---
name: competitor-scan
description: |
  Systematic competitor discovery for market research.
  Triggers: "competitor landscape", "market analysis", "scan competitors"
---

# Competitor Scan

## When to Use
- User asks about competitors
- Market research needed

## When NOT to Use
- Specific technical questions (use tech-compare)
- Performance benchmarking (use benchmark)

## Gotchas
- API rate limits apply
- Data may be stale
```

### 2. Markdown-First

SKILL.md is the source of truth. Agents read it directly — not a README, not code comments. Structure:

```
skills/{name}/
├── SKILL.md              # Required. ≤500 lines. Triggers + judgment.
└── references/
    ├── api.md            # CLI interface (on-demand)
    ├── examples.md       # Usage examples (on-demand)
    └── gotchas.md        # Extended pitfalls (on-demand)
```

### 3. CLI-First Interface

Every skill capability MUST have a CLI wrapper with text I/O:

```bash
# Structured output (default — pipelining friendly)
competitor-scan "AI coding assistants" --format json

# Human-readable output
competitor-scan "AI coding assistants" --human

# Pipelines
competitor-scan "AI assistants" | jq '.competitors[].url'
```

### 4. Testability

Skills are tested via spellbook's harness eval:
- Create skill
- Invoke skill
- Verify output matches expected behavior

### 5. Research Before Codification

Never encode model knowledge as fact. Before creating a skill:
- `/research` to gather multi-source validation
- Verify claims against live data
- Document sources in references/

### 6. Simplicity

Encode judgment, not procedures. If the agent already knows how, don't create a skill. Keep SKILL.md ≤ 500 lines.

## Available Skills

| Skill | Triggers | What It Does |
|-------|----------|--------------|
| `competitor-scan` | "competitor landscape", "market analysis", "scan competitors" | Discover and analyze competitors |
| `competitor-profile` | "competitor profile", "analyze X", "who is X" | Deep dive on specific competitor |
| `market-intelligence` | "market trends", "industry analysis", "market size" | Market data and trends |
| `feature-comparison` | "compare X vs Y", "feature matrix", "X vs Y" | Feature-by-feature comparison |

## Creating New Skills

```bash
# 1. Create structure
mkdir -p skills/new-skill/references

# 2. Write SKILL.md
#    - Frontmatter (name, description, triggers)
#    - ≤500 lines
#    - Gotchas section

# 3. Write test first (harness eval)

# 4. Implement if needed (minimal TypeScript)

# 5. Add CLI wrapper
```

## Skill Quality Gates

| Gate | Requirement |
|------|-------------|
| Trigger | Description includes trigger phrases |
| Size | SKILL.md ≤ 500 lines |
| Judgment | Encodes judgment, not procedures |
| Gotchas | Explicit pitfalls section |
| Eval | Passes harness eval baseline |

## Integration with Spellbook

Add to any spellbook project:

```yaml
# .spellbook.yaml
skills:
  - source: github.com/competitive-research/skills/competitor-scan
  - source: github.com/competitive-research/skills/market-intelligence
```

## Commands

```bash
pnpm install          # Install deps (minimal)
pnpm test             # Run skill eval tests
pnpm lint             # Validate skill structure
pnpm harness:eval     # Spellbook harness eval
```

## Gotchas

- **Not an app**: Don't build UIs, dashboards, or web services
- **Not a procedure**: Don't document steps — encode judgment
- **API limits**: Cache responses, use tokens, warn on stale data
- **Fair analysis**: Present strengths AND weaknesses
- **JSON default**: CLI always supports `--format json` for pipelines

## Reference

- Spellbook: https://github.com/phrazzld/spellbook
- Skill patterns: See spellbook/skills/* for exemplars
- Harness: https://github.com/phrazzld/spellbook/tree/master/skills/harness

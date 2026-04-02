# Implementation Plan: Naming Research Skill

**Branch**: `001-naming-research-skill` | **Date**: 2026-04-02 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-naming-research-skill/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Create a naming research skill (markdown module) that AI agents invoke for competitive naming analysis. The skill produces structured markdown output covering 6 research dimensions: naming archetypes, trademark/domain clearance, linguistic/cultural analysis, brand architecture fit, emotional/associative testing, and naming categories. Primary output is markdown (not JSON or interactive UI).

## Technical Context

**Language/Version**: TypeScript (for CLI wrapper only; skill is markdown)  
**Primary Dependencies**: 
- spellbook conventions (phrazzld/spellbook)
- markdown parsing (for skill structure validation)
- web search capability (for competitive research)
**Storage**: N/A (skills are markdown files; no database)  
**Testing**: Vitest + spellbook harness eval  
**Target Platform**: AI agent harnesses (Pi, Claude, Codex, Gemini)  
**Project Type**: Skills Library (spellbook-compatible)  
**Performance Goals**: Research output within 60 seconds (web search latency)  
**Constraints**: SKILL.md ≤ 500 lines; must follow spellbook frontmatter format  
**Scale/Scope**: Single skill in v1; expandable to naming-related skills  

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Gate 1: Skills Library Architecture ✓
- [x] Skill packaged as SKILL.md + references/
- [x] Self-contained with trigger conditions
- [x] Importable by spellbook harness

### Gate 2: Markdown-First Skills ✓
- [x] SKILL.md is source of truth (not README or code)
- [x] Frontmatter: name, description (≤1024 chars), triggers, argument-hint
- [x] Clear trigger conditions present
- [x] Explicit gotchas section planned
- [x] Content < 500 lines (deep content in references/)

### Gate 3: Testability ✓
- [x] Skill has defined trigger conditions
- [x] Output format is verifiable (markdown structure)
- [x] Tests planned via spellbook harness eval

### Gate 4: CLI-First Design ✓
- [x] Text I/O protocol: stdin/args → stdout markdown
- [x] CLI wrapper planned for skill invocation
- [x] Pipeline-friendly output (markdown to stdout)

### Gate 5: Research Before Codification ✓
- [x] Web research for competitive naming patterns
- [x] Validate naming archetype classifications
- [x] Verify scoring rubrics against real examples

### Gate 6: Simplicity & Progressive Disclosure ✓
- [x] Core judgment in SKILL.md body
- [x] Deep content in references/
- [x] No over-engineering (single skill, not a platform)

**Gate Status**: PASS - All principles satisfied

## Project Structure

### Documentation (this feature)

```text
specs/001-naming-research-skill/
├── plan.md              # This file
├── research.md          # Phase 0: Competitive naming research
├── data-model.md        # Phase 1: Skill structure & entities
├── quickstart.md        # Phase 1: How to invoke the skill
├── contracts/           # Phase 1: CLI interface definition
└── checklists/          # Quality validation
    └── requirements.md
```

### Source Code (repository root)

```text
competitive-research/
├── skills/                          # Spellbook skills directory
│   └── naming-research/
│       ├── SKILL.md                 # Core skill (markdown)
│       └── references/
│           ├── archetypes.md        # Naming archetypes deep dive
│           ├── trademark.md         # Clearance methodology
│           ├── linguistic.md         # Language/cultural analysis
│           ├── brand-fit.md         # Brand architecture guidance
│           ├── emotional.md          # Association testing
│           └── examples.md           # Usage examples
├── src/
│   └── cli/
│       └── naming-research.ts       # CLI wrapper (minimal)
├── tests/
│   ├── harness/
│   │   └── naming-research.eval.ts  # Spellbook harness eval
│   └── unit/
│       └── parsing.test.ts          # Output format validation
└── package.json
```

**Structure Decision**: Skills library with single skill in v1. CLI wrapper is minimal TypeScript. Tests use spellbook harness eval pattern.

## Phase 0: Research

### Research Tasks

1. **Spellbook Skill Conventions**
   - Decision: Follow spellbook SKILL.md format with frontmatter
   - Rationale: Ensures compatibility with spellbook focus system
   - Alternatives: Custom format (rejected - reduces portability)

2. **Naming Research Dimensions**
   - Decision: Use 6 dimensions from spec (archetypes, trademark, linguistic, brand fit, emotional, categories)
   - Rationale: Covers comprehensive naming evaluation
   - Alternatives: Fewer dimensions (rejected - incomplete analysis)

3. **Output Format**
   - Decision: Markdown output (stdout) with structured sections
   - Rationale: Per constitution - markdown-first, pipeline-friendly
   - Alternatives: JSON output (rejected - constitution mandates markdown)

4. **Scoring Rubric**
   - Decision: 1-5 scale per dimension, aggregate score
   - Rationale: Comparable across candidates, easy to compute
   - Alternatives: Pass/fail only (rejected - no nuance)

### Output: research.md

[See generated research.md file]

## Phase 1: Design

### Data Model (data-model.md)

**SkillModule**
- name: string (unique identifier)
- description: string (≤1024 chars)
- triggers: string[] (activation phrases)
- argument-hint: string
- sections: SkillSection[]

**ResearchDimension**
- id: enum (archetypes | trademark | linguistic | brandFit | emotional | categories)
- name: string
- criteria: string[]
- scoringRubric: RubricItem[]

**NameCandidate**
- name: string
- category: NameCategory (literal | evocative | abstract | compound | short)
- scores: Map<ResearchDimension, number> (1-5 each)
- availability: AvailabilityStatus
- associations: string[] (3 words)
- confidence: ConfidenceLevel (high | medium | low)

**AvailabilityStatus**
- domains: Map<TLD, AvailableStatus>
- social: Map<Platform, HandleStatus>

### CLI Contract (contracts/cli.md)

```markdown
# CLI Interface: naming-research skill

## Invocation
naming-research [query] [options]

## Arguments
- query: Domain or product category to research (e.g., "compliance software", "AI assistants")

## Options
- --names <names>: Comma-separated name candidates to evaluate
- --format <json|markdown>: Output format (default: markdown)
- --dimensions <dims>: Comma-separated dimensions to include (default: all)

## Output
stdout: Markdown report covering all 6 dimensions
stderr: Progress logs, errors

## Exit Codes
- 0: Success
- 1: Error (invalid input, research failed)
- 2: No results found
```

### Quickstart (quickstart.md)

```markdown
# Naming Research Skill - Quickstart

## Installation
Skill is invoked via spellbook focus or directly from this repo.

## Basic Usage
```bash
naming-research "compliance software"
```

## Evaluate Specific Names
```bash
naming-research "compliance software" --names "Attest,Certify,Vouch"
```

## In an Agent
The skill activates when agent mentions trigger phrases:
- "naming research"
- "brand name analysis"
- "company naming"
- "competitor naming"

## Output
Markdown report with:
1. Naming Archetypes (competitive analysis)
2. Trademark & Domain (availability)
3. Linguistic & Cultural (pronunciation, spelling)
4. Brand Architecture (product evolution fit)
5. Emotional Associations (3 words per name)
6. Naming Categories (scored comparison table)
```

## Re-evaluation: Constitution Check (Post-Design)

All gates re-verified ✓ - design aligns with constitution.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | Initial skill - no violations | N/A |

## Open Issues

None - all [NEEDS CLARIFICATION] resolved in research.md

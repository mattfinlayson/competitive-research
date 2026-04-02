# Phase 0 Research: Naming Research Skill

**Feature**: 001-naming-research-skill
**Date**: 2026-04-02
**Status**: Complete

## Research Questions

### 1. Spellbook Skill Conventions

**Question**: What spellbook conventions must this skill follow?

**Decision**: Follow spellbook SKILL.md format with YAML frontmatter

**Rationale**: 
- Ensures compatibility with spellbook focus system
- Enables agents to discover and invoke via standard patterns
- Consistent with project constitution (Principle II: Markdown-First Skills)

**Frontmatter Schema**:
```yaml
---
name: naming-research
description: |
  Systematic naming research for product/company naming.
  Triggers: "naming research", "brand name", "company name", "competitor naming"
argument-hint: "[domain] or [names to evaluate]"
---
```

**Alternatives Considered**:
- Custom format (rejected - reduces portability)
- JSON frontmatter (rejected - markdown convention in spellbook)

---

### 2. Naming Research Dimensions

**Question**: What dimensions should the skill cover?

**Decision**: 6 dimensions from spec:
1. Naming Archetypes (descriptive, evocative, abstract, acronym-based, compound)
2. Trademark & Domain Clearance (.com, .io, .ly, .co, .app, social)
3. Linguistic & Cultural Analysis (pronunciation, spelling, international)
4. Brand Architecture Fit (product evolution phases)
5. Emotional & Associative Testing (3 words per name)
6. Naming Categories (literal, evocative, abstract, compound, short)

**Rationale**:
- Covers comprehensive naming evaluation
- Aligns with user story acceptance criteria
- Industry-standard dimensions for naming research

**Alternatives Considered**:
- 3 dimensions (rejected - incomplete analysis)
- 10+ dimensions (rejected - scope creep, constitution Principle VI)

---

### 3. Output Format

**Question**: Should output be markdown or JSON?

**Decision**: Markdown (stdout) with structured sections

**Rationale**:
- Constitution mandates: "markdown-first skills"
- Pipeline-friendly (stdout)
- Human-readable by default
- Can be piped to jq/grep for structured parsing if needed

**Output Structure**:
```markdown
# Naming Research Report

## Domain: [query]

## 1. Naming Archetypes
[Analysis of competitive naming patterns]

## 2. Trademark & Domain Clearance
[Availability status table]

## 3. Linguistic & Cultural Analysis
[Pronunciation, spelling, international considerations]

## 4. Brand Architecture Fit
[Phase evolution analysis]

## 5. Emotional Associations
[3 words per name]

## 6. Naming Categories
[Scored comparison table]

## Finalists
[Top 3-5 with confidence level]
```

**Alternatives Considered**:
- JSON only (rejected - constitution mandates markdown)
- Interactive UI (rejected - not a CLI skill)

---

### 4. Scoring Rubric

**Question**: How should candidates be scored?

**Decision**: 1-5 scale per dimension, weighted aggregate

**Rubric**:
| Score | Meaning |
|-------|---------|
| 1 | Major concerns, likely to fail |
| 2 | Notable concerns |
| 3 | Acceptable, minor concerns |
| 4 | Good, minor optimizations possible |
| 5 | Excellent, no concerns |

**Weights** (for aggregate):
- Trademark/Domain: 30% (availability is blocker)
- Linguistic: 20% (pronunciation/spelling critical)
- Brand Fit: 20% (future-proofing)
- Emotional: 15% (market perception)
- Archetypes: 15% (competitive positioning)

**Rationale**:
- Comparable across candidates
- Easy to compute
- Clear thresholds for finalists

**Alternatives Considered**:
- Pass/Fail only (rejected - no nuance)
- 1-10 scale (rejected - over-precision)

---

### 5. Trigger Phrases

**Question**: What phrases should activate the skill?

**Decision**:
- Primary: "naming research", "naming analysis"
- Secondary: "brand name", "company name", "product naming"
- Tertiary: "competitor naming", "naming patterns"
- Evaluation: "evaluate names", "score names", "compare names"

**Rationale**:
- Matches spec FR-012
- Covers both research and evaluation use cases
- Aligns with agent natural language patterns

---

### 6. Tool Dependencies

**Question**: What tools/APIs does the skill need?

**Decision**: Web search only (no external API dependencies)

**Rationale**:
- Skill is judgment-encoding, not data-fetching
- Agents have their own web search capabilities
- Availability checks can use external APIs (optional enhancement)
- Constitution Principle V: Research Before Codification - use /research

**Note**: Domain/social availability checks are indicative only (per spec assumptions). Actual registration requires external tools.

---

## Summary of Decisions

| Question | Decision | Rationale |
|----------|----------|-----------|
| Format | SKILL.md + frontmatter | Spellbook compatibility |
| Dimensions | 6 (from spec) | Comprehensive coverage |
| Output | Markdown (stdout) | Constitution mandate |
| Scoring | 1-5 rubric, weighted | Comparable, clear |
| Triggers | Named set (primary/secondary) | Agent discoverability |
| Dependencies | Web search only | Portable, no API keys |

## Next Steps

All [NEEDS CLARIFICATION] resolved. Proceed to Phase 1: Design.

---
*Research completed: 2026-04-02*

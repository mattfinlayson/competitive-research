# Naming Research Skill - Quickstart

AI-powered naming research for product and company naming decisions.

## What This Skill Does

Systematic competitive naming analysis covering:
1. **Naming Archetypes** - Descriptive, evocative, abstract, compound, short
2. **Trademark & Domain** - .com, .io, .ly, .co, .app availability
3. **Linguistic & Cultural** - Pronunciation, spelling, international fit
4. **Brand Architecture** - Phase evolution fit (v1 → v2 → v3)
5. **Emotional Associations** - 3 words each name evokes
6. **Naming Categories** - Scored comparison table

## Installation

### Option 1: Via Spellbook Focus

Add to your project's `.spellbook.yaml`:
```yaml
skills:
  - source: github.com/competitive-research/skills/naming-research
```

### Option 2: Direct Clone

```bash
git clone https://github.com/competitive-research/competitive-research.git
# Skills are in skills/naming-research/
```

## Basic Usage

### CLI

```bash
# Research a domain
naming-research "compliance software"

# Evaluate specific names
naming-research "compliance software" --names "Attest,Certify,Vouch"

# JSON output for scripts
naming-research "compliance software" --names "Attest" --format json
```

### In an AI Agent

Activate by mentioning:
- "naming research"
- "brand name analysis"
- "company naming"
- "product naming"
- "evaluate these names"
- "competitor naming patterns"

## Output

The skill produces a markdown report:

```markdown
# Naming Research Report

## Domain: compliance software

## 1. Naming Archetypes
- Most competitors use evocative names (OneTrust, Vanta, Osano)
- Descriptive names rare (ComplyDog is exception)
- Trend toward abstract/made-up names

## 2. Trademark & Domain Clearance
| Name    | .com    | .io     | .ly     | .co     | .app    |
|---------|---------|---------|---------|---------|---------|
| Attest  | taken   | taken   | ✅       | taken   | ✅       |
| Certify | taken   | taken   | taken   | taken   | ✅       |
| Vouch   | ✅       | ✅       | taken   | taken   | taken   |

## 3. Linguistic & Cultural
- Attest: Clear, 2 syllables, international friendly
- Certify: Clear, 3 syllables, slightly formal
- Vouch: Clear, 1 syllable, informal

## 4. Brand Architecture Fit
| Phase          | Attest | Certify | Vouch |
|----------------|--------|---------|-------|
| v1: GDPR       | ✅      | ✅       | ✅     |
| v2: AI Comp    | ✅      | ✅       | ⚠️     |
| v3: Attest    | ✅      | ✅       | ❌     |

## 5. Emotional Associations
- Attest: Trustworthy, Professional, Action
- Certify: Official, Formal, Reliable
- Vouch: Casual, Friendly, Direct

## 6. Naming Categories
| Category | Examples | Fit |
|----------|----------|-----|
| Evocative | Attest, Certify | ✅ Strong |
| Short | Vouch, Prove | ⚠️ Taken |

## Finalists
1. **Attest** (.ly) - Confidence: Medium
2. **Certify** (.app) - Confidence: Medium
```

## Scoring

Each name scored 1-5 on each dimension:

| Score | Meaning |
|-------|---------|
| 5 | Excellent - no concerns |
| 4 | Good - minor optimizations |
| 3 | Acceptable - notable concerns |
| 2 | Poor - significant concerns |
| 1 | Fail - likely to cause problems |

Aggregate score weighted:
- Trademark/Domain: 30%
- Linguistic: 20%
- Brand Fit: 20%
- Emotional: 15%
- Archetypes: 15%

## Tips

- **Research mode**: Just provide domain to get competitive analysis
- **Evaluation mode**: Provide names to get scored comparison
- **Use AI research**: Let the agent use `/research` to gather competitive data first
- **Iterate**: Refine candidates based on finalists section

## Troubleshooting

**No competitive data**: Try a broader domain ("SaaS" vs "compliance")
**Too many results**: Narrow the names list
**Availability unclear**: Checks are indicative - verify with actual registration

---
*Quickstart completed: 2026-04-02*

---
name: naming-research
description: |
  Systematic naming research for product/company naming decisions.
  Covers 6 dimensions: archetypes, trademark, linguistic, brand fit,
  emotional, and naming categories.
  Triggers: "naming research", "brand name", "company name",
  "product naming", "competitor naming", "evaluate names",
  "naming patterns", "naming analysis"
argument-hint: "[domain] or [--names candidates]"
---

# Naming Research Skill

Comprehensive naming research for product and company naming decisions. AI agents use this skill to analyze naming patterns, evaluate candidates, and generate recommendations.

## When to Use

- User asks about naming a new product or company
- User wants to evaluate existing name candidates
- User needs competitive naming analysis for a domain
- User asks about brand name decisions
- User wants naming recommendations

## When NOT to Use

- User wants technical stack analysis (use tech-compare skill)
- User needs market size data (use market-intelligence skill)
- User asks about existing brand logos or visual identity
- User wants domain registration (use external tools)

## Core Workflow

### 1. Research Mode (Domain Query)

When invoked with a domain query:

```bash
naming-research "compliance software"
```

The skill produces a markdown report covering:

1. **Naming Archetypes** - Analyze competitive naming patterns in the domain
2. **Trademark & Domain** - Availability status across TLDs
3. **Linguistic & Cultural** - Pronunciation, spelling, international fit
4. **Brand Architecture** - Fit for product evolution phases
5. **Emotional Associations** - Words the name evokes
6. **Naming Categories** - Comparison table across categories

### 2. Evaluation Mode (Name Candidates)

When invoked with name candidates:

```bash
naming-research "compliance software" --names "Attest,Certify,Vouch"
```

The skill produces a scored comparison with:
- Score per dimension (1-5 scale)
- Aggregate weighted score
- Availability summary
- Confidence level

## Scoring Rubric

| Score | Meaning |
|-------|---------|
| 5 | Excellent - no concerns |
| 4 | Good - minor optimizations possible |
| 3 | Acceptable - notable concerns but workable |
| 2 | Poor - significant concerns that may cause issues |
| 1 | Fail - likely to cause problems or unavailable |

### Dimension Weights

- Trademark/Domain: 30% (availability is a blocker)
- Linguistic: 20% (pronunciation and spelling are critical)
- Brand Fit: 20% (future-proofing matters)
- Emotional: 15% (market perception)
- Archetypes: 15% (competitive positioning)

### Confidence Level

Derived from aggregate score:
- **High**: ≥4.0
- **Medium**: 3.0-3.9
- **Low**: <3.0

## Output Format

### Research Report Structure

```markdown
# Naming Research Report

**Domain**: [query]
**Generated**: [date]

## 1. Naming Archetypes
[Analysis of naming patterns in the competitive set]

## 2. Trademark & Domain Clearance
| Name    | .com   | .io    | .ly    | .co    | .app   |
|---------|--------|--------|--------|--------|--------|
| [name]  | status | status | status | status | status |

## 3. Linguistic & Cultural Analysis
- Pronunciation clarity
- Spelling clarity
- International considerations

## 4. Brand Architecture Fit
| Phase      | Fit    |
|------------|--------|
| v1: [phase]| ✅/⚠️/❌ |

## 5. Emotional Associations
| Name | Associations |
|------|--------------|
| [name] | word1, word2, word3 |

## 6. Naming Categories
| Category    | Examples | Assessment |
|-------------|----------|------------|
| Literal     | SubProcess | pros/cons |
| Evocative   | Attest, Certify | pros/cons |

## Finalists
1. **[Name]** ([TLD]) - Confidence: [level]
   - Rationale: [why this candidate]

```

## Reference Files

Detailed guidance for each dimension is in `references/`:
- `archetypes.md` - Naming archetype patterns and analysis
- `trademark.md` - Trademark clearance methodology
- `linguistic.md` - Linguistic and cultural considerations
- `brand-fit.md` - Brand architecture guidance
- `emotional.md` - Emotional association testing
- `examples.md` - Usage examples

## Gotchas

- **Availability is indicative**: Domain/social checks use web search, not actual registration APIs. Verify availability with actual tools before committing.
- **Emotional scoring is subjective**: Rubric-based but acknowledges subjectivity. Adjust for specific market context.
- **Niche domains**: If no competitive data found, broaden the search scope (e.g., "SaaS" vs "compliance software").
- **Short names**: Names <4 characters often have TLD conflicts. Flag these explicitly.
- **International**: Always check major markets (EU, UK) for unintended translations.
- **Phonetic spelling**: If a name can't be spelled from hearing, add pronunciation guidance.

## Tips

1. **Start broad**: Use domain query to understand competitive landscape first
2. **Iterate candidates**: Use evaluation mode to refine candidates
3. **Consider all phases**: Ensure name fits product evolution beyond v1
4. **Verify availability**: Actual registration check is required before final selection
5. **Get feedback**: Test emotional associations with 3-5 people outside the project

---
*This skill follows spellbook conventions. See project README for installation.*

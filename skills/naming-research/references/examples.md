# Naming Research Skill - Usage Examples

Complete examples for invoking and interpreting the naming research skill.

## Example 1: Basic Domain Research

**Scenario**: User wants to understand competitive naming in the compliance software space.

**Invocation**:
```bash
naming-research "compliance software"
```

**Output**:
```markdown
# Naming Research Report

**Domain**: compliance software
**Generated**: 2026-04-02

## 1. Naming Archetypes
- Most competitors use evocative names (OneTrust, Vanta, Osano)
- Descriptive names rare (ComplyDog is exception)
- Trend toward abstract/made-up names

## 2. Trademark & Domain Clearance
| Name | .com | .io | .ly | .co | .app |
|------|------|-----|-----|-----|------|
| *Research domain for specific candidates* | — | — | — | — | — |

## 3. Linguistic & Cultural Analysis
Key considerations:
- Pronunciation: Clear syllables, obvious pronunciation
- Spelling: Can be spelled after hearing once
- International: Check EU, UK markets for unintended meanings
- Length: 2-3 syllables ideal (under 10 characters)

## 4. Brand Architecture Fit
| Phase | Consideration |
|-------|---------------|
| v1 | Core product positioning |
| v2 | Feature expansion capability |
| v3 | Platform/ecosystem potential |

## 5. Emotional Associations
*Provide name candidates to generate associations*

## 6. Naming Categories
| Category | Characteristics | Fit |
|----------|----------------|-----|
| Literal | Descriptive, clear, SEO-friendly | Context-dependent |
| Evocative | Action-oriented, trust connotations | Good for compliance |
| Abstract | Made-up, ownable | Requires brand-building |
| Compound | Combined words, modern feel | Technical products |
| Short | Memorable, punchy | Often taken |

## Next Steps
1. Research competitive naming patterns for your domain
2. Generate candidate names based on archetype analysis
3. Evaluate candidates using this framework
4. Select finalists based on aggregate scores
```

**Interpretation**: This output shows the competitive landscape. The agent should now generate candidate names and evaluate them.

---

## Example 2: Evaluate Specific Names

**Scenario**: User has three candidates and wants scored comparison.

**Invocation**:
```bash
naming-research "compliance software" --names "Attest,Certify,Vouch"
```

**Output**:
```markdown
# Naming Research Report

**Domain**: compliance software
**Generated**: 2026-04-02

## 1. Naming Archetypes
- Attest: Evocative (action-oriented, trust)
- Certify: Evocative (official, formal)
- Vouch: Evocative (personal, direct)

## 2. Trademark & Domain Clearance
| Name | .com | .io | .ly | .co | .app |
|------|------|-----|-----|-----|------|
| Attest | taken | taken | available | taken | available |
| Certify | taken | taken | taken | taken | available |
| Vouch | available | available | taken | taken | taken |

## 3. Linguistic & Cultural Analysis
- **Attest**: 2 syllables, clear pronunciation, "at-TEST"
- **Certify**: 3 syllables, clear but formal, "SER-tuh-fy"
- **Vouch**: 1 syllable, punchy, "vowch"

## 4. Brand Architecture Fit
| Phase | Attest | Certify | Vouch |
|-------|--------|---------|-------|
| v1: Core | ✅ | ✅ | ✅ |
| v2: Expansion | ✅ | ✅ | ⚠️ |
| v3: Platform | ✅ | ⚠️ | ❌ |

## 5. Emotional Associations
| Name | Associations |
|------|--------------|
| Attest | Trustworthy, Professional, Action |
| Certify | Official, Formal, Reliable |
| Vouch | Casual, Friendly, Direct |

## 6. Naming Categories
| Category | Attest | Certify | Vouch |
|----------|--------|---------|-------|
| Literal | ⚠️ | ⚠️ | ⚠️ |
| Evocative | ✅ | ✅ | ✅ |
| Abstract | ⚠️ | ⚠️ | ⚠️ |
| Compound | ⚠️ | ⚠️ | ⚠️ |
| Short | ⚠️ | ⚠️ | ✅ |

## Finalists

| Rank | Name | TLD | Score | Confidence | Key Strength |
|------|------|-----|-------|------------|---------------|
| 1 | Attest | .ly | 3.95 | Medium | Clear pronunciation, strong archetype |
| 2 | Certify | .app | 3.82 | Medium | Official connotation, professional |
| 3 | Vouch | .com | 3.71 | Medium | Memorable, short, available |

## Availability Summary
| Name | .com | .io | .ly | .co | .app | Twitter | LinkedIn | GitHub |
|------|------|-----|-----|-----|------|---------|----------|--------|
| Attest | ❌ | ❌ | ✅ | ❌ | ✅ | ? | ? | ✅ |
| Certify | ❌ | ❌ | ❌ | ❌ | ✅ | ? | ? | ? |
| Vouch | ✅ | ✅ | ❌ | ❌ | ❌ | ? | ? | ? |
```

**Interpretation**:
1. All three names are evocative (good for compliance domain)
2. Vouch has the best .com availability but limits expansion
3. Attest offers the best balance (available .ly, fits all phases)
4. Certify is formal but limited for platform positioning

---

## Example 3: JSON Output for Piping

**Scenario**: Script needs structured data for further processing.

**Invocation**:
```bash
naming-research "compliance software" --names "Attest,Certify" --format json
```

**Output**:
```json
{
  "domain": "compliance software",
  "generated": "2026-04-02",
  "dimensions": [
    "archetypes",
    "trademark",
    "linguistic",
    "brandFit",
    "emotional",
    "categories"
  ],
  "candidates": [
    {
      "name": "Attest",
      "category": "evocative",
      "scores": {
        "archetypes": 4,
        "trademark": 3,
        "linguistic": 5,
        "brandFit": 4,
        "emotional": 4,
        "categories": 4
      },
      "aggregateScore": 3.95,
      "availability": {
        ".com": "taken",
        ".io": "taken",
        ".ly": "available",
        ".co": "taken",
        ".app": "available"
      },
      "associations": ["Trustworthy", "Professional", "Action"],
      "confidence": "medium",
      "rationale": "Strong evocative name with good phase expansion."
    },
    {
      "name": "Certify",
      "category": "evocative",
      "scores": {
        "archetypes": 4,
        "trademark": 2,
        "linguistic": 4,
        "brandFit": 3,
        "emotional": 4,
        "categories": 4
      },
      "aggregateScore": 3.4,
      "availability": {
        ".com": "taken",
        ".io": "taken",
        ".ly": "taken",
        ".co": "taken",
        ".app": "available"
      },
      "associations": ["Official", "Formal", "Reliable"],
      "confidence": "medium",
      "rationale": "Formal name, limited .ly/.com availability."
    }
  ],
  "finalists": [
    {
      "name": "Attest",
      "aggregateScore": 3.95,
      "confidence": "medium",
      "rationale": "Best balance of score and availability."
    }
  ]
}
```

---

## Example 4: AI Agent Invocation

**Scenario**: Agent needs to invoke the skill via natural language trigger.

**Trigger phrases**:
- "naming research"
- "brand name analysis"
- "company naming"
- "evaluate these names: Attest, Certify"

**Agent workflow**:

1. Detect trigger phrase
2. Extract domain and/or names from conversation
3. Invoke skill with appropriate arguments
4. Present formatted output to user
5. Generate follow-up recommendations

**Sample agent response**:
```
Based on the naming research skill analysis:

## Competitive Landscape

The compliance software space is dominated by evocative names:
- OneTrust, Vanta, Osano (established players)
- Trend toward abstract/made-up names increasing

## Your Candidates

I've evaluated Attest, Certify, and Vouch:

| Name | Score | Best TLD | Confidence |
|------|-------|----------|------------|
| Attest | 3.95 | .ly | Medium |
| Certify | 3.82 | .app | Medium |
| Vouch | 3.71 | .com | Medium |

## Recommendation

**Attest** offers the best balance:
- Clear, professional meaning
- Fits all product evolution phases
- .ly and .app available
- Strong trust connotations

**Next steps**: Verify domain availability and test emotional associations with target users.
```

---

## Example 5: Specific Dimensions Only

**Scenario**: User only cares about trademark availability and linguistic clarity.

**Invocation**:
```bash
naming-research "compliance software" --names "Attest,Vouch" --dimensions "trademark,linguistic"
```

**Output**:
```markdown
# Naming Research Report

**Domain**: compliance software
**Generated**: 2026-04-02

## 2. Trademark & Domain Clearance
| Name | .com | .io | .ly | .co | .app |
|------|------|-----|-----|-----|------|
| Attest | taken | taken | available | taken | available |
| Vouch | available | available | taken | taken | taken |

## 3. Linguistic & Cultural Analysis
- **Attest**: 2 syllables, clear pronunciation (at-TEST), no international issues
- **Vouch**: 1 syllable, very clear (vowch), no international issues

**Summary**:
- Both names score 5/5 for linguistic clarity
- Vouch has best .com availability
- Attest has best modern TLD availability (.ly, .app)
```

---

## Example 6: Debugging Common Issues

**Issue: No competitive data found**

```bash
naming-research "hyper-specific-tool-v3"
```

**Output**:
```
No results found for "hyper-specific-tool-v3"

Suggestions:
- Try a broader domain (e.g., "SaaS" vs "hyper-specific-tool-v3")
- Try a related category (e.g., "compliance" vs "GDPR")
- Provide specific names to evaluate
```

**Resolution**: Use broader terms like "compliance software" or "privacy tools"

---

**Issue: All names unavailable**

```bash
naming-research "compliance software" --names "Trust,Vouch,Attest"
```

**Output**:
```
WARNING: All primary TLDs (.com, .io) taken for all candidates.

Recommendations:
1. Consider compound names: TrustBase, TrustFlow
2. Consider alternative TLDs: .ly, .app, .co
3. Consider slight variations: Attestate, Vouched
4. Consider abstract names: Cohesion, Provenly
```

---

**Issue: Mixed international results**

```bash
naming-research "compliance software" --names "Bravo,Presto"
```

**Output**:
```
⚠️ International considerations:

- "Bravo": Positive in Italian/English, neutral elsewhere
- "Presto": Fast in Italian, slang in some markets

Recommendation: Verify with native speakers for target markets.
```

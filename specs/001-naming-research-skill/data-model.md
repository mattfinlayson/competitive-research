# Data Model: Naming Research Skill

**Feature**: 001-naming-research-skill
**Date**: 2026-04-02

## Entities

### SkillModule

The root skill entity.

```typescript
interface SkillModule {
  name: string;           // Unique identifier: "naming-research"
  description: string;    // ≤1024 chars, includes triggers
  triggers: string[];     // Activation phrases
  argumentHint: string;   // Usage hint for agents
  sections: Section[];    // Content sections
}
```

### ResearchDimension

One of 6 analysis dimensions.

```typescript
type DimensionId = 
  | 'archetypes'      // Naming pattern analysis
  | 'trademark'       // IP and domain clearance
  | 'linguistic'      // Language and pronunciation
  | 'brandFit'        // Product evolution fit
  | 'emotional'       // Associations and perception
  | 'categories';     // Naming category analysis

interface ResearchDimension {
  id: DimensionId;
  name: string;
  description: string;
  criteria: string[];       // What to evaluate
  scoringRubric: RubricItem[];
}

interface RubricItem {
  score: number;            // 1-5
  description: string;      // What this score means
}
```

### NameCandidate

A proposed name to evaluate.

```typescript
type NameCategory = 
  | 'literal'      // Descriptive: SubProcess, ProcessLog
  | 'evocative'    // Action-oriented: Attest, Certify
  | 'abstract'     // Made-up: Cohesion, Trustflow
  | 'compound'     // Hybrid: TrustStack, ConsentBase
  | 'short';       // Punchy: Prove, Vouch

interface NameCandidate {
  name: string;
  category: NameCategory;
  scores: Map<DimensionId, number>;  // 1-5 per dimension
  aggregateScore: number;             // Weighted sum
  availability: AvailabilityStatus;
  associations: string[];            // Exactly 3 words
  confidence: ConfidenceLevel;
  rationale: string;                 // Why this score
}

type ConfidenceLevel = 'high' | 'medium' | 'low';
```

### AvailabilityStatus

Domain and social handle availability.

```typescript
type TLD = '.com' | '.io' | '.ly' | '.co' | '.app';
type Platform = 'twitter' | 'linkedin' | 'github';
type AvailableStatus = 'available' | 'taken' | 'unclear';

interface AvailabilityStatus {
  domains: Map<TLD, AvailableStatus>;
  social: Map<Platform, AvailableStatus>;
}
```

## Relationships

```
SkillModule
  └── sections[] → Section
        └── dimension → ResearchDimension

ResearchDimension
  └── criteria[] → Evaluation criterion

NameCandidate
  └── scores[] → (DimensionId → score)
  └── availability → AvailabilityStatus
```

## State Transitions

None - this is a stateless skill that produces reports on demand.

## Validation Rules

1. **NameCandidate.scores** must have exactly 6 entries (one per dimension)
2. **NameCandidate.associations** must have exactly 3 entries
3. **NameCandidate.aggregateScore** = weighted sum of scores
4. **ConfidenceLevel** derived from aggregateScore:
   - ≥4.0 = high
   - 3.0-3.9 = medium
   - <3.0 = low

## Example Instance

```typescript
const candidate: NameCandidate = {
  name: "Attest",
  category: "evocative",
  scores: new Map([
    ['archetypes', 4],
    ['trademark', 3],      // Domain taken
    ['linguistic', 5],     // Clear pronunciation
    ['brandFit', 4],       // Works for all phases
    ['emotional', 4],      // Trustworthy
    ['categories', 4]      // Verb, memorable
  ]),
  aggregateScore: 3.95,
  availability: {
    domains: new Map([
      ['.com', 'taken'],
      ['.io', 'taken'],
      ['.ly', 'available'],
      ['.co', 'taken'],
      ['.app', 'available']
    ]),
    social: new Map([
      ['twitter', 'unclear'],
      ['linkedin', 'unclear'],
      ['github', 'available']
    ])
  },
  associations: ["Trustworthy", "Professional", "Action-oriented"],
  confidence: "medium",
  rationale: "Strong name with some availability constraints. .ly or .app viable."
};
```

---
*Data model completed: 2026-04-02*

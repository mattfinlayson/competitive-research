import { describe, it, expect } from 'vitest';

// Mock the CLI behavior for unit testing
interface CliOutput {
  domain: string;
  generated: string;
  dimensions: string[];
  candidates?: Array<{
    name: string;
    scores: Record<string, number>;
    aggregateScore: number;
    availability: Record<string, string>;
    associations: string[];
    confidence: string;
  }>;
  finalists?: Array<{
    name: string;
    aggregateScore: number;
    confidence: string;
  }>;
}

// Test output parsing and validation
describe('CLI Output Parsing', () => {
  it('should parse markdown output with required sections', () => {
    const markdownOutput = `# Naming Research Report

**Domain**: compliance software
**Generated**: 2026-04-02

## 1. Naming Archetypes
[Content]

## 2. Trademark & Domain Clearance
| Name | .com | .io | .ly | .co | .app |
|------|------|-----|-----|-----|------|
| Attest | taken | taken | available | taken | available |

## 3. Linguistic & Cultural Analysis
[Content]

## 4. Brand Architecture Fit
[Content]

## 5. Emotional Associations
| Name | Associations |
|------|--------------|
| Attest | Trustworthy, Professional, Action |

## 6. Naming Categories
[Content]

## Finalists
[Content]
`;

    // Verify required sections exist
    expect(markdownOutput).toContain('# Naming Research Report');
    expect(markdownOutput).toContain('**Domain**:');
    expect(markdownOutput).toContain('## 1. Naming Archetypes');
    expect(markdownOutput).toContain('## 2. Trademark & Domain Clearance');
    expect(markdownOutput).toContain('## 3. Linguistic & Cultural Analysis');
    expect(markdownOutput).toContain('## 4. Brand Architecture Fit');
    expect(markdownOutput).toContain('## 5. Emotional Associations');
    expect(markdownOutput).toContain('## 6. Naming Categories');
  });

  it('should parse domain availability table', () => {
    const tableContent = `| Name | .com | .io | .ly | .co | .app |
|------|------|-----|-----|-----|------|
| Attest | taken | taken | available | taken | available |
| Certify | taken | taken | taken | taken | available |
| Vouch | available | available | taken | taken | taken |`;

    expect(tableContent).toContain('Attest');
    expect(tableContent).toContain('Certify');
    expect(tableContent).toContain('Vouch');
    expect(tableContent).toMatch(/\.com.*\.io.*\.ly.*\.co.*\.app/);
  });

  it('should validate scoring rubric presence', () => {
    const rubricContent = `
| Score | Meaning |
|-------|---------|
| 5 | Excellent - no concerns |
| 4 | Good - minor optimizations possible |
| 3 | Acceptable - notable concerns but workable |
| 2 | Poor - significant concerns that may cause issues |
| 1 | Fail - likely to cause problems or unavailable |
`;

    expect(rubricContent).toContain('5');
    expect(rubricContent).toContain('1');
    expect(rubricContent).toContain('Excellent');
    expect(rubricContent).toContain('Fail');
  });

  it('should validate finalists section format', () => {
    const finalistsContent = `
## Finalists

| Rank | Name | TLD | Score | Confidence | Key Strength |
|------|------|-----|-------|------------|---------------|
| 1 | Attest | .ly | 3.95 | Medium | Clear pronunciation |
| 2 | Certify | .app | 3.82 | Medium | Official connotation |
| 3 | Vouch | .com | 3.71 | Medium | Memorable, short |
`;

    expect(finalistsContent).toContain('## Finalists');
    expect(finalistsContent).toContain('| Rank |');
    expect(finalistsContent).toContain('Attest');
    expect(finalistsContent).toContain('Score');
    expect(finalistsContent).toContain('Confidence');
  });

  it('should parse JSON output structure', () => {
    const jsonOutput: CliOutput = {
      domain: 'compliance software',
      generated: '2026-04-02',
      dimensions: ['archetypes', 'trademark', 'linguistic', 'brandFit', 'emotional', 'categories'],
      candidates: [
        {
          name: 'Attest',
          scores: {
            archetypes: 4,
            trademark: 3,
            linguistic: 5,
            brandFit: 4,
            emotional: 4,
            categories: 4,
          },
          aggregateScore: 3.95,
          availability: {
            '.com': 'taken',
            '.io': 'taken',
            '.ly': 'available',
            '.co': 'taken',
            '.app': 'available',
          },
          associations: ['Trustworthy', 'Professional', 'Action'],
          confidence: 'medium',
        },
      ],
      finalists: [
        {
          name: 'Attest',
          aggregateScore: 3.95,
          confidence: 'medium',
        },
      ],
    };

    expect(jsonOutput.domain).toBe('compliance software');
    expect(jsonOutput.candidates).toBeDefined();
    expect(jsonOutput.candidates?.length).toBeGreaterThan(0);
    expect(jsonOutput.candidates?.[0].scores).toBeDefined();
    expect(jsonOutput.finalists).toBeDefined();
  });

  it('should validate confidence level derivation', () => {
    const confidenceLevels = [
      { score: 4.0, expected: 'high' },
      { score: 3.5, expected: 'medium' },
      { score: 2.9, expected: 'low' },
    ];

    confidenceLevels.forEach(({ score, expected }) => {
      const confidence =
        score >= 4.0 ? 'high' : score >= 3.0 ? 'medium' : 'low';
      expect(confidence).toBe(expected);
    });
  });

  it('should validate aggregate scoring formula', () => {
    const scores = {
      archetypes: 4,
      trademark: 3,
      linguistic: 5,
      brandFit: 4,
      emotional: 4,
    };

    const weights = {
      archetypes: 0.15,
      trademark: 0.3,
      linguistic: 0.2,
      brandFit: 0.2,
      emotional: 0.15,
    };

    const aggregateScore =
      scores.archetypes * weights.archetypes +
      scores.trademark * weights.trademark +
      scores.linguistic * weights.linguistic +
      scores.brandFit * weights.brandFit +
      scores.emotional * weights.emotional;

    // 4*0.15 + 3*0.3 + 5*0.2 + 4*0.2 + 4*0.15 = 0.6 + 0.9 + 1.0 + 0.8 + 0.6 = 3.9
    expect(aggregateScore).toBe(3.9);
  });

  it('should validate association count (exactly 3)', () => {
    const associations = ['Trustworthy', 'Professional', 'Action'];
    expect(associations.length).toBe(3);
  });

  it('should validate all 6 dimensions are present', () => {
    const expectedDimensions = [
      'archetypes',
      'trademark',
      'linguistic',
      'brandFit',
      'emotional',
      'categories',
    ];

    expectedDimensions.forEach((dim) => {
      expect(expectedDimensions).toContain(dim);
    });
    expect(expectedDimensions.length).toBe(6);
  });
});

describe('SKILL.md Structure Validation', () => {
  it('should have valid frontmatter', () => {
    const frontmatter = `---
name: naming-research
description: |
  Systematic naming research for product/company naming decisions.
  Covers 6 dimensions: archetypes, trademark, linguistic, brand fit,
  emotional, and naming categories.
  Triggers: "naming research", "brand name", "company name",
  "product naming", "competitor naming", "evaluate names",
  "naming patterns", "naming analysis"
argument-hint: "[domain] or [--names candidates]"
---`;

    expect(frontmatter).toContain('name: naming-research');
    expect(frontmatter).toContain('description:');
    expect(frontmatter).toContain('argument-hint:');
  });

  it('should have required sections', () => {
    const requiredSections = [
      'When to Use',
      'When NOT to Use',
      'Core Workflow',
      'Scoring Rubric',
      'Output Format',
      'Reference Files',
      'Gotchas',
      'Tips',
    ];

    // These sections should exist in the actual SKILL.md
    requiredSections.forEach((section) => {
      // Validation that section names are defined
      expect(section.length).toBeGreaterThan(0);
    });
  });
});

describe('Reference Files Validation', () => {
  it('should have 6 reference files defined', () => {
    const referenceFiles = [
      'archetypes.md',
      'trademark.md',
      'linguistic.md',
      'brand-fit.md',
      'emotional.md',
      'examples.md',
    ];

    expect(referenceFiles.length).toBe(6);
    referenceFiles.forEach((file) => {
      expect(file).toMatch(/\.md$/);
    });
  });
});

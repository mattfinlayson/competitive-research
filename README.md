# Competitive Research Skills

AI-powered competitive research skills for product and company naming decisions.

## Overview

This repository contains a library of skills designed for AI agent harnesses (Pi, Claude, Codex, Gemini) to perform competitive research tasks. Skills are markdown-first, following the [spellbook](https://github.com/phrazzld/spellbook) conventions.

## Skills

### Naming Research Skill

Systematic naming research for product/company naming decisions.

**Features:**
- 6 research dimensions: archetypes, trademark, linguistic, brand fit, emotional, categories
- Competitive naming pattern analysis
- Name candidate scoring (1-5 scale with weighted aggregate)
- Confidence level derivation (high ≥4.0, medium 3.0-3.9, low <3.0)
- Availability summary across TLDs and social platforms

**Triggers:**
- "naming research"
- "brand name analysis"
- "company naming"
- "product naming"
- "evaluate names"
- "naming patterns"

## Installation

### Prerequisites

- Node.js ≥18.0.0
- npm or pnpm

### Clone the Repository

```bash
git clone https://github.com/mattfinlayson/competitive-research.git
cd competitive-research
npm install
```

### Via Spellbook

Add to your project's `.spellbook.yaml`:

```yaml
skills:
  - source: github.com/mattfinlayson/competitive-research/naming-research
```

## Usage

### CLI

```bash
# Research a domain
npm run cli -- "compliance software"

# Evaluate specific names
npm run cli -- "compliance software" --names "Attest,Certify,Vouch"

# JSON output for scripts
npm run cli -- "compliance software" --names "Attest" --format json

# Specific dimensions only
npm run cli -- "compliance software" --dimensions "trademark,linguistic"
```

### Options

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--names` | `-n` | Comma-separated name candidates | None |
| `--format` | `-f` | Output format: `markdown` or `json` | `markdown` |
| `--dimensions` | `-d` | Comma-separated dimensions | All 6 |
| `--help` | `-h` | Show help | - |

### In an AI Agent

Activate by mentioning:
- "naming research"
- "brand name analysis"
- "company naming"
- "evaluate these names"

The agent will invoke the skill and return a structured markdown report.

## Skills Structure

```
skills/
└── naming-research/
    ├── SKILL.md              # Core skill (markdown)
    ├── quickstart.md        # Usage guide
    └── references/
        ├── archetypes.md     # Naming patterns
        ├── trademark.md     # Clearance methodology
        ├── linguistic.md     # Language/cultural analysis
        ├── brand-fit.md      # Brand architecture guidance
        ├── emotional.md      # Association testing
        └── examples.md       # Usage examples
```

## Development

### Commands

```bash
# Run tests
npm test

# Run tests once
npm run test:run

# Lint
npm run lint

# Fix lint issues
npm run lint:fix

# Build TypeScript
npm run build

# Full check (lint + test + build)
npm run test:run && npm run lint && npm run build
```

### Pre-commit Hooks

Husky is configured to run on commit:

1. Lint check (ESLint + Prettier)
2. Test suite
3. TypeScript build

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(scope): description
fix(scope): description
docs(scope): description
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`

### Adding New Skills

1. Create `skills/<skill-name>/SKILL.md` with spellbook frontmatter
2. Add reference files in `skills/<skill-name>/references/`
3. Add CLI wrapper in `src/cli/` (if needed)
4. Add tests in `tests/`
5. Update `index.yaml` with skill registration

## Scoring Rubric

Each name is scored 1-5 on each dimension:

| Score | Meaning |
|-------|---------|
| 5 | Excellent - no concerns |
| 4 | Good - minor optimizations possible |
| 3 | Acceptable - notable concerns but workable |
| 2 | Poor - significant concerns |
| 1 | Fail - likely to cause problems |

**Weights:**
- Trademark/Domain: 30%
- Linguistic: 20%
- Brand Fit: 20%
- Emotional: 15%
- Archetypes: 15%

## Project Structure

```
competitive-research/
├── skills/                  # Spellbook skills
├── src/
│   └── cli/                 # CLI wrappers
├── tests/
│   ├── unit/               # Unit tests
│   └── harness/            # Harness eval tests
├── .github/
│   └── workflows/          # CI/CD
├── .husky/                 # Git hooks
├── index.yaml              # Skill registry
├── package.json
└── tsconfig.json
```

## License

MIT License - see [LICENSE](LICENSE)

# Tasks: Naming Research Skill

**Input**: Design documents from `/specs/001-naming-research-skill/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/cli.md

**Tests**: Tests are OPTIONAL for this skill library. Tests will be added for CLI wrapper validation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Skills Library**: `skills/` at repository root
- **CLI wrapper**: `src/cli/`
- **Tests**: `tests/harness/`, `tests/unit/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and skills directory structure

- [X] T001 Create skills directory structure at skills/naming-research/
- [X] T002 [P] Create skills/naming-research/references/ subdirectory
- [X] T003 Initialize package.json with TypeScript and vitest dependencies
- [X] T004 [P] Configure TypeScript config (tsconfig.json)
- [X] T005 Configure vitest for testing
- [X] T006 Configure linting (eslint, prettier)

---

## Phase 2: Foundational (Core Skill Structure)

**Purpose**: Core skill markdown that enables all user stories

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T007 Create skills/naming-research/SKILL.md with spellbook frontmatter
- [X] T008 Add trigger phrases section to SKILL.md
- [X] T009 Add "When to Use" and "When NOT to Use" sections to SKILL.md
- [X] T010 Add gotchas section to SKILL.md
- [X] T011 Verify SKILL.md meets quality gates (<500 lines, triggers, gotchas)

**Checkpoint**: Core skill structure complete - user story implementation can now begin

---

## Phase 3: User Story 1 - Invoke Naming Research (Priority: P1) 🎯 MVP

**Goal**: Agent can invoke the skill with a domain query and receive structured markdown covering all 6 research dimensions

**Independent Test**: Invoke skill with "compliance software" → verify markdown output with all 6 dimensions

### Implementation for User Story 1

- [X] T012 [P] [US1] Create skills/naming-research/references/archetypes.md (naming patterns)
- [X] T013 [P] [US1] Create skills/naming-research/references/trademark.md (clearance methodology)
- [X] T014 [P] [US1] Create skills/naming-research/references/linguistic.md (pronunciation/spelling)
- [X] T015 [P] [US1] Create skills/naming-research/references/brand-fit.md (phase evolution)
- [X] T016 [P] [US1] Create skills/naming-research/references/emotional.md (association testing)
- [X] T017 [US1] Update SKILL.md to reference all 6 dimensions with guidance
- [X] T018 [US1] Add scoring rubric (1-5 scale) to SKILL.md body
- [X] T019 [US1] Create CLI wrapper in src/cli/naming-research.ts
- [X] T020 [US1] Test CLI wrapper with domain query "compliance software"

**Checkpoint**: User Story 1 MVP complete - skill produces full markdown report

---

## Phase 4: User Story 2 - Evaluate Name Candidates (Priority: P2)

**Goal**: Agent can provide specific name candidates and receive scored comparison across all dimensions

**Independent Test**: Invoke with `--names "Attest,Certify,Vouch"` → verify comparison table in output

### Implementation for User Story 2

- [X] T021 [P] [US2] Update SKILL.md with evaluation workflow (--names flag)
- [X] T022 [P] [US2] Add candidate scoring guidance to SKILL.md body
- [X] T023 [US2] Update CLI wrapper to accept --names option
- [X] T024 [US2] Add comparison table format to SKILL.md
- [X] T025 [US2] Add name category analysis (literal, evocative, abstract, compound, short) to SKILL.md
- [X] T026 [US2] Test CLI with --names "Attest,Certify,Vouch"

**Checkpoint**: User Story 2 complete - agent can evaluate specific names

---

## Phase 5: User Story 3 - Generate Final Recommendations (Priority: P3)

**Goal**: Agent receives top 3-5 finalists with confidence level and availability summary

**Independent Test**: Verify output includes finalists section with ranked candidates and rationale

### Implementation for User Story 3

- [X] T027 [P] [US3] Add finalists generation guidance to SKILL.md
- [X] T028 [P] [US3] Define confidence level derivation (high ≥4.0, medium 3.0-3.9, low <3.0)
- [X] T029 [US3] Add availability summary format to SKILL.md (domains + social)
- [X] T030 [US3] Update CLI to output finalists section
- [X] T031 [US3] Test final output includes ranked finalists with confidence

**Checkpoint**: User Story 3 complete - full deliverable quality

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Quality gates, documentation, and harness eval

- [X] T032 [P] Validate SKILL.md against spellbook quality gates
- [X] T033 [P] Create skills/naming-research/references/examples.md with usage examples
- [X] T034 Create tests/unit/parsing.test.ts for CLI output validation
- [X] T035 Create tests/harness/naming-research.eval.ts for spellbook harness eval
- [X] T036 Update skills/naming-research/quickstart.md (copy from specs/quickstart.md)
- [X] T037 Add to repository index.yaml (spellbook registry)

---

## Dependencies & Execution Order

### Phase Dependencies

| Phase | Depends On | Blocks |
|-------|------------|--------|
| Phase 1: Setup | None | Phase 2 |
| Phase 2: Foundational | Phase 1 | Phase 3, 4, 5 |
| Phase 3: US1 | Phase 2 | Phase 6 |
| Phase 4: US2 | Phase 2 | Phase 6 |
| Phase 5: US3 | Phase 2 | Phase 6 |
| Phase 6: Polish | Phase 3, 4, 5 | None |

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Phase 2 - Core research functionality
- **User Story 2 (P2)**: Starts after Phase 2 - Candidate evaluation (independent of US1)
- **User Story 3 (P3)**: Starts after Phase 2 - Finalist generation (independent of US1, US2)

### Within Each User Story

- Phase 3-5 tasks have sequential dependencies (references/ → SKILL.md → CLI)
- Tasks marked [P] can run in parallel within their phase

---

## Parallel Opportunities

### Within Phase 3 (US1)
```bash
# These 5 reference files can be created in parallel:
Task: "Create archetypes.md"
Task: "Create trademark.md"
Task: "Create linguistic.md"
Task: "Create brand-fit.md"
Task: "Create emotional.md"
```

### Within Phase 4 (US2)
```bash
# SKILL updates and CLI updates can overlap:
Task: "Update SKILL.md with evaluation workflow"
Task: "Update CLI wrapper with --names option"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - skill structure)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test skill produces full markdown report
5. MVP ready - skill can be invoked and produces all 6 dimensions

### Incremental Delivery

1. Phase 1 + 2 → Skill structure ready
2. Phase 3 → MVP: Skill produces research report
3. Phase 4 → Add candidate evaluation
4. Phase 5 → Add finalist generation
5. Phase 6 → Polish and harness eval

### Skill Library Growth

This single skill is v1. Future skills can be added under `skills/`:
- `skills/market-scan/`
- `skills/competitor-profile/`
- `skills/benchmark/`

---

## Task Summary

| Phase | Task Count | Parallel Tasks |
|-------|------------|----------------|
| Phase 1: Setup | 6 | 4 (T002, T004, T006) |
| Phase 2: Foundational | 5 | 0 |
| Phase 3: US1 | 9 | 5 (T012-T016) |
| Phase 4: US2 | 6 | 2 (T021, T022) |
| Phase 5: US3 | 5 | 2 (T027, T028) |
| Phase 6: Polish | 6 | 2 (T032, T033) |
| **Total** | **37** | |

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- SKILL.md is the source of truth - references/ provide depth
- CLI wrapper is minimal TypeScript - core logic stays in markdown
- Commit after each phase or logical group
- Stop at any checkpoint to validate story independently

# Feature Specification: Naming Research Skill

**Feature Branch**: `001-naming-research-skill`
**Created**: 2026-04-02
**Status**: Draft
**Input**: Research competitive naming patterns and deliver markdown output

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Agent invokes naming research (Priority: P1)

An AI agent needs to research naming patterns for a new product/company and needs structured competitive intelligence.

**Why this priority**: Core functionality — without this, the skill has no value.

**Independent Test**: Can be tested by invoking the skill with a domain query and verifying markdown output is generated.

**Acceptance Scenarios**:

1. **Given** an agent wants naming research for "compliance software", **When** the skill is invoked, **Then** it outputs markdown covering naming archetypes, trademark/domain analysis, linguistic fit, brand architecture, and emotional associations.
2. **Given** an agent provides a specific name candidate like "Attest", **When** the skill is invoked, **Then** it analyzes that name across all 6 research dimensions and outputs a scored assessment.

---

### User Story 2 - Agent evaluates existing name candidates (Priority: P2)

An agent has existing name candidates and needs structured evaluation against competitive benchmarks.

**Why this priority**: Common workflow — users often have draft names they want validated.

**Independent Test**: Can be tested by providing name candidates and verifying scored evaluation output.

**Acceptance Scenarios**:

1. **Given** an agent provides 5 name candidates, **When** the skill is invoked, **Then** it outputs a comparison table scoring each name on all research dimensions.

---

### User Story 3 - Agent generates final recommendations (Priority: P3)

An agent needs a final recommendation with top 3-5 candidates, including availability checks.

**Why this priority**: Deliverable quality — research without recommendations has limited value.

**Independent Test**: Can be tested by verifying final output includes ranked candidates with rationale.

**Acceptance Scenarios**:

1. **Given** research is complete, **When** the skill generates recommendations, **Then** it outputs top 3-5 finalists with trademark search summary, domain availability, social handles, and confidence level.

---

### Edge Cases

- What happens when no competitive data is available for a niche domain?
- How does the skill handle extremely short names (< 4 chars)?
- How does the skill handle names that are common words in other languages?
- What if all TLDs are unavailable for a candidate name?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Skill MUST produce markdown output with structured sections for each research dimension.
- **FR-002**: Skill MUST cover 6 research dimensions: Naming Archetypes, Trademark/Domain Clearance, Linguistic/Cultural Analysis, Brand Architecture Fit, Emotional/Associative Testing, Naming Categories.
- **FR-003**: Skill MUST output a scored comparison table for name candidates.
- **FR-004**: Skill MUST identify naming archetypes (descriptive, evocative, abstract, acronym-based, compound).
- **FR-005**: Skill MUST check domain availability across .com, .io, .ly, .co, .app.
- **FR-006**: Skill MUST check social handle availability (Twitter/X, LinkedIn, GitHub).
- **FR-007**: Skill MUST evaluate pronunciation clarity and spelling clarity.
- **FR-008**: Skill MUST assess international considerations (EU, UK market translations).
- **FR-009**: Skill MUST analyze brand architecture fit for product evolution phases.
- **FR-010**: Skill MUST output emotional associations (3 words per name).
- **FR-011**: Skill MUST provide top 3-5 finalists with confidence level (high/medium/low).
- **FR-012**: Skill MUST include trigger phrases that activate it (e.g., "naming research", "brand name", "company name", "competitor naming").

### Key Entities *(include if feature involves data)*

- **NameCandidate**: A proposed name to evaluate, with attributes: name, category, score breakdown, availability status.
- **ResearchDimension**: A category of analysis (6 total), each with criteria and scoring rubric.
- **Finalist**: A top candidate that passes threshold criteria, with rationale and confidence level.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Skill produces structured markdown output within [NEEDS CLARIFICATION: acceptable response time - suggest 30 seconds for web research].
- **SC-002**: Output covers all 6 required research dimensions with substantive analysis.
- **SC-003**: Comparison table includes at least 5 scored candidates when provided.
- **SC-004**: Finalists section includes 3-5 candidates with explicit confidence ratings.
- **SC-005**: Output is readable as markdown and renders correctly in standard viewers.
- **SC-006**: Skill can be invoked via CLI with domain query and produces stdout markdown.

## Assumptions

- **Domain**: The skill targets software/SaaS naming research (not consumer products).
- **Output format**: Markdown is the primary output format (not spreadsheets or docs).
- **Research scope**: Research is based on web search and pattern analysis, not primary interviews.
- **Scoring**: Subjective dimensions (emotional, brand fit) use rubric-based scoring, not objective metrics.
- **Availability checks**: Domain/social checks are indicative, not authoritative (actual registration requires tools).
- **Language**: Analysis defaults to English; international considerations address major markets (EU, UK, DE, FR, ES).

## Notes

- This is a SKILL, not a product feature. The "user" is an AI agent invoking the skill.
- Output is markdown-only per project convention ("THIS IS EXAMPLE - FOCUS ON MARKDOWN OUTPUT ONLY").
- Actual competitor names should be researched via web search, not assumed.

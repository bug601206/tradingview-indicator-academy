# Governance

## Principles

The official project is community-open and founder-controlled. Governance authority over the official repository is separate from copyright ownership, GPL rights, and the right to fork.

## Roles

- **Founder / controlling owner:** controls the official GitHub account or organization, project identity, maintainer appointments, repository settings, and official releases.
- **Maintainers:** trusted contributors appointed for a documented scope. They triage, review, and merge within least-privilege access.
- **Contributors:** propose changes through issues and pull requests. Contribution does not automatically grant repository write access.

There is no fictional steering committee. New maintainers are appointed by the founder after sustained, constructive contributions and security review. Removal may occur for inactivity, abuse, conflicts of interest, repeated policy violations, or loss of trust; the reason should be recorded privately and, where appropriate, summarized publicly.

## Repository controls

1. Founder remains owner (or one of a minimal number of organization owners) and uses a passkey or strong 2FA with recovery protection.
2. Default branch is protected: pull requests required, one approving review, conversations resolved, `quality` status check required, force pushes/deletion disabled, and rules apply to administrators where practical.
3. Unknown contributors receive no write or Admin access. Triage and Write roles are granted only when needed.
4. Releases and tags are restricted to the founder and explicitly designated release maintainers.
5. Automated workflows use least privilege and no secrets on fork pull requests.
6. Security advisories are handled privately under `SECURITY.md`.

## Decisions

- Routine fixes: pull request discussion and maintainer review.
- Formula or editorial convention changes: cited evidence, independent tests, and explicit recorded rationale.
- Architecture, license, contributor-rights, branding, or governance changes: founder approval after public proposal and reasonable comment period.
- Emergency security fixes may be private until coordinated disclosure.

Decisions should be transparent, but private data, embargoed vulnerabilities, and confidential legal advice are not published.

## Rights distinctions

- **Official governance:** controls only the official repository, brand presentation, and official releases.
- **Copyright:** the founder and each contributor retain copyright in their own work unless an explicit agreement applies.
- **Contribution rights:** accepted work is distributed under the repository license and any separately approved contributor agreement.
- **Fork rights:** GPL recipients may lawfully fork, modify, redistribute, and sell compliant versions. They must not imply official endorsement.
- **Commercial rights:** GPL permits commercial use. The founder may sell services and may separately license only material for which sufficient rights are held.

## Changes to governance

Governance changes use a pull request, explain the impact, and require founder approval. They cannot revoke rights already granted under GPL to legitimate recipients.

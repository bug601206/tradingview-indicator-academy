# Contributing

Thank you for helping improve technical-indicator education. Contributions should make the project more correct, understandable, accessible, or maintainable—not merely increase indicator count.

## Before contributing code

The project has adopted a copyright-retaining CLA plus DCO direction. The CLA acceptance workflow is not active yet, so external code pull requests will not be merged until the official repository announces activation. Discussion, issue reports, and formula evidence are welcome in the meantime. See [CLA.md](CLA.md).

Never include credentials, account data, private trading records, copyrighted screenshots, copied encyclopedia prose, confidential research, or client material.

## Workflow

1. Search existing issues and open the appropriate issue form.
2. For a material change, agree on scope before implementation.
3. Fork the repository and create a focused branch.
4. Run `npm ci` and `npm run check`.
5. Add independent tests for formula changes; do not use the implementation as its own oracle.
6. Update documentation, sources, aliases, relationships, and failure modes where relevant.
7. Open a pull request using the template. Explain the convention chosen and any alternatives.

## Commit sign-off

Every external contribution commit must include:

```text
Signed-off-by: Your Name <your-email@example.com>
```

Use `git commit -s`. The sign-off certifies the Developer Certificate of Origin 1.1; it does not transfer copyright or grant proprietary relicensing by itself.

## Formula and research standards

- Prefer original creator publications, official platform documentation, and independent mathematical references.
- Record source scope and implementation variants; do not silently mix conventions.
- Label content `RESEARCHED` unless the documented independent verification standard is met.
- Do not invent performance claims, endorsements, user counts, or backtest results.
- Strategies are educational frameworks with regime, confirmation, invalidation, exit, risk, and failure conditions.

## New indicators

Follow [ADDING_INDICATORS.md](ADDING_INDICATORS.md) and [CONTENT_GUIDE.md](CONTENT_GUIDE.md). Reuse the shared registry and learning renderer. Include search aliases, pure math, edge cases, at least one independently constructed reference test, parameter responsiveness, provenance, and accessibility checks.

## Review

Maintainers may request changes, close out-of-scope proposals, or decline material with unclear rights. Acceptance never grants repository access. Be respectful under [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

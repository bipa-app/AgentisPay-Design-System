# Changelog

All notable changes to the AgentisPay design system are documented here.

Format: `[version] — date / description`

---

## [1.1.0] — 2026-03-12

### Added
- SVG versions of logo variants: `logo-transparent-dark`, `logo-transparent-light`, `wordmark-transparent-dark`, `wordmark-transparent-light`
- SVG version of mascot icon: `hermes-icon-dark`
- `tokens/tokens.css` — standalone CSS custom properties file (importable without the full HTML)
- `BalanceDisplay` React Native component with optical centering via phantom spacer
- Web DS sub-navigation with 9 sections and IntersectionObserver active state
- Web DS sections: Tokens, Buttons, Forms, Cards, Alerts, Table, Modal, Navigation, Feed

### Changed
- Assets reorganized into semantic folder structure: `assets/logo/`, `assets/mascot/`, `assets/illustrations/`
- All asset filenames renamed from `Frame NNN.png` to semantic names (e.g. `logo-dark-orange.png`)
- Removed `web referencias/` folder from repository
- Removed empty placeholder folders (`colors/`, `components/`, `guidelines/`, `identity/`, `typography/`)
- `tailwind.config.js` updated to import tokens from `theme.ts`
- `theme.ts` aligned to design system palette (replaces old grayscale `ap-black`/`ap-panel` tokens)

### Fixed
- Image paths with spaces and special characters (`Ilustraçoes/`) causing broken images on Netlify

---

## [1.0.0] — 2026-03-10

### Added
- Initial design system: Brand Guidelines, Mobile DS, Web DS
- Color tokens, typography scale, radius scale
- Mobile components: Amount Hero, Cards, Buttons, Badges, Inputs, Transactions, Bottom Nav, Approval Screen
- Web components: Buttons, Forms, Cards, Alerts, Data Table, Modal, Navigation, Activity Feed
- Illustrations section: dot-matrix style (symbol, coin)
- Logo system: dark, teal, orange-bg, light-bg variants + transparent versions
- Mascot (Hermes) variants
- Deployed to Netlify: https://agentispay-ds.netlify.app

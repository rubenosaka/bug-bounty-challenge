# Bug Bounty Challenge

## Frontend Developer Level Test

**Developer:** Rubén González Aranda

**GitHub Repository:** https://github.com/rubenosaka/bug-bounty-challenge

---

## Challenge Overview

This is a React TypeScript application with several bugs and issues that need to be identified and fixed. The main task is to:

1. **Identify and fix existing bugs** in the codebase
2. **Implement missing features** as specified in the issues list
3. **Improve code quality** and resolve console warnings
4. **Add optional enhancements** like language switching functionality

### Known Issues to Fix

- Console error: Missing "key" props in list components
- Text formatting: Make "known" word bold in introduction text
- User avatar not displaying in app header
- Optional: Fix countdown timer issues (memory leak with multiple setInterval instances)
- Optional: Add language switcher (English/German)

### Tech Stack

- React 17 with TypeScript
- Material-UI (MUI) v5
- MobX for state management
- React Router v5
- i18next for internationalization
- Notistack for notifications
- React Scripts v5 (updated from v4 for security)

---

## Rubén González - Improvements

### Security Mitigations

I have updated the project dependencies and applied security overrides:

**Major Updates:**

- Updated `react-scripts` from v4.0.3 to v5.0.1 (eliminated 129 vulnerabilities)

**Security Overrides:**

- `nth-check@^2.0.1` (fixes ReDoS vulnerability)
- `postcss@^8.4.47` (fixes parsing error vulnerability)

This reduces vulnerabilities from 138 (7 critical, 31 high, 100 moderate) to 9 (0 critical, 6 high, 3 moderate) - a 93% improvement. The remaining webpack-dev-server warning is pinned by react-scripts 5 and only affects development builds. In a production project, I would resolve this by migrating to Vite/Next or updating the toolchain.

### Development Notes

**Branch Management:**

- Feature branches have been preserved (not deleted) for review purposes
- Each branch contains specific fixes and can be consulted if needed
- Main branch contains the integrated, working solution

**i18n Implementation Notes:**

- The `<b>` tag in `en.json` was intentionally preserved as per challenge requirements ("do not change the i18n text")
- In a production environment, `<strong>` would be the semantically correct choice over `<b>`
- The solution uses `react-i18next`'s `Trans` component for safe HTML rendering

**Countdown Timer Bug Analysis:**

- **Issue**: Memory leak caused by multiple `setInterval` instances without cleanup
- **Root Cause**: `useEffect` creates new intervals on every re-render without clearing previous ones
- **Symptoms**: Countdown accelerates as multiple timers run simultaneously
- **Reproduction Steps**:
  1. Open the application in browser
  2. Navigate between pages or trigger component re-renders
  3. Observe countdown acceleration (multiple timers running)
  4. Check browser console for multiple interval creation messages
- **Impact**: Performance degradation and unpredictable countdown behavior
- **Solution**: Implement proper cleanup with `clearInterval` in useEffect return function

**Language Switcher Implementation:**

- **Feature**: Added language selector in app header with flag icons
- **Languages**: English (US flag) and German (DE flag)
- **Library**: `react-country-flag` for visual flag representation
- **Integration**: Seamlessly integrated with existing i18next configuration
- **UX**: Dropdown with current language display and flag icons for selection

**Home Page Refactoring:**

- **Issue**: Hardcoded issues array in component, not internationalized
- **Solution**: Refactored to use i18next with `returnObjects: true`
- **Changes**:
  - Defined `Issue` interface with `{ id: string; icon: string; title: string; description: string }`
  - Moved issues array to `home.issues` in translation files
  - Used `issue.id` as React key (fixes console warning)
  - Updated MUI v5 color prop: `color="text.secondary"` instead of `color="textSecondary"`
- **Benefits**:
  - Full internationalization of issues list
  - Dynamic language switching for all content
  - Better performance with unique keys
  - Centralized content management
- **Translation Quality**: German translations created using Google Translate for demonstration purposes

---

Created with CodeSandbox

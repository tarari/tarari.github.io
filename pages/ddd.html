<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="artifact-type" content="narrative">
  <meta name="design-style" content="carbon">
  <title>Domain-Driven Design en PHP — Guia Interactiva d'Arquitectura i Patrons Tàctics</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: light;

      /* Page and surfaces (Carbon) */
      --background: #ffffff;
      --surface-container-low: #f4f4f4;
      --surface-container: #f4f4f4;
      --surface-container-high: #e0e0e0;

      /* Ink */
      --on-surface: #161616;
      --on-surface-variant: #525252;

      /* Rules */
      --outline: #8d8d8d;
      --outline-variant: #e0e0e0;

      /* Accents */
      --primary: #0f62fe;
      --primary-hover: #0353e9;
      --on-primary: #ffffff;
      --primary-container: #d0e2ff;
      --on-primary-container: #161616;
      --secondary: #6f6f6f;
      --tertiary: #198038;
      --tertiary-container: #defbe6;
      --error: #da1e28;
      --error-container: #fff1f1;
      --on-error: #ffffff;

      /* Data series */
      --data-1: #0f62fe;
      --data-2: #6929c4;
      --data-3: #005d5d;
      --data-4: #9f1853;
      --data-context: #8d8d8d;

      /* Code surface & syntax tokens */
      --code-bg: #161616;
      --code-header: #262626;
      --code-border: #393939;
      --code-ink: #f4f4f4;
      --code-muted: #a8a8a8;
      --code-kw: #78a9ff;
      --code-type: #be95ff;
      --code-str: #42be65;
      --code-var: #3ddbd9;
      --code-num: #ff8389;

      /* Fonts */
      --font-headline: 'IBM Plex Sans', sans-serif;
      --font-body: 'IBM Plex Sans', sans-serif;
      --font-label: 'IBM Plex Mono', monospace;

      /* Shape */
      --rounded: 0.125rem;
      --rounded-lg: 0.25rem;
      --rounded-full: 0.75rem;

      /* Style effects */
      --shadow-1: 0 2px 6px rgba(0, 0, 0, 0.1);
      --shadow-2: 0 4px 12px rgba(0, 0, 0, 0.12);
      --rule: 1px solid var(--outline-variant);
      --field-rule: 1px solid var(--outline);
      --indicator: 2px solid var(--primary);

      /* Shared tokens */
      --positive: #198038;
      --warning: #b28600;
      --warning-container: #fcf4d6;
      --focus: #0f62fe;

      /* Type scale (Narrative) */
      --display-size: clamp(2.125rem, 1.5rem + 2.6vw, 3.375rem);
      --headline-size: clamp(1.5rem, 1.15rem + 1.3vw, 2.125rem);
      --subhead-size: clamp(1.125rem, 1.02rem + 0.45vw, 1.375rem);
      --body-size: clamp(1rem, 0.96rem + 0.18vw, 1.0625rem);
      --label-size: 0.75rem;

      /* Spacing scale (4pt base) */
      --space-xs: 0.25rem;
      --space-sm: 0.5rem;
      --space-md: 1rem;
      --space-lg: 1.5rem;
      --space-xl: 2.5rem;
      --space-2xl: 4rem;
      --space-3xl: 6rem;

      /* Motion */
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
      --dur-micro: 120ms;
      --dur-short: 220ms;
      --dur-long: 420ms;
    }

    /* Base reset */
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      overflow-x: clip;
      margin: 0;
      padding: 0;
      background: var(--background);
      color: var(--on-surface);
      font-family: var(--font-body);
      font-size: var(--body-size);
      line-height: 1.6;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
    }
    header { position: static !important; }

    /* Focus visibility */
    :focus-visible {
      outline: 2px solid var(--focus);
      outline-offset: 2px;
    }

    button, input, select, textarea {
      font-family: inherit;
    }

    /* Page layout */
    .page-grid {
      display: grid;
      gap: var(--space-2xl);
      padding: var(--space-lg);
      max-width: 1240px;
      margin: 0 auto;
      overflow: hidden;
    }
    .page-grid * { min-width: 0; }

    /* Typography helpers */
    .mono-label {
      font-family: var(--font-label);
      font-size: var(--label-size);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.09em;
      color: var(--on-surface-variant);
      display: inline-block;
    }

    .display-title {
      font-family: var(--font-headline);
      font-size: var(--display-size);
      font-weight: 300;
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin: 0;
      color: var(--on-surface);
    }
    .display-title strong {
      font-weight: 600;
    }

    .section-title {
      font-family: var(--font-headline);
      font-size: var(--headline-size);
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
      color: var(--on-surface);
    }
    .section-title strong {
      font-weight: 600;
    }

    .subhead {
      font-family: var(--font-headline);
      font-size: var(--subhead-size);
      font-weight: 600;
      line-height: 1.3;
      margin: 0;
      color: var(--on-surface);
    }

    .prose {
      max-width: 65ch;
      color: var(--on-surface);
      margin: 0;
    }
    .prose-muted {
      max-width: 65ch;
      color: var(--on-surface-variant);
      margin: 0;
    }

    .inline-code {
      font-family: var(--font-label);
      font-size: 0.875em;
      background: var(--surface-container-low);
      border: 1px solid var(--outline-variant);
      padding: 0.05rem 0.35rem;
      border-radius: var(--rounded);
      color: var(--on-surface);
    }

    /* Header & Top Index Bar */
    .mast {
      border-bottom: var(--rule);
      padding-bottom: var(--space-xl);
      display: grid;
      gap: var(--space-lg);
    }
    .mast-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      padding-bottom: var(--space-sm);
      border-bottom: var(--rule);
    }
    .mast-grid {
      display: grid;
      grid-template-columns: minmax(0, 8fr) minmax(0, 4fr);
      gap: var(--space-xl);
      align-items: start;
    }
    .mast-summary {
      background: var(--surface-container);
      padding: var(--space-md);
      border-left: 3px solid var(--primary);
      display: grid;
      gap: var(--space-sm);
    }
    .mast-kpi-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--space-md);
      border-top: var(--rule);
      padding-top: var(--space-sm);
    }
    .kpi-value {
      font-family: var(--font-label);
      font-size: 1.5rem;
      font-weight: 300;
      color: var(--on-surface);
      line-height: 1.2;
    }

    /* Section Navigation Rail (in-flow, non-sticky header compliant) */
    .nav-rail {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: var(--space-md);
      background: var(--surface-container);
      padding: var(--space-sm);
      border-bottom: var(--rule);
    }
    .nav-link {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      padding: var(--space-md);
      background: var(--background);
      border: 1px solid var(--outline-variant);
      border-bottom: 2px solid transparent;
      text-decoration: none;
      color: var(--on-surface);
      transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
      min-height: 44px;
    }
    .nav-link:hover {
      background: var(--surface-container-low);
      border-bottom-color: var(--primary);
    }
    .nav-link.is-active {
      border-bottom: var(--indicator);
    }
    .nav-link-title {
      font-weight: 600;
      font-size: 0.95rem;
    }

    /* Section chrome */
    .section-block {
      display: grid;
      gap: var(--space-xl);
      padding-top: var(--space-md);
    }
    .section-head {
      border-bottom: var(--rule);
      padding-bottom: var(--space-md);
      display: grid;
      gap: var(--space-sm);
    }

    /* Flat Gray Layer containers */
    .layer {
      background: var(--surface-container);
      padding: var(--space-lg);
      border-radius: 0;
      display: grid;
      gap: var(--space-md);
    }
    .layer .layer-nested {
      background: var(--surface-container-high);
      padding: var(--space-md);
      display: grid;
      gap: var(--space-sm);
    }
    .panel-white {
      background: var(--background);
      border: 1px solid var(--outline-variant);
      padding: var(--space-lg);
      display: grid;
      gap: var(--space-md);
    }

    /* Concept Module Layout */
    .concept-module {
      border-top: 2px solid var(--on-surface);
      padding-top: var(--space-lg);
      display: grid;
      gap: var(--space-lg);
    }
    .concept-split {
      display: grid;
      grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
      gap: var(--space-lg);
      align-items: start;
    }
    .concept-split-equal {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: var(--space-lg);
      align-items: start;
    }

    /* Interactive Tabs & Buttons (Carbon) */
    .tab-bar {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid var(--outline-variant);
      gap: 0;
    }
    .tab-btn {
      appearance: none;
      background: transparent;
      border: 0;
      border-bottom: 2px solid transparent;
      padding: var(--space-sm) var(--space-md);
      min-height: 44px;
      cursor: pointer;
      color: var(--on-surface-variant);
      font-size: 0.9rem;
      font-weight: 400;
      text-align: left;
      transition: color var(--dur-micro) var(--ease-out), background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
    }
    .tab-btn:hover {
      background: var(--surface-container-high);
      color: var(--on-surface);
    }
    .tab-btn.is-active {
      color: var(--on-surface);
      font-weight: 600;
      border-bottom: var(--indicator);
      background: var(--background);
    }

    .btn {
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-md);
      min-height: 40px;
      padding: var(--space-sm) var(--space-lg) var(--space-sm) var(--space-md);
      border-radius: 0;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background-color var(--dur-micro) var(--ease-out), color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
    }
    .btn-primary {
      background: var(--primary);
      color: var(--on-primary);
    }
    .btn-primary:hover:not(:disabled) {
      background: var(--primary-hover);
    }
    .btn-secondary {
      background: transparent;
      color: var(--primary);
      border-color: var(--primary);
    }
    .btn-secondary:hover:not(:disabled) {
      background: var(--primary-container);
      color: var(--on-primary-container);
    }
    .btn-ghost {
      background: var(--background);
      color: var(--on-surface);
      border-color: var(--outline-variant);
    }
    .btn-ghost:hover:not(:disabled) {
      background: var(--surface-container-high);
    }
    .btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }

    .pill-tag {
      display: inline-flex;
      align-items: center;
      height: 24px;
      padding: 0 var(--space-sm);
      border-radius: var(--rounded-full);
      background: var(--primary-container);
      color: var(--on-primary-container);
      font-family: var(--font-label);
      font-size: var(--label-size);
      font-weight: 500;
    }
    .pill-tag--success {
      background: var(--tertiary-container);
      color: var(--on-surface);
    }
    .pill-tag--error {
      background: var(--error-container);
      color: var(--error);
    }
    .pill-tag--neutral {
      background: var(--surface-container-high);
      color: var(--on-surface);
    }

    /* Code Blocks */
    .code-shell {
      background: var(--code-bg);
      color: var(--code-ink);
      border: 1px solid var(--code-border);
      display: grid;
      grid-template-rows: auto 1fr;
      overflow: hidden;
    }
    .code-bar {
      background: var(--code-header);
      padding: var(--space-xs) var(--space-md);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-sm);
      border-bottom: 1px solid var(--code-border);
      min-height: 40px;
    }
    .code-filename {
      font-family: var(--font-label);
      font-size: var(--label-size);
      color: var(--code-muted);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .copy-btn {
      appearance: none;
      background: transparent;
      border: 1px solid var(--code-border);
      color: var(--code-ink);
      font-family: var(--font-label);
      font-size: var(--label-size);
      padding: 0.25rem 0.6rem;
      min-height: 30px;
      cursor: pointer;
      transition: background-color var(--dur-micro) var(--ease-out);
    }
    .copy-btn:hover {
      background: var(--code-border);
    }
    .code-pre {
      margin: 0;
      padding: var(--space-md);
      font-family: var(--font-label);
      font-size: 0.8125rem;
      line-height: 1.55;
      overflow-x: auto;
      tab-size: 4;
      white-space: pre;
    }
    .tok-kw { color: var(--code-kw); font-weight: 500; }
    .tok-type { color: var(--code-type); }
    .tok-str { color: var(--code-str); }
    .tok-var { color: var(--code-var); }
    .tok-num { color: var(--code-num); }
    .tok-com { color: var(--code-muted); font-style: italic; }

    /* Interactive SVG Diagrams */
    .diagram-box {
      background: var(--background);
      border: 1px solid var(--outline-variant);
      padding: var(--space-md);
      display: grid;
      gap: var(--space-md);
    }
    .diagram-svg {
      width: 100%;
      height: auto;
      display: block;
    }
    .svg-node {
      cursor: pointer;
      transition: opacity var(--dur-micro) var(--ease-out);
    }
    .svg-node:hover rect,
    .svg-node:hover polygon {
      stroke: var(--primary);
      stroke-width: 2;
    }
    .svg-node.is-selected rect,
    .svg-node.is-selected polygon {
      stroke: var(--primary);
      stroke-width: 2.5;
      fill: var(--primary-container);
    }

    /* Notification / Callout Strip (Carbon) */
    .notice {
      background: var(--surface-container-low);
      border-left: 3px solid var(--primary);
      padding: var(--space-md);
      display: grid;
      gap: var(--space-xs);
    }
    .notice--success { border-left-color: var(--tertiary); }
    .notice--error { border-left-color: var(--error); }
    .notice--warning { border-left-color: var(--warning); }

    /* List separators */
    .ruled-list {
      display: grid;
      gap: var(--space-sm);
    }
    .ruled-list > * + * {
      border-top: var(--rule);
      padding-top: var(--space-sm);
    }

    /* Tables */
    .data-table-wrap {
      overflow-x: auto;
      border: 1px solid var(--outline-variant);
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }
    .data-table th {
      background: var(--surface-container-high);
      text-align: left;
      padding: var(--space-sm) var(--space-md);
      font-family: var(--font-label);
      font-size: var(--label-size);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--on-surface);
      border-bottom: 1px solid var(--outline);
    }
    .data-table td {
      padding: var(--space-sm) var(--space-md);
      border-bottom: var(--rule);
      vertical-align: top;
    }
    .data-table tbody tr:nth-child(even) {
      background: var(--surface-container-low);
    }

    /* Form Controls (Builder Configurator) */
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
      gap: var(--space-md);
      align-items: end;
    }
    .field-group {
      display: grid;
      gap: var(--space-xs);
    }
    .field-label {
      font-family: var(--font-label);
      font-size: var(--label-size);
      color: var(--on-surface-variant);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .field-input, .field-select {
      height: 40px;
      background: var(--background);
      border: 0;
      border-bottom: var(--field-rule);
      padding: 0 var(--space-md);
      font-size: 0.9rem;
      color: var(--on-surface);
      border-radius: 0;
      width: 100%;
    }
    .field-select {
      padding-right: var(--space-xl);
    }
    .check-row {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      min-height: 40px;
      cursor: pointer;
    }
    .check-row input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: var(--primary);
      cursor: pointer;
    }

    /* 6-Step Sequential Methodology Roadmap */
    .roadmap-progress-bar {
      background: var(--surface-container);
      padding: var(--space-md);
      display: grid;
      gap: var(--space-sm);
      border-bottom: var(--rule);
    }
    .progress-track {
      height: 8px;
      background: var(--surface-container-high);
      width: 100%;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: var(--primary);
      width: 0%;
      transition: width var(--dur-short) var(--ease-out);
    }
    .roadmap-steps {
      display: grid;
      gap: 0;
    }
    .step-row {
      display: grid;
      grid-template-columns: 56px minmax(0, 1fr);
      gap: var(--space-md);
      align-items: stretch;
    }
    .step-rail {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .step-marker {
      width: 40px;
      height: 40px;
      background: var(--background);
      border: 2px solid var(--on-surface);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-label);
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--on-surface);
      flex-shrink: 0;
    }
    .step-row.is-done .step-marker {
      background: var(--tertiary);
      border-color: var(--tertiary);
      color: var(--on-primary);
    }
    .step-connector {
      width: 2px;
      flex-grow: 1;
      background: var(--outline-variant);
      min-height: 24px;
    }
    .step-row.is-done .step-connector {
      background: var(--tertiary);
    }
    .step-row:last-child .step-connector {
      display: none;
    }
    .step-card {
      background: var(--surface-container);
      padding: var(--space-lg);
      margin-bottom: var(--space-lg);
      display: grid;
      gap: var(--space-md);
      border-left: 3px solid var(--outline);
    }
    .step-row.is-done .step-card {
      border-left-color: var(--tertiary);
    }
    .step-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-md);
      border-bottom: var(--rule);
      padding-bottom: var(--space-sm);
    }
    .step-body {
      display: grid;
      grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
      gap: var(--space-lg);
      align-items: start;
    }

    /* Quiz Console */
    .quiz-scoreboard {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: var(--space-md);
    }
    .score-tile {
      background: var(--surface-container);
      padding: var(--space-md);
      display: grid;
      gap: var(--space-xs);
    }
    .score-tile.is-lead {
      border-bottom: var(--indicator);
    }
    .quiz-nav-grid {
      display: grid;
      grid-template-columns: repeat(10, minmax(0, 1fr));
      gap: var(--space-xs);
    }
    .q-pill {
      appearance: none;
      height: 44px;
      background: var(--surface-container);
      border: 1px solid var(--outline-variant);
      font-family: var(--font-label);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--on-surface);
      cursor: pointer;
      transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
    }
    .q-pill:hover {
      background: var(--surface-container-high);
    }
    .q-pill.is-current {
      border: 2px solid var(--primary);
      font-weight: 700;
    }
    .q-pill.is-correct {
      background: var(--tertiary-container);
      border-color: var(--tertiary);
    }
    .q-pill.is-wrong {
      background: var(--error-container);
      border-color: var(--error);
    }
    .quiz-card {
      background: var(--surface-container);
      padding: var(--space-lg);
      display: grid;
      gap: var(--space-lg);
    }
    .quiz-options {
      display: grid;
      gap: var(--space-sm);
    }
    .quiz-option {
      appearance: none;
      width: 100%;
      text-align: left;
      background: var(--background);
      border: 1px solid var(--outline-variant);
      padding: var(--space-md);
      min-height: 48px;
      cursor: pointer;
      display: grid;
      grid-template-columns: 32px minmax(0, 1fr);
      gap: var(--space-sm);
      align-items: start;
      color: var(--on-surface);
      font-size: 0.95rem;
      transition: background-color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
    }
    .quiz-option:hover:not(:disabled) {
      background: var(--surface-container-low);
      border-color: var(--primary);
    }
    .quiz-option:disabled {
      cursor: default;
    }
    .quiz-option.opt-correct {
      background: var(--tertiary-container);
      border: 2px solid var(--tertiary);
    }
    .quiz-option.opt-wrong {
      background: var(--error-container);
      border: 2px solid var(--error);
    }
    .opt-letter {
      font-family: var(--font-label);
      font-weight: 600;
      color: var(--on-surface-variant);
    }
    .quiz-footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-md);
      border-top: var(--rule);
      padding-top: var(--space-md);
    }

    /* Footer */
    .doc-footer {
      border-top: 2px solid var(--on-surface);
      padding-top: var(--space-lg);
      padding-bottom: var(--space-xl);
      display: grid;
      gap: var(--space-sm);
      color: var(--on-surface-variant);
      font-size: 0.875rem;
    }

    /* Responsive adjustments */
    @media (max-width: 900px) {
      .mast-grid,
      .concept-split,
      .concept-split-equal,
      .step-body {
        grid-template-columns: 1fr;
      }
      .quiz-scoreboard {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .quiz-nav-grid {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
    }

    @media (max-width: 640px) {
      .page-grid {
        padding: var(--space-md);
        gap: var(--space-xl);
      }
      .nav-rail {
        grid-template-columns: 1fr;
      }
      .mast-kpi-row {
        grid-template-columns: 1fr;
      }
      .step-row {
        grid-template-columns: 36px minmax(0, 1fr);
        gap: var(--space-sm);
      }
      .step-marker {
        width: 32px;
        height: 32px;
        font-size: 0.75rem;
      }
      .step-card, .layer, .panel-white, .quiz-card {
        padding: var(--space-md);
      }
      .quiz-scoreboard {
        grid-template-columns: 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>
</head>
<body>
  <div class="page-grid">

    <!-- MASTHEAD -->
    <header class="mast">
      <div class="mast-meta">
        <span class="mono-label">GUIA INTERACTIVA D'ARQUITECTURA DE PROGRAMARI · PHP 8+ / SYMFONY / DOCTRINE</span>
        <span class="pill-tag">DOMAIN-DRIVEN DESIGN TÀCTIC</span>
      </div>

      <div class="mast-grid">
        <div style="display: grid; gap: var(--space-md);">
          <h1 class="display-title">Domain-Driven Design en <strong>PHP</strong></h1>
          <p class="prose">
            Guia pràctica i interactiva per dominar el desacoblament, la protecció d'invariants de negoci i el disseny d'aplicacions independents del framework: des de l'Arquitectura Hexagonal i els Domain Events fins als DTOs, Factories, Test Data Builders i una metodologia completa pas a pas.
          </p>
        </div>

        <aside class="mast-summary" aria-label="Resum del recorregut">
          <span class="mono-label">ABAST DE LA GUIA</span>
          <div class="mast-kpi-row">
            <div>
              <div class="kpi-value">4</div>
              <span class="mono-label">Pilars Tàctics</span>
            </div>
            <div>
              <div class="kpi-value">6</div>
              <span class="mono-label">Passos de Disseny</span>
            </div>
            <div>
              <div class="kpi-value">10</div>
              <span class="mono-label">Reptes de Test</span>
            </div>
          </div>
          <p class="prose-muted" style="font-size: 0.875rem;">
            El progrés dels passos i les respostes del qüestionari es desen automàticament durant la sessió.
          </p>
        </aside>
      </div>

      <!-- IN-FLOW NAVIGATION RAIL -->
      <nav class="nav-rail" aria-label="Seccions principals">
        <a class="nav-link is-active" href="#seccio-1">
          <span class="mono-label">SECCIÓ 01</span>
          <span class="nav-link-title">Itinerari Visual de Conceptes Clau</span>
        </a>
        <a class="nav-link" href="#seccio-2">
          <span class="mono-label">SECCIÓ 02</span>
          <span class="nav-link-title">Metodologia Pas a Pas: Del Domini al Codi</span>
        </a>
        <a class="nav-link" href="#seccio-3">
          <span class="mono-label">SECCIÓ 03</span>
          <span class="nav-link-title">Qüestionari Final Interactiu (10 Preguntes)</span>
        </a>
      </nav>
    </header>

    <!-- =================================================================== -->
    <!-- SECCIÓ 1: ITINERARI VISUAL DE CONCEPTES CLAU                        -->
    <!-- =================================================================== -->
    <section id="seccio-1" class="section-block" aria-labelledby="titol-seccio-1">
      <div class="section-head">
        <span class="mono-label">01 · FONAMENTS TÀCTICS I ARQUITECTURA</span>
        <h2 id="titol-seccio-1" class="section-title">Itinerari Visual de <strong>Conceptes Clau</strong></h2>
        <p class="prose-muted">
          Exploreu els quatre mecanismes fonamentals que permeten mantenir el nucli de negoci pur, testable i desacoblat d'eines externes com Symfony, Laravel, Doctrine o cues de missatgeria.
        </p>
      </div>

      <!-- 1.1 ARQUITECTURA HEXAGONAL -->
      <article class="concept-module" aria-labelledby="titol-hexagonal">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: var(--space-sm);">
          <div>
            <span class="mono-label">01.1 · PORTS I ADAPTADORS</span>
            <h3 id="titol-hexagonal" class="subhead" style="margin-top: var(--space-xs);">Arquitectura Hexagonal: Simetria i Regla de Dependència</h3>
          </div>
          <span class="pill-tag">AGNOSTICISME DE FRAMEWORK</span>
        </div>

        <p class="prose">
          Proposada per Alistair Cockburn el 2005, l'Arquitectura Hexagonal col·loca el <strong>Domini</strong> i la capa d'<strong>Aplicació</strong> al centre i tracta qualsevol tecnologia externa (web, CLI, bases de dades, cues) com un detall perifèric intercanviable. La clau és la <strong>Regla de Dependència</strong>: el codi font només pot apuntar cap endins. Gràcies al <strong>Principi d'Inversió de Dependències (DIP)</strong>, el domini defineix <em>Ports</em> (interfícies PHP) i la infraestructura aporta els <em>Adaptadors</em>.
        </p>

        <div class="concept-split">
          <!-- Interactive SVG + Controls -->
          <div class="diagram-box">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-sm);">
              <span class="mono-label">EXPLORADOR INTERACTIU · FEU CLIC A QUALSEVOL NODE</span>
            </div>

            <div class="form-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
              <div class="field-group">
                <label class="field-label" for="hex-driving">Adaptador Primari (Entrada)</label>
                <select id="hex-driving" class="field-select" onchange="updateHexDiagram()">
                  <option value="http">HTTP Controller (Symfony API)</option>
                  <option value="cli">Consola CLI (Symfony Console)</option>
                </select>
              </div>
              <div class="field-group">
                <label class="field-label" for="hex-driven">Adaptador Secundari (Persistència)</label>
                <select id="hex-driven" class="field-select" onchange="updateHexDiagram()">
                  <option value="doctrine">Doctrine ORM (MySQL + XML)</option>
                  <option value="redis">Redis (Persistència Clau-Valor)</option>
                  <option value="inmemory">InMemory (Tests Unitaris)</option>
                </select>
              </div>
            </div>

            <!-- Interactive SVG Hexagonal Schematic -->
            <svg class="diagram-svg" viewBox="0 0 680 330" role="img" aria-label="Diagrama interactiu d'Arquitectura Hexagonal amb Ports i Adaptadors">
              <defs>
                <marker id="arrow-in" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--primary)" />
                </marker>
                <marker id="arrow-dip" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--tertiary)" />
                </marker>
              </defs>

              <!-- Background Zone Labels -->
              <rect x="6" y="10" width="160" height="310" fill="var(--surface-container)" stroke="var(--outline-variant)" stroke-width="1" />
              <text x="16" y="30" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="500">COST·DRIVING (PRIMARI)</text>

              <rect x="514" y="10" width="160" height="310" fill="var(--surface-container)" stroke="var(--outline-variant)" stroke-width="1" />
              <text x="524" y="30" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="500">COST·DRIVEN (SECUNDARI)</text>

              <!-- Outer Hexagon (Application Layer) -->
              <polygon points="340,18 486,86 486,244 340,312 194,244 194,86" fill="var(--surface-container-low)" stroke="var(--on-surface)" stroke-width="2" />
              <text x="340" y="46" text-anchor="middle" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">CAPA D'APLICACIÓ (CASOS D'ÚS + DTOS)</text>

              <!-- Inner Hexagon (Domain Core) -->
              <polygon points="340,78 442,124 442,208 340,254 238,208 238,124" fill="var(--background)" stroke="var(--primary)" stroke-width="2" />
              <text x="340" y="108" text-anchor="middle" fill="var(--primary)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">NUCLI DE DOMINI PUR</text>

              <!-- Connectors -->
              <line x1="156" y1="165" x2="194" y2="165" stroke="var(--primary)" stroke-width="2" marker-end="url(#arrow-in)" />
              <line x1="238" y1="165" x2="254" y2="165" stroke="var(--primary)" stroke-width="2" marker-end="url(#arrow-in)" />
              <!-- DIP Arrow: Adapter points INWARDS to Port -->
              <line x1="524" y1="165" x2="450" y2="165" stroke="var(--tertiary)" stroke-width="2" stroke-dasharray="4 3" marker-end="url(#arrow-dip)" />
              <text x="488" y="152" text-anchor="middle" fill="var(--tertiary)" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="600">implements</text>

              <!-- Node 1: Driving Adapter -->
              <g class="svg-node is-selected" id="hex-node-driving" onclick="selectHexNode('driving')" tabindex="0" role="button" aria-label="Inspeccionar Adaptador Primari">
                <rect x="16" y="125" width="140" height="80" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
                <text x="86" y="152" text-anchor="middle" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="9">ADAPTADOR PRIMARI</text>
                <text id="hex-svg-driving-label" x="86" y="172" text-anchor="middle" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="12" font-weight="600">Symfony API</text>
                <text x="86" y="190" text-anchor="middle" fill="var(--primary)" font-family="IBM Plex Mono, monospace" font-size="9">Construeix Request DTO</text>
              </g>

              <!-- Node 2: Application Service -->
              <g class="svg-node" id="hex-node-app" onclick="selectHexNode('app')" tabindex="0" role="button" aria-label="Inspeccionar Servei d'Aplicació">
                <rect x="198" y="254" width="284" height="42" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
                <text x="340" y="272" text-anchor="middle" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="11" font-weight="600">RegisterVideoService (UseCase)</text>
                <text x="340" y="287" text-anchor="middle" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="9">Orquestra transacció · Retorna DTO</text>
              </g>

              <!-- Node 3: Domain Model -->
              <g class="svg-node" id="hex-node-domain" onclick="selectHexNode('domain')" tabindex="0" role="button" aria-label="Inspeccionar Model de Domini">
                <rect x="256" y="122" width="168" height="58" fill="var(--surface-container-low)" stroke="var(--primary)" stroke-width="1.5" />
                <text x="340" y="144" text-anchor="middle" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="12" font-weight="600">Video &amp; VideoId</text>
                <text x="340" y="162" text-anchor="middle" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="9">0 dependències externes</text>
              </g>

              <!-- Node 4: Domain Port (Repository Interface) -->
              <g class="svg-node" id="hex-node-port" onclick="selectHexNode('port')" tabindex="0" role="button" aria-label="Inspeccionar Port de Repositori">
                <rect x="268" y="190" width="144" height="46" fill="var(--background)" stroke="var(--tertiary)" stroke-width="1.5" />
                <text x="340" y="209" text-anchor="middle" fill="var(--tertiary)" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="600">PORT (INTERFÍCIE)</text>
                <text x="340" y="225" text-anchor="middle" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="11" font-weight="600">VideoRepository</text>
              </g>

              <!-- Node 5: Driven Adapter -->
              <g class="svg-node" id="hex-node-driven" onclick="selectHexNode('driven')" tabindex="0" role="button" aria-label="Inspeccionar Adaptador Secundari">
                <rect x="524" y="125" width="140" height="80" fill="var(--background)" stroke="var(--tertiary)" stroke-width="1.5" />
                <text x="594" y="152" text-anchor="middle" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="9">ADAPTADOR SECUNDARI</text>
                <text id="hex-svg-driven-label" x="594" y="172" text-anchor="middle" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="12" font-weight="600">Doctrine ORM</text>
                <text x="594" y="190" text-anchor="middle" fill="var(--tertiary)" font-family="IBM Plex Mono, monospace" font-size="9">Implementa el Port</text>
              </g>
            </svg>

            <div class="notice" id="hex-inspector-note">
              <span class="mono-label">INSPECCIÓ ACTIVA: ADAPTADOR PRIMARI</span>
              <p class="prose" id="hex-inspector-desc" style="font-size: 0.92rem;">
                El controlador de Symfony no hereta d'AbstractController ni conté lògica de negoci. Tradueix la petició HTTP a un Request DTO amb primitius i invoca el Servei d'Aplicació.
              </p>
            </div>
          </div>

          <!-- Live Code Inspector -->
          <div style="display: grid; gap: var(--space-md);">
            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename" id="hex-code-file">src/VideoLibrary/Api/Infrastructure/Ui/Http/Controller/PostVideoController.php</span>
                <button type="button" class="copy-btn" onclick="copyCode('hex-code-body', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="hex-code-body"></pre>
            </div>

            <div class="layer">
              <span class="mono-label">SIMETRIA I AGNOSTICISME DE FRAMEWORK</span>
              <div class="ruled-list" style="font-size: 0.9rem;">
                <div><strong>Simetria:</strong> Tant una petició HTTP (Symfony/Laravel) com una comanda CLI o un consumidor de RabbitMQ són adaptadors simètrics que entren pel mateix cas d'ús sense duplicar regles de negoci.</div>
                <div><strong>Agnosticisme real:</strong> Si demà migrem de Symfony 6 a Laravel o de MySQL/Doctrine a Redis, el 100% de les classes dins <span class="inline-code">Domain/</span> i <span class="inline-code">Application/</span> romanen intactes.</div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <!-- 1.2 DOMAIN EVENTS I NOTIFICACIÓ DE CANVIS -->
      <article class="concept-module" aria-labelledby="titol-events">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: var(--space-sm);">
          <div>
            <span class="mono-label">01.2 · INVERSIÓ DE CONTROL I CONSISTÈNCIA EVENTUAL</span>
            <h3 id="titol-events" class="subhead" style="margin-top: var(--space-xs);">Domain Events: Desacoblament, Event Store i Projeccions</h3>
          </div>
          <span class="pill-tag">CQRS &amp; MISSATGERIA</span>
        </div>

        <p class="prose">
          Un <strong>Domain Event</strong> representa un fet rellevant que ja ha passat dins el domini (sempre en passat i en Llenguatge Ubiquu, com <span class="inline-code">VideoWasPublished</span> o <span class="inline-code">UserRegistered</span>). En lloc que una entitat o servei conegui directament altres mòduls (enviament de correus, estadístiques o actualitzacions de lectura), publica un esdeveniment immutable i aplica <strong>Inversió de Control (IoC)</strong>.
        </p>

        <!-- Interactive Event Pipeline -->
        <div class="layer">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-md);">
            <span class="mono-label">SEQÜÈNCIA DE NOTIFICACIÓ · SELECCIONEU UNA FASE PER TRAÇAR EL FLUX</span>
            <div style="display: flex; gap: var(--space-sm);">
              <button type="button" class="btn btn-ghost" onclick="stepEventFlow(-1)">Pas anterior</button>
              <button type="button" class="btn btn-primary" onclick="stepEventFlow(1)">Pas següent</button>
            </div>
          </div>

          <svg class="diagram-svg" viewBox="0 0 880 120" role="img" aria-label="Flux seqüencial de Domain Events">
            <defs>
              <marker id="ev-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--on-surface)" />
              </marker>
            </defs>

            <!-- Connectors -->
            <line x1="202" y1="60" x2="232" y2="60" stroke="var(--on-surface)" stroke-width="2" marker-end="url(#ev-arrow)" />
            <line x1="422" y1="60" x2="452" y2="60" stroke="var(--on-surface)" stroke-width="2" marker-end="url(#ev-arrow)" />
            <line x1="642" y1="60" x2="672" y2="60" stroke="var(--on-surface)" stroke-width="2" marker-end="url(#ev-arrow)" />

            <g class="svg-node is-selected" id="ev-node-0" onclick="selectEventStage(0)" tabindex="0" role="button">
              <rect x="12" y="18" width="190" height="84" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
              <text x="24" y="40" fill="var(--primary)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">FASE 01 · DOMINI</text>
              <text x="24" y="62" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="13" font-weight="600">Aggregate Root</text>
              <text x="24" y="82" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10">publish(VideoPublished)</text>
            </g>

            <g class="svg-node" id="ev-node-1" onclick="selectEventStage(1)" tabindex="0" role="button">
              <rect x="232" y="18" width="190" height="84" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
              <text x="244" y="40" fill="var(--primary)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">FASE 02 · INVERSIÓ IoC</text>
              <text x="244" y="62" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="13" font-weight="600">Event Publisher</text>
              <text x="244" y="82" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10">Notifica Subscribers</text>
            </g>

            <g class="svg-node" id="ev-node-2" onclick="selectEventStage(2)" tabindex="0" role="button">
              <rect x="452" y="18" width="190" height="84" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
              <text x="464" y="40" fill="var(--tertiary)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">FASE 03 · TRANSACCIÓ</text>
              <text x="464" y="62" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="13" font-weight="600">Doctrine EventStore</text>
              <text x="464" y="82" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10">Desa StoredEvent (JSON)</text>
            </g>

            <g class="svg-node" id="ev-node-3" onclick="selectEventStage(3)" tabindex="0" role="button">
              <rect x="672" y="18" width="196" height="84" fill="var(--background)" stroke="var(--on-surface)" stroke-width="1.5" />
              <text x="684" y="40" fill="var(--data-2)" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600">FASE 04 · EVENTUAL</text>
              <text x="684" y="62" fill="var(--on-surface)" font-family="IBM Plex Sans, sans-serif" font-size="13" font-weight="600">Projeccions &amp; RabbitMQ</text>
              <text x="684" y="82" fill="var(--on-surface-variant)" font-family="IBM Plex Mono, monospace" font-size="10">Read Model + Contextos</text>
            </g>
          </svg>

          <div class="concept-split">
            <div class="panel-white">
              <span class="mono-label" id="ev-stage-tag">FASE 01 · PUBLICACIÓ DES DE L'ENTITAT</span>
              <h4 class="subhead" id="ev-stage-title">L'Aggregate Root registra i emet el fet immutable</h4>
              <p class="prose" id="ev-stage-desc" style="font-size: 0.94rem;">
                Quan l'usuari publica un vídeo o un article, el mètode de negoci modifica l'estat intern i publica un esdeveniment immutable amb les dades mínimes necessàries (identificador i data <span class="inline-code">occurredOn</span>). L'entitat no sap qui escoltarà aquest missatge.
              </p>
              <div class="notice notice--warning" style="font-size: 0.875rem;">
                <strong>Atenció a la hidratació:</strong> Quan un repositori reconstrueix l'entitat des de la base de dades, mai no s'ha de tornar a disparar l'esdeveniment de creació.
              </div>
            </div>

            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename" id="ev-code-file">src/VideoLibrary/Api/Domain/Model/Video/Video.php</span>
                <button type="button" class="copy-btn" onclick="copyCode('ev-code-body', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="ev-code-body"></pre>
            </div>
          </div>
        </div>
      </article>

      <!-- 1.3 DTOs I ESTRATÈGIES DE SERIALITZACIÓ -->
      <article class="concept-module" aria-labelledby="titol-dtos">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: var(--space-sm);">
          <div>
            <span class="mono-label">01.3 · FRONTERA D'APLICACIÓ I DADES</span>
            <h3 id="titol-dtos" class="subhead" style="margin-top: var(--space-xs);">DTOs (Data Transfer Objects) i Estratègies de Serialització</h3>
          </div>
          <span class="pill-tag">NOMÉS PRIMITIUS · ZERO LÒGICA</span>
        </div>

        <p class="prose">
          Si un Servei d'Aplicació retornés directament una Entitat del Domini (com <span class="inline-code">User</span> o <span class="inline-code">Video</span>) cap al controlador, exposaria mètodes de negoci a la capa de presentació i permetria mutacions fora de les fronteres transaccionals. Els <strong>DTOs</strong> actuen com a contractes estèrils d'entrada (<span class="inline-code">Request</span>) i sortida (<span class="inline-code">Response/DTO</span>) formats exclusivament per <strong>tipus primitius</strong>, sense lògica de negoci i fàcils de serialitzar.
        </p>

        <div class="concept-split-equal">
          <!-- Boundary Comparison Toggle -->
          <div class="layer">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: var(--space-sm);">
              <span class="mono-label">PER QUÈ CALEN ELS DTOS?</span>
            </div>
            <div class="tab-bar" role="tablist" aria-label="Comparativa d'ús de DTO">
              <button type="button" class="tab-btn is-active" id="dto-tab-good" onclick="setDtoMode('good')">Bones pràctiques: Request &amp; Response DTO</button>
              <button type="button" class="tab-btn" id="dto-tab-bad" onclick="setDtoMode('bad')">Anti-patró: Retornar l'Entitat al Controller</button>
            </div>

            <div id="dto-mode-notice" class="notice notice--success" style="font-size: 0.9rem;">
              <strong>Aïllament garantit:</strong> El controlador construeix un <span class="inline-code">SignUpUserRequest</span> amb primitius i rep un <span class="inline-code">UserDTO</span> de només lectura. El domini pot evolucionar lliurement sense trencar les vistes ni l'API JSON.
            </div>

            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename" id="dto-code-file">Application/Service/User/SignUpUserRequest.php &amp; UserDTO.php</span>
                <button type="button" class="copy-btn" onclick="copyCode('dto-code-body', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="dto-code-body"></pre>
            </div>
          </div>

          <!-- Serialization Strategy Comparator -->
          <div class="layer">
            <span class="mono-label">ESTRATÈGIES DE SERIALITZACIÓ: NATIVA PHP VS. JMS SERIALIZER</span>
            <div class="tab-bar" role="tablist" aria-label="Estratègies de serialització">
              <button type="button" class="tab-btn is-active" id="ser-tab-jms" onclick="setSerMode('jms')">JMS Serializer (JSON / XML)</button>
              <button type="button" class="tab-btn" id="ser-tab-native" onclick="setSerMode('native')">Serialització nativa PHP (serialize)</button>
            </div>

            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename" id="ser-code-file">Sortida serialitzada (EventStore / RabbitMQ / API)</span>
                <button type="button" class="copy-btn" onclick="copyCode('ser-code-body', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="ser-code-body"></pre>
            </div>

            <div class="data-table-wrap">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Criteri</th>
                    <th>Serialització Nativa PHP</th>
                    <th>JMS Serializer (JSON)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Refactorització de classes</strong></td>
                    <td><span class="pill-tag pill-tag--error">Fràgil</span> Acobla el namespace intern dins la BD.</td>
                    <td><span class="pill-tag pill-tag--success">Resilient</span> Format agnòstic i versionable.</td>
                  </tr>
                  <tr>
                    <td><strong>Interoperabilitat</strong></td>
                    <td>Només llegible per PHP.</td>
                    <td>Compatible amb cues (RabbitMQ) i microserveis d'altres llenguatges.</td>
                  </tr>
                  <tr>
                    <td><strong>Consultes SQL / JSONB</strong></td>
                    <td>Impossible de consultar per camps interns.</td>
                    <td>Indexable amb JSON/JSONB a MySQL i PostgreSQL.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </article>

      <!-- 1.4 FACTORIES I TEST DATA BUILDERS -->
      <article class="concept-module" aria-labelledby="titol-factories">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: var(--space-sm);">
          <div>
            <span class="mono-label">01.4 · CREACIÓ SEGURA I PATRONS DE TESTING</span>
            <h3 id="titol-factories" class="subhead" style="margin-top: var(--space-xs);">Factories d'Invariants i Test Data Builders</h3>
          </div>
          <span class="pill-tag">FACTORY METHOD · ABSTRACT FACTORY · BUILDER</span>
        </div>

        <p class="prose">
          L'operador <span class="inline-code">new</span> escampat pel codi oculta la intenció de negoci i pot deixar objectes en estats invàlids. Les <strong>Factories</strong> protegeixen invariants en temps de creació, mentre que en els tests el patró <strong>Test Data Builder</strong> substitueix la rigidesa d'un <strong>Object Mother</strong> per una API fluida amb valors per defecte.
        </p>

        <div class="concept-split">
          <!-- Interactive Builder + Pattern Selector -->
          <div class="layer">
            <span class="mono-label">PATRONS DE CREACIÓ EN PRODUCCIÓ I TESTING</span>
            <div class="tab-bar" role="tablist" aria-label="Selecció de patró de fàbrica">
              <button type="button" class="tab-btn is-active" id="fac-tab-root" onclick="setFactoryTab('root')">Factory Method (Aggregate)</button>
              <button type="button" class="tab-btn" id="fac-tab-abstract" onclick="setFactoryTab('abstract')">Abstract Factory</button>
              <button type="button" class="tab-btn" id="fac-tab-mother" onclick="setFactoryTab('mother')">Object Mother vs Builder</button>
            </div>

            <div id="fac-explanation" class="panel-white" style="font-size: 0.92rem;"></div>

            <!-- Interactive Live Test Data Builder Playground -->
            <div class="layer-nested">
              <span class="mono-label">CONFIGURADOR EN DIRECTE · VIDEO TEST DATA BUILDER</span>
              <div class="form-grid">
                <div class="field-group">
                  <label class="field-label" for="b-title">Títol del Vídeo</label>
                  <input id="b-title" class="field-input" type="text" value="Introducció a DDD en PHP" oninput="updateBuilderCode()">
                </div>
                <div class="field-group">
                  <label class="field-label" for="b-duration">Durada (segons)</label>
                  <input id="b-duration" class="field-input" type="number" min="10" max="7200" value="480" oninput="updateBuilderCode()">
                </div>
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: var(--space-md);">
                <label class="check-row">
                  <input type="checkbox" id="b-custom-author" onchange="updateBuilderCode()">
                  <span>Sobreescriure autor (<span class="inline-code">withAuthor</span>)</span>
                </label>
                <label class="check-row">
                  <input type="checkbox" id="b-published" checked onchange="updateBuilderCode()">
                  <span>Estat publicat (<span class="inline-code">published()</span>)</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Code Output -->
          <div style="display: grid; gap: var(--space-md);">
            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename" id="fac-code-file">Domain/Model/User/User.php (Factory Method)</span>
                <button type="button" class="copy-btn" onclick="copyCode('fac-code-body', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="fac-code-body"></pre>
            </div>

            <div class="code-shell">
              <div class="code-bar">
                <span class="code-filename">tests/VideoLibrary/Api/Domain/Model/Video/VideoBuilderTest.php (Generat en directe)</span>
                <button type="button" class="copy-btn" onclick="copyCode('builder-live-code', this)">Copia el codi</button>
              </div>
              <pre class="code-pre" id="builder-live-code"></pre>
            </div>
          </div>
        </div>
      </article>
    </section>

    <!-- =================================================================== -->
    <!-- SECCIÓ 2: METODOLOGIA PAS A PAS                                     -->
    <!-- =================================================================== -->
    <section id="seccio-2" class="section-block" aria-labelledby="titol-seccio-2">
      <div class="section-head">
        <span class="mono-label">02 · ITINERARI SEQÜENCIAL DE DISSENY</span>
        <h2 id="titol-seccio-2" class="section-title">Metodologia Pas a Pas: <strong>Del Problema de Domini al Codi PHP</strong></h2>
        <p class="prose-muted">
          Com traduir un problema real de negoci —per exemple, gestionar el registre i publicació de vídeos a una plataforma <span class="inline-code">VideoLibrary</span>— a una arquitectura neta en PHP. Cada pas explica <strong>què</strong> es construeix i <strong>per què</strong> es pren cada decisió.
        </p>
      </div>

      <!-- Progress Tracker Bar -->
      <div class="roadmap-progress-bar">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-sm);">
          <span class="mono-label" id="roadmap-status-text">PROGRÉS DE L'ITINERARI: 0 DE 6 PASSOS COMPLETATS</span>
          <span class="pill-tag" id="roadmap-pct-badge">0%</span>
        </div>
        <div class="progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="6" aria-valuenow="0" id="roadmap-progressbar">
          <div class="progress-fill" id="roadmap-fill"></div>
        </div>
      </div>

      <!-- Sequential 6-Step Flow -->
      <div class="roadmap-steps" id="roadmap-container">

        <!-- PAS 1 -->
        <div class="step-row" data-step="1" id="step-row-1">
          <div class="step-rail">
            <div class="step-marker">01</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 01 · FASE ESTRATÈGICA</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Anàlisi del Negoci i Llenguatge Ubiquu (Ubiquitous Language)</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(1)" id="step-btn-1">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Cal assegurar que desenvolupadors i experts de negoci parlin exactament el mateix idioma per evitar traduccions mentals o pèrdua de requisits. Si el negoci parla de <em>Publicar un Vídeo</em> en un <em>Bounded Context</em> de catàleg i d'<em>Estadístiques de Visualització</em> en un altre, el codi i les carpetes han de reflectir aquests termes exactes.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>Eina clau:</strong> Tallers d'<em>Event Storming</em> per identificar comandaments, esdeveniments i límits de context.</div>
                  <div><strong>Organització PSR-4:</strong> Substituir el genèric <span class="inline-code">App\</span> per mòduls del domini com <span class="inline-code">VideoLibrary\Api\</span> i <span class="inline-code">VideoLibrary\Stats\</span>.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">composer.json &amp; Glossari de Domini (PSR-4)</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step1-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step1-code"></pre>
              </div>
            </div>
          </article>
        </div>

        <!-- PAS 2 -->
        <div class="step-row" data-step="2" id="step-row-2">
          <div class="step-rail">
            <div class="step-marker">02</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 02 · NUCLI DE DOMINI</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Modelatge del Domini (Aggregates, Entities i Value Objects)</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(2)" id="step-btn-2">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Per protegir les invariants de negoci i garantir que cap objecte pugui existir en un estat invàlid. En lloc de models anèmics plens de <em>setters</em> públics, creem <strong>Value Objects</strong> immutables que s'autovaliden (<span class="inline-code">VideoId</span>, <span class="inline-code">VideoDuration</span>) i <strong>Entities / Aggregate Roots</strong> tancats amb mètodes de comportament rics.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>Immutabilitat per defecte:</strong> Si una propietat canvia, es valida a través d'un mètode de negoci semàntic (p. ex. <span class="inline-code">renameTitle()</span>) i es genera un esdeveniment.</div>
                  <div><strong>Aggregates petits:</strong> Referenciar altres Aggregates només pel seu <span class="inline-code">Id</span> (Value Object) i modificar un sol Aggregate per transacció.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">src/VideoLibrary/Api/Domain/Model/Video/Video.php</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step2-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step2-code"></pre>
              </div>
            </div>
          </article>
        </div>

        <!-- PAS 3 -->
        <div class="step-row" data-step="3" id="step-row-3">
          <div class="step-rail">
            <div class="step-marker">03</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 03 · CONTRACTE DE DOMINI</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Definició dels Ports i Interfícies de Repositori (Capa de Domini)</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(3)" id="step-btn-3">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Aplicar el <strong>Principi d'Inversió de Dependències (DIP)</strong> per mantenir el domini pur i independent de bases de dades o frameworks. El repositori no és un DAO carregat de consultes SQL arbitràries: actua com una col·lecció (<span class="inline-code">Set</span>) d'Aggregates orientada al domini.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>On viu la interfície:</strong> Dins <span class="inline-code">Domain\Model\Video\VideoRepository</span>, mai a Infraestructura.</div>
                  <div><strong>Mètodes nets:</strong> <span class="inline-code">save(Video $video)</span>, <span class="inline-code">byId(VideoId $id)</span> i <span class="inline-code">nextIdentity()</span>.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">src/VideoLibrary/Api/Domain/Model/Video/VideoRepository.php</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step3-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step3-code"></pre>
              </div>
            </div>
          </article>
        </div>

        <!-- PAS 4 -->
        <div class="step-row" data-step="4" id="step-row-4">
          <div class="step-rail">
            <div class="step-marker">04</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 04 · ORQUESTRACIÓ</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Disseny de Casos d'Ús / Serveis d'Aplicació i DTOs (Capa d'Aplicació)</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(4)" id="step-btn-4">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Mantenir la lògica d'orquestració prima, aïllada de la presentació i sense exposar entitats directament a l'exterior. El Servei d'Aplicació (o <em>Command Handler</em>) rep un <span class="inline-code">Request DTO</span> amb primitius, construeix els Value Objects, executa el domini, delega la persistència al port i retorna un <span class="inline-code">DTO</span> estèril.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>Transaccions transparents:</strong> Embolcallar l'execució amb un decorador com <span class="inline-code">TransactionalApplicationService</span> en lloc de posar <span class="inline-code">beginTransaction()</span> dins el domini.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">src/VideoLibrary/Api/Application/RegisterVideo/RegisterVideoService.php</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step4-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step4-code"></pre>
              </div>
            </div>
          </article>
        </div>

        <!-- PAS 5 -->
        <div class="step-row" data-step="5" id="step-row-5">
          <div class="step-rail">
            <div class="step-marker">05</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 05 · CONNEXIÓ TECNOLÒGICA</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Implementació dels Adaptadors d'Infraestructura i Factories (Capa d'Infraestructura)</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(5)" id="step-btn-5">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Connectar el domini a tecnologies reals (Doctrine amb mapatge XML extern, Redis, Controladors de Symfony/Laravel, rutes per context i contenidor d'Injecció de Dependències) sense contaminar el domini amb anotacions ni herències de framework.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>Principi de Responsabilitat Única (SRP):</strong> Un controlador per acció (<span class="inline-code">PostVideoController</span>) amb <span class="inline-code">__invoke()</span>.</div>
                  <div><strong>Mapatge desacoplat:</strong> Fitxers XML de Doctrine i YAML de serveis dins <span class="inline-code">Infrastructure/</span>.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">src/VideoLibrary/Api/Infrastructure/Persistence/Doctrine/DoctrineVideoRepository.php</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step5-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step5-code"></pre>
              </div>
            </div>
          </article>
        </div>

        <!-- PAS 6 -->
        <div class="step-row" data-step="6" id="step-row-6">
          <div class="step-rail">
            <div class="step-marker">06</div>
            <div class="step-connector" aria-hidden="true"></div>
          </div>
          <article class="step-card">
            <div class="step-header">
              <div>
                <span class="mono-label">PAS 06 · VERIFICACIÓ I QUALITAT</span>
                <h3 class="subhead" style="margin-top: var(--space-xs);">Estratègia de Testing amb TDD i Test Data Builders</h3>
              </div>
              <button type="button" class="btn btn-secondary" onclick="toggleStepDone(6)" id="step-btn-6">Marca com a comprès</button>
            </div>
            <div class="step-body">
              <div style="display: grid; gap: var(--space-md);">
                <div class="notice">
                  <span class="mono-label">PER QUÈ AQUEST PAS?</span>
                  <p class="prose" style="font-size: 0.93rem;">
                    Garantir la mantenibilitat, una velocitat d'execució instantània dels tests unitaris (sense aixecar MySQL ni xarxa gràcies als <span class="inline-code">InMemoryRepository</span> i <em>Spies</em>) i resistència total a refactoritzacions mitjançant <strong>TDD</strong> (cicle vermell–verd–refactor) i <strong>Test Data Builders</strong>.
                  </p>
                </div>
                <div class="ruled-list" style="font-size: 0.9rem;">
                  <div><strong>Tests d'invariants i excepcions:</strong> Verificar explícitament amb <span class="inline-code">expectException()</span> que els Value Objects i Aggregates rebutgen estats invàlids.</div>
                  <div><strong>Spies per a Domain Events:</strong> Comprovar que s'ha emès l'esdeveniment esperat mitjançant un <span class="inline-code">SpySubscriber</span>.</div>
                </div>
              </div>
              <div class="code-shell">
                <div class="code-bar">
                  <span class="code-filename">tests/VideoLibrary/Api/Application/RegisterVideo/RegisterVideoServiceTest.php</span>
                  <button type="button" class="copy-btn" onclick="copyCode('step6-code', this)">Copia el codi</button>
                </div>
                <pre class="code-pre" id="step6-code"></pre>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- =================================================================== -->
    <!-- SECCIÓ 3: QÜESTIONARI FINAL INTERACTIU (10 PREGUNTES)               -->
    <!-- =================================================================== -->
    <section id="seccio-3" class="section-block" aria-labelledby="titol-seccio-3">
      <div class="section-head">
        <span class="mono-label">03 · AVALUACIÓ DE CONEIXEMENTS</span>
        <h2 id="titol-seccio-3" class="section-title">Qüestionari Final Interactiu: <strong>10 Preguntes sobre DDD en PHP</strong></h2>
        <p class="prose-muted">
          Poseu a prova el vostre domini sobre Arquitectura Hexagonal, Domain Events, DTOs, Factories, Test Data Builders i la metodologia de disseny. Cada resposta ofereix retroalimentació immediata i una justificació detallada.
        </p>
      </div>

      <!-- Live Scoreboard -->
      <div class="quiz-scoreboard" aria-live="polite">
        <div class="score-tile is-lead">
          <span class="mono-label">PUNTUACIÓ EN DIRECTE</span>
          <div class="kpi-value" id="quiz-score-pct">0%</div>
        </div>
        <div class="score-tile">
          <span class="mono-label">ENCERTS</span>
          <div class="kpi-value" id="quiz-correct-count">0 / 10</div>
        </div>
        <div class="score-tile">
          <span class="mono-label">PREGUNTES RESPOSTES</span>
          <div class="kpi-value" id="quiz-answered-count">0 / 10</div>
        </div>
        <div class="score-tile">
          <span class="mono-label">DIAGNÒSTIC</span>
          <div class="kpi-value" id="quiz-rank-label" style="font-size: 1.125rem; font-weight: 500; padding-top: 0.25rem;">Pendent d'inici</div>
        </div>
      </div>

      <!-- Question Number Selector -->
      <div class="quiz-nav-grid" id="quiz-nav" aria-label="Navegació per les 10 preguntes"></div>

      <!-- Active Question Card -->
      <div class="quiz-card" id="quiz-card">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: var(--space-sm);">
          <span class="mono-label" id="quiz-q-meta">PREGUNTA 01 DE 10 · ARQUITECTURA HEXAGONAL</span>
          <span class="pill-tag pill-tag--neutral" id="quiz-q-status">Sense respondre</span>
        </div>

        <h3 class="subhead" id="quiz-q-text">Carregant pregunta…</h3>

        <div class="quiz-options" id="quiz-options-list"></div>

        <div id="quiz-feedback" class="notice" style="display: none;">
          <span class="mono-label" id="quiz-feedback-title">EXPLICACIÓ</span>
          <p class="prose" id="quiz-feedback-text" style="font-size: 0.94rem;"></p>
        </div>

        <div class="quiz-footer">
          <div style="display: flex; flex-wrap: wrap; gap: var(--space-sm);">
            <button type="button" class="btn btn-ghost" id="quiz-prev-btn" onclick="goQuiz(-1)">Anterior</button>
            <button type="button" class="btn btn-primary" id="quiz-next-btn" onclick="goQuiz(1)">Següent pregunta</button>
          </div>
          <button type="button" class="btn btn-secondary" id="quiz-reset-btn" onclick="resetQuizInline(this)">Reinicia el qüestionari</button>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="doc-footer">
      <span class="mono-label">FONTS I REFERÈNCIES TÈCNIQUES</span>
      <p class="prose-muted" style="font-size: 0.875rem;">
        Contingut elaborat a partir de l'obra <em>Domain-Driven Design in PHP: A Highly Practical Guide</em> (Carlos Buenosvinos, Christian Soronellas i Keyvan Akbary, Packt Publishing) i dels tutorials pràctics de DDD en PHP amb Docker i Symfony de Víctor García Merediz (sèrie sobre estructura modular, factoríes i unit testing amb TDD).
      </p>
    </footer>

  </div>

  <api-shim></api-shim>
  <script>
    // =========================================================================
    // SYNTAX HIGHLIGHTER FOR PHP / JSON / YAML
    // =========================================================================
    function escapeHtml(str) {
      return str
        .replace(/&/g, `&amp;`)
        .replace(/</g, `&lt;`)
        .replace(/>/g, `&gt;`);
    }

    function highlightCode(raw) {
      const escaped = escapeHtml(raw);
      const tokens = [];
      const tokenRegex = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|(\$[a-zA-Z_][a-zA-Z0-9_]*)|\b(namespace|use|final|abstract|class|interface|extends|implements|public|protected|private|static|function|return|new|throw|if|else|foreach|as|self|parent|readonly|void|string|int|bool|array|float|true|false|null)\b|\b([A-Z][a-zA-Z0-9_]*)\b|\b(\d+)\b/g;

      let lastIndex = 0;
      let out = ``;
      let match;

      while ((match = tokenRegex.exec(escaped)) !== null) {
        out += escaped.slice(lastIndex, match.index);
        if (match[1]) {
          out += `<span class="tok-com">${match[1]}</span>`;
        } else if (match[2]) {
          out += `<span class="tok-str">${match[2]}</span>`;
        } else if (match[3]) {
          out += `<span class="tok-var">${match[3]}</span>`;
        } else if (match[4]) {
          out += `<span class="tok-kw">${match[4]}</span>`;
        } else if (match[5]) {
          out += `<span class="tok-type">${match[5]}</span>`;
        } else if (match[6]) {
          out += `<span class="tok-num">${match[6]}</span>`;
        }
        lastIndex = tokenRegex.lastIndex;
      }
      out += escaped.slice(lastIndex);
      return out;
    }

    function renderCodeBlock(elementId, codeText) {
      const el = document.getElementById(elementId);
      if (!el) return;
      el.innerHTML = highlightCode(codeText);
    }

    function copyCode(elementId, btn) {
      const el = document.getElementById(elementId);
      if (!el || !btn) return;
      const text = el.textContent || ``;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
          const prev = btn.textContent;
          btn.textContent = `Copiat`;
          setTimeout(function() { btn.textContent = prev; }, 1400);
        }).catch(function() {
          btn.textContent = `Selecciona i Ctrl+C`;
          setTimeout(function() { btn.textContent = `Copia el codi`; }, 1800);
        });
      }
    }

    // =========================================================================
    // 1.1 HEXAGONAL ARCHITECTURE INTERACTIVE EXPLORER
    // =========================================================================
    let currentHexNode = `driving`;

    const hexData = {
      driving: {
        http: {
          file: `src/VideoLibrary/Api/Infrastructure/Ui/Http/Controller/PostVideoController.php`,
          title: `INSPECCIÓ ACTIVA: ADAPTADOR PRIMARI (HTTP SYMFONY)`,
          desc: `El controlador no estén AbstractController ni coneix Doctrine. Llegeix les dades HTTP, construeix un Request DTO amb primitius i executa el Servei d'Aplicació.`,
          code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Infrastructure\\Ui\\Http\\Controller;

use Symfony\\Component\\HttpFoundation\\JsonResponse;
use Symfony\\Component\\HttpFoundation\\Request;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoRequest;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoService;

final class PostVideoController
{
    public function __construct(
        private readonly RegisterVideoService $service
    ) {}

    public function __invoke(Request $httpRequest): JsonResponse
    {
        $payload = json_decode($httpRequest->getContent(), true);

        $dto = $this->service->execute(new RegisterVideoRequest(
            (string) ($payload['title'] ?? ''),
            (int) ($payload['duration'] ?? 0)
        ));

        return new JsonResponse(['id' => $dto->id, 'title' => $dto->title], 201);
    }
}`
        },
        cli: {
          file: `src/VideoLibrary/Api/Infrastructure/Ui/Console/RegisterVideoCommand.php`,
          title: `INSPECCIÓ ACTIVA: ADAPTADOR PRIMARI (SYMFONY CONSOLE)`,
          desc: `Gràcies a la simetria de l'Arquitectura Hexagonal, una comanda CLI reutilitza exactament el mateix Cas d'Ús i Request DTO que el controlador HTTP, sense duplicar lògica.`,
          code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Infrastructure\\Ui\\Console;

use Symfony\\Component\\Console\\Command\\Command;
use Symfony\\Component\\Console\\Input\\InputInterface;
use Symfony\\Component\\Console\\Output\\OutputInterface;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoRequest;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoService;

final class RegisterVideoCommand extends Command
{
    public function __construct(
        private readonly RegisterVideoService $service
    ) {
        parent::__construct('videolibrary:video:register');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $dto = $this->service->execute(new RegisterVideoRequest(
            (string) $input->getArgument('title'),
            (int) $input->getArgument('duration')
        ));

        $output->writeln('Registrat: ' . $dto->id);
        return Command::SUCCESS;
    }
}`
        }
      },
      app: {
        file: `src/VideoLibrary/Api/Application/RegisterVideo/RegisterVideoService.php`,
        title: `INSPECCIÓ ACTIVA: CAPA D'APLICACIÓ (SERVEI D'APLICACIÓ)`,
        desc: `És el punt de trobada entre el món exterior i el domini. Rep un Request DTO, invoca el port VideoRepository i retorna un DTO estèril. Mai no coneix Symfony ni SQL.`,
        code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Application\\RegisterVideo;

use VideoLibrary\\Api\\Domain\\Model\\Video\\Video;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoDuration;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoRepository;

final class RegisterVideoService
{
    public function __construct(
        private readonly VideoRepository $repository
    ) {}

    public function execute(RegisterVideoRequest $request): VideoDTO
    {
        $video = Video::register(
            $this->repository->nextIdentity(),
            $request->title,
            new VideoDuration($request->durationSeconds)
        );

        $this->repository->save($video);

        return VideoDTO::fromDomain($video);
    }
}`
      },
      domain: {
        file: `src/VideoLibrary/Api/Domain/Model/Video/VideoDuration.php`,
        title: `INSPECCIÓ ACTIVA: NUCLI DE DOMINI PUR`,
        desc: `Conté les regles de negoci i invariants (p. ex. la durada d'un vídeo ha de ser superior a 0 segons). Zero dependències de frameworks, ORM o llibreries externes.`,
        code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Domain\\Model\\Video;

final class VideoDuration
{
    private int $seconds;

    public function __construct(int $seconds)
    {
        if ($seconds <= 0) {
            throw new \\InvalidArgumentException('La durada ha de ser positiva.');
        }
        $this->seconds = $seconds;
    }

    public function seconds(): int
    {
        return $this->seconds;
    }

    public function equals(self $other): bool
    {
        return $this->seconds === $other->seconds;
    }
}`
      },
      port: {
        file: `src/VideoLibrary/Api/Domain/Model/Video/VideoRepository.php`,
        title: `INSPECCIÓ ACTIVA: PORT DE DOMINI (INTERFÍCIE)`,
        desc: `Aplica el Principi d'Inversió de Dependències (DIP): el domini declara el contracte que necessita i obliga la infraestructura a adaptar-se a ell.`,
        code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Domain\\Model\\Video;

interface VideoRepository
{
    public function nextIdentity(): VideoId;

    public function save(Video $video): void;

    public function byId(VideoId $id): ?Video;
}`
      },
      driven: {
        doctrine: {
          file: `src/VideoLibrary/Api/Infrastructure/Persistence/Doctrine/DoctrineVideoRepository.php`,
          title: `INSPECCIÓ ACTIVA: ADAPTADOR SECUNDARI (DOCTRINE ORM)`,
          desc: `Implementa el port VideoRepository usant l'EntityManager de Doctrine i mapatges XML externs, mantenint les entitats del domini lliures d'anotacions.`,
          code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Infrastructure\\Persistence\\Doctrine;

use Doctrine\\ORM\\EntityManagerInterface;
use VideoLibrary\\Api\\Domain\\Model\\Video\\Video;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoId;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoRepository;

final class DoctrineVideoRepository implements VideoRepository
{
    public function __construct(
        private readonly EntityManagerInterface $em
    ) {}

    public function nextIdentity(): VideoId
    {
        return VideoId::generate();
    }

    public function save(Video $video): void
    {
        $this->em->persist($video);
    }

    public function byId(VideoId $id): ?Video
    {
        return $this->em->find(Video::class, $id);
    }
}`
        },
        redis: {
          file: `src/VideoLibrary/Api/Infrastructure/Persistence/Redis/RedisVideoRepository.php`,
          title: `INSPECCIÓ ACTIVA: ADAPTADOR SECUNDARI (REDIS)`,
          desc: `Podem migrar la persistència de MySQL a Redis creant un nou adaptador que implementi VideoRepository, sense tocar ni una línia del Domini ni dels Casos d'Ús.`,
          code: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Infrastructure\\Persistence\\Redis;

use Predis\\ClientInterface;
use VideoLibrary\\Api\\Domain\\Model\\Video\\Video;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoId;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoRepository;

final class RedisVideoRepository implements VideoRepository
{
    public function __construct(
        private readonly ClientInterface $client
    ) {}

    public function nextIdentity(): VideoId
    {
        return VideoId::generate();
    }

    public function save(Video $video): void
    {
        $this->client->set('video:' . $video->id()->value(), json_encode([
            'id' => $video->id()->value(),
            'title' => $video->title(),
            'duration' => $video->duration()->seconds()
        ]));
    }

    public function byId(VideoId $id): ?Video
    {
        $raw = $this->client->get('video:' . $id->value());
        return $raw ? Video::reconstitute(json_decode($raw, true)) : null;
    }
}`
        },
        inmemory: {
          file: `tests/VideoLibrary/Api/Infrastructure/Persistence/InMemoryVideoRepository.php`,
          title: `INSPECCIÓ ACTIVA: ADAPTADOR SECUNDARI (IN-MEMORY PER A TESTS)`,
          desc: `Repositori ultraràpid basat en un array associatiu de PHP. Permet executar centenars de tests unitaris de Serveis d'Aplicació en mil·lisegons, sense base de dades.`,
          code: `<?php
declare(strict_types=1);

namespace Tests\\VideoLibrary\\Api\\Infrastructure\\Persistence;

use VideoLibrary\\Api\\Domain\\Model\\Video\\Video;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoId;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoRepository;

final class InMemoryVideoRepository implements VideoRepository
{
    /** @var array<string, Video> */
    private array $videos = [];

    public function nextIdentity(): VideoId
    {
        return VideoId::generate();
    }

    public function save(Video $video): void
    {
        $this->videos[$video->id()->value()] = $video;
    }

    public function byId(VideoId $id): ?Video
    {
        return $this->videos[$id->value()] ?? null;
    }
}`
        }
      }
    };

    function selectHexNode(nodeKey) {
      currentHexNode = nodeKey;
      const nodes = [`driving`, `app`, `domain`, `port`, `driven`];
      nodes.forEach(function(n) {
        const el = document.getElementById(`hex-node-` + n);
        if (el) {
          el.classList.toggle(`is-selected`, n === nodeKey);
        }
      });
      updateHexDiagram();
    }

    function updateHexDiagram() {
      const drivingSel = document.getElementById(`hex-driving`);
      const drivenSel = document.getElementById(`hex-driven`);
      const drivingVal = drivingSel ? drivingSel.value : `http`;
      const drivenVal = drivenSel ? drivenSel.value : `doctrine`;

      const svgDriving = document.getElementById(`hex-svg-driving-label`);
      const svgDriven = document.getElementById(`hex-svg-driven-label`);
      if (svgDriving) {
        svgDriving.textContent = drivingVal === `http` ? `Symfony API` : `Consola CLI`;
      }
      if (svgDriven) {
        svgDriven.textContent = drivenVal === `doctrine` ? `Doctrine ORM` : (drivenVal === `redis` ? `Redis Client` : `InMemory Array`);
      }

      let item;
      if (currentHexNode === `driving`) {
        item = hexData.driving[drivingVal];
      } else if (currentHexNode === `driven`) {
        item = hexData.driven[drivenVal];
      } else {
        item = hexData[currentHexNode];
      }

      if (!item) return;
      const titleEl = document.querySelector(`#hex-inspector-note .mono-label`);
      const descEl = document.getElementById(`hex-inspector-desc`);
      const fileEl = document.getElementById(`hex-code-file`);

      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.desc;
      if (fileEl) fileEl.textContent = item.file;
      renderCodeBlock(`hex-code-body`, item.code);
    }

    // =========================================================================
    // 1.2 DOMAIN EVENTS INTERACTIVE FLOW
    // =========================================================================
    let currentEventStage = 0;

    const eventStages = [
      {
        tag: `FASE 01 · PUBLICACIÓ DES DE L'ENTITAT`,
        title: `L'Aggregate Root registra i emet el fet immutable`,
        desc: `Quan l'usuari publica un vídeo, el mètode de negoci modifica l'estat intern i publica un esdeveniment immutable (VideoWasPublished) amb la seva identitat i timestamp. L'entitat no sap qui escoltarà aquest missatge.`,
        file: `src/VideoLibrary/Api/Domain/Model/Video/Video.php`,
        code: `<?php
final class Video
{
    public function publish(): void
    {
        if ($this->published) {
            return;
        }
        $this->published = true;
        $this->publishedAt = new \\DateTimeImmutable();

        DomainEventPublisher::instance()->publish(
            new VideoWasPublished($this->id, $this->publishedAt)
        );
    }
}`
      },
      {
        tag: `FASE 02 · INVERSIÓ DE CONTROL (IoC)`,
        title: `DomainEventPublisher notifica els subscriptors subscrits`,
        desc: `Mitjançant DomainEventPublisher i DomainEventSubscriber, qualsevol capa externa es pot subscriure sense modificar l'entitat. Això elimina l'acoblament directe amb serveis de correu, mètriques o auditoria.`,
        file: `src/VideoLibrary/Api/Domain/Event/DomainEventPublisher.php`,
        code: `<?php
final class DomainEventPublisher
{
    /** @var DomainEventSubscriber[] */
    private array $subscribers = [];

    public function subscribe(DomainEventSubscriber $subscriber): void
    {
        $this->subscribers[] = $subscriber;
    }

    public function publish(DomainEvent $event): void
    {
        foreach ($this->subscribers as $subscriber) {
            if ($subscriber->isSubscribedTo($event)) {
                $subscriber->handle($event);
            }
        }
    }
}`
      },
      {
        tag: `FASE 03 · PERSISTÈNCIA ATÒMICA A L'EVENT STORE`,
        title: `PersistDomainEventSubscriber desa l'esdeveniment dins la mateixa transacció`,
        desc: `Per evitar perdre esdeveniments si cau el broker de missatgeria, un subscriptor global els serialitza en JSON amb JMS Serializer i els desa com a StoredEvent dins la mateixa transacció SQL que l'Aggregate.`,
        file: `src/VideoLibrary/Api/Infrastructure/Notification/DoctrineEventStore.php`,
        code: `<?php
final class DoctrineEventStore extends EntityRepository implements EventStore
{
    public function append(DomainEvent $event): void
    {
        $storedEvent = new StoredEvent(
            get_class($event),
            $event->occurredOn(),
            $this->serializer->serialize($event, 'json')
        );

        // S'afegeix a la transacció activa del EntityManager (sense flush manual)
        $this->getEntityManager()->persist($storedEvent);
    }
}`
      },
      {
        tag: `FASE 04 · CONSISTÈNCIA EVENTUAL I PROJECCIONS`,
        title: `Actualització del Read Model (CQRS) i missatgeria cap a altres Bounded Contexts`,
        desc: `Un Projector actualitza taules desnormalitzades de lectura (1:1 amb la vista UI), mentre un worker envia missatges via RabbitMQ a altres Bounded Contexts (p. ex. Stats o Gamificació), exposant un endpoint REST /events com a suport.`,
        file: `src/VideoLibrary/Api/Infrastructure/Projection/VideoCatalogProjector.php`,
        code: `<?php
final class VideoCatalogProjector
{
    public function project(array $recordedEvents): void
    {
        foreach ($recordedEvents as $event) {
            if ($event instanceof VideoWasPublished) {
                $this->readDb->executeStatement(
                    'UPDATE read_video_catalog SET status = :st WHERE id = :id',
                    ['st' => 'published', 'id' => $event->videoId()->value()]
                );
            }
        }
    }
}`
      }
    ];

    function selectEventStage(idx) {
      if (idx < 0 || idx >= eventStages.length) return;
      currentEventStage = idx;
      for (let i = 0; i < eventStages.length; i++) {
        const node = document.getElementById(`ev-node-` + i);
        if (node) node.classList.toggle(`is-selected`, i === idx);
      }
      const st = eventStages[idx];
      const tagEl = document.getElementById(`ev-stage-tag`);
      const titleEl = document.getElementById(`ev-stage-title`);
      const descEl = document.getElementById(`ev-stage-desc`);
      const fileEl = document.getElementById(`ev-code-file`);

      if (tagEl) tagEl.textContent = st.tag;
      if (titleEl) titleEl.textContent = st.title;
      if (descEl) descEl.textContent = st.desc;
      if (fileEl) fileEl.textContent = st.file;
      renderCodeBlock(`ev-code-body`, st.code);
    }

    function stepEventFlow(delta) {
      const next = (currentEventStage + delta + eventStages.length) % eventStages.length;
      selectEventStage(next);
    }

    // =========================================================================
    // 1.3 DTOS & SERIALIZATION INTERACTIVE COMPARATOR
    // =========================================================================
    const dtoExamples = {
      good: {
        noticeClass: `notice notice--success`,
        noticeHtml: `<strong>Aïllament garantit:</strong> El controlador construeix un <span class="inline-code">SignUpUserRequest</span> amb primitius i rep un <span class="inline-code">UserDTO</span> de només lectura. El domini pot evolucionar lliurement sense trencar les vistes ni l'API JSON.`,
        file: `Application/Service/User/SignUpUserRequest.php & UserDTO.php`,
        code: `<?php
// Request DTO: només tipus primitius, serialitzable, sense lògica
final class SignUpUserRequest
{
    public function __construct(
        public readonly string $email,
        public readonly string $password
    ) {}
}

// Response DTO: estructura estèril sense mètodes de negoci
final class UserDTO
{
    public readonly string $id;
    public readonly string $email;

    public function __construct(User $user)
    {
        $this->id = $user->id()->value();
        $this->email = $user->email();
    }
}`
      },
      bad: {
        noticeClass: `notice notice--error`,
        noticeHtml: `<strong>Risc de fuga de domini:</strong> Retornar l'Entitat <span class="inline-code">User</span> permet que el controlador invoqui mètodes mutadors fora de la transacció del Servei d'Aplicació i acobla la presentació a l'estructura interna del model.`,
        file: `ANTI-PATRÓ: Controller manipulant una Entitat de Domini`,
        code: `<?php
// ERROR: El Servei d'Aplicació retorna directament l'Aggregate Root
$user = $signUpUserService->execute(
    new SignUpUserRequest($email, $password)
);

// El controlador s'ha saltat la capa d'Aplicació i muta el domini!
$user->updateEmailAddress('shouldnotupdate@email.com');

// A més, qualsevol canvi de nom de mètode a User trencarà les plantilles Twig`
      }
    };

    const serExamples = {
      jms: {
        file: `Sortida JSON amb JMS Serializer (Recomanat a producció)`,
        code: `{
  "event_name": "video_library.api.video_was_published",
  "occurred_on": "2026-11-20T10:15:30+00:00",
  "payload": {
    "video_id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": 999,
    "currency": "USD"
  }
}`
      },
      native: {
        file: `Sortida amb PHP serialize() natiu (Acoblat a namespaces)`,
        code: `O:22:"Ddd\\Domain\\Model\\Money":2:{
  s:30:"Ddd\\Domain\\Model\\Moneyamount";i:999;
  s:32:"Ddd\\Domain\\Model\\Moneycurrency";
  O:25:"Ddd\\Domain\\Model\\Currency":1:{
    s:34:"Ddd\\Domain\\Model\\CurrencyisoCode";s:3:"USD";
  }
}
// Si canvies el namespace Ddd\\Domain\\Model\\Money,
// tots els registres antics fallaran en fer unserialize().`
      }
    };

    function setDtoMode(mode) {
      const item = dtoExamples[mode];
      if (!item) return;
      const tabGood = document.getElementById(`dto-tab-good`);
      const tabBad = document.getElementById(`dto-tab-bad`);
      if (tabGood) tabGood.classList.toggle(`is-active`, mode === `good`);
      if (tabBad) tabBad.classList.toggle(`is-active`, mode === `bad`);

      const notice = document.getElementById(`dto-mode-notice`);
      if (notice) {
        notice.className = item.noticeClass;
        notice.innerHTML = item.noticeHtml;
      }
      const fileEl = document.getElementById(`dto-code-file`);
      if (fileEl) fileEl.textContent = item.file;
      renderCodeBlock(`dto-code-body`, item.code);
    }

    function setSerMode(mode) {
      const item = serExamples[mode];
      if (!item) return;
      const tabJms = document.getElementById(`ser-tab-jms`);
      const tabNat = document.getElementById(`ser-tab-native`);
      if (tabJms) tabJms.classList.toggle(`is-active`, mode === `jms`);
      if (tabNat) tabNat.classList.toggle(`is-active`, mode === `native`);

      const fileEl = document.getElementById(`ser-code-file`);
      if (fileEl) fileEl.textContent = item.file;
      renderCodeBlock(`ser-code-body`, item.code);
    }

    // =========================================================================
    // 1.4 FACTORIES & LIVE TEST DATA BUILDER
    // =========================================================================
    const factoryTabs = {
      root: {
        html: `<p class="prose" style="font-size: 0.92rem;"><strong>Factory Method a l'Aggregate Root:</strong> En lloc que el client instanciï directament <span class="inline-code">new Wish($id, $userId, ...)</span> (on podria passar un <span class="inline-code">UserId</span> inexistent), l'Aggregate Root <span class="inline-code">User</span> exposa <span class="inline-code">makeWish()</span>. Així controla els invariants (p. ex. màxim 3 desitjos) i publica el Domain Event <span class="inline-code">WishMade</span>.</p>`,
        file: `Domain/Model/User/User.php (Factory Method)`,
        code: `<?php
final class User
{
    public function makeWish(WishId $wishId, string $address, string $content): Wish
    {
        if (count($this->wishes) >= 3) {
            throw new MaxNumberOfWishesExceededException();
        }

        $wish = new Wish($wishId, $this->id(), $address, $content);

        DomainEventPublisher::instance()->publish(
            new WishMade($wishId)
        );

        return $wish;
    }
}`
      },
      abstract: {
        html: `<p class="prose" style="font-size: 0.92rem;"><strong>Abstract Factory en Serveis:</strong> Quan Doctrine o la infraestructura requereixen una subclasse amb un <em>Surrogate ID</em> o una implementació específica d'un <span class="inline-code">Specification</span>, definim una interfície <span class="inline-code">UserFactory</span> al Domini i la implementem com a <span class="inline-code">DoctrineUserFactory</span> a Infraestructura (o mètodes estàtics semàntics <span class="inline-code">fromDomain</span> / <span class="inline-code">toInfrastructure</span>).</p>`,
        file: `Infrastructure/Domain/Model/User/DoctrineUserFactory.php`,
        code: `<?php
// Interfície definida a la capa de Domini
interface UserFactory
{
    public function build(UserId $userId, string $email, string $password): User;
}

// Implementació concreta a Infraestructura
final class DoctrineUserFactory implements UserFactory
{
    public function build(UserId $userId, string $email, string $password): User
    {
        return new DoctrineUser($userId, $email, $password);
    }
}`
      },
      mother: {
        html: `<p class="prose" style="font-size: 0.92rem;"><strong>Object Mother vs. Test Data Builder:</strong> Un <em>Object Mother</em> (<span class="inline-code">AuthorObjectMother::createOne()</span>) crea fixtures fixes, però quan apareixen múltiples variacions de test explota en desenes de mètodes rígids. El <strong>Test Data Builder</strong> resol això amb valors per defecte segurs i una interfície fluida (<span class="inline-code">withTitle()</span>, <span class="inline-code">withAuthor()</span>) que només modifica allò rellevant per a cada test.</p>`,
        file: `tests/Support/Builder/VideoBuilder.php`,
        code: `<?php
final class VideoBuilder
{
    private VideoId $id;
    private string $title = 'Default DDD Video';
    private VideoDuration $duration;
    private Author $author;
    private bool $published = false;

    private function __construct()
    {
        $this->id = VideoId::generate();
        $this->duration = new VideoDuration(120);
        $this->author = AuthorBuilder::anAuthor()->build();
    }

    public static function aVideo(): self { return new self(); }
    public function withTitle(string $title): self { $c = clone $this; $c->title = $title; return $c; }
    public function withDuration(int $sec): self { $c = clone $this; $c->duration = new VideoDuration($sec); return $c; }
    public function withAuthor(Author $a): self { $c = clone $this; $c->author = $a; return $c; }
    public function published(): self { $c = clone $this; $c->published = true; return $c; }

    public function build(): Video
    {
        $video = Video::register($this->id, $this->title, $this->duration, $this->author);
        if ($this->published) { $video->publish(); }
        return $video;
    }
}`
      }
    };

    function setFactoryTab(tab) {
      const item = factoryTabs[tab];
      if (!item) return;
      [`root`, `abstract`, `mother`].forEach(function(key) {
        const btn = document.getElementById(`fac-tab-` + key);
        if (btn) btn.classList.toggle(`is-active`, key === tab);
      });
      const expEl = document.getElementById(`fac-explanation`);
      const fileEl = document.getElementById(`fac-code-file`);
      if (expEl) expEl.innerHTML = item.html;
      if (fileEl) fileEl.textContent = item.file;
      renderCodeBlock(`fac-code-body`, item.code);
    }

    function updateBuilderCode() {
      const titleInput = document.getElementById(`b-title`);
      const durInput = document.getElementById(`b-duration`);
      const authorChk = document.getElementById(`b-custom-author`);
      const pubChk = document.getElementById(`b-published`);

      const safeTitle = (titleInput && titleInput.value.trim()) ? titleInput.value.replace(/'/g, `\\'`) : `Vídeo DDD`;
      const dur = (durInput && parseInt(durInput.value, 10) > 0) ? parseInt(durInput.value, 10) : 120;
      const withAuthor = authorChk ? authorChk.checked : false;
      const isPub = pubChk ? pubChk.checked : false;

      let lines = [
        `/** @test */`,
        `public function itShouldSatisfyDomainExpectation(): void`,
        `{`,
        `    $video = VideoBuilder::aVideo()`,
        `        ->withTitle('${safeTitle}')`,
        `        ->withDuration(${dur})`
      ];

      if (withAuthor) {
        lines.push(`        ->withAuthor(AuthorBuilder::anAuthor()->withUsername('carles')->build())`);
      }
      if (isPub) {
        lines.push(`        ->published()`);
      }
      lines.push(`        ->build();`);
      lines.push(``);
      lines.push(`    $this->assertSame(${dur}, $video->duration()->seconds());`);
      lines.push(isPub
        ? `    $this->assertTrue($video->isPublished());`
        : `    $this->assertFalse($video->isPublished());`
      );
      lines.push(`}`);

      renderCodeBlock(`builder-live-code`, lines.join(`\n`));
    }

    // =========================================================================
    // 2. STEP-BY-STEP METHODOLOGY CODE SNIPPETS & PROGRESS
    // =========================================================================
    const stepSnippets = {
      1: `{
  "autoload": {
    "psr-4": {
      "VideoLibrary\\\\": "src/VideoLibrary/"
    }
  },
  "autoload-dev": {
    "psr-4": {
      "Tests\\\\VideoLibrary\\\\": "tests/VideoLibrary/"
    }
  }
}
// Estructura de Bounded Contexts per Llenguatge Ubiquu:
// src/VideoLibrary/Api/Domain/Model/Video/
// src/VideoLibrary/Api/Application/RegisterVideo/
// src/VideoLibrary/Api/Infrastructure/Persistence/Doctrine/`,
      2: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Domain\\Model\\Video;

final class Video
{
    private bool $published = false;

    private function __construct(
        private readonly VideoId $id,
        private string $title,
        private readonly VideoDuration $duration
    ) {
        $this->assertValidTitle($title);
    }

    // Constructor semàntic en lloc de setters anèmics
    public static function register(VideoId $id, string $title, VideoDuration $duration): self
    {
        $video = new self($id, $title, $duration);
        DomainEventPublisher::instance()->publish(new VideoWasRegistered($id));
        return $video;
    }

    public function renameTitle(string $newTitle): void
    {
        $this->assertValidTitle($newTitle);
        $this->title = $newTitle;
    }

    private function assertValidTitle(string $title): void
    {
        if (trim($title) === '') {
            throw new \\InvalidArgumentException('El títol del vídeo no pot ser buit.');
        }
    }
}`,
      3: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Domain\\Model\\Video;

// Port ubicat dins la capa de Domini (cap referència a SQL o Doctrine)
interface VideoRepository
{
    public function nextIdentity(): VideoId;

    public function save(Video $video): void;

    public function byId(VideoId $id): ?Video;
}`,
      4: `<?php
declare(strict_types=1);

namespace VideoLibrary\\Api\\Application\\RegisterVideo;

use VideoLibrary\\Api\\Domain\\Model\\Video\\Video;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoDuration;
use VideoLibrary\\Api\\Domain\\Model\\Video\\VideoRepository;

final class RegisterVideoService implements ApplicationService
{
    public function __construct(private readonly VideoRepository $videos) {}

    public function execute(RegisterVideoRequest $request): VideoDTO
    {
        $video = Video::register(
            $this->videos->nextIdentity(),
            $request->title,
            new VideoDuration($request->durationSeconds)
        );

        $this->videos->save($video);

        // Retornem un DTO estèril; mai no retornem l'Entitat al Controller
        return new VideoDTO($video->id()->value(), $video->title(), $video->duration()->seconds());
    }
}`,
      5: `<!-- config/packages/doctrine/Video.orm.xml (Mapatge extern al Domini) -->
<doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping">
    <entity name="VideoLibrary\\Api\\Domain\\Model\\Video\\Video" table="videos">
        <id name="id" column="id" type="video_id" />
        <field name="title" column="title" type="string" length="255" />
        <embedded name="duration" class="VideoLibrary\\Api\\Domain\\Model\\Video\\VideoDuration" use-column-prefix="false" />
        <field name="published" column="published" type="boolean" />
    </entity>
</doctrine-mapping>`,
      6: `<?php
declare(strict_types=1);

namespace Tests\\VideoLibrary\\Api\\Application\\RegisterVideo;

use PHPUnit\\Framework\\TestCase;
use Tests\\VideoLibrary\\Api\\Infrastructure\\Persistence\\InMemoryVideoRepository;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoRequest;
use VideoLibrary\\Api\\Application\\RegisterVideo\\RegisterVideoService;

final class RegisterVideoServiceTest extends TestCase
{
    /** @test */
    public function itShouldRejectNegativeVideoDuration(): void
    {
        $this->expectException(\\InvalidArgumentException::class);

        $service = new RegisterVideoService(new InMemoryVideoRepository());
        $service->execute(new RegisterVideoRequest('DDD en PHP', -10));
    }

    /** @test */
    public function itShouldRegisterAndPersistAValidVideo(): void
    {
        $repository = new InMemoryVideoRepository();
        $service = new RegisterVideoService($repository);

        $dto = $service->execute(new RegisterVideoRequest('DDD en PHP', 320));

        $this->assertNotNull($repository->byId(VideoId::fromString($dto->id)));
    }
}`
    };

    let completedSteps = [];

    function renderRoadmapProgress() {
      const count = completedSteps.length;
      const pct = Math.round((count / 6) * 100);
      const statusText = document.getElementById(`roadmap-status-text`);
      const pctBadge = document.getElementById(`roadmap-pct-badge`);
      const fill = document.getElementById(`roadmap-fill`);
      const bar = document.getElementById(`roadmap-progressbar`);

      if (statusText) statusText.textContent = `PROGRÉS DE L'ITINERARI: ${count} DE 6 PASSOS COMPLETATS`;
      if (pctBadge) pctBadge.textContent = `${pct}%`;
      if (fill) fill.style.width = `${pct}%`;
      if (bar) bar.setAttribute(`aria-valuenow`, String(count));

      for (let i = 1; i <= 6; i++) {
        const row = document.getElementById(`step-row-` + i);
        const btn = document.getElementById(`step-btn-` + i);
        const done = completedSteps.indexOf(i) !== -1;
        if (row) row.classList.toggle(`is-done`, done);
        if (btn) {
          btn.textContent = done ? `Pas comprès` : `Marca com a comprès`;
          btn.className = done ? `btn btn-primary` : `btn btn-secondary`;
        }
      }
    }

    function toggleStepDone(stepNum) {
      const idx = completedSteps.indexOf(stepNum);
      if (idx === -1) {
        completedSteps.push(stepNum);
      } else {
        completedSteps.splice(idx, 1);
      }
      renderRoadmapProgress();
      persistState();
    }

    // =========================================================================
    // 3. INTERACTIVE 10-QUESTION QUIZ
    // =========================================================================
    const quizQuestions = [
      {
        topic: `Arquitectura Hexagonal`,
        q: `Segons la Regla de Dependència de l'Arquitectura Hexagonal (Ports i Adaptadors), quina direcció han de seguir les dependències de codi font?`,
        options: [
          `Del Domini cap als Adaptadors d'Infraestructura per aprofitar les funcionalitats de l'ORM.`,
          `Només cap endins: els Adaptadors i la Capa d'Aplicació depenen del Domini, però el Domini no coneix res de l'exterior.`,
          `Bidireccionalment entre el Servei d'Aplicació i el Controlador HTTP.`,
          `Des dels Ports cap als Controladors de Symfony mitjançant herència.`
        ],
        correct: 1,
        exp: `La Regla de Dependència estableix que les dependències de codi font només poden apuntar cap al centre. El Domini defineix Ports (interfícies) i la Infraestructura els implementa (DIP), mantenint el nucli agnòstic del framework i de la base de dades.`
      },
      {
        topic: `Ports i Adaptadors`,
        q: `Què demostra la "simetria" en una Arquitectura Hexagonal quan afegim una comanda de Consola CLI a una aplicació web existent?`,
        options: [
          `Que la comanda CLI ha d'estendre el mateix Controller HTTP per reutilitzar les rutes.`,
          `Que tant el Controlador Web com la Comanda CLI són adaptadors primaris simètrics que construeixen un Request DTO i invoquen el mateix Servei d'Aplicació.`,
          `Que Doctrine ha de generar automàticament les comandes de consola a partir de les entitats.`,
          `Que cal duplicar les regles de validació del model dins de la comanda CLI.`
        ],
        correct: 1,
        exp: `Tots dos són mecanismes de lliurament (Driving Adapters) a la vora de l'hexàgon. La lògica del cas d'ús i les regles del domini romanen intactes i es reutilitzen sense canvis.`
      },
      {
        topic: `Domain Events`,
        q: `Quin benefici arquitectònic principal aporten els Domain Events respecte a cridar directament un servei extern dins d'una Entitat?`,
        options: [
          `Apliquen Inversió de Control (IoC), desacoblant el domini dels efectes secundaris i facilitant la consistència eventual i les projeccions.`,
          `Permeten executar consultes SQL directes des dels Value Objects.`,
          `Substitueixen la necessitat de tenir Repositoris i Transaccions.`,
          `Garanteixen que tots els processos remots s'executin síncronament dins la petició HTTP.`
        ],
        correct: 0,
        exp: `Amb Domain Events, l'Aggregate només anuncia què ha passat en passat (p. ex. VideoWasPublished). Els subscriptors (EventStore, Projectors, cues RabbitMQ) reaccionen de manera desacoblada.`
      },
      {
        topic: `Event Store i Persistència`,
        q: `Per què és recomanable desar el StoredEvent a l'EventStore dins la mateixa transacció de base de dades que l'Aggregate modificat?`,
        options: [
          `Per evitar crear un índex primari a la taula d'esdeveniments.`,
          `Per assegurar atomicitat i que no es perdin esdeveniments si falla el sistema de missatgeria extern.`,
          `Perquè Doctrine prohibeix persistir més d'una taula fora d'una cua RabbitMQ.`,
          `Per poder modificar els esdeveniments històrics després de publicar-los.`
        ],
        correct: 1,
        exp: `Persistir l'Aggregate i els seus esdeveniments en la mateixa transacció garanteix que, si la transacció té èxit, cap esdeveniment es perdrà encara que el broker de missatges caigui temporalment.`
      },
      {
        topic: `DTOs i Frontera d'Aplicació`,
        q: `Per què un Servei d'Aplicació ha de retornar un DTO (o Data Transformer) en lloc de retornar directament l'Entitat de Domini al Controlador?`,
        options: [
          `Perquè PHP no permet serialitzar objectes amb propietats privades a JSON.`,
          `Per evitar que la capa de presentació invoqui mètodes de negoci fora de transacció i per desacoblar l'evolució del domini de la UI.`,
          `Perquè els DTOs contenen tota la lògica d'accés a base de dades.`,
          `Per poder fer servir setters públics sobre l'entitat des de les plantilles Twig.`
        ],
        correct: 1,
        exp: `Retornar l'entitat exposa comportament del domini al mecanisme de lliurament (p. ex. permetent cridar $user->updateEmailAddress() al controlador) i acobla la vista al model de domini.`
      },
      {
        topic: `Anatomia dels DTOs i Serialització`,
        q: `Quin problema greu presenta la serialització nativa de PHP (serialize/unserialize) enfront de JMS Serializer (JSON) per persistir o enviar dades?`,
        options: [
          `serialize() no admet cadenes de text UTF-8.`,
          `Acobla la representació emmagatzemada al nom i namespace exacte de la classe PHP, trencant la deserialització en refactoritzar, i impedeix fer consultes per camps interns.`,
          `JMS Serializer només funciona amb bases de dades NoSQL com Redis.`,
          `La serialització nativa sempre és més lenta que XML.`
        ],
        correct: 1,
        exp: `Com mostra el llibre amb Money, serialize() guarda el namespace complet (O:22:"Ddd\\Domain\\Model\\Money"...). Reanomenar o moure la classe invalida les dades antigues; JSON amb JMS Serializer evita aquest acoblament.`
      },
      {
        topic: `Factories i Invariants`,
        q: `Quin avantatge té col·locar un Factory Method a l'Aggregate Root (p. ex. $user->makeWish(...)) en lloc d'instanciar directament new Wish(...) des del client?`,
        options: [
          `Elimina la necessitat de constructors privats als Value Objects.`,
          `Mou el control de la creació a l'Aggregate Root, protegeix les invariants del conjunt i amaga els detalls interns de construcció.`,
          `Permet saltar-se la validació d'identitats del repositori.`,
          `Obliga l'ORM a utilitzar Active Record en lloc de Data Mapper.`
        ],
        correct: 1,
        exp: `Un Factory Method a l'Aggregate Root garanteix que no existeixi cap fill sense un pare vàlid, aplica invariants de negoci abans de construir l'objecte i pot disparar els Domain Events corresponents.`
      },
      {
        topic: `Object Mother vs Test Data Builder`,
        q: `Quan convé preferir un Test Data Builder per davant d'un Object Mother en una suite de tests en PHP?`,
        options: [
          `Quan necessitem flexibilitat per crear múltiples variacions d'un Aggregate sobreescrivint només els camps rellevants de cada test sense multiplicar mètodes estàtics.`,
          `Només quan fem tests d'integració contra MySQL en producció.`,
          `Quan volem compartir estat mutable entre tots els tests d'una mateixa classe.`,
          `Quan les entitats no tenen cap propietat obligatòria.`
        ],
        correct: 0,
        exp: `Els Object Mothers tendeixen a créixer descontroladament quan apareixen noves combinacions de dades. El Test Data Builder ofereix valors per defecte segurs i una API fluida (withX()->build()) molt més llegible i mantenible.`
      },
      {
        topic: `Metodologia: Modelatge del Domini`,
        q: `Quina diferència essencial separa un Model Ric de Domini d'un Model Anèmic en el Pas 2 de la metodologia?`,
        options: [
          `El Model Anèmic té totes les propietats declarades com a constants.`,
          `El Model Ric encapsula estat i comportament mitjançant mètodes semàntics del Llenguatge Ubiquu i Value Objects immutables, mentre que l'Anèmic només exposa getters/setters i delega la lògica als serveis.`,
          `El Model Ric hereta sempre de la classe base del framework web.`,
          `El Model Anèmic només es pot utilitzar amb Event Sourcing.`
        ],
        correct: 1,
        exp: `Els models anèmics trenquen l'encapsulació i provoquen una falsa sensació de reutilització, escampant invariants pels serveis. Un Model Ric concentra les regles de negoci dins les Entitats i Value Objects.`
      },
      {
        topic: `Metodologia: Estratègia de Testing`,
        q: `Com aconseguim tests unitaris ràpids i deterministes per a un Servei d'Aplicació que depèn d'un Repositori i publica Domain Events?`,
        options: [
          `Aixecant un contenidor Docker de MySQL abans de cada mètode de test.`,
          `Injectant un InMemoryRepository que implementa el Port del Domini i un SpySubscriber per verificar la publicació de l'esdeveniment.`,
          `Utilitzant mocks de Symfony HttpKernel dins la capa de Domini.`,
          `Desactivant totes les excepcions del constructor durant els tests.`
        ],
        correct: 1,
        exp: `Gràcies a la Inversió de Dependències, podem injectar implementacions InMemory del port del repositori i un Spy per comprovar que el Domain Event s'ha publicat, executant els tests en mil·lisegons i sense infraestructura real.`
      }
    ];

    let currentQuestion = 0;
    let quizAnswers = {}; // { questionIndex: selectedOptionIndex }

    function getQuizStats() {
      const answeredKeys = Object.keys(quizAnswers);
      let correct = 0;
      answeredKeys.forEach(function(k) {
        const idx = parseInt(k, 10);
        if (quizAnswers[idx] === quizQuestions[idx].correct) {
          correct++;
        }
      });
      return {
        answered: answeredKeys.length,
        correct: correct,
        pct: Math.round((correct / quizQuestions.length) * 100)
      };
    }

    function updateQuizScoreboard() {
      const stats = getQuizStats();
      const pctEl = document.getElementById(`quiz-score-pct`);
      const corrEl = document.getElementById(`quiz-correct-count`);
      const ansEl = document.getElementById(`quiz-answered-count`);
      const rankEl = document.getElementById(`quiz-rank-label`);

      if (pctEl) pctEl.textContent = `${stats.pct}%`;
      if (corrEl) corrEl.textContent = `${stats.correct} / ${quizQuestions.length}`;
      if (ansEl) ansEl.textContent = `${stats.answered} / ${quizQuestions.length}`;

      if (rankEl) {
        if (stats.answered === 0) {
          rankEl.textContent = `Pendent d'inici`;
        } else if (stats.answered < quizQuestions.length) {
          rankEl.textContent = `En curs (${stats.answered}/10)`;
        } else if (stats.pct >= 90) {
          rankEl.textContent = `Domini Excel·lent`;
        } else if (stats.pct >= 70) {
          rankEl.textContent = `Bona comprensió`;
        } else {
          rankEl.textContent = `Convé repassar`;
        }
      }
    }

    function renderQuizNav() {
      const nav = document.getElementById(`quiz-nav`);
      if (!nav) return;
      let html = ``;
      for (let i = 0; i < quizQuestions.length; i++) {
        const ans = quizAnswers[i];
        let cls = `q-pill`;
        if (i === currentQuestion) cls += ` is-current`;
        if (ans !== undefined) {
          cls += (ans === quizQuestions[i].correct) ? ` is-correct` : ` is-wrong`;
        }
        const label = i < 9 ? `0${i + 1}` : `${i + 1}`;
        html += `<button type="button" class="${cls}" onclick="selectQuestion(${i})" aria-label="Anar a la pregunta ${i + 1}">${label}</button>`;
      }
      nav.innerHTML = html;
    }

    function renderQuizQuestion() {
      const q = quizQuestions[currentQuestion];
      if (!q) return;

      const metaEl = document.getElementById(`quiz-q-meta`);
      const statusEl = document.getElementById(`quiz-q-status`);
      const textEl = document.getElementById(`quiz-q-text`);
      const optsEl = document.getElementById(`quiz-options-list`);
      const fbEl = document.getElementById(`quiz-feedback`);
      const fbTitle = document.getElementById(`quiz-feedback-title`);
      const fbText = document.getElementById(`quiz-feedback-text`);
      const prevBtn = document.getElementById(`quiz-prev-btn`);
      const nextBtn = document.getElementById(`quiz-next-btn`);

      const numStr = currentQuestion < 9 ? `0${currentQuestion + 1}` : `${currentQuestion + 1}`;
      if (metaEl) metaEl.textContent = `PREGUNTA ${numStr} DE ${quizQuestions.length} · ${q.topic.toUpperCase()}`;
      if (textEl) textEl.textContent = q.q;

      const selected = quizAnswers[currentQuestion];
      const isAnswered = selected !== undefined;

      if (statusEl) {
        if (!isAnswered) {
          statusEl.className = `pill-tag pill-tag--neutral`;
          statusEl.textContent = `Sense respondre`;
        } else if (selected === q.correct) {
          statusEl.className = `pill-tag pill-tag--success`;
          statusEl.textContent = `Resposta correcta`;
        } else {
          statusEl.className = `pill-tag pill-tag--error`;
          statusEl.textContent = `Resposta incorrecta`;
        }
      }

      if (optsEl) {
        const letters = [`A`, `B`, `C`, `D`];
        let html = ``;
        q.options.forEach(function(optText, idx) {
          let cls = `quiz-option`;
          if (isAnswered) {
            if (idx === q.correct) {
              cls += ` opt-correct`;
            } else if (idx === selected) {
              cls += ` opt-wrong`;
            }
          }
          html += `<button type="button" class="${cls}" ${isAnswered ? `disabled` : ``} onclick="answerQuestion(${idx})">
            <span class="opt-letter">${letters[idx]}</span>
            <span>${escapeHtml(optText)}</span>
          </button>`;
        });
        optsEl.innerHTML = html;
      }

      if (fbEl && fbTitle && fbText) {
        if (isAnswered) {
          fbEl.style.display = `grid`;
          fbEl.className = selected === q.correct ? `notice notice--success` : `notice notice--error`;
          fbTitle.textContent = selected === q.correct
            ? `CORRECTE · JUSTIFICACIÓ`
            : `INCORRECTE · LA RESPOSTA CORRECTA ÉS LA ${[`A`, `B`, `C`, `D`][q.correct]}`;
          fbText.textContent = q.exp;
        } else {
          fbEl.style.display = `none`;
        }
      }

      if (prevBtn) prevBtn.disabled = currentQuestion === 0;
      if (nextBtn) {
        nextBtn.disabled = currentQuestion === quizQuestions.length - 1;
        nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? `Última pregunta` : `Següent pregunta`;
      }

      renderQuizNav();
      updateQuizScoreboard();
    }

    function selectQuestion(idx) {
      if (idx < 0 || idx >= quizQuestions.length) return;
      currentQuestion = idx;
      const resetBtn = document.getElementById(`quiz-reset-btn`);
      if (resetBtn) {
        resetBtn.dataset.armed = `false`;
        resetBtn.textContent = `Reinicia el qüestionari`;
      }
      renderQuizQuestion();
      persistState();
    }

    function answerQuestion(optIdx) {
      if (quizAnswers[currentQuestion] !== undefined) return;
      quizAnswers[currentQuestion] = optIdx;
      renderQuizQuestion();
      persistState();
    }

    function goQuiz(delta) {
      selectQuestion(currentQuestion + delta);
    }

    function resetQuizInline(btn) {
      if (!btn) return;
      if (btn.dataset.armed !== `true`) {
        btn.dataset.armed = `true`;
        btn.textContent = `Confirma reinici`;
        return;
      }
      btn.dataset.armed = `false`;
      btn.textContent = `Reinicia el qüestionari`;
      quizAnswers = {};
      currentQuestion = 0;
      renderQuizQuestion();
      persistState();
    }

    // =========================================================================
    // STATE PERSISTENCE (notebookAppApi) & INITIALIZATION
    // =========================================================================
    async function persistState() {
      if (!window.notebookAppApi) return;
      try {
        await window.notebookAppApi.setAppState({
          completedSteps: completedSteps,
          currentQuestion: currentQuestion,
          quizAnswers: quizAnswers
        });
      } catch (err) {
        // Silent graceful fallback
      }
    }

    async function initApp() {
      // Populate static code blocks
      updateHexDiagram();
      selectEventStage(0);
      setDtoMode(`good`);
      setSerMode(`jms`);
      setFactoryTab(`root`);
      updateBuilderCode();

      for (let i = 1; i <= 6; i++) {
        renderCodeBlock(`step` + i + `-code`, stepSnippets[i]);
      }

      // Restore persisted state if available
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved) {
            if (Array.isArray(saved.completedSteps)) {
              completedSteps = saved.completedSteps.filter(function(n) {
                return typeof n === `number` && n >= 1 && n <= 6;
              });
            }
            if (typeof saved.currentQuestion === `number` && saved.currentQuestion >= 0 && saved.currentQuestion < quizQuestions.length) {
              currentQuestion = saved.currentQuestion;
            }
            if (saved.quizAnswers && typeof saved.quizAnswers === `object`) {
              quizAnswers = saved.quizAnswers;
            }
          }
        } catch (err) {
          // Proceed with default state
        }
      }

      renderRoadmapProgress();
      renderQuizQuestion();

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener(`DOMContentLoaded`, initApp);
  </script>
</body>
</html>

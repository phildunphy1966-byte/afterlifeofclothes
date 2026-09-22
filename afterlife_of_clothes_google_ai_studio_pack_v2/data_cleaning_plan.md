# Data Cleaning & Preparation Plan

## National data
- Preserve the Ministry report's units and definitions.
- Store quantities in KTPA; calculate million tonnes only for display.
- Keep percentage and quantity together so the UI can toggle views.
- Do not infer a trend from estimates produced with different methodologies.

## Student survey
- Preserve raw export unchanged.
- Create a separate cleaned file.
- Standardise missing values as NA.
- Standardise age bands and disposal labels.
- Keep “keep/store” separate from “discard”.
- Retain open-ended responses in a separate qualitative field.
- Remove direct identifiers before use.
- Record every transformation in a cleaning log.

## Women's clothing reviews
When the source CSV is supplied:
1. Remove unnamed index column if present.
2. Keep the original review text unchanged in the raw copy.
3. Normalise column names to snake_case.
4. Preserve missing titles/reviews as NA; do not fabricate text.
5. Create dissatisfaction themes only for analytically relevant reviews.
6. Use a transparent keyword/NLP-assisted first pass, then manually audit a sample and all displayed quotes.
7. Never infer garment disposal from a negative review; the dataset measures reviews, not disposal behaviour.

## Clothing fit
- Normalise fit labels.
- Keep ModCloth and RentTheRunway origin visible.
- Do not combine rating scales until normalised and documented.
- Avoid body-measurement fields unless necessary to the narrative.
- Do not infer that poor fit causes disposal; describe fit only as a consumer-experience factor.

## Zara composition example
- Preserve item/material relationship.
- If composition is a separate table, use item_code as join key.
- Label geography/retailer/year visibly.
- Do not calculate India-wide material shares from this dataset.

## Validation checklist
- Counts before/after cleaning.
- Missing-value report.
- Duplicate report.
- Category dictionary.
- Derived-variable documentation.
- Source + license metadata.

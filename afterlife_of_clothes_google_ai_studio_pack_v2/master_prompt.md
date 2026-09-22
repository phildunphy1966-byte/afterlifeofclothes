# MASTER BUILD PROMPT
Act as a senior interactive data-storytelling designer and front-end developer. Create a polished responsive website titled **The Afterlife of Clothes**.

## Concept
Follow one unwanted T-shirt after its owner stops wearing it. Expand from one personal object to India's post-consumer textile-waste system, then return to the garment at the end.

## Audience
Urban Indian young adults, approximately 18–30.

## Key message
**Discarding a garment ends your relationship with it — not necessarily its life.**

## Required interactive sections
1. Hero with animated T-shirt and “Follow its journey”.
2. Clickable “Why did you stop wearing it?” choices.
3. Animated India textile-waste scale reveal.
4. Clickable “What would you do with it?” choices.
5. Collection-flow/Sankey section.
6. Interactive sorting activity.
7. Panipat case-study map.
8. Reuse / Recycle / Downcycle / Disposal interactive definitions.
9. 55% vs 45% post-consumer outcome visualisation.
10. Pre-consumer vs post-consumer comparison.
11. Primary survey exploration with TBD data.
12. Qualitative response wall with filters.
13. Personal journey recap based on earlier choices.
14. Reflective ending.

## Principles
Narrative first, dashboard second. Every interaction must reveal, compare or clarify. Use restrained editorial animation. Keep source attribution visible. Never fabricate data. Keep survey values marked TBD until real responses are supplied.

## Technology
Use React + TypeScript and reusable components. SVG/D3 may be used for custom visualisations. CSS or Tailwind is acceptable. Keep data in structured modules so CSV/JSON can replace it later.

## Final checks
All buttons work; user choices affect recap; charts show labels, units and sources; mobile does not depend on hover; keyboard accessibility and reduced-motion support are included.

## Dataset hierarchy — critical
Read `dataset_strategy.md`, `data_dictionary.md`, `data_cleaning_plan.md`, and `kaggle_dataset_notes.md` before building data sections.

Treat datasets as separate evidence layers:
1. Ministry of Textiles 2026 = national textile-waste backbone.
2. Student survey = target-audience behaviour, once real data exists.
3. Women's E-Commerce Clothing Reviews = supporting context on clothing satisfaction/dissatisfaction only.
4. Clothing Fit Data = optional supporting context on fit only.
5. Zara eco/composition data = illustrative catalogue example only.

Never merge these into one statistical population. Always display geography, scope and source. Never infer that a negative review means a garment was discarded. Never infer India-wide consumer behaviour from Kaggle review/fit data.

The included `data/national_textile_flow.csv` can be used immediately. The other CSVs are schemas/templates, not populated evidence. Do not generate fake rows to make charts work; show an intentional “primary research pending” state until real data is supplied.

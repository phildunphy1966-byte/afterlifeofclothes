# Dataset Strategy — The Afterlife of Clothes

## Principle
The website must not mix datasets as though they describe the same population. Each source has one defined narrative job.

## Tier 1 — Core evidence
### India Textile Waste Value Chain (Ministry of Textiles, 2026)
Role: national system and waste-flow backbone.
Use for: total textile waste, pre/post split, collection pathways, recovery/disposal pathways.
Geography: India.
Do not replace this with Kaggle data.

### Student Primary Survey
Role: target-audience behaviour and awareness.
Use for: disposal habits, unworn clothes, donation knowledge, repair, recycling awareness, open-ended responses.
Geography/population: the student's actual sample; clearly state sample size and limitations.
Status: TBD until collected.

## Tier 2 — Supporting Kaggle evidence
### Women's E-Commerce Clothing Reviews
Source: Kaggle / nicapotato.
Rows: 23,486; 10 feature variables; anonymised real commercial review data; CC0.
Narrative role: contextual evidence about clothing satisfaction/dissatisfaction, especially fit, quality and expectations.
Do NOT describe it as Indian consumer data or textile-waste data.
Recommended fields: clothing_id, age, title, review_text, rating, recommended_ind, positive_feedback_count, department_name, class_name.
Recommended derived fields: dissatisfaction_theme, fit_mention, quality_mention, comfort_mention, style_mention, expectation_mismatch.
Website use: optional contextual panel after “Why did you stop wearing it?”

### Clothing Fit Data
Source: Kaggle mirror of ModCloth and RentTheRunway fit datasets; original research dataset from McAuley Lab.
Scale: ModCloth 82,790 transactions; RentTheRunway 192,544 transactions.
Narrative role: explain fit as one reason garments may fail users.
Recommended fields: fit, age, category, rating, review_text, size; avoid unnecessary body measurements unless analytically required.
Website use: optional fit-data explainer when user selects “It doesn't fit”.
Do NOT generalise this dataset to India.

### Fast Fashion Eco-Data
Source: Kaggle; underlying dataset also archived on Zenodo.
Scope: 277 Zara catalogue items from Spain, captured in 2020, with price/composition/eco-tagging dimensions.
Narrative role: demonstrate that garment composition is heterogeneous and can be represented as structured product data.
Use cautiously: this is a retailer/catalogue example, not representative of India and not direct recycling-outcome evidence.
Website use: optional “What is a garment made of?” explainer, clearly labelled as an illustrative catalogue dataset.

## Excluded / deprioritised
- Synthetic Indian fashion-sales datasets: not appropriate for evidence about real consumer behaviour.
- Generic waste-image classification datasets: visually interesting but weakly connected to the core research question.
- Kaggle datasets without transparent provenance: exclude unless provenance can be verified.

## Data hierarchy in the UI
1. Ministry 2026 = authoritative national numbers.
2. Student survey = original audience research.
3. Kaggle review/fit datasets = contextual supporting evidence only.
4. Retail composition dataset = illustrative material example only.

## Required source metadata for every dataset
- source_id
- source_name
- source_url
- source_type
- geography
- population_or_scope
- year_or_period
- license_if_known
- is_primary_research
- is_synthetic
- narrative_role
- limitations

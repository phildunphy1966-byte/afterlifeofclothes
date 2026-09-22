# Data Dictionary

## A. national_textile_flow.csv
| Field | Type | Meaning |
|---|---|---|
| metric_id | string | Stable metric key |
| stage | category | total / source / collection / outcome |
| category | string | Metric category |
| quantity_ktpa | number | Thousand tonnes per annum |
| percentage | number | Percentage when applicable |
| geography | string | India |
| year | integer | 2026 |
| source_id | string | `mot_2026` |
| website_section | string | Intended story section |

## B. survey_clean.csv — template
| Field | Type | Meaning |
|---|---|---|
| respondent_id | string | Anonymous ID |
| age_group | category | Standardised age band |
| city | string | Respondent city |
| purchase_frequency | ordinal | Clothing purchase frequency |
| items_purchased_recently | number | Count in survey-defined period |
| estimated_unworn_clothes | number | Self-estimated unworn items |
| reason_for_disuse | category | fit / damage / boredom / style / quality / other |
| disposal_method | category | donate / give / sell / repurpose / discard / keep / other |
| donation_frequency | ordinal | Donation frequency |
| repair_behaviour | category | Standardised repair response |
| recycling_awareness | ordinal | Awareness measure |
| knows_where_donations_go | category | yes / no / unsure |
| open_response_afterlife | text | Open-ended answer |
| primary_theme | category | Manually verified qualitative code |

## C. consumer_reviews_clean.csv — schema only until source file is supplied
| Field | Type | Meaning |
|---|---|---|
| review_id | string | Local row ID |
| clothing_id | string | Product identifier |
| age | integer | Reviewer age |
| rating | integer | 1–5 |
| recommended | boolean | Recommendation indicator |
| department | category | Product department |
| class_name | category | Product class |
| review_text | text | Review body |
| dissatisfaction_theme | category | Derived, manually validated theme |
| fit_mention | boolean | Derived |
| quality_mention | boolean | Derived |
| comfort_mention | boolean | Derived |
| style_mention | boolean | Derived |
| expectation_mismatch | boolean | Derived |
| source_id | string | `kaggle_womens_reviews` |

## D. clothing_fit_clean.csv — schema only until source file is supplied
| Field | Type | Meaning |
|---|---|---|
| record_id | string | Local row ID |
| dataset_origin | category | modcloth / renttherunway |
| fit | category | small / fit / large or source equivalent |
| age | integer | User age if available |
| category | category | Garment category |
| rating | number | Source rating |
| review_text | text | Review text if used |
| size | string/number | Source size value |
| source_id | string | `clothing_fit` |

## E. garment_composition_example.csv — schema only until source file is supplied
| Field | Type | Meaning |
|---|---|---|
| item_code | string | Product key |
| item_name | string | Catalogue item name |
| item_price | number | Source catalogue price |
| eco_tag | boolean | Eco-tag flag |
| material | string | Composition material |
| material_percentage | number | Composition share if supplied |
| source_id | string | `zara_eco_2020` |

## Derived-variable rule
Any NLP/theme label must be documented as derived, not original. AI-assisted coding must be manually reviewed before publication.

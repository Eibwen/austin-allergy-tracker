# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 50165** (2021/06/09)  [week high: 50165, month: 50165]
- **Grass: 4** (2021/06/09)  [week high: 6, month: 8]
- **Other: 3** (2021/06/09)  [week high: 6, month: 6]
- **Ragweed: 3** (2021/06/09)  [week high: 3, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1974** (2021/04/09)  [week high: 2303, month: 2303]
- **Grass: 8** (2021/04/09)  [week high: 8, month: 8]
- **Ash: 12** (2021/04/09)  [week high: 26, month: 66]
- **Mold: 2309** (2021/04/09)  [week high: 3166, month: 21400]
- **Mulberry: 10** (2021/04/09)  [week high: 31, month: 98]
- **Other: 12** (2021/04/09)  [week high: 20, month: 52]
- **Walnut: 8** (2021/04/09)  [week high: 10, month: 10]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

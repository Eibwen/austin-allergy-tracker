# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 166** (2021/10/11)  [week high: 263, month: 363]
- **Mold: 11240** (2021/10/11)  [week high: 12832, month: 15103]
- **Fall_Elm: 14** (2021/10/11)  [week high: 306, month: 559]
- **Grass: 4** (2021/10/11)  [week high: 4, month: 7]
- **Other: 6** (2021/10/11)  [week high: 6, month: 6]
- **Redberry___Juniper: 2** (2021/10/11)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ragweed: 49** (2021/09/15)  [week high: 68, month: 68]
- **Fall_Elm: 5** (2021/09/15)  [week high: 5, month: 40]
- **Grass: 4** (2021/09/15)  [week high: 4, month: 6]
- **Mold: 2645** (2021/09/15)  [week high: 5528, month: 48598]
- **Weeds: 3** (2021/09/15)  [week high: 6, month: 7]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

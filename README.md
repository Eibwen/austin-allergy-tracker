# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 216** (2021/09/20)  [week high: 216, month: 216]
- **Ragweed: 151** (2021/09/20)  [week high: 151, month: 151]
- **Grass: 2** (2021/09/20)  [week high: 7, month: 7]
- **Mold: 4804** (2021/09/20)  [week high: 7436, month: 48598]
- **Other: 2** (2021/09/20)  [week high: 2, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

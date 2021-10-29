# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Redberry___Juniper: 148** (2021/10/29)  [week high: 625, month: 625]
- **Ragweed: 18** (2021/10/29)  [week high: 84, month: 263]
- **Grass: 3** (2021/10/29)  [week high: 4, month: 6]
- **Mold: 5761** (2021/10/29)  [week high: 26283, month: 37641]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

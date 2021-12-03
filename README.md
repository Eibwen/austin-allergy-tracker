# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 6561** (2021/12/03)  [week high: 6561, month: 13161]
- **Cedar: 3** (2021/12/03)  [week high: 3, month: 3]
- **Grass: 3** (2021/12/03)  [week high: 4, month: 22]
- **Ragweed: 1** (2021/12/03)  [week high: 1, month: 11]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 148** (2021/10/07)  [week high: 526, month: 559]
- **Ragweed: 230** (2021/10/07)  [week high: 230, month: 363]
- **Mold: 10990** (2021/10/07)  [week high: 15103, month: 15103]
- **Grass: 3** (2021/10/07)  [week high: 3, month: 7]
- **Redberry___Juniper: 1** (2021/10/07)  [week high: 1, month: 1]
- **Weeds: 6** (2021/10/07)  [week high: 6, month: 6]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

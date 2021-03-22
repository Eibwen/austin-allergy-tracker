# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 428** (2021/03/22)  [week high: 428, month: 428]
- **Oak: 822** (2021/03/22)  [week high: 822, month: 822]
- **Ash: 66** (2021/03/22)  [week high: 66, month: 66]
- **Mulberry: 33** (2021/03/22)  [week high: 33, month: 33]
- **Other: 22** (2021/03/22)  [week high: 22, month: 22]
- **Grass: 4** (2021/03/22)  [week high: 4, month: 4]
- **Mold: 874** (2021/03/22)  [week high: 4449, month: 15794]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

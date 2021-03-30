# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 2007** (2021/03/30)  [week high: 2007, month: 2007]
- **Ash: 33** (2021/03/30)  [week high: 66, month: 66]
- **Hackberry: 20** (2021/03/30)  [week high: 236, month: 428]
- **Mulberry: 83** (2021/03/30)  [week high: 83, month: 83]
- **Grass: 4** (2021/03/30)  [week high: 5, month: 5]
- **Mold: 1777** (2021/03/30)  [week high: 21400, month: 21400]
- **Other: 5** (2021/03/30)  [week high: 20, month: 22]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

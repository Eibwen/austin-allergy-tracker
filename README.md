# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 236** (2021/03/24)  [week high: 428, month: 428]
- **Oak: 461** (2021/03/24)  [week high: 822, month: 822]
- **Grass: 5** (2021/03/24)  [week high: 5, month: 5]
- **Mold: 6661** (2021/03/24)  [week high: 20268, month: 20268]
- **Mulberry: 19** (2021/03/24)  [week high: 33, month: 33]
- **Other: 20** (2021/03/24)  [week high: 22, month: 22]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

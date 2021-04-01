# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1610** (2021/04/01)  [week high: 2007, month: 2007]
- **Mulberry: 98** (2021/04/01)  [week high: 98, month: 98]
- **Ash: 60** (2021/04/01)  [week high: 66, month: 66]
- **Hackberry: 34** (2021/04/01)  [week high: 90, month: 428]
- **Other: 30** (2021/04/01)  [week high: 30, month: 30]
- **Grass: 3** (2021/04/01)  [week high: 5, month: 5]
- **Mold: 3910** (2021/04/01)  [week high: 21400, month: 21400]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

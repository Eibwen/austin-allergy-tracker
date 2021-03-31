# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1820** (2021/03/31)  [week high: 2007, month: 2007]
- **Ash: 30** (2021/03/31)  [week high: 66, month: 66]
- **Grass: 5** (2021/03/31)  [week high: 5, month: 5]
- **Hackberry: 25** (2021/03/31)  [week high: 90, month: 428]
- **Mulberry: 84** (2021/03/31)  [week high: 84, month: 84]
- **Mold: 3874** (2021/03/31)  [week high: 21400, month: 21400]
- **Other: 4** (2021/03/31)  [week high: 10, month: 22]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 987** (2021/04/05)  [week high: 2007, month: 2007]
- **Cottonwood: 23** (2021/04/05)  [week high: 23, month: 23]
- **Ash: 12** (2021/04/05)  [week high: 60, month: 66]
- **Grass: 2** (2021/04/05)  [week high: 6, month: 6]
- **Hackberry: 10** (2021/04/05)  [week high: 34, month: 428]
- **Mold: 3166** (2021/04/05)  [week high: 3910, month: 21400]
- **Mulberry: 8** (2021/04/05)  [week high: 98, month: 98]
- **Other: 14** (2021/04/05)  [week high: 52, month: 52]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

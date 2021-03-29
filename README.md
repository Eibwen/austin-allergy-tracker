# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 658** (2021/03/29)  [week high: 658, month: 822]
- **Ash: 66** (2021/03/29)  [week high: 66, month: 66]
- **Cedar: 25** (2021/03/29)  [week high: 25, month: 493]
- **Hackberry: 79** (2021/03/29)  [week high: 236, month: 428]
- **Mulberry: 74** (2021/03/29)  [week high: 74, month: 74]
- **Grass: 4** (2021/03/29)  [week high: 5, month: 5]
- **Mold: 2163** (2021/03/29)  [week high: 21400, month: 21400]
- **Other: 10** (2021/03/29)  [week high: 20, month: 22]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

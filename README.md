# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 321** (2021/03/18)  [week high: 321, month: 321]
- **Ash: 20** (2021/03/18)  [week high: 20, month: 20]
- **Oak: 20** (2021/03/18)  [week high: 20, month: 20]
- **Cedar: 2** (2021/03/18)  [week high: 15, month: 493]
- **Grass: 3** (2021/03/18)  [week high: 3, month: 3]
- **Mold: 4449** (2021/03/18)  [week high: 9479, month: 15794]
- **Mulberry: 10** (2021/03/18)  [week high: 10, month: 10]
- **Other: 4** (2021/03/18)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

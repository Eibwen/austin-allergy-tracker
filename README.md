# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 101** (2021/03/19)  [week high: 321, month: 321]
- **Oak: 82** (2021/03/19)  [week high: 82, month: 82]
- **Cedar: 2** (2021/03/19)  [week high: 8, month: 493]
- **Grass: 4** (2021/03/19)  [week high: 4, month: 4]
- **Mold: 1682** (2021/03/19)  [week high: 9479, month: 15794]
- **Mulberry: 10** (2021/03/19)  [week high: 10, month: 10]
- **Other: 5** (2021/03/19)  [week high: 5, month: 5]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Hackberry: 164** (2021/03/16)  [week high: 164, month: 164]
- **Ash: 8** (2021/03/16)  [week high: 8, month: 8]
- **Cedar: 6** (2021/03/16)  [week high: 71, month: 493]
- **Cottonwood: 3** (2021/03/16)  [week high: 3, month: 3]
- **Grass: 2** (2021/03/16)  [week high: 2, month: 2]
- **Mold: 861** (2021/03/16)  [week high: 9479, month: 15794]
- **Mulberry: 10** (2021/03/16)  [week high: 10, month: 10]
- **Oak: 4** (2021/03/16)  [week high: 4, month: 4]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 20268** (2021/03/23)  [week high: 20268, month: 20268]
- **Oak: 132** (2021/03/23)  [week high: 822, month: 822]
- **Grass: 5** (2021/03/23)  [week high: 5, month: 5]
- **Hackberry: 33** (2021/03/23)  [week high: 428, month: 428]
- **Ash: 10** (2021/03/23)  [week high: 66, month: 66]
- **Other: 12** (2021/03/23)  [week high: 22, month: 22]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

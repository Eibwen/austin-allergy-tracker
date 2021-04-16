# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 13061** (2021/04/16)  [week high: 13061, month: 21400]
- **Oak: 24** (2021/04/16)  [week high: 494, month: 2303]
- **Grass: 4** (2021/04/16)  [week high: 29, month: 29]
- **Hackberry: 3** (2021/04/16)  [week high: 3, month: 428]
- **Other: 5** (2021/04/16)  [week high: 20, month: 52]
- **Walnut: 2** (2021/04/16)  [week high: 6, month: 10]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

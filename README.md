# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 3861** (2022/04/14)  [week high: 6449, month: 6711]
- **Other: 16** (2022/04/14)  [week high: 25, month: 30]
- **Grass: 2** (2022/04/14)  [week high: 2, month: 4]
- **Hackberry: 10** (2022/04/14)  [week high: 62, month: 90]
- **Mold: 1561** (2022/04/14)  [week high: 3260, month: 50615]
- **Mulberry: 12** (2022/04/14)  [week high: 52, month: 52]
- **Pecan: 8** (2022/04/14)  [week high: 51, month: 51]
- **Walnut: 2** (2022/04/14)  [week high: 3, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html

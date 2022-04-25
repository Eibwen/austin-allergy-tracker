# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 658** (2022/04/25)  [week high: 1119, month: 6711]
- **Pecan: 60** (2022/04/25)  [week high: 60, month: 60]
- **Grass: 3** (2022/04/25)  [week high: 4, month: 4]
- **Mold: 1362** (2022/04/25)  [week high: 3161, month: 6687]
- **Mulberry: 2** (2022/04/25)  [week high: 8, month: 52]
- **Other: 14** (2022/04/25)  [week high: 16, month: 30]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html

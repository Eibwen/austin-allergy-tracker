# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Ash: 6** (2022/03/14)  [week high: 6, month: 8]
- **Cedar: 6** (2022/03/14)  [week high: 101, month: 855]
- **Elm: 3** (2022/03/14)  [week high: 67, month: 67]
- **Mold: 896** (2022/03/14)  [week high: 1961, month: 4113]
- **Other: 2** (2022/03/14)  [week high: 2, month: 2]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html

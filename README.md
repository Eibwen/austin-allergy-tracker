# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Mold: 22243** (2022/04/26)  [week high: 22243, month: 22243]
- **Oak: 132** (2022/04/26)  [week high: 1020, month: 6711]
- **Grass: 1** (2022/04/26)  [week high: 4, month: 4]
- **Mulberry: 2** (2022/04/26)  [week high: 8, month: 52]
- **Pine: 4** (2022/04/26)  [week high: 4, month: 4]
- **Walnut: 2** (2022/04/26)  [week high: 3, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html

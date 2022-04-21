# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Oak: 1020** (2022/04/21)  [week high: 3971, month: 6711]
- **Other: 16** (2022/04/21)  [week high: 22, month: 30]
- **Grass: 4** (2022/04/21)  [week high: 4, month: 4]
- **Mold: 2761** (2022/04/21)  [week high: 6612, month: 6687]
- **Mulberry: 8** (2022/04/21)  [week high: 14, month: 52]
- **Pecan: 5** (2022/04/21)  [week high: 12, month: 51]
- **Walnut: 3** (2022/04/21)  [week high: 3, month: 3]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

## TODO

[] check if there is useful data I can pull from https://austinpollen.com/pollenpage.html

# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Fall_Elm: 132** (2021/09/17)  [week high: 132, month: 132]
- **Ragweed: 125** (2021/09/17)  [week high: 125, month: 125]
- **Mold: 7436** (2021/09/17)  [week high: 7436, month: 48598]
- **Grass: 2** (2021/09/17)  [week high: 7, month: 7]
- **Weeds: 6** (2021/09/17)  [week high: 6, month: 7]
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

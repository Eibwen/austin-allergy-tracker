# Allergy Tracker

Keep history of allergies in Austin, TX using github Actions (sourced from KXAN's allergy tracker)

## Current forecast
<!-- INJECT FORECAST -->
- **Cedar: 66** (2021/02/10)  [week high: 691, month: 20268]
- **Elm: 59** (2021/02/10)  [week high: 59, month: 68]
- **Mold: 761** (2021/02/10)  [week high: 2685, month: 13622]
- **Other: 2** (2021/02/10)  [week high: 2, month: 2]
![Week Chart](https://quickchart.io/chart?c=%7Btype%3A%27line%27%2Cdata%3A%7Blabels%3A%5B%272021%2F02%2F04%27%2C%272021%2F02%2F05%27%2C%272021%2F02%2F06%27%2C%272021%2F02%2F07%27%2C%272021%2F02%2F08%27%2C%272021%2F02%2F09%27%2C%272021%2F02%2F10%27%5D%2Cdatasets%3A%5B%7Blabel%3A%27Cedar%27%2Cdata%3A%5B197%2C691%2C0%2C0%2C89%2C12%2C66%5D%7D%2C%7Blabel%3A%27Elm%27%2Cdata%3A%5B4%2C4%2C0%2C0%2C2%2C10%2C59%5D%7D%2C%7Blabel%3A%27Mold%27%2Cdata%3A%5B2685%2C1035%2C0%2C0%2C1228%2C833%2C761%5D%7D%2C%7Blabel%3A%27Other%27%2Cdata%3A%5B0%2C0%2C0%2C0%2C0%2C0%2C2%5D%7D%5D%7D%7D&w=500&h=300&bkg=%23ffffff&f=png)
<!-- END INJECT FORECAST -->

## Technique

I encountered this pattern via [@simonw's](https://github.com/simonw) writeup: https://simonwillison.net/2020/Oct/9/git-scraping/

Their implementation seems nice and simple as well, I should dig through their various use-cases for it and find other useful tools that I'm sure they've built

Pulling data from https://www.kxan.com/weather/allergy-forecast-austin-texas/

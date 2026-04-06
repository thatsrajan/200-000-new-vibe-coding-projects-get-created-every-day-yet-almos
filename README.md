# Vibe Coding Distribution Planner

A local web app for ranking practical distribution strategies based on product type and stage.

## What works
- Score channels against a startup profile
- Rank the top three distribution moves
- Show a first-step recommendation for each winning channel

## Run locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

## Meaningful user path
1. Choose product type and stage
2. Score channels
3. Review the top three go-to-market moves

## Known gaps
- Strategy weights are opinionated defaults
- No historical analytics yet
- No save/share flow yet

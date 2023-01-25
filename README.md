# LearnTeamUpAPI

This repo is to learn to play with teamUp api

### Folder structure
- index.js (contain all necessary code to print leave)
- date.js (playground for date)
- staff.js (code to manipulate staff name)

### Print leave of certain interval
- rename .env.example file to .env
- add url and apiKey in environement
```agsl
TEAMUP_SERVER_URL=https://api.teamup.com/ksifqcnnwkpixuit4t/events?&subcalendarId[]=11758347,&startDate=2022-12-01&endDate=2023-01-22
TEAMUP_API_KEY= team-up-api-key
```

## Run index.js
- `npm start`
- Result will be
```console
amrita was on leave from 2022-12-12T00:00:00 to 2022-12-12T23:59:00
amrita was on leave from 2022-12-12T00:00:00 to 2022-12-13T23:59:00
amrita was on leave from 2023-01-09T06:00:00+05:45 to 2023-01-09T07:00:00+05:45 for 1.00H
amrita was on leave from 2023-01-16T00:00:00 to 2023-01-16T23:59:00
amrita was on leave from 2023-01-17T00:00:00 to 2023-01-17T23:59:00
Salipa was on leave from 2023-01-17T00:00:00 to 2023-01-17T23:59:00
amrita was on leave from 2023-01-17T00:00:00 to 2023-01-17T23:59:00
@salipa was on leave from 2023-01-18T00:00:00 to 2023-01-18T23:59:00
```

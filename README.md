# Semrush 

## Task

Your goal is to implement timeline page using provided components and API

Feel free to use any state-management library that you want within both javascript or typescript (or even flow, but then you should configure babel by yourself).

![Prototype sketch](screenshot.png)  

## Timeline logic

- for root and all other pages on open shown latest 10 activities
- if user reaches bottom of page you should display next 10 activities (prefer method is "infinity scroll", but you still can implement it with button "load more")
- you should subscribe on global timeline / timeline of opened project / file / user and collect all new activities behind button "load new {} activities"
- after click on "load new activities" you should display it, marked all of them with dot (`highlighted` property in `Comment` and `FileIsUploaded` components)
- flag `highlighted` should be removed after 5 second since it was in visible area (!)
- user can click filename and user name to navigate particular file / user / project

Please, implement as much as you can.

## Installation

```
git clone https://github.com/semrush/friends-explorer-task
cd friends-explorer-task
npm i
npm start
```

## API

To see API usage check `src/API/usage`
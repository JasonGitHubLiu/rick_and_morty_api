A README.mdfile with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

Link to Netlify live site: https://comfy-lolly-7c6723.netlify.app/

# RICK AND MORTY WEBSITE

Here is a website about Rick and Morty, where you can search and access all the character's information. The project was built with HTML, CSS, and JavaScript using the React Library. There are at least 4-5 functional components and has 3-4 pages (separate routes). It makes use of state, props, and React Router (npm install react-router-dom) in the application. Last but not least, it uses fetch to request data with an external API and hosted on Netlify.

## Technologies Used

- JavaScript
- React
- React Router
- HTML
- CSS
- Bootstrap

## Approach Taken

I wanted to create a way for people to search all Rick and Morty characters and be able to access all their information. To achieve this, I created a website with a home page, about page, and character page. In the character page, you will be able to search all 826 characters or use the prev/next buttons to skim through all 42 pages.

First, I created the react file with "npx create-react-app" in the terminal. Then I installed the react router in the terminal by typing "npm install react-router-dom". To get started, I created a navigation bar along with the skeleton of the webpage. For example, I created all the different routes and pages before I added any content or styling. The navigation bar consisted of the home, about, and character pages. Then, I started working on getting the different characters mapped/displayed on the screen. After, I created the CharacterItem page so that when you click onto any character, it will redirect you to a different page that displays the character's information.

I also used Bootstrap to style certain things in my website such as the search bar/button, prev/next buttons, and the borders around each character. To utilize Bootstrap without downloading anything, you just need to go into your index.html file, then copy and paste two things.

1. You paste this code towards the top of the index.html file, inside the head tag. Make sure to get rid of spacing between the < and > in link/script

< link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/ >

2. You paste this code towards the bottom of the index.html file, at the end of the body tag. Make sure to get rid of spacing between the < and > in link/script

< script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous">< /script >

## Reloading Issues

I ran into some issues when reloading. After deploying my website to netlify, I noticed that I would get a 404 error whenever I refreshed my page. It would say, "Page Not Found Looks like you've followed a broken link or entered a URL that doesn't exist on this site when refreshing". To bypass this problem, I created a \_redirects file in the public folder and put in /\* /index.html 200. Thanks to Stack Overflow, I was able to solve this issue.
Here is the link: https://stackoverflow.com/questions/50752350/page-not-found-when-trying-to-access-a-site-deployed-on-netlify

## Unsolved Issues

When I split my website to take up only half of my screen and I scroll to the right side of my Character page, part of the background is white, instead of black. I've tried many things, but have been unsucessful at identifying a solution to my issue.

## API Reference

Here is the [link] (https://rickandmortyapi.com/documentation/#rest) to the Rick and Morty API that I used to create my website.
Rick and Morty [website] (https://rickandmortyapi.com/documentation/#javascript-client)
Rick and Morty [characters] (https://rickandmortyapi.com/api/character)
Rick and Morty [api] (https://rickandmortyapi.com/api)

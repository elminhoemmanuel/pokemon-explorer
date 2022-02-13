### pokemon-explorer

<h1 align="center">pokemon-explorer</h1>

<div align="center">
   A simple Pokemon explorer app.
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Notes about my key decisions](#notes-about-my-key-decisions)
- [Further improvements if I had more time](#further-improvements-if-i-had-more-time)
  - [Built With](#built-with)
- [How To Run the application](#how-to-run-the-application)

<!-- OVERVIEW -->


## Notes about my key decisions
Some noteworthy information about the key decisions I took during this project are;

- I discovered that one of the requirements for the app which was to display the name and Image of a pokemon on the first listing of pokemons was not feasible with the way the API was designed as the image url for the pokemon was not being returned in the initial list of pokemons. Only the name of the pokemon and a url to fetch all the pokemon details from where present. Hence I setup the app to display the pokemon Image alongside it's other details upon click of each pokemon card after the url containing the pokemon details has been called. This is an issue with the API design which I believe the creators are aware of as some of the pokemon Images are not even present.
- I decided to be as modular as possible when writing my functions in line with prepend's engineering wiki which I read that required a function been broken down to smaller bits when it exceeds XXX lines. For example main function `getPokemons` to fetch the list of all pokemons in `./components/PokemonList` was a quite long one hence I ensured i refactored it into smaller helper functions like `handleSetResult` and `handleFetchAll` .
- I decided to have all my type interface definitions in a seperate file found at `./interfaces/IPokemon.tsx` also to ensure that the code was modular, scalable and clean.
- I decided to disable the back button of the pagination ( i.e make it unclickable ) when the user is on the first page of the pokemon list as there is no previous page at that point. Also implemented a similar logic for the next button to ensure it is disabled when the user is on the very last page as there is no next page at that point.
- I used TailwindCSS for styling as I needed to be able to quickly style my elements so as to help me apply stylings quickly while still in the jsx file as I had a time limit for the task. Also I used TailwindCSS because I saw it recommended in prepend's engineering wiki and it's a CSS framework I have come to love myself and use a lot.
- I decided not to carryout un type definitions such as when using the useState hook to define items with simple types like boolean, string and number as TypeScript alrready infers that implicitly. This was done so as to also ensure the code is clean and that i stick to DRY ( Do Not Repeat Yourself ) coding principle.
- I named this branch following the convention found in the engineering wiki , starting with the feature number 1 being the first feature followed by a short explanation of the feature. The prefix `feat/` at the start of the branch name indicates this branch holds a feature and not a fix or bug which would be `fix/` or `bug/` respectively.

<!-- Improvements -->
## Further improvements if I had more time
Some further improvements I would have made to this project if I had more than the 4 hours limit are;

- With a bit more time I would have implemented the optional search feature to enable searching for a pokemon using the pokemon name. I had already figure out my logic for this but wanted to stick to the given time limit hence I did not effect it. However this is something that will be done on my own machine privately in my free time and I can make it available if required.
- With a bit more time I would have made the code even more modular as there are certain aspects such as in the `PokemonCard` component at `./components/PokemonCard` where there is still quite too much JSX in one file. It was my intention to refactor the code and have the various details for a pokemon such as the image, stats, species, types, moves etc. being rendered in their own seperate component so as to make the code cleaner. There are also other functions which I would have refactored with more time on my hands
- With more time I would have written more test cases. Currently I only wrote a single test case just to show my ability to do so. I do like to write a good number of tests as much as is required in my applications to ensure that there are no failing parts, but I was enable to do so on this project due to the time limit as I had been delayed by some other aspects.
- With more time I would have changed the element being used to render the pokemon image from the default html image tag to the next.js inbuilt Image component. This is because the next.js inbuilt Image component is more optimized and offers better performance for adding images to websites and web apps.
- With more time I would have improved the styling and desgin of the app as i currently had to do some very basic styling currently as styling was not the main focus for now.

<!-- Bult with -->
### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com) for deployment
  
<!-- how to run the app -->
## How To Run the application


To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/elminhoemmanuel/pokemon-explorer.git

# Move into the pokemon explorer folder
$ cd pokemon-explorer

# open up your command line and then Install dependencies
$ npm install

# Run the app
$ npm run dev

# Run tests
$ npm run test
```


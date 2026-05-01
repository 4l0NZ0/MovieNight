<script lang="ts">
import MovieCard from "$lib/components/MovieCard.svelte"
import Carousel from "$lib/components/Carousel.svelte";
const {data:movies} = $props();
const moviePathAppend = 'https://image.tmdb.org/t/p/original'


// Slice the movies so we only see 10 of them at a time
//const top10Movies = movies.slice(0,10);
</script>


<h1>HomePage</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
git 

<h1>Welcome to home page for the Movie ai</h1>



<Carousel movies = {movies.movies}/>


<div>
  {#each movies.movies as movie}
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src= {moviePathAppend+movie.backdrop_path} alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{movie.title}</div>
    <p class="text-gray-700 text-base">
      {movie.overview}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.vote_average}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.genres}</span>
    
  </div>
</div>

  {/each}
</div>


<MovieCard
title="Iception"
posterPath="https://image.tmdb.org/t/p/w500/xyz.jpg"
vote_average = {8.8}
overview = "This is a summary"

/>
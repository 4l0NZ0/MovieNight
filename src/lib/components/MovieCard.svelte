<script lang="ts">
   let {title,vote_average,overview,posterPath } = $props()

</script>


<div>
<img src={posterPath} alt={ title}/>

<div>
    <h3>{title}</h3>
    <p>{vote_average}}</p>
    <p>{overview}</p>
</div>
</div>
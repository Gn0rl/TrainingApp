<!-- {#if JSON.parse(localStorage.getItem('user')).programId !== undefined}
<h1>Начать тренировку</h1>
<a href="/workout" >Начнем</a>
{/if} -->
<h2 class="RecomendationText">Новости:</h2>
<News/>
<script>
    import News from "./news.svelte";
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
    .calendar {
        font-family: Oswald;
        font-size: 50px;
        color: rgb(0, 115, 255);
        -webkit-text-stroke: 3px rgb(11, 72, 147);
    }
    a {
        color: rgb(239, 238, 242);
		text-decoration: none;
		background-color: rgb(27, 27, 207);
		border-radius: 0.5em;
		padding: 1em;
		cursor: pointer;
		border: none;
		margin-left: 5px;
    }
</style>
<h1 class="ProgressText">Ваш Стрик:</h1>
<div class="calendar">x100 ДНЕЙ!</div>

<h1 class="RecomendationText">Новости:</h1>
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
</style>
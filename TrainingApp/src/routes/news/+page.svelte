<div style="padding-bottom: 70px;">
{#each news as news}
<span style="display: none;">{listUpdate = news.listUpdates}</span>

    <section>
        <h1>{news.title}</h1>
        <div>{news.text}</div>
        <br>
        <ol>
            {#each listUpdate as listUpdate }
                <li>{listUpdate}</li>
            {/each}
        </ol>
        <br>
        <div>{news.date}</div>
    </section>
{/each}
</div>

<script>
    let news = new Array()

    let listUpdate

    import { onMount } from "svelte"

    onMount(() => {
    fetch('http://localhost:5000/news')
            .then(res => res.json())
                .then(val => {news = val
                console.log(news)})
            })

</script>
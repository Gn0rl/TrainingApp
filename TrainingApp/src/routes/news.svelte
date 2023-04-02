<h2>{news.title}</h2>
<div bind:this={mainText}><div class="text">{news.text}</div><br/></div>
<script>
    import { onMount } from "svelte";
    import { dirty_components } from "svelte/internal";
    
    let mainText;

    let news = {title: "load", text: "load", date: "load", listUpdate: []};
    onMount(() => {
        fetch('http://localhost:5000/news?id=0')
            .then(res => res.json())
                .then(val => {
                    news.title = val.title
                    news.text = val.text
                    news.listUpdate = val.listUpdates
                    news.date = val.date

                    for(let i = 0;i < news.listUpdate.length; i++){
                        console.log(news.listUpdate[i]);
                        const div = document.createElement('div');
                        div.className = "UpdateList"
                        div.innerText = news.listUpdate[i]
                        mainText.appendChild(div)
                    }

                    const date = document.createElement('div');
                    mainText.appendChild(document.createElement('br'))
                    date.class = "date"
                    date.innerText = news.date
                    mainText.appendChild(date)

                    const more = document.createElement('a');
                    more.innerText = "Больше новостей"
                    more.href = "news"
                    mainText.appendChild(more)

                    console.log(val)
                });
    })
</script>

<style>

</style>
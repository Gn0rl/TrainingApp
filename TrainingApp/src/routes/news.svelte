<h2>{news.title}</h2>
<div bind:this={mainText}><div class="text">{news.text}</div><br/></div>
<script>
    import { onMount } from "svelte";
    
    let mainText;

    let news = {title: "load", text: "load", date: "load", listUpdate: []};
    onMount(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
                .then(val => {
                    news.title = val[0].title
                    news.text = val[0].text
                    news.listUpdate = val[0].listUpdates
                    news.date = val[0].date

                    for(let i = 0;i < news.listUpdate.length; i++){
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
                });
    })
</script>

<style>

</style>
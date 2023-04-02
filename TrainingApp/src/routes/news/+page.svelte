<div bind:this={main}></div>

<script>
    import { onMount } from "svelte";

    let main

    const Update = (val) => {
        for (const current of val) {
                        let cur = document.createElement("div")
                        let curTitle = document.createElement("h1")
                        curTitle.innerText = current.title
                        let curText = document.createElement("div")
                        curText.innerText = current.text

                        let curDate = document.createElement("div")
                        curDate.innerText = current.date

                        cur.appendChild(curTitle)
                        cur.appendChild(curText)

                        cur.appendChild(document.createElement("br"))

                        for(let i = 0; i < current.listUpdates.length; i++){
                            const dir = document.createElement('div');
                            dir.className = "UpdateList"
                            dir.innerText = current.listUpdates[i]
                            cur.appendChild(dir)
                        }

                        cur.appendChild(document.createElement("br"))

                        cur.appendChild(curDate)

                        main.appendChild(cur)
                    }

    }

    onMount(() => {
    fetch('http://localhost:5000/news?id=0')
            .then(res => res.json())
                .then(val => {Update(val)});})

</script>
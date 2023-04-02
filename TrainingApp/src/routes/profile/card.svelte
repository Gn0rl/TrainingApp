
{#if user.programId }
<UserProgram/>
{:else}

{#if choice}
{#each programs as {name, src, id}}
<OneProgram {name} {src} {id} />
{/each}
{:else}
<button on:click={getPrograms}>Выбрать программу тренировок</button>
{/if}
{/if}
<script>
    import OneProgram from "./oneProgram.svelte";
    import UserProgram from "./userProgram.svelte";
    let user = JSON.parse(localStorage.getItem('user')),
     choice = false,
     programs
    function getPrograms() {
        fetch(`http://localhost:5000/programs`)
        .then(res => res.json())
        .then(val => {
            programs = val
            choice = true
        })
        
    }
    
</script>
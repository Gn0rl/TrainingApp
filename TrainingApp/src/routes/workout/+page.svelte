{#if exercises.length && plan.length}
<section>
    <header> 
        <Header {i} quanity={plan[0].length}/>
    </header>
    <main>
        <Main exercise={exercises[plan[0][i].id]} />
    </main>
    <footer>
        <button on:click={ () => {i++}}> >> </button>
    </footer>
</section>
{/if}

<script>
    import Header from "./header.svelte"
    import Main from "./Main.svelte"
    import Footer from "./Footer.svelte"
    let plan = new Array(),
     exercises = new Array(),
     user = JSON.parse(localStorage.getItem('user')),
     i = 0
    fetch( 'http://localhost:5000/startTraining?id=' + user.programId )
    .then( res => res.json() )
    .then( training => {
        [ plan, exercises ] = training
        console.log(plan, exercises)
    } )
</script>
<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header {
        margin-bottom: 15vh;
    }
    button {
        font-size: 35px;
        padding: 10px;
        border-radius: 10px;
    }
</style>
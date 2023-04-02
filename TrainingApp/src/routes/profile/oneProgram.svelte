<div class="programBlock" style="background-image: url({src}); " >
    <h3 class="programName">{name}</h3>
    <button on:click={Choose} class="programBtn">Выбрать</button>
</div>
<script>
    export let name
    export let src
    export let id
    let user = JSON.parse(localStorage.getItem('user'))
    const Choose = () => {
        fetch( `http://localhost:5000/change?username=${user.name}&key=${'programId'}&value=${id}` )
        .then( res => res.json() )
        .then( val => {
            user = val
            localStorage.setItem('user', JSON.stringify(val))
        } )
    
    }
</script>
<style>
    .programBtn {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    .programBlock {
        position: relative;
        width: 90vw;
        max-width: 400px;
        height: 200px;
        border-radius: 10px;
        background-size: cover;
    }
    .programName {
        color: white;
    }
</style>
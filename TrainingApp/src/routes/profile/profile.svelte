<Username/>
<Card/>
<Parameters/>
<a href="profile"><img src="exit.png" alt="" on:click={exit} ></a>
<script>
    import Username from "./username.svelte";
    import Card from "./card.svelte";
    import Parameters from "./parameters.svelte";
    function exit() {
        localStorage.removeItem('name')
        localStorage.removeItem('user')
        location.href = 'login';
    }
</script>
<style>
    img {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>
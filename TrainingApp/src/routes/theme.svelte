<svelte:body class={user && user.darkTheme === 'true' ?
'blackTheme' : 'lightTheme'} />
<script>
    let user = JSON.parse(localStorage.getItem('user'))
</script>
<style>
    :global(body.blackTheme) {
        background-color: black;
        color: white;
    }
    :global(body) {
        background-color: white;
        color: black
    }
</style>
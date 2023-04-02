<footer>
    <nav>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a id="img" href="settings"><img src="settings.png" ></a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a style="margin: 0px 10vw 0px 10vw" id="img" class="home" href="/"><img src="home.png" ></a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a id="img" href="profile"><img src="profile.png"></a>
    </nav>
</footer>

<style>
    footer {
        display: flex;
        z-index: 2;
        width: 100vw;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        height: 70px;
        left: 0;
        background-color: rgb(81, 100, 207);
    }
    img {
        height: 60px;
        width: 60px;
    }
</style>
<script>
    try {
        let user = JSON.parse(localStorage.getItem('user'))
        if ( user.darkTheme === 'true' ) {
            window.document.body.classList.add('dark-mode')
        }
    } catch {}
    
</script>
<slot></slot>
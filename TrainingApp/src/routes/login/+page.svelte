<main>
    <section>
        <h1>Войти</h1>
        <input type="text" placeholder="имя" bind:value={name}>
        <input type="password" placeholder="пароль" bind:value={password}>
        <div>
            <a href="register">Нет аккаунта?</a>
            <button on:click={ login }>Войти</button>
        </div>
        {#if error}
            <p class="error" >
                {#if typeof error === 'string'}
                {error}
                {:else}
                Неверный логин или пароль
                {/if}
            </p>
        {/if }
        
    </section>

</main>

<script>
    let name = '',
     password = '',
     error = false
    function login () {
        try {
            fetch(`http://localhost:5000/login?username=${name}&password=${password}`).then(
                res => {
                    if ( res.ok ) {
                        error = false
                        return res.json()
                    } else {
                        error = 'Ошибка отправки данных'
                    }
                }
            ).then( val => {
                if ( val[0].name ) {
                    localStorage.setItem('name', val[0].name)
                    localStorage.setItem('user', JSON.stringify(val[0]))
                    location = "/"
                } else {
                    error = true
                }
            } )
            if ( !error && !localStorage.getItem('user') ) error = 'Ошибка отправки данных'
        } catch {
            error = 'Ошибка отправки данных'
        }
        
        
    }
</script>

<style>
    div {
        display: flex;
        justify-content: space-between;
    }
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90vh;
    }
    input {
        border: none;
        border-bottom: 1px rgb(58, 58, 163) solid;
        font-size: 20px;
        padding: 5px;
        outline: none;
        display: block;
    }
    input + input {
        margin-top: 10px;
    }
    
    button {
        background-color: rgb(58, 58, 163);
        border: none;
        border-radius: 0.5em;
        padding: 0.5em;
        font-size: 20px;
        margin-top: 10px;
        float: right;
    }
    .error {
        color: red;
        font-weight: 700;
    }
    a {
        text-decoration: underline;
        color: blue;
        align-self: center;
    }
</style>
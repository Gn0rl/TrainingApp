<main>
    <section>
        <h1>Регистрация</h1>
        <input type="text" placeholder="имя" bind:value={name} on:input={() => {if ( !isNaN(Number(name[0])) || name[0] === '-' || name[0] === '=' || name[0] === '+' ) { name = '' }}} >
        <input type="password" placeholder="пароль" bind:value={password}>
        <button on:click={ login }>Зарегистрироваться</button>
        {#if error}
            <p>Пользователь с именем {name} уже существует</p>
        {/if }
    </section>
</main>

<script>
    let name = '',
     password = '',
     error = false
    function login () {
        fetch(`http://localhost:5000/register?username=${name}&password=${password}`).then(
            res => {
                if (res.ok) {
                    error = false
                    return res.json()
                } else {
                    error = true
                }
            }
        ).then( val => {
            if ( val[0] ) {
                error = true
                return
            }
            localStorage.setItem('name', name)
            localStorage.setItem('user', JSON.stringify(val))
            location = "/"
        } )
        
    }
</script>

<style>
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
    p {
        color: red;
        font-weight: 700;
    }
</style>
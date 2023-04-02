<main>
    <div class="loginWindow" >
        <h1>Войдите</h1>
        <section class="links">
            <a href="login" >Войти</a>
            <a href="register">Зарегистрироваться</a>
        </section>
    </div>
</main>
<style> 
    
    a {
        color: rgb(239, 238, 242);
        text-decoration: none;
        background-color: rgb(27, 27, 207);
        border-radius: 0.5em;
        padding: 1em;
        cursor: pointer;
    }
    a + a {
      margin-left: 25px;
    }
    main {
     display: flex;
     height: 90vh;
     align-items: center;
     justify-content: center;
    }
    .links {
     justify-self: center;
     display: flex;
     flex-wrap: wrap;
    }
    h1 {
     display: flex;
     flex-direction: column;
     align-items: center;
    }
    .loginWindow {
     display: grid;
     align-items: center;
     width: 400px;
     height: 300px;
     border: 5px solid grey;
     border-radius: 1em;
    }
    @media (max-width: 339px) {
        a {
            margin-bottom: 10px;
        }
        .links {
            justify-content: center;
        }
    }
 </style>
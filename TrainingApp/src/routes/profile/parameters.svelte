<h2>Было:</h2>
{#each preKeys as objectKey}
    <div class="parametr">
        {#if user[objectKey.key]}
        {objectKey.text}: {user[objectKey.key]}
        {:else}
        {objectKey.text}
        <input bind:value={objectKey.value} type="number" on:input={() => {if ( objectKey.value < 0 || objectKey.value > 11111 ) objectKey.value = 1} }>
        <button on:click={() => {change(objectKey.key, objectKey.value)}} >Отправить</button>
        {/if}
    </div>
    
{/each}

<h2>Стало:</h2>
{#each keys as objectKey}
<div class="parametr">
    {#if user[objectKey.key]}
    {objectKey.text}: {user[objectKey.key]}
    <button on:click={() => {user[objectKey.key] = false}}>Изменить</button>
    {:else}
    {objectKey.text}
    <input bind:value={objectKey.value} type="number" on:input={() => {if ( objectKey.value < 0 || objectKey.value > 11111 ) objectKey.value = 1} }>
    <button on:click={() => {change(objectKey.key, objectKey.value)}} >Отправить</button>
    {/if}
</div>

{/each}
<script>
    let user = JSON.parse(localStorage.getItem('user'))
    const preKeys = [ {key: 'startWeight' , text: 'Вес', value: ''},
    { key: 'kolPush-ups', text: 'Количество отжиманий', value: '' } ],
     keys = [ {key: 'weight' , text: 'Вес', value: ''},
     { key: 'StartKolPush-ups', text: 'Количество отжиманий', value: '' }  ],
     change = async ( key, value ) => {
        
        await fetch( `http://localhost:5000/change?username=${user.name}&key=${key}&value=${value}` )
        .then( res => res.json() )
        .then( val => {
            user = val
            localStorage.setItem('user', JSON.stringify(val))
        } )
    }
</script>
<style>
    
    input {
        padding: 0.25em;
        font-size: 20px;
        border-radius: 0.5em;
        width: 50vw;
        max-width: 200px;
    }
    .parametr {
        margin-bottom: 5px;
    }
    
</style>
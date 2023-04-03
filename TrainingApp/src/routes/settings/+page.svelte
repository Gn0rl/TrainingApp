{#if !user}
<LoginWindow/>
{:else}
{ #each settings as {checked, name, engName}}
<p><span>{name}</span> <Checkbox {checked} {engName} {user} /></p>
{/each }
{/if}



<script>
  import Checkbox from "./checkbox.svelte"
  import LoginWindow from "../profile/loginWindow.svelte";
  let user = JSON.parse(localStorage.getItem('user')) || null
    const settings = [
      {
        name: 'темная тема',
        engName: 'darkTheme',
        checked: user && (Object.keys(user).includes('darkTheme') && user['darkTheme'] === 'true') ?  true : false
      }
    ]
</script>

<style>
  span {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

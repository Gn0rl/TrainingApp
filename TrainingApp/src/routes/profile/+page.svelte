{#if userLogin}
    <Profile/>
    {:else}
    <LoginWindow/>
{/if}
<script>
    import Profile from "./profile.svelte";
    import LoginWindow from "./loginWindow.svelte";
    let userLogin = localStorage.getItem('name')
    
</script>
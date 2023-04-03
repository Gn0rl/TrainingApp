{#if userLogin}
    <div class="profile"><Profile /></div>
    {:else}
    <LoginWindow/>
{/if}
<script>
    import Profile from "./profile.svelte";
    import LoginWindow from "./loginWindow.svelte";
    let userLogin = localStorage.getItem('name')
    
</script>

<style>
    .profile{
        padding-bottom: 70px;
    }
</style>
<label class="switch">
    <input on:click={onOrEnd} bind:checked type="checkbox"/>
    <span class="slider round"></span>
</label>

<script>
    export let checked
    export let engName
    export let user
    if ( typeof checked !== 'boolean' ) checked = false
    const onOrEnd = () => {
        fetch( `http://localhost:5000/change?username=${user.name}&key=${engName}&value=${!checked}` )
        .then( res => res.json() )
        .then( val => {
            user = val
            localStorage.setItem('user', JSON.stringify(val))
            if ( user.darkTheme === 'true' ) {
                window.document.body.classList.add('dark-mode')
            } else {
                window.document.body.classList.remove('dark-mode')
            }
        } )
    }
</script>
<style>
    :global(body) {
		background-color: white;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #1972ba;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px rgb(13, 96, 164);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
<script>
    import ChartDesc from "./ChartDesc.svelte";

    export let link;
    export let title;
    export let src;
    export let desc;
    export let date;
</script>

<a href={link} target="_blank">
    <div>
        <div>
            <ChartDesc title={title} desc={desc} date={date} />
        </div>
        {#each src as s, i}    
            <img src={s} alt={"image for " + title} class={i === 1 ? "two" : ""}/>
        {/each}
    </div>
</a>

<style>
    div > * {
        width: 50%;
    }

    img.two {
        height: 100%;
    }

    a:hover, a:active, a:link, a:visited {
        text-decoration: none;
    }

    div {
        display: flex;
        flex-wrap: wrap;
    }


</style>
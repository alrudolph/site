<script>
	import ChartDesc from './ChartDesc.svelte';

	export let link;
	export let title;
	export let src;
	export let desc;
	export let date;
</script>

<a href={link} target="_blank">
	<ChartDesc {title} {desc} {date} />
	<div>
		{#each src as s, i}
			<img src={s} alt={'image for ' + title} class={i === 1 ? 'two' : 'one'} />
		{/each}
	</div>
</a>

<style>
	img {
		width: 400px;
	}

	img.two {
		width: 200px;
	}

	a:hover,
	a:active,
	a:link,
	a:visited {
		text-decoration: none;
	}

	div {
		display: flex;
		align-items: center;
	}

	@media (max-width: 700px) {
		div {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	@media (max-width: 400px) {
		.one {
			max-width: 100%;
		}
	}

	@media (max-width: 200px) {
		.two {
			max-width: 100%;
		}
	}
</style>

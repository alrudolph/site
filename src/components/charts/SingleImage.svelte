<script>
	import ChartDesc from './ChartDesc.svelte';

	export let link;
	export let title;
	export let src;
	export let desc;
	export let pos = 'left';
	export let date;
</script>

<a href={link} target="_blank">
	<div class={pos}>
		{#if pos === 'left'}
			<ChartDesc {title} {desc} {date} />
		{/if}
		<img {src} alt={'image for ' + title} />
		{#if pos === 'right'}
			<ChartDesc {title} {desc} {date} />
		{/if}
	</div>
</a>

<style>
	img {
		width: 400px;
	}
	a:hover,
	a:active,
	a:link,
	a:visited {
		text-decoration: none;
	}
	div {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	@media (max-width: 700px) {
		.left {
			flex-wrap: wrap;
		}
		.right {
			flex-wrap: wrap-reverse;
		}
		div {
			justify-content: center;
		}
	}
	@media (max-width: 400px) {
		img {
			max-width: 100%;
		}
	}
</style>

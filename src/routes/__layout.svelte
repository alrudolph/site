<script lang="ts">
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
</script>

<svelte:body />

<main>
	<Header />
	<div>
		<article>
			<slot />
		</article>
	</div>
	<Footer />
</main>

<style>
	div {
		padding: 10px;
		display: flex;
		justify-content: center;
	}
	article {
		width: 700px;
	}
	@media (max-width: 700px) {
		article {
			width: 100%;
		}
	}
	:global(body) {
		margin: 0px;
		color: #333;
		font-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(a) {
		color: rgb(0, 100, 200);
		text-decoration: none;
	}
</style>

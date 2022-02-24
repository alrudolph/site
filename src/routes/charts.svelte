<script>
	import * as posts from '../blog/data.json';
	import SingleImage from '../components/charts/SingleImage.svelte';
	import TwoImages from '../components/charts/TwoImages.svelte';
	import MultipleImages from '../components/charts/MultipleImages.svelte';

	const sortedPosts = posts.items
		.map((d) => ({
			...d,
			fields: { ...d.fields, date: new Date(d.fields.date) }
		}))
		.sort((a, b) => {
			return b.fields.date.getTime() - a.fields.date.getTime();
		});
</script>

<h1>Charts for Daily Nexus Labyrinth</h1>
<p>
	For the 2021-22 school year, I was the data editor for UCSB's <a
		href="https://dailynexus.com/category/data"
		target="_blank">Daily Nexus Data Section</a
	>.
</p>
{#if posts}
	{#each sortedPosts as p, i}
		<div>
			{#if p.fields.image.length === 1}
				<SingleImage
					title={p.fields.title}
					src={p.fields.image[0].fields.file.url}
					link={p.fields.link.content[0].content[0].value}
					desc={p.fields.desc}
					pos={i % 2 === 0 ? 'left' : 'right'}
					date={p.fields.date}
				/>
			{:else if p.fields.image.length === 2}
				<TwoImages
					title={p.fields.title}
					src={p.fields.image.map((i) => i.fields.file.url)}
					link={p.fields.link.content[0].content[0].value}
					desc={p.fields.desc}
					date={p.fields.date}
				/>
			{:else}
				<MultipleImages
					title={p.fields.title}
					src={p.fields.image.map((i) => i.fields.file.url)}
					link={p.fields.link.content[0].content[0].value}
					desc={p.fields.desc}
					date={p.fields.date}
				/>
			{/if}
		</div>
	{/each}
{/if}

<style>
	div {
		margin: 50px 0 125px 0;
	}
	h1 {
		font-weight: 100;
	}
	p {
		margin: 0;
	}
</style>

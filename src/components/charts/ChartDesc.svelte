<script>
    import { timeFormat } from "d3-time-format"

    export let title
    export let desc
    export let date

    const format = timeFormat("%B %-d, %Y")
</script>

<div>
    <h2>{title}</h2>
    <p class="article-date-box">Published {format(date)}</p>
    <p>{desc}</p>
</div>

<style>
    div {
        background-color: #adadad15;
        padding: 5px;
    }
    h2, p {
        padding: 0;
        margin: 0;
        color: black;
    }
    h2 {
        font-weight: normal;
    }
    p.article-date-box {
        font-size: 10pt;
        padding: 5px 0;
        width: auto;
    }
</style>
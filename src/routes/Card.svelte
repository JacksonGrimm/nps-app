<script>
    export let park 
</script>

<div class=card>
    <img src={park.images[0].url} alt=""/>
    <div class=aside>
        <h1>{park.fullName}</h1>
        <p>{park.states}</p>
        <p>{park.description}</p>
        <br />
    </div>
</div>


<style>
    .card{
        border-radius: 5%;
        display: flex;
        margin: 2%;
        background-color: #fcfbf5;
    }
    .aside{
        display: flex;
        flex-direction: column;
        margin: 2%;
    }
    img {
        width: 250px;
        object-fit: cover;
    }
</style>
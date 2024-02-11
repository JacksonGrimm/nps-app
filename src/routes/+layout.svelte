<script lang="ts">
  import handleNpsData from "./script";

  import Card from "./Card.svelte";
  let data = handleNpsData("CO");
</script>

<div>
  <main>
    <h1>National Parks Service</h1>
  </main>

  <form
    action=""
    on:submit={(e) => {
      e.preventDefault();
      data = handleNpsData(e.target.children[1].value);
    }}
  >
    <p>Select State: CO, AK, NY...</p>
    <input type="text" name="state" id="state" maxlength="2" />
    <button>Lets Go!</button>
  </form>
  {#if data}
    {#await data}
      <p>waiting for parks to populate...</p>
    {:then parks}
      {#each parks as park}
        <Card {park} />
      {/each}
    {:catch error}
      <p>Something went wrong: {error.message}</p>
    {/await}
  {/if}
</div>

<style>
</style>

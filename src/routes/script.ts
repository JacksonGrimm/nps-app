async function fetchNps(state) {
  if (!state) return;
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=${state.toUpperCase()}}&api_key=ghDseNHrR36kawXtMRDPM3LL1oBoNJDdwOsQhbve`
  );
  return await response.json();
}

function formatData({ data }) {
  return data;
}

async function handleNpsData(state) {
  if (!state) return;
  const response = await fetchNps(state);
  const formattedResponse = formatData(response);
  return formattedResponse;
}

export default handleNpsData;

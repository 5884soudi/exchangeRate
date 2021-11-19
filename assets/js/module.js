async function callApi() {
    const res = await fetch("http://api.exchangeratesapi.io/v1/latest?access_key=373f6a4c6a91b0d67715af14b524c847&format=1")
    const manys = await res.json();
    console.log(manys);
}
callApi();
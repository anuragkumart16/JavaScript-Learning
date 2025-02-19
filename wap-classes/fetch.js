const hello =fetch('https://www.reddit.com/r/javascript/top/.json?limit=5%27',{
}).then(response=> response.json()).then(data=>console.log(data))
console.log("hello world")

let navSlide = ()=> {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-link');
    let navLink = document.querySelectorAll('.nav-link li');
    
    burger.addEventListener('click',()=>{
        
        nav.classList.toggle('nav-active');
    
        navLink.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 16}s`;
            }
        })
        
        burger.classList.toggle('toggle')
    })
    
}

 
navSlide();




//for each item in my class .winestyle
//add an eventlistner
document.querySelectorAll('.winestyle').forEach(item => {
    //add an eventlistner to my "li"
  item.addEventListener('click', event => {
      //define what winecolor is => grab the dataset set in my li and set it to the url
      const winecolor = item.getAttribute("data-winestyle")
      //pass the vintage into the url
      const vintage = 2014
      //pass the number of result into the
      var numOfResults = 1
      const url = 
            `https://private-anon-4193a33fde-globalwinescore.apiary-mock.com/globalwinescores/latest/?vintage=${vintage}&color=${winecolor}&limit=${numOfResults}`
      console.log(url)
    //headers grabs the Authorization and uses the GET method
    const otherParam={
        headers: {Accept: 'application/json', Authorization: 'Token 11f9aa1f0cf23ee030e91da6485091a0a5899e0a'},
        method: 'GET'
    }

    //Grab the URL and Param
    fetch(url, otherParam)
      //return the data from the url of the API
    .then(data=>{return data.json()})
      //The response from the API
    .then(response=>{
        const redWines = response.results
        const winelist = document.querySelector('#winelist')
        winelist.innerHTML = ""
        //this console's the entire array
        console.log(redWines)
        const nodeList = document.createElement("OL")
        for(var i = 0; i<numOfResults; i++){
//            console.log(console.log(redWines[i])
            const wineName = redWines[i].wine
            const textnode = document.createTextNode(wineName);
            var node = document.createElement("li");
            node.appendChild(textnode)
            nodeList.appendChild(node)
        }
        winelist.innerHTML = nodeList.innerHTML 
    })
      //error code for when array is empty
      .catch(err => {
        winelist.innerHTML="Nothing Found for this vintage"
    })
  })
})                        

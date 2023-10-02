const homePage = (() => {
    //container 
    const contentContainer = document.querySelector("#content");

    const home = document.createElement("div");
    home.classList.add("tab-content");
    home.innerHTML = `<div id="home" class="active" data-tab-content>
    <div class="hero">
    <h1>Come on down for some delicious cuisine!</h1>
    <p>Tasty and affordable!</p>
    <div class="btn-container">
      <a data-tab-target="#menu" class="order-now">Order Now</a>
    </div>
    </div`;

    contentContainer.appendChild(home);
})();

export {homePage}
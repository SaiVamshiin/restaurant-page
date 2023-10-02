const contactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = `
      <div class="hero">
      <h1>Contact us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="address">
          <p>
            <i class="fi-xnsuxl-map-marker-solid"></i>1124 Charminar Street<br />
             East Gate
            
          </p>
        </div>
        <div class="hours">
          <p>
            <i class="fi-cnsuhl-clock-solid"></i
            ><span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
            >8am-11pm
          </p>
        </div>
        <div class="phone">
          <p><i class="fi-xnsrxl-phone-solid"></i>(+91) 868 6316 654</p>
        </div>
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
            <div class="input-box">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Type your message...</span>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4395.82587922301!2d78.47606547428934!3d17.35418594773442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1696248180587!5m2!1sen!2snp"
       width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        loading="lazy" 
        aria-hidden="false"
        tabindex="0"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>`;
  
    contentContainer.appendChild(contact);
  })();
  
  export { contactPage };
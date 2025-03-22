let hasEntered = false; 

    function enterBio() {
      if (hasEntered) return;
      hasEntered = true;
      
      const enterScreen = document.getElementById("enter-screen");
      const bioContainer = document.querySelector(".bio-container");
      const audio = document.getElementById("bg-music");

      enterScreen.style.opacity = "0";
      setTimeout(() => {
        enterScreen.style.display = "none";
        bioContainer.style.display = "block";
        bioContainer.style.opacity = "1";
        audio.play().catch(error => console.log("Autoplay blocked:", error));
      }, 100);
    }

    document.addEventListener("click", enterBio);
    document.getElementById("enter-text").addEventListener("click", function(event) {
      event.stopPropagation();
      enterBio();
    });
    document.getElementById("bg-music").addEventListener("ended", function() {
      this.currentTime = 0;
      this.play().catch(error => console.log("Autoplay blocked after restart:", error));
    });
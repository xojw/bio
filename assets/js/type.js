const zeroWidthSpace = "\u200B";
    document.title = zeroWidthSpace;

    const nameStr = "sent";
    let currentIndex = 0;
    let deleting = false;

    function updateTitle() {
      if (!deleting) {
        currentIndex++;
        if (currentIndex === nameStr.length) {
          deleting = true;
        }
      } else {
        currentIndex--;
        if (currentIndex === 0) {
          deleting = false;
        }
      }
      document.title = currentIndex === 0 ? zeroWidthSpace : nameStr.substring(0, currentIndex);
    }
    setInterval(updateTitle, 500);
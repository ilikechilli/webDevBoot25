const deleteButton = document.querySelector("#deleteButton");
    deleteButton.addEventListener("submit", (e) => {
      const verify = confirm("Are you sure you wish to delete this campground?");
      if (!verify) {
        e.preventDefault();
      }
    })
window.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title"),
      author = document.getElementById("author"),
      year = document.getElementById("year"),
      button = document.querySelector(".btn"),
      bookList = document.getElementById("book-list");

      button.addEventListener('click', (event) => {
        event.preventDefault();

        // Basic validation
        if(title.value == "" && author.value == "" && year.value == "") {
          alert("Please input your information.")
        }
        else {
          const newRow = document.createElement("tr");
          newRow.classList.add("tr")

          // Creating new Title
          const newTitle = document.createElement("th");
          newTitle.innerHTML = title.value;
          newRow.appendChild(newTitle);

          // Creating new Title
          const newAuthor = document.createElement("th");
          newAuthor.innerHTML = author.value;
          newRow.appendChild(newAuthor);

          // Creating new Title
          const dataYear = document.createElement("th");
          dataYear.innerHTML = year.value;
          newRow.appendChild(dataYear);

          // Displaying in UI
          bookList.appendChild(newRow);

          title.value = "";
          author.value = "";
          year.value = "";
        }
      })
})
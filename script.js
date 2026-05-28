        function openModal(title, description, price, image) {

            document.getElementById("course-modal")
            .style.display = "flex";

            document.getElementById("modal-title")
            .innerHTML = title;

            document.getElementById("modal-description")
            .innerHTML = description;

            document.getElementById("modal-price")
            .innerHTML = price + " грн/місяць";

            document.getElementById("modal-img")
            .src = image;
        }

        function closeModal(event) {
            if (event.target.id === "course-modal") {

                document.getElementById("course-modal")
                .style.display = "none";
            }   
        }


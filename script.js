 
        function openModal(title, description, price, image) {

            document.getElementById("course-modal")
            .style.display = "flex";

            setTimeout(() => {
                modal.classList.add("show");//додаємо клас "show" привідкритті
            }, 10);

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
                // функція закриття модального вікна
        function closeModal(event) {
            if (event.target.id === "course-modal") {
                
                const modal = document.getElementById("course-modal");

                modal.classList.remove("show");

                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }   
        }

        const modal = document.getElementsById("course-modal");//змінна модал




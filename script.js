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


            //функції форми заявки - відкриття
        function openTrialModal() {

            document.getElementById("trial-modal")
            .style.display = "flex";
        }
            
            //функції форми заявки - закриття
        function closeTrialModal() {

            document.getElementById("trial-modal")
            .style.display = "none";
        }

            //функції форми підтвердження заявки
        function submitTrialForm() {
            const name =
            document.getElementById("customer-name").value;

            const phone =
            document.getElementById("customer-phone").value;

            const age =
            document.getElementById("customer-age").value;

            if (!name || !phone || !age) {

                alert("Заповніть необхідні поля😉");
                return;
            }

            alert(
                "Дякуємо за заявку, " + name + "😎\n\n" + 
                "Очікуйте дзвінка нашого менеджера📞"
            );

            closeTrialModal();
        }  
        
        function toggleFAQ(question) {

            let answer = question.nextElementSibling;

            //if(answer.style.display === "block") {answer.style.display = "none";} else {answer.style.display = "block";}
            let isOpen = (answer.style.display === "block");//1 перевіряємо чи ця відповідь відкрита
            //2-знаходимо всі відповіді на сторінці і ховаємо їх
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = "none";
            });
                //3-якщо клікнута відповідь була закритою - то вона відкривається
            if (!isOpen) {
                answer.style.display = "block";
            }
           
        }

        function signupCourse() {
            document.getElementById('course-modal').style.display = 'none';

            openTrialModal();
        }
        
        
            

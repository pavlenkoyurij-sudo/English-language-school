
     
        function openModal(title, description, priceText, image) {

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
            .innerHTML = priceText;

            document.getElementById("modal-img")
            .src = image;
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

        const modal = document.getElementById("course-modal");//змінна модал, також прибрано s:getElementByIds


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

        
            //робота блоку ФАК
        function toggleFAQ(question) {

            let answer = question.nextElementSibling;

            //перевіряємо чи саме ця відповідь відкрита
            let isOpen = answer.classList.contains('open');

            //закриваємо всі інші відповіді
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer) {         
                    ans.classList.remove('open');
                }
            });

            //якщо поточна була відкрита - закриваємо її, якщо закрита - відкриваємо
            answer.classList.toggle('open');
        }




        function signupCourse() {
            document.getElementById('course-modal').style.display = 'none';

            openTrialModal();
        }


        const btn = document.getElementById("scrollToTopBtn");

                //показуєт кнопку, коли юзер прокручує сторінку до низу
        window.addEventListener("scroll", function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btn.classList.add("show");
            } else {
                btn.classList.remove("show");
            }
        });

        
                //прокручує сторінку плавно до самого верху при наимсканні
        btn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"//забезпечує плавний скролінг
            });
        });
        
        
        

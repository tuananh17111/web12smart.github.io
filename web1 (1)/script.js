let currentIndex = 0;
        const sliderContent = document.querySelector('.slider-content');
        const images = document.querySelectorAll('.slider-content-picture a');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        // Cập nhật vị trí của slider
        function updateSlide() {
            sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Di chuyển đến slide trước
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            updateSlide();
        });

        // Di chuyển đến slide tiếp theo
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateSlide();
        });

        // Tự động chuyển slide mỗi 3 giây
        setInterval(() => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            updateSlide();
        }, 3000);
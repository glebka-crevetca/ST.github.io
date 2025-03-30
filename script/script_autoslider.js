document.addEventListener('DOMContentLoaded', function() {
    const sliderBlocks = [
        document.getElementById('slider-1'),
        document.getElementById('slider-2'),
        document.getElementById('slider-3'),
        document.getElementById('slider-4'),
        document.getElementById('slider-5'),
        document.getElementById('slider-6'),
        document.getElementById('slider-7'),
        document.getElementById('slider-8')
    ].filter(block => block !== null);

    if (sliderBlocks.length === 0) return;

    const slidesCount = sliderBlocks[0].querySelectorAll('.slide').length;
    let currentIndex = 0;

    function showSlide(block, index) {
        const slides = block.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index % slides.length].classList.add('active');
    }

    async function startSlider() {
        while (true) {
            showSlide(sliderBlocks[0], currentIndex);
            showSlide(sliderBlocks[3], currentIndex);
            await new Promise(r => setTimeout(r, 100));

            showSlide(sliderBlocks[1], currentIndex);
            showSlide(sliderBlocks[4], currentIndex);
            await new Promise(r => setTimeout(r, 100));

            showSlide(sliderBlocks[2], currentIndex);
            showSlide(sliderBlocks[5], currentIndex);
            await new Promise(r => setTimeout(r, 100));

            showSlide(sliderBlocks[6], currentIndex);
            showSlide(sliderBlocks[7], currentIndex);
            await new Promise(r => setTimeout(r, 1600));

            currentIndex = (currentIndex + 1) % slidesCount;
        }
    }

    startSlider().catch(console.error);
});

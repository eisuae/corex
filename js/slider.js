class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.slideDuration = 5000;

        if (this.slides.length === 0) {
            console.warn('No slides found.');
            return;
        }

        this.init();
    }

    init() {
        this.preloadImages();
        this.showSlide(0);
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.resetInterval();
            });
        });
        this.startInterval();
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopInterval());
            slider.addEventListener('mouseleave', () => this.startInterval());
        }
    }

    preloadImages() {
        const fallbackColors = ['#0d5ca5', '#1a2a3a', '#0d5ca5', '#1a2a3a'];
        this.slides.forEach((slide, index) => {
            const bgImage = window.getComputedStyle(slide).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                const url = bgImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                const img = new Image();
                img.onerror = () => {
                    slide.style.backgroundImage = 'none';
                    slide.style.backgroundColor = fallbackColors[index % fallbackColors.length];
                };
                img.src = url;
            } else {
                slide.style.backgroundImage = 'none';
                slide.style.backgroundColor = fallbackColors[index % fallbackColors.length];
            }
        });
    }

    showSlide(index) {
        if (!this.slides[index] || !this.dots[index]) return;
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        this.currentSlide = index;
    }

    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.slides.length) nextIndex = 0;
        this.showSlide(nextIndex);
    }

    startInterval() {
        this.stopInterval();
        if (this.slides.length > 0) {
            this.slideInterval = setInterval(() => this.nextSlide(), this.slideDuration);
        }
    }

    stopInterval() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    resetInterval() {
        this.stopInterval();
        this.startInterval();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelectorAll('.slide').length > 0) {
        new HeroSlider();
    }
});
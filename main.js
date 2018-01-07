var topNav = new Vue({
    el: '#myTopnav',
    data: {
        isActive: false,
        isOpen: true,
        scrollState: 0
    },
    methods: { 
        handleScroll () {
            const currentScroll = window.scrollY;
            if (currentScroll === 0) {
                return;
            } else if (currentScroll > this.scrollState) {
                this.isOpen = false;
            } else this.isOpen = true;

            this.scrollState = currentScroll;
        }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll)
    }
})

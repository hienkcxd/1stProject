class StickyNavigation {

    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.Tag').click(function() {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if(this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset = $('.Tag').offset().top + $('.Tag').height() - this.tabContainerHeight;
        if($(window).scrollTop() > offset) {
            $('.navcontainer').addClass('navcontainer--top');
        }
        else {
            $('.navcontainer').removeClass('navcontainer--top');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.Tag').each(function() {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.navSlide').css('width', width);
        $('.navSlide').css('left', left);
    }

}

new StickyNavigation();
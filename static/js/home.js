class Filter {

    constructor(btnSelector, itemsSelector) {
        this.btnSelector = btnSelector;
        this.itemAttrName = 'filter';

        this.categoryBtn = $(btnSelector);
        this.items = $(itemsSelector);

        this.processFilterClick = this.processFilterClick.bind(this);
        this.filterSelection = this.filterSelection.bind(this);

        this.categoryBtn.on('click', this.processFilterClick);
    }


    processFilterClick(event) {
        // Get clicked element from `event.target` as `this` is overrided by Filter object
        var clickedBtn = $(event.target);
        var activeBtn = $(this.btnSelector + '.active');
        var category = clickedBtn.attr(this.itemAttrName);

        activeBtn.removeClass('active');
        clickedBtn.addClass('active');

        this.filterSelection(category);
    }

    filterSelection (categoryName) {
        // if show all, add `show` class to all items and return
        if (categoryName === 'all') {
            this.items.addClass('show');
            return;
        }

        // hide all by default
        this.items.removeClass('show');

        // show only items which have `categoryName` class
        this.items.map(function (idx, item) {
            let elem = $(item);
            if (elem.hasClass(categoryName)) {
                elem.addClass('show');
            }
        });
    };

}

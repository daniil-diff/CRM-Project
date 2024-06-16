document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');
    const contentArea = document.getElementById('content-area');

    const dashboardContent =  `
    <div class="content__header">
        <div class="content__titles">
            <h3 class="content__title">All Customers</h3>
            <p class="content__subtitle">Active Members</p>
        </div>
        <div class="content__search">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input type="text" class="search" placeholder="Search">
        </div>
    </div>
    <table class="content__table table">
        <thead class="table__head">
            <tr class="table__row">
                <th class="table__cell">Customer Name</th>
                <th class="table__cell">Company</th>
                <th class="table__cell">Phone Number</th>
                <th class="table__cell">Email</th>
                <th class="table__cell">Country</th>
                <th class="table__cell">Status</th>
            </tr>
        </thead>
        <tbody class="table__body">
                        <tr class="table__row">
                            <td class="table__cell">Jane Cooper</td>
                            <td class="table__cell">Microsoft</td>
                            <td class="table__cell">(225) 555-0118</td>
                            <td class="table__cell">jane@microsoft.com</td>
                            <td class="table__cell">United States</td>
                            <td class="table__cell table__cell--status table__cell--status--active">Active</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Floyd Miles</td>
                            <td class="table__cell">Yahoo</td>
                            <td class="table__cell">(205) 555-0100</td>
                            <td class="table__cell">floyd@yahoo.com</td>
                            <td class="table__cell">Kiribati</td>
                            <td class="table__cell table__cell--status table__cell--status--inactive">Inactive</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Ronald Richards</td>
                            <td class="table__cell">Adobe</td>
                            <td class="table__cell">(302) 555-0107</td>
                            <td class="table__cell">ronald@adobe.com</td>
                            <td class="table__cell">Israel</td>
                            <td class="table__cell table__cell--status table__cell--status--inactive">Inactive</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Marvin McKinney</td>
                            <td class="table__cell">Tesla</td>
                            <td class="table__cell">(252) 555-0126</td>
                            <td class="table__cell">marvin@tesla.com</td>
                            <td class="table__cell">Iran</td>
                            <td class="table__cell table__cell--status table__cell--status--active">Active</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Jerome Bell</td>
                            <td class="table__cell">Google</td>
                            <td class="table__cell">(629) 555-0129</td>
                            <td class="table__cell">jerome@google.com</td>
                            <td class="table__cell">Réunion</td>
                            <td class="table__cell table__cell--status table__cell--status--active">Active</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Kathryn Murphy</td>
                            <td class="table__cell">Microsoft</td>
                            <td class="table__cell">(406) 555-0120</td>
                            <td class="table__cell">kathryn@microsoft.com</td>
                            <td class="table__cell">Curaçao</td>
                            <td class="table__cell table__cell--status table__cell--status--active">Active</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Jacob Jones</td>
                            <td class="table__cell">Yahoo</td>
                            <td class="table__cell">(208) 555-0112</td>
                            <td class="table__cell">jacob@yahoo.com</td>
                            <td class="table__cell">Brazil</td>
                            <td class="table__cell table__cell--status table__cell--status--active">Active</td>
                        </tr>
                        <tr class="table__row">
                            <td class="table__cell">Kristin Watson</td>
                            <td class="table__cell">Facebook</td>
                            <td class="table__cell">(704) 555-0127</td>
                            <td class="table__cell">kristin@facebook.com</td>
                            <td class="table__cell">Åland Islands</td>
                            <td class="table__cell table__cell--status table__cell--status--inactive">Inactive</td>
                        </tr>
                    </tbody>
    </table>
`;

    const customersContent = dashboardContent;

    const otherContentTemplate = (section) => `
        <div class="content__header">
            <div class="content__titles">
                <h3 class="content__tit">${section}</h3>
                <p class="content__par">All about ${section}</p>
            </div>
        </div>
    `;

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;

           
            navLinks.forEach(nav => nav.parentElement.classList.remove('nav__item--active'));
            
            this.parentElement.classList.add('nav__item--active');

            if (section === 'dashboard') {
                contentArea.innerHTML = dashboardContent;
            } else if (section === 'customers') {
                contentArea.innerHTML = customersContent;
            } else {
                contentArea.innerHTML = otherContentTemplate(section);
            }
        });
    });
});

document.querySelectorAll('.pagination__item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.pagination__item--active').classList.remove('pagination__item--active');
        item.classList.add('pagination__item--active');
    });
});
const paginationItems = document.querySelectorAll('.pagination__item');
const paginationArrows = document.querySelectorAll('.pagination__arrow');

paginationItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.pagination__item--active').classList.remove('pagination__item--active');
        item.classList.add('pagination__item--active');

        // Enable/Disable arrows based on the active item
        const activeIndex = Array.from(paginationItems).indexOf(item);
        if (activeIndex === 0) {
            paginationArrows[0].classList.add('pagination__arrow--disabled');
        } else {
            paginationArrows[0].classList.remove('pagination__arrow--disabled');
        }
        if (activeIndex === paginationItems.length - 2) { // Adjust for the "..." item
            paginationArrows[1].classList.add('pagination__arrow--disabled');
        } else {
            paginationArrows[1].classList.remove('pagination__arrow--disabled');
        }
    });
});

paginationArrows[0].addEventListener('click', () => {
    if (!paginationArrows[0].classList.contains('pagination__arrow--disabled')) {
        const activeItem = document.querySelector('.pagination__item--active');
        const previousItem = activeItem.previousElementSibling;
        if (previousItem && previousItem.classList.contains('pagination__item')) {
            activeItem.classList.remove('pagination__item--active');
            previousItem.classList.add('pagination__item--active');
        }
    }
});

paginationArrows[1].addEventListener('click', () => {
    if (!paginationArrows[1].classList.contains('pagination__arrow--disabled')) {
        const activeItem = document.querySelector('.pagination__item--active');
        const nextItem = activeItem.nextElementSibling;
        if (nextItem && nextItem.classList.contains('pagination__item')) {
            activeItem.classList.remove('pagination__item--active');
            nextItem.classList.add('pagination__item--active');
        }
    }
});
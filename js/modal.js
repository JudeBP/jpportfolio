
var projects = JSON.parse(`
[
    {
    "name": "Basic Payroll App",
    "description": "A desktop application that records the attendance users/employees and computes their pay",
    "img": "images/payroll/payroll_panel.jpg",
    "type": "desktop",
    "git": "https://github.com/JudeBP/payroll-app",
    "toolLinks": [
        "images/java-programming-language.svg","images/sql.svg", "images/mysql.svg"
        ],
    "sections": [
            {
                "img": "images/payroll/reports_panel.jpg",
                "description": "The payroll application allows the user, particularly the HR in charge of the payroll,  record the attendance with the desktop app into the payroll database. With this, the  BASIC pay of the employees."
            },
            {
                "img": "images/payroll/payroll_panel.jpg",
                "description": "The start and end date of the payroll is generated automatically, but the user can still edit  both if he/she wants or needs to. After genarating the payroll, all the pay factors and deductions  are shown below for reference, but cannot be edited. These can be saved and exported as PDF."
            },
            {
                "img": "images/payroll/recs_panel.jpg",
                "description": "Some additional pays and deductions can also be recorded into the database and will be added to the computation for the monthly payments. This is also where the government deductions can be recorded, meaning that part is also manually recorded which can be further improved in the future."
            }
        ]
    },

    
    {
    "name": "Supply Chain Tracker",
    "description": "A desktop application that keeps track of the transactions made for the supplies",
    "img": "images/supply_chain/tracker.jpg",
    "type": "desktop",
    "git": "https://github.com/JudeBP/supplychain_tracker",
    "toolLinks": [
        "images/java-programming-language.svg","images/sql.svg", "images/mysql.svg"
        ],
    "sections": [
            {
                "img": "images/supply_chain/project.jpg",
                "description": "The dashboard of the software is straightforward, the pending orders and unsigned purchase requests are shown to see which are not yet processed. A bar graph shows which supplier is most chosen to buy products from."
            },
            {
                "img": "images/supply_chain/cart.jpg",
                "description": "The main feature of the tracker is the local market and/or the 'add to cart' feature. This allows the user to select the locally-stored items to be bought from the partnered suppliers.  The items are inserted manually by the software admins. These transactions are tracked and finalized once  the official receipt is recieved from the supplier."
            },
            {
                "img": "images/supply_chain/pr_form.jpg",
                "description": "Forms such as the purchase requisition or request (PR) contain multiple inputs to be recorded. Since the database is normalized (3rd normal form), other fields are not recorded redundantly."
            },
            {
                "img": "images/supply_chain/tracker.jpg",
                "description": "The tracker in the form of a table shows the status of all the transactions, where it can be filtered to see the summary of each transaction, e.g. what the item/s ordered are and from which supplier it was ordered from."
            }
        ]
    },

    {
    "name": "Stock Trading Website",
    "description": "Basic CRUD website/system for stock trading with basic functionalities and basic security implementations.",
    "img": "images/stock_trade/stock-trade.png",
    "type": "website",
    "git": "https://github.com/JudeBP/jljd-stock-trade",
    "toolLinks": [
        "images/html.svg","images/css.svg", "images/php.svg","images/javascript.svg","images/mysql.svg"
        ],
    "sections": [
            {
                "img": "images/stock_trade/stock-trade.png",
                "description": "The landing page of the website shows guests and visitors general details about the trading site. They can register as a trader to have an account and access their dashboards and the stocks to start trading."
            },
            {
                "img": "images/stock_trade/login.png",
                "description": "User authentication is a part of the system with basic security measures such as preventions from injections and brute force attacks. "
            },
            {
                "img": "images/stock_trade/dashboard.png",
                "description": "A trader will have a dashboard to see his/her progress in trading. The dashboard consists of basic reports such as their total transactions, earnings, and others. A chart is also present for a better visualization on their performance per week (Not functional yet as shown in the picture)."
            },
            {
                "img": "images/stock_trade/market.png",
                "description": "The market has all the available stocks for the users to trade, where they can select a stock buy/sell."
            }
        ]
    },


    {
    "name": "Lecture Management App",
    "description": "Cross-platform mobile application that manages classes/groups and files for sharing",
    "img": "images/mobile/login.jpg",
    "type": "mobile",
    "git": "https://github.com/JudeBP/lectureManagementApp",
    "toolLinks": [
        "images/ionic.svg", "images/laravel.svg","images/angular.svg", "images/typescript.svg","images/mysql.svg"
        ],
    "sections": [
            {
                "img": "images/mobile/register.jpg",
                "description": "A user is created through the registration page of the app. Basic fields are needed such as the name, email, username, and password."
            },
            {
                "img": "images/mobile/login.jpg",
                "description": "User authentication is a part of the system. Loggin in requires the username/email and password of the registered user."
            },
            {
                "img": "images/mobile/groups.jpg",
                "description": "The list of groups joined can be seen and each group has its members and files shared. If the user is the owner/creatord of the group, he/she can add members through a code."
            },
            {
                "img": "images/mobile/generate-code.jpg",
                "description": "The generated code is unique for the class/group, and students who want to join can use the code to automatically join the class."
            }
        ]
    }
]`)

const projectsContainer = document.querySelector('.projects-container');
projects.forEach((project) => {
    projectsContainer.innerHTML += ` <li>
                <div class="project">
                    <img class="${project.type === 'mobile' ? 'project-cover-mobile' : 'project-cover'}" src='${project.img}'>
                    <div class="title">
                        <header>
                            <h4>${project.name}</h4>
                        </header>
                        <p> ${project.description} </p>
                        <div class="btn-container">
                            <a href="${project.git}" target='_blank' rel='noopener noreferrer'>
                                <img src="images/github-icon.svg">
                            </a>
                            <button class="btn-details open-modal"> Details </button>
                        </div>
                    </div>
                </div>
            </li>`;
});

const modalOverlay = document.querySelector('.modal-overlay')
const openModals = document.querySelectorAll('.open-modal')
const closeModal = document.querySelector('.close-modal')

openModals.forEach((btn) => {
    btn.addEventListener('click', function () {
        const projectTitle = btn.parentElement.parentElement.querySelector('h4').textContent
        modalOverlay.querySelector('.modal-title').innerHTML = `<h4>${projectTitle}</h4>`
        openProject(projectTitle)
        modalOverlay.classList.toggle('open-modal')

    })
})
closeModal.addEventListener('click', function () {
    modalOverlay.classList.toggle('open-modal')
})
window.onclick = function (e) {
    if (e.target === modalOverlay && modalOverlay.classList.contains('open-modal')) {
        modalOverlay.classList.remove('open-modal')
    }
}

// Open project details 
function openProject(project) {
    let hasProject = false
    // Loop through array of data sections
    projects.forEach((projectSection) => {
        // Check if title matches project name
        if (projectSection.name === project) {
            // clear sections and add the new sections from array data
            const modalSections = modalOverlay.querySelector('.modal-content')
            modalSections.innerHTML = ''
            let projectTools = document.createElement('div')
            projectTools.classList.add('modal-tools')
            projectSection.toolLinks.forEach((tool) => {
                projectTools.innerHTML += `<img src='${tool}'>`
            })
            modalSections.appendChild(projectTools)
            modalSections.innerHTML += `<div><a class="btn-view-code" href="${projectSection.git}" target='_blank' rel='noopener noreferrer'>
                    <img src="images/github-black.svg"> View Code </a></div>
            `
            projectSection.sections.forEach((section) => {
                modalSections.innerHTML += `
                        <section class="modal-section">
                            <article>
                                <img src="${section.img}">
                                <p>${section.description} </p>
                            </article>
                        </section>`
            })
            hasProject = true;
            // Check if website type, then add "Visit Site" button
            // if (projectSection.type === 'website') {
            //     modalOverlay.querySelector('.modal-title').innerHTML += `
            //     <a href='${projectSection.link}' class='btn-visit' 
            //         target='_blank' rel='noopener noreferrer'> Visit Site</a>
            //     `
            // }
        }
    })

    if (!hasProject) {
        modalOverlay.querySelector('.modal-content').innerHTML = `
        <div class="maintenance-container">
            <img src="images/maintenance.svg" alt="maintenance">
            <h4> I'm on it! </h4>
            <p> This part is still on the works. Will be up soon!</p>
        </div>`
    }
}



const modalOverlay = document.querySelector('.modal-overlay')
const openModals = document.querySelectorAll('.open-modal')
const closeModal = document.querySelector('.close-modal')

openModals.forEach((btn) => {
    btn.addEventListener('click', function () {
        modalOverlay.classList.toggle('open-modal')
    })
})
closeModal.addEventListener('click', function () {
    modalOverlay.classList.toggle('open-modal')
})
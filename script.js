document.getElementById('toggleBtn').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});
const jobs = document.getElementById("jobs");
    const subMenu = document.querySelector(".subMenu");

    jobs.addEventListener("click", () => {
      // Toggle the 'show' class on the subMenu div
      subMenu.classList.toggle("show");
    })
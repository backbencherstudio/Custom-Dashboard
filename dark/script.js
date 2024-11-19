document.getElementById('toggleBtn').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('open');
});
const jobs = document.getElementById("jobs");
    const subMenu = document.querySelector(".subMenu");
    const subMenu2 = document.querySelector(".subMenu2");

    jobs.addEventListener("click", () => {
      // Toggle the 'show' class on the subMenu div
      subMenu.classList.toggle("show");
    })
    jobs.addEventListener("click", () => {
      // Toggle the 'show' class on the subMenu div
      subMenu2.classList.toggle("show");
    })
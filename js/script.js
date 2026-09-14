
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".nav-links");
  if(menu && links) menu.addEventListener("click",()=>links.classList.toggle("open"));

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });

  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
});

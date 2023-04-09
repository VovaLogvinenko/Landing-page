window.onload = () => {
  const options = { threshold: 1 };

  function animLoad(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("active");
      }
    });
  }

  const anim = document.body.querySelectorAll(".lazy-anim");
  const observer = new IntersectionObserver(animLoad, options);

  anim.forEach((e) => {
    observer.observe(e);
  });
};

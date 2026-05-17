// ===============================
// 🎓 S3A WEBSITE JAVASCRIPT UPGRADE
// ===============================

// Smooth scroll for nav links
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ===============================
// 🎵 MUSIC PLAYER CONTROL FIx
// ===============================
let musicPlaying = false;
const music = document.getElementById("music");

function toggleMusic(){
  const btn = document.querySelector(".music-btn");

  if(!music) return;

  if(!musicPlaying){
    music.play()
    .then(() => {
      musicPlaying = true;
      btn.innerHTML = "⏸ Pause Music";
    })
    .catch(() => {
      alert("Click again to start music 🎵 (browser restriction)");
    });
  } else {
    music.pause();
    musicPlaying = false;
    btn.innerHTML = "🎵 Play Music";
  }
}


// ===============================
// 🌟 SCROLL ANIMATION EFFECT
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .student-btn, .video-box").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ===============================
// 🎬 VIDEO POPUP (MOVIEBOX STYLE)
// ===============================
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.9)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";

    const clone = video.cloneNode(true);
    clone.controls = true;
    clone.style.width = "90%";
    clone.style.maxWidth = "800px";

    modal.appendChild(clone);

    modal.addEventListener("click", () => {
      modal.remove();
    });

    document.body.appendChild(modal);
  });
});


// ===============================
// ✨ FLOATING TITLE EFFECT
// ===============================
const title = document.querySelector("header h1");

if(title){
  setInterval(() => {
    title.style.transform = "translateY(-5px)";
    setTimeout(() => {
      title.style.transform = "translateY(0px)";
    }, 500);
  }, 2000);
}

let video = document.querySelector('.youtubeVideo');
let isPause = false;

const observer = new IntersectionObserver(foo)

observer.observe(video);

function foo(entries, observer) {
  entries.forEach(entry => {
    if(entry.IntersectionObserver && !video.paused) {
      video.pause;
      isPause = true;
    } else {
      video.play();
      isPause = false;
    }
  })
}
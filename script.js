// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          joystixMonospace: ['joystix','Monospace'],
        },
      },
    },
  }
  
//   const textWidth = document.querySelector('.SkillImages').scrollWidth;

//  gsap.to(".SkillImages", {
//    x: `-${textWidth}px`,
//    duration: 40,
//    repeat: -1,
//    ease: "none",
//    onRepeat: function() {
//      gsap.set(this.targets(), { x: window.innerWidth });
//    }
//  });

    

// gsap.from(".SkillImages",{
//   y: -100,
//   duration:2,
//   delay:2
// })
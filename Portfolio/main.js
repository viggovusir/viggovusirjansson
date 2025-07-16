const tiltSettings = {
    maxRot: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 500,
    easing: "cubic-bezier(0.3,.98,.52,.99)"
};

tiltable.addEventListener("mousemove", onMouseMove)
tiltable.addEventListener("mouseenter", onMouseEnter)
tiltable.addEventListener("mouseexit", onMouseExit)


function onMouseMove(event){
    const tiltable = event.currentTarget;
    const objWidth = curTiltable.offsetWidth;
    const objHeight = curTiltable.offsetHeight;
    const objCenX = card.offsetLeft + objWidth/2;
    const objCenY = card.offsetTop + objHeight/2;
    const mousePosX = event.clientX - objCenX;
    const mousePosY = event.clientY - objCenY;
    const _rotateX = (-1) * tiltSettings.maxRot*mousePosX / (objWidth / 2);
    const _rotateY = (+1) * tiltSettings.maxRot*mousePosY / (objHeight / 2);
    const rotateX = _rotateX < -tiltSettings.maxRot ? - tiltSettings.maxRot : (_rotateX > tiltSettings.maxRot ? tiltSettings.maxRot : _rotateX);
    const rotateY = _rotateY < -tiltSettings.maxRot ? - tiltSettings.maxRot : (_rotateY > tiltSettings.maxRot ? tiltSettings.maxRot : _rotateY);

    tiltable.style.transform = `perspective(${tiltSettings.perspective}px)rotateX(${rotateX}deg) rotateY(${rotateY}deg)scale3d(${tiltSettings.scale},${tiltSettings.scale},${tiltSettings.scale})`;

}
function onMouseEnter(event){
    transition(event);
}
function onMouseExit(event){
    event.currentTarget.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    transition(event);
}

function transition(event){
    const tiltable = event.currentTarget;
    clearTimeout(tiltable.transitionTimeoutId);
    tiltable.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    tiltable.transitionTimeoutId = setTimeout(() => {
      tiltable.style.transition = "";
    }, tiltSettings.speed);
}
/*
const tiltEffectSettings = {
    max: 25, // max tilt rotation (degrees (deg))
    perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
    scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
  };
  
  const cards = document.querySelectorAll(".card");
  
  cards.forEach(card => {
    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
  });
  
  function cardMouseEnter(event) {
    setTransition(event);
  }
  
  function cardMouseMove(event) {
    const card = event.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = card.offsetTop + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = (+1)*tiltEffectSettings.max*mouseY/(cardHeight/2);
    const rotateYUncapped = (-1)*tiltEffectSettings.max*mouseX/(cardWidth/2);
    const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                    (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : 
                    (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }
  
  function cardMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
  }
  
  function setTransition(event) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }*/
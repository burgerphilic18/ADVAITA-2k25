document.addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle trail';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 500);
  });
  
  document.addEventListener('click', function (e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle click';
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  });
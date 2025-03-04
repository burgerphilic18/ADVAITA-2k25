document.addEventListener('mousemove', function (e) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle trail';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};
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
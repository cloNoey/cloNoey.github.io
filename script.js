const tabs = document.querySelectorAll('.product-tab');
const contactBtn = document.querySelector('.icon-button[href="#contact"]');
const sections = ['about', 'work', 'courses', 'cv', 'contact', 'ai-usage']
  .map(id => document.getElementById(id))
  .filter(Boolean);

function setActive(id) {
  const isContact = id === 'contact' || id === 'ai-usage';
  tabs.forEach(tab => {
    const href = tab.getAttribute('href');
    tab.classList.toggle('active', href === '#' + id);
  });
  if (contactBtn) contactBtn.classList.toggle('active', isContact);
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('href').slice(1);
    setActive(id);
  });
});

if (contactBtn) {
  contactBtn.addEventListener('click', () => setActive('contact'));
}

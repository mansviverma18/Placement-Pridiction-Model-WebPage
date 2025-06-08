const profileIcon = document.getElementById('profileIcon');
const dashboardDropdown = document.getElementById('dashboardDropdown');

profileIcon.addEventListener('click', () => {
  dashboardDropdown.classList.toggle('hidden');
});

// Click outside to close the dropdown
document.addEventListener('click', (event) => {
  const isClickInside = profileIcon.contains(event.target) || dashboardDropdown.contains(event.target);
  if (!isClickInside) {
    dashboardDropdown.classList.add('hidden');
  }
});

const papers = [
    {
      title: "AI-Powered Placement Cell",
      image: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      features: [
        "Resume Parsing",
        "AI/ML Job Matching",
        "Analytics Dashboard",
        "Role-Based System",
        "Job Application Tracker",
        "Mock Interview / AI Chat",
        "Mobile-Friendly / UX"
      ],
      description: "An all-in-one placement portal powered by artificial intelligence. Streamline student resumes, match them to real job openings, and manage applications seamlessly."
    },
    {
      title: "Smart Campus Recruitment",
      image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      features: [
        "Forecast-based ML Job Matching",
        "Role-Based Dashboards",
        "Job Application Tracker"
      ],
      description: "Predictive job matching and intelligent tracking for recruiters and students alike."
    },
    {
      title: "Comprehensive PCMS",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      features: [
        "Analytics Dashboard",
        "Role-Based System",
        "Scalability & Mobile-first"
      ],
      description: "A robust placement management system ideal for large-scale institutions."
    }
  ];
  
  const featuresContainer = document.getElementById("features");
  
  papers.forEach((paper, index) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    card.innerHTML = `
      <img src="${paper.image}" alt="${paper.title}" />
      <h3>${paper.title}</h3>
      <p>${paper.features.slice(0, 3).join(", ")}...</p>
    `;
    card.addEventListener("click", () => openModal(paper));
    featuresContainer.appendChild(card);
  });
  
  // === Modal Logic ===
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close-btn");
  
  function openModal(paper) {
    modalBody.innerHTML = `
      <h2>${paper.title}</h2>
      <p style="margin: 1rem 0;">${paper.description}</p>
      <ul>
        ${paper.features.map(f => `<li>✔️ ${f}</li>`).join("")}
      </ul>
    `;
    modal.classList.remove("hidden");
  }
  
  closeBtn.onclick = () => modal.classList.add("hidden");
  window.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  };
  
  // === Search filter ===
  document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
// === Dark Mode Toggle ===
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// === Animated Counters ===
function animateCounter(id, target) {
  let count = 0;
  const speed = 20;
  const element = document.getElementById(id);
  const increment = Math.ceil(target / 100);

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = count;
  }, speed);
}
animateCounter("resumeCount", 350);  // Example
animateCounter("placedCount", 128);  // Example

// === Resume Upload Simulation ===
const uploadInput = document.getElementById("resumeUpload");
const progressBar = document.getElementById("uploadProgress");

uploadInput.addEventListener("change", () => {
  progressBar.value = 0;
  let value = 0;
  const interval = setInterval(() => {
    value += 5;
    progressBar.value = value;
    if (value >= 100) clearInterval(interval);
  }, 100);
});
// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Animated counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
const suggestions = ["Resume Scoring", "Mock Interviews", "Job Matches", "Dashboard", "Profile", "Applications"];
const suggestionBox = document.getElementById("searchSuggestions");

searchInput.addEventListener("input", function () {
  const input = this.value.toLowerCase();
  suggestionBox.innerHTML = '';
  if (!input) return suggestionBox.classList.add("hidden");

  const matches = suggestions.filter(item => item.toLowerCase().includes(input));
  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.onclick = () => {
      searchInput.value = match;
      suggestionBox.classList.add("hidden");
    };
    suggestionBox.appendChild(li);
  });
  suggestionBox.classList.remove("hidden");
});
const resumeInput = document.getElementById("resumeUpload");
const uploadStatus = document.getElementById("uploadStatus");

resumeInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    uploadStatus.textContent = `Uploaded: ${file.name}`;
    showToast("✅ Resume uploaded successfully!");
  }
});
const resumeProgress = document.getElementById("resumeProgress");
const resumeScoreText = document.getElementById("resumeScoreText");

function updateResumeScore(score) {
  resumeProgress.style.width = `${score}%`;
  resumeScoreText.textContent = `${score}%`;
}
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.classList.toggle("hidden", window.scrollY < 300);
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  toast.className = `toast show ${type}`;
  toast.textContent = message;

  // Auto-hide after 3 seconds
  setTimeout(() => {
    toast.className = 'toast hidden';
  }, 3000);
}
showToast('Resume uploaded successfully!', 'success');
showToast('Something went wrong.', 'error');
showToast('Feature coming soon!', 'info');
card.addEventListener("click", () => {
  openModal(paper);
  showToast(`${paper.title} opened`, 'info');
});

// Filtering and search logic for Job Board with explicit "Search" button
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.filter-form');
  const searchInput = form.querySelector('input[name="search"]');
  const locationSelect = form.querySelector('select[name="location"]');
  const categorySelect = form.querySelector('select[name="category"]');
  const searchButton = form.querySelector('button[type="submit"]');
  const jobCards = Array.from(document.querySelectorAll('.job-card'));
  const jobCardsContainer = document.querySelector('.job-cards');

  // Normalize string for case-insensitive search
  function normalize(str) {
    return str ? str.toLowerCase().trim() : "";
  }

  // Main filter function: returns true if card matches filters
  function jobMatchesFilters(card, searchVal, locationVal, categoryVal) {
    const title = normalize(card.querySelector('.job-title').textContent);
    const desc = normalize(card.querySelector('.job-description').textContent);
    const loc = normalize(card.querySelector('.job-location').textContent);
    const category = card.dataset.category
      ? normalize(card.dataset.category)
      : (title + " " + desc);

    // Search filter: all words must match somewhere in title or description
    let match = true;

    if (searchVal) {
      const searchWords = searchVal.split(/\s+/).filter(Boolean);
      const cardText = `${title} ${desc}`;
      if (!searchWords.every(word => cardText.includes(word))) {
        match = false;
      }
    }
    // Location filter
    if (locationVal && !loc.includes(locationVal)) {
      match = false;
    }
    // Category filter
    if (categoryVal && !category.includes(normalize(categoryVal))) {
      match = false;
    }
    return match;
  }

  // This function filters and displays job cards
  function filterJobs(e) {
    if (e) e.preventDefault();

    const searchVal = normalize(searchInput.value);
    const locationVal = normalize(locationSelect.value);
    const categoryVal = normalize(categorySelect.value);

    let anyVisible = false;
    jobCards.forEach(card => {
      if (jobMatchesFilters(card, searchVal, locationVal, categoryVal)) {
        card.style.display = "";
        anyVisible = true;
      } else {
        card.style.display = "none";
      }
    });

    // Optionally, show a "No jobs found" message
    let noResult = document.getElementById('no-jobs-message');
    if (!anyVisible) {
      if (!noResult) {
        noResult = document.createElement('div');
        noResult.id = 'no-jobs-message';
        noResult.style.textAlign = 'center';
        noResult.style.color = '#888';
        noResult.style.margin = '2rem 0 1rem 0';
        noResult.textContent = "No job opportunities found matching your search.";
        jobCardsContainer.appendChild(noResult);
      }
    } else {
      if (noResult) noResult.remove();
    }
  }

  // Only search when Search button is clicked / form is submitted
  form.addEventListener('submit', filterJobs);

  // Reset filters if user clears (optional, you can add a reset button)
  form.addEventListener('reset', function(e) {
    setTimeout(filterJobs, 50);
  });

  // Optional: Apply button placeholder
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      alert('Apply functionality coming soon!');
    });
  });
});
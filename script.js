// script.js

// Mock candidate data
const candidates = [
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      jobRole: "Software Engineer",
      experience: "3 years"
    },
    {
      id: 2,
      name: "Jane Smith",
      location: "San Francisco",
      jobRole: "UI/UX Designer",
      experience: "5 years"
    },
    {
      id: 3,
      name: "David Johnson",
      location: "Chicago",
      jobRole: "Project Manager",
      experience: "7 years"
    },
    {
      id: 4,
      name: "Emily Wilson",
      location: "Los Angeles",
      jobRole: "Data Analyst",
      experience: "2 years"
    }
  ];
  
  // Search button click event handler
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchCandidates);
  
  // Search candidates based on location and job role
  function searchCandidates() {
    const locationInput = document.getElementById("location-input").value;
    const jobRoleInput = document.getElementById("job-role-input").value;
  
    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate => {
      return (
        candidate.location.toLowerCase().includes(locationInput.toLowerCase()) &&
        candidate.jobRole.toLowerCase().includes(jobRoleInput.toLowerCase())
      );
    });
  
    displayCandidates(filteredCandidates);
  }
  
  // Display the filtered candidates
  function displayCandidates(filteredCandidates) {
    const candidateList = document.getElementById("candidate-list");
    candidateList.innerHTML = "";
  
    if (filteredCandidates.length > 0) {
      filteredCandidates.forEach(candidate => {
        const candidateItem = document.createElement("div");
        candidateItem.classList.add("candidate-item");
  
        candidateItem.innerHTML = `
          <h3>${candidate.name}</h3>
          <p><strong>Location:</strong> ${candidate.location}</p>
          <p><strong>Job Role:</strong> ${candidate.jobRole}</p>
          <p><strong>Experience:</strong> ${candidate.experience}</p>
        `;
  
        candidateList.appendChild(candidateItem);
      });
    } else {
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = "No candidates found.";
      candidateList.appendChild(noResultsMessage);
    }
  }
  
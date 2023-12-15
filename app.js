const personalInfo = document.getElementById("personal-info");
const selectPlan = document.getElementById("Select your plan");
const addOns = document.getElementById("Pick add-ons");
const summary = document.getElementById("Finishing up");

let activeTab = 1;

personalInfo.style.display = "block";
selectPlan.style.display = "none";
addOns.style.display = "none";
summary.style.display = "none";

function goToNextStep() {
  activeTab += 1;
  showSection();
}

function showSection() {
  if (activeTab === 1) {
    personalInfo.style.display = "block";
    selectPlan.style.display = "none";
    addOns.style.display = "none";
    summary.style.display = "none";
  }
  if (activeTab === 2) {
    selectPlan.style.display = "block";
    personalInfo.style.display = "none";
    addOns.style.display = "none";
    summary.style.display = "none";
  }
  if (activeTab === 3) {
    addOns.style.display = "block";
    personalInfo.style.display = "none";
    selectPlan.style.display = "none";
    summary.style.display = "none";
  }
  if (activeTab === 4) {
    summary.style.display = "block";
    personalInfo.style.display = "none";
    selectPlan.style.display = "none";
    addOns.style.display = "none";
  }
}

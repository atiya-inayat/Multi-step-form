const personalInfo = document.getElementById("personal-info");
const selectPlan = document.getElementById("Select your plan");
const addOns = document.getElementById("Pick add-ons");
const summary = document.getElementById("Finishing up");
const thankyouMsg = document.querySelector(".thankyou-container");

const section1 = document.getElementById("1");
const section2 = document.getElementById("2");
const section3 = document.getElementById("3");
const section4 = document.getElementById("4");

const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userNo = document.getElementById("number");

const selectedPlan = document.getElementById("selected-plan");
const arcadePrice = document.getElementById("arcade-price");
const advancedPrice = document.getElementById("advanced-price");
const proPrice = document.getElementById("pro-price");

const arcade = document.querySelector(".arcade");
const advanced = document.querySelector(".Advanced");
const pro = document.querySelector(".pro");

selectPlan.addEventListener("change", (e) => {
  if (e.target.checked) {
    arcadePrice.innerText = "$90/years";
    advancedPrice.innerText = "$120/years";
    proPrice.innerText = "$150/years";

    const para1 = document.createElement("p");
    para1.classList.add("free-para");
    const para2 = document.createElement("p");
    para2.classList.add("free-para");

    const para3 = document.createElement("p");
    para3.classList.add("free-para");

    para1.innerText = "2 months free";
    arcade.lastChild = para1;
    arcade.append(para1);

    para2.innerText = "2 months free";
    advanced.lastChild = para2;
    advanced.append(para2);

    para3.innerText = "2 months free";
    pro.lastChild = para3;
    pro.append(para3);
  } else {
    arcadePrice.innerText = "$9/month";
    arcadePrice.innerText = "$12/month";
    arcadePrice.innerText = "$15/month";

    arcade.removeChild(arcade.children[-1]);
  }
});

const checkBox = document.querySelectorAll("#checkbox");
const onlineService = document.querySelector(".online-service");
const largerStorage = document.querySelector(".larger-storage");
const CustomizablPprofile = document.querySelector(".Customizable-profile");
const servicePrice = document.querySelectorAll(".service-price");

checkBox.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      e.target.parentNode.style.borderColor = "hsl(243, 100%, 62%)";
      servicePrice.forEach((price) => {
        price.style.color = " hsl(243, 100%, 62%)";
      });
    } else {
      console.log("not checked");

      e.target.parentNode.style.borderColor = " hsl(229, 24%, 87%)";
    }
  });
});

const changeBtn = document.querySelector(".change");
const selectMonthlyOrYearly = document.querySelector(".monthly-span");
const planCharges = document.querySelector(".plan-charges");

changeBtn.addEventListener("click", (e) => {
  activeTab -= 2;
  showSection();
});

// const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const numberFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
// const nameError = document.getElementById("name-error");
// const emailError = document.getElementById("email-error");
// const numberError = document.getElementById("number-error");

let activeTab = 1;
valid = true;

// we initially only show section1 and hide al other sections.
personalInfo.style.display = "block";
selectPlan.style.display = "none";
addOns.style.display = "none";
summary.style.display = "none";
thankyouMsg.style.display = "none";

// we are setting the background color of the active step
section1.style.background = "hsl(206, 94%, 87%)";
section1.style.color = " hsl(213, 96%, 18%)";

function goToNextStep() {
  if (activeTab === 1) {
    const isStep1Valid = checkStep1Validation();

    if (!isStep1Valid) {
      return;
    }
  }

  activeTab += 1;
  showSection();
}

function goToPreviousStep() {
  activeTab -= 1;
  showSection();
}

function confirm() {
  summary.style.display = "none";
  thankyouMsg.style.display = "flex";
}

function highlightActiveSection(activeSection) {
  // we add all the left side buttons in this array
  const sections = [section1, section2, section3, section4];

  // changign background of active section
  activeSection.style.background = "hsl(206, 94%, 87%)";
  activeSection.style.color = " hsl(213, 96%, 18%)";

  // getting all non-active elements
  const nonActiveSections = sections.filter(
    (element) => element !== activeSection
  );

  // setting non-active elements background color to transparent
  nonActiveSections.forEach((element) => {
    element.style.background = "transparent";
    element.style.color = " hsl(0, 0%, 100%)";
  });
}

function checkStep1Validation() {
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const numberError = document.getElementById("number-error");

  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const numberFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  if (userName.value !== "") {
    // console.log("name is valid");
    userName.style.borderColor = "gray";
    nameError.innerText = "";
  }
  if (userEmail.value !== "") {
    userEmail.style.borderColor = "gray";
    emailError.innerText = "";
  }
  if (userNo.value !== "") {
    userNo.style.borderColor = "gray";
    numberError.innerText = "";
  }

  if (userName.value === "" || userEmail.value === "" || userNo.value === "") {
    if (userName.value === "") {
      userName.style.borderColor = "red";
      // userName.style.innerHTML = ;
      nameError.innerText = "This field is required";
    }

    if (userEmail.value === "") {
      userEmail.style.borderColor = "red";
      emailError.innerText = "This field is required";
    }
    if (userNo.value === "") {
      userNo.style.borderColor = "red";
      numberError.innerText = "This field is required";
    }
    if (userEmail.value !== "" && !mailFormat.test(userEmail.value)) {
      emailError.innerHTML = "Kindly enter a valid email address";
    }
    if (userNo.value !== "" && !userNo.value.match(numberFormat)) {
      numberError.innerText = "Kindly enter a valid phone number";
    }
    console.log({ numberFormat });
    return false;
  }

  return true;
}

function showSection() {
  if (activeTab === 1) {
    personalInfo.style.display = "block";
    selectPlan.style.display = "none";
    addOns.style.display = "none";
    summary.style.display = "none";

    highlightActiveSection(section1);
  }
  if (activeTab === 2) {
    personalInfo.style.display = "none";
    addOns.style.display = "none";
    summary.style.display = "none";
    selectPlan.style.display = "block";

    highlightActiveSection(section2);
  }
  if (activeTab === 3) {
    personalInfo.style.display = "none";
    selectPlan.style.display = "none";
    summary.style.display = "none";
    addOns.style.display = "block";

    highlightActiveSection(section3);
  }
  if (activeTab === 4) {
    personalInfo.style.display = "none";
    selectPlan.style.display = "none";
    addOns.style.display = "none";
    summary.style.display = "block";

    highlightActiveSection(section4);
  }
}

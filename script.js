document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM LOADED");
  
    const btnFeatures = document.getElementById("btn-features");
    const btnCapabilities = document.getElementById("btn-capabilities");
    const btnPractices = document.getElementById("btn-practices");
  
    const tabContent = document.getElementById("tab-content");
  
    const removeActive = () => {
      btnFeatures.classList.remove("active");
      btnCapabilities.classList.remove("active");
      btnPractices.classList.remove("active");
      updateTabContent(features[selectedTabIndex]);
    };
  
    const updateTabContent = (featuresArg) => {
      const list = document.createElement("ul");
  
      let listContent = "";
      featuresArg.forEach((feature) => {
        listContent += `<li>${feature}</li>`;
      });
      list.innerHTML = listContent;
      tabContent.innerHTML = "";
      tabContent.appendChild(list);
    };
  
    const features = [
      //features
      [
        "Use Descriptive Variable and Function Names",
        "Keep Functions Small and Focused",
        "Prefer const and let over var",
        "Avoid Global Variables",
        "Write Modular Code",
      ],
      //capabilities
      [
        "Asynchronous Programming",
        "DOM Manipulation",
        "Event Handling",
        "Frameworks and Libraries",
        "APIs and AJAX",
      ],
  
      //practices
      [
        "Use Meaningful and Consistent Naming Conventions",
        "Keep Functions Short and Focused",
        "Avoid Global Variables",
        "Use Promises or Async/Await for Asynchronous Code",
        "Write Unit Tests",
      ],
    ];
  
    let selectedTabIndex = 0;
  
    updateTabContent(features[selectedTabIndex]);
  
    btnFeatures.addEventListener("click", function () {
      selectedTabIndex = 0;
      removeActive();
      btnFeatures.classList.add("active");
    });
  
    btnCapabilities.addEventListener("click", function () {
      selectedTabIndex = 1;
      removeActive();
      btnCapabilities.classList.add("active");
    });
  
    btnPractices.addEventListener("click", function () {
      selectedTabIndex = 2;
      removeActive();
      btnPractices.classList.add("active");
    });
  });
  
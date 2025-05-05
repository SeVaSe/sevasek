AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:""
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/csharp.png",
    langName: "C#",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/flutter.png",
    langName: "Flutter/Dart",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/kotlin.png",
    langName: "Kotlin",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/sqlserver.png",
    langName: "Microsoft Sql Server",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/pstgre.png",
    langName: "PostgreSQL",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/linux.png",
    langName: "RedOS/Fedora/AltLinux",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "",
  },
  
];
/** Навешивает спотлайт-обработчики на все .tech_card */
function attachSpotlight() {
  document.querySelectorAll('.tech_card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
      const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
      card.style.setProperty('--mouse-x', x);
      card.style.setProperty('--mouse-y', y);
    });
    card.addEventListener('mouseleave', () => {
      // возвращаем спот в центр или скрываем
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

const displayTechStacksCards = () => {
  const entireCardTemplate = techStack.map(stack => `
    <div class="row page-content techstackcards"
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-delay="0"
         data-aos-duration="400">
      <div class="tech_card">
        <div class="card_img">
          <img src="${stack.langImage}" class="featured_image">
        </div>
        <div class="card_header">
          <header>
            <div class="text-center langName">
              <h4>${stack.langName}</h4>
            </div>
          </header>
          <ul class="description">
            ${stack.langDesc}
          </ul>
        </div>
      </div>
    </div>
  `).join('');
  
  techStackCards.innerHTML = entireCardTemplate;
  
  // Теперь, когда карточки в DOM, навешиваем на них спотлайт
  attachSpotlight();
};

document.addEventListener("DOMContentLoaded", displayTechStacksCards);
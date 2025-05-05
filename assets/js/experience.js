AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");

function getPluralForm(n, forms) {
  // Форма склонения: 0 -> месЯЦЕВ, 1 -> месЯЦ, 2-4 -> месЯЦА
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}

function countWorkDuration(dateString) {
  const startDate = new Date(dateString);
  const now = new Date();

  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  if (now.getDate() < startDate.getDate()) {
    months -= 1;
  }

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const yearStr = years > 0 ? `${years} ${getPluralForm(years, ["год", "года", "лет"])}` : "";
  const monthStr = remMonths > 0 ? `${remMonths} ${getPluralForm(remMonths, ["месяц", "месяца", "месяцев"])}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

const durationText = countWorkDuration("2024-02-05");

const exp = [
  {
    title: "Инженер-программист С/C++/Python",
    cardImage: "assets/images/experience-page/redsoft.jpg",
    place: "ООО\"РедСофт\"",
    time: `(Февраль, 2024 - Работаю...) [${durationText}]`,
    desp: "<ul><li>Разрабатывал автоматическую конфигурацию службы синхронизации времени с использованием протоколов NTP и PTP, включая генерацию конфигурационных файлов, настройку демонов (chronyd, ptp4l) и реализацию логики выбора источников времени на основе сетевых параметров и приоритетов</li><li>Участие в модернизации и расширении функционала утилиты samba-tool для REDDC, включающее реализацию новых возможностей</li><li>Отладка и рефакторинг кода, написанного в стандарте C89, с целью повышения его производительности и устранения дефектов</li><li>Проведение онбординга для новых сотрудников, создание и внедрение учебных материалов, сопровождение стажеров в процессе адаптации</li><li>Разработка и проведение тестирования модулей программного обеспечения для обеспечения качества и стабильности</li></ul>",
  },
  {
    title: "Практикант-разработчик Python",
    cardImage: "assets/images/experience-page/ivk.png",
    place: "АО\"Информационная Внедренческая Компания\"",
    time: "(Февраль, 2023 - Май, 2023) [4 мес.]",
    desp: "<ul><li>Разработка клиент-серверного приложения под AltLinux с командой разработчиков</li><li>Создание системы идентификации каждого клиента по UUID и разработка механизмов обмена файлами, консольных данных и другой информации между клиентами</li><li>Реализация функционала для выполнения операций через клиента на сервере, включая обмен файлами, получение результатов консоли с сервера и управление им</li><li>Анализ и оптимизация алгоритмов обмена данными для улучшения производительности и скорости работы системы</li><li>Проведение тестирования различных функциональных частей программы, выявление ошибок и их отладка. Это включает модульное тестирование, интеграционное тестирование, исследование причин возникновения ошибок и их устранение</li></ul>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "NeuroOrto",
    cardImage: "assets/images/experience-page/neuroorto.png",
    description:
      "Мобильное приложение, помогающее врачам быстро и точно оценить степень двигательных нарушений при ДЦП, проводить диагностику и подбирать оптимальные методы лечения и ортезирования",
  },
  {
    title: "Lux Company",
    cardImage: "assets/images/experience-page/lux.jpg",
    description:
      "Проект разрабатывающий интеллектуальные голосовые технологии для управления ПК и повышения продуктивности пользователей",
  },
  {
    title: "ComputerVision KIPFIN",
    cardImage: "assets/images/experience-page/kipfin.jfif",
    description:
      "Разрабатывал проекты компьютерного зрения для управления презентациями, а также для оптимизации и повышения эффективности выступлений на форумах",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Айдар Раисович Метшин",
    subtitle: "<i>Депутат Государственной Думы</i>",
    image: "assets/images/experience-page/testimonials-1.jpg",
    desp: "Мой проект в сфере компьютерного зрения, направленный на автоматизацию управления бизнес-процессов, был представлен на Всероссийском форуме «Новые вызовы – подготовка кадров для цифровой экономики» в Казани. Он привлёк внимание и получил высокую оценку от депутата Государственной Думы Айдара Метшина, который подробно ознакомился с моей разработкой — <a href=https://github.com/SeVaSe/CompVision_ProjKip_3V target=_blank><b>«Present KIPFIN v1.0»</b></a>. Проект был отмечен за свою актуальность и высокий потенциал, став значимым признанием моего вклада в развитие технологий компьютерного зрения в колледже КИПФИН",
  },
  {
    title: "Александр Вячеславович Бугаев",
    subtitle: "<i>Первый заместитель Министра просвещения РФ</i>",
    image: "assets/images/experience-page/testimonials-2.png",
    desp: "Мой проект в области компьютерного зрения — <a href=https://github.com/SeVaSe/VisualPresenter target=_blank><b>«Visual Presenter v2.0»</b></a> — получил высокую оценку и рецензию от первого заместителя Министра просвещения Российской Федерации Александра Бугаева. Он внимательно ознакомился с проектом и продемонстрировал его в одном из своих выступлений, что стало значимым признанием моего вклада в развитие технологий компьютерного зрения",
  },
  {
    title: "Евгения Эженовна Табе",
    subtitle: "<i>Кандидат медицинских наук</i>",
    image: "assets/images/experience-page/testimonials-3.png",
    desp: "Совместно с Табе Евгенией Эженовной мы создаём медицинское программное обеспечение для врачей-неврологов и родителей детей с неврологическими заболеваниями. Одним из наших ключевых продуктов стало мобильное приложение NeuroOrto.pro — универсальный инструмент для специалистов: от полного сбора анамнеза и автоматической постановки диагноза до проведения рентген-скрининга и генерации отчётов. Это значительно ускоряет и упрощает рутинные процедуры в работе врачей. Сейчас мы также разрабатываем ряд других инновационных медицинских решений",
  },
  {
    title: "Спикер на ВДНХ, Выставка-форум «Россия»",
    subtitle: "<i>Показ проекта нейронной сети, на основе компьютерного зрения</i>",
    image: "assets/images/experience-page/testimonials-4.jpg",
    desp: "Для научного выступления на форуме я подготовил авторский проект по компьютерному зрению и нейросетям. Моя цель — показать сложные технологии широкой аудитории: от ректоров вузов до обычных посетителей. Через серию интерактивных мини-проектов я наглядно продемонстрировал работу компьютерного зрения и объяснил его работу простым языком. Это выступление стало для меня ценным опытом работы",
  },
  {
    title: "Колледж информатики и программирования",
    subtitle: "<i>при Финансовом Университете</i>",
    image: "assets/images/experience-page/testimonials-5.jpg",
    desp: "В колледже я занимался автоматизацией процессов, разработкой проектов в области компьютерного зрения и подготовкой проектов на выступления. Одним из значимых проектов стал <a href=https://github.com/SeVaSe/VisualPresenter target=_blank><b>«Visual Presenter v2.0»</b></a> — система, использующая компьютерное зрение для автоматизации управления показом презентаций на больших экранах без необходимости дополнительного оборудования. В процессе работы я также активно внедрял новые технологии в работу и разрабатывал различные проекты как с использованием компьютерного зрения, так и без него",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

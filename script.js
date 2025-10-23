let currentLang = 'en';

const translations = {
  en: {
    about: "About",
    services: "Services",
    teaching: "Teaching",
    translations: "Translations",
    academics: "Academics",
    contact: "Contact",
    about_text: "I am a linguist and educator specializing in multilingual lexicography, translation, and language teaching. My work bridges linguistic accuracy with practical application in educational and digital contexts. I have collaborated with institutions such as <strong>Lankaran State University</strong> and <strong>Penza State University</strong>.",
    teaching_title: "Teaching",
    teaching_text: "I offer language instruction in English, Russian, and minority languages such as Moksha and Talysh. My approach emphasizes communicative competence, cultural context, and learner autonomy. I design custom curricula for academic and professional purposes.",
    translations_title: "Translations",
    translations_text: "I provide high-quality translation services between English, Russian, and several lesser-resourced languages. My translations prioritize semantic fidelity, stylistic appropriateness, and terminological consistency, especially in academic and technical domains.",
    academics_title: "Academics",
    academics_text: "My academic background includes advanced study in computational linguistics, lexicography, and language pedagogy. I have contributed to dictionary projects for Abkhaz, Moksha, Talysh, and Mongolian, with a focus on lemma tagging and grammatical annotation.",
    contact_title: "Contact",
    email_label: "Your email",
    topic_label: "Topic",
    message_label: "Message",
    send_button: "Send",
    cv_line: 'You can see my <a href="CV_file.pdf" target="_blank" rel="noopener" class="cv-link">CV here</a> (in a new tab).'
  },
  ru: {
    about: "Обо мне",
    services: "Услуги",
    teaching: "Преподавание",
    translations: "Переводы",
    academics: "Академическая деятельность",
    contact: "Контакты",
    about_text: "Я лингвист и преподаватель, специализируюсь на многоязычной лексикографии, переводе и обучении языкам. Моя работа соединяет лингвистическую точность с практическим применением в образовательных и цифровых контекстах. Я сотрудничала с такими учреждениями, как <strong>Ленкоранский государственный университет</strong> и <strong>Пензенский государственный университет</strong>.",
    teaching_title: "Преподавание",
    teaching_text: "Я предлагаю обучение языкам: английский, русский, а также малые языки — мокшанский и талышский. Мой подход делает акцент на коммуникативной компетенции, культурном контексте и самостоятельности учащихся. Я разрабатываю индивидуальные программы для академических и профессиональных целей.",
    translations_title: "Переводы",
    translations_text: "Я предоставляю качественные переводческие услуги между английским, русским и несколькими малоресурсными языками. Мои переводы ориентированы на смысловую точность, стилистическую уместность и терминологическую согласованность, особенно в академической и технической сферах.",
    academics_title: "Академическая деятельность",
    academics_text: "Моё академическое образование включает углублённое изучение компьютерной лингвистики, лексикографии и методики преподавания языков. Я участвовала в словарных проектах для абхазского, мокшанского, талышского и монгольского языков с акцентом на лемматизацию и грамматическую разметку.",
    contact_title: "Контакты",
    email_label: "Ваш email",
    topic_label: "Тема",
    message_label: "Сообщение",
    send_button: "Отправить",
    cv_line: 'Вы можете см. моё <a href="CV_file.pdf" target="_blank" rel="noopener" class="cv-link">резюме здесь</a> (в новой вкладке).'
  }
};

const sections = {
  about: document.getElementById('about'),
  teaching: document.getElementById('teaching'),
  translations: document.getElementById('translations'),
  academics: document.getElementById('academics'),
  contact: document.getElementById('contact')
};

function showSection(sectionId) {
  Object.values(sections).forEach(section => section.classList.add('hidden'));
  if (sections[sectionId]) {
    sections[sectionId].classList.remove('hidden');
  }
  history.pushState(null, '', `#${sectionId}`);

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`[href="#${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');
}

document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    showSection(target);
  });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    showSection(target);
  });
});

const langToggle = document.getElementById('lang-toggle');
const langDropdown = document.getElementById('lang-dropdown');

langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
  if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
    langDropdown.classList.add('hidden');
  }
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = btn.getAttribute('data-lang');
    currentLang = newLang;
    updateContent();
    langDropdown.classList.add('hidden');
  });
});

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[currentLang][key] !== undefined) {
      el.innerHTML = translations[currentLang][key];
    }
  });

  document.title = currentLang === 'en'
    ? 'Olga Rodzina — CV'
    : 'Ольга Родзина — Резюме';
}

window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  showSection(hash || 'about');
});

window.addEventListener('popstate', () => {
  const hash = window.location.hash.substring(1);
  showSection(hash || 'about');
});

let currentLang = 'en';

const translations = {
  en: {
    name: "Olga Rodzina",
    hero_sub: "Language Teacher • Lexicographer • Linguist",

    about: "About",
    experience: "Experience",
    translations: "Translations",
    studies: "Studies",
    contact: "Contact",

    about_title: "About Me",
    about_text: `
      A dedicated linguist, researcher and educator. I hold two master’s degrees: <strong>European Master in Lexicography (EMLex)</strong> and <strong>MA in Languages, Culture and Media</strong>. 
      Currently a lecturer at <strong>Penza State University</strong>, I teach English grammar, phonetics, and Russian as a foreign language to students from 14 different nationalities. 
      My research includes a traineeship at the <strong>Institute for the Dutch Language (Leiden)</strong> and publications in phraseology, semantics, and intercultural studies.
    `,

    cv_line: "Download CV (PDF)",

    experience_title: "Experience",
    teaching_text: `   // ← key stays the same, only title changed
      <strong>Lecturer – Russian as a Foreign Language</strong> (Nov 2023 – Present)<br>
      • Provide Russian lessons to international students for academic success in Russian-medium programs.<br>
      • Organize cultural events (films, literature, excursions) to build communication and intercultural competence.<br><br>

      <strong>Lecturer – English Language</strong> (Nov 2023 – Present)<br>
      • Conduct seminars on Practical English Grammar and Phonetics for first-year students.<br><br>

      <strong>Previous roles:</strong> English Teacher at Welcome Language School (2019–2021) and English House (2018–2021) – lesson planning, curriculum design, extracurricular activities.
    `,

    translations_title: "Translations & Terminology",
    translations_text: `
      I offer translation and lexicographic services between <strong>English, Russian</strong>, and other languages. 
      My expertise includes bilingual phraseological dictionaries, semantic analysis, and terminological consistency. 
      Past projects: transliteration tables for the Digital Pallas (18th-century Russian dictionary) and etymon research for English loanwords in Dutch (GLAD project).
    `,

    studies_title: "Studies",
    academics_text: `
      <strong>EMLex – European Master in Lexicography</strong><br>
      Károli Gáspár University & Universidade do Minho (2021–2023)<br>
      • Thesis: <em>Comparative Analysis of English and Russian Phraseology and its Representation in Bilingual Dictionaries</em> (90 units, 4 dictionaries analyzed)<br><br>

      <strong>MA – Languages, Culture and Media</strong><br>
      Penza State University (2019–2021)<br>
      • Thesis: <em>The Image of America in the Novels of Theodor Dreiser</em><br><br>

      <strong>BA – English Studies</strong><br>
      Penza State University (2015–2019)<br>
      • Thesis: <em>Neologisms and their Study in English Lessons at Secondary Schools</em><br><br>

      <strong>Skills:</strong> Lexicography, Computational Linguistics, NLP, Phraseology, Semantics, Cultural Awareness, Data Analysis, Terminology
    `,

    contact_title: "Get in Touch",
    email_label: "Your email", topic_label: "Topic", message_label: "Message", send_button: "Send Message"
  },

  ru: {
    name: "Ольга Родзина",
    hero_sub: "Преподаватель языков • Лексикограф • Лингвист",

    about: "Обо мне",
    experience: "Опыт работы",
    translations: "Переводы",
    studies: "Образование",
    contact: "Контакты",

    about_title: "Обо мне",
    about_text: `
      Преданный лингвист, исследователь и педагог. Имею две магистерские степени: <strong>Европейский магистр лексикографии (EMLex)</strong> и <strong>магистр по языкам, культуре и медиа</strong>. 
      В настоящее время — преподаватель <strong>Пензенского государственного университета</strong>, веду английскую грамматику, фонетику и русский как иностранный для студентов из 14 стран. 
      Исследовательский опыт включает стажировку в <strong>Институте нидерландского языка (Лейден)</strong> и публикации по фразеологии, семантике и межкультурным исследованиям.
    `,

    cv_line: "Скачать резюме (PDF)",

    experience_title: "Опыт работы",
    teaching_text: `
      <strong>Преподаватель РКИ</strong> (ноябрь 2023 – наст. время)<br>
      • Веду уроки русского для иностранных студентов, обеспечивая успех в русскоязычных программах.<br>
      • Организую культурные мероприятия (кино, литература, экскурсии) для развития коммуникативных и межкультурных навыков.<br><br>

      <strong>Преподаватель английского языка</strong> (ноябрь 2023 – наст. время)<br>
      • Провожу семинары по практической грамматике и фонетике английского для студентов 1 курса.<br><br>

      <strong>Ранее:</strong> учитель английского в Welcome Language School (2019–2021) и English House (2018–2021) — планирование уроков, разработка программ, внеклассные мероприятия.
    `,

    translations_title: "Переводы и терминология",
    translations_text: `
      Предоставляю услуги перевода и лексикографии между <strong>английским, русским</strong> и другими языками. 
      Экспертиза включает двуязычные фразеологические словари, семантический анализ и терминологическую согласованность. 
      Проекты: таблицы транслитерации для Digital Pallas (XVIII век) и исследование этимонов английских заимствований в нидерландском (GLAD).
    `,

    studies_title: "Образование",
    academics_text: `
      <strong>EMLex – Европейский магистр лексикографии</strong><br>
      Университет Каройи Гашпара и Университет Минью (2021–2023)<br>
      • Дипломная: <em>Сравнительный анализ английской и русской фразеологии и её отражения в двуязычных словарях</em> (90 единиц, 4 словаря)<br><br>

      <strong>Магистр – Языки, культура и медиа</strong><br>
      Пензенский государственный университет (2019–2021)<br>
      • Дипломная: <em>Образ Америки в романах Теодора Драйзера</em><br><br>

      <strong>Бакалавр – Английская филология</strong><br>
      Пензенский государственный университет (2015–2019)<br>
      • Дипломная: <em>Неологизмы и их изучение на уроках английского в средней школе</em><br><br>

      <strong>Навыки:</strong> Лексикография, компьютерная лингвистика, NLP, фразеология, семантика, культурная осведомлённость, анализ данных, терминология
    `,

    contact_title: "Связаться",
    email_label: "Ваш email", topic_label: "Тема", message_label: "Сообщение", send_button: "Отправить"
  }
};

const sections = {
  about:       document.getElementById('about'),
  teaching:    document.getElementById('teaching'),
  translations: document.getElementById('translations'),
  academics:   document.getElementById('academics'),
  contact:     document.getElementById('contact')
};

function showSection(id) {
  if (!sections[id]) id = 'about';
  Object.values(sections).forEach(s => s.classList.add('hidden'));
  sections[id].classList.remove('hidden');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`[href="#${id}"]`);
  if (link) link.classList.add('active');
  history.pushState(null, '', `#${id}`);
}

document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    showSection(a.getAttribute('href').slice(1));
  });
});

const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
langToggle.addEventListener('click', e => { e.stopPropagation(); langMenu.classList.toggle('hidden'); });
document.addEventListener('click', () => langMenu.classList.add('hidden'));

document.querySelectorAll('.lang-opt').forEach(b => {
  b.addEventListener('click', () => {
    currentLang = b.dataset.lang;
    localStorage.setItem('preferredLang', currentLang);
    updateContent();
    langMenu.classList.add('hidden');
  });
});

function updateContent() {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (translations[currentLang][key] !== undefined) {
      el.innerHTML = translations[currentLang][key];
    }
  });
  document.title = currentLang === 'en' ? 'Olga Rodzina' : 'Ольга Родзина';
  feather.replace();
}

window.addEventListener('load', () => {
  const saved = localStorage.getItem('preferredLang');
  if (saved && translations[saved]) currentLang = saved;
  else if (translations[navigator.language.slice(0,2)]) currentLang = navigator.language.slice(0,2);

  const hash = location.hash.slice(1) || 'about';
  showSection(hash);
  updateContent();
});
window.addEventListener('popstate', () => showSection(location.hash.slice(1) || 'about'));

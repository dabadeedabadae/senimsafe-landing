import { ArrowUpRight } from 'lucide-react';
const features = [
  ['Карта', 'Позиция трекера и время обновления.'],
  ['Маршрут', 'Сохранённая история перемещений.'],
  ['События', 'Геозоны, заряд и сигнал SOS.'],
  ['Семья', 'Доступ для близких по приглашению.'],
];
export default function Home() {
  const apk = process.env.NEXT_PUBLIC_ANDROID_URL;
  const connect = process.env.NEXT_PUBLIC_CONNECT_URL;
  return <>
    <header className="container header"><a href="/" className="brand" aria-label="SenimSafe — главная"><img src="/logo.png" width="30" height="34" alt=""/>SenimSafe</a><nav aria-label="Навигация"><a href="#features">Возможности</a><a href="/guide">Инструкция</a><a href="#download">Приложение <ArrowUpRight size={14}/></a></nav></header>
    <main className="container">
      <section className="hero"><div><p className="muted">Для родителей и близких</p><h1>Местоположение трекера.<br/>В вашем телефоне.</h1><p className="intro">Карта, маршрут и события — для всей семьи.</p><div className="actions"><a className="button" href="#download">Подключить <ArrowUpRight size={16}/></a><a className="text-link" href="/guide">Как пользоваться</a></div></div><figure><a className="screenshot" href="/project-map.jpg" target="_blank" rel="noopener noreferrer" aria-label="Открыть скриншот карты"><img src="/project-map.jpg" width="1280" height="720" alt="Карта и события в веб-панели SenimSafe"/></a><figcaption>Веб-панель · демо-данные</figcaption></figure></section>
      <section className="features" id="features" aria-label="Возможности">{features.map(([title,text])=><article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
      <section className="connect" id="download"><div><h2>Начать пользоваться</h2><p>Получите трекер и данные для входа.<br/>Установите приложение и проверьте связь.</p></div><div className="connect-action"><a className="button" href={apk || connect || '/guide'}>{apk?'Скачать для Android':connect?'Подключиться':'Установка приложения'}<ArrowUpRight size={16}/></a><p className="muted">Ссылку и доступ выдаёт ответственный за подключение.</p></div></section>
      <p className="note">Проверяйте время последней точки. Точность зависит от GPS и связи.</p>
      <section className="contact" id="contacts" aria-labelledby="contact-title"><div><h2 id="contact-title">К кому обратиться</h2><p>Ответственный за подключение поможет с доступом и трекером.</p></div><div className="contact-details"><div><span>Телефон</span><p>+7 (700) 000-00-00</p></div><div><span>Почта</span><p>support@senimsafe.example</p></div><small>Примеры контактов — заменим на реальные.</small></div></section>
    </main>
    <footer className="container"><span>© {new Date().getFullYear()} SenimSafe</span><a href="#contacts">Контакты</a><a href="/guide#faq">Частые вопросы</a><a href="/guide">Инструкция</a></footer>
  </>;
}


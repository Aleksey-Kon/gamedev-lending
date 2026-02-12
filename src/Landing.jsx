import React from "react";
import ListItem from "./ListItem";

export default function Landing() {
    const images = [
        "./images/event1.webp",
        "./images/event2.webp",
        "./images/event3.webp",
        "./images/event4.webp",
        "./images/event5.webp",
        "./images/event6.webp",
    ];
  return (
    <div className="min-h-screen w-full bg-orange-50 dark:bg-gray-900 text-gray-800">
      <main className=" mx-auto px-6 py-10 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row mb-4 gap-4 items-center justify-center">
          <h1 className="text-4xl font-extrabold text-orange-500">
            GameDev Краснодар
          </h1>
          <img src="./icons/icon.jpg" alt="logo" className="w-24 h-24 rounded-3xl" />
        </div> 
        <span className="mx-auto flex flex-row text-sm font-bold text-black dark:text-white items-center align-middle border border-orange-300 rounded-full px-4 py-1 bg-white dark:bg-gray-800 shadow-sm">
            · Краснодар · Геймдев · Комьюнити
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Создаём игры{' '}
            <span className="text-orange-500">вместе</span>
        </h1>
        <p className="text-lg mx-auto text-gray-500 max-w-2xl">
          Сообщество геймдев‑разработчиков Краснодара. Общение, встречи,
          обмен опытом и развитие в индустрии.
        </p>
        <div className="flex gap-4 items-center mx-auto flex-col sm:flex-row">
          <a href="https://t.me/gamedev_krd" target="_blank"
            className="px-6 py-3 rounded-2xl bg-orange-500 text-white font-medium shadow hover:bg-orange-600 transition">
            Telegram-канал
          </a>
          <a href="https://t.me/gamedev_krd_chat" target="_blank"
            className="px-6 py-3 rounded-2xl bg-white dark:bg-gray-800 text-orange-600 font-medium border border-orange-300 shadow hover:bg-orange-100 hover:dark:bg-gray-700 transition">
            Чат сообщества
          </a>
        </div>
      </main>
        <section className="max-w-full mx-auto px-6 pt-16">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
          <ListItem title="Комьюнити" description="100 разработчиков из Краснодара" icon="./icons/users.svg"/>
          <ListItem title="Встречи" description="Регулярные митапы и встречи" icon="./icons/calendar.svg"/>
          <ListItem title="Опыт" description="Обмен знаниями и проекты" icon="./icons/brain.svg"/>
          <ListItem title="Помощь новичкам" description="Помогаем начинающим разработчикам" icon="./icons/help.svg"/>
        </ul>
      </section>
      <section className="max-w-full mx-auto px-6 py-16">
        <h2 className="text-2xl dark:text-white font-semibold mb-6">
          Встречи и события
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image,i) => (
            <div key={i} className=" rounded-2xl bg-orange-100 flex items-center justify-center text-orange-400">
              <img src={image} alt="Фото со встречи" className="h-full w-full object-cover rounded-2xl"/>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-orange-200 dark:border-gray-700 mt-10">
        <div className="max-w-full mx-auto px-6 py-8 text-sm text-gray-500 flex justify-between flex-wrap gap-4">
          <span>2025 - {new Date().getFullYear()} Gamedev Краснодар</span>
          <a href="mailto:gamedevkrd@gmail.com" className="text-orange-500">Почта для связи</a>
        </div>
      </footer>
    </div>
  );
}

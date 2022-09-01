// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// import React from "react";
import ReactDOM from "react-dom";

// const elem1 = React.createElement("span", { children: "Привет" });
// const elem2 = React.createElement("span", { children: "мир" });

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: [elem1, " ", elem2],
// });

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: "Привет мир",
// });
// console.log(element);
// const elem1 = <span>Привет</span>;
// const elem2 = <span>мир</span>;

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);

// console.log(element);

// ReactDOM.render(element, document.querySelector("#root"));
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
const data = {
  id: "id-1",
  url: "https://cdn.pixaby.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};
const painting = (
  <div>
    <img src={data.url} alt={data.title} width="480" />
    <h2>{data.title}</h2>
    <p>
      Автор: <a href=""></a>
    </p>
    <p>Цена: кредиитов</p>
    <p>Доступность: заканчивается или есть в ниличии</p>
    <button type="button"></button>
  </div>
);

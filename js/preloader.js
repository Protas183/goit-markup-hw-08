document.body.onload = function loader() {
    // Получаем контейнер и создаем лоадер
let preloader = document.getElementById('page-preloader');
if (preloader.classList.contains('done')) {
    preloader.classList.remove('done');
}
// Выполняем асинхронный запрос
fetch('http://test-api')
  .then(response => response.json())
    .then(data => {
      console.log(data)
    // Скрываем лоадер
    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
  })
  .catch(error => {
    // Скрываем лоадер в случае ошибки
    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    console.error(error);
  });
}








// async function load() {
//     return new Promise(resolve => {
//         window.addEventListener('load', function() {
//             setTimeout(function() {
//                 let preloader = document.getElementById('page-preloader');
//                     if (!preloader.classList.contains('done')) {
//                         preloader.classList.add('done');
//                     }
//                 resolve();  
//             }, 1000);
//         });
//     });
// }

// load();
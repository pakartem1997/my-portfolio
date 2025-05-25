import { createEffect, createStore } from "effector";



export const fetchTodosFx = createEffect(async () => {
  const todos = await fetch(`http://localhost:3000/todos`);

  return todos.json();
});

console.log("createStore");
export const $todos = createStore([]);
console.log("createStore");
$todos.on(fetchTodosFx.doneData, (_, repos) => repos);











// const fetchUserNameFx = createEffect(async () => {
//   const userData = await fetch(`http://localhost:3000/todos`);

//   return userData.json();
// });

// const a = createEffect(async () => {
//   const userData = await fetch(`http://localhost:3000/todos/dd9b`, {
//     method: "delete",
//   })

//   return userData.json();
// });

// console.log("store");

// export const pageMounted = createEvent();
// export const $todos = createStore([]);

// export const messagesLoadFx = createEffect(async () => {
//   const history = await fetch(`http://localhost:3000/todos`);
//   return history ?? [];
// });

// // в вашем файле с моделью Effector
// $todos.on(messagesLoadFx.doneData, (_, newTodos) => newTodos);


// sample({
//   clock: pageMounted,
//   target: [messagesLoadFx],
// });

// const fetchUserReposFx = createEffect(async () => {
//   const url = `https://api.github.com/users/${name}/repos`;
//   const req = await fetch(url);
//   return req.json();
// });


// $userName.on(a.doneData, (_, result) => result);

// export const messagesLoadFx = createEffect(async () => {
//   const response = await fetch('http://localhost:3000/todos');
  
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
// console.log("messagesLoadFx");
//   return await response.json();
// });

// const pageMounted = createEvent();
// console.log("createStore");
// const $todos = createStore([]);
// const $messagesLoading = messagesLoadFx.pending; // Отдельный стор для статуса загрузки
// const $messagesError = createStore(null).reset(pageMounted); // Стор для ошибки

// // Обработка ошибок эффекта
// messagesLoadFx.fail.watch(({ error }) => {
//   console.error('Ошибка загрузки:', error);
// });

// $todos.on(messagesLoadFx.doneData, (_, newTodos) => newTodos);
// $messagesError.on(messagesLoadFx.fail, (_, { error }) => error.message);

// sample({
//   clock: pageMounted,
//   target: messagesLoadFx,
// });


//  const [todos, isLoading, error] = useUnit([
//     $todos, 
//     $messagesLoading, 
//     $messagesError
//   ]);
//   const triggerPageMounted = useUnit(pageMounted);

//   useEffect(() => {
//     triggerPageMounted();
//   }, []); // Пустой массив зависимостей для монтирования

//   if (isLoading) {
//     return <div>Загрузка...</div>;
//   }

//   if (error) {
//     return <div>Ошибка загрузки: {error}</div>;
//   }

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.name}</li> // Добавлен ключ и структурированный вывод
//       ))}
//     </ul>
//   );
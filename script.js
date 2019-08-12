// 1st task https://plnkr.co/edit/7ClkqGv1RY6oifYgwQQp?p=preview

// //1st task start///////////////////////////////////////////////////////////////////
// 
// //UI



// Custom Http Module
// function http() {
//   return {
//     async request(url, options) {
//       const response = await fetch(url, options)
//         .then(response => {
//           if (Math.floor(response.status / 100) !== 2) {
//             return Promise.reject(response);
//           }
//           return response.json();
//         });
//         return response;
//     },
//   };
// }

// const myHttp = http();

// //functions
// async function getMarkupAndStyle() {
//   try {
//     const response = await myHttp.request('structure.json');
//     return response;
//   }catch(err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// }

// function renderMarkup(html) {
//   document.body.insertAdjacentHTML('afterbegin', html);
// }

// function renderStyle(styles) {
//   const style = document.createElement('style');
//   style.textContent =`${styles}`;
//   document.body.appendChild(style);
// }



// getMarkupAndStyle()
//   .then(value => {
//     renderMarkup(value.html)
//     renderStyle(value.styles)
//   })
//   .catch(err => console.log(err))

// //1st task end///////////////////////////////////////////////////////////////////

//2nd task start///////////////////////////////////////////////////////////////////
// UI
const userList = document.createElement('ul');
document.body.appendChild(userList);


// Custom Http Module
function http() {
  return {
    async request(url, options) {
      const response = await fetch(url, options)
        .then(response => {
          if (Math.floor(response.status / 100) !== 2) {
            return Promise.reject(response);
          }
          return response.json();
        });
        return response;
    }
  };
}

const myHttp = http();




async function getUserWithTasksAmount() {
  try {
    const todos = await myHttp.request('https://jsonplaceholder.typicode.com/todos');
    return todos;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}



getUserWithTasksAmount()
  .then(value => {
    const usersCount = [];
 
    for (let task of value) {
       if (!usersCount.includes(task.userId)) {
        usersCount.push(task.userId);
      }
    }

    for (let userIndex of usersCount) {
      const completedTasks = (value.filter (task => task.userId === userIndex && task.completed)).length;
      const uncompletedTasks = (value.filter (task => task.userId === userIndex && !task.completed)).length;

      const li = document.createElement('li');

      li.textContent = `Пользователь userID=${userIndex} имеет ${completedTasks} завершенных и ${uncompletedTasks} незавершенных заданий`;
      userList.appendChild(li);
    }
  })
  .catch(err => console.log(err))

//2nd task end///////////////////////////////////////////////////////////////////
//3d task start///////////////////////////////////////////////////////////////////


//3d task end///////////////////////////////////////////////////////////////////
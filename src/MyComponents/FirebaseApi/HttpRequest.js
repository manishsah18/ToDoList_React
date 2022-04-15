const FIREBASE_DOMAIN = 'https://mytodolist-e06a2-default-rtdb.firebaseio.com/'
// const FIREBASE_DOMAIN = ''

export async function HttpRequest( MyTodoList ) {
  const response = await fetch(`${FIREBASE_DOMAIN}/MyTodoList .json`, {
    method: "POST",

    body: JSON.stringify(MyTodoList),

    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create toDoList.");
  }

  return null;
}
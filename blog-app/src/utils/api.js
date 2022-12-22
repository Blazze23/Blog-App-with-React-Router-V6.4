import { sleep } from "./sleep";

export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw { message: "Could not fetch posts", status: 500 };
  }

  return response.json();
}

export async function getPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  if (!response.ok) {
    throw { message: "Could not fetch post", status: 500 };
  }

  return response.json();
}

export async function savePost(post) {
  if (post.title.trim().length < 5 || post.body.trim().length < 10) {
    throw { message: "Invalid input data provided", status: 422 };
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (!response.ok) {
    throw { message: "Could not save post", status: 500 };
  }

  return response.json();
}

export async function getSlowPosts() {
  await sleep(1000);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw { message: "Could not fetch posts", status: 500 };
  }

  return response.json();
}

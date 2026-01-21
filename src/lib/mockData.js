export const posts = [
  { id: 1, title: 'Blog post 1', body: 'Lorem ipsum dolor sit amet' },
  { id: 2, title: 'Blog post 2', body: 'Sed do eiusmod tempor incididunt' },
  { id: 3, title: 'Blog post 3', body: 'Ut enim ad minim veniam' },
  { id: 4, title: 'Blog post 4', body: 'Ut labore et dolore magna aliqua' }
];

export const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 3000);
  });
};

export default { posts, getPosts };
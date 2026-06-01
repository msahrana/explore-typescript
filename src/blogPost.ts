type Blog = {
    blogId: number;
    title: string;
    content: string;
    published: boolean;
    publishedDate?: string;
};

const blog1: Blog = {
    blogId: 1211,
    title: 'My first blog',
    content: 'I love my wife very much.',
    published: true,
    publishedDate: '12 march',
};
const printBlog = (blog: Blog) => {
    console.log(blog.title);
    console.log(blog.content);
    if (blog.publishedDate) {
        console.log(blog.publishedDate);
    }
};
printBlog(blog1);


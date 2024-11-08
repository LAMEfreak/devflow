// Global types in Typescript are a way to define types that are available globally in your project. This is useful when you have types that are used in multiple files and you don't want to import them in every file. We define these types in types/global.d.ts so that it is available globally in our project.

interface Tag {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  image: string;
}

interface Question {
  _id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  views: number;
  answers: number;
}

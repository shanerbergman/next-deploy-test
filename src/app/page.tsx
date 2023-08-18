import { Metadata } from 'next';
import { prisma } from '@/db';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js sasd',
};

export default async function Page() {
  const todos = await prisma.todo.findMany();

  //await prisma.todo.create({ data: { title: 'TEST', complete: false } });
  return (
    <>
      <header className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">Hello, Home page!</h1>
        <Link
          className="
        rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700
        "
          href="/new"
        >
          NEW
        </Link>
      </header>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

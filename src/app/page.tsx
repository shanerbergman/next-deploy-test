import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next.js sasd',
};

export default function Page() {
  return (
    <>
      <h1>Hello, Home page!</h1>
      <Link href="/new">NEW</Link>
    </>
  );
}

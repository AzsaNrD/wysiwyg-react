import { useState } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import RichTextEditor from '../components/RichTextEditor';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [value, setValue] = useState('');
  const [isCopy, setIsCopy] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(value);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 5000);
  };

  return (
    <>
      <Head>
        <title>WYSIWYG</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={inter.className}>
        <div className='w-11/12 md:w-9/12 mx-auto flex flex-col gap-10'>
          <div className='flex flex-col gap-5 mt-10'>
            <h1 className='text-xl md:text-3xl font-bold'>What You See Is What You Get</h1>
            <RichTextEditor setValue={setValue} />
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='font-medium text-lg md:text-2xl'>Raw</h2>
            <p className='break-words'>{value}</p>
            <button
              className={`${
                isCopy ? 'bg-emerald-800' : 'bg-neutral-500'
              } w-fit text-neutral-50 py-1 px-4 rounded`}
              type='button'
              onClick={copyHandler}
            >
              {isCopy ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

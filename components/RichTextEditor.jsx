import { useRef } from 'react';
import dynamic from 'next/dynamic';

const importJodit = () => import('jodit-react');

const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

export default function RichTextEditor({ setValue }) {
  const editor = useRef(null);

  return <JoditEditor ref={editor} onChange={(content) => setValue(content)} />;
}

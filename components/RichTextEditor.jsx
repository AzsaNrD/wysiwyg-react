import { useRef } from 'react';
import JoditEditor from 'jodit-react';

export default function RichTextEditor({ setValue }) {
  const editor = useRef(null);

  return <JoditEditor ref={editor} onChange={(content) => setValue(content)} />;
}

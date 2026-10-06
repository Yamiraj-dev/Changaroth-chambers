import React, { useMemo, useRef } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { base44 } from "@/api/base44Client";

export default function RichEditor({ value, onChange }) {
  const quillRef = useRef(null);

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: [2, 3, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["blockquote", "link", "image"],
        ["clean"],
      ],
      handlers: {
        image: () => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/*";
          input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;
            const { file_url } = await base44.integrations.Core.UploadPublicFile({ file });
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection(true);
            editor.insertEmbed(range.index, "image", file_url);
          };
          input.click();
        },
      },
    },
  }), []);

  return (
    <div className="rich-editor">
      <ReactQuill ref={quillRef} theme="snow" value={value} onChange={onChange} modules={modules} placeholder="Write your article…" />
    </div>
  );
}
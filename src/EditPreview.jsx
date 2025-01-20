import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

const EditPreview = ({ selectedData, setSelectedData }) => {
  // HTML 문자열을 정제하는 함수
  const sanitizeHtml = (html) => {
    if (!html) return "";

    // 줄바꿈 처리
    const processedHtml = html.replace(/\\n/g, "\n");

    // HTML 엔티티 디코딩
    const textarea = document.createElement("textarea");
    textarea.innerHTML = processedHtml;
    return textarea.value;
  };

  return (
    <div style={{ width: "70%", padding: "20px" }}>
      <h3>데이터 편집</h3>
      {selectedData ? (
        <Editor
          value={sanitizeHtml(selectedData)}
          onEditorChange={(content) => setSelectedData(content)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic forecolor backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
          }}
        />
      ) : (
        <p>왼쪽에서 편집할 데이터를 선택해주세요.</p>
      )}
      <style>
        {`
          .ck-editor__editable {
            min-height: 500px;
            max-height: 800px;
          }
          
          .ck-content table {
            border-collapse: collapse;
            width: 100%;
          }
          
          .ck-content table td {
            border: 1px solid #ccc;
            padding: 8px;
          }
          
          .ck.ck-editor {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

EditPreview.propTypes = {
  selectedData: PropTypes.string,
  setSelectedData: PropTypes.func.isRequired,
};

export default EditPreview;

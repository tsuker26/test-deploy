import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "./App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  return (
    <Document file="resume.pdf" noData={null} loading={null} error={null}>
      <Page
        scale={1.05}
        pageNumber={1}
        renderAnnotationLayer={false}
        renderTextLayer={false}
      />
    </Document>
  );
}

export default App;

import { useState } from "react";

interface Props {
  id: string;
  label?: string;
  maxText?: number; // 파일명 말줄임 최대 글자수
}

function Attachment(props: Props) {
  const [files, setFiles] = useState<File[]>([]);

  // 파일 선택
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(prevFiles => {
      // 중복된 파일 제거
      const uniqueFiles = selectedFiles.filter(
        newFile =>
          !prevFiles.some(file => file.lastModified === newFile.lastModified)
      );
      return [...prevFiles, ...uniqueFiles]; // 이전 파일 + 새 파일 병합
    });
  };

  // 파일 삭제
  const handleFileRemove = (fileToRemove: File) => {
    setFiles(prevFiles =>
      prevFiles.filter(file => file.lastModified !== fileToRemove.lastModified)
    );
    // 목록 업데이트
    const dataTransfer = new DataTransfer();
    files
      .filter(file => file.lastModified !== fileToRemove.lastModified)
      .forEach(file => dataTransfer.items.add(file));

    const fileInputElement = document.getElementById(
      props.id
    ) as HTMLInputElement;
    if (fileInputElement) {
      fileInputElement.files = dataTransfer.files;
    }
  };

  // 파일 크기
  const formatFileSize = (size: any) => {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    // 단위 변경
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    const formattedSize = parseFloat(size.toFixed(2));
    return `${formattedSize}${units[unitIndex]}`;
  };

  // 최대 글자수
  const formatFileName = (fileName: string, maxLength = props.maxText) => {
    // maxLength가 숫자인지 확인
    if (typeof maxLength !== "number" || isNaN(maxLength)) {
      return;
    }

    const fileExtension = fileName.split(".").pop(); // 파일 확장자 추출
    const baseName = fileName.substring(0, fileName.lastIndexOf(".")); // 파일명 추출

    const truncatedBaseName =
      baseName.length > maxLength
        ? baseName.substring(0, maxLength) + ".."
        : baseName;
    return `${truncatedBaseName}.${fileExtension}`;
  };

  return (
    <>
      <div className="attachment">
        <input type="file" id={props.id} multiple onChange={handleFileChange} />
        <label htmlFor={props.id}>
          {props.label ? props.label : "파일 선택"}
        </label>
        <span className="count">
          {files.length === 0 ? "선택된 파일 없음" : `파일 ${files.length}개`}
        </span>
        <ul>
          {files.map(file => (
            <li key={file.lastModified}>
              {formatFileName(file.name)}
              <span> ({formatFileSize(file.size)})</span>
              <button
                onClick={() => handleFileRemove(file)}
                className="remove"
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Attachment;

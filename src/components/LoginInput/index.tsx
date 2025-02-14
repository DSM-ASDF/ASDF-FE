import { useState } from "react";
import * as S from "./style";

interface InputProps {
  type: "text" | "file";
  text: string;
  placeholder: string;
}

export const LoginInput = ({ type, text, placeholder }: InputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <S.Container>
      <S.InputTitle>{text}</S.InputTitle>
      {type === "file" ? (
        <>
          <S.HiddenFileInput
            type="file"
            id="file-upload"
            onChange={handleFileChange}
          />
          <S.FileLabel htmlFor="file-upload">
            {fileName || placeholder}
          </S.FileLabel>
        </>
      ) : (
        <S.Input placeholder={placeholder} type={type} />
      )}
    </S.Container>
  );
};

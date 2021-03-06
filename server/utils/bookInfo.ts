import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { BookInfo } from './type';
import { pdfSupportImage } from '../shared';

function getBookInfo(dirName: string, extName = 'pdf'): BookInfo {
  const outputPath = `${dirName}.${extName}`;
  const files: string[] = fs.readdirSync(dirName);

  const bookTitle: string = (_.last(_.split(dirName, '/'))) as string;
  const filePathList: string[] = [];
  files.forEach((fileName: string): void => {
    const filePath = path.join(dirName, fileName);
    const temp = path.extname(filePath);
    if (pdfSupportImage.includes(temp)) {
      filePathList.push(filePath);
    }
  });
  return {
    outputPath,
    filePathList,
    bookTitle,
  };
}

export default getBookInfo;

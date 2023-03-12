import { Injectable } from '@angular/core';
import { StrictHttpResponse } from 'src/app/api/strict-http-response';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor() {}

  saveFile(response: StrictHttpResponse<Blob>) {
    const contentDispositionHeader = response.headers.get(
      'Content-Disposition'
    );
    const filename = this.extractFilenameFromContentDisposition(
      contentDispositionHeader
    );
    const downloadLink = document.createElement('a');
    const objectUrl = URL.createObjectURL(response.body);
    downloadLink.href = objectUrl;
    downloadLink.download = filename;
    downloadLink.click();
    URL.revokeObjectURL(objectUrl);
  }

  private extractFilenameFromContentDisposition(
    contentDisposition: string
  ): string {
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = regex.exec(contentDisposition);
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }
    return 'profile.pdf';
  }
}

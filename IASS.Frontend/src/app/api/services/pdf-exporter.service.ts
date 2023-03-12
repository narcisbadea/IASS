/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class PdfExporterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiPdfExporterGenerateXmlGet
   */
  static readonly ApiPdfExporterGenerateXmlGetPath = '/api/PdfExporter/generate-xml';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPdfExporterGenerateXmlGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGenerateXmlGet$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PdfExporterService.ApiPdfExporterGenerateXmlGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPdfExporterGenerateXmlGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGenerateXmlGet(params?: {
    userId?: string;
  }): Observable<void> {

    return this.apiPdfExporterGenerateXmlGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiPdfExporterGeneratePdfGet
   */
  static readonly ApiPdfExporterGeneratePdfGetPath = '/api/PdfExporter/GeneratePDF';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPdfExporterGeneratePdfGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGeneratePdfGet$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, PdfExporterService.ApiPdfExporterGeneratePdfGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPdfExporterGeneratePdfGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGeneratePdfGet$Plain(params?: {
    userId?: string;
  }): Observable<Blob> {

    return this.apiPdfExporterGeneratePdfGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPdfExporterGeneratePdfGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGeneratePdfGet$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, PdfExporterService.ApiPdfExporterGeneratePdfGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Blob>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiPdfExporterGeneratePdfGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPdfExporterGeneratePdfGet$Json(params?: {
    userId?: string;
  }): Observable<Blob> {

    return this.apiPdfExporterGeneratePdfGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

}

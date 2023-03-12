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

import { XRayForUserDto } from '../models/x-ray-for-user-dto';

@Injectable({
  providedIn: 'root',
})
export class XRayService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiXRayGet
   */
  static readonly ApiXRayGetPath = '/api/XRay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayGet$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayGet$Plain(params?: {
    userId?: string;
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayGet$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayGet$Json(params?: {
    userId?: string;
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

  /**
   * Path part for operation apiXRayPost
   */
  static readonly ApiXRayPostPath = '/api/XRay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiXRayPost$Plain$Response(params?: {
    userId?: string;
    body?: {
'TypeId'?: string;
'Photo'?: Blob;
'Description'?: string;
}
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayPostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiXRayPost$Plain(params?: {
    userId?: string;
    body?: {
'TypeId'?: string;
'Photo'?: Blob;
'Description'?: string;
}
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiXRayPost$Json$Response(params?: {
    userId?: string;
    body?: {
'TypeId'?: string;
'Photo'?: Blob;
'Description'?: string;
}
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayPostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiXRayPost$Json(params?: {
    userId?: string;
    body?: {
'TypeId'?: string;
'Photo'?: Blob;
'Description'?: string;
}
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

  /**
   * Path part for operation apiXRayDelete
   */
  static readonly ApiXRayDeletePath = '/api/XRay';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayDelete$Plain$Response(params?: {
    xrayId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayDeletePath, 'delete');
    if (params) {
      rb.query('xrayId', params.xrayId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayDelete$Plain(params?: {
    xrayId?: string;
  }): Observable<string> {

    return this.apiXRayDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayDelete$Json$Response(params?: {
    xrayId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayDeletePath, 'delete');
    if (params) {
      rb.query('xrayId', params.xrayId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayDelete$Json(params?: {
    xrayId?: string;
  }): Observable<string> {

    return this.apiXRayDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiXRayPhotoGet
   */
  static readonly ApiXRayPhotoGetPath = '/api/XRay/photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayPhotoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayPhotoGet$Plain$Response(params?: {
    xRayId?: string;
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayPhotoGetPath, 'get');
    if (params) {
      rb.query('xRayId', params.xRayId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayPhotoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayPhotoGet$Plain(params?: {
    xRayId?: string;
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayPhotoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiXRayPhotoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayPhotoGet$Json$Response(params?: {
    xRayId?: string;
  }): Observable<StrictHttpResponse<Array<XRayForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, XRayService.ApiXRayPhotoGetPath, 'get');
    if (params) {
      rb.query('xRayId', params.xRayId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<XRayForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiXRayPhotoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiXRayPhotoGet$Json(params?: {
    xRayId?: string;
  }): Observable<Array<XRayForUserDto>> {

    return this.apiXRayPhotoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<XRayForUserDto>>) => r.body as Array<XRayForUserDto>)
    );
  }

}

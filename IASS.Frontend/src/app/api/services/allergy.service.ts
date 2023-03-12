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

import { AllergyForUserDto } from '../models/allergy-for-user-dto';
import { AllergyToPostDto } from '../models/allergy-to-post-dto';

@Injectable({
  providedIn: 'root',
})
export class AllergyService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAllergyGet
   */
  static readonly ApiAllergyGetPath = '/api/Allergy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyGet$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Array<AllergyForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AllergyForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAllergyGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyGet$Plain(params?: {
    userId?: string;
  }): Observable<Array<AllergyForUserDto>> {

    return this.apiAllergyGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AllergyForUserDto>>) => r.body as Array<AllergyForUserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyGet$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<Array<AllergyForUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AllergyForUserDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAllergyGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyGet$Json(params?: {
    userId?: string;
  }): Observable<Array<AllergyForUserDto>> {

    return this.apiAllergyGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AllergyForUserDto>>) => r.body as Array<AllergyForUserDto>)
    );
  }

  /**
   * Path part for operation apiAllergyPut
   */
  static readonly ApiAllergyPutPath = '/api/Allergy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPut$Plain$Response(params?: {
    userId?: string;
    allergyId?: string;
    body?: AllergyToPostDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyPutPath, 'put');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('allergyId', params.allergyId, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiAllergyPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPut$Plain(params?: {
    userId?: string;
    allergyId?: string;
    body?: AllergyToPostDto
  }): Observable<string> {

    return this.apiAllergyPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPut$Json$Response(params?: {
    userId?: string;
    allergyId?: string;
    body?: AllergyToPostDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyPutPath, 'put');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('allergyId', params.allergyId, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiAllergyPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPut$Json(params?: {
    userId?: string;
    allergyId?: string;
    body?: AllergyToPostDto
  }): Observable<string> {

    return this.apiAllergyPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiAllergyPost
   */
  static readonly ApiAllergyPostPath = '/api/Allergy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPost$Plain$Response(params?: {
    userId?: string;
    body?: AllergyToPostDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyPostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiAllergyPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPost$Plain(params?: {
    userId?: string;
    body?: AllergyToPostDto
  }): Observable<string> {

    return this.apiAllergyPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPost$Json$Response(params?: {
    userId?: string;
    body?: AllergyToPostDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyPostPath, 'post');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiAllergyPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAllergyPost$Json(params?: {
    userId?: string;
    body?: AllergyToPostDto
  }): Observable<string> {

    return this.apiAllergyPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiAllergyDelete
   */
  static readonly ApiAllergyDeletePath = '/api/Allergy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyDelete$Plain$Response(params?: {
    allergyId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyDeletePath, 'delete');
    if (params) {
      rb.query('allergyId', params.allergyId, {});
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
   * To access the full response (for headers, for example), `apiAllergyDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyDelete$Plain(params?: {
    allergyId?: string;
  }): Observable<string> {

    return this.apiAllergyDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyDelete$Json$Response(params?: {
    allergyId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyService.ApiAllergyDeletePath, 'delete');
    if (params) {
      rb.query('allergyId', params.allergyId, {});
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
   * To access the full response (for headers, for example), `apiAllergyDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyDelete$Json(params?: {
    allergyId?: string;
  }): Observable<string> {

    return this.apiAllergyDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

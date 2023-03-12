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

import { AllergyCategory } from '../models/allergy-category';

@Injectable({
  providedIn: 'root',
})
export class AllergyCategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAllergyCategoryAllGet
   */
  static readonly ApiAllergyCategoryAllGetPath = '/api/AllergyCategory/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyCategoryAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyCategoryAllGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AllergyCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyCategoryService.ApiAllergyCategoryAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AllergyCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAllergyCategoryAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyCategoryAllGet$Plain(params?: {
  }): Observable<Array<AllergyCategory>> {

    return this.apiAllergyCategoryAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AllergyCategory>>) => r.body as Array<AllergyCategory>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAllergyCategoryAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyCategoryAllGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<AllergyCategory>>> {

    const rb = new RequestBuilder(this.rootUrl, AllergyCategoryService.ApiAllergyCategoryAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AllergyCategory>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAllergyCategoryAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAllergyCategoryAllGet$Json(params?: {
  }): Observable<Array<AllergyCategory>> {

    return this.apiAllergyCategoryAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AllergyCategory>>) => r.body as Array<AllergyCategory>)
    );
  }

}

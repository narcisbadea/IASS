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

import { LoginDto } from '../models/login-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authRegisterDoctorPost
   */
  static readonly AuthRegisterDoctorPostPath = '/Auth/register-doctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterDoctorPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterDoctorPost$Plain$Response(params?: {
    body?: {
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Photo'?: Blob;
}
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthRegisterDoctorPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `authRegisterDoctorPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterDoctorPost$Plain(params?: {
    body?: {
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Photo'?: Blob;
}
  }): Observable<string> {

    return this.authRegisterDoctorPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterDoctorPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterDoctorPost$Json$Response(params?: {
    body?: {
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Photo'?: Blob;
}
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthRegisterDoctorPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `authRegisterDoctorPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterDoctorPost$Json(params?: {
    body?: {
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Photo'?: Blob;
}
  }): Observable<string> {

    return this.authRegisterDoctorPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authRegisterPatientPost
   */
  static readonly AuthRegisterPatientPostPath = '/Auth/register-patient';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterPatientPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterPatientPost$Plain$Response(params?: {
    body?: {
'Age'?: number;
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Address'?: string;
'CNP'?: string;
'Photo'?: Blob;
'DoctorCode'?: string;
}
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthRegisterPatientPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `authRegisterPatientPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterPatientPost$Plain(params?: {
    body?: {
'Age'?: number;
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Address'?: string;
'CNP'?: string;
'Photo'?: Blob;
'DoctorCode'?: string;
}
  }): Observable<string> {

    return this.authRegisterPatientPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRegisterPatientPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterPatientPost$Json$Response(params?: {
    body?: {
'Age'?: number;
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Address'?: string;
'CNP'?: string;
'Photo'?: Blob;
'DoctorCode'?: string;
}
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthRegisterPatientPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * To access the full response (for headers, for example), `authRegisterPatientPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  authRegisterPatientPost$Json(params?: {
    body?: {
'Age'?: number;
'FirstName'?: string;
'LastName'?: string;
'Email'?: string;
'Telephone'?: string;
'Password'?: string;
'Address'?: string;
'CNP'?: string;
'Photo'?: Blob;
'DoctorCode'?: string;
}
  }): Observable<string> {

    return this.authRegisterPatientPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authLoginPost
   */
  static readonly AuthLoginPostPath = '/Auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Plain$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoginPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `authLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Plain(params?: {
    body?: LoginDto
  }): Observable<string> {

    return this.authLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Json$Response(params?: {
    body?: LoginDto
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoginPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `authLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  authLoginPost$Json(params?: {
    body?: LoginDto
  }): Observable<string> {

    return this.authLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation authLoggedUsernameGet
   */
  static readonly AuthLoggedUsernameGetPath = '/Auth/logged-username';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoggedUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  authLoggedUsernameGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoggedUsernameGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `authLoggedUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authLoggedUsernameGet$Plain(params?: {
  }): Observable<string> {

    return this.authLoggedUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoggedUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  authLoggedUsernameGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthLoggedUsernameGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `authLoggedUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authLoggedUsernameGet$Json(params?: {
  }): Observable<string> {

    return this.authLoggedUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

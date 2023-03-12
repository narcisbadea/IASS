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

import { PatientProfileDto } from '../models/patient-profile-dto';
import { UserForTableDtoPage } from '../models/user-for-table-dto-page';
import { UserSearchRequest } from '../models/user-search-request';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserDoctorCodeGet
   */
  static readonly ApiUserDoctorCodeGetPath = '/api/User/doctor-code';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorCodeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorCodeGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserDoctorCodeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorCodeGet$Plain(params?: {
  }): Observable<string> {

    return this.apiUserDoctorCodeGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorCodeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorCodeGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorCodeGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserDoctorCodeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorCodeGet$Json(params?: {
  }): Observable<string> {

    return this.apiUserDoctorCodeGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserLoggedUseridGet
   */
  static readonly ApiUserLoggedUseridGetPath = '/api/User/logged-userid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoggedUseridGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUseridGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoggedUseridGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserLoggedUseridGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUseridGet$Plain(params?: {
  }): Observable<string> {

    return this.apiUserLoggedUseridGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoggedUseridGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUseridGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoggedUseridGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserLoggedUseridGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUseridGet$Json(params?: {
  }): Observable<string> {

    return this.apiUserLoggedUseridGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserLoggedUserNameGet
   */
  static readonly ApiUserLoggedUserNameGetPath = '/api/User/logged-user-name';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoggedUserNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUserNameGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoggedUserNameGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserLoggedUserNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUserNameGet$Plain(params?: {
  }): Observable<string> {

    return this.apiUserLoggedUserNameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserLoggedUserNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUserNameGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserLoggedUserNameGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiUserLoggedUserNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserLoggedUserNameGet$Json(params?: {
  }): Observable<string> {

    return this.apiUserLoggedUserNameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserProfilePhotoGet
   */
  static readonly ApiUserProfilePhotoGetPath = '/api/User/profile-photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfilePhotoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfilePhotoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiUserProfilePhotoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoGet$Plain(params?: {
  }): Observable<Blob> {

    return this.apiUserProfilePhotoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfilePhotoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfilePhotoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiUserProfilePhotoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoGet$Json(params?: {
  }): Observable<Blob> {

    return this.apiUserProfilePhotoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation apiUserProfilePhotoUserIdGet
   */
  static readonly ApiUserProfilePhotoUserIdGetPath = '/api/User/profile-photo/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfilePhotoUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoUserIdGet$Plain$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfilePhotoUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserProfilePhotoUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoUserIdGet$Plain(params: {
    userId: string;
  }): Observable<Blob> {

    return this.apiUserProfilePhotoUserIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfilePhotoUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoUserIdGet$Json$Response(params: {
    userId: string;
  }): Observable<StrictHttpResponse<Blob>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfilePhotoUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserProfilePhotoUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfilePhotoUserIdGet$Json(params: {
    userId: string;
  }): Observable<Blob> {

    return this.apiUserProfilePhotoUserIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Blob>) => r.body as Blob)
    );
  }

  /**
   * Path part for operation apiUserSearchPost
   */
  static readonly ApiUserSearchPostPath = '/api/User/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserSearchPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserSearchPost$Plain$Response(params?: {
    body?: UserSearchRequest
  }): Observable<StrictHttpResponse<UserForTableDtoPage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserSearchPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserForTableDtoPage>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserSearchPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserSearchPost$Plain(params?: {
    body?: UserSearchRequest
  }): Observable<UserForTableDtoPage> {

    return this.apiUserSearchPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserForTableDtoPage>) => r.body as UserForTableDtoPage)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserSearchPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserSearchPost$Json$Response(params?: {
    body?: UserSearchRequest
  }): Observable<StrictHttpResponse<UserForTableDtoPage>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserSearchPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserForTableDtoPage>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserSearchPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserSearchPost$Json(params?: {
    body?: UserSearchRequest
  }): Observable<UserForTableDtoPage> {

    return this.apiUserSearchPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserForTableDtoPage>) => r.body as UserForTableDtoPage)
    );
  }

  /**
   * Path part for operation apiUserMedicalHistoryGet
   */
  static readonly ApiUserMedicalHistoryGetPath = '/api/User/medical-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryGet$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryGet$Plain(params?: {
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryGet$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryGet$Json(params?: {
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserMedicalHistoryPost
   */
  static readonly ApiUserMedicalHistoryPostPath = '/api/User/medical-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryPost$Plain$Response(params?: {
    medicalHistory?: string;
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryPostPath, 'post');
    if (params) {
      rb.query('medicalHistory', params.medicalHistory, {});
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryPost$Plain(params?: {
    medicalHistory?: string;
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryPost$Json$Response(params?: {
    medicalHistory?: string;
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryPostPath, 'post');
    if (params) {
      rb.query('medicalHistory', params.medicalHistory, {});
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryPost$Json(params?: {
    medicalHistory?: string;
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserMedicalHistoryDelete
   */
  static readonly ApiUserMedicalHistoryDeletePath = '/api/User/medical-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryDelete$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryDeletePath, 'delete');
    if (params) {
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryDelete$Plain(params?: {
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserMedicalHistoryDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryDelete$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserMedicalHistoryDeletePath, 'delete');
    if (params) {
      rb.query('userId', params.userId, {});
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
   * To access the full response (for headers, for example), `apiUserMedicalHistoryDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserMedicalHistoryDelete$Json(params?: {
    userId?: string;
  }): Observable<string> {

    return this.apiUserMedicalHistoryDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation apiUserProfileGet
   */
  static readonly ApiUserProfileGetPath = '/api/User/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfileGet$Plain$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<PatientProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfileGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PatientProfileDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserProfileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfileGet$Plain(params?: {
    userId?: string;
  }): Observable<PatientProfileDto> {

    return this.apiUserProfileGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PatientProfileDto>) => r.body as PatientProfileDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserProfileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfileGet$Json$Response(params?: {
    userId?: string;
  }): Observable<StrictHttpResponse<PatientProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserProfileGetPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PatientProfileDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserProfileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserProfileGet$Json(params?: {
    userId?: string;
  }): Observable<PatientProfileDto> {

    return this.apiUserProfileGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PatientProfileDto>) => r.body as PatientProfileDto)
    );
  }

}

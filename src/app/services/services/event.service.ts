/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createEvent } from '../fn/event/create-event';
import { CreateEvent$Params } from '../fn/event/create-event';
import { deleteEvent } from '../fn/event/delete-event';
import { DeleteEvent$Params } from '../fn/event/delete-event';
import { EventResponse } from '../models/event-response';
import { getAllEvents } from '../fn/event/get-all-events';
import { GetAllEvents$Params } from '../fn/event/get-all-events';
import { getEventById } from '../fn/event/get-event-by-id';
import { GetEventById$Params } from '../fn/event/get-event-by-id';
import { updateEvent } from '../fn/event/update-event';
import { UpdateEvent$Params } from '../fn/event/update-event';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getEventById()` */
  static readonly GetEventByIdPath = '/event/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEventById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventById$Response(params: GetEventById$Params, context?: HttpContext): Observable<StrictHttpResponse<EventResponse>> {
    return getEventById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEventById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEventById(params: GetEventById$Params, context?: HttpContext): Observable<EventResponse> {
    return this.getEventById$Response(params, context).pipe(
      map((r: StrictHttpResponse<EventResponse>): EventResponse => r.body)
    );
  }

  /** Path part for operation `updateEvent()` */
  static readonly UpdateEventPath = '/event/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent$Response(params: UpdateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEvent(params: UpdateEvent$Params, context?: HttpContext): Observable<void> {
    return this.updateEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteEvent()` */
  static readonly DeleteEventPath = '/event/{eventId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent$Response(params: DeleteEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEvent(params: DeleteEvent$Params, context?: HttpContext): Observable<void> {
    return this.deleteEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllEvents()` */
  static readonly GetAllEventsPath = '/event';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents$Response(params?: GetAllEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EventResponse>>> {
    return getAllEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllEvents(params?: GetAllEvents$Params, context?: HttpContext): Observable<Array<EventResponse>> {
    return this.getAllEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EventResponse>>): Array<EventResponse> => r.body)
    );
  }

  /** Path part for operation `createEvent()` */
  static readonly CreateEventPath = '/event';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent$Response(params: CreateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return createEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent(params: CreateEvent$Params, context?: HttpContext): Observable<string> {
    return this.createEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}

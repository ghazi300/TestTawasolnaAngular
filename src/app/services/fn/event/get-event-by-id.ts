/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventResponse } from '../../models/event-response';

export interface GetEventById$Params {
  eventId: string;
}

export function getEventById(http: HttpClient, rootUrl: string, params: GetEventById$Params, context?: HttpContext): Observable<StrictHttpResponse<EventResponse>> {
  const rb = new RequestBuilder(rootUrl, getEventById.PATH, 'get');
  if (params) {
    rb.path('eventId', params.eventId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EventResponse>;
    })
  );
}

getEventById.PATH = '/event/{eventId}';

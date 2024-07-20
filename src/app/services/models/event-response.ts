/* tslint:disable */
/* eslint-disable */
export interface EventResponse {
  category?: 'meeting' | 'conference' | 'workshop';
  createdBy?: string;
  createdDate?: string;
  description?: string;
  endDate?: string;
  id?: string;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  location?: string;
  startDate?: string;
  status?: 'planned' | 'completed' | 'cancelled';
  title?: string;
}

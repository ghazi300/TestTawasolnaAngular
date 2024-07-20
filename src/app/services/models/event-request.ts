/* tslint:disable */
/* eslint-disable */
export interface EventRequest {
  category: 'meeting' | 'conference' | 'workshop';
  description: string;
  endDate: string;
  location: string;
  startDate: string;
  status: 'planned' | 'completed' | 'cancelled';
  title: string;
}

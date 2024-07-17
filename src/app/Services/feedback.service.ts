import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/Feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl1 = 'http://localhost:9002/Resident-Support-Services/api/feedbacks';

  constructor(private backendService: FeedbackService) { }

  getAllFeedbacks(): Observable<Feedback[]> {
    return this.backendService.getAllFeedbacks();
  }

  getFeedbackById(feedbackId: number): Observable<Feedback> {
    return this.backendService.getFeedbackById(feedbackId);
  }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.backendService.createFeedback(feedback);
  }

  updateFeedback(feedbackId: number, feedback: Feedback): Observable<Feedback> {
    return this.backendService.updateFeedback(feedbackId, feedback);
  }

  deleteFeedback(feedbackId: number): Observable<void> {
    return this.backendService.deleteFeedback(feedbackId);
  }
}

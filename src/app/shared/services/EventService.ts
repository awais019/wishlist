import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private subject = new Subject();

  emit<T>(eventName: string, payload: T) {
    this.subject.next({ eventName, payload });
  }

  listen<T>(eventName: string, callback: (payload: T) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName == nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
}

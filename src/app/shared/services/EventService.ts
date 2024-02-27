import { Observable, Subject } from 'rxjs';

class EventService {
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

export default new EventService();

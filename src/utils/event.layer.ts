
export enum EventType {
  LANG_CHANGE = 'changeLang',
}

type EventObj = {
  [key in EventType]: Function[]
};

type EventResult = {
  eventGroup: EventType;
  index: number;
}

class EventLayer {
  public static readonly instance = new EventLayer();
  private events: EventObj;
  private constructor() {
    this.events = {} as EventObj;
  }

  private event(event: EventType, index: number): EventResult {
    return {
      eventGroup: event,
      index
    };
  }

  public on(event: EventType, callback: Function) {
    this.events[event] = this.events[event] || [];
    const index = this.events[event]?.push(callback);
    return this.event(event, index - 1);
  }

  public off(event: EventResult) {
    const aList = this.events[event.eventGroup]
      .splice(event.index, 1);
    this.events[event.eventGroup] = aList;
  }

  public emit(event: EventType) {
    if(this.events[event]) {
      return;
    }
    this.events[event].forEach(observer => observer());
  }
}

export const eventLayer = EventLayer.instance;

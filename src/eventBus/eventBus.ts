type EventHandler = (data?: any) => void

class EventBus {
  private events: Map<string, EventHandler[]> = new Map()

  subscribe(event: string, handler: EventHandler): void {
    const handlers = this.events.get(event) || []
    this.events.set(event, [...handlers, handler])
  }

  unsubscribe(event: string, handler: EventHandler): void {
    const handlers = this.events.get(event) || []
    this.events.set(
      event,
      handlers.filter((existingHandler) => existingHandler !== handler)
    )
  }

  publish(event: string, data?: any): void {
    const handlers = this.events.get(event) || []
    handlers.forEach((handler) => handler(data))
  }
}

const eventBus = new EventBus()

export default eventBus

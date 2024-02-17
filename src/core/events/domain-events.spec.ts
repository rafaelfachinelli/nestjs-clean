import { vi } from 'vitest';
import { AggregateRoot } from '@/core/entities/aggregate-root';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { DomainEvent } from '@/core/events/domain-event';
import { DomainEvents } from '@/core/events/domain-events';

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date;
  private _aggregate: CustomAggregate; // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this._aggregate = aggregate;
    this.ocurredAt = new Date();
  }

  public getAggregateId(): UniqueEntityID {
    return this._aggregate.id;
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null);

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate));

    return aggregate;
  }
}

describe('Domain Events', () => {
  it('should be able to dispatch and listen to events', () => {
    const callbackSpy = vi.fn();

    // Subscribe to the event (register the callback to be called when the event is dispatched)
    DomainEvents.register(callbackSpy, CustomAggregateCreated.name);

    // Create a response to the event but don't dispatch it
    const aggregate = CustomAggregate.create();

    // Expect the callback to not have been called
    expect(aggregate.domainEvents).toHaveLength(1);

    // Dispatch the event
    DomainEvents.dispatchEventsForAggregate(aggregate.id);

    // Subscribe to the event (register the callback to be called when the event is dispatched)
    expect(callbackSpy).toHaveBeenCalledTimes(1);
    expect(aggregate.domainEvents).toHaveLength(0);
  });
});

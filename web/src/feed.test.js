import { describe, expect, it } from 'vitest';
import { createFeed } from './feed.js';

function elements() {
  return { feed: { textContent: '' }, mode: { textContent: '' } };
}

describe('research feed with no city research', () => {
  it('shows an empty state instead of starting an empty replay', () => {
    const { feed, mode } = elements();
    const research = createFeed(feed, mode, { events: [], byId: new Map() });

    research.ambient();

    expect(mode.textContent).toBe('no updates');
    expect(feed.textContent).toBe('No research activity recorded for this city yet.');
  });

  it('shows an empty state when no societies have research to index', () => {
    const { feed, mode } = elements();
    const research = createFeed(feed, mode, { events: [], byId: new Map() });

    research.sweep([{ id: 'listing', units: null, verified: false }], 4500);

    expect(mode.textContent).toBe('no updates');
    expect(feed.textContent).toBe('No research activity recorded for this city yet.');
  });
});

import { BreakpointQuery, subscriber } from './utils';
import { useLayoutEffect, useState } from 'react';

export function useBreakpoint(query: string) {
  if (!BreakpointQuery.isValid(query)) {
    throw Error(`invalid query ${query}`);
  }

  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const subscription = subscriber().subscribe(query, ({ matches }) => {
      setMatches(matches);
    });

    setMatches(subscription.matches);

    return subscription.unsubscribe;
  }, []);

  return matches;
}

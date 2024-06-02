export type Direction = '+' | '-';
export type Breakpoint = 'mxs' | 'xs' | 's' | 'l' | 'xl';

export const Breakpoints: Breakpoint[] = ['mxs', 'xs', 's', 'l', 'xl'];

const Resolution: Record<Breakpoint, number> = {
  mxs: 0,
  xs: 390,
  s: 1080,
  l: 1440,
  xl: 1920,
};

export const BreakpointQuery = {
  getBreakpoint: (query: string) => query.slice(0, -1),

  getDirection: (query: string) => query.slice(-1),

  isValid: (query: string) =>
    typeof query === 'string' &&
    query &&
    query.length >= 2 &&
    Breakpoints.includes(BreakpointQuery.getBreakpoint(query) as any) &&
    ['+', '-', ''].includes(BreakpointQuery.getDirection(query)),

  parse: (query: string): [Breakpoint, Direction] => [
    BreakpointQuery.getBreakpoint(query) as Breakpoint,
    BreakpointQuery.getDirection(query) as Direction,
  ],

  toMediaQuery: (query: string) => {
    const [breakpoint, direction] = BreakpointQuery.parse(query);
    const rule = direction === '+' ? 'min-width' : 'max-width';
    const value = Resolution[breakpoint] + (direction === '+' ? 0 : -1);

    return `(${rule}: ${value}px)`;
  },
};

export function subscribe(
  mql: MediaQueryList,
  fn: (e: MediaQueryListEvent) => void,
): { unsubscribe: () => void } {
  mql.addEventListener('change', fn);

  return {
    unsubscribe: () => {
      mql.removeEventListener('change', fn);
    },
  };
}

export const subscriber = () => ({
  subscribe: (query: string, listener: (event: { matches: boolean }) => void) => {
    const subscriberItem = {
      mql: window.matchMedia(BreakpointQuery.toMediaQuery(query)),
      handlers: new Set([listener]),
    };

    subscribe(subscriberItem.mql, e => {
      subscriberItem.handlers.forEach(fn => fn(e));
    });

    return {
      matches: subscriberItem.mql.matches,
      unsubscribe: () => {
        subscriberItem.handlers.delete(listener);
      },
    };
  },
});

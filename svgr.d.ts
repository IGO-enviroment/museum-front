declare module '*.svg' {
  import { SVGProps, ReactElement } from 'react';

  export default function SvgComponent(props: SVGProps<SVGSVGElement>): ReactElement;
}

declare module '*.svg?url' {
  const content: any;
  export default content;
}

import { cloneElement, useState } from 'react';

export type Element =
  | ((state: boolean) => React.ReactElement)
  | React.ReactElement;
const useHover = (element: Element): [React.ReactElement, boolean] => {
  const [state, setState] = useState(false);
  const onMouseEnter = (originalOnMouseEnter?: any) => (event: any) => {
    originalOnMouseEnter?.(event);
    setState(true);
  };

  const onMouseLeave = (originalOnMouseLeave?: any) => (event: any) => {
    originalOnMouseLeave?.(event);
    setState(false);
  };
  /* eslint-disable no-param-reassign */
  if (typeof element === 'function') {
    try {
      element = element(state);
    } catch (error) {
      console.log('Error executing element function:', error);
    }
  }
  /* eslint-enable no-param-reassign */

  const el = cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave),
  });
  return [el, state];
};

export default useHover;
import { useCallback, useEffect, useRef } from 'react';

export default function useMountedState(): () => boolean {
  // useRef 保存 mount 状态
  const mountedRef = useRef<boolean>(false);
  const get = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return get;
}

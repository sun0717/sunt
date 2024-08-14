import React, {
  CSSProperties,
  FC,
  ReactNode,
  forwardRef,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useStore from './useStore';
import { useTimer } from './useTimer';

import './index.less';

export type Position = 'top' | 'bottom';

export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];
  content: ReactNode | string;
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
}

/**
 * 核心：列表元素的增删改，然后用react-transition-group 加上过渡动画
 * 列表通过 createPortal 渲染到 body 下
 * 如何在 api 的方式来动态添加这个组件
 * arco design 等都是用重新渲染一个 root 的方式来做的，但是会报警告，不建议用
 * 通过 forwardRef + context 转发实现
 * 直接修改ref.current, 而不是用 useImperativeHandle 来修改
 * useImperative 的好处是可以在依赖数组改变的时候重新执行回调函数来修改 ref
 * 但坏处是它不是同步修改 ref 的，有的时候不太合适
 */
const MessageItem: FC<MessageProps> = (item) => {
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.onClose!,
  });

  return (
    <div
      className="message-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.content}
    </div>
  );
};

export interface MessageRef {
  add: (messageProps: MessageProps) => number;
  remove: (id: number) => void;
  update: (id: number, messageProps: MessageProps) => void;
  clearAll: () => void;
}

export const MessageProvider = forwardRef<MessageRef, {}>((props, ref) => {
  const { messageList, add, update, remove, clearAll } = useStore('top');

  if ('current' in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    };
  }

  const positions = Object.keys(messageList) as Position[];

  const messageWrapper = (
    <div className="message-wrapper">
      {positions.map((direction) => {
        return (
          <TransitionGroup
            className={`message-wrapper-${direction}`}
            key={direction}
          >
            {messageList[direction].map((item) => {
              return (
                <CSSTransition
                  key={item.id}
                  timeout={1000}
                  classNames="message"
                >
                  <MessageItem onClose={remove} {...item}></MessageItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        );
      })}
    </div>
  );

  const el = useMemo(() => {
    const el = document.createElement('div');
    el.className = `wrapper`;

    document.body.appendChild(el);
    return el;
  }, []);

  return createPortal(messageWrapper, el);
});

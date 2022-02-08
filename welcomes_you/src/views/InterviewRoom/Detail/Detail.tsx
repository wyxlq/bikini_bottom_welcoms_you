import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import * as monaco from 'monaco-editor';
import { WSTypes } from './constants';
import { getBuffer, useCodeFromRemote, useWebSocket } from './webscoket';

import styles from './Detail.module.scss';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]) as any;
}

const InterviewRoomDetail = () => {
  const editorRoot = useRef<HTMLDivElement>(null);
  const edtorInstance = useRef<monaco.editor.ITextModel | null>(null);
  const query = useQuery();
  const socket = useWebSocket(query.get('id'));
  const socketRef = useRef(socket);
  socketRef.current = socket;
  const code = useCodeFromRemote(socket);
  const codeRef = useRef(code);
  codeRef.current = code;
  useEffect(() => {
    if (editorRoot.current) {
      const core = monaco.editor.create(editorRoot.current, {
        value: codeRef.current,
        language: 'javascript',
      });
      edtorInstance.current = core?.getModel?.();
    }
    const instance = edtorInstance.current;
    instance?.onDidChangeContent(e => {
      const val = instance.getLinesContent().join('\n');
      if (codeRef.current !== val) {
        socketRef.current?.send(getBuffer(WSTypes.setValue, val));
      }
    });
    return () => {
      if (instance) {
        instance.dispose();
      }
    };
  }, []);
  useEffect(() => {
    if (edtorInstance.current) {
      const val = edtorInstance.current.getLinesContent().join('\n');
      if (val !== code) {
        edtorInstance.current.setValue(code);
      }
    }
  }, [code]);
  return (
    <div className={styles['InterviewRoomDetail']}>
      <div className={styles.editor} ref={editorRoot} />
    </div>
  );
};

export default InterviewRoomDetail;

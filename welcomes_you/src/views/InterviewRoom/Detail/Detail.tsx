import React, { useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router';
import { Button } from 'antd';
import * as monaco from 'monaco-editor';
import { WSTypes } from './constants';
import { getBuffer, useCodeFromRemote, useWebSocket } from './webscoket';

import styles from './Detail.module.scss';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]) as any;
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
  const submitHandler = async () => {
    const resp = await fetch('/api/updateInterview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: query.get('id'),
        value: code,
      }),
    });
    console.log(resp);
  };
  return (
    <div className={styles['InterviewRoomDetail']}>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>BIKINI BOTTOM</div>
          <div className={styles.description}>
            一个<span className={styles.em}> 轻量级 </span>的
            <span className={styles.em}> 实时共享 </span>笔试系统
          </div>
        </div>
        <div className={styles.editorContainer}>
          <div className={styles.editor} ref={editorRoot} />
          <div className={styles.buttonContainer}>
            <Button type="primary" onClick={submitHandler}>
              提交
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoomDetail;

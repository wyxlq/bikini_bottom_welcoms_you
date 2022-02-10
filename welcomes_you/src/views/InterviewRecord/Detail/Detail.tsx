import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { Button } from 'antd';
import * as monaco from 'monaco-editor';
import { WSTypes } from './constants';
import { getBuffer, useCodeFromRemote, useWebSocket } from './webscoket';

import styles from './Detail.module.scss';
import './Monaco.scss';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]) as any;
}

const InterviewRoomDetail = () => {
  const [errAlertVisible, setErrAlertVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
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
    const res = await resp.json();
    if (!res.success) {
      setErrAlertVisible(true);
      setErrMsg(res.message);
    } else {
    }
  };
  return (
    <div className={styles['InterviewRoomDetail']}>
      <div className={styles.backgroundContainer}>
        <div className={styles.background}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.editorContainer}>
          <div className={styles.editor} ref={editorRoot} />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="primary" onClick={submitHandler}>
            提交
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewRoomDetail;

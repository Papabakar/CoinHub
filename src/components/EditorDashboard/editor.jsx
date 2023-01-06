import EditorJS from '@editorjs/editorjs'; 
import { useLayoutEffect } from 'react';
import editorConfig, { editorSave } from './editor.configuration';
import './editor.css'


let editor;

const Editor = (props) => {

    let subscribed = true
    useLayoutEffect(() => {

        if(subscribed){
            editor = new EditorJS(editorConfig)
        }

        return () => {
            subscribed = false
        };
    }, [subscribed])

    // eslint-disable-next-line no-unused-vars

   return( 
        <div className='text-white w-full flex mt-10 flex-col justify-center items-center overflow-x-hidden'>
            <div id='editor' className=""></div>
        </div>
    )
}

export async function saveEditorData() {
    const outputData = await editor
      .save()
      .catch((error) => {
        console.log("Saving failed:", error);
      });
  
      console.log(outputData)
  
      return outputData;
  };

export default Editor
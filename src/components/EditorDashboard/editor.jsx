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
            <div id='editor' className="pb-20"></div>

            {/* <div className="fixed bottom-5 right-5 w-fit">
                <button className='text-white primary-setting  text-xl flex'>
                    <i className='bx bxs-cog'></i>
                </button>
                
                
                <div className="absolute -translate-x-1/2 left-0 bottom-0">
                    <button className='text-white primary-setting fixed bottom-5 right-5 text-xl flex'>
                        <i className='bx bxs-cog'></i>
                    </button>
                </div>

                <div className="absolute -translate-x-1/2 right-0 top-0">
                    <button className='text-white primary-setting fixed bottom-5 right-5 text-xl flex'>
                        <i className='bx bxs-cog'></i>
                    </button>
                </div>
            </div> */}

        </div>
    )
}

export default Editor
import Header from '@editorjs/header'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image';
import EditorJS from '@editorjs/editorjs'; 
import { useEffect } from 'react';


const SimpleImage = require('@editorjs/simple-image');

const editorConfig = {
        holder: 'editor', 
        defaultBlock : 'header',
        placeholder: 'Type something...',
        // autofocus: true,
        tools: {
            header: {
              class: Header,
              config: {
                placeholder: 'Enter Title',
                levels: [1, 2, 3, 4],
                shortcut: 'CMD+H',
                defaultLevel: 3,
              },
              inlineToolbar: true
            },
            linkTool: {
                class: LinkTool,
                config: {
                  endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                }
            },
            image: {
                class: ImageTool,
                inlineToolbar: ['link'],
                config: {
                  /**
                   * Custom uploader
                   */
                  uploader: {
                    /**
                     * Upload file to the server and return an uploaded image data
                     * @param {File} file - file selected from the device or pasted by drag-n-drop
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByFile(file){
                      // your own uploading logic here
                      console.log(file)
                    },
          
                    /**
                     * Send URL-string to the server. Backend should load image by this URL and return an uploaded image data
                     * @param {string} url - pasted image URL
                     * @return {Promise.<{success, file: {url}}>}
                     */
                    uploadByUrl(url){
                      // your ajax request for uploading
                      console.log(url)
                    }
                  }
                }
              }
          
        },
        onReady: () => {
            console.log('editor ready')
        },
}

export const savedata = (editor) => {
    editor.save().then((outputData) => {
      console.log('Article data:', outputData)
    }).catch((error) => {
      console.log('Saving failed:', error)
    })
  }


export const editorSave = (editor) => {
      editor.save().then((outputData) => {
          console.log('Article data:' , outputData)
      }).catch((error) => {
          console.log('Saving failed:', error)
      })
  }

export default editorConfig
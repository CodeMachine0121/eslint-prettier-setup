import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default (()=>{
  return defineConfig({
    plugins:[vue(), eslintPlugin()],
  })
})

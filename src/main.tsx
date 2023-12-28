import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

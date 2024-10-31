import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';


createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-wbtfmg4pnvbqhc7j.us.auth0.com"
  clientId="SZXJz4U7zPfCdQ1L9lowl3vBISiRdhRI"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
    <App />
    </Auth0Provider>,
)

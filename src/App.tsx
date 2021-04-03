import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import { GenresProvider } from './hooks/useGenres';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenresProvider>
        <SideBar />
        <Content />
      </GenresProvider>
    </div>
  )
}